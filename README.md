# React Weather app

## This weathe forecast is built using Darksky API

clone the repo to a working directory:
```node

git clone https://github.com/lilcorey/reactDarksky.git
```

Note: to get the project to work include a .env file in root for your API keys( Darksky & Google Geocode ). Env variable names can be found in App.js and search_bar.js

To install dependencies:
```node

npm install
```

Then to run the project on a development server:
```node

npm start
```

Note: For demonstration purposes, enable CORS to query the DarkSky API. In development a proxy was used to bypass CORS, but for production the full URL was needed for the sake of time and scope of this project. Another way to access the API is to remove ${process.env.REACT_APP_WEATHER_URL} from `code`
