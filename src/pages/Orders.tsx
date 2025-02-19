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
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  FileCheck, 
  FileEdit, 
  Send, 
  Clock,
  Ban,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">إدارة الطلبات</h1>
                <p className="text-gray-500 mt-1">متابعة وإدارة طلبات العملاء عبر مراحل ال��مل المختلفة</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">
                  <FileCheck className="ml-2 h-4 w-4" />
                  تصدير التقرير
                </Button>
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                  <FileEdit className="ml-2 h-4 w-4" />
                  طلب جديد
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">الطلبات الجديدة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-gray-500 mt-1">بانتظار التسعير</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">قيد التفاوض</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">8</div>
                  <p className="text-xs text-gray-500 mt-1">في مرحلة المناقشة</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">موافقة الحسابات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <p className="text-xs text-gray-500 mt-1">بانتظار المراجعة</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">قيد التنفيذ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">15</div>
                  <p className="text-xs text-gray-500 mt-1">جاري العمل عليها</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 items-center">
              <Input
                className="max-w-sm"
                placeholder="البحث في الطلبات..."
                type="search"
              />
              <Button variant="outline">
                تصفية النتائج
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-white">
                <TabsTrigger value="new">طلبات جديدة</TabsTrigger>
                <TabsTrigger value="pricing">التسعير</TabsTrigger>
                <TabsTrigger value="negotiation">التفاوض</TabsTrigger>
                <TabsTrigger value="accounts">موافقة الحسابات</TabsTrigger>
                <TabsTrigger value="execution">قيد التنفيذ</TabsTrigger>
                <TabsTrigger value="completed">مكتملة</TabsTrigger>
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
                          <TableHead>تاريخ الطلب</TableHead>
                          <TableHead>الأولوية</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#ORD001</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>رحلة عمرة</TableCell>
                          <TableCell>2024/03/15</TableCell>
                          <TableCell>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                              عاجل
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <Clock className="h-3 w-3 ml-1" />
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
                                <DropdownMenuItem className="flex items-center">
                                  <FileEdit className="ml-2 h-4 w-4" />
                                  إرسال للتسعير
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Clock className="ml-2 h-4 w-4" />
                                  تأجيل المعالجة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center text-red-600">
                                  <Ban className="ml-2 h-4 w-4" />
                                  رفض الطلب
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

              <TabsContent value="pricing" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>طلبات قيد التسعير</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>السعر المقترح</TableHead>
                          <TableHead>المسؤول</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#ORD002</TableCell>
                          <TableCell>محمد علي</TableCell>
                          <TableCell>باقة شهر عسل</TableCell>
                          <TableCell>15,000 ر.س</TableCell>
                          <TableCell>خالد عمر</TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <AlertCircle className="h-3 w-3 ml-1" />
                              قيد التسعير
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
                                <DropdownMenuItem className="flex items-center">
                                  <Send className="ml-2 h-4 w-4" />
                                  إرسال للتفاوض
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <FileEdit className="ml-2 h-4 w-4" />
                                  تعديل التسعير
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

              <TabsContent value="execution" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>طلبات قيد التنف��ذ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>تاريخ البدء</TableHead>
                          <TableHead>تاريخ التسليم</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#ORD005</TableCell>
                          <TableCell>محمد علي</TableCell>
                          <TableCell>رحلة عائلية</TableCell>
                          <TableCell>2024/03/14</TableCell>
                          <TableCell>2024/03/25</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <CheckCircle2 className="h-3 w-3 ml-1" />
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
                                <DropdownMenuItem className="flex items-center">
                                  <FileEdit className="ml-2 h-4 w-4" />
                                  تحديث الحالة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Send className="ml-2 h-4 w-4" />
                                  إرسال تقرير
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center text-red-600">
                                  <Ban className="ml-2 h-4 w-4" />
                                  تعليق التنفيذ
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

              <TabsContent value="negotiation" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>طلبات قيد التفاوض</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>السعر النهائي</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#ORD003</TableCell>
                          <TableCell>فهد عبدالله</TableCell>
                          <TableCell>رحلة عائلية</TableCell>
                          <TableCell>20,000 ر.س</TableCell>
                          <TableCell>
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                              قيد التفاوض
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
                                <DropdownMenuItem className="flex items-center">
                                  <FileCheck className="ml-2 h-4 w-4" />
                                  إرسال للموافقة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <UserCheck className="ml-2 h-4 w-4" />
                                  تحديث حالة التفاوض
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

              <TabsContent value="accounts" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>طلبات قيد الموافقة الحسابات</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#ORD004</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>رحلة عائلية</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              موافقة
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

              <TabsContent value="completed" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>طلبات مكتملة</CardTitle>
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
                          <TableCell>#ORD006</TableCell>
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
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Orders;
