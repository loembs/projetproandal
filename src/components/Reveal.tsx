import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <div
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const RevealLines = ({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) => (
  <span className={cn("block", className)}>
    {lines.map((line, index) => (
      <span key={line} className="block overflow-hidden">
        <Reveal delay={index * 110} className="block">
          {line}
        </Reveal>
      </span>
    ))}
  </span>
);
