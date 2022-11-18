from multiprocessing.spawn import import_main_path
import sys
input = sys.stdin.readline

def merge(S, low, mid, high):
    T = [0] * (high - low + 1) 
    i, j, k = low, mid + 1, 0 
    while i <= mid and j <= high:
        if S[i] < S[j]:
            T[k], i, k = S[i], i+1, k+1
        else:
            T[k], j, k = S[j], j+1, k+1
    while i <= mid:
        T[k], i, k = S[i], i+1, k+1
    while j <= high:
        T[k], j, k = S[j], j+1, k+1
        
    for k in range(len(T)): 
        S[low + k] = T[k]


def mergesort(S, low, high): 
    if low < high:
        mid = (low + high)//2
        mergesort(S, low, mid)
        mergesort(S, mid + 1, high)
        merge(S, low, mid, high)


S = [27, 10, 12, 20, 25, 13, 15, 22]
mergesort(S, 0, len(S) - 1)
print(S)

