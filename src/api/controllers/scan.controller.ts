import { Request, Response } from "express";
import { ScanService } from "../../services/scan.service";
import { validateUrl } from "../../shared/sanitizer";

const scanService = new ScanService();

export const scanWebsite = async (
    req: Request,
    res: Response
) => {
    try {
        const { url, checks } = req.body;

        const validatedUrl = validateUrl(url);

        const result = await scanService.scan(
            validatedUrl, checks
        );

        return res.status(200).json(result);
    } catch (error: any) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};