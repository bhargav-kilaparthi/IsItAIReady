export class ScoreEngine {
    static calculate(results: any[]) {
        return results.reduce(
            (total, item) => total + item.score,
            0
        );
    }
}