import { Link } from "@mongez/react-router";
import appleIcon from "assets/images/apple-icon-store.jpg";
import googleIcon from "assets/images/google-icon-play.jpg";
import iconClock from "assets/images/icon-clock.svg";
import iconContact from "assets/images/icon-contact.svg";
import iconEmail from "assets/images/icon-email.svg";
import facebook from "assets/images/icon-facebook-white.svg";
import instagram from "assets/images/icon-instagram-white.svg";
import iconLocation from "assets/images/icon-location.svg";
import pinterest from "assets/images/icon-pinterest-white.svg";
import twitter from "assets/images/icon-twitter-white.svg";
import youtube from "assets/images/icon-youtube-white.svg";
import logo from "assets/images/logo.svg";
import paymentMethod from "assets/images/payment-method.png";
import phoneCall from "assets/images/phone-call.svg";

const contactInfo = [
  {
    icon: iconLocation,
    label: "Address",
    value: "5171 W Campbell Ave undefined Kent, Utah 53127 United States",
  },
  { icon: iconContact, label: "Call Us", value: "(+91) - 540-025-124553" },
  { icon: iconEmail, label: "Email", value: "sale@Nest.com" },
  { icon: iconClock, label: "Hours", value: "10:00 - 18:00, Mon - Sat" },
];

const companyLinks = [
  "About Us",
  "FAQ",
  "Contact Us",
  "Privacy Policy",
  "Terms & Conditions",
];

const socialIcons = [
  { src: facebook, alt: "facebook" },
  { src: twitter, alt: "twitter" },
  { src: instagram, alt: "instagram" },
  { src: pinterest, alt: "pinterest" },
  { src: youtube, alt: "youtube" },
];

// console.log("hello");

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-start py-4 px-9 w-full flex-wrap border border-solid border-gray-400">
        <div className="flex flex-col w-full md:w-auto items-start mb-6 md:mb-0 ">
          <div className="flex flex-col items-start">
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
            <p className="py-4 ">Awesome grocery store website template</p>
          </div>
          <ul className="flex flex-col list-none max-w-[400px]">
            {contactInfo.map(({ icon, label, value }) => (
              <li key={label} className="flex py-2 gap-2 items-start ">
                <img src={icon} alt={label} />
                <strong>{label}:</strong>
                <span className="px-2">{value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col flex-wrap p-6 md:pt-2 text-left">
          <h4 className="font-bold text-2xl">Company</h4>
          <ul className="flex flex-col list-none cursor-pointer ">
            {companyLinks.map(link => (
              <li
                key={link}
                className="py-3 hover:translate-x-3 hover:text-customGreen hover:duration-300 transition-all">
                <Link>{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col flex-wrap p-6 lg:pt-0">
          <h4 className="font-bold text-2xl">Install App</h4>
          <p className="py-4">From App Store or Google Play</p>
          <div className="flex py-3 cursor-pointer">
            <Link className="pr-3 hover:-translate-y-2 duration-200">
              <img src={appleIcon} alt="apple-icon" className="max-w-[120px]" />
            </Link>
            <Link className="hover:-translate-y-2 duration-200">
              <img
                src={googleIcon}
                alt="google-icon"
                className="max-w-[120px]"
              />
            </Link>
          </div>
          <p className="py-3">Secured Payment Gateways</p>
          <img src={paymentMethod} alt="payment-method" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center py-5 text-[#7E7E7E]">
        <div className="mb-4 lg:mb-0">
          <p className="pl-4 text-center lg:text-start ">
            © 2024 <strong>Nest</strong> HTML E-commerce Template
            <br />
            All rights reserved
          </p>
        </div>

        <div className="flex gap-2 mb-4 lg:mb-0">
          {["1900 - 6666", "1900 - 6666"].map((phone, index) => (
            <div key={index} className="min-w-[200px] flex items-center gap-2">
              <img src={phoneCall} alt="phone-call" className="w-[30px]" />
              <p className="flex flex-col">
                <span className="text-[26px] font-bold leading-6 text-[#3BB77E]">
                  {phone}
                </span>
                <span>
                  {index === 0 ? "Working 8:00 - 22:00" : "24/7 Support Center"}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start gap-2 mb-2">
            <h6 className="text-[#253D4E] font-bold leading-7">Follow Us</h6>
            {socialIcons.map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="w-[25px] bg-[#3BB77E] rounded-full cursor-pointer"
              />
            ))}
          </div>
          <p className="text-[14px]">
            Up to 15% discount on your first subscribe
          </p>
        </div>
      </div>
    </footer>
  );
}
