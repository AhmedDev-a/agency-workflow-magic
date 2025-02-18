
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

const Calls = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto z-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">الاتصالات</h1>
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                تسجيل اتصال جديد
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>سجل الاتصالات</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>العميل</TableHead>
                      <TableHead>رقم الهاتف</TableHead>
                      <TableHead>نوع الاتصال</TableHead>
                      <TableHead>النتيجة</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2024/03/20</TableCell>
                      <TableCell>محمد أحمد</TableCell>
                      <TableCell>+966 50 123 4567</TableCell>
                      <TableCell>استفسار</TableCell>
                      <TableCell>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                          تم الرد
                        </span>
                      </TableCell>
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

export default Calls;
