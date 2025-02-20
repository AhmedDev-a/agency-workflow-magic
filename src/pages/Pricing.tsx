import React, { useState } from "react";
import TransitForm from "@/Forms/TransitForm"; // Importing the TransitForm component

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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  FileText,
  Send,
  FileEdit,
  CheckCircle2,
  Clock,
  Ban,
  AlertCircle
} from "lucide-react";

const Pricing = () => {
  const [showForm, setShowForm] = useState(false); // Adding state to manage form visibility

  const handleButtonClick = () => {
    setShowForm(true); // Setting showForm to true when the button is clicked
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">التسعير</h1>
                <p className="text-gray-500 mt-1">إدارة وتحديث أسعار الخدمات والعروض</p>
              </div>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white" onClick={handleButtonClick}> {/* Adding onClick handler */}
                <FileText className="ml-2 h-4 w-4" />
                إنشاء عرض سعر جديد
              </Button>
            </div>

            {showForm && <TransitForm />} {/* Conditionally rendering the TransitForm */}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">عروض الأسعار</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">36</div>
                  <p className="text-xs text-gray-500 mt-1">هذا الشهر</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">قيد المراجعة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600">12</div>
                  <p className="text-xs text-gray-500 mt-1">بانتظار الموافقة</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">تمت الموافقة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">20</div>
                  <p className="text-xs text-gray-500 mt-1">جاهزة للتفاوض</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">معدل القبول</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">80%</div>
                  <p className="text-xs text-gray-500 mt-1">نسبة الموافقة على الأسعار</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="bg-white">
                <TabsTrigger value="all">جميع العروض</TabsTrigger>
                <TabsTrigger value="pending">قيد المراجعة</TabsTrigger>
                <TabsTrigger value="approved">تمت الموافقة</TabsTrigger>
                <TabsTrigger value="rejected">مرفوضة</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>عروض الأسعار</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم العرض</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمات</TableHead>
                          <TableHead>السعر الإجمالي</TableHead>
                          <TableHead>تاريخ العرض</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#QT001</TableCell>
                          <TableCell>محمد علي</TableCell>
                          <TableCell>رحلة عمرة + فندق</TableCell>
                          <TableCell>15,000 ر.س</TableCell>
                          <TableCell>2024/03/20</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <Clock className="h-3 w-3 ml-1" />
                              في انتظار الموافقة
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
                                  تعديل
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <CheckCircle2 className="ml-2 h-4 w-4" />
                                  موافقة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Send className="ml-2 h-4 w-4" />
                                  إرسال للعميل
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>#QT002</TableCell>
                          <TableCell>فاطمة أحمد</TableCell>
                          <TableCell>باقة شهر عسل</TableCell>
                          <TableCell>25,000 ر.س</TableCell>
                          <TableCell>2024/03/19</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <CheckCircle2 className="h-3 w-3 ml-1" />
                              تمت الموافقة
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
                                  إرسال للعميل
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Ban className="ml-2 h-4 w-4" />
                                  إلغاء
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>#QT003</TableCell>
                          <TableCell>عبدالله محمد</TableCell>
                          <TableCell>رحلة عائلية</TableCell>
                          <TableCell>18,000 ر.س</TableCell>
                          <TableCell>2024/03/18</TableCell>
                          <TableCell>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <AlertCircle className="h-3 w-3 ml-1" />
                              مرفوض
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
                                  تعديل وإعادة التقديم
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

              <TabsContent value="pending">
                <Card>
                  <CardHeader>
                    <CardTitle>عروض في انتظار الموافقة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم العرض</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمات</TableHead>
                          <TableHead>السعر الإجمالي</TableHead>
                          <TableHead>تاريخ العرض</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#QT001</TableCell>
                          <TableCell>محمد علي</TableCell>
                          <TableCell>رحلة عمرة + فندق</TableCell>
                          <TableCell>15,000 ر.س</TableCell>
                          <TableCell>2024/03/20</TableCell>
                          <TableCell>
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <Clock className="h-3 w-3 ml-1" />
                              في انتظار الموافقة
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
                                  تعديل
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <CheckCircle2 className="ml-2 h-4 w-4" />
                                  موافقة
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Send className="ml-2 h-4 w-4" />
                                  إرسال للعميل
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

              <TabsContent value="approved">
                <Card>
                  <CardHeader>
                    <CardTitle>عروض تم الموافقة عليها</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم العرض</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمات</TableHead>
                          <TableHead>السعر الإجمالي</TableHead>
                          <TableHead>تاريخ العرض</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#QT002</TableCell>
                          <TableCell>فاطمة أحمد</TableCell>
                          <TableCell>باقة شهر عسل</TableCell>
                          <TableCell>25,000 ر.س</TableCell>
                          <TableCell>2024/03/19</TableCell>
                          <TableCell>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <CheckCircle2 className="h-3 w-3 ml-1" />
                              تمت الموافقة
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
                                  إرسال للعميل
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center">
                                  <Ban className="ml-2 h-4 w-4" />
                                  إلغاء
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

              <TabsContent value="rejected">
                <Card>
                  <CardHeader>
                    <CardTitle>عروض مرفوضة</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>رقم العرض</TableHead>
                          <TableHead>العميل</TableHead>
                          <TableHead>الخدمات</TableHead>
                          <TableHead>السعر الإجمالي</TableHead>
                          <TableHead>تاريخ العرض</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>#QT003</TableCell>
                          <TableCell>عبدالله محمد</TableCell>
                          <TableCell>رحلة عائلية</TableCell>
                          <TableCell>18,000 ر.س</TableCell>
                          <TableCell>2024/03/18</TableCell>
                          <TableCell>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm flex items-center w-fit">
                              <AlertCircle className="h-3 w-3 ml-1" />
                              مرفوض
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
                                  تعديل وإعادة التقديم
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

export default Pricing;
