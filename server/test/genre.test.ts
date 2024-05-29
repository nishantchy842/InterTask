import { beforeEach, describe, expect, it, jest, test } from "@jest/globals";
import app from ".."; // Adjust the import according to your project structure
import request from "supertest";
import { genreRepo, movieRepo } from "../helper/repo"; // Adjust the import according to your project structure
import { MovieEntity } from "../models/movieModel"; // Adjust the import according to your project structure
import { sum } from "../controller/genreController";
import supertest from "supertest";

jest.mock("../helper/repo");

describe("Test the GET /movie/ endpoint", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("sum equal to 3", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("all genre", async () => {
    const response = await request(app).get("/genre/");
    expect(response.status).toBe(200);
  });

  describe("create genre route", () => {
    describe("if title is not found", () => {
      it("should return a 400", async () => {
        const { statusCode } = await supertest(app).post("/genre/");
        expect(statusCode).toBe(400);
      });
    });
  });

  describe("with body", () => {
    it("should return a 200 and create the product", async () => {
      const { statusCode, body } = await supertest(app).post("/genre").send({
        title: "test",
      });

      expect(statusCode).toBe(200);

      expect(body.success).toEqual(true);
    });
  });

  describe("without body", () => {
    it("should return a 400 and return success false", async () => {
      const { statusCode, body } = await supertest(app).post("/genre");

      expect(statusCode).toBe(400);

      expect(body.success).toEqual(false);
    });
  });

  describe("test the delete /genre", () => {
    it("should return a 400 and return success false id not found", async () => {
      const { statusCode, body } = await request(app).delete(
        `/genre/40359d72-c97d-4117-8bea-fbd61ba89204`
      );

      expect(statusCode).toBe(400);
      expect(body.success).toEqual(false);
    });
  });
});
