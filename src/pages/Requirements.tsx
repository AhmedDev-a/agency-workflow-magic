
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

const Requirements = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">متطلبات العملاء</h1>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                إضافة متطلبات جديدة
              </Button>
            </div>

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
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                          قيد المراجعة
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Requirements;
