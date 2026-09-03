import Image from "next/image";

export default function PageHero({
  image,
  title,
  subtitle,
  height = "h-[70vh]",
}: {
  image: string;
  title: string;
  subtitle?: string;
  height?: string;
}) {
  return (
    <section className={`relative ${height} min-h-[420px] w-full overflow-hidden`}>
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="font-display text-4xl tracking-wide sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-xl font-sans text-sm font-light sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
