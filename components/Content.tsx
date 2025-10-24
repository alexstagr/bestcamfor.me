import { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
  bg?: String;
}

function Content({ children, bg }: ContentProps) {

  const bgStyle = bg ?? "bg-gray-600"

  return (

    <main className={`flex min-h-screen ${bgStyle} items-center justify-center font-sans`}>
      {children}
    </main>
  );
}

export default Content;
