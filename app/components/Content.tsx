import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}
function Content({ children }: ContentProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200 font-sans dark:bg-black">
      {children}
    </main>
  );
}

export default Content;
