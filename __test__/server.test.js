
require("dotenv").config()
const mongoose =require("mongoose")
const  server  = require('../server/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('TESTING 1..2..3,TESTING 1..2..3', () => {
  beforeAll(async() => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
});

  it('should respond with a 404 on an invalid route', () => {
    
    return mockRequest
    .get('/foobar')
    .then(results => {
      expect(results.status).toBe(404);
    });
    
  });
  
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/products');
    expect(response.status).toBe(404);
  });
  

  // it('can create a record', async() => {
  //   const data = {
  //     category:"books",
  //     item:"Plant Book", 
  //   };
  //   const response = await mockRequest.post('/products').send(data)
  //   expect(response.status).toBe(200);
  //   });
  // })


  it('can get list of records', async () => {
    const response = await mockRequest.get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  }, 100000);

  // it('can get a record', async () => {
  //   const response = await mockRequest.get('/products/_id');
  //   expect(response.status).toBe(200);
  //   expect(typeof response.body).toEqual('object');
  //   expect(response.body.id).toEqual(1);
  // });

  // it('can update a record', async () => {
  //   const data = { item: "Broccoli" };
  //   const response = await mockRequest.put('/products/1').send(data);
  //   expect(response.status).toBe(200);
  //   expect(typeof response.body).toEqual('object');
  //   expect(response.body.id).toEqual(1);
  //   expect(response.body.data.name).toEqual("item");
  // });

  // it('can delete a record', async () => {
  //   const response = await mockRequest.delete('/products/1');
  //   expect(response.status).toBe(200);
  //   expect(response.body).toBeFalsy();

  //   const getResponse = await mockRequest.get('/products');
  //   expect(getResponse.body.length).toEqual(0);

  // });


 });