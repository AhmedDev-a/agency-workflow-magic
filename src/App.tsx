
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Pricing from "./pages/Pricing";
import Negotiations from "./pages/Negotiations";
import Trips from "./pages/Trips";
import Requirements from "./pages/Requirements";
import AccountsChart from "./pages/accounts/AccountsChart";
import Journal from "./pages/accounts/Journal";
import TrialBalance from "./pages/accounts/TrialBalance";
import CustomerAccounts from "./pages/accounts/CustomerAccounts";
import SupplierAccounts from "./pages/accounts/SupplierAccounts";
import BalanceSheet from "./pages/accounts/BalanceSheet";
import IncomeStatement from "./pages/accounts/IncomeStatement";
import Treasury from "./pages/accounts/Treasury";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/negotiations" element={<Negotiations />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/accounts/chart" element={<AccountsChart />} />
          <Route path="/accounts/journal" element={<Journal />} />
          <Route path="/accounts/trial-balance" element={<TrialBalance />} />
          <Route path="/accounts/customers" element={<CustomerAccounts />} />
          <Route path="/accounts/suppliers" element={<SupplierAccounts />} />
          <Route path="/accounts/balance-sheet" element={<BalanceSheet />} />
          <Route path="/accounts/income-statement" element={<IncomeStatement />} />
          <Route path="/accounts/treasury" element={<Treasury />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
