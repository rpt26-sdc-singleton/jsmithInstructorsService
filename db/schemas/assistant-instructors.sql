CREATE TABLE assistant_instructors (
  instructor_id integer REFERENCES instructors(id),
  course_id integer REFERENCES courses(id),
  PRIMARY KEY (instructor_id, course_id)
);
