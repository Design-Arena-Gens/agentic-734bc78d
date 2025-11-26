import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const title = 'Reapertura Épica: Carretera a Musadén';
const description =
  'Norvil Mena Atalaya lidera un operativo histórico con maquinaria pesada para reactivar la conectividad en Cortegana.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://agentic-734bc78d.vercel.app',
    siteName: 'Norvil Mena Noticia',
    locale: 'es_ES',
    type: 'article',
    images: [
      {
        url: 'https://agentic-734bc78d.vercel.app/og-card.png',
        width: 1200,
        height: 630,
        alt: 'Reconstrucción carretera Musadén',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@norvilmena',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
