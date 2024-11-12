import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://www.instagram.com/idealunearte" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} style={{ margin: '0 8px', color: '#343575' }} />
            </a>
            <a href="https://www.tiktok.com/@idealunearte" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={24} style={{ margin: '0 8px', color: '#343575' }} />
            </a>
            <a href="mailto:uneartecontato@gmail.com">
                <MdEmail size={24} style={{ margin: '0 8px', color: '#343575' }} />
            </a>
        </footer>
    );
};

export default Footer;
