import React from 'react';
import FooterLinks from '../Footer/FooterLinks';
import NewsletterSubscription from '../Footer/NewsletterSubscription';
import Legal from '../Footer/Legal';

export default function Footer() {
    return (
        <footer className="container pb-16">

            <FooterLinks />
            <NewsletterSubscription />
            <Legal />

        </footer>
    );
}