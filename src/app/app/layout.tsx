import { ReactNode } from "react";

interface AppLayoutChildren {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutChildren) {
  return (
    <div style={{ background: "#CFD" }}>
      <h1>App</h1>
      {children}
    </div>
  );
}
