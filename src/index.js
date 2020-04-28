const app = require ('./app');


async function main() {
    await app.listen(3001)    
    console.log("server on port 3001");    
}

main();