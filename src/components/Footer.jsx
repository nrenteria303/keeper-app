import React from 'react';

function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &copy; {year} <a href="https://www.nickrenteria.com" target="_blank" rel="noopener noreferrer">Nick Renteria Web Development</a></p>
        </footer>);
}

export default Footer;