
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

const BalanceSheet = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">الميزانية العمومية</h1>
              <div className="space-x-2 rtl:space-x-reverse">
                <Button variant="outline">طباعة</Button>
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                  تحديث البيانات
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>الأصول</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>البند</TableHead>
                        <TableHead>القيمة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>النقد في الخزينة</TableCell>
                        <TableCell>150,000 ر.س</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>حسابات العملاء</TableCell>
                        <TableCell>250,000 ر.س</TableCell>
                      </TableRow>
                      <TableRow className="font-bold">
                        <TableCell>إجمالي الأصول</TableCell>
                        <TableCell>400,000 ر.س</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>الخصوم وحقوق الملكية</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>البند</TableHead>
                        <TableHead>القيمة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>حسابات الموردين</TableCell>
                        <TableCell>100,000 ر.س</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>رأس المال</TableCell>
                        <TableCell>300,000 ر.س</TableCell>
                      </TableRow>
                      <TableRow className="font-bold">
                        <TableCell>إجمالي الخصوم وحقوق الملكية</TableCell>
                        <TableCell>400,000 ر.س</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BalanceSheet;
