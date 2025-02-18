
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
import { useSearchParams, useNavigate } from "react-router-dom";

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
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الرحلة</TableHead>
                          <TableHead>الوجهة</TableHead>
                          <TableHead>تاريخ المغادرة</TableHead>
                          <TableHead>المدة</TableHead>
                          <TableHead>السعر</TableHead>
                          <TableHead>الأماكن المتاحة</TableHead>
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
                          <TableCell>15</TableCell>
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

              <TabsContent value="private" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الرحلات الخاصة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الوجهة</TableHead>
                          <TableHead>تاريخ السفر</TableHead>
                          <TableHead>عدد الأشخاص</TableHead>
                          <TableHead>الميزانية</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#PR001</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>تركيا</TableCell>
                          <TableCell>2024/06/15</TableCell>
                          <TableCell>4</TableCell>
                          <TableCell>20,000 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                              قيد التنفيذ
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              تحديث الحالة
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الخدمات الإضافية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>نوع الخدمة</TableHead>
                          <TableHead>الوصف</TableHead>
                          <TableHead>السعر الأساسي</TableHead>
                          <TableHead>المدة</TableHead>
                          <TableHead>التوفر</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>حجز فندقي</TableCell>
                          <TableCell>إقامة فندقية فاخرة مع إفطار</TableCell>
                          <TableCell>500 ر.س / ليلة</TableCell>
                          <TableCell>حسب الطلب</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              متوفر
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              تعديل
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>نقل VIP</TableCell>
                          <TableCell>خدمة نقل خاصة مع سائق</TableCell>
                          <TableCell>300 ر.س / يوم</TableCell>
                          <TableCell>يومي</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              متوفر
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              تعديل
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>جولة سياحية</TableCell>
                          <TableCell>جولة مع مرشد سياحي</TableCell>
                          <TableCell>400 ر.س / جولة</TableCell>
                          <TableCell>6 ساعات</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              متوفر
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              تعديل
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
