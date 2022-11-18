import sys
input = sys.stdin.readline

idx = -1
def get_next(s):
    global idx
    idx += 1
    return s[idx]

def quadtree(i, j, n, s, T):
    head = get_next(s) #입력값을 하나씩 가져오기

    # 박스 채우기. W이면 0으로 채우기, B이면 1로 채우기
    if head == "W" or head == "B":
        for r in range(i, i + n): #행
            for c in range(j, j + n): #열
                T[r][c] = 0 if head == "W" else 1
    else: # Q를 만나면 4개로 나눈다
        m = n // 2
        quadtree(i, j, m, s, T)
        quadtree(i, j+m, m, s, T)
        quadtree(i+m, j, m, s, T)
        quadtree(i+m, j+m, m, s, T)

n = int(input())
s = list(map(str, input().strip()))

answer = [[0]*n for _ in range(n)]
quadtree(0, 0, n, s, answer)
for i in range(n):
    for j in range(n):
        print(answer[i][j], end = "")
    print("")