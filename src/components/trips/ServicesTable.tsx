
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

export const ServicesTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>نوع الخدمة</TableHead>
          <TableHead>الوصف</TableHead>
          <TableHead>السعر الأساسي</TableHead>
          <TableHead>المدة</TableHead>
          <TableHead>التوفر</TableHead>
          <TableHead>الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>حجز فندقي</TableCell>
          <TableCell>إقامة فندقية فاخرة مع إفطار</TableCell>
          <TableCell>500 ر.س / ليلة</TableCell>
          <TableCell>حسب الطلب</TableCell>
          <TableCell>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              متوفر
            </span>
          </TableCell>
          <TableCell>
            <Button variant="outline" size="sm">
              تعديل
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
