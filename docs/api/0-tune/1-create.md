---
title: Create a tune
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.

### Parameters

#### `name` (required)
A class name the describes the fine-tune. e.g: `man`, `woman`, `cat`, `dog`, `boy`, `girl`, `style`

#### `title` (required)
Describes the fine-tune. Ideally a UUID related to the transaction. See [idempotency](/docs/api/overview) for more information.

#### `images` (required)
An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls.

#### `image_urls` (required)
An array of images to train the fine-tune with. The images can be uploaded as multipart/form-data or as image_urls.

#### `callback` (optional)
A webhook URL to be called when the tune is finished training. The webhook will receive a POST request with the tune object.

#### `branch` (optional)
Enum: `sd15`, `sdxl1`

#### `steps` (optional)
Training steps. Recommended leaving blank in order to allow better defaults set by the system.

#### `face_crop` (optional)
Detects faces in training images and augments training set with cropped faces. Defaults to [account setting](https://www.astria.ai/users/edit)

#### `base_tune_id` (optional)
Training on top of former fine-tune or a different baseline model from the [gallery](https://www.astria.ai/gallery/tunes) (id in the URL)

#### `model_type` (optional)
Enum: `lora`, `pti`, `null` for checkopoint.
For SDXL1 - API will default to `pti` and will ignore `model_type parameter.

### Returns

Returns a tune object if successful which will start training immediately and call callback once training is complete.

</div>

<div>

#### POST /tunes

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
# With images as multipart/form-data
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \
          -F tune[callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&tune_id=1" \
          -F tune[title]="my portrait" \
          -F tune[branch]="fast" \
          -F tune[name]=man \
          -F tune[token]=sks \
          -F "tune[prompts_attributes][0][text]=sks man on space circa 1979 on cover of time magazine" \
          -F tune[prompts_attributes][0][callback]="https://optional-callback-url.com/webhooks/astria?user_id=1&prompt_id=1&tune_id=1" \
          -F "tune[images][]=@1.jpg" \
          -F "tune[images][]=@2.jpg" \
          -F "tune[images][]=@3.jpg" \
          -F "tune[images][]=@4.jpg"

# With image_urls as form-data
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes \
          -F tune[callback]="https://optional-callback-url.com/to-your-service-when-ready" \
          -F tune[title]="grumpy cat" \
          -F tune[branch]="fast" \
          -F tune[name]=cat \
          -F tune[token]=sks \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg"
          
# As JSON
cat > data.json <<- EOM
{
  "tune": {
    "name": "cat",
    "branch": "fast",
    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",
    "image_urls": [
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg"
    ],
    "title": "grumpy cat with prompts",
    "prompts_attributes": [
      {
        "text": "sks cat in space circa 1979 French illustration",
        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1"
      },
      {
        "text": "sks cat getting into trouble viral meme",
        "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1"
      }
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
import fetch from "node-fetch";

const API_KEY = 'sd_XXXXXX';
const DOMAIN = 'https://api.astria.ai';

function createTune() {
  let options = {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tune: {
        "title": 'My Tune',
        "name": "cat",
        "branch": "fast",
        "image_urls": [
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg"
        ]
      }
    })
  };
  return fetch(DOMAIN + '/tunes', options)
    .then(r => r.json())
    .then(r => console.log(r))
}

createTune()


/// With form-data, fetch() and nested prompts
import FormData from 'form-data';
import fs from 'fs';
import fetch from "node-fetch";

const API_KEY = 'sd_XXXX';
const DOMAIN = 'https://api.astria.ai';
function createTune() {
  let formData = new FormData();
  formData.append('tune[title]', '1527');
  // formData.append('tune[branch]', 'fast');
  formData.append('tune[name]', 'man');
  formData.append('tune[controlnet]', 'pose');
  formData.append('tune[prompts_attributes][0][callback]', 'https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1&prompt_id=1');
  formData.append('tune[prompts_attributes][0][input_image]', fs.createReadStream(`./samples/pose.png`));
  formData.append('tune[prompts_attributes][0][text]',"sks man inside spacesuit in space")
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

# Assuming `prompts` and `tune_request.images` are already defined in your context
# If not, you should define them before the below code

image_data = load_image("assets/image.jpeg")

data = {}
files = []
for i, prompt in enumerate(prompts):
  data.update({
    f"tune[prompts_attributes][{i}][text]": prompt['text'],
    f"tune[prompts_attributes][{i}][negative_prompt]": prompt['negative_prompt'],
    f"tune[prompts_attributes][{i}][face_correct]": "true",
    f"tune[prompts_attributes][{i}][inpaint_faces]": "true",
    f"tune[prompts_attributes][{i}][super_resolution]": "true",
  })
  if prompt['image_data']:
    data.update({
      f"tune[prompts_attributes][{i}][controlnet]" : prompt['controlnet'],
    })
    files.append((f"tune[prompts_attributes][{i}][input_image]", load_image(prompt['input_image'])))

for image in tune.images:
  image_data = load_image(image)  # Assuming image is a file path
  files.append(("tune[images][]", image_data))

API_URL = 'https://api.astria.ai/tunes'
response = requests.post(API_URL, data=data, files=files, headers=headers)
response.raise_for_status()

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

