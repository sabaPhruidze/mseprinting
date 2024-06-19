import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./Root";
import Home from "./category/Home";

import Login from "./category/Login";
import Productsservices from "./category/Productsservices";
import FulfillmentServices from "./category/FulfillmentServices";

import RequestQuote from "./category/RequestQuote";
import SendFile from "./category/SendFile";

//sub Categorry
import Accessibility from "./sub-category/Accessibility";
import TermsAndConditions from "./sub-category/TermsAndConditions";
import EnvironmentalMessage from "./sub-category/EnvironmentalMessage";
import EoeDiversity from "./sub-category/EoeDiversity";
import PrivacyAndPolicy from "./sub-category/PrivacyAndPolicy";
import Blog from "./sub-category/Blog";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/productsservices" element={<Productsservices />} />
        <Route path="/fulfillmentservices" element={<FulfillmentServices />} />
        <Route path="/requestquote" element={<RequestQuote />} />
        <Route path="/sendfile" element={<SendFile />} />
        {/* sub-category */}
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
