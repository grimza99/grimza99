# 7개의 수 입력받기
numbers = list(map(int, input().split()))

# 최대값, 최소값 계산
maximum = max(numbers)
minimum = min(numbers)

# 출력
print(maximum, minimum)
