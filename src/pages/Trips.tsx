
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Trips = () => {
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

            <Tabs defaultValue="fixed">
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
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الرحلة</TableHead>
                          <TableHead>الوجهة</TableHead>
                          <TableHead>تاريخ المغادرة</TableHead>
                          <TableHead>المدة</TableHead>
                          <TableHead>السعر</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#TR001</TableCell>
                          <TableCell>مكة المكرمة</TableCell>
                          <TableCell>2024/04/01</TableCell>
                          <TableCell>7 أيام</TableCell>
                          <TableCell>5,000 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              متاحة
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              عرض التفاصيل
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Trips;
