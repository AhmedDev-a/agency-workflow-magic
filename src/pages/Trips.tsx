
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FixedTripsTable } from "@/components/trips/FixedTripsTable";
import { PrivateTripsTable } from "@/components/trips/PrivateTripsTable";
import { ServicesTable } from "@/components/trips/ServicesTable";
import { OperationOrders } from "@/components/trips/OperationOrders";
import { NotificationSystem } from "@/components/trips/NotificationSystem";

const Trips = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentTab = searchParams.get("tab") || "fixed";

  const handleTabChange = (value: string) => {
    navigate(`/trips?tab=${value}`);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">الرحلات</h1>
              <Button className="bg-primary text-white">إضافة رحلة جديدة</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Tabs defaultValue={currentTab} onValueChange={handleTabChange}>
                  <TabsList>
                    <TabsTrigger value="fixed">الرحلات الثابتة</TabsTrigger>
                    <TabsTrigger value="private">الرحلات الخاصة</TabsTrigger>
                    <TabsTrigger value="services">خدمات أخرى</TabsTrigger>
                  </TabsList>

                  <TabsContent value="fixed" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>الرحلات الثابتة</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FixedTripsTable />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="private" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>الرحلات الخاصة</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <PrivateTripsTable />
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="services" className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>الخدمات الإضافية</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ServicesTable />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="mt-6">
                  <OperationOrders />
                </div>
              </div>

              <div>
                <NotificationSystem />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Trips;
