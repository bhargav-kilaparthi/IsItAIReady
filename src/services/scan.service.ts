import { ScanOrchestrator } from "../scanners/orchestrator/scan-orchestrator";
import { ScoreEngine } from "../scoring/engine";

export class ScanService {
    static async scan(url: string) {
        const findings =
            await ScanOrchestrator.run(url);

        const score =
            ScoreEngine.calculate(findings);

        return {
            url,
            score,
            findings
        };
    }
}