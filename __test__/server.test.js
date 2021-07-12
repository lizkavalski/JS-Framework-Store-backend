const  app  = require('../server/server');
const request = require('@code-fellows/supergoose');
const mockRequest = request(app);

describe('web server', () => {

  it('should respond with a 404 on an invalid route',() => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/products');
    expect(response.status).toBe(404);
  });

  it('can create a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const response = await mockRequest.post('/products').send(data);
    expect(response.status).toBe(200);
    expect(response.body._id).toBeDefined();
  });

  it('can get list of records', async () => {
    const response = await mockRequest.get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  it('can get a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const getRecord = await mockRequest.post('/products').send(data);
    let id = getRecord.body._id;
    const response = await mockRequest.get(`/products/${id}`);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body._id).toEqual(id);
  });

  it('can update a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const getRecord = await mockRequest.post('/products').send(data);
    let id = getRecord.body._id;
    const newData = { item: "Broccoli" };
    const response = await mockRequest.put(`/products/${id}`).send(newData);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body._id).toEqual(id);
    expect(response.body.item).toEqual("Broccoli");
  });

  it('can delete a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const getRecord = await mockRequest.post('/products').send(data);
    let id = getRecord.body._id;
    const response = await mockRequest.delete(`/products/${id}`);
    expect(response.status).toBe(200);
    expect(response.body).toBe(response.body);

    const getResponse = await mockRequest.get('/products');
    expect(getResponse.body.length).toEqual(3);

  });

});