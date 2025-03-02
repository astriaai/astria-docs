---
title: Overview
---

# Astria Fine-tuning API - Overview

## Billing
The API uses account balance just like the web interface. See the [pricing](https://www.astria.ai/pricing) page for more details.

## Mock testing
The API allows creating a mock `Tune` object with attribute  `branch=fast`. See [Create a tune documentation](https://docs.astria.ai/docs/api/tune/create#branch-optional). API call for creating `fast` tune is free, and subsequent prompt calls will return mock images without incurring any charges. This is useful for testing your integration with the API. 
Once you're ready for production, you can [purchase credits](https://www.astria.ai/users/edit#billing) and adjust the quantity on the checkout page to how much you need.

## Beta features
Astria maintains backward compatability and avoid making changes that could alter the behavior of the API. However, features marked as BETA are subject to change as we try to improve the product.

## Auto top off
To allow your account to work without disruption, top-off feature can be enabled to refill account each time account balance reaches zero. Auto top-off can be enabled in the [billing page](https://www.astria.ai/users/edit#billing).
It is recommended to set the top-off amount to at least a week worth of API calls to avoid hitting the rate limit on top-off - Frequent top-offs can cause credit card charges to fail or bank declines.

## Storage
Generated images, training pictures and models, will be automatically deleted 30 days after the training has ended. You may delete the fine-tune object including the trained model, training images, and generated images at any time before using the delete API calls. You may opt-in to automatically [extend model storage](https://www.astria.ai/users/edit#billing) or set the `auto_extend` for [tune](/docs/api/tune/create/). 


## Authorization
The API uses bearer `Authorization` headers scheme. API calls should include the header:

```text
Authorization: Bearer sd_XXXXXX
```

Find your API key on the [API settings](https://www.astria.ai/users/edit#api) under your account settings.


## REST API
Astria API is built as a REST API. Main resources are `tune` and `prompt` and each one has all the CRUD operations. Prompts are usually used as a nested resource on top of tunes (i.e: `/tunes/:id/prompts`).

## Error Codes

:::tip
Pay attention to 504 error below and turn on idempotency for your account to avoid duplicate objects.
:::

`422` - Validation error - Log these errors, specifically the response body, and use an exception tracking system such as Rollbar or Sentry to get notified. Do not retry these requests.

`429` - Rate limiting - This error might show when using polling. Use callbacks to avoid this.

`500` - Internal server error - Such requests should be retried with exponential backoff and wait start time of 30 seconds.

`504` - Gateway timeout - This error indicates that the request processing took more than the 30 seconds which is set as the max request timeout. In most cases the request would probably have been processed and you should avoid retrying it. In order to get the response see Idempotency section


## Idempotency

Idempotency is a principle in programming which means that the same operation (a request in our case) can be made multiple times without changing the result. This can be useful when a request is interrupted and you want to make sure it is processed only once, and avoid duplicate objects.

Idempotency can be enabled for the account in the [API settings](https://www.astria.ai/users/edit#api). 

For tunes request with the same `title`, idempotency will return the existing tune object and will not create a new one. This is useful for cases where you want to make sure you don't create duplicate tunes. In this case set the tune title to a unique value such as a UUID which identifies the transaction.

For prompts request with the same attributes, idempotency will return the existing prompt object and will not create a new one. Prompt attributes considered for the idempotency are `text, tune_id, cfg_scale, steps, seed, callback, negative_prompt, super_resolution, face_correct, ar, num_images, controlnet, denoising_strength, use_lpw, controlnet_conditioning_scale, w, h, hires_fix, scheduler, controlnet_txt2img, inpaint_faces` 

When retrying a 504 error, and idempotency is enabled, make sure to wait 60 seconds before retrying the request to allow the previous request to finish processing.

## Callbacks

Callbacks for prompts and tunes are `POST` requests containing the entity object in the request body. Callbacks work in test mode with `branch=fast`. Callbacks are currently not retried if they fail. To test your callbacks, we recommend a local tunnel tool like [ngrok](https://ngrok.com/). If you need your backend server to receive some context arguments/metadata for the callback, like internal user-id or transaction id, we recommend adding those to the callback query string.
