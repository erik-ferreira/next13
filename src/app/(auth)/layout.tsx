import { ReactNode } from "react";

interface AuthLayoutChildren {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutChildren) {
  return (
    <div style={{ background: "#CDF" }}>
      <h1>Auth</h1>
      {children}
    </div>
  );
}
