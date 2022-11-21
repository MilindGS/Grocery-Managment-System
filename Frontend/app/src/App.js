import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";


import Home from "./pages/customer/home";
import Aboutus from "./pages/customer/aboutus";
import Contactus from "./pages/customer/contactus";
import Login from "./pages/customer/login";
import Signup from "./pages/customer/signup";
import Cart from "./pages/customer/cart";
import ProductHome from "./pages/customer/producthome";
import Logout from "./pages/customer/logout";

import Adminorderdetails from "./pages/admin/admin_customer/a_order_details";
import Adminproductdetails from "./pages/admin/admin_product/a_product_details";
import Customerdetails from "./pages/admin/admin_customer/customer_details";
import Editseller from "./pages/admin/admin_seller/editseller";
import Addcustomer from "./pages/admin/admin_customer/addcustomer";
import Editcustomer from "./pages/admin/admin_customer/editcustomer";
import Adminaddproduct from "./pages/admin/admin_product/addproduct";
import Admineditproduct from "./pages/admin/admin_product/editproduct";
import Sellerdetails from "./pages/admin/admin_seller/sellerdetails";

import Sellerorderdetails from "./pages/seller/s_order_details";
import Sellerproductdetails from "./pages/seller/s_product_details";
import Selleraddproduct from "./pages/seller/addproduct";
import Sellereditproduct from "./pages/seller/editproduct";
import SellerSignup from "./pages/seller/signup";
import SASignin from "./pages/signin";
import Searchedproducts from "./pages/customer/searchedproducts";
import Payment from "./pages/customer/payment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Customer */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/producthome" element={<ProductHome />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/searchedproducts" element={<Searchedproducts />} />
        <Route path="/payment" element={<Payment />} />

        {/* Admin */}
        <Route path="/aorder" element={<Adminorderdetails />} />

        <Route path="/aproduct" element={<Adminproductdetails />} />
        <Route path="/adminaddproduct" element={<Adminaddproduct />} />
        <Route path="/admineditproduct" element={<Admineditproduct />} />

        <Route path="/acustomer" element={<Customerdetails />} />
        <Route path="/addcustomer" element={<Addcustomer />} />
        <Route path="/editcustomer" element={<Editcustomer />} />

        <Route path="/aseller" element={<Sellerdetails />} />

        <Route path="/editseller" element={<Editseller />} />

        {/* Seller */}
        <Route path="/sorder" element={<Sellerorderdetails />} />
        <Route path="/sproduct" element={<Sellerproductdetails />} />
        <Route path="/ssignup" element={<SellerSignup />} />

        <Route path="/sproduct" element={<Sellerproductdetails />} />
        <Route path="/selleraddproduct" element={<Selleraddproduct />} />
        <Route path="/sellereditproduct" element={<Sellereditproduct />} />

        <Route path="/signin" element={<SASignin />} />
      </Routes>
      <Footer />

      <ToastContainer position="top-center" autoClose={1000} />
    </BrowserRouter>
  );
}

export default App;
