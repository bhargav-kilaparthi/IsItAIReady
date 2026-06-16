import axios from "axios";
import { BaseScanner } from "../base/base.scanner";
import { ScanResult } from "../../shared/types";

export class RobotsScanner implements BaseScanner {
    async scan(url: string): Promise<ScanResult> {
        try {
            const response = await axios.get(
                `${url}/robots.txt`,
                {
                    timeout: 10000,
                    validateStatus: () => true,
                }
            );

            return {
                name: "robots.txt",
                status: response.status === 200 ? "PASS" : "FAIL",
            };
        } catch {
            return {
                name: "robots.txt",
                status: "FAIL",
            };
        }
    }
}