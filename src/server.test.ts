import axios from 'axios';
import app, { stopDB } from './server';
import http from 'http';
import mongoose from 'mongoose';

describe('AI Hub Server', () => {
  let server: http.Server;
  let baseUrl: string;

  beforeAll((done) => {
    server = app.listen(0, () => {
      const address = server.address();
      if (typeof address === 'object' && address !== null) {
        baseUrl = `http://localhost:${address.port}`;
      }
      done();
    });
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
    await stopDB();
  });

  it('should respond with landing page for GET /', async () => {
    const response = await axios.get(baseUrl + '/');
    expect(response.status).toBe(200);
  });

  it('should create a new user for POST /api/signup', async () => {
    const userData = {
      fullName: 'Test User',
      email: `test_${Date.now()}@example.com`,
      password: 'password123'
    };
    const response = await axios.post(baseUrl + '/api/signup', userData);
    expect(response.status).toBe(201);
    expect((response.data as any).message).toBe('User created successfully');
  });

  it('should return error for duplicate email in POST /api/signup', async () => {
    const email = `duplicate_${Date.now()}@example.com`;
    const userData = {
      fullName: 'Test User',
      email: email,
      password: 'password123'
    };
    // First signup
    await axios.post(baseUrl + '/api/signup', userData);
    
    // Second signup with same email
    try {
      await axios.post(baseUrl + '/api/signup', userData);
      fail('Should have thrown 400 error');
    } catch (error: any) {
      expect(error.response.status).toBe(400);
      expect((error.response.data as any).error).toBe('Email already exists');
    }
  });
});
