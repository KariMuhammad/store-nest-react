import img1 from "assets/images/thumbnail/thumbnail-1.jpg";
import img2 from "assets/images/thumbnail/thumbnail-2.jpg";
import img3 from "assets/images/thumbnail/thumbnail-3.jpg";

export const MiddleHeaderSelectPlacholder = "All Categories";
export const MiddleHeaderInputPlacholder = "Search for items";

export const middleHeaderActions = [
  { name: "Compare", href: "/compare", iconName: "git-compare" },
  { name: "Washlist", href: "/washlist", iconName: "heart" },
  { name: "Cart", href: "/cart", iconName: "cart" },
  { name: "Account", href: "/account", iconName: "user" },
];

export const navbarIcons = [
  { icon: "cart", link: "/cart" },
  { icon: "heart", link: "/wishlist" },
];

export const middleHeaderCategories = [
  "abc",
  "abc",
  "abc",
  "abc",
  "abc",
  "abc",
  "abc",
  "abc",
  "abc",
  "abc",
];

// Navigation Menu

export const websiteInfo = [
  { name: "location", link: "/location", icon: "location-plus" },
  { name: "Login in / Sign up", link: "/login", icon: "user" },
  { name: "(+01)-2345-6789", link: "/", icon: "phone" },
];

export const socialMediaLinks = [
  { name: "facebook", link: "https://www.facebook.com" },
  { name: "twitter", link: "https://www.twitter.com" },
  { name: "instagram", link: "https://www.instagram.com" },
  { name: "pinterest", link: "https://www.pinterest.com" },
  { name: "youtube", link: "https://www.youtube.com" },
];

// Account menu
export const accountMenu = [
  { name: "My Account", link: "/account" },
  { name: "Addresses", link: "/addresses" },
  { name: "Orders", link: "/orders" },
  { name: "Wishlist", link: "/wishlist" },
  { name: "Setting", link: "/setting" },
  { name: "Logout", link: "/logout" },
];

// Cart menu

export const cartMenu = [
  { img: img1, title: "item 1", amount: 1, price: 100 },
  { img: img2, title: "item 2", amount: 1, price: 200 },
  { img: img3, title: "item 3", amount: 1, price: 400 },
];
