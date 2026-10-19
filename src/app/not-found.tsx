import Link from "next/link";
import { ArrowIcon } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80svh] items-center bg-ivory pt-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[1.02]">
          Este espacio <span className="accent text-taupe-deep">aún no existe</span>
        </h1>
        <p className="mt-6 max-w-md leading-relaxed">La página que buscas no está disponible. Te invitamos a recorrer nuestros proyectos.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">Ir al inicio <ArrowIcon /></Link>
          <Link href="/portafolio" className="btn btn-outline">Ver portafolio</Link>
        </div>
      </div>
    </section>
  );
}
