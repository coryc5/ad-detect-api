
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://www.standardjs.com)

# Ad Detection API
Monitor the ads delivered to your webpage and track visitors by their geolocation data.

### Install
```bash
npm install
npm start
npm run example
```

### Usage
Download the index.js file and add the following code to your HTML:
```html
<iframe srcdoc="<script src='index.js'></script>" style="width: 0px; height: 0px;"></iframe>
```

### Ad Detection Method
The API uses EasyList(https://easylist.adblockplus.org/en/), the filtering subscription that powers
AdBlock, to parse media on the page and filter out those that are not ads. The API also uses
ip-api(http://ip-api.com/) to gather geolocation data from your visitors.

These were shortcuts chosen due to the rapid nature of development. In production, this API would
seek to handle these features internally to allow for better customization and prevent a reliance
on external services.

### Database
After acquiring information on both the ads on the page and the visitor, the API stores this data
in a JSON object and posts it to a server where it is stored via MongoDB, a NoSQL database. MongoDB
was chosen over a SQL database due to the flexibility it provides, which is valuable during early
development stages when the fields of the data being stored are constantly being iterated upon. Upon
finalization of these choices, a SQL database would be a more powerful choice given its relational
nature.

### Tests
This API includes tests for the front-end functions and can be found in `test/index.html`.

Back-end functionality can be tested with `npm test`.

### Documentation
This API makes use of ES2015 features and thus transpiles them with Babel into ES5 to ensure browser
compatibility. Webpack is used to execute the Babel transpiling and if changes are made to any
functions it is important that code be transpiled again to incorporate the changes. This can be done
automatically by executing `webpack -w` in the terminal and having Webpack rebundle upon change.
The final front-end script is outputted in `index.js`

Likewise, upon adding front-end tests in `test.js`, this script must also be transpiled into ES5.
Running `webpack -w` inside of `test/` will watch for updates and transpile automatically upon change.
