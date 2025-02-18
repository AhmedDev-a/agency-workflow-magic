
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">إدارة الطلبات</h1>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">طلب جديد</Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-white">
                <TabsTrigger value="new">طلبات جديدة</TabsTrigger>
                <TabsTrigger value="in-progress">قيد التنفيذ</TabsTrigger>
                <TabsTrigger value="completed">مكتملة</TabsTrigger>
                <TabsTrigger value="cancelled">ملغية</TabsTrigger>
              </TabsList>

              <TabsContent value="new" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الطلبات الجديدة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>التاريخ</TableHead>
                          <TableHead>القيمة</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#1234</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>حجز فندق</TableCell>
                          <TableCell>2024/03/15</TableCell>
                          <TableCell>1,500 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                              جديد
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                  الإجراءات
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                                <DropdownMenuItem>تحديث الحالة</DropdownMenuItem>
                                <DropdownMenuItem>إضافة ملاحظة</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  إلغاء الطلب
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="in-progress" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الطلبات قيد التنفيذ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>التاريخ</TableHead>
                          <TableHead>القيمة</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#1235</TableCell>
                          <TableCell>محمد علي</TableCell>
                          <TableCell>رحلة خاصة</TableCell>
                          <TableCell>2024/03/14</TableCell>
                          <TableCell>5,000 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                              قيد التنفيذ
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                  الإجراءات
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>عرض التفاصيل</DropdownMenuItem>
                                <DropdownMenuItem>تحديث الحالة</DropdownMenuItem>
                                <DropdownMenuItem>إضافة ملاحظة</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  إلغاء الطلب
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الطلبات المكتملة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>التاريخ</TableHead>
                          <TableHead>القيمة</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#1236</TableCell>
                          <TableCell>خالد عمر</TableCell>
                          <TableCell>حجز تذاكر</TableCell>
                          <TableCell>2024/03/13</TableCell>
                          <TableCell>2,000 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              مكتمل
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

              <TabsContent value="cancelled" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>الطلبات الملغية</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>التاريخ</TableHead>
                          <TableHead>القيمة</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#1237</TableCell>
                          <TableCell>سارة أحمد</TableCell>
                          <TableCell>جولة سياحية</TableCell>
                          <TableCell>2024/03/12</TableCell>
                          <TableCell>800 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                              ملغي
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

export default Orders;
