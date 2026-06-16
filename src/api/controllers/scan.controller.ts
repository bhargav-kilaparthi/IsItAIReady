import { Request, Response } from "express";
import { ScanService } from "../../services/scan.service";

export const scanWebsite = async (
    req: Request,
    res: Response
) => {
    const { url } = req.body;

    const result = await ScanService.scan(url);

    res.json(result);
};