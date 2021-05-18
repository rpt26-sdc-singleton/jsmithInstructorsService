from random import randint
from random import sample

to_generate = 10000000

# broken into a ten part series
for j in range(10):
  with open(f'./db/data/assistant-instructors{j:03}.sql', mode='w') as f:
    print('INSERT INTO assistant_instructors (instructor_id, course_id) VALUES', file=f)
  with open(f'./db/data/assistant-instructors{j:03}.sql', mode='a') as f:
    print(',\n'.join([',\n'.join([f'({i+1}, {j+1})' for j in sample(range(to_generate),randint(1,4))]) for i in range(j * to_generate // 10, (j + 1) * to_generate // 10)]), file=f)
    print(';', file=f)
