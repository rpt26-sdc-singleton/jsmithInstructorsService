CREATE TABLE instructors (
  id integer PRIMARY KEY,
  first_name text,
  middle_initial text,
  last_name text,
  academic_title text,
  title text,
  organization text,
  learners integer,
  instructor_average_rating numeric,
  number_of_ratings integer
);
