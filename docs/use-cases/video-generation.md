---
title: Video Generation
description: Generate videos using text
---

To generate video use the regular prompt text box, and enter the frame number followed by a colon and the prompt to activate video generation `frame number: prompt` Don’t forget to use your model’s token. For example:

```text
  0: portrait of sks woman with eyes closed
  25: portrait of sks woman with eyes opened
  50: portrait of sks woman smiling
```

Notice that the last prompt marks the end of the video generation and will not be rendered.
When not specified in the prompt, our default camera movement is:

```text
  translation_z=0:(-0.5)
  rotation_3d_x=0:(2*sin(3.14*t/100)/80)
  rotation_3d_y=0:(2*sin(3.14*t/100)/40)
  rotation_3d_z=0:(2*sin(3.14*t/50)/40)
```

The camera will slowly pull back and wiggle-rotate slightly.
You can always adjust the camera movement by adding parameters at the start of the prompt. For example:

```text
  translation_x=0:(-2)
  translation_y=0:(1)
  translation_z=0:(0.5)
  rotation_3d_x=0:(0)
  rotation_3d_y=0:(1.5)
  rotation_3d_z=0:(0)
  0: portrait of sks woman with eyes closed
  25: portrait of sks woman with eyes opened
  50: portrait of sks woman smiling
```

The X-axis is a left/right translation; a positive translation shifts the camera to the right.

The Y-axis is an up/down translation; a positive translation shifts the camera upward.

The Z-axis is a forward/backward translation; a positive translation shifts the camera forward.

# Parameters

Here is a partial list of parameters you can use in the prompt line to achieve certain control and effects:

`strength_schedule=0:(0.50)` How “loose” is the image generation from the previous frame. Lower numbers increase the probability of realizing the next prompt, but decrease the probability of temporal coherence.

`seed=1` A starting point for an outcome (-1=random starting point)

`diffusion_cadence=2` Blending of frames in the sequence

Check out the [video gallery](https://www.astria.ai/gallery/video) for inspiration. You can always copy/paste prompts to your tune. Don’t forget to change the token accordingly.

The video module is based on the Deforum Stable Diffusion notebook, and use the same parameters.
