from random import randint

with open('./db/data/primary-instructors.sql', mode='w') as f:
  print('INSERT INTO primary_instructors (instructor_id, course_id) VALUES', file=f)
with open('./db/data/primary-instructors.sql', mode='a') as f:
  print(',\n'.join([f'({randint(1,4000001)}, {i+1})' for i in range(10000000)]), file=f)
  print(';', file=f)
