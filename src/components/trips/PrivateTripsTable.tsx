
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const PrivateTripsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>رقم الطلب</TableHead>
          <TableHead>العميل</TableHead>
          <TableHead>الوجهة</TableHead>
          <TableHead>تاريخ السفر</TableHead>
          <TableHead>عدد الأشخاص</TableHead>
          <TableHead>الميزانية</TableHead>
          <TableHead>الحالة</TableHead>
          <TableHead>الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#PR001</TableCell>
          <TableCell>أحمد محمد</TableCell>
          <TableCell>تركيا</TableCell>
          <TableCell>2024/06/15</TableCell>
          <TableCell>4</TableCell>
          <TableCell>20,000 ر.س</TableCell>
          <TableCell>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
              قيد التنفيذ
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
  );
};
