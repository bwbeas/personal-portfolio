import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>★ made by beas © 2025</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '12px 0',
    backgroundColor: '#000000ff',
    color: '#b2b1b1ff',
    fontSize: '0.9rem',
    fontWeight: '800',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};

export default Footer;
