
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

const CustomerAccounts = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">حسابات العملاء</h1>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                إضافة حساب جديد
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>كشف حساب العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>رقم العميل</TableHead>
                      <TableHead>اسم العميل</TableHead>
                      <TableHead>مدين</TableHead>
                      <TableHead>دائن</TableHead>
                      <TableHead>الرصيد</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>C001</TableCell>
                      <TableCell>محمد أحمد</TableCell>
                      <TableCell>10,000 ر.س</TableCell>
                      <TableCell>5,000 ر.س</TableCell>
                      <TableCell>5,000 ر.س</TableCell>
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

export default CustomerAccounts;
