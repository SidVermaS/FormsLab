import clsx from 'clsx';
import { BarChartData } from 'features/surveys/components/BarChart/BarChart';
import BarChart from 'features/surveys/components/BarChart/BarChart';
import DataCard from 'features/surveys/components/DataCard/DataCard';

interface AnswerHeaderProps {
  totalVotes: number;
  startDate: string;
  endDate: string;
  chartData: BarChartData[];
}

function AnswerHeader({
  totalVotes,
  startDate,
  endDate,
  chartData,
}: AnswerHeaderProps) {
  return (
    <div className="flex flex-col-reverse items-center justify-center md:flex-row">
      {chartData.length ? <BarChart data={chartData} /> : null}

      <div
        className={clsx(
          'mt-6 mb-12 flex w-full flex-col items-center justify-center md:my-0 md:ml-6 md:w-auto md:-translate-y-4',
          !chartData.length ? 'md:flex-row' : ''
        )}
      >
        <DataCard title="Total Votes" value={totalVotes.toString()} />
        <DataCard title="Start Date" value={startDate} />
        <DataCard title="End Date" value={endDate} />
      </div>
    </div>
  );
}

export default AnswerHeader;
