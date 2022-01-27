import app from "@/src/app";
import request from "supertest";

describe('GET /check', () => {
    it('should app exist', ()=> {
        expect(app).toBeDefined();
    });

    it('should get response from check endpoint', async () => {
        const response = await request(app).get('/check');
        expect(response.text).toEqual("App is working");
        expect(response.statusCode).toEqual(200);
    });
});
