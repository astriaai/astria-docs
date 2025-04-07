---
title: Retrieve a pack
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="api-method">
<div>

### Parameters


### Returns

A pack object

</div>

<div>

#### `GET /p/:id`
<Tabs groupId="lang">
  <TabItem value="curl" label="cURL" default>

```bash showLineNumbers
curl -X GET -H "Authorization: Bearer $API_KEY" https://api.astria.ai/p/260
```

</TabItem>
  <TabItem value="nodejs" label="Node.js">

```javascript showLineNumbers
const headers = { Authorization: `Bearer ${API_KEY}` }
fetch('https://api.astria.ai/p/260', { headers: headers });
```
  </TabItem>
  <TabItem value="python" label="Python">

```python showLineNumbers
import requests
headers = {'Authorization': f'Bearer {API_KEY}'}
# 260 is the ID for Corporate headshots as can be seen from https:
requests.get('https://api.astria.ai/p/260')
```

</TabItem>
</Tabs>

#### Response
```json

{
  "id": 260,
  "slug": "corporate-headshots",
  "title": "Corporate Headshots",
  "cover_url": "https://sdbooth2-production.s3.amazonaws.com/2bcwnrw4tlwbk8nao4yy8lx1s9h3",
  "created_at": "2024-09-02T19:25:12.970Z",
  "updated_at": "2025-04-01T13:20:02.258Z",
  "public_at": "2025-02-16T17:13:02.204Z",
  "unlisted_at": null,
  "costs": {
    "woman": {
      "cost": 360,
      "num_images": 35
    },
    "man": {
      "cost": 331,
      "num_images": 28
    }
  },
  "logo": null,
  "prompts_per_class": {
    "woman": [
      {
        "id": 18771572,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/2bcwnrw4tlwbk8nao4yy8lx1s9h3"
        ]
      },
      {
        "id": 18757251,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/mqqy8pkso90o8nab2g9j78mxkdsz"
        ]
      },
      {
        "id": 18771293,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/xgsoxkb3sh27ypt9ils82dbn5yf7"
        ]
      },
      {
        "id": 18757403,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/xmcfwg94lozsd4ysyeotx12p7ugm"
        ]
      },
      {
        "id": 18154012,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/454fdzlr0mku877k5o673an9pw3x"
        ]
      },
      {
        "id": 18757419,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/ro1vzwq80gpv4im7tonldmnug72k"
        ]
      },
      {
        "id": 18757394,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/7sf3e08m96gnncvkbsi5fj7sabcw"
        ]
      },
      {
        "id": 18154062,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/y8mhne4jq6kpyu72p4u2l7y2gqrc"
        ]
      },
      {
        "id": 18771285,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/nof0w9vt2oqn5fjyvfgigirkk2xv"
        ]
      },
      {
        "id": 18757417,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/2ci6mivj2ts7ca6jd8zo8gm70svs"
        ]
      },
      {
        "id": 18154057,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/e7pze066waisb4vegu5yjyxc38nf"
        ]
      },
      {
        "id": 18757384,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/k4znhieok9ymvrvnksd4xowxypl5"
        ]
      },
      {
        "id": 18757413,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/woxeo4jiew9qclwa95ogd09e7pap"
        ]
      },
      {
        "id": 18757392,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/fregv8irmvi1jz6xb3zk33skwbdf"
        ]
      },
      {
        "id": 18757386,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/y6tln7ne1pw60aspnkd1ypowxxma"
        ]
      },
      {
        "id": 18757409,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/lgczl22k3m06cbra1wf34vkn33i0"
        ]
      },
      {
        "id": 18757405,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/d5jechxzfn8k1veygw6ns7viqjnj"
        ]
      },
      {
        "id": 18757290,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/1o3q21spidcnv6xsmnwstntax65o"
        ]
      },
      {
        "id": 18757226,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/ly8df92ab7s2xkt4xy1tuicd8i15"
        ]
      },
      {
        "id": 18757382,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/i11hsfkatd8zziqxeatbs4o0iw2o"
        ]
      },
      {
        "id": 18757247,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/3lba23ytczziiuouwmnmd2ke9oh3"
        ]
      },
      {
        "id": 18757253,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/kd46uds988jbpgu35aoghlc4guwe"
        ]
      },
      {
        "id": 18154064,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/g4ohemnoz4ve3ssawb0rast3867k"
        ]
      },
      {
        "id": 18154068,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/97yneidkm3nl275tqmiabytnnoen"
        ]
      },
      {
        "id": 18154059,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/6e8ye00r8rcuzejvszfl8wl1m6xw"
        ]
      },
      {
        "id": 18154058,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/z7drqm7tu1fs1v6tba1mye5mhyb2"
        ]
      },
      {
        "id": 18154009,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/cl7pu7ebxgu98oaq4rjkg4ykscgd"
        ]
      },
      {
        "id": 18154060,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/0cv0a0wdwambgaif6lhofxz5kuga"
        ]
      },
      {
        "id": 18154069,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/ovs4wso4asyczldipvsp3nfxer7s"
        ]
      },
      {
        "id": 18154066,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/sa8tefczlcmc5j8ppdkmgy7uxti4"
        ]
      },
      {
        "id": 18154063,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/mh19o5gjwdqe1zqz3md535upllrx"
        ]
      },
      {
        "id": 18154037,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/31frodk147mm4b4f5dn1lvzsmnz7"
        ]
      },
      {
        "id": 18153917,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/vjlhep0s4q0bqaid5z32mqnxnf8n"
        ]
      },
      {
        "id": 18154070,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/radhxzdq6sr0sxv8s67qu474yftr"
        ]
      },
      {
        "id": 18153908,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/jtoet29sw47kwz0jdtfv6dyqnpm8"
        ]
      }
    ],
    "man": [
      {
        "id": 20522328,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/ztcxkfplkueodbdkbq8qkj965vrx"
        ]
      },
      {
        "id": 20522331,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/22sa2fq874o0z8wpser53zma7qku"
        ]
      },
      {
        "id": 20522335,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/utzcu4pumwd4kflptywhghuool5y"
        ]
      },
      {
        "id": 20522336,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/re03pkw4nc40q0y5x0wz0zc9p04l"
        ]
      },
      {
        "id": 20522334,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/t8ur3h819yw2b6mw4mokawojvzf3"
        ]
      },
      {
        "id": 20522330,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/9wlfocca3p0p6yzg0m9j5bqkllz6"
        ]
      },
      {
        "id": 20522333,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/pez7v0g5ykyn2qnyt8exn6g6y9qh"
        ]
      },
      {
        "id": 20522332,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/bhyagb16jgbwf93lff68n88g9mnt"
        ]
      },
      {
        "id": 20522329,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/bdec2pzrfkp0cumut2mu28x0w831"
        ]
      },
      {
        "id": 20522319,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/mcqktjejj2am8vakmo1jy6x89u9f"
        ]
      },
      {
        "id": 20522326,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/zgxuuk9ike8aprzkr69ee1hi4a05"
        ]
      },
      {
        "id": 20522325,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/437q3vc2kev1c9ifuw9ku2mh7hhb"
        ]
      },
      {
        "id": 20522327,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/3jrqpxpqovqvtucv42k475jcgapj"
        ]
      },
      {
        "id": 20522323,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/ky4dymc6sikvbpas4x6ibcebje8e"
        ]
      },
      {
        "id": 20522324,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/ri8o1b9oqiptco337smscpgdatu2"
        ]
      },
      {
        "id": 20522322,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/8rmzuvsdvmjpcxexk49mu7yuoqih"
        ]
      },
      {
        "id": 20522320,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/kvhdjabbo36mdgo4po9brxb2429q"
        ]
      },
      {
        "id": 20522321,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/gjsa2b9tmzab3z1rw26672ssj49v"
        ]
      },
      {
        "id": 20522318,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/r146nnaqi6ajdi7ps4ntde733x9h"
        ]
      },
      {
        "id": 20522317,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/od671xzlqtbf4w50xg7v7m2wj6fa"
        ]
      },
      {
        "id": 20522316,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/v6dufsuyvl3vtdi3w378alobddb0"
        ]
      },
      {
        "id": 20522315,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/hhmnwywssmwdjw3szaw05g214ug3"
        ]
      },
      {
        "id": 20522314,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/6ehqi82hvo98b4oqx62lsreq96yp"
        ]
      },
      {
        "id": 20522313,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/iijch9udr733sx72hed6c7je8ecw"
        ]
      },
      {
        "id": 20522312,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/gb7ljis37o5rrpqbhqvl9kyzjwbl"
        ]
      },
      {
        "id": 20522311,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/0kqbkqzz5ao103iouxikzp1pfa9i"
        ]
      },
      {
        "id": 20522310,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/8nbcipiqbqt511y2y1zz4z1nrzpi"
        ]
      },
      {
        "id": 20522309,
        "images": [
          "https://sdbooth2-production.s3.amazonaws.com/lvpq080bnf1hxcxhandv41mhtviv"
        ]
      }
    ]
  }
}
```
</div>
</div>

