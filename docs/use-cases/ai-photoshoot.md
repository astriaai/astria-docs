# AI Photoshoot

## Overview

The term "AI Photoshoot" or "AI Headshots" refers to the process of creating a generative AI model from around 20 images of a person. This model can then be used to create professional photography imagery of the person, without requiring high-end camera equipment, lighting, or wardrobe.

AI headshots are particularly useful for social profile photos, such as those used on LinkedIn or Facebook, as well as on dating sites.

Another recent trend is the creation of virtual social influencers - consistent characters that do not exist in reality, but can be generated consistently in different scenes and everyday life.

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Training images</figcaption>

![source.png](./img/ai-photoshoot-input.png)
</div>

<div>
<figcaption>Output images</figcaption>

![generated.png](./img/ai-photoshoot-output.png)
</div>
</div>

## Steps

### 1. Create a model

At this stage, we will create a 2GB numeric (AI) model file that contains the "features" of a person. This is not the part where we generate new images, but only train a dedicated AI model.

To begin, go to the [New tune](https://www.astria.ai/tunes/new) page.

**Title** - Enter the person's name, e.g. `Elon Musk`. Or choose whatever title that fits your needs. Choosing a title is not a part of the actual training of the model.

**Class Name** - Enter `man` or `woman`, or possibly `boy, girl, cat`, or `dog`. This is highly important as it is a part of the actual technical training of your model. We automatically generate images of the "class" while training, and by comparing them to your images (the training set), the model 'learns' your subject's unique features.

**Base tune** - Select a baseline model on which you would like to train. For realistic generations, we recommend using *[Realistic Vision](https://www.astria.ai/gallery/tunes/690204/prompts)*, while for more artistic trainings, use *[Deliberate](https://www.astria.ai/gallery/tunes/538238/prompts)*.

Other settings are optional and can be changed to your preference.

### 2. Generate images

Even before the model is ready, you can prepare a queue of prompts (texts) that will be fed into the model and used to generate models.

## Tips for training images

1. Upload both portrait and full body shots of the person
2. Do not upload pictures mixed with other people
3. Do not upload upload funny faces

## Tips for inference

1. Use `ohwx woman/man`  at the beginning of the sentence.
2. Textual inversion can reduce similarity. Try to avoid it. Specifically TIs such as `ng_deepnegative_v1_75t` or CyberRealistic.
3. [LoRa](https://www.notion.so/LoRAs-9541c36a558741cba17a788d42122091?pvs=21) can reduce similarity. Keep LoRa strength low
