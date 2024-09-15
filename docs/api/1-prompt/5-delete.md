---
title: Delete a prompt
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Deletes a specific prompt associated with a tune.

### Parameters

#### `id` (required)
The ID of the tune to be deleted.

### Returns

Returns 200 OK if the prompt was successfully deleted.

</div>

<div>

#### DELETE /tunes/:tune_id/prompts/:id

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X DELETE -H "Authorization: Bearer $API_KEY" https://api.astria.ai/prompts/1
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript showLineNumbers
const fetch = require('node-fetch');

const API_URL = 'https://api.astria.ai/prompts/1';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

fetch(API_URL, {
  method: 'DELETE',
  headers: headers
}).then(response => response.json())
```

  </TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests

API_URL = 'https://api.astria.ai/prompts/1'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

response = requests.delete(API_URL, headers=headers)
```

  </TabItem>
</Tabs>

#### Response

```json
{
  "message": "Prompt successfully deleted"
}
```

</div>
</div>
