import React, { useEffect } from 'react';

const Logs = (props) => {
  useEffect(() => {
    console.log(props.allLogs);
  }, [props.allLogs]);

  let reverseLogs = null;
  if (props.allLogs && props.allLogs.length !== 0) {
    const logs = props.allLogs.slice().reverse();
    reverseLogs = logs.map((log, id) => {
      return (
        <div className="grid grid-cols-5 gap-4 mx-2 sm:mx-8 sm:my-2" key={id + Math.random()}>
          <div className={log.title === 'Created' ? "sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-yellow-400 border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5"
          : log.title === 'Modified' ? "sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-indigo-300 border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5"
        : "sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-red-400 border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5"}>
            <div className="flex flex-row items-center justify-center">
              <div className="flex flex-col w-full">
                <div className="text-md font-medium pt-3 leading-4">
                  {log.name}
                </div>
                <div className="text-xs text-right font-thin text-gray-700 pb-0.5 ">
                  {log.title + ' @ ' + log.time}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  };

  return (
    <div>
      {reverseLogs}
    </div>
  );
};

export default Logs;