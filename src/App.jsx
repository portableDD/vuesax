import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import PrivateRoutes from "./components/PrivateRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* sign in */}
      <Route path="/" element={<LoginPage />} />
      {/* sign up */}
      <Route path="/sign-up" element={<SignUpPage />} />
      {/* forgotten  */}
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/layouts" element={<MainLayouts />}>
          {/* dashboard */}
          <Route index element={<AnalaticsPage />} />
          <Route path="/layouts/ecommerce" element={<EcommercePage />} />
          {/* app */}
          <Route path="/layouts/email" element={<EmailPage />} />
          <Route path="/layouts/chat" element={<ChatPage />} />
          <Route path="/layouts/to-do" element={<TodoPage />} />
          <Route path="/layouts/calender" element={<ComingSoonPage />} />
          {/* ui elements */}
          <Route path="/layouts/card" element={<CardAction />} />
          {/* electroinics route */}
          <Route path="/layouts/electronics" element={<Electronics />}>
            <Route index element={<ProductGridPage />} />
            <Route
              path="/layouts/electronics/list"
              element={<ProductListPage />}
            />
          </Route>
          <Route path="/layouts/checkout" element={<CheckoutPage />} />
          <Route path="/layouts/color" element={<ComingSoonPage />} />
          <Route path="/layouts/wishlist" element={<ComingSoonPage />} />
          <Route path="/layouts/table" element={<ComingSoonPage />} />
          {/* form */}
          <Route path="/layouts/form-layout" element={<ComingSoonPage />} />
          <Route path="/layouts/form-wizard" element={<ComingSoonPage />} />
          <Route path="form-validate" element={<ComingSoonPage />} />
          {/* pages */}
          <Route path="/layouts/coming-soon" element={<ComingSoonPage />} />
          <Route path="/layouts/maintain" element={<ComingSoonPage />} />
          <Route path="/layouts/profile" element={<ComingSoonPage />} />
          <Route path="/layouts/faq" element={<ComingSoonPage />} />
          <Route path="/layouts/knowledge-base" element={<ComingSoonPage />} />
          <Route path="/layouts/search" element={<ComingSoonPage />} />
          <Route path="/layouts/invoices" element={<ComingSoonPage />} />
          {/* charts */}
          <Route path="/layouts/google-map" element={<ComingSoonPage />} />
          {/* extensions */}
          <Route path="/layouts/quill-editor" element={<ComingSoonPage />} />
          <Route path="/layouts/drag-drop" element={<ComingSoonPage />} />
          <Route path="/layouts/datepicker" element={<ComingSoonPage />} />
          {/* others */}
          <Route path="/layouts/disabled" element={<ComingSoonPage />} />
        </Route>
      </Route>
      {/* notfound */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
