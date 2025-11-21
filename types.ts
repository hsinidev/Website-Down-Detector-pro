
export interface CheckResult {
  status: 'UP' | 'DOWN' | 'ERROR';
  statusCode: number | null;
  statusText: string;
  responseTime: number; // in ms
  url: string;
}
