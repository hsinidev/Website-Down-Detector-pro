
import type { CheckResult } from '../types';

// This file simulates a Next.js API route.
// In a real Next.js app, this logic would be in /pages/api/check-status.ts
// and would use `fetch` on the server. Here, we simulate the behavior.

const successCodes = [
  { code: 200, text: 'OK' },
  { code: 201, text: 'Created' },
  { code: 204, text: 'No Content' },
];

const errorCodes = [
  { code: 400, text: 'Bad Request' },
  { code: 401, text: 'Unauthorized' },
  { code: 403, text: 'Forbidden' },
  { code: 404, text: 'Not Found' },
  { code: 500, text: 'Internal Server Error' },
  { code: 502, text: 'Bad Gateway' },
  { code: 503, text: 'Service Unavailable' },
  { code: 504, text: 'Gateway Timeout' },
];

function classifyStatusCode(statusCode: number): 'UP' | 'DOWN' {
  if (statusCode >= 200 && statusCode < 300) {
    return 'UP';
  }
  return 'DOWN';
}

export const checkUrlStatus = async (url: string): Promise<CheckResult> => {
  return new Promise((resolve) => {
    // Simulate network latency between 50ms and 1500ms
    const responseTime = Math.floor(Math.random() * 1450) + 50;

    setTimeout(() => {
      try {
        // Basic URL validation
        const parsedUrl = new URL(url.startsWith('http') ? url : `https://${url}`);

        // Simulate a random outcome
        const isUp = Math.random() > 0.2; // 80% chance of being "UP"
        
        let result: { code: number; text: string; };

        if (isUp) {
          result = successCodes[Math.floor(Math.random() * successCodes.length)];
        } else {
          result = errorCodes[Math.floor(Math.random() * errorCodes.length)];
        }

        resolve({
          status: classifyStatusCode(result.code),
          statusCode: result.code,
          statusText: result.text,
          responseTime,
          url: parsedUrl.href,
        });

      } catch (error) {
        resolve({
          status: 'ERROR',
          statusCode: null,
          statusText: 'Invalid URL',
          responseTime,
          url: url,
        });
      }
    }, responseTime);
  });
};
