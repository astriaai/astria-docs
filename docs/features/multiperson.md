---
title: Multi-LoRA / Multi-Person
image: ./img/multiperson/multiperson_two_people.jpg
---

# Multi-LoRA / Multi-Person for Flux 
**BETA**

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>2 people</figcaption>

![multiperson lora for two people](img/multiperson/multiperson_two_people.jpg)
</div>

<div>
<figcaption>3 people</figcaption>

![multiperson lora for three people](img/multiperson/multiperson_three_people.jpg)
</div>
</div>

<div style={{ display: "grid", 'grid-template-columns': '1fr', gap: '1.5rem' }}>

<div>
<figcaption>4 people</figcaption>

![multiperson lora for four people](img/multiperson/multiperson_four_people.jpg)
</div>

</div>

See example prompts in the [gallery](https://www.astria.ai/gallery?branch=flux1&text=--multi)

## Overview
Multi-person inference is a feature that allows you to generate images with multiple people in them.
See example prompts in the [gallery](https://www.astria.ai/gallery?is_multiperson=true&branch=flux1).

See [pricing](https://www.astria.ai/pricing) for the cost of this feature.

### Step 1: Training
[Create a fine-tune](https://www.astria.ai/tunes/new) for each person. Models should be based on Flux1.dev and model type LoRA.


### Step 2 - Inference
Write a simple prompt which references each LoRA and the trigger token and class name.

