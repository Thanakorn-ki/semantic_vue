# semantic_vue

> A Vue.js project


# main.js

import '../node_modules/semantic-ui/dist/semantic.min.css'

import 'semantic'

#file .vue

/*globals $:false */


sudo npm install semantic-ui --save

> How to Setup jquery open build file build/webpack.dev.conf.js

copy to build/webpack.dev.conf.js<br>
 new webpack.ProvidePlugin({ <br>
  $: "jquery", <br>
  jQuery: "jquery",  <br>
  "window.jQuery": "jquery", <br>
  "semantic-ui": "semantic-ui", <br>
  semantic: "semantic-ui" <br>
  })

Goto build/webpack.base.conf.js

Copy to in alias is json

'semantic': path.resolve(__dirname,'../node_modules/semantic-ui/dist/semantic.min.js')


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
