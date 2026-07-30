import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: 'tests/alert.test.ts',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  retries: 0,
  reporter: [['dot'],['json', {outputFile : "jsonReports/jsonReport.json"} ], ['html', {open: 'never'}]]

});