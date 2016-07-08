var fileSystem = require('fs');
fileSystem.writeFile('helloWorld.txt', 'Hello Node!!!', function (err) {
    if (err) throw err;
    console.log('It\'s saved!');
});

fileSystem.readFile('helloWorld.txt', function (err, data) {
    if (err) {
        throw err
    };
    console.log(data.toString());
});
