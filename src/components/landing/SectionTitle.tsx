export function SectionTitle({ children, highlight }: { children: string; highlight: string }) {
  const parts = children.split(highlight);
  return (
    <h2 className="font-display text-3xl md:text-4xl text-center font-bold text-foreground">
      {parts[0]}
      <span className="relative inline-block text-primary">
        {highlight}
        <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-primary/60 rounded-full" />
      </span>
      {parts[1]}
    </h2>
  );
}
