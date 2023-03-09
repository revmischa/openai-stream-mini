# openai-stream-mini

OpenAI client with **no dependencies** (except Node 18 or browser) that supports streaming completion text.

## Usage

```ts
import { OnTextCallback, streamCompletion } from "openai-stream-mini";
import type { CreateCompletionRequest } from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const args: CreateCompletionRequest = {
  prompt: "What is the greatest toilet in the world?",
  model: "text-davinci-003",
  max_tokens: 2500,
  temperature: 0.9,
};
const handleText: OnTextCallback = async (text) => {
  if (!text) return;
  console.log(text);
};

const text = await streamCompletion({ args, apiKey, onText: handleText });
```
