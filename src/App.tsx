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

//sub Categorry
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
import BusinessCardsStationery from "./sub-category/printingCopying/BusinessCardsStationery";
import BusinessAnnualReports from "./sub-category/printingCopying/BusinessAnnualReports";
import NewslettersFlyersRackCards from "./sub-category/printingCopying/NewslettersFlyersRackCards";
import PostCardsDirectMailers from "./sub-category/printingCopying/PostCardsDirectMailers";
import PresentationTrainingMaterials from "./sub-category/printingCopying/PresentationTrainingMaterials";
import CardsInvitations from "./sub-category/printingCopying/CardsInvitations";
import LabelsStickersDecals from "./sub-category/printingCopying/LabelsStickersDecals";
import BookPrinting from "./sub-category/printingCopying/BookPrinting";
import PosterPrinting from "./sub-category/printingCopying/PosterPrinting";
import LegalPrinting from "./sub-category/printingCopying/LegalPrinting";
import ApparelUniforms from "./sub-category/printingCopying/ApparelUniforms";
import AdvancedMailingServices from "./sub-category/directMailMailingServices/AdvancedMailingServices";
import EveryDoorDirectMail from "./sub-category/directMailMailingServices/EveryDoorDirectMail";
import KittingAndFulfillment from "./sub-category/directMailMailingServices/KittingAndFulfillment";
import StandartDirectMail from "./sub-category/directMailMailingServices/StandartDirectMail";
import TargetedDirectMail from "./sub-category/directMailMailingServices/TargetedDirectMail";
import ListManagementServices from "./sub-category/directMailMailingServices/ListManagementServices";
import ADAWayfindingSigns from "./sub-category/signs/ADAWayfindingSigns";
import BoothGraphicsSignsBanners from "./sub-category/signs/BoothGraphicsSignsBanners";
import CarGraphicsWraps from "./sub-category/signs/CarGraphicsWraps";
import DeliveryTakeoutSigns from "./sub-category/signs/DeliveryTakeoutSigns";
import InteriorOfficeLobbyDecor from "./sub-category/signs/InteriorOfficeLobbyDecor";
import NowOpenSignsGraphics from "./sub-category/signs/NowOpenSignsGraphics";
import PullupBannersFlags from "./sub-category/signs/PullupBannersFlags";
import TradeshowEventSigns from "./sub-category/signs/TradeshowEventSigns";
import WindowWallFloorGraphics from "./sub-category/signs/WindowWallFloorGraphics";
import YardOutdoorSigns from "./sub-category/signs/YardOutdoorSigns";

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
          path="/Business-cards-stationery"
          element={<BusinessCardsStationery />}
        />
        <Route
          path="/business-annual-reports"
          element={<BusinessAnnualReports />}
        />
        <Route
          path="/newsletters-flyers-rack-cards"
          element={<NewslettersFlyersRackCards />}
        />
        <Route
          path="/post-cards-direct-mailers"
          element={<PostCardsDirectMailers />}
        />
        <Route
          path="/presentation-training-materials"
          element={<PresentationTrainingMaterials />}
        />
        <Route path="/cards-invitations" element={<CardsInvitations />} />
        <Route
          path="/labels-stickers-decals"
          element={<LabelsStickersDecals />}
        />
        <Route path="/book-printing" element={<BookPrinting />} />
        <Route path="/poster-printing" element={<PosterPrinting />} />
        <Route path="/legal-printing" element={<LegalPrinting />} />
        <Route path="/apparel-uniforms" element={<ApparelUniforms />} />
        {/* DirectMailMailingServices */}
        <Route
          path="/advanced-mailing-services"
          element={<AdvancedMailingServices />}
        />
        <Route
          path="/every-door-direct-mail"
          element={<EveryDoorDirectMail />}
        />
        <Route
          path="/kitting-and-fulfillment"
          element={<KittingAndFulfillment />}
        />
        <Route path="/standard-direct-mail" element={<StandartDirectMail />} />
        <Route path="/targeted-direct-mail" element={<TargetedDirectMail />} />
        <Route
          path="/list-management-services"
          element={<ListManagementServices />}
        />
        {/* Signs */}
        <Route path="/ada-wayfinding-signs" element={<ADAWayfindingSigns />} />
        <Route
          path="/booth-graphics-signs-banners"
          element={<BoothGraphicsSignsBanners />}
        />
        <Route path="/car-graphics-wraps" element={<CarGraphicsWraps />} />
        <Route
          path="/delivery-takeout-signs"
          element={<DeliveryTakeoutSigns />}
        />
        <Route
          path="/interior-office-lobby-decor"
          element={<InteriorOfficeLobbyDecor />}
        />
        <Route
          path="/now-open-signs-graphics"
          element={<NowOpenSignsGraphics />}
        />
        <Route path="/pullup-banners-flags" element={<PullupBannersFlags />} />
        <Route
          path="/tradeshow-event-signs"
          element={<TradeshowEventSigns />}
        />
        <Route
          path="/window-wall-floor-graphics"
          element={<WindowWallFloorGraphics />}
        />
        <Route path="/yard-outdoor-signs" element={<YardOutdoorSigns />} />
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
