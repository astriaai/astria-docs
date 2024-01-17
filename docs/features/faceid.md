# FaceID
**BETA**

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>FaceID images</figcaption>

![source.png](./img/face-swap-before.png)
</div>

<div>
<figcaption>Generations</figcaption>

![generated.png](./img/face-swap-after.png)
</div>

</div>

FaceID is a a model adapter allowing to generate image while preserving a person identity without fine-tuning. In order to use FaceID we will need to
1. Generate a placeholder fine-tune dataset which will contain the person images. The fine-tune will not go through training and will be immediately ready.
2. Generate the image using the FaceID adapter using a syntax similar to LoRA - `<faceid:ID:1>`` 

FaceID can work nicely together with [Face Swap](/docs/features/face-swap) to improve similarity.

