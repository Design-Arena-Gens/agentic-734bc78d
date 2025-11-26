'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const highlights = [
  {
    label: 'Km críticos despejados',
    value: '12.6',
    suffix: ' km',
    detail: 'Prioridad absoluta en la ruta hacia Musadén',
  },
  {
    label: 'Horas de operación',
    value: '36',
    suffix: ' h',
    detail: 'Trabajo ininterrumpido del equipo mixto',
  },
  {
    label: 'Maquinaria pesada desplegada',
    value: '8',
    suffix: '+',
    detail: 'Excavadoras, volquetes y martillos hidráulicos',
  },
];

const timeline = [
  {
    time: '05:10 AM',
    title: 'Exploración táctica del tramo cerrado',
    description:
      'Norvil Mena Atalaya inspecciona el corazón del derrumbe identificando puntos de anclaje seguros para la voladura controlada.',
  },
  {
    time: '09:45 AM',
    title: 'Voladura estratégica con precisión milimétrica',
    description:
      'Equipo de élite ejecuta la liberación de roca con protocolos militares, minimizando vibraciones y protegiendo viviendas aledañas.',
  },
  {
    time: '14:20 PM',
    title: 'Ingreso coordinado de maquinaria pesada',
    description:
      'Excavadoras, cargadores frontales y tractores oruga remueven 180 toneladas en tiempo récord abriendo paso para el tránsito liviano.',
  },
  {
    time: '20:30 PM',
    title: 'Reactivación del flujo solidario',
    description:
      'Caravana de ayuda social, ambulancias y transporte escolar retoman el corredor estratégico hacia Musadén con escolta técnica.',
  },
];

const quotes = [
  {
    quote:
      'Se trabaja, se hace y se cumple: hoy Musadén vuelve a respirar gracias a un equipo que no conoce la palabra cansancio.',
    author: 'Norvil Mena Atalaya',
    role: 'Líder operativo en Cortegana',
  },
  {
    quote:
      'Cada explosión meditada fue un paso para reconectar familias, mercados y sueños de progreso en el Alto Marañón.',
    author: 'Brigada de Reapertura Vial',
    role: 'Comando de maquinaria pesada',
  },
];

const mediaCards = [
  {
    title: 'Voladura controlada en imágenes exclusivas',
    description:
      'Secuencia de dron capta la precisión del equipo técnico al fracturar la roca que tenía aislado a Musadén.',
    cta: 'Ver highlights aéreos',
  },
  {
    title: 'Bitácora minuto a minuto de la reapertura',
    description:
      'Desde el primer reconocimiento hasta el primer bus escolar cruzando la vía, revive la jornada que hizo historia.',
    cta: 'Leer el reportaje completo',
  },
];

export default function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10">
      <div className="absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-br from-brand-primary/45 via-brand-primary/15 to-transparent blur-3xl" />
      <div className="flex items-start justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/15 bg-white/60 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-brand-accent/80 backdrop-blur">
            <Sparkles className="h-4 w-4" /> Impacto Regional
          </span>
          <h1 className="mt-6 font-headline text-6xl tracking-tight text-brand-accent sm:text-7xl">
            Se trabaja, se hace y se cumple
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Norvil Mena Atalaya y un batallón incansable de Cortegana reactivan la carretera hacia Musadén, atacando la zona más crítica con voladuras de precisión, ingeniería extrema y humanidad en cada decisión.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent/70">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Cortegana · Alto Marañón</span>
            <span className="inline-flex items-center gap-2"><TrendingUp className="h-4 w-4" /> Operativo 24/7</span>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map(({ label, value, suffix, detail }) => (
              <motion.div
                key={label}
                className="rounded-2xl border border-white/40 bg-white/70 p-5 text-brand-accent shadow-glow backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-accent/60">{label}</p>
                <p className="mt-3 font-headline text-4xl text-brand-accent">
                  {value}
                  <span className="text-lg align-top text-brand-accent/70">{suffix}</span>
                </p>
                <p className="mt-2 text-sm text-brand-accent/70">{detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid gap-6 rounded-3xl border border-brand-accent/10 bg-white/80 p-8 shadow-glow backdrop-blur lg:grid-cols-[2fr,1fr]"
      >
        <div className="space-y-6">
          <h2 className="font-headline text-4xl text-brand-accent">Zona crítica liberada</h2>
          <p className="text-base leading-relaxed text-slate-600">
            La reapertura se enfocó en el punto más peligroso de la vía: una garganta de roca que colapsó tras lluvias torrenciales. Con detonaciones calibradas y coordinación comunitaria, el equipo de Norvil Mena rompió el aislamiento que asfixiaba la economía de Musadén. Hoy la ruta vibra con motores, comercio y esperanza renovada.
          </p>
          <div className="space-y-4">
            {quotes.map(({ quote, author, role }) => (
              <blockquote key={author} className="rounded-2xl border border-brand-accent/10 bg-brand-secondary/60 p-6 text-brand-accent">
                <p className="text-lg font-medium leading-relaxed">“{quote}”</p>
                <span className="mt-4 block text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent/70">
                  {author} · {role}
                </span>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {mediaCards.map(({ title, description, cta }) => (
            <motion.a
              key={title}
              href="#"
              className="group flex flex-1 flex-col justify-between rounded-2xl border border-brand-accent/15 bg-slate-900 p-6 text-slate-50 shadow-2xl"
              whileHover={{ y: -6 }}
            >
              <div>
                <h3 className="font-headline text-2xl leading-tight">{title}</h3>
                <p className="mt-3 text-sm text-slate-200/80">{description}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary group-hover:text-white">
                {cta}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-10"
      >
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent/60">Cronología</span>
          <h2 className="font-headline text-4xl text-brand-accent">Operativo Musadén minuto a minuto</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {timeline.map(({ time, title, description }) => (
            <div key={time} className="rounded-3xl border border-brand-accent/15 bg-white/80 p-6 shadow-lg backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-accent/60">{time}</span>
              <h3 className="mt-3 font-headline text-2xl text-brand-accent">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden rounded-3xl border border-brand-accent/15 bg-slate-900 text-slate-100 shadow-2xl"
      >
        <div className="grid gap-10 p-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h2 className="font-headline text-4xl">Impacto que se siente en cada kilómetro</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200/70">
              Esta reapertura no es solo un titular: es la promesa cumplida de conexión para productores de cacao, estudiantes y brigadas médicas que dependen de la ruta Cortegana-Musadén. El plan de Norvil Mena activa protocolos de mantenimiento y vigilancia permanente para blindar la transitabilidad.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Comunidades beneficiadas</p>
                <p className="mt-3 font-headline text-3xl">14 +</p>
                <p className="mt-2 text-xs text-slate-200/70">desde Caserío El Huito hasta la cabecera de Musadén</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-primary">Carga liberada</p>
                <p className="mt-3 font-headline text-3xl">180 t</p>
                <p className="mt-2 text-xs text-slate-200/70">de roca y lodo removidos con apoyo comunitario</p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-6 rounded-full bg-brand-primary/30 blur-3xl" />
            <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-brand-primary/80 via-brand-accent/90 to-slate-950 p-6 text-center text-sm leading-relaxed text-slate-200 shadow-glow md:h-80 md:w-80">
              <p>“Ingeniería, coraje y comunidad unidos para abrir paso a la vida que late en Musadén.”</p>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="flex flex-col gap-4 pb-8 text-xs uppercase tracking-[0.3em] text-brand-accent/60 sm:flex-row sm:items-center sm:justify-between">
        <span>Norvil Mena Atalaya · Distrito de Cortegana</span>
        <span>#ReaperturaMusadén · #SeTrabajaSeHaceSeCumple</span>
      </footer>
    </main>
  );
}
