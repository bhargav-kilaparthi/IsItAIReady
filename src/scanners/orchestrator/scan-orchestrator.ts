import { RobotsScanner } from "../discovery/robots.scanner";
import { SitemapScanner } from "../discovery/sitemap.scanner";
import { LlmsScanner } from "../discovery/llms.scanner";

export class ScanOrchestrator {
    async run(
        url: string,
        checks: Record<string, boolean>
    ) {
        const scanners: Promise<any>[] = [];

        if (checks.robots) {
            scanners.push(
                new RobotsScanner().scan(url)
            );
        }

        if (checks.sitemap) {
            scanners.push(
                new SitemapScanner().scan(url)
            );
        }

        if (checks.llms) {
            scanners.push(
                new LlmsScanner().scan(url)
            );
        }

        return Promise.all(scanners);
    }
}