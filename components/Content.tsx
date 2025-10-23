import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}


function Content({ children }: ContentProps) {
  return (
   
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-tl from-orange-50 via-sky-50 to-orange-200 font-sans">
        {children}
      </main>
  );
}

export default Content;
