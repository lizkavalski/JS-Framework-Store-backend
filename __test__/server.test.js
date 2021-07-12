const  app  = require('../server/server');
const request = require('@code-fellows/supergoose');
const serverRequest = request(app);

describe('Server testing in 3..2..1', () => {

  test('should respond wtesth a 404 on an invalid route',async() => {
    const response = await serverRequest.get('/foobar')
    expect(response.status).toBe(404);
  });

  // These tests are wired wtesth async/awatest --- so much cleaner!
  test('should respond wtesth a 404 on an invalid method', async () => {
    const response = await serverRequest.put('/products');
    expect(response.status).toBe(404);
  });

  test('can create a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const response = await serverRequest.post('/products').send(data);
    expect(response.status).toBe(200);
    expect(response.body._id).toBeDefined();
  });

  test('can get list of records', async () => {
    const response = await serverRequest.get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  test('can get a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const getRecord = await serverRequest.post('/products').send(data);
    let id = getRecord.body._id;
    const response = await serverRequest.get(`/products/${id}`);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body._id).toEqual(id);
  });

  test('can update a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const getRecord = await serverRequest.post('/products').send(data);
    let id = getRecord.body._id;
    const newData = {item: "Broccoli" };
    const response = await serverRequest.put(`/products/${id}`).send(newData);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body._id).toEqual(id);
    expect(response.body.item).toEqual("Broccoli");
  });

  test('can delete a record', async () => {
    const data = {
      item: 'carrots',
      price: .25,
      category: 'Food'
    };

    const getRecord = await serverRequest.post('/products').send(data);
    let id = getRecord.body._id;
    const response = await serverRequest.delete(`/products/${id}`);
    expect(response.status).toBe(200);
    expect(response.body).toBe(response.body);

    const getResponse = await serverRequest.get('/products');
    expect(getResponse.body.length).toEqual(3);
  });
});
