import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  FileCheck, 
  FileEdit, 
  ClipboardList, 
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react";

const Requirements = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">متطلبات العملاء</h1>
                <p className="text-gray-500 mt-1">إدارة ومتابعة متطلبات وطلبات العملاء</p>
              </div>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                <ClipboardList className="ml-2 h-4 w-4" />
                إضافة متطلبات جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">إجمالي المتطلبات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-gray-500 mt-1">في جميع المراحل</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">قيد المعالجة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <p className="text-xs text-gray-500 mt-1">جاري العمل عليها</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">مكتملة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">25</div>
                  <p className="text-xs text-gray-500 mt-1">تم إنجازها</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">معلقة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">5</div>
                  <p className="text-xs text-gray-500 mt-1">تحتاج مراجعة</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4">
              <Input
                className="max-w-sm"
                placeholder="البحث في المتطلبات..."
                type="search"
              />
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-white">
                <TabsTrigger value="all">جميع المتطلبات</TabsTrigger>
                <TabsTrigger value="pending">قيد المعالجة</TabsTrigger>
                <TabsTrigger value="completed">مكتملة</TabsTrigger>
                <TabsTrigger value="on-hold">معلقة</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>قائمة المتطلبات</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>نوع الخدمة</TableHead>
                          <TableHead>التفاصيل</TableHead>
                          <TableHead>تاريخ الطلب</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#REQ001</TableCell>
                          <TableCell>محمد أحمد</TableCell>
                          <TableCell>رحلة عمرة</TableCell>
                          <TableCell>رحلة عمرة لشخصين مع إقامة</TableCell>
                          <TableCell>2024/03/20</TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <Clock className="h-3 w-3 ml-1" />
                              قيد المعالجة
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
                                  تحديث الحالة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <FileEdit className="ml-2 h-4 w-4" />
                                  تعديل التفاصيل
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>#REQ002</TableCell>
                          <TableCell>فاطمة محمد</TableCell>
                          <TableCell>حجز فندق</TableCell>
                          <TableCell>حجز غرفة مزدوجة لمدة 3 ليالي</TableCell>
                          <TableCell>2024/03/19</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <CheckCircle2 className="h-3 w-3 ml-1" />
                              مكتمل
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
                                  عرض التفاصيل
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>#REQ003</TableCell>
                          <TableCell>عبدالله علي</TableCell>
                          <TableCell>تذاكر طيران</TableCell>
                          <TableCell>حجز تذاكر ذهاب وعودة</TableCell>
                          <TableCell>2024/03/18</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <AlertCircle className="h-3 w-3 ml-1" />
                              معلق
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
                                  متابعة الحالة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <XCircle className="ml-2 h-4 w-4" />
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

              <TabsContent value="pending" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>قيد المعالجة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>نوع الخدمة</TableHead>
                          <TableHead>التفاصيل</TableHead>
                          <TableHead>تاريخ الطلب</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#REQ004</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>حجز فندق</TableCell>
                          <TableCell>حجز غرفة مزدوجة لمدة 3 ليالي</TableCell>
                          <TableCell>2024/03/21</TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <Clock className="h-3 w-3 ml-1" />
                              قيد المعالجة
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
                                  تحديث الحالة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <FileEdit className="ml-2 h-4 w-4" />
                                  تعديل التفاصيل
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
                    <CardTitle>مكتملة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>نوع الخدمة</TableHead>
                          <TableHead>التفاصيل</TableHead>
                          <TableHead>تاريخ الطلب</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#REQ005</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>حجز فندق</TableCell>
                          <TableCell>حجز غرفة مزدوجة لمدة 3 ليالي</TableCell>
                          <TableCell>2024/03/21</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <CheckCircle2 className="h-3 w-3 ml-1" />
                              مكتمل
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
                                  عرض التفاصيل
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

              <TabsContent value="on-hold" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>معلقة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم الطلب</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>نوع الخدمة</TableHead>
                          <TableHead>التفاصيل</TableHead>
                          <TableHead>تاريخ الطلب</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#REQ006</TableCell>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>حجز فندق</TableCell>
                          <TableCell>حجز غرفة مزدوجة لمدة 3 ليالي</TableCell>
                          <TableCell>2024/03/21</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <AlertCircle className="h-3 w-3 ml-1" />
                              معلق
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
                                  متابعة الحالة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <XCircle className="ml-2 h-4 w-4" />
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
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Requirements;
