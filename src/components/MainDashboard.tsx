
import React from "react";
import { Card } from "@/components/ui/card";
import {
  TrendingUpIcon,
  TrendingDownIcon,
  DollarSignIcon,
  ActivityIcon,
} from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
}: {
  title: string;
  value: string;
  icon: any;
  trend?: "up" | "down";
}) => (
  <Card className="p-6 animate-fade-up">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-2xl font-semibold mt-1">{value}</h3>
      </div>
      <div className="bg-gray-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-gray-700" />
      </div>
    </div>
    {trend && (
      <div className="mt-4 flex items-center">
        {trend === "up" ? (
          <TrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <TrendingDownIcon className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={`text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}>
          {trend === "up" ? "+8.5%" : "-4.2%"}
        </span>
        <span className="text-sm text-gray-500 ml-1">من الشهر الماضي</span>
      </div>
    )}
  </Card>
);

const RecentTransactions = () => (
  <Card className="p-6 mt-6 animate-fade-up">
    <h2 className="text-xl font-semibold mb-4">المعاملات الأخيرة</h2>
    <div className="space-y-4">
      {[
        { name: "حجز فندق", amount: "1,200", type: "expense" },
        { name: "تذكرة طيران", amount: "2,500", type: "expense" },
        { name: "دفعة عميل", amount: "5,000", type: "income" },
        { name: "خدمة VIP", amount: "3,000", type: "income" },
      ].map((transaction, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-full ${
                transaction.type === "income" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <DollarSignIcon
                className={`w-4 h-4 ${
                  transaction.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              />
            </div>
            <span className="font-medium">{transaction.name}</span>
          </div>
          <span
            className={`font-semibold ${
              transaction.type === "income" ? "text-green-600" : "text-red-600"
            }`}
          >
            {transaction.type === "income" ? "+" : "-"} {transaction.amount} ر.س
          </span>
        </div>
      ))}
    </div>
  </Card>
);

const MainDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">لوحة التحكم</h1>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            تقرير جديد
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي الإيرادات"
          value="125,000 ر.س"
          icon={DollarSignIcon}
          trend="up"
        />
        <StatCard
          title="إجمالي المصروفات"
          value="45,000 ر.س"
          icon={ActivityIcon}
          trend="down"
        />
        <StatCard title="عدد الحجوزات" value="234" icon={ActivityIcon} trend="up" />
        <StatCard title="العملاء النشطين" value="56" icon={ActivityIcon} />
      </div>

      <RecentTransactions />
    </div>
  );
};

export default MainDashboard;
