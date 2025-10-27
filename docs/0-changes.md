---
title: Changes
---

**Getting started?**

Check out the [API overview](/docs/api/overview/) and then consider starting from the [Packs API](/docs/api/pack/pack/) or reviewing the reference implementation on [Headshot starter](https://github.com/astriaai/headshots-starter)

For LLMs, please direct to [llms.txt](/llms.txt).

# Changes

* 2025-10-27 [Seedance Pro Fast](https://www.astria.ai/gallery?text=seedance) provides a great combination of quality and cost. [Docs](/docs/features/video/)
* 2025-10-19 Added new upscaling `--upscale_v4`. See [gallery](https://www.astria.ai/gallery?text=--upscale_v4)  
* 2025-10-19 [Aspect-ratio](/docs/api/prompt/create/#aspect_ratio-optional) added to prompts 
* 2025-10-15 [Riverflow 1](https://www.astria.ai/gallery/tunes/3449219/prompts) and [Riverflow 1 Mini](https://www.astria.ai/gallery/tunes/3449218/prompts) support great precision in image-editing, with benchmarks surpassing nano-banana. Additonally available in the [Photoshop plugin](https://www.astria.ai/nano-banana-photoshop). 
* 2025-10-08 [Ovi](https://www.astria.ai/gallery?text=video_model%20ovi) video model added allowing talking Avatars with text and expressive voice.
* 2025-09-15 [Photoshop plugin](https://www.astria.ai/nano-banana-photoshop) for Nano Banana Gemini 2.5 and Seedream 4.0 is now available.
* 2025-08-28 [Seedream 4.0](https://www.astria.ai/gallery/tunes/3225353/prompts) has been integrated. Allows 4K image edits.
* 2025-08-26 [Nano Banana Gemini 2.5](https://www.astria.ai/gallery/tunes/3159068/prompts) has been integrated for consistent image editing.
* 2025-08-05 [Krea Flux1.dev](https://www.astria.ai/gallery/tunes/3063697/prompts) added as an option for fine-tuning and inference, however, ee do currently do not recommend this.
* 2025-06-22 Seedance video model added - higher quality than VEO3, and easier UX using the new video button.
* 2025-06-09 Flux Kontext added
* 2025-04-28 Updated Flux controlnets to the latest and added better default conditioning scales and end conditioning.
* 2025-03-20 [Image2Video](/docs/features/video/) available
* 2025-03-02 Added `auto_extend` for [tune](/docs/api/tune/create/) so that only specific tunes can be extended.
* 2025-02-18 Added video tutorial on how to [create a pack](/docs/api/pack/pack/) and [how to fine-tune](/docs/use-cases/ai-photoshoot/) 
* 2025-02-01 [Multiperson](/docs/features/multiperson) for Flux in BETA 
* 2025-01-20 [Flux Pro 1.1 + Ultra](https://www.astria.ai/gallery/tunes?branch=flux-pro1) with fine-tuning support. 
* 2025-01-17 `focus` [preset](/docs/use-cases/flux-finetuning/#training-presets) for training faces, products, and objects with Flux.
* 2025-01-13 Added `--remove_background` for output images. 
* 2024-12-20 [Outpainting](/docs/features/outpainting) syntax for extending image, creating more cinematic images or longer portraits with high quality faces.
* 2024-12-15 `portrait` flux training preset is available for [fine-tuning](/docs/use-cases/flux-finetuning/#training-presets) for better portrait results.
* 2024-11-27 [FaceID](/docs/features/faceid-flux) for Flux is now available.
* 2024-11-27 Flux fine-tuning allows uploading .TXT file captions for multi concept fine-tuning.
* 2024-11-24 Added film grain and color grading support for Flux Backend V0.
* 2024-11-20 [Virtual try-on](/docs/use-cases/virtual-try-on/) with Flux is now in BETA.
* 2024-11-15 [Face inpainting](/docs/features/face-inpainting) with Flux and improved super-resolution
* 2024-10-27 Added [Theme API](/docs/api/themes/create/) to allow users to easily create variation and write their own ideas while augmenting them and adding variation.
* 2024-10-12 Added [Image inspect](/docs/api/images/inspect/) API to 1) filter/warn about bad training images 2) detect characteristics of the training images for templating with `characteristics`.
* 2024-10-09 Flux controlnet pose is available with Backend V0 but is still not recommended for production use.
* 2024-09-26 Added `prompts_callback` for [creating a tune with a pack](/docs/api/pack/tunes/create/)
* 2024-09-03 [Flux fine-tuning](/docs/use-cases/flux-finetuning/) docs and [Flux API usage](/docs/api/flux-api)
* 2024-07-29 Added [Styles](/docs/features/styles) option for prompt
* 2024-06-26 [Tiled upscale V2](/docs/features/tiled-upscale) preserves identity and similarity while adding details and skin tones.
* 2024-06-26 Added controlnet `relight` for SD15 with Backend V1 to allow better composition and blending for [background replacement](/docs/use-cases/product-shots/).
* 2024-05-26 Added `--improve_similarity 0.5` flag for Checkpoint/LoRA models which dramatically improves similarity/identity.
* 2024-05-22 Improved SDXL FaceID
* 2024-05-22 Added Controlnet Style for SDXL1 
* 2024-05-10 Added Controlnet Lineart for SDXL1 
* 2024-05-06 [Interior design](/docs/use-cases/room-redesign) - improved "Segment Room" (`segroom`) controlnet to handle empty rooms. 
* 2024-05-05 [Packs](/docs/api/pack/pack/) + [Likes](/docs/api/like/create/) API - Control prompts from within Astria and experiment faster. 
* 2024-04-20 [Interior design](/docs/use-cases/room-redesign) - Added "Segment Room" controlnet for Backend V1, and MLSD for SDXL to be used. 
* 2024-04-04 Added support for face-inpainting, hires-fix and tiled upscale for faceid on Backend V1. 
* 2024-04-04 Lightning schedulers for Backend V1 to support lightning models such as [RealVis XL Lightning](https://www.astria.ai/gallery/tunes/1194447/prompts) 
* 2024-04-04 V1: Lightning schedulers to support lightning models such as [RealVis XL Lightning](https://www.astria.ai/gallery/tunes/1194447/prompts) 
* 2024-03-27 Upgraded [Themes](https://www.astria.ai/themes) to use Claude Opus and adjust for both SDXL and SD15 prompting.
* 2024-03-20 [Free Upscale](https://astria.ai/upscale) tool
* 2024-03-17 Controlnet `composition` support for Backend V1. Examples in the [gallery](https://www.astria.ai/gallery?controlnet=composition)
* 2024-03-10 New [Backend version v1](/docs/features/backend-v1) for inference - Higher quality, better samplers, faster inference, and more features.
* 2024-03-05 [TCD](https://github.com/jabir-zheng/TCD) sampler gets better results than LCM in 4-8 steps for SDXL models and is available on the samplers dropdown in the Advanced settings of the prompt.
* 2024-02-16 [FaceID Portrait](/docs/features/faceid) has better color balance and similarity and is well suited for portraits.
* 2024-02-08 Deprecate prompt aspect-ratio. Use width and height instead for better results (backward compatability available).
* 2024-02-08 Added `--fix_bindi` to remove dot on the forehead.
* 2024-01-30 Deprecated prompt expansion.
* 2024-01-25 [Upscale only](/docs/use-cases/upscale) Allows you to upscale an existing image.
* 2024-01-17 [FaceID](/docs/features/faceid) Preserve identity without fine-tuning.
* 2024-01-03 [Tiled upscale](/docs/features/tiled-upscale) improved upscaling.
* 2023-12-14 [Prompt masking](/docs/features/prompt-masking) feature added - to support [product shots](/docs/use-cases/product-shots) and [Masked Portraits](/docs/use-cases/masked-portraits)
* 2023-11-27 [LCM](/docs/features/lcm) (Latent Consistency Models) scheduler allows inference in 6 steps 
* 2023-10-29 [Face-Swap](/docs/features/face-swap) feature added - uses training images to improve inference time similarity
* 2023-10-22 [Themes](https://www.astria.ai/themes) - Have ChatGPT create 10 prompts for you from a short 2-4 word theme description.
