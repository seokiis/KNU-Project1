import sys
input = sys.stdin.readline
'''
while 1:
    a = input().strip()
    if a=='0':
        break
    if a==a[::-1]:
        print('yes')
    else:
        print('no')
'''
# 펠린드롬수인지 판별
def is_palindrome(n):
    s = str(n)
    return s == s[::-1] # 팰린드롬수이면 return 1

while True:
    n = int(input())
    if n == 0:
        break
    print("yes" if is_palindrome(n) else "no")
    
