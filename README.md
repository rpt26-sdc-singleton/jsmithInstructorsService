# Project Name

> Ingenuity

## Related Projects

  - https://github.com/Ingenuity-rpt26/shane-service-about
  - https://github.com/Ingenuity-rpt26/vinayService1
  - https://github.com/Ingenuity-rpt26/jsmithSyllabusesService
  - https://github.com/Ingenuity-rpt26/Grant--Service_1
  - https://github.com/Ingenuity-rpt26/vinayService2
  - https://github.com/Ingenuity-rpt26/shane-service-summary
  - https://github.com/Ingenuity-rpt26/vinayService2
  - https://github.com/Ingenuity-rpt26/jsmithService1
  - https://github.com/Ingenuity-rpt26/jsmithInstructorsService

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
> npm install

Ensure database is running and address and port are correct in ./.env

> npm run seed

## Requirements

Instructors relies on Images service for data

Ensure URL's are correct in ./client/components/instructors/instructors.jsx for instructors service to render images properly.


## Development

Each course has a syllabus.  Each syllabus has one or more weeks.  Each week has one or more lessons.  Each lesson has one or more videos, readings, and exercises.

>The component flow goes...

>Syllabus => Weeks =>  Week => Lesson =>

>        Videos => Video
>        Readings => Reading
>        Exercises => Exercise


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

