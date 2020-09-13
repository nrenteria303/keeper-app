import React from 'react';

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} <a href="http://nickrenteria.com" target="_blank" rel="noopener noreferrer">Nick Renteria Web Development</a></p>
        </footer>);
}

export default Footer;