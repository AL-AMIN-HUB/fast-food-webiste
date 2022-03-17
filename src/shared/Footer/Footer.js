import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer_bg py-16">
        <footer className="footer bg-transparent text-white  container mx-auto p-10 bg-base-200 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <li className="link link-hover">Branding</li>
            <li className="link link-hover">Design</li>
            <li className="link link-hover">Marketing</li>
            <li className="link link-hover">Advertisement</li>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <li className="link link-hover">About us</li>
            <li className="link link-hover">Contact</li>
            <li className="link link-hover">Jobs</li>
            <li className="link link-hover">Press kit</li>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <li className="link link-hover">Terms of use</li>
            <li className="link link-hover">Privacy policy</li>
            <li className="link link-hover">Cookie policy</li>
          </div>
          <div>
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="copyright_footer_part flex items-center justify-around px-2 bg-green-500 py-6">
        <div>
          <h6>Copyright © 2022 Al Amin. All Rights Reserved.</h6>
        </div>
        <div>
          <img src="https://i.ibb.co/5TkfPjc/footer-img1-300x25.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
