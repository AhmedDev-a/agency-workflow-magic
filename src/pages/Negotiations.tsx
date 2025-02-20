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
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  MessageCircle, 
  FileText, 
  Ban,
  Handshake,
  FileCheck,
  FileEdit,
  Send
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Negotiations = () => {
  const { toast } = useToast();

  const handleSendToOrders = () => {
    toast({
      title: "تم إرسال الطلب إلى الطلبات",
      description: "سيتم معالجة الطلب في قسم الطلبات"
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">المفاوضات</h1>
                <p className="text-gray-500 mt-1">إدارة ومتابعة المفاوضات مع العملاء</p>
              </div>
              <Button className="bg-primary text-white">
                <Handshake className="ml-2 h-4 w-4" />
                مفاوضة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">إجمالي المفاوضات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-gray-500 mt-1">هذا الشهر</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">المفاوضات النشطة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">10</div>
                  <p className="text-xs text-gray-500 mt-1">قيد التفاوض</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">تم الاتفاق</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <p className="text-xs text-gray-500 mt-1">جاهزة للعقد</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">معدل النجاح</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">75%</div>
                  <p className="text-xs text-gray-500 mt-1">نسبة إتمام المفاوضات</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="active">
              <TabsList className="bg-white">
                <TabsTrigger value="active">مفاوضات نشطة</TabsTrigger>
                <TabsTrigger value="pending">بانتظار الرد</TabsTrigger>
                <TabsTrigger value="agreed">تم الاتفاق</TabsTrigger>
                <TabsTrigger value="contracts">العقود</TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                <Card>
                  <CardHeader>
                    <CardTitle>المفاوضات النشطة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم المفاوضة</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>السعر الحالي</TableHead>
                          <TableHead>آخر تحديث</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#NEG001</TableCell>
                          <TableCell>محمد أحمد</TableCell>
                          <TableCell>رحلة عمرة</TableCell>
                          <TableCell>15,000 ر.س</TableCell>
                          <TableCell>
                            <div className="text-sm">2024/03/15</div>
                            <div className="text-xs text-gray-500">4:30 م</div>
                          </TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
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
                                <DropdownMenuItem
                                  className="flex items-center"
                                  onClick={handleSendToOrders}
                                >
                                  <Send className="ml-2 h-4 w-4" />
                                  إرسال إلى الطلبات
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <FileEdit className="ml-2 h-4 w-4" />
                                  تعديل العرض
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

              <TabsContent value="agreed">
                <Card>
                  <CardHeader>
                    <CardTitle>المفاوضات المتفق عليها</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم المفاوضة</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>السعر النهائي</TableHead>
                          <TableHead>تاريخ الاتفاق</TableHead>
                          <TableHead>حالة العقد</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#NEG002</TableCell>
                          <TableCell>سارة خالد</TableCell>
                          <TableCell>باقة شهر عسل</TableCell>
                          <TableCell>25,000 ر.س</TableCell>
                          <TableCell>2024/03/14</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                              بانتظار العقد
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
                                  <FileText className="ml-2 h-4 w-4" />
                                  إنشاء العقد
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <FileCheck className="ml-2 h-4 w-4" />
                                  إرسال للمراجعة
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

              <TabsContent value="contracts">
                <Card>
                  <CardHeader>
                    <CardTitle>العقود</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم العقد</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمة</TableHead>
                          <TableHead>قيمة العقد</TableHead>
                          <TableHead>تاريخ الإنشاء</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#CONT001</TableCell>
                          <TableCell>فهد عبدالله</TableCell>
                          <TableCell>رحلة عائلية</TableCell>
                          <TableCell>20,000 ر.س</TableCell>
                          <TableCell>2024/03/13</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              موقع
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
                                  <FileText className="ml-2 h-4 w-4" />
                                  عرض العقد
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Ban className="ml-2 h-4 w-4" />
                                  إلغاء العقد
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
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Negotiations;
