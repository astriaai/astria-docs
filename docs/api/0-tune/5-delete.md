---
title: Delete a tune
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Deletes a specific tune by its ID, and associated prompts in case of a checkpoint.

### Parameters

#### `id` (required)
The ID of the tune to be deleted.

### Returns

Returns 200 OK if the prompt was successfully deleted.

</div>

<div>

#### DELETE /tunes/:id
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X DELETE -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1
```

  </TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const headers = { Authorization: `Bearer ${API_KEY}` }
fetch('https://api.astria.ai/tunes/1', { 
  method: 'DELETE',
  headers: headers 
});
```

  </TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests
headers = {'Authorization': f'Bearer {API_KEY}'}
requests.delete('https://api.astria.ai/tunes/1', headers=headers)
```

  </TabItem>
</Tabs>

#### Response
`200 OK`
</div>
</div>
