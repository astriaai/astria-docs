# FAQ

## Why isn't it free?

For each model created using your training image, Astria creates an AI model using high-end GPU machines, and then serves those models to allow image generation. This process is expensive.

## I didn't get my images. Where can I see it?
Check out your tunes page [https://www.astria.ai/tunes](/tunes) and click on the tune thumbnail to see your results.

## Can I get higher resolution pictures?

Toggle the Super-resolution option in the prompt Advanced section.

## How do I download my images ?

Go to [https://www.astria.ai/tunes](https://www.google.com/url?q=https://www.astria.ai/tunes&sa=D&source=editors&ust=1670415722347164&usg=AOvVaw33UrJ0mc31o6FeKglleCjz) and click on the tune thumbnail, hit download to save the pictures of each prompt.

## Generated images look weird. What happened?

See [Fine-tuning guide](/docs/use-cases/finetuning-guide) and the [AI Photohoot](/docs/use-cases/ai-photohoot) guide for tips on how to get the best results.

## Can I download CKPT file? How do I use it?

1. Once the fine-tune is done processing, you should be able to see a TAR and CKPT buttons at the top of the fine-tune page.
2. You can use the CKPT with software like Automatic1111 and ComfyUI.

## I would like to use your API for my service or app, would you be able to handle the load?

Astria is already powering some of the biggest companies and applications on the web and on the app-store using fine-tuning. All jobs are handled in parallel and there is no wait time or queuing.

## What happens to my model, training pictures and image generations?

The entire fine-tune (including CKPT file, model, training pictures, generated images, prompts) is kept for 1 month, at the end of which it is all deleted. You can delete it at any time by clicking on the delete button in the fine-tunes page.

## Can I extend my model beyond 30 days?

You can select to extend model storage in the [billing page](https://www.astria.ai/users/edit#billing)

## Can I train a model for more than one person?

You can train a fine-tune using  `class_name=couple` and get amazing results. Make sure that the couple appear in each of the training images together. In this case it might be harder for the model to create more variation and create long-shots and complex scenes.
