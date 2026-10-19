import Image from "next/image";
import Link from "next/link";
import { categoryLabel, type CaseStudy } from "@/lib/cases";
import { ArrowIcon, delay } from "@/components/ui";

/** Tarjeta de proyecto real con imagen grande y hover elegante. */
export default function CaseCard({
  c,
  index = 0,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  c: CaseStudy;
  index?: number;
  aspect?: string;
  sizes?: string;
}) {
  const cover = c.images[0];
  return (
    <Link href={`/portafolio/${c.slug}`} className="group block" data-reveal="up" style={delay((index % 3) * 0.1)}>
      <div className={`zoom relative ${aspect} overflow-hidden bg-sand`} data-reveal="img" style={delay((index % 3) * 0.1)}>
        <Image src={cover.src} alt={cover.alt} fill sizes={sizes} className="object-cover" />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-ivory text-ink opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowIcon />
        </span>
        <span className="absolute left-5 top-5 rounded-full bg-ivory/90 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-ink backdrop-blur">
          {categoryLabel[c.category]}
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl transition-colors group-hover:text-taupe-deep">{c.title}</h3>
        <span className="shrink-0 text-xs text-body/70">{c.images.length + (c.process?.length ?? 0)} fotos</span>
      </div>
      <p className="mt-1 text-sm text-taupe-deep">{c.type}</p>
      <p className="mt-3 max-w-md leading-relaxed">{c.summary}</p>
    </Link>
  );
}
