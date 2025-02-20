
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Bell,
  Calendar,
  CheckCircle2,
  Clock,
  Users,
  AlertTriangle,
} from "lucide-react";

export const NotificationSystem = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          الإشعارات والتنبيهات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
            <Clock className="h-5 w-5 text-yellow-600" />
            <div>
              <div className="font-medium text-yellow-900">تذكير قبل الرحلة</div>
              <div className="text-sm text-yellow-600">
                رحلة العمرة تبدأ غداً - تأكد من جاهزية المناديب
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium text-green-900">تم تنفيذ المهمة</div>
              <div className="text-sm text-green-600">
                تم إصدار التأشيرات للمجموعة بنجاح
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Users className="h-5 w-5 text-blue-600" />
            <div>
              <div className="font-medium text-blue-900">مجموعة واتساب</div>
              <div className="text-sm text-blue-600">
                تم إنشاء مجموعة واتساب للرحلة وإضافة جميع المشاركين
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <div>
              <div className="font-medium text-red-900">تأخير في التنفيذ</div>
              <div className="text-sm text-red-600">
                تأخير في تأكيد حجوزات الفندق - يرجى المتابعة
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
