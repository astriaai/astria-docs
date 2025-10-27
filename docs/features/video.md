---
image: ./img/image-to-video.jpeg
---
import poster from './img/image-to-video.jpeg';

# Image2Video

**BETA**

<div style={{ display: "grid", gridTemplateColumns: '1fr', gap: '1.5rem' }}>
<div>
<figcaption>Image2Video</figcaption>

<video height="360" alt="Image2Video" autoPlay muted loop playsInline src="https://mp.astria.ai/fw8jm61tk4u6dat7z5sunqp47vys" poster={poster}></video>
</div>
</div>


See example prompts in the [gallery](https://www.astria.ai/gallery?branch=flux1&is_video=true). 

[Pricing](https://www.astria.ai/pricing/video) for video generation.


### Overview

Astria Image2Video uses a multitude of image2video model which provides high-quality video generation from images. 

### Syntax

Below parameters should be used as text inside the prompt text

#### `--video`
Enables video generation after generating an image. If input image is provided with denoising_strength=0, the input image will be used as the first frame of the video.

Example: `<lora:1533312:1.0> ohwx woman hiking in the alps --video`

#### `--video_prompt`
A prompt for the video model which describes camera movement, scene, and object interactions. If not provided, the image prompt will be used for the video. The video_prompt must be surrounded by double quotes, and should not include the token or Flux LoRA that were used for the image prompt.

Example: `<lora:1533312:1.0>  ohwx woman hiking in the alps --video_prompt "Woman looking at the camera, smiling, puts hands on her hips, confident"`

#### `--video_model`
enum: `seedance_480p`, `seedance_720p`, `seedance_1080p`, `seedance_pro_1080p`, `seedance_pro_fast_480p`, `seedance_pro_fast_720p`, `seedance_pro_fast_1080p`, `hailuo02_720p`, `hailuo02_1080p`, `wan22_720p`, `wan22_fast_720p`, `wan22_fast_580p`, `wan22_fast_480p`, `wan25_720p`, `kling25_5s`, `kling25_10s`, `veo31_fast_720p`, `veo31_fast_audio_720p`, `veo31_fast_1080p`, `veo31_fast_audio_1080p`, `ovi`
`seedance_720p` is used by default.

## Example

Here is an example prompt

`<lora:1533312:1.0> A highly detailed image of thoughtful ohwx woman exploring a hidden urban garden, her J. Crew khaki midi skirt and linen blouse complementing the peaceful surroundings --video --video_prompt "Woman looking at the camera, smiling, puts hands on her hips, confident"`

```text
<lora:1533312:1.0> A highly detailed image of thoughtful ohwx woman exploring a hidden urban garden, her J. Crew khaki midi skirt and linen blouse complementing the peaceful surroundings --video --video_prompt "Woman looking at the camera, smiling, puts hands on her hips, confident"
num_images=1
negative_prompt=
seed=
steps=
cfg_scale=
controlnet=
input_image_url=
mask_image_url=
denoising_strength=
controlnet_conditioning_scale=
controlnet_txt2img=false
super_resolution=true
inpaint_faces=true
face_correct=false
film_grain=false
face_swap=false
hires_fix=false
backend_version=0
ar=1:1
scheduler=euler_a
color_grading=
use_lpw=false
w=1280
h=720
style=
tune_id=1504944
```
