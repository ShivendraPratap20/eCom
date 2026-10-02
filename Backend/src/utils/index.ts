import type { Response } from "express";

type err = {
    code: string,
    details: string | null
};

type errorMessage = {
    status: boolean,
    message: string,
    error: err
};



function returnError(res: Response, status: number, errorObj: errorMessage): Response{
    return res.status(status).json(errorObj);
};

module.exports = {
    returnError
}