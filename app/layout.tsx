import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sayan Acharya | Cybersecurity Portfolio',
  description: 'B.Sc. in Cyber Security - Full Stack Developer & Security Specialist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0e27] text-white font-mono">
        {children}
      </body>
    </html>
  );
}
