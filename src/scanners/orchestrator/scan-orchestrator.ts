import { RobotsScanner } from "../discovery/robots.scanner";
import { SitemapScanner } from "../discovery/sitemap.scanner";
import { LlmsScanner } from "../discovery/llms.scanner";

export class ScanOrchestrator {
    static async run(url: string) {
        const results = [];

        results.push(
            await RobotsScanner.scan(url)
        );

        results.push(
            await SitemapScanner.scan(url)
        );

        results.push(
            await LlmsScanner.scan(url)
        );

        return results;
    }
}