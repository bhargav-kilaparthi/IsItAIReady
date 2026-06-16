export type ScanStatus = "PASS" | "FAIL";

export interface ScanResult {
    name: string;
    status: ScanStatus;
}

export interface ScanResponse {
    url: string;
    score: number;
    findings: ScanResult[];
}