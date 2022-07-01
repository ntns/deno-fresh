/** @jsx h */
import { h } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

/* greet is a function imported from WebAssembly */
import { instantiate } from "../lib/rs_lib.generated.js";
const { greet } = await instantiate();

export default function Home() {
  return (
    <div>
      <img src="/logo.svg" height="100px" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <p>
        {greet("Fresh framework")}
      </p>
    </div>
  );
}
