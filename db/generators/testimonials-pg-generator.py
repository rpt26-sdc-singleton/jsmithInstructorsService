from random import choice
from random import randint
from faker import Faker
fake = Faker()

names = [fake.name() for _ in range(347)]
openings = [fake.paragraph(nb_sentences=4) for _ in range(157)]
closings = [fake.paragraph(nb_sentences=4) for _ in range(197)]
to_generate = 100

# postgres might have trouble handling the file if it's too large
# let's load these guys in a series of segments!
# got error: out of memory

for j in range(10):
  with open(f'./db/data/testimonials{j:03}.sql', mode='w') as f:
    print('INSERT INTO testimonials (id, name, text) VALUES', file=f)
  with open(f'./db/data/testimonials{j:03}.sql', mode='a') as f:
    print(',\n'.join([f'({i+1}, \"{names[i%347]}\", \"{openings[i%157]} {closings[i%197]}\")' for i in range((to_generate//10)*j, (to_generate//10)*(j+1))]), file=f)
    print(';', file=f)
