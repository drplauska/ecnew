# Danske experience center

React frontend goes here

## run

`yarn`

`yarn start`

### errors

if you ever get an error like `Module parse failed: Unexpected character '' (1:0) You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders`
go to `webpack.config.js`, and add new file's extension to module.rules[1].test
