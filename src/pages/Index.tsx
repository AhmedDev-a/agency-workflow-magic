
import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainDashboard from "@/components/MainDashboard";
import AppSidebar from "@/components/AppSidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <MainDashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
