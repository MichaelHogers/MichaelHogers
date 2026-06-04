import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('hn-api-top-stories', {
  name: 'HN API - Top Stories',
  request: {
    method: 'GET',
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$').isNotEmpty(),
    ],
  },
  frequency: 5,
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['hackernews', 'api'],
})
