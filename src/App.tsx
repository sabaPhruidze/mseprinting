import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./Root";
import Home from "./category/Home";
import AboutUs from "./category/AboutUs";
import Resources from "./category/Resources";

import Login from "./category/Login";
import Productsservices from "./category/Productsservices";

import RequestQuote from "./category/RequestQuote";
import SendFile from "./category/SendFile";

//sub Category
import CommercialDigitalPrinting from "./sub-category/CommercialDigitalPrinting";
import CommercialOffsetPrinting from "./sub-category/CommercialOffsetPrinting";
import PrintingCopying from "./sub-category/PrintingCopying";
import DirectMailing from "./sub-category/DirectMailing";

import Accessibility from "./sub-category/Accessibility";
import TermsAndConditions from "./sub-category/TermsAndConditions";
import EnvironmentalMessage from "./sub-category/EnvironmentalMessage";
import EoeDiversity from "./sub-category/EoeDiversity";
import PrivacyAndPolicy from "./sub-category/PrivacyAndPolicy";
import Blog from "./sub-category/Blog";
import Register from "./category/Register";
import Signs from "./sub-category/Signs";
import OnlinePortal from "./sub-category/OnlinePortal";
import MCBooklets from "./sub-category/cards/MCBooklets";
import LabelsPackaging from "./sub-category/cards/LabelsPackaging";
import BusinessForms from "./sub-category/cards/BusinessForms";
import BrochuresCollateral from "./sub-category/cards/BrochuresCollateral";
import BannersPosters from "./sub-category/cards/BannersPosters";

//printing and copying part
import PrintingCopyingPages from "./sub-category/PrintingCopyingPages";

import DirectMailMailingServices from "./sub-category/directMailMailingServices/DirectMailMailingServices";

import SignsPages from "./sub-category/signs/SignsPages";

import GraphicDesign from "./sub-category/graphicDesign/GraphicDesign";

import LabelsPackagingMain from "./sub-category/labelsPackaging/LabelsPackaging";

import MarketingServices from "./sub-category/marketingServices/MarketingServices";
import TradeShowEvents from "./sub-category/tradeshowsEvents/TradeShowEvents";
import FulfillmentServices from "./sub-category/fulfillmentServices/FullfillmentServices";
import IndustrySpecific from "./sub-category/industrySpecific/IndustrySpecific";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        {/* header */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productsservices" element={<Productsservices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/send-file" element={<SendFile />} />
        {/* sub-category */}
        {/* Carousel */}
        <Route
          path="/commercial-digital-printing"
          element={<CommercialDigitalPrinting />}
        />
        <Route
          path="/commercial-offset-printing"
          element={<CommercialOffsetPrinting />}
        />
        <Route path="/printing-copying" element={<PrintingCopying />} />
        <Route
          path="/direct-mail-mailing-services"
          element={<DirectMailing />}
        />
        <Route path="/signs" element={<Signs />} />
        <Route path="/online-ordering-portals" element={<OnlinePortal />} />
        {/* Cards */}
        <Route path="/banners-posters" element={<BannersPosters />} />
        <Route path="/brochures-collateral" element={<BrochuresCollateral />} />
        <Route path="/business-forms" element={<BusinessForms />} />
        <Route path="/labels-packaging" element={<LabelsPackaging />} />
        <Route path="/manuals-catalogs-booklets" element={<MCBooklets />} />
        {/* Printing and Copying */}
        <Route
          path="printing-copying/Business-cards-stationery"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/business-annual-reports"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/newsletters-flyers-rack-cards"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/post-cards-direct-mailers"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/presentation-training-materials"
          element={<PrintingCopyingPages />}
        />

        <Route
          path="printing-copying/cards-invitations"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/labels-stickers-decals"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/book-printing"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/poster-printing"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/legal-printing"
          element={<PrintingCopyingPages />}
        />
        <Route
          path="printing-copying/apparel-uniforms"
          element={<PrintingCopyingPages />}
        />
        {/* DirectMailMailingServices */}
        <Route
          path="direct-mail-mailing-services/advanced-mailing-services"
          element={<DirectMailMailingServices />}
        />
        <Route
          path="direct-mail-mailing-services/every-door-direct-mail"
          element={<DirectMailMailingServices />}
        />
        <Route
          path="direct-mail-mailing-services/kitting-and-fulfillment"
          element={<DirectMailMailingServices />}
        />
        <Route
          path="direct-mail-mailing-services/standard-direct-mail"
          element={<DirectMailMailingServices />}
        />
        <Route
          path="direct-mail-mailing-services/targeted-direct-mail"
          element={<DirectMailMailingServices />}
        />
        <Route
          path="direct-mail-mailing-services/list-management-services"
          element={<DirectMailMailingServices />}
        />
        {/* Signs */}
        <Route path="signs/ada-wayfinding-signs" element={<SignsPages />} />
        <Route
          path="signs/booth-graphics-signs-banners"
          element={<SignsPages />}
        />
        <Route path="signs/car-graphics-wraps" element={<SignsPages />} />
        <Route path="signs/delivery-takeout-signs" element={<SignsPages />} />
        <Route
          path="signs/interior-office-lobby-decor"
          element={<SignsPages />}
        />
        <Route path="signs/now-open-signs-graphics" element={<SignsPages />} />
        <Route path="signs/pullup-banners-flags" element={<SignsPages />} />
        <Route path="signs/tradeshow-event-signs" element={<SignsPages />} />
        <Route
          path="signs/window-wall-floor-graphics"
          element={<SignsPages />}
        />
        <Route path="signs/yard-outdoor-signs" element={<SignsPages />} />
        {/* graphic design */}
        <Route path="/graphic-design" element={<GraphicDesign />} />
        {/* labels and packaging */}
        <Route
          path="labels-packaging/qr-codes-no-touch-options"
          element={<LabelsPackagingMain />}
        />
        <Route
          path="labels-packaging/custom-packaging"
          element={<LabelsPackagingMain />}
        />
        <Route
          path="labels-packaging/short-run-packaging"
          element={<LabelsPackagingMain />}
        />
        <Route
          path="labels-packaging/safety-labels"
          element={<LabelsPackagingMain />}
        />
        <Route
          path="labels-packaging/stickers-decals"
          element={<LabelsPackagingMain />}
        />
        <Route
          path="labels-packaging/product-promotional-labels"
          element={<LabelsPackagingMain />}
        />
        <Route
          path="labels-packaging/premium-private-labels"
          element={<LabelsPackagingMain />}
        />
        {/* marketing services */}
        <Route
          path="marketing-services/campaigns-consultation"
          element={<MarketingServices />}
        />
        <Route
          path="marketing-services/social-media"
          element={<MarketingServices />}
        />
        <Route
          path="marketing-services/video-production"
          element={<MarketingServices />}
        />
        <Route
          path="marketing-services/website-design"
          element={<MarketingServices />}
        />
        {/* trandeshows and events */}
        <Route
          path="tradeshow-events/event-literature-signs"
          element={<TradeShowEvents />}
        />
        <Route
          path="tradeshow-events/pre-post-show-direct-mail"
          element={<TradeShowEvents />}
        />
        <Route
          path="tradeshow-events/table-counter-kiosk-displays"
          element={<TradeShowEvents />}
        />
        <Route
          path="tradeshow-events/counter-pop-up-displays"
          element={<TradeShowEvents />}
        />

        <Route
          path="tradeshow-events/gifts-awards-incentives"
          element={<TradeShowEvents />}
        />
        {/* fulfillment services */}
        <Route
          path="/fullfillment-services/pick-pack"
          element={<FulfillmentServices />}
        />
        <Route
          path="/fullfillment-services/product-fulfillment"
          element={<FulfillmentServices />}
        />
        <Route
          path="/fullfillment-services/inventory-management"
          element={<FulfillmentServices />}
        />
        <Route
          path="/fullfillment-services/marketing-sales-kit"
          element={<FulfillmentServices />}
        />
        {/* Industry specific */}

        <Route
          path="/industry-specific/education"
          element={<IndustrySpecific />}
        />
        <Route
          path="/industry-specific/finance"
          element={<IndustrySpecific />}
        />
        <Route
          path="/industry-specific/healthcare"
          element={<IndustrySpecific />}
        />
        <Route path="/industry-specific/legal" element={<IndustrySpecific />} />
        <Route
          path="/industry-specific/manufacturing"
          element={<IndustrySpecific />}
        />
        <Route
          path="/industry-specific/political"
          element={<IndustrySpecific />}
        />
        <Route
          path="/industry-specific/realestate"
          element={<IndustrySpecific />}
        />
        <Route
          path="/industry-specific/restaurants"
          element={<IndustrySpecific />}
        />
        <Route
          path="/industry-specific/retail"
          element={<IndustrySpecific />}
        />
        {/* Bottom */}
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/eoe-diversity" element={<EoeDiversity />} />
        <Route
          path="/environmental-message"
          element={<EnvironmentalMessage />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
