
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
import { MoreHorizontal, MessageCircle, FileText, Ban } from "lucide-react";

const Negotiations = () => {
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
                <FileText className="ml-2 h-4 w-4" />
                إضافة مفاوضة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <CardTitle className="text-base">المفاوضات الناجحة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">18</div>
                  <p className="text-xs text-gray-500 mt-1">75% معدل النجاح</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">متوسط مدة المفاوضة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.5</div>
                  <p className="text-xs text-gray-500 mt-1">أيام للإتمام</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>قائمة المفاوضات</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>رقم المفاوضة</TableHead>
                      <TableHead>العميل</TableHead>
                      <TableHead>الخدمة</TableHead>
                      <TableHead>القيمة المتوقعة</TableHead>
                      <TableHead>حالة المفاوضة</TableHead>
                      <TableHead>آخر تحديث</TableHead>
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
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                          قيد التفاوض
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">2024/03/15</div>
                        <div className="text-xs text-gray-500">4:30 م</div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center">
                              <MessageCircle className="ml-2 h-4 w-4" />
                              إضافة ملاحظة
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <FileText className="ml-2 h-4 w-4" />
                              تحديث الحالة
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center text-red-600">
                              <Ban className="ml-2 h-4 w-4" />
                              إنهاء المفاوضة
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>#NEG002</TableCell>
                      <TableCell>سارة خالد</TableCell>
                      <TableCell>باقة شهر عسل</TableCell>
                      <TableCell>25,000 ر.س</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          تم الاتفاق
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">2024/03/14</div>
                        <div className="text-xs text-gray-500">2:15 م</div>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center">
                              <MessageCircle className="ml-2 h-4 w-4" />
                              إضافة ملاحظة
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <FileText className="ml-2 h-4 w-4" />
                              تحديث الحالة
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center text-red-600">
                              <Ban className="ml-2 h-4 w-4" />
                              إنهاء المفاوضة
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Negotiations;
