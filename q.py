from flask import Flask
from flask import request
from questions import Form
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
from sklearn.cluster import KMeans
import numpy as np
import pandas as pd
import tensorflow as tf
import keras_tuner as kt
from tensorflow import keras
import pickle

# def load_models():
#     model = keras.models.load_model('heartd')
    
def yesno(outoutputput):
    if outoutputput > 0.5 :
        return "Heart disease very likely. It's a good idea to contact your doctor soon."
    else :
        return "Heart disease unlikely. Keep up the good work!"
    

app = Flask(__name__)


@app.route("/", methods=('GET',))
def form():
    form = Demo(title="Are you at risk for heart disease?", theme="default", platform="jquery")
    html = form.render_html()
    return html

@app.route("/", methods=('GET', 'POST',))
def form_post():
    form_data = request.get_json()
    print(form_data)
    with open("heartX.txt", "rb") as fp:
        heart_df_X = pickle.load(fp)
    heart_df_X = pd.DataFrame(heart_df_X)
    x = pd.DataFrame(form_data, index=[0])
    print(x.columns)
    x = pd.get_dummies(data=x, columns=['Smoking', 'AlcoholDrinking', 'Stroke', 
       'DiffWalking', 'Sex', 'AgeCategory', 'Race', 'Diabetic',
       'PhysicalActivity', 'GenHealth', 'Asthma', 'KidneyDisease',
       'SkinCancer'])
    x = x.reindex(columns = heart_df_X.columns, fill_value=0)
    x = x.values
    x = x.astype('uint8')
    model = keras.models.load_model('heartd')
    model.predict(x)
    output = model.predict(x)
    outoutputput = output[0][0]
    return yesno(outoutputput)
    # print(form_data)
    # return form_data

# @app.route("/", methods=('GET', 'POST'))
# def predict():
#     form_data = form_post()
#     with open("heartX.txt", "rb") as fp:
#         heart_df_X = pickle.load(fp)
#     pd.DataFrame(heart_df_X)
#     x = pd.DataFrame(form_data, index=[0])
#     x = pd.get_dummies(data=x, columns=['Smoking', 'AlcoholDrinking', 'Stroke', 
#        'DiffWalking', 'Sex', 'AgeCategory', 'Race', 'Diabetic',
#        'PhysicalActivity', 'GenHealth', 'Asthma', 'KidneyDisease',
#        'SkinCancer'])
#     x = x.reindex(columns = heart_df_X.columns, fill_value=0)
#     x = x.values
#     x = x.astype('uint8')
#     model = load_models()
#     model.predict(x)
#     output = model.predict(x)
#     outoutputput = output[0][0]
#     return yesno(outoutputput)

@app.route("/thanks", methods=('GET', 'POST',))
def thanks():
    form_data = request.get_json()
    print(form_data)
    with open("heartX.txt", "rb") as fp:
        heart_df_X = pickle.load(fp)
    heart_df_X = pd.DataFrame(heart_df_X)
    x = pd.DataFrame(form_data, index=[0])
    print(x.columns)
    x = pd.get_dummies(data=x, columns=['Smoking', 'AlcoholDrinking', 'Stroke', 
       'DiffWalking', 'Sex', 'AgeCategory', 'Race', 'Diabetic',
       'PhysicalActivity', 'GenHealth', 'Asthma', 'KidneyDisease',
       'SkinCancer'])
    x = x.reindex(columns = heart_df_X.columns, fill_value=0)
    x = x.values
    x = x.astype('uint8')
    model = load_models()
    model.predict(x)
    output = model.predict(x)
    outoutputput = output[0][0]
    return yesno(outoutputput)


json = open("q.json").read()
Demo = Form.from_json(json, "Demo")

if __name__ == "__main__":
    app.run(debug=True)