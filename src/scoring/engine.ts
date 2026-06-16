import { ScanResult } from "../shared/types";

export class ScoringEngine {
    calculate(results: ScanResult[]) {
        const totalChecks = results.length;

        const passedChecks = results.filter(
            item => item.status === "PASS"
        ).length;

        const score = Math.round(
            (passedChecks / totalChecks) * 100
        );

        return score;
    }
}