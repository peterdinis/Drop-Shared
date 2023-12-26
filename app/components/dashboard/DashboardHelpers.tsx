import classNames from 'classnames';
import { FC } from 'react';

const DashboardHelpers: FC = () => {
  const chartContainerClasses = classNames('chart-container', {
    'position-relative': true,
    'h-150px': true,
    'w-100': true,
  });

  const commerceChartContainerClasses = classNames('bg-white p-4 rounded-md');

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-2'>
        <div className={commerceChartContainerClasses}>
          <h2 className='text-gray-500 text-lg font-semibold pb-1'>
            My Latests files
          </h2>
          <div className='my-1'></div>
          <div className='bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6'></div>
          <div
            className={chartContainerClasses}
            style={{ position: 'relative', height: '150px', width: '100%' }}
          >
            <canvas id='commercesChart'></canvas>
          </div>
        </div>

        <div className={commerceChartContainerClasses}>
          <h2 className='text-gray-500 text-lg font-semibold pb-1'>
            My last uploads
          </h2>
          <div className='my-1'></div>
          <div className='bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6'></div>
          <div
            className={chartContainerClasses}
            style={{ position: 'relative', height: '150px', width: '100%' }}
          >
            <canvas id='commercesChart'></canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHelpers;
