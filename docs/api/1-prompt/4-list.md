---
title: List all prompts
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

### Parameters

#### `offset` (optional)
Starting offset for the list of prompts. Default: 0. Current page size is 20.

### Returns

An array of prompts owned by the authenticated user. If used as a nested resource (in the url), will return prompts owned by the tune.
</div>

<div>

#### GET /tunes/:id/prompts
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1/prompts
```

</TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const headers = { Authorization: `Bearer ${API_KEY}` }
fetch('https://api.astria.ai/tunes/1/prompts', { headers: headers });
```
  </TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests
headers = {'Authorization': f'Bearer {API_KEY}'}
requests.get('https://api.astria.ai/tunes/1/prompts')
```

</TabItem>
</Tabs>

#### Response
```json

[
  {
    "id": 1,
    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=your_internal_user_id&transaction_id=internal_transaction_id",
    "text": "a painting of ohwx man in the style of Van Gogh",
    "negative_prompt": "old, blemish, wrinkles, mole",
    "cfg_scale": null,
    "steps": null,
    "seed": null,
    "trained_at": null,
    "started_training_at": null,
    "created_at": "2022-10-06T16:12:54.505Z",
    "updated_at": "2022-10-06T16:12:54.505Z",
    "tune_id": 1,
    "url": "http://api.astria.ai/tunes/1/prompts/1.json"
  }
 ]
```
</div>
</div>

