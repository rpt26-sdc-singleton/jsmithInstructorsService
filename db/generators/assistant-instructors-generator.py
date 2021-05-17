from random import randint

with open('./db/data/assistant-instructors', mode='a') as f:
  print('\n'.join([','.join([f'{i+1} {randint(1,10000001)}' for _ in range(randint(0,4))]) for i in range(10000000)]), file=f)
  # for i in range(1000):
