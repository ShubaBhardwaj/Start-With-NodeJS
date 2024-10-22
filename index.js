const htpp = require('http');

const PORT = 2000; 


const server = htpp.createServer((req, res)=>{
    console.log("request is comming ");
    console.log(req);
    console.log(res);

    if (req.url === '/'){   
        // Lets response to the request with hello world
        res.write('Hello World');
    } else if (req.url === '/pongs'){
        res.write('Here is my pongs');
    } else{
        res.write('About');
    }


    // Lets response to the request with hello world
    
    res.end();
});

// this stat the server
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
