export async function Repos() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = "https://api.github.com/users/erik-ferreira/repos";
  const response = await fetch(url, {
    cache: "no-store",
  });
  const repos = await response.json();

  return (
    <div>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </div>
  );
}
