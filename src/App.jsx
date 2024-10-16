import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from "./layout/MainLayouts";
import AnalaticsPage from "./pages/AnalaticsPage";
import EcommercePage from "./pages/EcommercePage";
import NotFoundPage from "./pages/NotFoundPage";
import EmailPage from "./pages/EmailPage";
import ChatPage from "./pages/ChatPage";
import TodoPage from "./pages/TodoPage";
// import CalenderPage from "./pages/CalenderPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import CardAction from "./pages/CardAction";
import Electronics from "./pages/Electronics";
import CheckoutPage from "./pages/CheckoutPage";
import ProductGridPage from "./pages/ProductGridPage";
import ProductListPage from "./pages/ProductListPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayouts />}>
      {/* dashboard */}
      <Route index element={<AnalaticsPage />} />
      <Route path="ecommerce" element={<EcommercePage />} />
      {/* app */}
      <Route path="email" element={<EmailPage />} />
      <Route path="chat" element={<ChatPage />} />
      <Route path="to-do" element={<TodoPage />} />
      <Route path="calender" element={<ComingSoonPage />} />
      {/* ui elements */}
      <Route path="card" element={<CardAction />} />
      {/* electroinics route */}
      <Route path="electronics" element={<Electronics />}>
        <Route index  element={<ProductGridPage />} />
        <Route path="/electronics/list"  element={<ProductListPage />} />
      </Route>
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="color" element={<ComingSoonPage />} />
      <Route path="wishlist" element={<ComingSoonPage />} />
      <Route path="table" element={<ComingSoonPage />} />
      {/* form */}
      <Route path="form-layout" element={<ComingSoonPage />} />
      <Route path="form-wizard" element={<ComingSoonPage />} />
      <Route path="form-validate" element={<ComingSoonPage />} />
      {/* pages */}
      <Route path="coming-soon" element={<ComingSoonPage />} />
      <Route path="maintain" element={<ComingSoonPage />} />
      <Route path="profile" element={<ComingSoonPage />} />
      <Route path="faq" element={<ComingSoonPage />} />
      <Route path="knowledge-base" element={<ComingSoonPage />} />
      <Route path="search" element={<ComingSoonPage />} />
      <Route path="invoices" element={<ComingSoonPage />} />
      {/* charts */}
      <Route path="google-map" element={<ComingSoonPage />} />
      {/* extensions */}
      <Route path="quill-editor" element={<ComingSoonPage />} />
      <Route path="drag-drop" element={<ComingSoonPage />} />
      <Route path="datepicker" element={<ComingSoonPage />} />
      {/* others */}
      <Route path="disabled" element={<ComingSoonPage />} />
      {/* notfound */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
