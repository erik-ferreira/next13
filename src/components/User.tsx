import { cookies, headers } from "next/headers";

export async function User() {
  const userCookies = cookies();
  const userHeaders = headers();

  return (
    <div>
      <h1>User</h1>

      <h2>Cookies</h2>
      {JSON.stringify(userCookies, null, 2)}

      <h2>Headers</h2>
      {JSON.stringify(userHeaders, null, 2)}
    </div>
  );
}
