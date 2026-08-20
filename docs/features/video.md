---
image: ./img/image-to-video.jpeg
---
import poster from './img/image-to-video.jpeg';

# Image2Video

<div style={{ display: "grid", gridTemplateColumns: '1fr', gap: '1.5rem' }}>
<div>
<figcaption>Image2Video</figcaption>

<video height="360" alt="Image2Video" autoPlay muted loop playsInline src="https://mp.astria.ai/fw8jm61tk4u6dat7z5sunqp47vys" poster={poster}></video>
</div>
</div>


See example prompts in the [gallery](https://www.astria.ai/gallery?branch=flux1&is_video=true).

[Pricing](https://www.astria.ai/pricing/video) for video generation.


### Overview

Astria Image2Video supports a wide catalog of image-to-video, text-to-video, reference-to-video, and motion-control video models. Pick a `video_model` and pass a `video_prompt` describing the motion; Astria renders the first frame using the prompt's image stage (the chosen tune + `text`) and animates it.

### Form fields

Pass these alongside `text` on `POST /tunes/:id/prompts`:

#### `video_model` (required)
The model to animate with. See the [enum table](#models) below.

#### `video_prompt` (required)
Describes camera movement, scene, and object interactions. Keep image-stage LoRA tokens in `text`. For Seedance 2 reference-to-video, put reference tune tokens directly in `video_prompt` using `<faceid:TUNE_ID:1> TUNE_NAME` (or the corresponding `lora` token) so Astria can supply those tunes' images to the video model.

Example: `<lora:1533312:1.0> ohwx woman hiking in the alps` (in `text`) + `Woman looking at the camera, smiling, puts hands on her hips, confident` (in `video_prompt`).

#### `image_references` (optional)
Ordered array of multipart image uploads for reference-to-video models. Repeat `prompt[image_references][]` for each image.

#### `image_reference_urls` (optional)
Ordered array of public image URLs, as an alternative to `image_references`. Repeat `prompt[image_reference_urls][]` for each URL. Order is preserved within each array.

#### `video_duration` (optional)
Integer seconds. Allowed values depend on the chosen model — see the table.

#### `video_first_frame` (optional)
Multipart image upload. When provided it overrides the image-stage render and `text` is no longer required.

#### `video_first_frame_url` (optional)
URL alternative to `video_first_frame`.

#### `video_last_frame` (optional)
Multipart image upload for first+last keyframe models.

#### `video_last_frame_url` (optional)
URL alternative to `video_last_frame`.

#### `source_image_url` (optional)
URL of an existing generated image to animate. This skips the image-generation stage. An explicit `video_first_frame` takes precedence.

#### `input_video` (optional)
Multipart video upload. Seedance 2 uses it as a reference video; motion-control models require it as their driving video.

#### `input_video_url` (optional)
URL alternative to `input_video`.

#### `audio_reference` (optional)
Multipart reference-audio upload. Supported by `seedance2_*`. Set `video_audio=true` so the output includes audio. You can refer to the track as `@Audio1`; Astria adds that token on provider paths that require it when the prompt has no `@Audio` token.

#### `audio_reference_url` (optional)
URL alternative to `audio_reference`.

#### `video_audio` (optional)
Boolean. Generate an audio track when supported by the model. Defaults to `false`. Set it to `true` when using `audio_reference`.

#### `aspect_ratio` (optional)
Forwarded to the video model when it supports an aspect-ratio knob. Seedance 2 accepts `16:9`, `9:16`, `1:1`, `4:3`, `3:4`, `21:9`, or `adaptive`. For image-to-video the aspect ratio is derived from the input image.

### Example

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  https://api.astria.ai/tunes/$TUNE_ID/prompts \
  -F 'prompt[text]=<lora:1533312:1.0> A highly detailed image of thoughtful ohwx woman exploring a hidden urban garden' \
  -F 'prompt[video_model]=seedance_v15_720p' \
  -F 'prompt[video_prompt]=Woman looking at the camera, smiling, puts hands on her hips, confident' \
  -F 'prompt[video_duration]=5' \
  -F 'prompt[aspect_ratio]=16:9'
```

### Text-to-video

Models in the text-to-video group accept a `video_prompt` with no first frame and no `text` — the model generates the video directly. Currently: `seedance2_*`, `happyhorse_720p`, `happyhorse_1080p`.

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  https://api.astria.ai/tunes/$TUNE_ID/prompts \
  -F 'prompt[video_model]=seedance2_fast_720p' \
  -F 'prompt[video_prompt]=A lone explorer walks across endless dunes at sunrise, cinematic.' \
  -F 'prompt[video_duration]=5' \
  -F 'prompt[aspect_ratio]=16:9' \
  -F 'prompt[video_audio]=true'
```

### Seedance 2 reference media

Seedance 2 can condition a video on multiple tune images, one reference video, and one audio reference. Mention existing tunes in `video_prompt` using the same token and class-name syntax as image generation. Up to nine reference images are sent in total (up to three per tune).

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  https://api.astria.ai/tunes/$TUNE_ID/prompts \
  -F 'prompt[video_model]=seedance2_fast_720p' \
  -F 'prompt[video_prompt]=<faceid:1234:1> woman walks onto the stage in time with @Audio1 while the camera follows' \
  -F 'prompt[video_duration]=8' \
  -F 'prompt[aspect_ratio]=16:9' \
  -F 'prompt[input_video]=@/path/to/movement-reference.mp4' \
  -F 'prompt[audio_reference]=@/path/to/music-reference.mp3' \
  -F 'prompt[video_audio]=true'
```

Use the corresponding `*_url` field instead when the file is already publicly accessible. Do not combine Seedance 2 or Seedance 2.5 first/last frames with `image_references`, `image_reference_urls`, `input_video`, or `audio_reference`; these are separate media modes.

### Ordered image references

Use `image_references` when each frame should be conditioned directly by a sequence of images rather than tune training images. The same field works with any compatible reference-to-video model; model-specific image limits apply.

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  https://api.astria.ai/tunes/$TUNE_ID/prompts \
  -F 'prompt[video_model]=seedance2_fast_720p' \
  -F 'prompt[video_prompt]=Begin on the back detail, orbit around the model, and end on the front view' \
  -F 'prompt[video_duration]=8' \
  -F 'prompt[image_references][]=@/path/to/back.jpg' \
  -F 'prompt[image_references][]=@/path/to/front.jpg'
```

For hosted images, send repeated `prompt[image_reference_urls][]` fields instead. The prompt response exposes the stored references as an ordered `image_references` array of URLs. On models with exclusive media modes, image references cannot be combined with first/last frames.

### Motion control

Motion-control models replay the motion from `input_video` while restyling the subject. Models: `kling30_motion_control`, `kling30_motion_control_pro`, `wan_animate_720p`, `dreamactor_m2`, `happyhorse_motion_control`.

```bash
curl -X POST -H "Authorization: Bearer $API_KEY" \
  https://api.astria.ai/tunes/$TUNE_ID/prompts \
  -F 'prompt[text]=ohwx man <faceid:123>' \
  -F 'prompt[video_model]=kling30_motion_control_pro' \
  -F 'prompt[video_prompt]=match the dance moves' \
  -F 'prompt[video_duration]=10' \
  -F 'prompt[input_video]=@/path/to/reference.mp4'
```

### Models

Cost is the per-prompt charge in cents at the base duration listed for the model; videos longer than the base scale linearly. `_audio` variants generate an audio track.

| `video_model`                  | base cost (¢) | `video_duration` |
|--------------------------------|--------------:|------------------|
| `seedance_480p`                |            10 | 2–12             |
| `seedance_v15_720p`            |            14 | 4–12             |
| `seedance_v15_audio_720p`      |            29 | 4–12             |
| `seedance2_fast_480p`          |            55 | 4–15             |
| `seedance2_fast_720p`          |           110 | 4–15             |
| `seedance2_fast_1080p`         |           275 | 4–15             |
| `seedance2_fast_4k`            |           550 | 4–15             |
| `seedance2_480p`               |            66 | 4–15             |
| `seedance2_720p`               |           132 | 4–15             |
| `seedance2_1080p`              |           330 | 4–15             |
| `seedance2_4k`                 |           660 | 4–15             |
| `wan22_720p`                   |            43 | 5                |
| `wan22_fast_480p`              |             6 | 5                |
| `wan22_fast_580p`              |             8 | 5                |
| `wan22_fast_720p`              |            11 | 5                |
| `wan25_720p`                   |            53 | 5, 10            |
| `wan26_720p`                   |            53 | 5, 10, 15        |
| `wan26_1080p`                  |            79 | 5, 10, 15        |
| `wan27_720p`                   |            55 | 5, 10, 15        |
| `wan27_1080p`                  |            83 | 5, 10, 15        |
| `wan_animate_720p`             |            44 | 10               |
| `ltx23_720p`                   |            17 | 5, 10, 15, 20    |
| `ltx23_1080p`                  |            22 | 5, 10, 15, 20    |
| `kling25`                      |            39 | 5, 10            |
| `kling30_standard`             |            92 | 3–15             |
| `kling30_standard_audio`       |           139 | 3–15             |
| `kling30_pro`                  |           123 | 3–15             |
| `kling30_pro_audio`            |           185 | 3–15             |
| `kling30_4k`                   |           263 | 3–15             |
| `kling30_motion_control`       |           277 | 10               |
| `kling30_motion_control_pro`   |           370 | 10               |
| `cinematic_video`              |            84 | 5, 10, 15        |
| `dreamactor_m2`                |            29 | 10               |
| `happyhorse_720p`              |            77 | 3–10             |
| `happyhorse_1080p`             |           132 | 3–10             |
| `happyhorse_motion_control`    |           154 | 10               |
| `veo31_fast_720p`              |            85 | 4, 6, 8          |
| `veo31_fast_audio_720p`        |           126 | 4, 6, 8          |
| `veo31_fast_1080p`             |            85 | 4, 6, 8          |
| `veo31_fast_audio_1080p`       |           126 | 4, 6, 8          |
| `veo31_fast_4k`                |           264 | 8                |
| `veo31_fast_audio_4k`          |           308 | 8                |
| `veo31_lite_720p`              |            44 | 4, 6, 8          |
| `veo31_lite_audio_720p`        |            44 | 4, 6, 8          |
| `veo31_lite_1080p`             |            71 | 4, 6, 8          |
| `veo31_lite_audio_1080p`       |            71 | 4, 6, 8          |

### Capability matrix

- **Text-to-video** (no first frame required): `seedance2_*`, `happyhorse_720p`, `happyhorse_1080p`.
- **Multi-reference images** (`image_references[]` / `image_reference_urls[]`): `seedance2_*`, `seedance25*`, `minimax_h3_2k`, `wan30_*`, `happyhorse_720p`, `happyhorse_1080p`, `ray32_*`, `gemini_omni_flash`. Limits vary by model (nine for Seedance 2 and MiniMax H3, ten for WAN 3.0, and up to thirty for Seedance 2.5).
- **Reference video** (`input_video` / `input_video_url`): `seedance2_*` and motion-control models.
- **Reference audio** (`audio_reference` / `audio_reference_url`): `seedance2_*`.
- **Generated audio** (`video_audio=true`): `seedance2_*`.
- **First+last keyframe** (`video_last_frame`): `seedance_v15_*`, `seedance2_*`, `wan21_*`, `wan26_*`, `wan27_*`, `wan_fast_*`, `ltx23_*`, `kling*`, `veo31_*`, `hailuo*`.
- **Motion control** (requires `input_video`): `kling30_motion_control*`, `wan_animate_720p`, `dreamactor_m2`, `happyhorse_motion_control`.

### Backwards compatibility

The pre-2026-04 syntax embedding flags inside `text` is still accepted and promoted to the new columns server-side:

```text
<lora:1533312:1.0> ohwx woman hiking in the alps --video --video_model seedance_v15_720p --duration 5 --video_prompt "Woman looking at the camera, smiling, confident"
```

New integrations should prefer the dedicated form fields.
