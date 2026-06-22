import { defineConfig } from 'checkly'

// Monitoring-as-code config for HackerNews availability checks.
export default defineConfig({
  projectName: 'HackerNews Monitoring',
  logicalId: 'hackernews-monitoring',
  repoUrl: 'https://github.com/MichaelHogers/MichaelHogers',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['hackernews'],
    runtimeId: '2024.02',
    browserChecks: {
      testMatch: '**/__checks__/**/*.spec.ts',
    },
  },
})
