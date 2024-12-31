---
title: Fine-tuning guide
description: The guide for high quality avatars and AI photography
image: ./img/ai-photoshoot-output.jpg
---

# Fine-tuning guide
** The guide for high quality avatars and AI photography**

When building an app for avatars or professional AI photoshoot, you should consider two aspects

1. Similarity to the original subject
2. High quality generation which look professional

## Tracking subject similarity

Make sure to test results on a person you closely know and can judge similarity. Create a list of candidate prompts and run them on 2-3 subjects. For each prompt ask the person to rate how many of the images look similar. Finally sum the ratios for each prompt and compare prompts. Improve the prompts or reconsider a different prompt if similarity is low. Alternatively, consider switching to a different base model to match ethnicity or avoid biased models.

## Fine-tuning training tips

1. Enable **Face-detection** in your [account settings page](https://www.astria.ai/users/edit#profile) - This will augment the training dataset with face-crops from the original training images. This should increase similarity to the subject but can also cause generations to be more toward close-ups instead of nice medium or long shots. In this case you might need to adjust the prompts to use emphasis weights.
2. **Base model** - Select plain SD15 for better resemblance. Select  [Realistic Vision V5.1](https://www.astria.ai/gallery/tunes/690204/prompts) as a base model for nicer pictures. These models are good in realistic results. If you’d like to get generations that are more artistic - consider [Deliberate](https://www.astria.ai/gallery/tunes/538238/prompts) or Reliberate as a base model. For a more diverse ethnically and possibly better similarity to subjects, consider [Life Like Ethnicities](https://www.astria.ai/tunes/753832/prompts).
   Finally, we suggest checking training on [SDXL with text-embedding + LoRA](/docs/use-cases/sdxl-training).

## Prompt generation tips

1. Set **width and height** to **512 x 640** - to match Instagram aspect ratio of 4:5 and also create good portraits. Avoid higher aspect ratios as you might get artifacts such as duplicate heads.
2. Enable **face-inpainting** - This is one of Astria’s unique features and allows creating long shots while avoiding deformed faces.
3. Weighted prompts - when a prompt has multiple keywords that collide and reduce similarity - use the parenthesis syntax for emphasis to increase similarity, such as `(ohwx man)`
   On the flip side, try to avoid weighted prompts altogether to preserve similarity to subject.
4. Use [Controlnet](/docs/use-cases/controlnet) with input image to preserve composition and create unique long-shots. Enable `controlnet_txt2img` if you’d like to create more variation and draw more from the prompt. Increase denoising_strength=1
