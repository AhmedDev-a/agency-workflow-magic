
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

const Treasury = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">الخزنة</h1>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                تسجيل معاملة جديدة
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-lg">الرصيد الحالي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600">150,000 ر.س</p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg">المدفوعات اليوم</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600">25,000 ر.س</p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg">المقبوضات اليوم</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600">35,000 ر.س</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>حركات الخزنة</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>رقم المعاملة</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>البيان</TableHead>
                      <TableHead>المبلغ</TableHead>
                      <TableHead>الرصيد</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024/03/20</TableCell>
                      <TableCell>#TR001</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          قبض
                        </span>
                      </TableCell>
                      <TableCell>دفعة أولى - رحلة عمرة</TableCell>
                      <TableCell>5,000 ر.س</TableCell>
                      <TableCell>150,000 ر.س</TableCell>
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Treasury;
