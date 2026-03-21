import { describe, it } from '@jest/globals';
import { sum } from '../src/sum';
import { calculateDiscount } from '../src/util';
import app from '../src/app';
import request from 'supertest';
describe('App', () => {
    it('Should work', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('Calculate discount', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });

    it('Should Return 200 Status', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});
