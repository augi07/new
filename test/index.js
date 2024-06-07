const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


for (let i = 0; i < array.length; i++) {
    const element = array[100];
    alert(i / 7 == true)
    console.log(i)
    
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });