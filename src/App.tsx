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
import Blog from "./category/Blog";
import RequestQuote from "./category/RequestQuote";
import SendFile from "./category/SendFile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/productsservices" element={<Productsservices />} />
        <Route path="/fulfillmentservices" element={<FulfillmentServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/requestquote" element={<RequestQuote />} />
        <Route path="/sendfile" element={<SendFile />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
