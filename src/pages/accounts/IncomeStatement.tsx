
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

const IncomeStatement = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">قائمة الدخل</h1>
              <div className="space-x-2 rtl:space-x-reverse">
                <Button variant="outline">طباعة</Button>
                <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                  تحديث البيانات
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>قائمة الدخل</CardTitle>
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
                      <TableCell className="font-bold">الإيرادات</TableCell>
                      <TableCell>250,000 ر.س</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">المصروفات</TableCell>
                      <TableCell>150,000 ر.س</TableCell>
                    </TableRow>
                    <TableRow className="bg-green-50">
                      <TableCell className="font-bold">صافي الربح</TableCell>
                      <TableCell className="font-bold text-green-600">100,000 ر.س</TableCell>
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

export default IncomeStatement;
