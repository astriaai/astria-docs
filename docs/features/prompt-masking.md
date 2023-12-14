# Prompt Masking

Prompt masking uses a short text to create a mask from the input image. The mask can then be used to inpaint parts of the image. Use the below parameters as part of the prompts to use auto-masking

Prompt masking can be used for [product shots](/docs/use-cases/product-shots) or [Masked Portraits](/docs/use-cases/masked-portraits).

### Syntax

Below parameters should be used as text inside the prompt text

#### `--mask_prompt`
A short text like `foreground` or `face`, `head` or `person`.

#### `--mask_negative`
A space separated list of words that should not appear in the mask. e.g: `clothes hat shoes`

#### `--mask_invert`
Inverts the mask

#### `--mask_dilate`
Dilates the mask. Negative values will erode the mask.

#### `--hires_denoising_strength`
Denoising strength for hires-fix. Use hi-res fix with prompt-masking to smooth the colors and blending. Range 0-1. Default: 0.4.



```text
realistic digital painting, astronaut in a garden on a spring day, by martine johanna and simon stalenhag and chie yoshii and casey weldon and wlop, ornate, dynamic, particulate, rich colors, intricate, elegant, highly detailed, harpers bazaar art, fashion magazine, smooth, sharp focus, 8 k, octane rende --mask_prompt foreground --mask_negative clothes --mask_invert --mask_dilate -20 --hires_denoising_strength 0.1
num_images=1
negative_prompt=clay, text, watermark, padding, cropped, typography
seed=
steps=30
cfg_scale=
controlnet=pose
input_image_url=https://sdbooth2-production.s3.amazonaws.com/esfd53purhhcijhmzka4c364x6lb
mask_image_url=
denoising_strength=
controlnet_conditioning_scale=
controlnet_txt2img=false
super_resolution=true
inpaint_faces=false
face_correct=true
film_grain=false
face_swap=false
hires_fix=true
prompt_expansion=false
ar=1:1
scheduler=dpm++sde_karras
color_grading=
use_lpw=true
w=
h=
```
