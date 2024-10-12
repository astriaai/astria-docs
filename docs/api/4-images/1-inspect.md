---
title: Inspect image
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Inspects an image to extract attributes both for filtering/warning about bad training set images and as `characteristics` to be added to [the fine tune](/docs/api/tune/create/#characteristics-optional).

### Parameters

#### `name` (required)
Class name of the object to be inspected in the image. Currently only `man`, `woman` are supported. 

#### `file` (required)
The image to inspect.

#### `file_url` (optional)
The image url to inspect if `file` is not provided.


### Returns
The below JSON schema is returned. It is possible that some attributes will not be returned.

```JSON
{
    "type": "object",
    "properties": {
      # Templating
      "name": {
        "type": "string",
        "enum": ["man", "woman", "boy", "girl", "baby", "cat", "dog", "NONE"],
      },
      "ethnicity": {
        "type": "string",
        "enum": ["caucasian", "black", "hispanic", "korean", "japanese", "chinese", "philippine"]
      },
      "age": {
        "type": "string",
        "enum": ["20 yo", "30 yo", "40 yo", "50 yo", "60 yo", "70 yo"]
      },
      "glasses": {
        "type": "string",
        "enum": ["glasses", "NONE"]
      },
      "eye_color": {
        "type": "string",
        "enum": ["blue eyes", "brown eyes", "green eyes", "gray eyes", "black eyes", "NONE"],
      },
      "hair_color": {
        "type": "string",
        "enum": ["blonde", "brunette", "red hair", "black hair", "NONE"]
      },
      "hair_length": {
        "type": "string",
        "enum": ["short hair", "medium hair", "long hair", "NONE"]
      },
      "hair_style": {
        "type": "string",
        "enum": ["dreadlocks", "bald", "cornrows", "straight hair", "curly hair", "wavy hair", "NONE"]
      },
      "facial_hair": {
        "type": "string",
        "enum": ["mustache", "beard", "goatee", "NONE"]
      },
      "is_bald": {
        "type": "string",
        "enum": ["bald", "NONE"]
      },
      # Filtering helpers
      "funny_face": {
        "type": "boolean",
      },
      "wearing_sunglasses": {
        "type": "boolean",
      },
      "wearing_hat": {
        "type": "boolean",
      },
      "blurry": {
        "type": "boolean",
      },
      "includes_multiple_people": {
        "type": "boolean",
      },
      "full_body_image_or_longshot": {
        "type": "boolean",
      },
      "selfie": {
        "type": "boolean",
      },
    }
  }

```
</div>
<div>

#### POST /images/inspect
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers

curl -X POST "https://api.example.com/images/inspect" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "name=man" \
  -F "file=@/path/to/your/image.jpg"
````

  </TabItem> 
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.example.com/images/inspect"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}
files = {
    "file": open("/path/to/your/image.jpg", "rb")
}
data = {
    "name": "man"
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const url = "https://api.example.com/images/inspect";
const form = new FormData();
form.append("name", "man");
form.append("file", fs.createReadStream("/path/to/your/image.jpg"));

axios.post(url, form, {
    headers: {
        "Authorization": `Bearer YOUR_API_KEY`,
        ...form.getHeaders()
    }
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error(error);
});
````

</TabItem> 
</Tabs> 

#### Response

```json
{
  "age": "20 yo",
  "blurry": false,
  "ethnicity": "caucasian",
  "eye_color": "brown eyes",
  "facial_hair": "",
  "full_body_image_or_longshot": false,
  "funny_face": false,
  "glasses": "",
  "hair_color": "brunette",
  "hair_length": "medium hair",
  "hair_style": "wavy hair",
  "includes_multiple_people": false,
  "is_bald": "",
  "name": "woman",
  "selfie": true,
  "wearing_hat": false,
  "wearing_sunglasses": false
}
```
</div>
</div>



### Example implementation

The images inspect API is meant to be used by the client-side of your app. The /images/inspect needs to be proxied by your server to avoid exposing your API key to the client.

The example below implements two behaviors
1. `createWarning` notifies the user about an attribute is true such as `funny_face` or `wearing_sunglasses`. The function expects a form input element containing the class `name` selected by the user.
2. `aggregateCharacteristics` aggregates the most common values for each key in the characteristics object and sets the `characteristicsInputTarget` value to the aggregated characteristics.

```javascript
  async inspect(previewEl, file) {
    const form = document.getElementById('new_tune');
    const formValues = Object.fromEntries(new FormData(form));
    const name = formValues['tune[name]'];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    // Proxy the request to avoid exposing the API key
    const response = await fetch('/images/inspect', {
      method: 'POST',
      body: formData
    })
    const data = await response.json();
    if(!data['name']) {
      this.createWarning(previewEl, `Could not detect image`);
    }
    // iterate over hash and if value is true, add a warning message
    Object.keys(data).forEach((key) => {
      if(key === 'name') {
        if (data[key] === '') {
          this.createWarning(previewEl, `Could not detect ${name} in the image`)
        } else if(data[key] && data[key] !== name) {
          this.createWarning(previewEl, `Could not detect ${name} in the image (2)`)
        }
      } else  if(data[key] === true) {
        const warning = capitalizeFirstLetter(key.replace(/_/g, " "));
        this.createWarning(previewEl, warning);
      }
    });
    this.characteristics.push(data);
    this.aggregateCharacteristics();
    previewEl.querySelector('.loading').classList.add('d-none');
    previewEl.querySelector('.remove-btn').classList.remove('d-none');
  }


  aggregateCharacteristics() {
    const aggregated = {};
    // Iterate over this.characteristics and select value which is more common into this.aggregatedCharacteristics
    // use only the characeteristics that are string
    this.characteristics.forEach((characteristic) => {
      Object.keys(characteristic).forEach((key) => {
        if (typeof characteristic[key] === 'string' && characteristic[key] !== '') {
          if (aggregated[key]) {
            aggregated[key].push(characteristic[key]);
          } else {
            aggregated[key] = [characteristic[key]];
          }
        }
      });
    });
    console.log('aggregated', aggregated);
  
    const commonValues = {};
    // find most common value for each key and set aggregatedCharacteristics to that value
    Object.keys(aggregated).forEach((key) => {
      const values = aggregated[key];
      const mostCommonValue = values.sort((a, b) =>
        values.filter(v => v === a).length - values.filter(v => v === b).length
      ).pop();
      commonValues[key] = mostCommonValue;
    });
    console.log('commonValues', commonValues);
    this.characteristicsInputTarget.value = JSON.stringify(commonValues);
  }
  
```
