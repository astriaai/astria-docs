---
tags: [upscaling, super-resolution, image enhancement, creative upscaler, clarity, magnific]
image: ./img/tiled-upscale/tiledupscale_v2-1.jpeg
---
# Tiled upscale

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Super-Resolution</figcaption>

![Super resolution](./img/tiled-upscale/sr-1.jpeg)
</div>
<div>
<figcaption>HiRes fix</figcaption>

![Hi-Res fix](./img/tiled-upscale/hiresfix-1.jpeg)
</div>
<div>
<figcaption>Tiled upscale V2</figcaption>

![Tiled upscale V2](./img/tiled-upscale/tiledupscale_v2-1.jpeg)
</div><div>
<figcaption>Tiled upscale</figcaption>

![Tiled upscale](./img/tiled-upscale/tiledupscale-1.jpeg)
</div>
</div>

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Super-Resolution</figcaption>

![Super Resolution](./img/tiled-upscale/sr-1-detail.jpeg)
</div>
<div>
<figcaption>HiRes fix</figcaption>

![HiRes fix](./img/tiled-upscale/hiresfix-1-detail.jpeg)
</div>
<div>
<figcaption>Tiled upscale v2</figcaption>

![Tiled upscale V2](./img/tiled-upscale/tiledupscale_v2-1-detail.jpeg)
</div><div>
<figcaption>Tiled upscale</figcaption>

![Tiled upscale](./img/tiled-upscale/tiledupscale-1-detail.jpeg)
</div>
</div>

See example prompts in the [gallery](https://astria.ai/gallery?text=tiled_upscale).

## Overview
Tiled upscale iterates over tiles of the image to upscale them individually while using Tile controlnet to remove blur, add details to the generated image, improve skin tones and give a more realistic look. 
See example prompts in the [gallery](https://www.astria.ai/gallery?text=tiled_upscale)

## Usage
To enable tiled upscale, add `--tiled_upscale_v2` to the prompt text, or `--tiled_upscale` for the legacy version.
Tiled upscale V2 requires Backend V1.
Customize parameters tiled upscale if needed with the following flags and the default values:

1. `--hires_cfg_scale 5.5`
1. `--resemblance 0.65`

See [pricing](https://www.astria.ai/pricing) for the cost details.

## Tiled Upscale V2
Tiled upscale V2 uses SDXL tile controlnet which better preserves identity and similarity while adding details and skin tones, and helps avoid the oversmoothing and painterly look of the original image.

## Example

```text
photograph of a woman, (smiling facial expression:1.1), textured skin, goosebumps, (blonde hair:1.2), (unbuttoned white shirt:1.2), distressed boyfriend jeans, long sleeves, (candlelight,chiaroscuro:1.1), cowboy shot, dark and mysterious cave with unique rock formations and hidden wonders, perfect eyes, Porta 160 color, shot on ARRI ALEXA 65, bokeh, sharp focus on subject, shot by Don McCullin --tiled_upscale_v2
num_images=2
negative_prompt=nude, nsfw, (CyberRealistic_Negative-neg:0.8), (deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3), poorly drawn, bad anatomy, wrong anatomy, extra limb, missing limb, floating limbs, disconnected limbs, mutation, mutated, ugly, disgusting, amputation
seed=43
steps=30
cfg_scale=
controlnet=
input_image_url=
mask_image_url=
denoising_strength=
controlnet_conditioning_scale=
controlnet_txt2img=false
super_resolution=true
inpaint_faces=false
face_correct=false
film_grain=false
face_swap=false
hires_fix=false
ar=1:1
scheduler=dpm++sde_karras
color_grading=
use_lpw=true
w=512
h=768
```
