---
title: LoRA fine-tuning
description: LoRA fine-tuning
tags: [LoRA, fine-tuning, style, noise offset, lineart, oil painting]
---

# LoRA

LoRA (low ranking adaption) is a type of model fine-tuning which takes an additional set of model weights (or parameters) and trains those on top while not changing the existing model. For this reason LoRA training is faster comparing to full checkpoint training as it only trains a small amount of weights comparing to the full model. Additionally, LoRA can be loaded on top of any base model, and multiple LoRA can be combined.

The LoRA ecosystem contains many different types of weight structures with different ranks. For this reason some LoRA might not be compatible in different UIs or platforms.

LoRAs can be used to enhance the quality of the image or deepen a specific style that is desired.

Astria provides a [LoRA gallery](https://www.astria.ai/gallery/tunes?model_type=lora) and allows importing external LoRAs. To use a LoRA go to the [generate tab](https://www.astria.ai/prompts) and use the LoRA syntax as such: `<lora:name:weight>`. For example, a very common usage `<lora:epi_noiseoffset2:0.5>` - will load a Noise offset lora at strength 0.5 which will turn the image a bit darker and deepen the contrast.

See example prompts in the [gallery](https://www.astria.ai/gallery?text=lora)


You can also combine LoRAs as such:

```
<lora:epi_noiseoffset2:0.5><lora:FilmVelvia2:0.5><lora:add_detail:0.5><lora:epiCRealismHelper:0.2>
```

:::warning

Note that LoRA can reduce the similarity of trained subjects when used together. To avoid this use low-strength for the lora.

:::


Some LoRAs may be trained on trigger words which are required to show in the prompt text. Check the LoRA information by clicking on the Website link and reading its docs and trigger words.
