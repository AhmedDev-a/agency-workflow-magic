
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
  UserIcon,
  CalendarIcon,
  ListTodoIcon,
  Settings2Icon,
} from "lucide-react";

const mainMenuItems = [
  { title: "الرئيسية", icon: HomeIcon },
  { title: "المبيعات", icon: BriefcaseIcon },
  { title: "الرحلات", icon: PlaneIcon },
  { title: "الحسابات", icon: BarChart4Icon },
];

const subMenuItems = [
  { title: "العملاء", icon: UserIcon },
  { title: "المواعيد", icon: CalendarIcon },
  { title: "المهام", icon: ListTodoIcon },
  { title: "الإعدادات", icon: Settings2Icon },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2 px-4 py-2">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>إدارة</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2 px-4 py-2">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
