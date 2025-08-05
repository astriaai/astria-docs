---
title: Duplicate a prompt
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Duplicates a prompt, and allows overriding any of its attributes.

Any of the parameters available in the [Create a prompt](./1-create.md) endpoint can be used here to override the original prompt's attributes.

For example, to use a different seed for a new prompt, you can use the `seed` attribute.

### Parameters

#### `image_index` (required)
Unique additional parameter that can be used to bypass the initial creation of the image and re-use the existing image from the original prompt this saving cost and time of the base image creation. This is mostly useful for video2image generation where the first image is used as a base for the video generation. Note that this parameter is provided at the top level and not inside the prompt object.

### Returns

Returns a new prompt object if successful.

</div>

<div>

#### POST /prompts/:id/duplicate

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/prompts/1/duplicate \
          -F prompt[seed]=12345
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const fetch = require(`node-fetch`);
const FormData = require('form-data');

const API_URL = 'https://api.astria.ai/prompts/1/duplicate';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

const form = new FormData();
form.append('prompt[seed]', 12345);

fetch(API_URL, {
  method: 'POST',
  headers: headers,
  body: form
}).then(response => response.json())


```
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

API_URL = 'https://api.astria.ai/prompts/1/duplicate'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

data = {
  'prompt[seed]': 12345
}

response = requests.post(API_URL, headers=headers, data=data)
```
  </TabItem>
</Tabs>

#### Response

```json
{
  "id": 2,
  "callback": "https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1",
  "text": "a painting of ohwx man in the style of Van Gogh",
  "negative_prompt": "old, blemish, wrinkles, mole",
  "cfg_scale": null,
  "steps": null,
  "seed": 12345,
  "trained_at": null,
  "started_training_at": null,
  "created_at": "2022-10-06T16:15:22.505Z",
  "updated_at": "2022-10-06T16:15:22.505Z",
  "tune_id": 1,
  "url": "http://api.astria.ai/tunes/1/prompts/2.json"
}
```

### Video Generation from an existing prompt image

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/prompts/1/duplicate \
          -F image_index=0 \
          -F prompt[text]="a painting of ohwx man in the style of Van Gogh --video --video_prompt \"smiling, put their hands on hips\""
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const fetch = require(`node-fetch`);
const FormData = require('form-data');

const API_URL = 'https://api.astria.ai/prompts/1/duplicate';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

const form = new FormData();
form.append('image_index', 0);
form.append('prompt[text]', 'a painting of ohwx man in the style of Van Gogh --video --video_prompt "smiling, put their hands on hips"');


fetch(API_URL, {
  method: 'POST',
  headers: headers,
  body: form
}).then(response => response.json())


```
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

API_URL = 'https://api.astria.ai/prompts/1/duplicate'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

data = {
  'image_index': 0,
  'prompt[text]': 'a painting of ohwx man in the style of Van Gogh --video --video_prompt "smiling, put their hands on hips"'
}

response = requests.post(API_URL, headers=headers, data=data)
```
  </TabItem>
</Tabs>
</div>
</div>
