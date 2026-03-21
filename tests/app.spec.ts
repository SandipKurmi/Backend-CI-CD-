import { describe, it } from '@jest/globals';
import { sum } from '../src/sum';
import {
    calculateDiscount,
    calculatePercentage,
    calculateTax,
} from '../src/util';
import app from '../src/app';
import request from 'supertest';
describe('App', () => {
    it('Should work', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('Calculate discount', () => {
        expect(calculateDiscount(100, 10)).toBe(90);
    });

    it('Calculate percentage', () => {
        expect(calculatePercentage(100, 10)).toBe(90);
    });

    it('Calculate tax', () => {
        expect(calculateTax(100, 10)).toBe(110);
    });

    it('Should Return 200 Status', async () => {
        const response = await request(app).get('/health').send();
        expect(response.statusCode).toBe(200);
    });
});
