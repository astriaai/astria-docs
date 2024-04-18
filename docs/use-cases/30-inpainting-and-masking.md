# Inpainting and masking

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Input image</figcaption>

![source.png](./img/inpaint-input.png)
</div>

<div>
<figcaption>Mask</figcaption>

![generated.png](./img/inpaint-mask.png)
</div>

<div>
<figcaption>Output</figcaption>

![generated.png](./img/inpaint-output.png)
</div>
</div>

## Overview

Inpainting means re-painting of a specific area of an image defined by a mask image. The mask image is a binary image where the area to be inpainted is white and the rest is black. The inpainting process will fill the white area with the content of the surrounding area. Astria has features for automatically creating masks for inpainting - see [Prompt Masking](/docs/features/prompt-masking).
