import axios from "axios";
import { ScanOrchestrator } from "../scanners/orchestrator/scan-orchestrator";
import { ScoringEngine } from "../scoring/engine";

export class ScanService {
    async scan(url: string, checks: Record<string, boolean>) {
        const siteResponse = await axios.get(url, {
            timeout: 10000,
            validateStatus: () => true,
        });

        if (siteResponse.status >= 500) {
            throw new Error(
                `We couldn't scan this site. ${new URL(url).hostname} returned ${siteResponse.status}`
            );
        }

        const orchestrator = new ScanOrchestrator();

        const findings =
            await orchestrator.run(url, checks);

        const score = new ScoringEngine().calculate(findings);

        return {
            url,
            score,
            findings,
        };
    }
}