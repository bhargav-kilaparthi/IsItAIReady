import { ScanResult } from "../../shared/types";

export interface BaseScanner {
    scan(url: string): Promise<ScanResult>;
}