with open('./db/data/courses.sql', mode='w') as f:
  print('INSERT INTO courses (id) VALUES', file=f)
  print(',\n'.join([f'({i+1})' for i in range(10000000)]), file=f)
  print(';', file=f)
