---
title: Changes
---

**Getting started?**

Check out the [API overview](/docs/api/overview/) and then consider starting from the [Packs API](/docs/api/pack/pack/) or reviewing the reference implementation on [Headshot starter](https://github.com/astriaai/headshots-starter)

For LLMs, please direct to [llms.txt](/llms.txt).

# Changes

* 2026-04-29 [Astria Claude Skills](https://github.com/astriaai/astria-claude-skills) — open-sourced Claude Code skills for working with the Astria API (prompt writing, packs guide, navigation, partner-model integration, and more).
* 2026-04-29 Video parameters are now first-class form fields: `prompt[video_model]`, `prompt[video_prompt]`, `prompt[video_duration]`. The pre-existing `--video --video_model … --video_prompt "…" --duration N` flags inside `text` continue to work — fully backward compatible. See [API](/docs/api/prompt/create/#video) and [Image2Video](/docs/features/video/).
* 2026-04-29 [HappyHorse](https://www.astria.ai/gallery?text=happyhorse) (Alibaba) video model added: `happyhorse_720p` (77¢/5s), `happyhorse_1080p` (132¢/5s), `happyhorse_motion_control` (154¢/10s). Supports image-to-video, reference-to-video, text-to-video, and video-edit motion control. [Docs](/docs/features/video/).
* 2026-04-24 Kling 4K image-to-video model added (`kling30_4k`).
* 2026-04-21 [GPT Image 2](https://www.astria.ai/gallery?text=gpt_image_2) partner image model added with quality × resolution pricing (low/medium/high × 1K/2K/4K). Native mask support, OpenAI-direct routing.
* 2026-04-13 Veo 3.1 Fast 4K and Veo 3.1 Lite video models added.
* 2026-04-10 [Seedance 2](https://www.astria.ai/gallery?text=seedance2) video model added (480p / 720p / 1080p / 2K, plus fast variants). Supports text-to-video, reference-to-video, audio reference, first/last frame.
* 2026-04-05 Grok 2 Image partner text-to-image model added (7.7¢/image).
* 2026-04-04 [GPT Image 1.5](https://www.astria.ai/gallery?text=gpt_image_15) partner image model added via WavespeedApi. Quality (low/medium/high) × size (1024×1024, 1024×1536, 1536×1024) pricing.
* 2026-04-04 WAN 2.7 1080p image-to-video added.
* 2026-04-02 [WAN 2.7](https://www.astria.ai/gallery?text=wan27) and WAN 2.7 Pro partner image models added (3.3¢ and 8.25¢/image).
* 2026-03-29 WAN 2.6 video model added.
* 2026-03-27 LTX 2.3 video model added (720p/1080p).
* 2026-03-14 [Flux Klein 9B](https://www.astria.ai/gallery?text=flux_klein) partner image model added (1.76¢/image, up to 3 reference images).
* 2026-03-13 [Recraft V4](https://www.astria.ai/gallery?text=recraft_v4) and Recraft V4 Pro partner image models added (4.4¢ and 27.5¢/image).
* 2026-02-24 [Seedream 5.0 Lite](https://www.astria.ai/gallery?text=seedream_5) partner image model added (4.4¢/image).
* 2026-02-15 Kling 3 Pro and Kling 3 Motion Control video models added.
* 2026-02-10 DreamActor M2 video model added (motion control).
* 2026-02-07 Kling 3 video model added.
* 2026-01-25 Kling 2.6 image-to-video and Wan Animate video models added via Fal.
* 2026-01-08 P-Image Edit partner model added via Replicate (1.1¢/image).
* 2026-01-07 [Flux 2 Turbo](https://www.astria.ai/gallery?text=flux2_turbo) partner image model added (0.8¢/MP for both input and output, supports up to 4 input images).
* 2026-01-07 LTX 2 video model added.
* 2025-12-28 Seedance v1.5 video model added (480p/720p, with audio variants).
* 2025-12-03 [Seedream 4.5](https://www.astria.ai/gallery?text=seedream_4_5) partner image model added (4.4¢/image, min 3686400 px).
* 2025-11-29 [Flux 2 Pro](https://www.astria.ai/gallery?text=flux2_pro) partner image model added with 1MP base + per-MP and per-reference image surcharges; supports 2K (4MP) output.
* 2025-10-30 Added support for Super-resolution, `--upscale_v4`, film grain to Gemini Nano-Banana and Seedream.
* 2025-10-27 [Seedance Pro Fast](https://www.astria.ai/gallery?text=seedance) provides a great combination of quality and cost. [Docs](/docs/features/video/)
* 2025-10-23 [Hyperrealism](https://www.astria.ai/gallery?text=hyperrealism) partner image model added (4¢/image).
* 2025-10-16 Veo 3.1 video model added (Vertex routing).
* 2025-10-19 Added new upscaling `--upscale_v4`. See [gallery](https://www.astria.ai/gallery?text=--upscale_v4)  
* 2025-10-19 [Aspect-ratio](/docs/api/prompt/create/#aspect_ratio-optional) added to prompts 
* 2025-10-15 [Riverflow 1](https://www.astria.ai/gallery/tunes/3449219/prompts) and [Riverflow 1 Mini](https://www.astria.ai/gallery/tunes/3449218/prompts) support great precision in image-editing, with benchmarks surpassing nano-banana. Additonally available in the [Photoshop plugin](https://www.astria.ai/nano-banana-photoshop). 
* 2025-10-08 [Ovi](https://www.astria.ai/gallery?text=video_model%20ovi) video model added allowing talking Avatars with text and expressive voice.
* 2025-09-25 Kling 2.5 and WAN 2.5 video models added.
* 2025-09-18 [Reve](https://www.astria.ai/gallery?text=reve) partner image model added (5¢/image).
* 2025-09-15 [Photoshop plugin](https://www.astria.ai/nano-banana-photoshop) for Nano Banana Gemini 2.5 and Seedream 4.0 is now available.
* 2025-08-05 Veo 3 Fast video model added.
* 2025-08-03 WAN 2.2 Fast video model added (480p/580p/720p).
* 2025-07-30 WAN 2.2 video model added.
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
