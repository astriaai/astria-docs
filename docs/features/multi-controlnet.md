# Multi-Controlnet 
** Available only for [Backend V1](/docs/features/backend-v1)**

# Product shots

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Input image</figcaption>

![Input image](./img/multi-controlnet/multicontrolnet-input-image.jpeg)
</div>

<div>
<figcaption>Controlnet reference+pose</figcaption>

![Controlnet reference+pose](./img/multi-controlnet/multicontrolnet-reference-pose.jpeg)
</div>

<div>
<figcaption>Controlnet pose only</figcaption>

![Controlnet pose only](./img/multi-controlnet/multicontrolnet-pose-only.jpeg)
</div>

</div>



Use multiple controlnet to get better consistency and precision.

See example prompts in the [gallery](https://www.astria.ai/gallery?text=controlnets).


### Syntax

Below parameters should be used as text inside the prompt text at the **end** of the prompt:

#### `--controlnets`
Space separated list of controlnets.
For SD1.5: `pose`, `depth`, `mlsd`, `tile`, `canny`, `lineart`, `normal`, `faceid`, `reference`
For SDXL: `canny`, `pose`, `depth`, `tile`, `reference`

#### `--controlnet_weights`
Space separated list of weights for each controlnet. Range 0-1. Default: 1

### Example 
Reference + Pose example from above

```text
ohwx woman --controlnets pose reference --controlnet_weights 1 0.8
num_images=1
negative_prompt=
seed=
steps=30
cfg_scale=
controlnet=pose
input_image_url=https://sdbooth2-production.s3.amazonaws.com/wh7m8lvx42dtz1n8av4fx37pb2jz
mask_image_url=
denoising_strength=0.8
controlnet_conditioning_scale=0.4
controlnet_txt2img=false
super_resolution=true
inpaint_faces=true
face_correct=false
film_grain=true
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
```
