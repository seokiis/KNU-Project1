import sys
input = sys.stdin.readline

''' 
4개로 쪼개야 한다
트로미노: 정사각형 3개로 구성된 퍼즐 조각
𝑁×𝑁보드가주어질때,트로미노로모든빈칸을덮을수있는가?
'''
def tromino(board, srow, scol, size, xrow, xcol):
    if (size == 1): 
        return
    
    else:
        mrow = srow + (size // 2) 
        mcol = scol + (size // 2) 
        xrow1, xcol1 = mrow - 1, mcol -1 
        xrow2, xcol2 = mrow - 1, mcol 
        xrow3, xcol3 = mrow, mcol - 1 
        xrow4, xcol4 = mrow, mcol 

    if (xrow < mrow and xcol < mcol):  # (xrow < 2 and xcol < 2)
  fillCenterExcept(board, mrow, mcol, 1)
  xrow1, xcol1 = xrow, xcol
# 2사분면  
elif (xrow < mrow and xcol >= mcol):  # (xrow < 2 and xcol >= 2)
  fillCenterExcept(board, mrow, mcol, 2)
  xrow2, xcol2 = xrow, xcol
# 3사분면
elif (xrow >= mrow and xcol < mcol):  # (xrow >= 2 and xcol < 2)
  fillCenterExcept(board, mrow, mcol, 3)
  xrow3, xcol3 = xrow, xcol
# 4사분면  
elif (xrow >= mrow and xcol >= mcol):  # (xrow >= 2 and xcol >= 2)
  fillCenterExcept(board, mrow, mcol, 4)
  xrow4, xcol4 = xrow, xcol
  
tromino(board, srow, scol, size // 2, xrow1, xcol1) 
tromino(board, srow, mcol, size // 2, xrow2, xcol2)
tromino(board, mrow, scol, size // 2, xrow3, xcol3)
tromino(board, mrow, mcol, size // 2, xrow4, xcol4)