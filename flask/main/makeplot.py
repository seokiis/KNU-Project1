
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from pandas.plotting import parallel_coordinates
# draw plot
# https://plotly.com/python/parallel-coordinates-plot/
import plotly.express as px         # pip install plotly
import plotly
import os
from flask import Blueprint, current_app

'''
@ 모델을 돌린 후 나온 결과(json 형식) 파일을 plot 형태로 변환하여 저장
@ dic_result : json list
'''


def searchindex(parameter):
    array2 = []
    result = []
    for i in range(len(parameter)):
        for j in parameter[i]['observation']:
            x = parameter[i]['observation'][j][0]['value']
            array2.append([x, i])
    array2.sort(reverse=True)
    for i in range(len(array2)):
        if i >= 10:
            break
        result.append(array2[i][1])
    print(result)
    return result


def makeplot(dic_result, id):
    print(id)
    # datalist = [[("name","value"),("name","value")]]
    datalist = []
    index = searchindex(dic_result)
    print(index)
    print('*** searchindex 성공 ***')

    for i in range(len(dic_result)):
        if i in index:
            p_combination = []
            for p in dic_result[i]["assignments"]:
                p_combination.append((p["name"], p["value"]))
            for p in dic_result[i]["observation"]["metrics"]:
                p_combination.append((p["name"], p["value"]))
            datalist.append(p_combination)

    print(datalist)
    print('***여기까지 성공***')

    # get column, value from datalist
    col = []
    val = []
    for i in datalist:
        subval = []
        for j in i:
            if j[0] not in col:
                col.append(j[0])
            if type(j[1]) == str and '.' in j[1]:     # string to double
                subval.append(float(j[1]))
            else:
                subval.append(j[1])
        val.append(subval)
    print('********여기까지 성공********')
    # make Validation-accuracy comes first
    col.reverse()
    for i in val:
        i.reverse()

    # make dataframe
    df = pd.DataFrame(data=val, columns=col)
    csvname = os.path.join(current_app.config['PLOT_FOLDER'], id+'_plot.csv')
    df.to_csv(csvname, mode='w')

    print(df)

    fig = px.parallel_coordinates(df, color="Validation-accuracy",
                                  color_continuous_scale=px.colors.diverging.Tealrose, color_continuous_midpoint=0.1)
    print('************fig 생성*************')
    # fig.show()
    # save image by .html
    plotname = os.path.join(current_app.config['PLOT_FOLDER'], id+'_plot.html')
    plotly.offline.plot(fig, filename=plotname)
    print('**************make plot 종료**************')
    return id+'_plot'
