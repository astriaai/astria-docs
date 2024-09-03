---
tags: ["flux", "training", "fine-tuning", "lora"]
---
import outputImg from './img/ai-photoshoot-output.jpg';
import inputImg from './img/ai-photoshoot-input.jpg';

# Flux training
## Overview

*Flux* is a family of generative image models created by [Black Forest Labs](https://blackforestlabs.ai/announcing-black-forest-labs/) making use of some of the latest AI advancement such as diffusion, transformer (MMDiT), Flow-matching and a large T5 text encoder. 

* The large text encoder allows the text2img model to better align the image with the given prompt and create complex images with a single prompt. 

* The model base resolution is 1024x1024 however unlike previous models, was trained on a variety of aspect ratios its neural-network architecture is able to better cope with different aspect ratios both in training and inference.  

* Flux1.dev used for fine-tuning requires commercial licensing which is provided to Astria users.


<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
Input training images

<img src={inputImg} alt="generated.png" />
</div>

<div>
Output images

<img src={outputImg} alt="generated.png" style={{height: 500}} />

</div>
</div>

## Training tips

Default token for SDXL should be `ohwx` and will be set automatically if none is specified

1. As with other models, a good training set is critical to getting great results. See [AI photoshoot guide](/docs/use-cases/ai-photoshoot/)
1. Flux training is expensive comparing to previous (see [pricing](https://www.astria.ai/pricing)) and slow. 
1. Astria currently defaults to 100 steps per image for training a Flux lora. 
1. You may opt to override the number of training steps in order to reduce costs and processing time. Reducing the steps can produce good results when the target inference images are similar to the input training images (like headshots). Example lower steps could be 600, 1000 or 1200 (roughly 50-70 * number of training images )

## Inference tips

1. **Dense prompts** - Flux works best when the prompt is descriptive and detailed, but as in most models, be concise. Overdoing the description can create conflicts in the inference.
1. **No negatives* - Flux doesn’t work with negatives, instead we suggest using positive prompts. For example, instead of writing ‘cartoon’ in the negative, write ‘realistic settings and characters’ in the prompt.  
1. **No weighted prompts** - using weights or parentheses () to emphasis certain parts of a prompt doesn’t work with Flux. Instead, make sure the important parts at the beginning of the prompt.
1. **Adding text in the image** - One of the advantages of Flux is the ability to add text to an image. There are a few ways to do that, like “ohwx man holding a sign with the words ‘Hello’“.
1. Looking for prompt ideas? Try the [Themes](https://www.astria.ai/themes) feature. Themes uses Claude GPT to help write prompts for the specific model. You can add a theme and write any topic on your mind, and themes will produce 10 prompts on it.


## API usage
See here for [API usage](/docs/api/flux-api)
