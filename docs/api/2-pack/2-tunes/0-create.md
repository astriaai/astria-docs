---
title: Create a tune from a pack
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Creates a new fine-tune model from training images according to the pack base tune id, model type and adds prompts to generate images.

### Parameters

#### `name` (required)
A class name the describes the fine-tune. e.g: `man`, `woman`, `cat`, `dog`, `boy`, `girl`, `style`. Class name must be supported by pack.

#### `title` (required)
Describes the fine-tune. Ideally a UUID related to the transaction. See [idempotency](/docs/api/overview) for more information.

#### `images` (required)
An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls.

#### `image_urls` (required)
An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls.

#### `callback` (optional)
A webhook URL to be called when the tune is finished training. The webhook will receive a POST request with the tune object. See [more on callbacks](/docs/api/overview#callbacks).

#### `characteristics` (optional)
A free-form object that can be used to templatize the prompts text. e.g: `{"eye_color": "blue eyes"}` would than be used in the prompt text as `ohwx woman, {{eye_color}}, holding flowers`.

#### `prompts_attributes.callback` (optional)
A webhook URL to be called when each prompt is finished inference. The webhook will receive a POST request with the prompt object. See [more on callbacks](/docs/api/overview#callbacks).

#### `prompts_callback` (optional)
A webhook URL to be called when all the prompts are finished training. The webhook will receive a POST request with an array of prompts objects.

#### `tune_ids` (optional)
Array of tune ids. If provided, will be used instead of the above attributes to create pack prompts only. 


### Returns

Returns a tune object if successful which will start training immediately and call callback once training is complete.

</div>

<div>

#### POST /p/:pack_id/tunes

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
# With images as multipart/form-data
# Hard coded pack id 43 for corporate headshots from the gallery - https://www.astria.ai/gallery/packs 
# https://www.astria.ai/gallery/tunes/690204/prompts
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/p/43/tunes \
          -F tune[title]="John Doe - UUID - 1234-6789-1234-56789" \
          -F tune[name]=man \
          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1" \
          -F tune[characteristics][eye_color]="blue eyes" \
          -F tune[prompt_attributes][callback]="https://optional-callback-url.com/webhooks/astria_prompts?user_id=1" \
          -F "tune[images][]=@1.jpg" \
          -F "tune[images][]=@2.jpg" \
          -F "tune[images][]=@3.jpg" \
          -F "tune[images][]=@4.jpg"

# With image_urls as form-data
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/p/43/tunes \
          -F tune[title]="Grumpy cat - UUID - 1234-6789-1234-56789" \
          -F tune[name]=cat \
          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready?user_id=1" \
          -F tune[prompt_attributes][callback]="https://optional-callback-url.com/webhooks/astria_prompts?user_id=1" \
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
    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1",
    "characteristics": {"eye_color": "blue eyes"},
    "prompt_attributes": {
      "callback": "https://optional-callback-url.com/webhooks/astria_prompts?user_id=1"
    },
    "image_urls": [
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg"
    ]
  }
}
EOM

# Hard coded pack id 43 for corporate headshots from the gallery - https://www.astria.ai/gallery/packs
curl -X POST -H"Content-Type: application/json" -H "Authorization: Bearer $API_KEY" --data @data.json  https://api.astria.ai/p/43/tunes          
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
        "name": "cat",
        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1",
        "characteristics": {"eye_color": "blue eyes"},
        "prompt_attributes": {
          "callback": "https://optional-callback-url.com/webhooks/astria_prompts?user_id=1"
        },
        "image_urls": [
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg"
        ]
      }
    })
  };
  // Hard coded pack id 43 for corporate headshots from the gallery - https://www.astria.ai/gallery/packs
  return fetch(DOMAIN + '/p/43/tunes', options)
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
  formData.append('tune[name]', 'man');
  formData.append('tune[callback]', 'https://optional-callback-url.com/webhooks/astria?user_id=1');
  formData.append('tune[characteristics][eye_color]', 'blue eyes');
  formData.append('tune[prompt_attributes][callback]', 'https://optional-callback-url.com/webhooks/astria_prompts?user_id=1');
  // Load all JPGs from ./samples directory and append to FormData
  let files = fs.readdirSync('./samples');
  files.forEach(file => {
    if(file.endsWith('.jpg')) {
      formData.append('tune[images][]', fs.createReadStream(`./samples/${file}`), file);
    }
  });
  formData.append('tune[callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1');

  let options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + API_KEY
    },
    body: formData
  };
  // Hard coded pack id 43 for corporate headshots from the gallery - https://www.astria.ai/gallery/packs
  return fetch(DOMAIN + '/p/43/tunes', options)
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

data = {
  "tune[title]": "John Doe - UUID - 1234-6789-1234-56789",
  "tune[name]": "man",
}
files = []

for image in tune.images:
  image_data = load_image(image)  # Assuming image is a file path
  files.append(("tune[images][]", image_data))

API_URL = 'https://api.astria.ai/p/43/tunes'
response = requests.post(API_URL, data=data, files=files, headers=headers)
response.raise_for_status()

```
  </TabItem>
</Tabs>

#### Response

```json

{
  "id": 1,
  "title": "John Doe",
  "name": "woman",
  "eta": "2023-10-02T14:32:40.363Z",
  "trained_at": "2023-10-02T14:32:40.363Z",
  "started_training_at": "2023-10-02T14:32:05.229Z",
  "expires_at": "2023-11-01T14:32:40.363Z",
  "created_at": "2023-10-02T14:32:05.067Z",
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

