CREATE TABLE primary_instructors (
  instructor_id integer REFERENCES instructors(id),
  course_id integer REFERENCES courses(id) UNIQUE,
  PRIMARY KEY (instructor_id, course_id)
);
