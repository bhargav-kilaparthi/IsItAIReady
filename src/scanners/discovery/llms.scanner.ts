export class LlmsScanner {
    static async scan(url: string) {
        return {
            name: "llms.txt",
            status: "FAIL",
            score: 0
        };
    }
}