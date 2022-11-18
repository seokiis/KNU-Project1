import sys
input = sys.stdin.readline

# 소수인지 판별
def is_prime(k):
    if k<2:
        return False
    else:
        for c in range(2, int(k**(0.5))+1):
            if k%c==0: # 약수가 존재한다면 소수가 아님
                return False
    return True

# 팰린드롬수인지 판별
def is_palindrome(n):
    s = str(n)
    return s == s[::-1]

# 소수인 팰린드롬의 수 중 가장 작은 수를 구하기
def solve(n): 
    while True:
        if is_prime(n) and is_palindrome(n):
            return n
        n += 1

N = int(input())
print(solve(N))