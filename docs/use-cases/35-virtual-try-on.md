---
hide_table_of_contents: true
tags: [virtual try-on, fashion, e-commerce, clothing, garment, backend-v1, VTON]
---
import trainingImage from './img/ai-photoshoot-input.png';
import garmentImage from './img/virtual-try-on-jcrew-swimming-suit.webp';

# Virtual Try-on
**BETA. Backend V1 feature. Price changes still pending.**

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>

<div>

<figcaption>Training images</figcaption>

<img src={trainingImage} alt="Fine-tuning training images" style={{height: 375}} />

<figcaption>Garment / Clothing</figcaption>

<img src={garmentImage} alt="Virtual try on J. Crew swimming suit" style={{height: 375}} />
</div>

<div>
<figcaption>Generated images</figcaption>

![Person + Garment](./img/virtual-try-on-swimming-suit-generated.jpg)
</div>
</div>

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>

<div>

<figcaption>Garment / Clothing</figcaption>

![Garment / Clothing](./img/virtual-try-on-northface-parka.webp)
</div>

<div>
<figcaption>Generated images</figcaption>

![Person + Garment](./img/virtual-try-on-northface-parka-generated.jpg)
</div>
</div>

More examples in the gallery - [Swimming suit](https://www.astria.ai/gallery?text=faceid%3A1227460) and [Parka](https://www.astria.ai/gallery?text=faceid%3A1228120). See also the article walkthrough on [virtual try-on](https://www.astria.ai/articles/virtual-tryon/).

## Overview

Virtual try-on is the term for the process of generating images of a person wearing a specific garment or clothing item. This can be useful for e-commerce websites, fashion designers, or even for personal use.

To use Astria's virtual try-on feature, you need to create:

1. A model of the person you want to dress up ideally through [fine-tuning](/docs/use-cases/ai-photoshoot)
1. A [faceid](/docs/features/faceid) fine-tune of the garment you want to try on. The faceid class name should be `clothing`, `shirt` or `pants`. Class name  is used to identify the garment in the image and remove the original model in case a reference image with a fashion model is used.

For prompting, use both the fine-tuned model of the person and the faceid reference of the garment. See below reference example prompt. Ideally you should try to describe the background/scene and type of cloth the person is wearing. In case a reference image to the garment includes a fashion model, a better alternative to this, could be to use the input image as a reference pose as well as img2img to bring some of the background features into the image. For example a swimming suit reference image might feature a background pool, while a reference parka might feature a snowy background. 

It is recommended to use 3:4 aspect-ratio - `512x680` width x height for the input image.


````text
<faceid:1227460:1> ohwx woman wearing a swimming suit, high resolution fashion photoshoot, UHD
num_images=4
negative_prompt=old, wrinkles, mole, blemish, scar, sad, severe, 3d, cg
seed=
steps=30
cfg_scale=
controlnet=pose
input_image_url=https://sdbooth2-production.s3.amazonaws.com/7cw0uwxugd4g22qobjlow6h5gbcv
mask_image_url=
denoising_strength=0.9
controlnet_conditioning_scale=0.4
controlnet_txt2img=false
super_resolution=true
inpaint_faces=true
face_correct=false
film_grain=false
face_swap=true
hires_fix=true
backend_version=1
prompt_expansion=undefined
ar=1:1
scheduler=dpm++sde_karras
color_grading=
use_lpw=true
w=
h=
````
