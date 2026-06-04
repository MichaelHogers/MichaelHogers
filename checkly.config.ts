import { defineConfig } from 'checkly'

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
