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

        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="eoe-diversity" element={<EoeDiversity />} />
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
