
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

const Negotiations = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">المفاوضات</h1>
              <Button className="bg-primary text-white">إضافة مفاوضة جديدة</Button>
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
                      <TableCell>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                          قيد التفاوض
                        </span>
                      </TableCell>
                      <TableCell>2024/03/15</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          متابعة المفاوضة
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

export default Negotiations;
