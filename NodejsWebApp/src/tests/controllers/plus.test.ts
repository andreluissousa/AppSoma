import { Request, Response } from "express";
import PlusController from "../../controllers/PlusController";
import PlusService from "../../services/Plus.service";

jest.mock("../../services/Plus.service");

describe("PlusController", () => {
  let req: Request;
  let res: Response;

  beforeEach(() => {
    req = {
      body: {
        firstValue: 5,
        secondValue: 10,
      },
    } as Request;

    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the sum of two numbers", async () => {
    const expectedResult = 15;
    (PlusService.plusNumbers as jest.Mock).mockResolvedValue(expectedResult);

    await PlusController.plus(req, res);

    expect(PlusService.plusNumbers).toHaveBeenCalledWith({
      firstValue: req.body.firstValue,
      secondValue: req.body.secondValue,
    });
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: expectedResult,
    });
  });

  it("should return an error if values are not numbers", async () => {
    req.body.firstValue = "not a number";

    await PlusController.plus(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: "Os valores devem ser números.",
    });
  });

  it("should return an internal error if PlusService throws an error", async () => {
    (PlusService.plusNumbers as jest.Mock).mockRejectedValue(new Error("Service error"));

    await PlusController.plus(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      error: "Service error",
    });
  });
});
