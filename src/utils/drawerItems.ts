import { USER_ROLE } from "@/contants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Edit Profile",
          path: `${role}/edit-profile`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Blood Request",
          path: `${role}/blood-request`,
          icon: CalendarMonthIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Edit Profile",
          path: `${role}/edit-profile`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Blood Request",
          path: `${role}/blood-request`,
          icon: CalendarMonthIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
