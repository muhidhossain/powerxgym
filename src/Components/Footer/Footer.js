import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <main className='footer'>
            <section>
                <div>
                    <h2>POWER <span style={{ color: "goldenrod" }}>X</span> </h2>
                </div>
                <div>
                    <p>Need Help?</p>
                    <p>Help Center</p>
                    <p>Email Support</p>
                    <p>Live Chat</p>
                    <p>Gift Certificates</p>
                    <p>Send Us Feedback</p>
                </div>
                <div>
                    <p>Digital Resources</p>
                    <p>Articles</p>
                    <p>E-books</p>
                </div>
                <div>
                    <p>COntact with Us</p>
                    <div>

                    </div>
                    <p>Forum</p>
                </div>
                <div>
                    <p>Join Our Newsletter</p>
                    <p>Get exclusive news, features and updates from The Shredder Weight Loss Academy.</p>
                </div>
            </section>
            <small>© {year}. All Rights Reserved</small>
        </main>
    );
};

export default Footer;