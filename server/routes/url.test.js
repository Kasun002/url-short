const request = require('supertest');
const { app } = require("../app");

describe("Test GET /all", () => {
    test("Response should be 200 success", async () => {
        const response = await request(app).get("/all")
            .expect('Content-Type', /json/)
            .expect(200);
        const res = response.body;
        expect(Array.isArray(res.data)).toBe(true);
    });
});

describe("Test POST /short", () => {
    const req = {
        longUrl: "https://www.cognizant.com/us/en/services/application-services-and-modernization"
    }
    test("Response should be 200 success", async () => {
        const response = await request(app).post("/short")
            .send(req)
            .expect('Content-Type', /json/)
            .expect(200);
        const res = response.body;
        expect(res.status).toBe(true);
    });
});

describe("Test POST /short", () => {
    const req = {
    }

    test("Response should be 400 Incorrect URL format", async () => {
        const response = await request(app).post("/short")
            .send(req)
            .expect(400);
        const res = response.body;
        expect(res.message).toBe('Incorrect URL format');
    });
});