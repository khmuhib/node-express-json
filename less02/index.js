const fs = require('fs');

fs.exists('remane.txt', (result) => {
    if (result) {
        console.log('demo.txt exists');
    } else {
        console.log('demo.txt does not exist');
    }
});