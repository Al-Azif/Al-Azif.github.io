call npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-preset-minify
call babel default.js.es6 --out-file default.js --presets=@babel/preset-env,minify --no-comments
call babel common.js.es6 --out-file common.js --presets=@babel/preset-env,minify --no-comments
call babel rpi.js.es6 --out-file rpi.js --presets=@babel/preset-env,minify --no-comments
del package-lock.json
