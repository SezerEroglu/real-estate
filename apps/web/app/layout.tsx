import type { Metadata } from 'next';
import { ToasterProvider } from '@repo/ui/toaster-provider';
import Header from '@/components/Header/header';
import ClientProviders from '@/providers/ClientProviders/client-providers';
import ServerProviders from '@/providers/ServerProviders/server-providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amplicade Demo',
  description: 'Amplicade E-Commerce Demo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-background text-base antialiased"
      suppressHydrationWarning={true}
    >
      <body className="flex min-h-screen flex-col">
        <ClientProviders>
          <ServerProviders>
            <ToasterProvider />
            <main className="mb-16 flex grow flex-col">
              <Header />
              {children}
            </main>
          </ServerProviders>
        </ClientProviders>
      </body>
    </html>
  );
}
