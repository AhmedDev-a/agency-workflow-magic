
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Clock,
  CheckCircle2,
  XCircle,
  PauseCircle,
  AlertCircle,
  Plus,
  FileEdit,
  Send,
} from "lucide-react";

interface OperationTask {
  id: string;
  name: string;
  description: string;
  status: "pending" | "in-progress" | "completed" | "delayed";
  type: "mandatory" | "optional";
  assignedTo: string;
  notes?: string;
}

export const OperationOrders = () => {
  const { toast } = useToast();
  const [tasks, setTasks] = useState<OperationTask[]>([
    {
      id: "1",
      name: "إصدار التأشيرة",
      description: "إصدار التأشيرات للعميل قبل الرحلة",
      status: "pending",
      type: "mandatory",
      assignedTo: "قسم التأشيرات"
    },
    {
      id: "2",
      name: "حجز تذاكر الطيران",
      description: "تأكيد حجوزات الطيران للرحلة",
      status: "in-progress",
      type: "mandatory",
      assignedTo: "قسم الحجوزات"
    }
  ]);

  const getStatusIcon = (status: OperationTask["status"]) => {
    switch (status) {
      case "pending":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "delayed":
        return <PauseCircle className="h-5 w-5 text-orange-500" />;
    }
  };

  const getStatusText = (status: OperationTask["status"]) => {
    switch (status) {
      case "pending":
        return "غير مكتمل";
      case "in-progress":
        return "قيد التنفيذ";
      case "completed":
        return "مكتمل";
      case "delayed":
        return "مؤجل";
    }
  };

  const handleStatusChange = (taskId: string, newStatus: OperationTask["status"]) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: newStatus } : task
    ));

    // Send notification based on status change
    if (newStatus === "completed") {
      toast({
        title: "تم تحديث حالة المهمة",
        description: "تم إكمال المهمة بنجاح"
      });
    } else if (newStatus === "delayed") {
      toast({
        title: "تم تأجيل المهمة",
        description: "تم إرسال إشعار للمدير للمتابعة",
        variant: "destructive"
      });
    }
  };

  const handleAddNote = (taskId: string, note: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, notes: note } : task
    ));
    
    toast({
      title: "تم إضافة ملاحظة",
      description: "تم حفظ الملاحظة بنجاح"
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>أوامر التشغيل</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="ml-2 h-4 w-4" />
              إضافة مهمة جديدة
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>إضافة مهمة جديدة</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">اسم المهمة</label>
                <Input placeholder="أدخل اسم المهمة" />
              </div>
              <div>
                <label className="text-sm font-medium">الوصف</label>
                <Textarea placeholder="أدخل وصف المهمة" />
              </div>
              <div>
                <label className="text-sm font-medium">نوع المهمة</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع المهمة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mandatory">إلزامي</SelectItem>
                    <SelectItem value="optional">اختياري</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">تعيين إلى</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر القسم المسؤول" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visas">قسم التأشيرات</SelectItem>
                    <SelectItem value="bookings">قسم الحجوزات</SelectItem>
                    <SelectItem value="transport">قسم النقل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">حفظ المهمة</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>المهمة</TableHead>
              <TableHead>النوع</TableHead>
              <TableHead>القسم المسؤول</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{task.name}</div>
                    <div className="text-sm text-gray-500">{task.description}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    task.type === "mandatory" 
                      ? "bg-red-100 text-red-700" 
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {task.type === "mandatory" ? "إلزامي" : "اختياري"}
                  </span>
                </TableCell>
                <TableCell>{task.assignedTo}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(task.status)}
                    <span>{getStatusText(task.status)}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <FileEdit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>تحديث حالة المهمة</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium">الحالة</label>
                            <Select onValueChange={(value: OperationTask["status"]) => 
                              handleStatusChange(task.id, value)
                            }>
                              <SelectTrigger>
                                <SelectValue placeholder="اختر الحالة" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">غير مكتمل</SelectItem>
                                <SelectItem value="in-progress">قيد التنفيذ</SelectItem>
                                <SelectItem value="completed">مكتمل</SelectItem>
                                <SelectItem value="delayed">مؤجل</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium">ملاحظات</label>
                            <Textarea 
                              placeholder="أضف ملاحظات حول المهمة"
                              value={task.notes}
                              onChange={(e) => handleAddNote(task.id, e.target.value)}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
