import sys
input = sys.stdin.readline

N = int(input())
array = [input().strip() for _ in range(N)]

array=set(array)
array=list(array)
# 길이가 짧은 것부터, 길이가 같으면 사전 순으로 정렬
array.sort(key = lambda x: (len(x), x))

for i in range(len(array)):
    print(array[i])
