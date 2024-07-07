import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>About Us</h3>
          <p style={styles.sectionText}>We are dedicated to providing innovative solutions for your business needs.</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li><a href="/terms" style={styles.link}>Terms of Service</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/faq" style={styles.link}>FAQ</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Us</h3>
          <p style={styles.sectionText}>Email: info@example.com</p>
          <p style={styles.sectionText}>Phone: (123) 456-7890</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Follow Us</h3>
          <div style={styles.socialIcons}>
            <FaFacebookF style={styles.icon} />
            <FaTwitter style={styles.icon} />
            <FaLinkedinIn style={styles.icon} />
            <FaInstagram style={styles.icon} />
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #2980b9, #2c3e50)',
    color: '#fff',
    padding: '40px 20px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  section: {
    flexBasis: '22%',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    marginBottom: '15px',
  },
  sectionText: {
    fontSize: '14px',
    lineHeight: '1.5',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '1.8',
  },
  socialIcons: {
    display: 'flex',
  },
  icon: {
    fontSize: '20px',
    marginRight: '15px',
    cursor: 'pointer',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    marginTop: '20px',
    paddingTop: '20px',
    textAlign: 'center',
  },
  copyright: {
    fontSize: '14px',
  },
};

export default Footer;