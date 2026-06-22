import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('hn-api-story-item', {
  name: 'HN API - Single Story Item',
  request: {
    method: 'GET',
    url: 'https://hacker-news.firebaseio.com/v0/item/1.json',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.jsonBody('$.id').equals(1),
    ],
  },
  frequency: 10,
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['hackernews', 'api'],
})
