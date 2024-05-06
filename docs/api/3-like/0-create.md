---
title: Create a like
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Adds a like to a prompt.
If the prompt was created using a pack (i.e: `orig_prompt_id` is set) - a like will be added to the original prompt as well.

### Parameters


### Returns

Returns status code 201 if successful and no content.

</div>

<div>

#### POST /prompts/:prompt_id/likes

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/prompts/:prompt_id/like 
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const fetch = require(`node-fetch');
const FormData = require('form-data');

const API_URL = 'https://api.astria.ai/prompts/:prompt_id/like';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

fetch(API_URL, {
  method: 'POST',
  headers: headers,
}).then(response => response.json())


```
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

API_URL = 'https://api.astria.ai/prompts/:prompt_id/like'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}


response = requests.post(API_URL, headers=headers)
```
  </TabItem>
</Tabs>

#### Response

`Status code: 201 Created`

</div>
</div>

