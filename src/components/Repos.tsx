export async function Repos() {
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
