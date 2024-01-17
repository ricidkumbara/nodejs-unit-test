## install jest
npm install jest --save-dev
npm install @types/jest --save-dev

## manual running jest unit test
./node_modules/.bin/jest.cmd
npm run jest

## running using npx
npx jest
npx jest test/sum.test.js # running test on specific file
npx jest --runTestsByPath test/sum.test.js # running test on specific file
npx jest --testNamePattern "test sum function" # running test on spesific pattern name

## install babel for supporting module type
npm install --save-dev babel-jest 
npm install @babel/preset-env --save-dev
npm install @babel/plugin-transform-runtime --save-dave