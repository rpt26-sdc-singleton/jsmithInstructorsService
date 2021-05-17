# ROUTES
- [create testimonial](#create-testimonial)
- [create instructor](#create-instructor)
- [create offeredby](#create-offeredby)
- [read testimonial](#read-testimonial)
- [read instructor](#read-instructor)
- [read offeredby](#read-offeredby)
- [update testimonial](#create-testimonial)
- [update instructor](#create-instructor)
- [update offeredby](#create-offeredby)
- [delete testimonial](#delete-testimonial)
- [delete instructor](#delete-instructor)
- [delete offeredby](#delete-offeredby)

# create testimonial
> - route POST /api/testimonial
> - Request body example:
```JSON
{
    "name":"Barack O.",
    "text":"Forty-third posted testimonial! (this information is definitely made up)"
}
```
> - Response: 201 if created successfully
> - Response body: ID number of new record
# create instructor
> - route POST /api/instructor
> - Request body example:
```JSON
{
    "firstName": "George",
    "middleInitial": "WEDNESDAY",
    "lastName": "Carver",
    "academicTitle": "PhD",
    "title": "Professor",
    "organization": "JIF",
    "courses": [
      {
        "courseNumber": 1,
        "isPrimaryInstructor": true
      },
      {
        "courseNumber": 2,
        "isPrimaryInstructor": false
      },
      {
        "courseNumber": 3,
        "isPrimaryInstructor": false
      }
    ],
    "instructorAverageRating": 4,
    "numberOfRatings": 4
}
```
> - Response: 201 if created successfully
> - Response body: ID number of new record
# create offeredby
> - route POST /api/crud/offeredBy
> - Request body example:
```JSON
{
    "name": "UVU",
    "description": "Utah Valley University"
}
```
> - Response: 201 if created successfully
> - Response body: ID number of new record
# read testimonial
> - route GET /api/testimonial/:id
> - No body on request
> - Response: 200 if record exists, 404 if not found.
> - Response body example:
```JSON
{
    "_id": "60933769d7224e0ad3e05308",
    "id": 10,
    "name": "Barack O.",
    "testimonialText": "Forty-third posted testimonial! (this information is definitely made up)",
    "__v": 0
}
```
# read instructor
> - route GET /api/instructor/:id
> - No body on request
> - Response: 200 if record exists, 404 if not found.
> - Response body example:
```JSON
{
    "_id": "609331afc269a6090d1e5827",
    "id": 34,
    "firstName": "Rosemary",
    "middleInitial": "B",
    "lastName": "Upton",
    "academicTitle": "Professor",
    "title": "Future Program Analyst",
    "organization": "Saint Mary's College of California",
    "learners": 3629,
    "courses": [
        {
            "_id": "609331afc269a6090d1e5828",
            "courseNumber": 54,
            "isPrimaryInstructor": true
        },
        {
            "_id": "609331afc269a6090d1e5829",
            "courseNumber": 79,
            "isPrimaryInstructor": true
        },
        {
            "_id": "609331afc269a6090d1e582a",
            "courseNumber": 94,
            "isPrimaryInstructor": true
        }
    ],
    "instructorAverageRating": "4.7",
    "numberOfRatings": 8045,
    "__v": 0
}
```
# read offeredby
> - route GET /api/crud/offeredby/:id
> - No body on request
> - Response: 200 if record exists, 404 if not found.
> - Response body example:
```JSON
{
    "_id": "609331af8e519a090fb31896",
    "id": 62,
    "name": "University of Illinois at Urbana-Champaign",
    "description": "The University of Illinois at Urbana-Champaign is a world leader in research, teaching and public engagement, distinguished by the breadth of its programs, broad academic excellence, and internationally renowned faculty and alumni. Illinois serves the world by creating knowledge, preparing students for lives of impact, and finding solutions to critical societal needs.",
    "__v": 0
}
```
# update testimonial
> - route PUT /api/testimonial/:id
> - Request body example:
```JSON
{
    "name":"UPDATED Barack O.",
    "text":"UPDATED Forty-third posted testimonial! (this information is definitely made up)"
}
```
> - Response: 204 if updated successfully
# update instructor
> - route PUT /api/instructor/:id
> - Request body example:
```JSON
{
    "firstName": "UPDATED George",
    "middleInitial": "UPDATED WEDNESDAY",
    "lastName": "UPDATED Carver",
    "academicTitle": "UPDATED PhD",
    "title": "UPDATED Professor",
    "organization": "UPDATED JIF",
    "courses": [
      {
        "courseNumber": 1000,
        "isPrimaryInstructor": false
      },
      {
        "courseNumber": 2000,
        "isPrimaryInstructor": true
      },
      {
        "courseNumber": 3000,
        "isPrimaryInstructor": true
      }
    ],
    "instructorAverageRating": 4000,
    "numberOfRatings": 4000
}
```
> - Response: 204 if updated successfully
# update offeredby
> - route PUT /api/crud/offeredby/:id
> - Request body example:
```JSON
{
    "name": "UPDATED UVU",
    "description": "UPDATED Utah Valley University"
}
```
> - Response: 204 if updated successfully
# delete testimonial
> - route DELETE /api/testimonial/:id
> - No body
> - Response: 204 if deleted successfully
# delete instructor
> - route DELETE /api/instructor/:id
> - No body
> - Response: 204 if deleted successfully
# delete offeredby
> - route DELETE /api/crud/offeredby/:id
> - No body
> - Response: 204 if deleted successfully
