---
image: ./img/sdxl-output.jpg
---
import sdxlOutput from './img/sdxl-output.jpg';
import sdxlInput from './img/ai-photoshoot-input.jpg';

# SDXL training
## Overview

**Stable Diffusion XL** or **SDXL** is the 2nd gen image generation model that is tailored towards more photorealistic outputs with more detailed imagery and composition. SDXL can generate realistic faces, legible text within the images, and better image composition, all while using shorter and simpler prompts.


:::info

`LoRA + Text-embedding` is currently the only option for fine-tuning SDXL.

:::

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
Input training images

<img src={sdxlInput} alt="generated.png" />
</div>

<div>
Output images

<img src={sdxlOutput} alt="generated.png" />

</div>
</div>

## Training tips

Default token for SDXL should be `ohwx` and will be set automatically if none is specified

## Inference tips

1. Do not copy and paste prompts from SD15
1. Do not use textual-inversions such as `easynegative` or `badhands` from SD15
1. Consider activating face-swap and face-inpainting (which in turn requires super-resolution) - this is the biggest boost you can get to increase similarity to subject
1. Use clean small concise prompts - usually up to 15 words
1. Avoid long negatives - this will decrease similarity to subject.
1. Start with baseline SDXL 1.0 inference before going to other base models. Most custom SDXL models are biased and may reduce similarity. Models which we noticed that work okay are `ZavyChromaXL` and `ClearChromaXL`

All above tips will help increase similarity to the original subject.

## Aspect ratios
The below aspect ratios are recommended for SDXL inference since these were also used for the training.
```text
aspect: width, height
0.5: 704, 1408
0.52: 704, 1344
0.57: 768, 1344
0.6: 768, 1280
0.68: 832, 1216
0.72: 832, 1152
0.78: 896, 1152
0.82: 896, 1088
0.88: 960, 1088
0.94: 960, 1024
1.0: 1024, 1024
1.07: 1024, 960
1.13: 1088, 960
1.21: 1088, 896
1.29: 1152, 896
1.38: 1152, 832
1.46: 1216, 832
1.67: 1280, 768
1.75: 1344, 768
1.91: 1344, 704
2.0: 1408, 704
2.09: 1472, 704
2.4: 1536, 640
2.5: 1600, 640
2.89: 1664, 576
3.0: 1728, 576
```

## API usage
See here for [API usage](/docs/api/sdxl-api)
