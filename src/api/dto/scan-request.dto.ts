export interface ScanRequestDto {
    url: string;
    checks: {
        robots?: boolean;
        sitemap?: boolean;
        llms?: boolean;
    };
}