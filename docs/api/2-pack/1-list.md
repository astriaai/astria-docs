---
title: List all packs
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

### Parameters

#### `public=true` (optional)
Filters only public packs that are not disabled. By default, no filtering is applied.

#### `listed=true` (optional)
Filters packs that unlisted_at is set to null.

### Returns

An array of packs owned by the authenticated user or gallery packs for `GET /gallery/packs`
</div>

<div>

#### `GET /packs` or `GET /gallery/packs`
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/packs
# or
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/gallery/packs 
```

</TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const headers = { Authorization: `Bearer ${API_KEY}` }
fetch('https://api.astria.ai/packs', { headers: headers });
// or 
fetch('https://api.astria.ai/gallery/packs', { headers: headers });
```
  </TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests
headers = {'Authorization': f'Bearer {API_KEY}'}
requests.get('https://api.astria.ai/packs')
# or 
requests.get('https://api.astria.ai/gallery/packs')
```

</TabItem>
</Tabs>

#### Response
```json

[
  {
    "id": 5,
    "base_tune_id": 1,
    "user_id": 1,
    "slug": "test-rv5-1-pack",
    "title": "test rv5.1 pack",
    "token": "ohwx",
    "created_at": "2024-01-17T12:35:13.379Z",
    "updated_at": "2024-04-04T12:14:52.094Z",
    "multiplier": 10,
    "model_type": null,
    "public_at": null,
    "cost_mc_hash": {
      "man": 200000, // cost in milli-cents - $20 USD
      "woman": 100000 // cost in milli-cents - $10 USD
    }
  }
]

```
</div>
</div>

