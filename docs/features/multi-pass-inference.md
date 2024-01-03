# Multi-Pass inference
**BETA**

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Gym</figcaption>

![source.png](./img/multipass/multipass-1.jpeg)
</div>

<div>
<figcaption>Hiking</figcaption>

![generated.png](./img/multipass/multipass-2.jpeg)
</div>

<div>
<figcaption>Posh</figcaption>

![generated.png](./img/multipass/multipass-3.jpeg)
</div>

<div>
<figcaption>Swimsuit</figcaption>

![generated.png](./img/multipass/multipass-4.jpeg)
</div>

<div>
<figcaption>Fashion</figcaption>

![source.png](./img/multipass/multipass-xl-1.jpeg)
</div>

<div>
<figcaption>Starwars</figcaption>

![generated.png](./img/multipass/multipass-xl-2.jpeg)
</div>

<div>
<figcaption>Mech-warrior</figcaption>

![generated.png](./img/multipass/multipass-xl-3.jpeg)
</div>

<div>
<figcaption>Dreamy</figcaption>

![generated.png](./img/multipass/multipass-xl-4.jpeg)
</div>


</div>

## Syntax
The prompt is divided by the `BREAK` keyword such as:
* 1st **base prompt** used to generate the background and scene. 
* 2nd **common prompt** that's concatenated to each person prompt and the base prompt to avoid repetition.
* 3rd **person prompt** Describe what the person is wearing or holding.

To load the person checkpoint or LoRA use the `<lora:ID:1>` syntax.

:::tip
Note that multi-pass works specifically well with `SD15` models, while `SDXL` models are not recommended.
:::

## Advantages
* Base prompt first pass allows to use the full breadth of an unmodified model. As such image compositions, fabrics and textures and details will show much better.
* Separating the person from the background allows to prompt in more details on clothing, accessories and colors.
* Better similarity to the original subject.
* Multi-pass allows mixing SDXL model for base prompt and SD15 for person prompt.

Check the [gallery](https://www.astria.ai/gallery?branch=sd15&is_multiperson=true) for more examples.

See [pricing](https://www.astria.ai/pricing) for the cost of this feature.

## Example prompt

```text
a model in preppy style, old money aesthetic, posh style, elite school stlye, luxurious style, gossip girl neo-prep style, ralph lauren style, country club style, ivy league style
--tiled_upscale
BREAK
BREAK sks woman old money aesthetic, posh style, elite school, luxurious, gossip girl neo-prep style, ralph lauren style, ivy league style  <lora:753945:1>
num_images=4
negative_prompt=asian, , old, , multiple heads, 2 heads, elongated body, double image, 2 faces, multiple people, double head, , (nsfw), nsfw, nsfw, nsfw, nude, nude, nude, porn, porn, porn, naked, naked, nude, porn, black and white, monochrome, skin marks, skin lesions, pimples, <cyberrealistic-neg>, <badhandv4>, <negative-hand>, black and white, monochrome, greyscale, black and white, monochrome, greyscale, (black and white, monochrome, greyscale), frilly, frilled, lacy, ruffled, armpit hair, victorian, (sunglasses), (sunglasses), (deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, ex BREAK BREAK sunglasses, snow, skiing, ski resorts, snowboard
seed=33504
steps=30
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
film_grain=true
face_swap=true
hires_fix=false
prompt_expansion=false
ar=1:1
scheduler=dpm++sde_karras
color_grading=
use_lpw=true
w=512
h=768
```
