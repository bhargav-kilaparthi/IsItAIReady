import { ScanResult } from "../../shared/types";

export interface ScanResponseDto {
    url: string;
    score: number;
    findings: ScanResult[];
}