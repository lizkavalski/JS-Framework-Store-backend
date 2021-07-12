const  app  = require('../server/server');
const request = require('@code-fellows/supergoose');

describe('TESTING 1..2..3,TESTING 1..2..3', () => {
  test('should respond with a 404 on an invalid route', async() => {
    const response = await request(app).get('/foobar')
    expect(response.status).toBe(404) 
  });
  
  test('should respond with a 404 on an invalid method', async () => {
    const response = await request(app).put('/products');
    expect(response.status).toBe(404);
  });
  

  // it('can create a record', async() => {
  //   const data = {
  //     category:"books",
  //     item:"Plant Book", 
  //   };
  //    const response= await request(app).post('/products').send(data)
  //   expect(response.status).toBe(200);
  //   });
  // })

  test('can get the welcome page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
  
  test('can get the whole list', async () => {
      const response = await request(app).get('/products');
      console.log(`this the response:${response}`)
      expect(response.status).toBe(200);
    });
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