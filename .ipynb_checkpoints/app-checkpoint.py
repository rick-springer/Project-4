from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        print(request.form.get('survey'))
    return render_template('index.html')

@app.route('/results/<string:userinfo>', methods=['POST'])
def ProcessUserinfo(userinfo):
    userinfo=json.loads(userinfo)
    surveydata=userinfo
    print()
    print(surveydata)
    print()
    return('/')

if __name__ == '__main__':
    app.run()