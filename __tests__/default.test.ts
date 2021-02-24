import request from 'supertest';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import fs from 'fs';
import json_retorno_test from './json_test/RetornoBanco.json';
import ClienteTest from './json_test/ClienteTest.json';
import app from '../src/app';

describe('Apidoc', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('sucesso ao acessar a documentação', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
  });
});
