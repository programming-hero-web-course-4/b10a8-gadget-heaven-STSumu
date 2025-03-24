import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-base-base text-black py-10 lg:py-24 px-10 lg:px-40 text-center">
            <div className='border-b-2 border-gray-300 pb-8 space-y-3'>
                <h4 className='text-3xl font-bold'>Gadget Heaven</h4>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
  <div className='footer sm:footer-horizontal pt-8 justify-center items-center gap-10 md:gap-40'>
  <nav className='flex flex-col justify-center items-center'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex flex-col justify-center items-center'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex flex-col justify-center items-center'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
</footer>
    );
};

export default Footer;