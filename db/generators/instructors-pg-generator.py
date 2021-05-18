from random import choice
from random import randint
from faker import Faker
fake = Faker()

schools = [
    'Alfred University',
    'Baylor University',
    'Centenary University',
    'Dallas Christian College',
    'East Carolina University',
    'Farmingdale State College',
    'Georgia Institute of Technology-Main Campus',
    'Hofstra University',
    'Indiana Institute of Technology',
    'Jewish Theological Seminary of America',
    'Keiser University-Ft Lauderdale',
    'Lewis University',
    'Marian University',
    'Northwestern State University of Louisiana',
    'Ohio State University',
    'Pacific Islands University',
    'Queens University of Charlotte',
    'Radford University',
    'Saint Mary\'\'s College of California',
    'Toccoa Falls College',
    'University of Central Arkansas',
    'Vincennes University',
    'Wright State University',
    'Xavier University',
    'Youngstown State University',
    'Zaytuna College',
  ]

initials = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

titles = ['Instructor','Associate Professor','Professor','PhD']

first_names = [fake.first_name() for _ in range(97)]
last_names = [fake.last_name() for _ in range(113)]
jobs = [fake.profile()["job"].replace('\'', '\'\'') for _ in range(139)]
random_initials = [choice(initials) for _ in range(151)]
random_titles = [choice(titles) for _ in range(29)]
random_schools = [choice(schools) for _ in range(71)]

# postgres might have trouble handling the file if it's too large
# let's load these guys in a series of segments!


for j in range(10):
  with open(f'./db/data/instructors{j:03}.sql', mode='w') as f:
    print('INSERT INTO instructors (id, first_name, middle_initial, last_name, academic_title, title, organization, learners, instructor_average_rating, number_of_ratings) VALUES', file=f)
  with open(f'./db/data/instructors{j:03}.sql', mode='a') as f:
    print(',\n'.join([f'({i+1+(j * 1000000)}, \'{first_names[(i+j)%97]}\', \'{random_initials[(i+j)%151]}\', \'{last_names[(i+j)%113]}\', \'{random_titles[(i+j)%29]}\', \'{jobs[(i+j)%139]}\', \'{random_schools[(i+j)%71]}\', {randint(0,5000)}, {(randint(39,50)/10):.1f}, {randint(0,10000)})' for i in range(1000000)]), file=f)
    print(';', file=f)

