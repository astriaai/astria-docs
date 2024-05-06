# The pack object
A pack represents a list of grouped prompts, as well as the fine-tune to be created from the training images. 

## Advantages
1. Move fast from the creative process of creating prompts to the deployment of new themes in production.
2. Avoid mismatch between hard-coded JSONs and the actual prompts.
3. Run tests for new prompts and quickly iterate.
4. Aggregate likes for prompts to improve the quality of the generated images and tighten the feedback loop. 
5. Packs allows sending users feedback (`likes`) information back to the API, which can be used to keep track of the user's preferences and improve the quality of the generated images over the original prompt id.

## Example user flow
1. `GET /packs` Display a list of packs to the user. See [docs](/docs/api/pack/list/)
2. User selects a pack, a class name (man/woman) and training images
3. Call `POST /p/:id/tunes` with title, (training) images, and class name -  to create a new fine-tune model using a pack. See [docs](/docs/api/pack/tunes/create/)
4. `GET /tunes/:id/prompts` to get a list of prompts and their status
5. `POST /prompts/:id/likes` to send feedback to the API. See [docs](/docs/api/like/create/)
6. Sort prompts by likes
7. Present packs sorted by aggregated likes

## Getting started
1. Create your first pack from the GUI [packs](https://www.astria.ai/packs) page.
2. Assign prompts to the pack from the [prompts tab](https://www.astria.ai/prompts).

