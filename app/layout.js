import '@styles/global.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
    applicationName: 'WebExis',
    title: 'Shahed Expo - Your Gateway to Online Success',
    description:
        "Hi, I am Shahed and I am passionate about transforming businesses into digital powerhouses. In today's hyper-connected world, having a robust online presence is more critical than ever. My mission is to help you unlock your business's full online potential.",

    authors: [{ name: 'Hossain Sany', url: 'https://hossainsany.com' }],
    icons: {
        icon: '/assets/logo.png',
        apple: '/assets/favicon-apple.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='!scroll-smooth'>
            <body>
                <Nav />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
