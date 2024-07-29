---
hide_table_of_contents: true
tags: [prompt styles, templates, style, animated, comic book, line art, enhance, fantasy art, lowpoly, neonpunk, photographic]
---
# Styles

Prompt style attribute allow to easily generate an image according to a preconfigured set of styles. The styles are essentially a set of weights that are applied to the model during the generation process.


<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Animated</figcaption>

![Animated](./img/styles/animated.jpg)
</div>
<div>
<figcaption>Comic book</figcaption>

![Comic book](./img/styles/comics.jpg)
</div>
<div>
<figcaption>Line art</figcaption>

![Lineart](./img/styles/line-art.jpg)
</div><div>
<figcaption>Enhance</figcaption>

![Enhance](./img/styles/enhance.jpg)
</div>
</div>

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr 1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Fantasy art</figcaption>

![Fantasy art](./img/styles/fantasy-art.jpg)
</div>
<div>
<figcaption>Lowpoly</figcaption>

![Lowpoly](./img/styles/lowpoly.jpg)
</div>
<div>
<figcaption>Neonpunk</figcaption>

![Neonpunk](./img/styles/neonpunk.jpg)
</div><div>
<figcaption>Photographic</figcaption>

![Photographic](./img/styles/photographic.jpg)
</div>
</div>

## Usage

Styles can be used in the GUI style dropdown or in the [API](/docs/api/prompt/create/#backend_version-optional) using the `style` attribute. When using a style template, provide a short prompt text describing the main subject and scene, while leaving the generic style keywords to the template.
