# music-app

> A vue project about H5_App

## Develop process

###  preparation of project

```
  install dependence
    npm install vue-cli -g
    vue init
    npm install
      stylus stylus-loader babel-polyfill--save-dev
    npm install
      babel-runtime fastclick --save



  configure eslintrc.js
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'eol-last': 0,
    'space-before-function-paren': 0

  condfigure bulid/webpack.base.conf
    alias: {
      'base': resolve('src/base')
    }

  configure config/index.js
      host: '0.0.0.0' // you can use ip to access the page

  configure directory
    src
      api
      base
      common
        fonts
        image
        js
        stylus
      components
      router
      store
```

### layout,tab,vue-router

```
  configure src/main.js
    import 'babel-polyfill'
    import 'fastclick'
    fastclick.attach(document.body)

```

### jsonp

https://m.y.qq.com
?????jsonp???????????????????????????????

```
  npm install jsonp --save
  jsonp?????
    query???????
    Promise??

```





## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
