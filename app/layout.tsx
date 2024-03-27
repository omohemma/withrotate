import type {Metadata} from "next";
import {Jost} from "next/font/google";
// import "./globals.css";
import {Providers} from './providers'

const font = Jost({
    subsets: ['latin'],
    variable: '--font-jost',
});

export const metadata: Metadata = {
    title: "WithRotate - Suggestions",
    description: "Suggestions",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
