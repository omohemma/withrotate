import type {Metadata} from "next";
import {Providers} from './providers'
import {fonts} from './fonts'

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
        <body className={fonts.jost.className}>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
