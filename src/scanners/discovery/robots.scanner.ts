export class RobotsScanner {
    static async scan(url: string) {
        return {
            name: "robots.txt",
            status: "PASS",
            score: 10
        };
    }
}