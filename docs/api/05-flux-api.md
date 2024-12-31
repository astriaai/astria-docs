---
hide_table_of_contents: true
tags: ["flux", "api", "training", "fine-tuning", "lora"]
image: ../use-cases/img/ai-photoshoot-output.jpg
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Flux API usage

For an overview of Flux fine-tuning, see [Flux fine-tuning](/docs/use-cases/flux-finetuning/)

<div className="api-method">
<div>

* Unlike SD15 checkpoint training, Flux is trained as a LoRA model type. As such, inference is taking place on a base model such as Flux1.dev and `prompt.text` should specify the loaded lora such as `<lora:123456:1>` - will load lora with id=123456 and strength=1
* Flux1.Dev requires commercial license which Astria provides to its customers, and as such LoRA downloading is not available for API usage.

See [LoRA docs](/docs/features/lora) on lora syntax


:::info
To avoid cloning inference details of different model types such as Flux LoRA vs SD1.5 checkpoint, please consider using the [Packs API](/docs/api/pack/pack/). Packs will help you abstract the inference logic so that you do not have to hard-code prompts and parameters such as `w,h, cfg_scale` in your backend. Moreover this will allow the creative department to launch packs, make modifications and even track likes, without needing to touch the backend code.
:::

</div>
<div>

### Step 1: Fine-tune a lora model
#### POST /tunes

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
# With images as multipart/form-data
# Hard coded tune id of Flux1.dev from the gallery - https://www.astria.ai/gallery/tunes 
# https://www.astria.ai/gallery/tunes/1504944/prompts
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \
          -F tune[title]="John Doe - UUID - 1234-6789-1234-56789" \
          -F tune[name]=man \
          -F tune[preset]=flux-lora-portrait \
          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&tune_id=1" \
          -F tune[base_tune_id]=1504944 \
          -F tune[model_type]="lora" \
          -F "tune[images][]=@1.jpg" \
          -F "tune[images][]=@2.jpg" \
          -F "tune[images][]=@3.jpg" \
          -F "tune[images][]=@4.jpg"

# With image_urls as form-data
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \
          -F tune[title]="Grumpy cat - UUID - 1234-6789-1234-56789" \
          -F tune[name]=cat \
          -F tune[preset]=flux-lora-portrait \
          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1" \
          -F tune[base_tune_id]=1504944 \
          -F tune[model_type]="lora" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg"
          
# As JSON
cat > data.json <<- EOM
{
  "tune": {
    "title": "Grumpy Cat - UUID - 1234-6789-1234-56789",
    "name": "cat",
    "base_tune_id": 1504944,
    "model_type": "lora",
    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",
    "image_urls": [
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg"
    ]
  }
}
EOM

curl -X POST -H"Content-Type: application/json" -H "Authorization: Bearer $API_KEY" --data @data.json  https://api.astria.ai/tunes          
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
// NodeJS 16
// With image_urls and fetch()
// For NodeJS 18 - do NOT import the below as it is built-in
import fetch from "node-fetch";

const API_KEY = 'sd_XXXXXX';
const DOMAIN = 'https://api.astria.ai';

function createTune() {
  let options = {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tune: {
        "title": 'John Doe - UUID - 1234-6789-1234-56789',
        // Hard coded tune id of Flux1.dev from the gallery - https://www.astria.ai/gallery/tunes 
        // https://www.astria.ai/gallery/tunes/1504944/prompts
        "base_tune_id": 1504944,
        "model_type": "lora",
        "name": "cat",
        "preet": "flux-lora-portrait",
        "image_urls": [
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg"
        ],
      }
    })
  };
  return fetch(DOMAIN + '/tunes', options)
    .then(r => r.json())
    .then(r => console.log(r))
}

createTune()


/// With form-data, fetch() and nested prompts
// For NodeJS 18 - do NOT import the two below as they are built-in
import fetch from "node-fetch";
import FormData from 'form-data';
import fs from 'fs';

const API_KEY = 'sd_XXXX';
const DOMAIN = 'https://api.astria.ai';
function createTune() {
  let formData = new FormData();
  formData.append('tune[title]', 'John Doe - UUID - 1234-6789-1234-56789');
  // Hard coded tune id of Flux1.dev from the gallery - https://www.astria.ai/gallery/tunes 
  // https://www.astria.ai/gallery/tunes/1504944/prompts
  formData.append('tune[base_tune_id]', 1504944);
  formData.append('tune[model_type]', 'lora');
  formData.append('tune[name]', 'man');
  formData.append('tune[preset]', 'flux-lora-portrait');
  // Load all JPGs from ./samples directory and append to FormData
  let files = fs.readdirSync('./samples');
  files.forEach(file => {
    if(file.endsWith('.jpg')) {
      formData.append('tune[images][]', fs.createReadStream(`./samples/${file}`), file);
    }
  });
  formData.append('tune[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1');

  let options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + API_KEY
    },
    body: formData
  };
  return fetch(DOMAIN + '/tunes', options)
    .then(r => r.json())
    .then(r => console.log(r));
}

createTune();

```
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests
headers = {'Authorization': f'Bearer {API_KEY}'}

def load_image(file_path):
  with open(file_path, "rb") as f:
    return f.read()

# Assuming `prompts` and `tune.images` are already defined in your context

image_data = load_image("assets/image.jpeg")

data = {
  "tune[title]": "John Doe - UUID - 1234-6789-1234-56789",
  "tune[name]": "man",
  "tune[preset]": "flux-lora-portrait",
  "tune[base_tune_id]": 1504944,
  "tune[model_type]": "lora",
}
files = []

for image in tune.images:
  image_data = load_image(image)  # Assuming image is a file path
  files.append(("tune[images][]", image_data))

API_URL = 'https://api.astria.ai/tunes'
response = requests.post(API_URL, data=data, files=files, headers=headers)
response.raise_for_status()

```
  </TabItem>
</Tabs>


### Step 2: Generate images using the fine-tuned model
#### POST /tunes/:id/prompts

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
# Note the hard-coded 1504944 which is the tune_id of Flux1.dev from the gallery
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1504944/prompts \
          -F prompt[text]="<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh" \
          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" 
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const fetch = require('node-fetch');
const FormData = require('form-data');

// Note the hard-coded 1504944 which is the tune_id of Flux1.dev from the gallery
const API_URL = 'https://api.astria.ai/tunes/1504944/prompts';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

const form = new FormData();
form.append('prompt[text]', '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh');
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

# Note the hard-coded 1504944 which is the tune_id of Flux1.dev from the gallery
API_URL = 'https://api.astria.ai/tunes/1504944/prompts'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

data = {
  'prompt[text]': '<lora:tune_id:strength> a painting of ohwx man in the style of Van Gogh',
  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'
}
files = []

response = requests.post(API_URL, headers=headers, data=data)
```
  </TabItem>
</Tabs>

</div>
</div>
