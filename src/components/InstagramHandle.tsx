import { INSTAGRAM_HANDLE } from "@/data/content";
import { cn } from "@/lib/utils";

const BADGE =
  "https://res.cloudinary.com/jucpyysy/image/upload/v1791254385/logoinsta-removebg-preview.png";

export const InstagramHandle = ({ className }: { className?: string }) => (
  <a
    href={INSTAGRAM_HANDLE}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex items-center gap-2 font-display font-extrabold leading-none tracking-[-0.045em] text-white transition-opacity hover:opacity-80 sm:gap-3",
      className,
    )}
  >
    @andalcreative
    <img
      src={BADGE}
      alt=""
      className="h-[0.82em] w-[0.82em] shrink-0 object-contain"
    />
    <span className="sr-only">Profil Instagram d'Andal Creative</span>
  </a>
);
