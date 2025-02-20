
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  FileCheck, 
  FileEdit, 
  Paperclip,
  Upload,
  Eye,
  PlusCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Customers = () => {
  const { toast } = useToast();

  const handleFileUpload = () => {
    toast({
      title: "تم رفع الملف",
      description: "تم إضافة المرفق بنجاح"
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">العملاء</h1>
              <Button className="bg-primary text-white">
                <PlusCircle className="ml-2 h-4 w-4" />
                إضافة عميل جديد
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>قائمة العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <Input placeholder="بحث عن عميل..." className="max-w-sm" />
                  <Button variant="outline">بحث</Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>اسم العميل</TableHead>
                      <TableHead>نوع العميل</TableHead>
                      <TableHead>رقم الهاتف</TableHead>
                      <TableHead>البريد الإلكتروني</TableHead>
                      <TableHead>عدد المرفقات</TableHead>
                      <TableHead>عدد الطلبات</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>أحمد محمد</TableCell>
                      <TableCell>خاص</TableCell>
                      <TableCell>+966 50 123 4567</TableCell>
                      <TableCell>ahmed@example.com</TableCell>
                      <TableCell>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          3 مرفقات
                        </span>
                      </TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              الإجراءات
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center" onClick={handleFileUpload}>
                              <Upload className="ml-2 h-4 w-4" />
                              رفع مرفق جديد
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <Eye className="ml-2 h-4 w-4" />
                              عرض المرفقات
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <FileEdit className="ml-2 h-4 w-4" />
                              تعديل البيانات
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <FileCheck className="ml-2 h-4 w-4" />
                              عرض الطلبات
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>سارة أحمد</TableCell>
                      <TableCell>شركة</TableCell>
                      <TableCell>+966 55 987 6543</TableCell>
                      <TableCell>sara@company.com</TableCell>
                      <TableCell>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          5 مرفقات
                        </span>
                      </TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm">
                              الإجراءات
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="flex items-center" onClick={handleFileUpload}>
                              <Upload className="ml-2 h-4 w-4" />
                              رفع مرفق جديد
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <Eye className="ml-2 h-4 w-4" />
                              عرض المرفقات
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <FileEdit className="ml-2 h-4 w-4" />
                              تعديل البيانات
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                              <FileCheck className="ml-2 h-4 w-4" />
                              عرض الطلبات
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

export default Customers;
