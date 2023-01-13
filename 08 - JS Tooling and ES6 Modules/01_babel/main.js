 // Babel -> transpiler
 // npm install @babel/cli @babel/preset-env @babel/core  

 const nome = 'Leo'
 const obj = { leo }
 const novoObj = { ...obj }
 console.log(novoObj)

 // npx babel main.js -o bundle.js --presets=@babel/env
 // npm run babel