# SDN Screen

A minimal SDN screening web app built using React and Typescript.

SDN Screen takes in a person's full name, country, and year of birth and runs a check against the [Specially Designated Nationals (SDN)](https://ofac.treasury.gov/specially-designated-nationals-list-data-formats-data-schemas) list.

Possible results:

- Hit - displays if there any matches to full name, country, and date of birth in the SDN list
- Clear - displays if there are no matches in the SDN list

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [npm](http://npmjs.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jimietran/sdn-screen.git

# Go into the repository
$ cd sdn-screen

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Environment variables

This project supports environment variables and must be set in a .env file before using the application.

- `REACT_APP_API_KEY`
  - OFAC API key which can be obtained here: https://ofac-api.com/
