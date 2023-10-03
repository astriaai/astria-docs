---
title: Retrieve a tune
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

### Parameters

No parameters

### Returns

Returns the Tune object.

</div>

<div>

#### GET /tunes/:id
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1
```

</TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const headers = { Authorization: `Bearer ${API_KEY}` }
fetch('https://api.astria.ai/tunes/1', { headers: headers });
```

</TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests
headers = {'Authorization': f'Bearer {API_KEY}'}
requests.get('https://api.astria.ai/tunes/1')
```

  </TabItem>
</Tabs>

#### Response
```json
{
  "id": 1,
  "title": "John Doe",
  "name": "woman",
  "token": "ohwx",
  "base_tune_id": null,
  "args": null,
  "steps": null,
  "face_crop": null,
  "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",
  "ckpt_urls": [
    "https://sdbooth2-production.s3.amazonaws.com/mock"
  ],
  "trained_at": "2023-10-02T14:32:40.363Z",
  "started_training_at": "2023-10-02T14:32:05.229Z",
  "expires_at": "2023-11-01T14:32:40.363Z",
  "created_at": "2023-10-02T14:32:05.067Z",
  "branch": "sdxl1",
  "model_type": "lora",
  "updated_at": "2023-10-02T14:32:40.363Z",
  "url": "https://www.astria.ai/tunes/788416.json",
  "orig_images": [
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock",
    "https://sdbooth2-production.s3.amazonaws.com/mock"
  ]
}
```
</div>
</div>

