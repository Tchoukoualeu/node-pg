import supertest from "supertest"
import app from "./index"

describe("Testing node", () => {
  test("GET /health", async () => {
    const data = await supertest(app).get("/health")

    expect(data.status).toBe(200)
  })
})
