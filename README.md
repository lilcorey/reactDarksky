# React Weather app

## This weather forecast is built using Darksky API

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

Note: For demonstration purposes, enable CORS to query the DarkSky API if you are accessing http://coreyweather.surge.sh. In development a proxy was used to bypass CORS, but for production the full URL was needed for the sake of time and scope of this project. 

Note: If building the project locally, a way to access the API is to remove `${process.env.REACT_APP_WEATHER_URL}` from `const url = ...` in `./App.js`. When you `npm start` (assuming you've added your API keys) the proxy will still be in place to sucessfully reach the DarkSky API.
