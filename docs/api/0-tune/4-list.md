---
title: List all tunes
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

### Parameters

#### `before_id` (optional, preferred)
Keyset-pagination cursor. Returns tunes with `id` lower than the given value, following the default newest-first (id-descending) order. To fetch the next page, pass the `id` of the last tune on the current page, and repeat until an empty page is returned, e.g. `GET /tunes?limit=120&before_id=12345`. Prefer this over `offset`: its cost stays constant no matter how deep you page.

#### `limit` (optional)
Page size. Default: 20. Maximum: 120.

#### `offset` (optional)
Starting offset for the list of tunes. Default: 0. Suitable for shallow paging only — API requests with offset above 200 return HTTP 400 with an error message pointing to `before_id`.

### Returns

An array of all fine-tunes owned by the authenticated user
</div>

<div>

#### GET /tunes
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes
```

</TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const headers = { Authorization: `Bearer ${API_KEY}` }
fetch('https://api.astria.ai/tunes', { headers: headers });
```
  </TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests
headers={'Authorization': f'Bearer {API_KEY}'}
requests.get('https://api.astria.ai/tunes', headers=headers)
```

  </TabItem>
</Tabs>

#### Response
```json

[
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
  },
  {
    "id": 775459,
    "title": "Marry Jane",
    "name": null,
    "is_api": false,
    "token": "ohwx",
    "base_tune_id": null,
    "args": null,
    "steps": null,
    "face_crop": null,
    "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",
    "ckpt_urls": [
      "https://sdbooth2-production.s3.amazonaws.com/mock"
    ],
    "trained_at": "2023-09-23T16:07:49.137Z",
    "started_training_at": "2023-09-23T16:07:37.334Z",
    "expires_at": "2023-10-23T16:07:49.137Z",
    "created_at": "2023-09-23T16:07:36.606Z",
    "branch": "sdxl1",
    "model_type": "lora",
    "updated_at": "2023-09-23T16:07:49.138Z",
    "url": "https://www.astria.ai/tunes/775459.json",
    "orig_images": [
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
 ]
```
</div>
</div>
