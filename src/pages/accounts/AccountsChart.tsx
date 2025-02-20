import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  PlusCircle, 
  FileEdit, 
  Trash2,
  Search,
  FolderTree,
  Building2,
  Wallet,
  PieChart,
  ArrowUpCircle,
  ArrowDownCircle
} from "lucide-react";

const AccountsChart = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleAddAccount = () => {
    toast({
      title: "تم إضافة الحساب",
      description: "تم إضافة الحساب الجديد بنجاح"
    });
  };

  const getAccountTypeIcon = (type: string) => {
    switch (type) {
      case "assets":
        return <Building2 className="w-4 h-4 text-blue-600" />;
      case "liabilities":
        return <Wallet className="w-4 h-4 text-red-600" />;
      case "revenue":
        return <ArrowUpCircle className="w-4 h-4 text-green-600" />;
      case "expenses":
        return <ArrowDownCircle className="w-4 h-4 text-orange-600" />;
      default:
        return <PieChart className="w-4 h-4 text-gray-600" />;
    }
  };

  const getAccountTypeColor = (type: string) => {
    switch (type) {
      case "assets":
        return "bg-blue-50 text-blue-700";
      case "liabilities":
        return "bg-red-50 text-red-700";
      case "revenue":
        return "bg-green-50 text-green-700";
      case "expenses":
        return "bg-orange-50 text-orange-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">شجرة الحسابات</h1>
                <p className="text-gray-500 mt-1">إدارة وتنظيم الحسابات في النظام المحاسبي</p>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                    <PlusCircle className="ml-2 h-4 w-4" />
                    إضافة حساب جديد
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px]">
                  <SheetHeader>
                    <SheetTitle>إضافة حساب جديد</SheetTitle>
                  </SheetHeader>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="text-sm font-medium">رقم الحساب</label>
                      <Input type="text" placeholder="أدخل رقم الحساب" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">اسم الحساب</label>
                      <Input type="text" placeholder="أدخل اسم الحساب" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">نوع الحساب</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر نوع الحساب" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assets">أصول</SelectItem>
                          <SelectItem value="liabilities">خصوم</SelectItem>
                          <SelectItem value="revenue">إيرادات</SelectItem>
                          <SelectItem value="expenses">مصروفات</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">الحساب الرئيسي</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="اختر الحساب الرئيسي" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">لا يوجد</SelectItem>
                          <SelectItem value="1000">1000 - الأصول المتداولة</SelectItem>
                          <SelectItem value="2000">2000 - الخصوم المتداولة</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">الوصف</label>
                      <Input type="text" placeholder="أدخل وصف الحساب" />
                    </div>
                    <Button 
                      className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                      onClick={handleAddAccount}
                    >
                      حفظ الحساب
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">إجمالي الأصول</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">1,250,000 ر.س</div>
                  <div className="text-xs text-gray-500 mt-1">12 حساب</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">إجمالي الخصوم</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">450,000 ر.س</div>
                  <div className="text-xs text-gray-500 mt-1">8 حساب</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">إجمالي الإيرادات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">850,000 ر.س</div>
                  <div className="text-xs text-gray-500 mt-1">15 حساب</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">إجمالي المصروفات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">350,000 ر.س</div>
                  <div className="text-xs text-gray-500 mt-1">20 حساب</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="البحث في الحسابات..."
                  className="pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="نوع الحساب" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">الكل</SelectItem>
                  <SelectItem value="assets">أصول</SelectItem>
                  <SelectItem value="liabilities">خصوم</SelectItem>
                  <SelectItem value="revenue">إيرادات</SelectItem>
                  <SelectItem value="expenses">مصروفات</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderTree className="h-5 w-5" />
                  هيكل الحسابات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>رقم الحساب</TableHead>
                      <TableHead>اسم الحساب</TableHead>
                      <TableHead>النوع</TableHead>
                      <TableHead>الحساب الرئيسي</TableHead>
                      <TableHead>الرصيد</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1000</TableCell>
                      <TableCell className="font-medium">الأصول المتداولة</TableCell>
                      <TableCell>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full w-fit ${getAccountTypeColor('assets')}`}>
                          {getAccountTypeIcon('assets')}
                          <span>أصول</span>
                        </div>
                      </TableCell>
                      <TableCell>-</TableCell>
                      <TableCell className="font-medium">750,000 ر.س</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1001</TableCell>
                      <TableCell className="font-medium pr-8">النقدية في الخزينة</TableCell>
                      <TableCell>
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full w-fit ${getAccountTypeColor('assets')}`}>
                          {getAccountTypeIcon('assets')}
                          <span>أصول</span>
                        </div>
                      </TableCell>
                      <TableCell>1000</TableCell>
                      <TableCell className="font-medium">150,000 ر.س</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
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

export default AccountsChart;
