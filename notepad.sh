## install jest
npm install jest --save-dev


## manual running jest unit test
./node_modules/.bin/jest.cmd
npm run jest


## running using npx
npx jest
npx jest test/sum.test.js # running test on specific file


## install babel for supporting module type
npm install --save-dev babel-jest 
npm install @babel/preset-env --save-dev