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
        print(par_name[i] + ' ' + par_value[i][j])

# 앞으로 남은 것:
# 1. 파라미터가 숫자인지 아닌지 파악
# 2. 숫자라면, 정수인지 아닌지 파악
# 3. 정수면 정수인지 체크, 소수면 소수인지 체크 (소수점 . 기준으로 하면 될 듯)
