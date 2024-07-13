// pages/index.js
import Head from 'next/head';
import Navbar from '../pages/Navbar';
import Hero from '../pages/Hero';
import AppDetails from '../pages/AppDetails';
import DownloadApp from '../pages/DownloadApp';
import Footer from '../pages/Footer';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Your App Landing Page</title>
                <meta name="description" content="Welcome to your app landing page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

           

            <main>
                <Hero />
                <AppDetails />
                <DownloadApp />
            </main>

            <Footer />
        </div>
    );
}
