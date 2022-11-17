
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from pandas.plotting import parallel_coordinates
# draw plot
# https://plotly.com/python/parallel-coordinates-plot/
import plotly.express as px         # pip install plotly
import plotly
import os


'''
@ 모델을 돌린 후 나온 결과(json 형식) 파일을 plot 형태로 변환하여 저장
@ dic_result : json list
'''
def makeplot(dic_result, id):

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
    
    # sort datalist by 'Validation-accuracy'  ######## -> sorted by kubernetes?
    #print(datalist)
    #sorted(datalist, key=lambda p: p[2][1])
    #print(datalist)

    # get column, value from datalist
    col = []
    val = []
    for i in datalist:
        subval = []
        for j in i:
            if j[0] not in col:
                col.append(j[0])
            if type(j[1])==str and '.' in j[1]:     # string to double
                subval.append(float(j[1]))
            else:
                subval.append(j[1])
        val.append(subval)

    # make Validation-accuracy comes first
    col.reverse()
    for i in val:
        i.reverse()

    # make dataframe
    df = pd.DataFrame(data=val, columns=col)
    print(df)


    fig = px.parallel_coordinates(df, color="Validation-accuracy", 
                             color_continuous_scale=px.colors.diverging.Tealrose,
                             color_continuous_midpoint=0.1)

    
    #fig.show()
    # save image by .html
    plotly.offline.plot(fig, filename='plot/'+id+'_plot.html')           

    return id+'_plot'
    

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
                    ,{
                        "name" : "index",
                        "value" : 1
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
            ,{
                        "name" : "index",
                        "value" : 2
                    }
            ]
        }
    },
    {
        "assignments": [
            {
            "name": "--learning_rate",
            "value": "0.04583595425426854"
            },
            {
            "name": "--dropout",
            "value": "0.1967271602243"
            }
        ],
        "observation": {
            "metrics": [
            {
                "name": "Validation-accuracy",
                "value": 0.9679
            },
            {
                        "name" : "index",
                        "value" : 3
                    }
            ]
        }
    },
    {
        "assignments": [
            {
            "name": "--learning_rate",
            "value": "0.09349862655663545"
            },
            {
            "name": "--dropout",
            "value": "0.2575218058968"
            }
        ],
        "observation": {
            "metrics": [
            {
                "name": "Validation-accuracy",
                "value": 0.9740
            },
            {
                        "name" : "index",
                        "value" : 4
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