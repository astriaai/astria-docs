---
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# SDXL API usage

For general tips on SDXL training and inference, see [SDXL training](/docs/use-cases/sdxl-training)

<div className="api-method">
<div>

Unlike SD15 checkpoint training, SDXL on Astria is trained as a LoRA+text-embedding. As such, inference is taking place a on a base line model such as SDXL 1.0 and `prompt.text` should specify the loaded lora such as `<lora:123456:0.83>` - will load lora with id=123456 and strength=0.83

See [LoRA docs](/docs/features/loras) on lora syntax

With SDXL you cannot combine multiple LoRAs.

Use any SDXL model from [the gallery](https://www.astria.ai/gallery/tunes?branch=sdxl1) to do inference.

:::warning
If you are receiving `422` error `model_type=pti is not supported. Use a checkpoint instead` - Change the request URL to https://api.astria.ai/tunes/666678/prompts with `666678` as a hard-coded tune_id of SDXL 1.0 from the gallery. See explanation above.
:::

</div>
<div>

#### POST /tunes/:id/prompts

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
# Note the hard-coded 666678 which is the tune_id of SDXL 1.0 from the gallery
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/666678/prompts \
          -F prompt[text]="<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh" \
          -F prompt[negative_prompt]="old, blemish, wrin" \
          -F prompt[super_resolution]=true \
          -F prompt[face_correct]=true \
          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" 
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const fetch = require('node-fetch');
const FormData = require('form-data');

// Note the hard-coded 666678 which is the tune_id of SDXL 1.0 from the gallery
const API_URL = 'https://api.astria.ai/tunes/666678/prompts';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

const form = new FormData();
form.append('prompt[text]', '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh');
form.append('prompt[negative_prompt]', 'old, blemish, wrin');
form.append('prompt[super_resolution]', true);
form.append('prompt[face_correct]', true);
form.append('prompt[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1');

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

# Note the hard-coded 666678 which is the tune_id of SDXL 1.0 from the gallery
API_URL = 'https://api.astria.ai/tunes/666678/prompts'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

data = {
  'prompt[text]': '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh',
  'prompt[negative_prompt]': 'old, blemish, wrin',
  'prompt[super_resolution]': True,
  'prompt[face_correct]': True,
  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'
}
files = []
files.append((f"tune[prompts_attributes][{i}][input_image]", load_image(prompt['input_image'])))

response = requests.post(API_URL, headers=headers, data=data)
```
  </TabItem>
</Tabs>

</div>
</div>
