"use client";

import { useState } from "react";

export function User() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>User</h1>
      <h2>Value: {count}</h2>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
