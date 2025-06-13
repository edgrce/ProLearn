import { FaTwitter, FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa6";
import logoblue from "../assets/Logo blue.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 mt-15">
        {/* Logo */}
        <div className="flex justify-center mb-10 items-center">
          <img src={logoblue} alt="ProLearn Logo" className="h-10 mr-2" />
          <span className="font-bold text-2xl text-indigo-600 mt-2">
            ProLearn
          </span>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 w-full justify-items-center text-start leading-normal">
          <div>
            <div className="font-bold mb-2">Product</div>
            <div>
              <a href="#" className="block hover:underline">Features</a>
              <a href="#" className="block hover:underline">Pricing</a>
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Resources</div>
            <div>
              <a href="#" className="block hover:underline">Blog</a>
              <a href="#" className="block hover:underline">User guides</a>
              <a href="#" className="block hover:underline">Webinars</a>
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Company</div>
            <div>
              <a href="#" className="block hover:underline">About us</a>
              <a href="#" className="block hover:underline">Contact us</a>
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Plans &amp; Pricing</div>
            <div>
              <a href="#" className="block hover:underline">Personal</a>
              <a href="#" className="block hover:underline">Start up</a>
              <a href="#" className="block hover:underline">Organization</a>
            </div>
          </div>
        </div>

        <hr className="border-gray-300 mb-4 mt-20" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500">
          {/* Language Selector */}
          <div className="mb-2 md:mb-0 flex justify-center w-full md:w-auto">
            <select className="bg-gray-200 px-4 py-2 rounded">
              <option>English</option>
              <option>Indonesian</option>
            </select>
          </div>

          {/* Copyright & Links */}
          <div className="mb-2 md:mb-0 text-center w-full">
            © 2025 Brand, Inc. &nbsp;
            <a href="#" className="hover:underline">Privacy</a> &nbsp;•&nbsp;
            <a href="#" className="hover:underline">Terms</a> &nbsp;•&nbsp;
            <a href="#" className="hover:underline">Sitemap</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 justify-center w-full md:w-auto">
            <a href="#" className="hover:text-blue-700 text-blue-700">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-900 text-blue-900">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-800 text-blue-800">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-red-700 text-red-700">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}