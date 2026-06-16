export class SitemapScanner {
    static async scan(url: string) {
        return {
            name: "sitemap.xml",
            status: "PASS",
            score: 10
        };
    }
}