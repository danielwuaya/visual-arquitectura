import type { ReactNode } from "react";

/** Se vuelve a montar en cada cambio de página: anima la entrada del contenido. */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
