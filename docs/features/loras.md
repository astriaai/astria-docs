# LoRas

:::info

This feature is mainly relevant for SD15 models. SDXL subject fine-tuning use LoRA, and tend to collide with other style LoRas

:::

LoRa (low ranking adaption) is a type of model fine-tuning which takes an additional set of model weights (or parameters) and trains those on top while not changing the existing model. For this reason LoRa training is faster comparing to full checkpoint training as it only trains a small amount of weights comparing to the full model. Additionally, the LoRa can be loaded on top of any base model, and multiple LoRa can be combined.

The LoRa ecosystem contains many different types of weight structures with different ranks. For this reason some LoRa might not be compatible in different UIs or platforms.

LoRas can be used to enhance the quality of the image or deepen a specific style that is desired.

Astria provides a [LoRa gallery](https://www.astria.ai/gallery/tunes?model_type=lora) and allows importing external LoRas. To use a LoRa go to the [generate tab](https://www.astria.ai/prompts) and use the LoRa syntax as such: `<lora:name:weight>`. For example, a very common usage `<lora:epi_noiseoffset2:0.5>` - will load a Noise offset lora at strength 0.5 which will turn the image a bit darker and deepen the contrast.

You can also combine LoRas as such:

```
<lora:epi_noiseoffset2:0.5><lora:FilmVelvia2:0.5><lora:add_detail:0.5><lora:epiCRealismHelper:0.2>
```

:::info

Note that LoRa can reduce the similarity of trained subjects when used together. To avoid this use low-strength for the lora.

:::


Some LoRAs may be trained on trigger words which are required to show in the prompt text. Check the LoRa information by clicking on the Website link and reading its docs and trigger words.
