import React from 'react';

const History = () => {
  return (
    <div>
      <React.Fragment>

        <div class="m-4 mt-0 pt-8 ">
          <div class="col-start-3 col-span-4 p-4 text-center font-extrabold tracking-wider text-2xl text-indigo-800">
            HISTORY LOGS
  </div>

        </div>
        <form class="flex mb-4">
          <div class="flex-none w-0.5"></div>
          <div class="flex-grow">
            <div class="flex justify-center">
              <input class=" mr-2 border-b pt-1" size="20" placeholder="Enter some task..."></input>
              <button class=" px-4 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-0 py-1 font-semibold">Search</button>
            </div>
          </div>
          <div class="flex-none w-0.5"></div>
        </form>

        {/* logs */}

        <div class="grid grid-cols-5 gap-4 mx-2 sm:mx-8">
          <div class="sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
                <div class="text-lg font-medium pt-2 leading-4">
                  23
              </div>
                <div class="text-xs font-thin text-gray-500 pb-0.5">
                  Customers
              </div>
              </div>
            </div>
          </div>
          <div class="sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
                <div class="text-lg font-medium pt-2 leading-4">
                  23
              </div>
                <div class="text-xs font-thin text-gray-500 pb-0.5">
                  Customers
              </div>
              </div>
            </div>
          </div>
          <div class="sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5">
            <div class="flex flex-row items-center justify-between">
              <div class="flex flex-col">
                <div class="text-lg font-medium pt-2 leading-4">
                  23
              </div>
                <div class="text-xs font-thin text-gray-500 pb-0.5">
                  Customers
              </div>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment >
    </div>
  );
};

export default History;
