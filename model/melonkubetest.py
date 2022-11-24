

from __future__ import absolute_import, division, print_function, unicode_literals

import tensorflow as tf
import numpy as np
from datetime import datetime, timezone
import argparse

#hyperparameter
parser = argparse.ArgumentParser()
parser.add_argument('--learning_rate', required=True, type = float)
parser.add_argument('--Dropout', required=True, type = float)
args = parser.parse_args()

dropout = float(args.Dropout)
learning_rate = float(args.learning_rate)
def train():
    print("TensorFlow version: ", tf.__version__)

    mnist = tf.keras.datasets.mnist

    (x_train, y_train), (x_test, y_test) = mnist.load_data()
    x_train, x_test = x_train / 255.0, x_test / 255.0

    # Reserve 10,000 samples for validation
    x_val = x_train[-10000:]
    y_val = y_train[-10000:]
    x_train = x_train[:-10000]
    y_train = y_train[:-10000]

    model = tf.keras.models.Sequential([
      tf.keras.layers.Flatten(input_shape=(28, 28)),
      tf.keras.layers.Dense(128, activation='relu'),
      tf.keras.layers.Dropout(dropout),
      tf.keras.layers.Dense(10, activation='softmax')
    ])

    model.compile(optimizer=tf.keras.optimizers.SGD(learning_rate=learning_rate),
                  loss='sparse_categorical_crossentropy',
                  metrics=['acc'])

    print("Training...")

    #katib_metric_log_callback = KatibMetricLog()
    training_history = model.fit(x_train, y_train, batch_size=64, epochs=10,
                                 validation_data=(x_val, y_val))

    print("\\ntraining_history:", training_history.history)

    # Evaluate the model on the test data using `evaluate`
    print('\\n# Evaluate on test data')
    results = model.evaluate(x_test, y_test, batch_size=128)
    print('test loss, test acc:', results)


if __name__ == '__main__':
    train()