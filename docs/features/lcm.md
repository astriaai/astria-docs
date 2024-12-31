---
image: ./img/schedulers-lcm.jpeg
---

# Latent Consistency Models

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>DPM SDE Karras 30 steps <br/> 15 seconds for 8 images</figcaption>

![source.png](./img/schedulers-dpm-sde-karras.jpeg)
</div>

<div>
<figcaption>
LCM scheduler 6 steps <br/> 4 seconds for 8 images
</figcaption>

![faceid-output.png](./img/schedulers-lcm.jpeg)
</div>

</div>

## Overview
Latent Consistency Models (LCM) is a combination of a scheduler and a LoRA which allow generation within 5-6 steps thus reducing processing time significantly.


## Usage
Select the `lcm` scheduler from the Schedulers dropdown. For API usage see [prompt API](/docs/api/prompt/create#scheduler-optional).
