import { Repos } from "./Repos";

export async function User() {
  const response = await fetch("https://api.github.com/users/erik-ferreira", {
    cache: "no-store",
  });
  const user = await response.json();

  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repos />
    </div>
  );
}