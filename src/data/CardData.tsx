import BANNERS_POSTERS from "../assets/icon/home/card/BANNERS_POSTERS.webp";
import BROCHURES_COLLATERAL from "../assets/icon/home/card/BROCHURES_COLLATERAL.webp";
import BUSINESS_FORMS from "../assets/icon/home/card/BUSINESS_FORMS.webp";
import DIRECT_MAIL_MAILING_SERVICES from "../assets/icon/home/card/DIRECT_MAIL_MAILING_SERVICES.webp";
import LABELS_PACKAGING from "../assets/icon/home/card/LABELS_PACKAGING.webp";
import MANUALS_CATALOGS_BOOKLETS from "../assets/icon/home/card/MANUALS_CATALOGS_BOOKLETS.webp";

export default function CardData() {
  const CardData = [
    {
      title: "Banners and Posters",
      imgSrc: BANNERS_POSTERS,
      content:
        "Discover our range of custom banners and posters. Perfect for events, promotions, and advertising. High-quality materials ensure durability.",
    },
    {
      title: "Brochures and Collateral",
      imgSrc: BROCHURES_COLLATERAL,
      content:
        "Get professional brochures and collateral for your business. Ideal for marketing and informational purposes. High-quality prints and designs.",
    },
    {
      title: "Business Forms",
      imgSrc: BUSINESS_FORMS,
      content:
        "Custom business forms tailored to your needs. Streamline your operations with professional forms. Reliable and efficient solutions.",
    },
    {
      title: "Direct Mail and Mailing Services",
      imgSrc: DIRECT_MAIL_MAILING_SERVICES,
      content:
        "Effective direct mail and mailing services to reach your audience. Customizable options to make a strong impression. Reliable and secure handling.",
    },
    {
      title: "Labels and Packaging",
      imgSrc: LABELS_PACKAGING,
      content:
        "Enhance your brand with custom labels and packaging. Durable materials and unique designs. Protect and promote your products.",
    },
    {
      title: "Manuals, Catalogs, and Booklets",
      imgSrc: MANUALS_CATALOGS_BOOKLETS,
      content:
        "Professional manuals, catalogs, and booklets for your business. High-quality prints and finishes. Ideal for showcasing your products and services.",
    },
  ];
  return CardData;
}
