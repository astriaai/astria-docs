# Changes

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
* 2024-04-17 Showcase [virtual try-on](/docs/use-cases/virtual-try-on) - add reference clothes to a person in an image. 
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
* 2023-11-01 [Multi-person](/docs/features/multiperson) inference using LoRA and SD15 models 
* 2023-10-29 [Face-Swap](/docs/features/face-swap) feature added - uses training images to improve inference time similarity
* 2023-10-22 [Themes](https://www.astria.ai/themes) - Have ChatGPT create 10 prompts for you from a short 2-4 word theme description.
