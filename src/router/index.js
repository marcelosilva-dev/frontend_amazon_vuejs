import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import ProfilePage from "@/pages/Profile";
import BuyProduct from "@/pages/BuyProduct";
import AddProduct from "@/pages/AddProduct";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/profile/:id",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/buy-product/:id",
    name: "BuyProduct",
    component: BuyProduct,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
