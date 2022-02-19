import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import Profile from "@/pages/Profile";
import BuyProduct from "@/pages/BuyProduct";

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
    path: "/profile",
    name: "Profile",
    component: Profile,
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
