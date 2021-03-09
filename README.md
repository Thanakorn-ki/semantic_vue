# test semantic-vue by thanakorn.k


## SET SEMANTIC

> File main.js

```
import '../node_modules/semantic-ui/dist/semantic.min.css'
import 'semantic'
```
> File *.vue

```
/*globals $*/
```
### How to Setup jquery open build file
> File /build/webpack.dev.conf.js copy that to plugins

```
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  'semantic-ui': 'semantic-ui',
  semantic: 'semantic-ui'
})
```
> File /build/webpack.base.conf.js copy to module.exports.resolve.alias

```
'semantic': path.resolve(__dirname,'../node_modules/semantic-ui/dist/semantic.min.js')
```
___

> A Vue.js project

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
