import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from pandas.plotting import parallel_coordinates
from flask import Blueprint, request, jsonify, Response, current_app

blue_pyplot = Blueprint("pyplot", __name__, url_prefix='/pyplot')

def makeplot(dic_result):

    # get value from dic_result (parameter names, value)
    # datalist = [[("name","value"),("name","value")]]
    datalist = []

    # get column, value from dic_result (parameter names, value)
    for dic in dic_result:
        p_combination = []
        for p in dic["assignments"]:
            p_combination.append((p["name"], p["value"]))
        for p in dic["observation"]["metrics"]:
            p_combination.append((p["name"], p["value"]))
        datalist.append(p_combination)

    # get column, value from datalist
    col = []
    val = []
    index = 0
    for i in datalist:
        subval = []
        for j in i:
            if j[0] not in col:
                col.append(j[0])
            if type(j[1])==str and '.' in j[1]:     # string to double
                subval.append(float(j[1]))
            else:
                subval.append(j[1])
        subval.append(index)                        # update index for graph
        index += 1
        val.append(subval)
    col.append('index')                             # append index col

    # make Validation-accuract comes first
    col.reverse()
    for i in val:
        i.reverse()

    # make dataframe
    df = pd.DataFrame(data=val, columns=col)
    
    print(df)
    parallel_coordinates(df,class_column='index',color='r')

    # text
    '''for c in range (1,len(col)):
        for v in range(0, len(df)):
            plt.text(col[c],df.loc[v][col[c]],df.loc[v][col[c]])'''
    plt.text(df.iloc[0,0],df.loc[0]['Validation-accuracy'],df.loc[0]['Validation-accuracy'])
    plt.text(df.iloc[1,0],df.loc[0]['Validation-accuracy'],df.loc[0]['Validation-accuracy'])
    ##plt.text(col[1],0.5,'hello')
    
    plt.show()




# example
result_dic = [
    {
        "assignments": [
            {
                "name": "--learning_rate",
                "value": "0.08177734351368438"
            },
            {
                "name": "--dropout",
                "value": "0.4439382425122721"
            }
        ],
        "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9712
                    }
                ]
        }
    },
    {
        "assignments": [
            {
            "name": "--learning_rate",
            "value": "0.13167199355992532"
            },
            {
            "name": "--dropout",
            "value": "0.36691549333903695"
            }
        ],
        "observation": {
            "metrics": [
            {
                "name": "Validation-accuracy",
                "value": 0.9752
            }
            ]
        }
    }
]

'''
result_dic = { 
    "param1": {
        "assignments": [
            {
                "name": "--learning_rate",
                "value": "0.08177734351368438"
            },
            {
                "name": "--dropout",
                "value": "0.4439382425122721"
            }
        ],
        "observation": {
                "metrics": [
                    {
                        "name": "Validation-accuracy",
                        "value": 0.9712
                    }
                ]
        }
    },
    "param2": {
        "assignments": [
            {
            "name": "--learning_rate",
            "value": "0.13167199355992532"
            },
            {
            "name": "--dropout",
            "value": "0.36691549333903695"
            }
        ],
        "observation": {
            "metrics": [
            {
                "name": "Validation-accuracy",
                "value": 0.9752
            }
            ]
        }
    }
}

'''

if __name__ == '__main__':
    makeplot(result_dic)
