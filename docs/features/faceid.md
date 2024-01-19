# FaceID
**BETA**

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>FaceID images</figcaption>

![source.png](../use-cases/img/ai-photoshoot-input.png)
</div>

<div>
<figcaption>
<a href="https://www.astria.ai/gallery?text=faceid">Generations</a>
</figcaption>

![faceid-output.png](./img/faceid-output.jpg)
</div>

</div>

See example prompts in the [gallery](https://www.astria.ai/gallery?text=faceid)

## Overview
FaceID is a model adapter allowing to generate image while preserving a person identity without fine-tuning. Input images can be as few as just one image.

## Usage
1. Generate a placeholder fine-tune dataset which will contain the person images. The fine-tune will not go through training and will be immediately ready.
![faceid-new-fine-tune.png](./img/faceid-new-fine-tune.png)
2. Generate the image using the FaceID adapter using a syntax similar to LoRA - `<faceid:ID:1>` 

FaceID can work nicely together with [Face Swap](/docs/features/face-swap) to improve similarity.

