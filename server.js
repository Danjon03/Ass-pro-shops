// server.js
const Hapi = require('@hapi/hapi');
const MongoClient = require('mongodb').MongoClient;

// When you are setting up port forwarding try using port 443 and host 0.0.0.0
const init = async () => {
    const server = Hapi.server({ 
        port: 3000,
        host: 'localhost',
        "routes": {
            "cors": {
            "origin": ["*"],
            "headers": ["Accept", "Content-Type"], // proflipisclump
            "additionalHeaders": ["X-Requested-With"]
        }
}
    });

    // MongoDB connection setup
    
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    const db = client.db('Capstone');
 

    //Get Users                                                                               //Get All Users
    server.route({
        method: 'GET',
        path: '/api/getUsers',
        handler: async (request, h) => {
            const items = await db.collection("Users").find({}).toArray();
            return items;
        }
    });

   
    // Get Templates
    server.route({
        method: 'GET',
        path: '/api/getTemplates',
        handler: async (request, h) => {
            const items = await db.collection("Templates").find({}).toArray();
            return items;
        }
    });

    // Get Records
    server.route({
        method: 'GET',
        path: '/api/getRecords',
        handler: async (request, h) => {
            const items = await db.collection("Records").find({}).toArray();
            return items;
        }
    });



    //Add User
    server.route({
        method: 'POST',
        path: '/api/addUser',
        handler: async (request, h) => {
            console.log(request.payload);
            const newItem = request.payload;
            const result = await db.collection("Users").insertOne(newItem);
            return result;
        }
    });


    //Add Template
        server.route({
        method: 'POST',
        path: '/api/addTemplate',
        handler: async (request, h) => {
            console.log(request.payload);
            const newItem = request.payload;
            const result = await db.collection("Templates").insertOne(newItem);
            return result;
        }
    });




    
    //Add Record

        server.route({
        method: 'POST',
        path: '/api/addRecord',
        handler: async (request, h) => {
            console.log(request.payload);
            const newItem = request.payload;
            const result = await db.collection("Records").insertOne(newItem);
            return result;
        }
    });





    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

//This is a test.
