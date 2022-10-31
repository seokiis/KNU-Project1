import json
import numpy as np

with open('./flask/parameter/sion.json') as f:
    parameter = json.load(f)
print(json.dumps(parameter, indent='\t'))   #json내용 출력
print(len(parameter['params'])) #params의 개수
par_name = []
par_value = []
for i in range(len(parameter['params'])):
    par_name.append(str(parameter['params'][i]['name']))
    par_value.append(str(parameter['params'][i]['value']).split(',')) #value 값을 ,없이 가져옴 (string 배열로)
    
for i in range(len(par_name)):
    for j in range(len(par_value[i])):
    # for j in range(3):
        print(par_name[i] + '    ' + par_value[i][j])
