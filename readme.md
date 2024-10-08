# Results

Using my personal T440S laptop.

## Baseline without vectors

*All VUs finished. Total time: 1 minute, 32 seconds*
```
http.codes.201: ................................................................ 10000
http.downloaded_bytes: ......................................................... 1622722
http.request_rate: ............................................................. 111/sec
http.requests: ................................................................. 10000
http.response_time:
  min: ......................................................................... 3
  max: ......................................................................... 886
  mean: ........................................................................ 7.5
  median: ...................................................................... 7
  p95: ......................................................................... 7.9
  p99: ......................................................................... 41.7
http.responses: ................................................................ 10000
vusers.completed: .............................................................. 1
vusers.created: ................................................................ 1
vusers.created_by_name.Insert documents into ElasticSearch: .................... 1
vusers.failed: ................................................................. 0
vusers.session_length:
  min: ......................................................................... 91204.6
  max: ......................................................................... 91204.6
  mean: ........................................................................ 91204.6
  median: ...................................................................... 92072.4
  p95: ......................................................................... 92072.4
  p99: ......................................................................... 92072.4
```
## Including vectors

*All VUs finished. Total time: 1 minute, 24 seconds*

```
http.codes.201: ................................................................ 10000
http.downloaded_bytes: ......................................................... 1700877
http.request_rate: ............................................................. 121/sec
http.requests: ................................................................. 10000
http.response_time:
  min: ......................................................................... 3
  max: ......................................................................... 48
  mean: ........................................................................ 6.7
  median: ...................................................................... 7
  p95: ......................................................................... 7.9
  p99: ......................................................................... 10.1
http.responses: ................................................................ 10000
vusers.completed: .............................................................. 1
vusers.created: ................................................................ 1
vusers.created_by_name.Insert documents into ElasticSearch: .................... 1
vusers.failed: ................................................................. 0
vusers.session_length:
  min: ......................................................................... 83132.4
  max: ......................................................................... 83132.4
  mean: ........................................................................ 83132.4
  median: ...................................................................... 83310.3
  p95: ......................................................................... 83310.3
  p99: ......................................................................... 83310.3
```

## Notes:

### Get vector data in response
By default, Elastic Search does not include vector fields in a search response. You can see them by explictly requesting them. 

```
curl -X GET "http://localhost:9200/test-including-vectors/_mapping?pretty"
curl -X GET "http://localhost:9200/test-including-vectors/_search" -H 'Content-Type: application/json' -d'
{
  "query": { "match_all": {} },
  "fields": [
    "field1",
    "field2",
    "field3",
    "content_vector"
  ],
  "_source": false,
  "size": 1
}'
```

