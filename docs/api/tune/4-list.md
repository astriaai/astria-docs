---
title: List all tunes
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div class="api-method">
<div>


No parameters

### Returns

An array of all fine-tunes owned by the authenticated user
</div>

<div>

#### GET /tunes
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/tunes
```

</TabItem>
  <TabItem value="nodejs" label="Node.js">
  </TabItem>
  <TabItem value="python" label="Python">
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


## Create a tune

<div class="api-method">
<div>

Creates a new fine-tune model from training images which in turn will be used to create prompts and generate images.

#### 

##### 

### Returns

Returns a fine-tune object if successful which will start training immediately and call callback once training is complete.

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
  </TabItem>
  <TabItem value="python" label="Python">
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

