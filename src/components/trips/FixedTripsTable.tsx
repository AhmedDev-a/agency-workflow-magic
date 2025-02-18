
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

export const FixedTripsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>رقم الرحلة</TableHead>
          <TableHead>الوجهة</TableHead>
          <TableHead>تاريخ المغادرة</TableHead>
          <TableHead>المدة</TableHead>
          <TableHead>السعر</TableHead>
          <TableHead>الأماكن المتاحة</TableHead>
          <TableHead>الحالة</TableHead>
          <TableHead>الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#TR001</TableCell>
          <TableCell>مكة المكرمة</TableCell>
          <TableCell>2024/04/01</TableCell>
          <TableCell>7 أيام</TableCell>
          <TableCell>5,000 ر.س</TableCell>
          <TableCell>15</TableCell>
          <TableCell>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              متاحة
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
  );
};
