from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
import numpy as np
import pandas as pd
import io
import tensorflow as tf
import keras_tuner as kt
from tensorflow import keras

pickle_in = open('heartd.pickle','rb')
clf = pickle.load(pickle_in)