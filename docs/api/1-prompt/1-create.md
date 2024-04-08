---
title: Create a prompt
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.

### Parameters

#### `text` (required) 
Description of the image.

#### `negative_prompt` (optional) 
A comma separated list of words that should not appear in the image.

#### `callback` (optional) 
a URL that will be called when the prompt is done processing. The callback is a POST request where the body contains the prompt object. See [more](/docs/api/overview#callbacks).

#### `num_images` (optional) 
Number of images to generate. Range: 1-8.

#### `seed` (optional) 
Random number to create consistent results. Range: 0 to 2^32.

#### `super_resolution` (optional) 
Boolean. X4 super-resolution.

#### `inpaint_faces` (optional) 
Boolean. Requires super-resolution on. Inpaints faces.

#### `hires_fix` (optional) 
Boolean. Super resolution details. Available only when super_resolution is true. Adds details.

#### `face_correct` (optional) 
Boolean. Runs another AI model on top to correct the face in the image.

#### `face_swap` (optional) 
Boolean. Uses training images to swap face and enhance resemblance.

#### `cfg_scale` (optional) 
Float. How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt). Range 0-15

#### `steps` (optional) 
Integer. Number of diffusion steps to run . Range 0-50

#### `use_lpw` (optional) 
Boolean. Use weighted prompts.

#### `w` (optional) 
width - In multiples of 8.

#### `h` (optional) 
height - In multiples of 8.

#### `scheduler` (optional) 
enum: `euler`, `euler_a`, `dpm++2m_karras`, `dpm++sde_karras`, `lcm`. If not specified the default [account scheduler](https://www.astria.ai/users/edit) will be used.

#### `backend_version` (optional) 
enum: null, `1`, If not specified will default to the [account version](https://www.astria.ai/users/edit) will be used.

#### `color_grading` (optional) 
enum: `Film Velvia`, `Film Portra`, `Ektar`.

#### `film_grain` (optional)
boolean - Adds noise to the image to make it look more realistic.

## Img2Img / ControlNet

#### `controlnet` (optional) 
Requires input_image. Possible values: composition, reference, ipadapter, lineart, canny, depth, mlsd, hed, pose, pose_with_hand, pose_with_face, pose_face_and_hand, tile, qr.

#### `denoising_strength` (optional)
For img2img. 1.0 - Take prompt. 0.0 - Take image. Range: 0.0-1.0. Default: 0.8

#### `controlnet_conditioning_scale` (optional) 
Strength of controlnet conditioning. 0.0-1.0

#### `controlnet_txt2img` (optional) 
Boolean toggle. True for text to image controlnet. False for image to image controlnet.

#### `input_image` (optional) 
Binary multi-part request with the image. Used in conjunction with controlnet parameter.

#### `input_image_url` (optional) 
URL to an image. Used in conjunction with controlnet parameter.

#### `mask_image` (optional) 
Binary multi-part request with one channel mask image. Used in conjunction with input_image parameter for inpainting

#### `mask_image_url` (optional) 
URL to a one channel mask image. Used in conjunction with input_image_url parameter for inpainting.

### Returns

Returns a prompt object if successful which will start processing if tune is processed.

</div>

<div>

#### POST /tunes/:id/prompts

<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X POST -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes/1/prompts \
          -F prompt[text]="a painting of ohwx man in the style of Van Gogh" \
          -F prompt[negative_prompt]="old, blemish, wrin" \
          -F prompt[super_resolution]=true \
          -F prompt[face_correct]=true \
          -F prompt[callback]="https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1" 
```
  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const fetch = require(`node-fetch');
const FormData = require('form-data');

const API_URL = 'https://api.astria.ai/tunes/1/prompts';
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const headers = { Authorization: `Bearer ${API_KEY}` }

const form = new FormData();
form.append('prompt[text]', 'a painting of ohwx man in the style of Van Gogh');
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

API_URL = 'https://api.astria.ai/tunes/1/prompts'
API_KEY = 'YOUR_API_KEY'  # Replace with your actual API key

headers = {
    'Authorization': f'Bearer {API_KEY}'
}

data = {
  'prompt[text]': 'a painting of ohwx man in the style of Van Gogh',
  'prompt[negative_prompt]': 'old, blemish, wrin',
  'prompt[super_resolution]': True,
  'prompt[face_correct]': True,
  'prompt[callback]': 'https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1'
}
files = []
files.append((f"tune[prompts_attributes][{i}][input_image]", load_image(prompt['input_image'])))

response = requests.post(API_URL, headers=headers, files=files, data=data)
```
  </TabItem>
</Tabs>

#### Response

```json
{
  "id": 1,
  "callback": "https://optional-callback-url.com/to-your-service-when-ready?prompt_id=1",
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
```
</div>
</div>

