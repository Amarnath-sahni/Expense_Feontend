import { FaWallet, FaChartLine, FaUserCircle, FaReceipt } from "react-icons/fa";
import { MdInsights } from "react-icons/md";

 function ExpenseIcon() {
  return (
    <div className="flex gap-4 text-4xl text-green-600">
      <FaWallet title="Wallet" />
      <FaChartLine title="Analytics" />
      <MdInsights title="Insights" />
      <FaUserCircle title="User" />
      <FaReceipt title="Receipt" />
    </div>
  );
}
export default ExpenseIcon;