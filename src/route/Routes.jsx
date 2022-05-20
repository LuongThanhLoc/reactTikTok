import HomePageMain from "../components/layout/homepage/HomePage";
import Following from "../components/layout/following/Following";
import Profile from "../components/layout/profile/Profile";
import Sign_Up from "../components/login/Sign_Up";
const routesPublic = [
  { path: "/", component: HomePageMain },
  { path: "/@:nickname", component: Profile },
  { path: "/following", component: Following },
  { path: "/sign-up", component: Sign_Up },
];
const routesPrivate = [];

export { routesPublic, routesPrivate };
