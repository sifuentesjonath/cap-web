import React, { FC } from 'react'
import dynamic from 'next/dynamic';
// ApexChart
import getChartData, { getChartConfiguration, removeXAxis, ChartPaymentsType } from "@utils/chart"

let ApexCharts;
const Chart = dynamic(
  () => {
    ApexCharts = require('apexcharts');
    return import('react-apexcharts');
  },
  { ssr: false }
);

interface IApexChartProps {
  payments: ChartPaymentsType[];
  viewAs: string,
  autoFill?: boolean;
  isMobile?: boolean;
  onChartLoad?: (payments: number) => void;
}
const ApexChart: FC<IApexChartProps> = props => {
  const { viewAs, autoFill = false, onChartLoad, isMobile } = props;
  const payments = props?.payments ?? [];

  /** For optimization: maybe make receive all posible views, process all of them and save them on a useMemo */
  const options = getChartConfiguration(payments);
  const { chartPayments, paymentsToDate } = getChartData(viewAs, payments);
  const chartData = isMobile ? removeXAxis(chartPayments) : chartPayments;

  onChartLoad && onChartLoad(paymentsToDate);

  return (
    <Chart
      options={options}
      series={[
        {
          name: 'Payments',
          data: chartData ?? [],
        }
      ]}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default ApexChart;
