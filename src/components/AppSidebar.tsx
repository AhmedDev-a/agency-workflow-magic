import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  HomeIcon,
  BriefcaseIcon,
  PlaneIcon,
  BarChart4Icon,
  PhoneCallIcon,
  UsersIcon,
  ClipboardCheckIcon,
  DollarSignIcon,
  HandshakeIcon,
  ShoppingCartIcon,
  FootprintsIcon,
  PlaneLandingIcon,
  StarIcon,
  Building2Icon,
  ScrollTextIcon,
  LayoutListIcon,
  WalletIcon,
  ReceiptIcon,
  CircleDollarSignIcon,
  BarChart2Icon,
  LandmarkIcon,
} from "lucide-react";

const mainModules = [
  {
    title: "الرئيسية",
    icon: HomeIcon,
    items: [],
    path: "/",
  },
  {
    title: "المبيعات",
    icon: BriefcaseIcon,
    items: [
      { title: "الاتصالات", icon: PhoneCallIcon, path: "/calls" },
      { title: "الزيارات", icon: FootprintsIcon, path: "/visits" },
      { title: "العملاء", icon: UsersIcon, path: "/customers" },
      { title: "المتطلبات", icon: ClipboardCheckIcon, path: "/requirements" },
      { title: "التسعير", icon: DollarSignIcon, path: "/pricing" },
      { title: "المفاوضات", icon: HandshakeIcon, path: "/negotiations" },
      { title: "الطلبات", icon: ShoppingCartIcon, path: "/orders" },
    ],
  },
  {
    title: "الرحلات",
    icon: PlaneIcon,
    items: [
      { title: "الرحلات الثابتة", icon: PlaneLandingIcon, path: "/trips?tab=fixed" },
      { title: "الرحلات الخاصة", icon: StarIcon, path: "/trips?tab=private" },
      { title: "خدمات أخرى", icon: Building2Icon, path: "/trips?tab=services" },
    ],
  },
  {
    title: "الحسابات",
    icon: BarChart4Icon,
    items: [
      { title: "شجرة الحسابات", icon: LayoutListIcon, path: "/accounts/chart" },
      { title: "قيود اليومية", icon: ScrollTextIcon, path: "/accounts/journal" },
      { title: "ميزان المراجعة", icon: ReceiptIcon, path: "/accounts/trial-balance" },
      { title: "حسابات العملاء", icon: WalletIcon, path: "/accounts/customers" },
      { title: "حسابات الموردين", icon: CircleDollarSignIcon, path: "/accounts/suppliers" },
      { title: "الميزانية العمومية", icon: BarChart2Icon, path: "/accounts/balance-sheet" },
      { title: "قائمة الدخل", icon: BarChart4Icon, path: "/accounts/income-statement" },
      { title: "الخزنة", icon: LandmarkIcon, path: "/accounts/treasury" },
    ],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar className="z-20">
      <SidebarContent>
        {mainModules.map((module) => (
          <SidebarGroup key={module.title}>
            <SidebarGroupLabel>{module.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {module.items.length === 0 ? (
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href={module.path} className="flex items-center gap-2 px-4 py-2">
                        <module.icon className="w-5 h-5" />
                        <span>{module.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  module.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.path} className="flex items-center gap-2 px-4 py-2">
                          <item.icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
