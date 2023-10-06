# SDXL training
## Overview

**Stable Diffusion XL** or **SDXL** is the latest image generation model that is tailored towards more photorealistic outputs with more detailed imagery and composition. SDXL can generate realistic faces, legible text within the images, and better image composition, all while using shorter and simpler prompts.


:::info

`LoRA + Text-embedding` is currently the only option for fine-tuning SDXL.

:::

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
Input training images

![source.png](./img/ai-photoshoot-input.png)
</div>

<div>

Output images

![generated.png](./img/sdxl-output.jpeg)
</div>
</div>

## Training tips

1. Default token for SDXL should be `ohwx` and will be set automatically if none is specified
2. Training resolution is - make sure training images are at least 1024x1024px

## Inference tips

1. Activate face-inpainting (which in turn requires super-resolution) - this is the biggest boost you can get to increase similarity to subject
2. Use `euler_a` scheduler
3. Do not copy and paste prompts from SD15
4. Use clean small concise prompts - usually up to 15 words
5. Avoid long negatives.
6. Do not use textual-inversions such as `easynegative` or `badhands` from SD15
7. Start with baseline SDXL 1.0 inference before going to other base models. Most custom SDXL Civit model available are very biased and may reduce similarity. Models which we noticed that work okay are `ZavyChromaXL` and `ClearChromaXL`

## Aspect-ratios
```text
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
All above tips will help increase similarity to the original subject.

## API tips

1. Unlike SD15 checkpoint training, SDXL on Astria is trained as a LoRa+text-embedding. As such, inference is taking place a on a base line model such as SDXL 1.0 and `prompt.text` should specify the loaded lora such as `<lora:123456:0.83>` - will load lora with id=123456 and strength=0.83
2. Inference API can call ``POST [https://api.astria.ai/prompts](https://www.astria.ai/prompts)` with `tune_id=666678`or [`https://api.astria.ai/tunes/666678/prompts`](https://www.astria.ai/prompts)
3. See [LoRa docs](/docs/features/loras) on lora syntax
4. Note that you cannot combine or load multiple LoRa+Text-embedding in one prompt, unlike regular LoRa
