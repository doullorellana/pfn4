import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import { Home, Usuarios, Roles, Bitacoras, Paginas } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Usuarios",
        path: "/usuarios",
        element: <Usuarios />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Roles",
        path: "/roles",
        element: <Roles />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Bitacoras",
        path: "/bitacoras",
        element: <Bitacoras />,
      },
      {
        icon: <LinkIcon {...icon} />,
        name: "Paginas",
        path: "/Paginas",
        element: <Paginas />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
