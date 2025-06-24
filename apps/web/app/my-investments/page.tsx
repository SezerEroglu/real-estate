import { allItems } from '@/app/consts/Items/index';
import MyInvestmentsPage, {
  MyInvestmentsPageProps,
} from '@/app/my-investments/my-investments';

export default function Page() {
  const investments: MyInvestmentsPageProps = {
    investments: Object.values(allItems).map((item) => {
      const ownershipPercent = parseFloat(
        (Math.random() * 9.5 + 0.5).toFixed(2),
      ); // 0.5% - 10%
      const investedAmount = Math.floor(Math.random() * 45000 + 5000); // $5,000 - $50,000
      const transactionId = `INV-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      const statusOptions = ['Confirmed', 'Pending', 'Denied'] as const;
      const status =
        statusOptions[Math.floor(Math.random() * statusOptions.length)] ??
        statusOptions[0];

      // Simulated revenues
      const totalRevenue = Math.floor(
        investedAmount * (Math.random() * 0.25 + 0.15),
      ); // 15%–40%
      const estimatedAnnualRevenue = Math.floor(
        investedAmount * (Math.random() * 0.07 + 0.05),
      ); // 5%–12%
      const totalValueBought = investedAmount;

      // Market simulation
      const marketFluctuation = 1 + (Math.random() * 0.3 - 0.15); // -15% to +15%
      const currentMarketValue = Math.floor(
        totalValueBought * marketFluctuation,
      );

      // New: Value per share logic
      const totalShares = 1000;
      const valuePerShare = parseFloat(
        (currentMarketValue / totalShares).toFixed(2),
      );
      const userShares = parseFloat(
        ((ownershipPercent / 100) * totalShares).toFixed(2),
      );

      return {
        item,
        ownershipPercent,
        investedAmount,
        transactionId,
        status,
        totalRevenue,
        estimatedAnnualRevenue,
        totalValueBought,
        currentMarketValue,
        valuePerShare,
        userShares,
        totalShares,
      };
    }),
  };

  return <MyInvestmentsPage investments={investments.investments} />;
}
