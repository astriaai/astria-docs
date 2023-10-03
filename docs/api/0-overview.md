---
title: API overview
---

# Astria Fine-tuning API - Overview

## Billing
The API uses account credits just like the web interface. See section below for 'Create a new fine-tune' for development purposes using <code>branch=fast</code>. Once you're ready for production, you can [purchase credits](https://www.astria.ai/users/edit#billing) and adjust the quantity on the checkout page to how much you need.
The billing page contains an option to set automatic top-off when account balance becomes negative. This will insure that your API calls will not fail due to insufficient balance. Make sure to set the amount to at least a week worth of API calls to avoid hitting the rate limit on top-off.

## Storage
Generated images, training pictures and models, will be automatically deleted 30 days after the training time ended. You may delete the fine-tune object including the trained model, training images, and generated images at any time before using the delete API calls. You may opt-in to automatically [extend model storage](https://www.astria.ai/users/edit#billing) 


## API key
Astria uses bearer `Authorization` headers scheme to authentication. API calls you include headers with headers:

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

`422` - Validation error - Log these errors and use an exception tracking system such as Rollbar or Sentry to get notified. Do not retry these requests.

`500` - Internal server error - Such requests should be retried with exponential backoff and wait start time of 30 seconds.

`504` - Gateway timeout - This error indicates that the request processing took more than the 30 seconds which is set as the max request timeout. In most cases the request would probably have been processed and you should avoid retrying it. In order to get the response see Idempotency section


## Idempotency
Idempotency can be enabled for the account in the [API settings](https://www.astria.ai/users/edit#api). 

For tunes request with the same title, idempotency will return the existing tune object and will not create a new one. This is useful for cases where you want to make sure you don't create duplicate tunes. In this case set the tune title to a unique value such as a UUID which identifies the transaction.

For prompts request with the same text and seed, idempotency will return the existing prompt object and will not create a new one. 
