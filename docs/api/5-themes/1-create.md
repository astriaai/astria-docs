---
title: Create a theme
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

Themes API leverages a LLM (Large Language Models) to generate a variety of prompts based on a theme. The theme can be a short description of a concept, a mood, or a style. The API call will create 10 prompts which will start processing and generating images.

### Parameters

#### `theme` (required)
Class name of the object to be inspected in the image. Currently only `man`, `woman` are supported.

#### `tuen_ids` (requires)
A list of tune ids to be used for the theme. For each tune, 10 prompts will be generated.

#### `prompt_attributes` (optional)
`num_images, w, h` can be overridden


### Returns
Returns empty response with status code 201. The themes are created in the background and can be pulled using `GET /tunes/:id/prompts`.


</div>
<div>

#### POST /themes
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers

curl -X POST "https://api.astria.ai/themes" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -F "theme[theme]=Corporate headshots" \
  -F "theme[tune_ids][]=123" \
  -F "theme[prompt_attributes][num_images]=123"
````

  </TabItem> 
  <TabItem value="python" label="Python">

```python
import requests

url = "https://api.astria.ai/themes"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json",
  "Accept": "application/json"
}
data = {
    "theme": "Corporate headshots",
    "tune_ids": [123],
    "prompt_attributes": {
        "num_images": 123
    }
}

response = requests.post(url, headers=headers, data=data)
print(response.json())
```

  </TabItem>
  <TabItem value="javascript" label="Node.js">

```javascript
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const url = "https://api.astria.ai/themes";
axios.post(url, {
  theme: "Corporate headshots",
  tune_ids: [123],
  prompt_attributes: {
    num_images: 123
  }
}, {
  headers: {
    "Authorization": `Bearer YOUR_API_KEY`,
      "Content-Type": "application/json",
      "Accept": "application/json"
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

200 OK - empty body response

</div>
</div>
