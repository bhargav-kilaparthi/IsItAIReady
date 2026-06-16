import axios from "axios";
import { BaseScanner } from "../base/base.scanner";
import { ScanResult } from "../../shared/types";

export class SitemapScanner implements BaseScanner {
    async scan(url: string): Promise<ScanResult> {
        try {
            const response = await axios.get(
                `${url}/sitemap.xml`,
                {
                    timeout: 10000,
                    validateStatus: () => true,
                }
            );

            return {
                name: "sitemap.xml",
                status: response.status === 200 ? "PASS" : "FAIL",
            };
        } catch {
            return {
                name: "sitemap.xml",
                status: "FAIL",
            };
        }
    }
}