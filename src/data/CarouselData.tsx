import React from "react";
import SIGNS from "../assets/icon/carousel/SIGNS.webp";
import PRINTING_COPYING from "../assets/icon/carousel/PRINTING_COPYING.webp";
import MAILING from "../assets/icon/carousel/MAILING.webp";
import TRADESHOWS_EVENTS from "../assets/icon/carousel/TRADESHOWS_EVENTS.webp";

export default function CarouselData() {
  const caruselData = [
    {
      image: SIGNS,
      alt: "Signs",
      title: "Signs",
      text: "At MSEPrinting, we are proud to offer a wide range of high-quality printing services to meet your business needs. Our comprehensive list of services includes: Banners & Posters: Perfect for any event or promotional activity. Pull-up Banners & Flags: Easy to set up and great for advertising on the go. Car Graphics & Wraps: Transform your vehicles into moving billboards. Window, Wall & Floor Graphics: Enhance your space with custom graphics. Interior Office & Lobby Decor: Create a professional and inviting atmosphere. Tradeshow & Event Signs: Make a lasting impression at your next event. ADA & Wayfinding Signs: Ensure accessibility and clear navigation. Yard & Outdoor Signs: Durable signs for outdoor advertising. Counter & Pop-up Displays: Effective displays for retail and events. Labels, Stickers & Decals: Custom designs for all your labeling needs. Booth Graphics, Signs & Banners: Stand out at trade shows and exhibitions. Delivery & Takeout Signs: Informative signs for delivery and takeout services. Now Open Signs & Graphics: Announce your business opening with style. Our team is dedicated to delivering top-notch service and exceptional results. Contact us today to learn more about how we can help you with your printing needs. MSEPrinting – Your Partner in Quality Printing Solutions",
    },
    {
      image: MAILING,
      alt: "Direct Mail & Mailing Services",
      title: "Direct Mail & Mailing Services",
      text: "Direct mail and mailing services offer a powerful way to reach your audience directly with personalized and tangible marketing materials. With our comprehensive solutions, you can effortlessly create, print, and distribute custom mailers designed to captivate and engage. From targeted mailing lists to high-quality printing and timely delivery, we handle every aspect to ensure your message makes a lasting impression. Whether it's postcards, brochures, or catalogs, our state-of-the-art printing technology and expert team guarantee professional results that drive results. Let us help you connect with your customers in a meaningful and impactful way through our direct mail and mailing services.",
    },
    {
      image: PRINTING_COPYING,
      alt: "Printing & Copying",
      title: "Printing & Copying",
      text: " we provide a comprehensive range of professional printing services to meet your business needs. Our offerings include brochures and collateral, postcards and direct mailers, business cards and stationery, newsletters, flyers, and rack cards. We also specialize in presentation and training materials, manuals, catalogs, booklets, and business and annual reports. Additionally, we offer custom printing for cards and invitations, business forms, labels, stickers, and decals. Our book and poster printing services are ideal for all your publishing needs, and we provide legal copying and standard direct mail services, including Every Door Direct Mail®. Our advanced mailing services, kitting and fulfillment options, and event literature and signs ensure your marketing efforts are seamless and effective. For specialized needs, we offer premium and private labels, product and promotional labels, safety labels, and short-run packaging. We also provide custom printing for apparel and uniforms and comprehensive marketing and sales kits.",
    },
    {
      image: TRADESHOWS_EVENTS,
      alt: "Tradeshows & Events",
      title: "Tradeshows & Events",
      text: "Make your tradeshows and events unforgettable with our comprehensive range of services and products. We offer everything you need, from impactful booth graphics, signs, and banners to eye-catching table, counter, and kiosk displays. Enhance your presence with pull-up banners, flags, and custom signs designed to attract and engage attendees. Our event literature, including brochures, flyers, newsletters, and rack cards, ensures your message is clear and professional. Prepare for success with pre-show direct mail and follow up effectively with post-show mailers. Whether it's business cards, stationery, or presentation materials, we provide high-quality solutions to make your event a standout success. Let us help you create a cohesive and memorable experience with our targeted direct mail, gifts, awards, and incentives.",
    },
  ];
  return caruselData;
}
