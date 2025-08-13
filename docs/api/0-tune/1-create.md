---
title: Create a tune
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.

:::info
To avoid cloning inference details of different model types such as Flux LoRA vs SD1.5 checkpoint, please consider using the [Packs API](/docs/api/pack/pack/). Packs will help you abstract the inference logic so that you do not have to hard-code prompts and parameters such as `w,h, cfg_scale` in your backend. Moreover this will allow the creative department to launch packs, make modifications and even track likes, without needing to touch the backend code.
:::


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
A webhook URL to be called when the tune is finished training. The webhook will receive a POST request with the tune object. See [more on callbacks](/docs/api/overview#callbacks).

#### `branch` (optional)
Enum: `flux1`,`sd15`, `sdxl1`, `fast`. Will default to the `base_tune` branch if not specified, or to `sd15` if `base_tune` is not specified.

:::info
Use `branch=fast` for [mock testing](https://docs.astria.ai/docs/api/overview#mock-testing)
:::

#### `steps` (optional)
Training steps. Recommended leaving blank in order to allow better defaults set by the system.

#### `token` (optional)
Unique short text to which the features will be embedded into. Default `ohwx` for SDXL and `sks` for SD15.

#### `face_crop` (optional)
Detects faces in training images and augments training set with cropped faces. Defaults to [account setting](https://www.astria.ai/users/edit)

#### `training_face_correct` (optional)
Enhance training images using GFPGAN. Consider enabling if input image are low quality or low resolution. May result in over-smoothing.

#### `base_tune_id` (optional)
Training on top of former fine-tune or a different baseline model from the [gallery](https://www.astria.ai/gallery/tunes) (id in the URL). e.g: `1504944` - Flux1.dev

#### `model_type` (optional)
Enum: `lora`, `pti`, `faceid`, `null` for checkpoint.
For SDXL1 - API will default to `pti` and will ignore `model_type` parameter.

#### `auto_extend` (optional)
Boolean: `true`, `false`. If `true`, the tune will be automatically extended when it expires. Default is `false`. See [pricing](https://www.astria.ai/pricing). 

#### `preset` (optional)
Enum: `flux-lora-focus`, `flux-lora-portrait`, `flux-lora-fast` see details in the GUI, `null`. See [Flux lora training](/docs/use-cases/flux-finetuning/) for more information.

#### `characteristics` (optional)
A free-form object that can be used to templatize the prompts text. e.g: `{"eye_color": "blue eyes"}` would than be used in the prompt text as `ohwx woman, {{eye_color}}, holding flowers`.

#### `prompts_attributes` (optional)
Array of prompts entities with all attributes. See [create prompt](/docs/api/prompt/create) for more information.

### Returns

Returns a tune object if successful which will start training immediately and call callback once training is complete.

</div>

<div>

#### POST /tunes

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
# With imags as multipart/form-data
# Hard coded tune id of Flux1.dev - https://www.astria.ai/gallery/tunes 
curl -X POST -H "Authorization: Bearer $API_KEY" http://localhost:3000/tunes \
          -F "tune[title]=Jane Doe - UUID - 1234-6789-1234-56789" \
          -F "tune[name]=woman" \
          -F "tune[base_tune_id]=1504944" \
          -F "tune[model_type]=lora" \
          -F "tune[token]=ohwx" \
          -F "tune[images][]=@1.jpg" \
          -F "tune[images][]=@2.jpg" \
          -F "tune[images][]=@3.jpg" \
          -F "tune[images][]=@4.jpg" \
          -F "tune[prompts_attributes][][text]=ohwx woman holding flowers" \
          -F "tune[prompts_attributes][][inpaint_faces]=true" \
          -F "tune[prompts_attributes][][super_resolution]=true"

# With image_urls as form-data
# Hard coded tune id of Flux1.dev - https://www.astria.ai/gallery/tunes 
curl -X POST -H "Authorization: Bearer $API_KEY" http://localhost:3000/tunes \
          -F "tune[title]=Jane Doe - UUID - 1234-6789-1234-56789" \
          -F "tune[name]=woman" \
          -F "tune[base_tune_id]=1504944" \
          -F "tune[model_type]=lora" \
          -F "tune[token]=ohwx" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[image_urls][]=https://i.imgur.com/HLHBnl9.jpeg" \
          -F "tune[prompts_attributes][][text]=ohwx woman holding flowers" \
          -F "tune[prompts_attributes][][inpaint_faces]=true" \
          -F "tune[prompts_attributes][][super_resolution]=true"
          
# As JSON
cat > data.json <<- EOM
{
  "tune": {
    "title": "Jane Doe - UUID - 1234-6789-1234-56789",
    "name": "cat",
    "branch": "fast",
    "callback": "https://optional-callback-url.com/to-your-service-when-ready?user_id=1&tune_id=1",
    "image_urls": [
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg"
    ],
    "prompts_attributes": [
      {
        "text": "<lora...> ohwx woman holding flowers",
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
        "title": 'Jane Doe - UUID - 1234-6789-1234-56789',
        // Hard coded tune id of Flux1.dev - https://www.astria.ai/gallery/tunes 
        "base_tune_id": 1504944,
        "name": "woman",
        "model_type": "lora",
        "token": "ohwx",
        "image_urls": [
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg",
          "https://i.imgur.com/HLHBnl9.jpeg"
        ],
        "prompts_attributes": [
          {
            "text": "ohwx woman holding flowers",
            "inpaint_faces": true,
            "super_resolution": true
          }
        ]
      }
    })
  };
  return fetch(DOMAIN + '/tunes', options)
    .then(r => r.json())
    .then(r => console.log(r))
}

createTune()
```
  </TabItem>
  <TabItem value="python" label="Python">

```python
import requests

API_KEY = 'sd_XXXXXX'
headers = {'Authorization': f'Bearer {API_KEY}'}

def load_image(file_path):
  with open(file_path, "rb") as f:
    return f.read()

# With image_urls as JSON
data = {
  "tune": {
    "title": "Jane Doe - UUID - 1234-6789-1234-56789",
    "name": "woman",
    "base_tune_id": 1504944,  # Hard coded tune id of Flux1.dev
    "model_type": "lora",
    "token": "ohwx",
    "image_urls": [
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg",
      "https://i.imgur.com/HLHBnl9.jpeg"
    ],
    "prompts_attributes": [
      {
        "text": "ohwx woman holding flowers",
        "inpaint_faces": True,
        "super_resolution": True
      }
    ]
  }
}

API_URL = 'https://api.astria.ai/tunes'
response = requests.post(API_URL, json=data, headers=headers)
response.raise_for_status()
```
  </TabItem>
</Tabs>

#### Response

```json

{
  "id": 1,
  "title": "John Doe - UUID - 1234-6789-1234-56789",
  "name": "woman",
  "token": "ohwx",
  "base_tune_id": null,
  "args": null,
  "steps": null,
  "face_crop": null,
  "training_face_correct": false,
  "ckpt_url": "https://sdbooth2-production.s3.amazonaws.com/mock",
  "ckpt_urls": [
    "https://sdbooth2-production.s3.amazonaws.com/mock"
  ],
  "eta": "2023-10-02T14:32:40.363Z",
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
}
```
</div>
</div>

