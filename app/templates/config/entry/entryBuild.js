const fs = require("fs");
const path = require("path");
const entry = require('./entry');
const rimraf = require('rimraf');

//定义entryBuild
const entryBuildPath = path.resolve(__dirname, '../../entryBuild');
//删除entryBuild
rimraf.sync(entryBuildPath);
//创建entryBuild
fs.mkdirSync(entryBuildPath);
const entryContent = data => `import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../app/public/js/reducers';
import Index from '../app/component/${data.path}'
const store = createStore(rootReducer,compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
));
ReactDOM.render([<Provider store={store}><Index key="Index"/></Provider>],document.getElementById('app'));`;
/*生成webpack entry 入口文件*/
entry.map((data) => {
    fs.writeFile(entryBuildPath + '/' + data.name + '.js', entryContent(data), 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
    });
});