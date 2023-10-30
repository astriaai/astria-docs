# Face inpainting

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Entire picture</figcaption>

![source.png](./img/face-inpainting-all.jpeg)
</div>
</div>

<div style={{ display: "grid", 'grid-template-columns': '1fr 1fr', gap: '1.5rem' }}>
<div>
<figcaption>Before face-inpaint</figcaption>

![generated.png](./img/face-inpainting-before.jpeg)
</div>

<div>
<figcaption>After face-inpaint</figcaption>

![generated.png](./img/face-inpainting-after.jpeg)
</div>

</div>

Face-inpainting toggle under Advanced section will try to detect a human face in the picture, and then run a second inference on top of the detected face to improve facial features.
Note that face-inpainting requires super-resolution toggle to be turned on in order to get more pixels to work with.
