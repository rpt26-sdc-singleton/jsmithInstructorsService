from random import randint

to_generate = 10000000

with open('./db/data/assistant-instructors.sql', mode='w') as f:
  print('INSERT INTO assistant_instructors (instructor_id, course_id) VALUES', file=f)

with open('./db/data/assistant-instructors.sql', mode='a') as f:
  print(',\n'.join([',\n'.join([f'({i+1}, {randint(1,to_generate+1)})' for _ in range(randint(1,4))]) for i in range(to_generate)]), file=f)
  print(';', file=f)
