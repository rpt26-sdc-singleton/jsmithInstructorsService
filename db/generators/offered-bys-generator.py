# for this one we'll just use a join table to identify which offered by of the six.
from random import randint

with open('./db/data/offered-bys', mode='a') as f:
  print('\n'.join([f'{i+1} {randint(1,7)}' for i in range(10000000)]), file=f)
