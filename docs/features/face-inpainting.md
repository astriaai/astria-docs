# Face inpainting

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Without face-inpaint</figcaption>

![source.png](./img/face-inpainting-input.jpeg)
</div>

<div>
<figcaption>With face-inpaint</figcaption>

![generated.png](./img/face-inpainting-output.jpeg)
</div>

</div>

Face-inpainting toggle under Advanced section will try to detect a human face in the picture, and then run a second inference on top of the detected face to improve facial features.
Note that face-inpainting requires super-resolution toggle to be turned on in order to get more pixels to work with.
