import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 rounded-2xl p-10 w-11/12 mx-auto text-gray-800 dark:text-gray-200 mt-12">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="normal-case text-2xl font-semibold">
              <h1 className="text-primary dark:text-btnHover">Crowd Nest</h1>
            </div>
          </div>
          <p className="text-base max-w-72">
            Crowd Nest is your go-to platform for bringing communities together
            through crowdfunding. We help you turn innovative ideas into reality
            by connecting you with passionate supporters.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <p className="text-base font-bold text-gray-800 dark:text-gray-200">
            Explore
          </p>
          <ul className="space-y-1 flex flex-col">
            <NavLink
              to="/campaigns"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-btnHover link link-hover"
            >
              View Campaigns
            </NavLink>
            <NavLink
              to="/create-campaign"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-btnHover link link-hover"
            >
              Start a Campaign
            </NavLink>
            <NavLink
              to="/success-stories"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-btnHover link link-hover"
            >
              Success Stories
            </NavLink>
            <NavLink
              to="/faq"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-btnHover link link-hover"
            >
              FAQs
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-btnHover link link-hover"
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-4">
          <p className="text-base font-bold text-gray-800 dark:text-gray-200">
            Connect with Us
          </p>
          <ul className="space-y-1">
            <li>
              <p className="text-gray-600 dark:text-gray-300">
                789 Community Lane, Dhaka, Bangladesh
              </p>
            </li>
            <li>
              <p className="text-gray-600 dark:text-gray-300">
                support@crowdnest.com
              </p>
            </li>
            <li>
              <p className="text-gray-600 dark:text-gray-300">
                +880 123-456-7890
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

      {/* Footer Bottom */}
      <aside className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
        <p className="text-gray-800 dark:text-gray-200 text-center lg:text-left">
          © {new Date().getFullYear()} Crowd Nest - Empowering Communities
          Together.
        </p>
        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-[#1877F2]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[#1DA1F2]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#F56040]" />
          </a>
          <a
            className="rounded-full bg-gray-200 dark:bg-gray-700 p-2"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-[#0077B5]" />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
