from random import choice
from random import randint
from faker import Faker
fake = Faker()

names = [fake.name() for _ in range(347)]
openings = [fake.paragraph(nb_sentences=4) for _ in range(157)]
closings = [fake.paragraph(nb_sentences=4) for _ in range(197)]

with open('./db/data/testimonials', mode='a') as f:
  print('\n'.join([f'{i+1} \"{names[i%347]}\" \"{openings[i%157]} {closings[i%197]}\"' for i in range(10000000)]), file=f)
