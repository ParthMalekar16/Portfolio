import { useTypewriter } from "@/hooks/useTypewriter";

export const Greeting = () => {
  const displayText = useTypewriter("Hey, I'm Parth!");

  return (
    <h1 className="text-4xl font-bold tracking-tight text-(--color-foreground) md:text-6xl">
      <span>{displayText}</span>
      <span className="ml-1 inline-block animate-cursor-pulse text-(--color-slit1)">
        |
      </span>
    </h1>
  );
};
