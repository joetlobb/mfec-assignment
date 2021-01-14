import React, { useEffect } from 'react';

const History = (props) => {
  useEffect(() => {
    console.log(props)
  }, [props]);

  const back = () => {
    props.history.goBack();
  }

  return (
    <div>
      <React.Fragment>

        <div className="m-4 mt-0 pt-8 ">
          <div className="col-start-3 col-span-4 p-4 text-center font-extrabold tracking-wider text-2xl text-indigo-800"
          onClick={back}>
            HISTORY LOGS
  </div>

        </div>
        <form className="flex mb-4">
          <div className="flex-none w-0.5"></div>
          <div className="flex-grow">
            <div className="flex justify-center">
              {/* <input className=" mr-2 border-b pl-4 pt-1" size="20" placeholder="Enter some task..."></input>
              <button className=" px-4 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-0 py-1 font-semibold">Search</button> */}
            </div>
          </div>
          <div className="flex-none w-0.5"></div>
        </form>

        {/* logs */}

        <div className="grid grid-cols-5 gap-4 mx-2 sm:mx-8">
          <div className="sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="text-lg font-medium pt-2 leading-4">
                  23
              </div>
                <div className="text-xs font-thin text-gray-500 pb-0.5">
                  Customers
              </div>
              </div>
            </div>
          </div>
          <div className="sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="text-lg font-medium pt-2 leading-4">
                  23
              </div>
                <div className="text-xs font-thin text-gray-500 pb-0.5">
                  Customers
              </div>
              </div>
            </div>
          </div>
          <div className="sm:col-start-2 col-span-5 sm:col-span-3 rounded-lg bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-800 px-3.5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col">
                <div className="text-lg font-medium pt-2 leading-4">
                  23
              </div>
                <div className="text-xs font-thin text-gray-500 pb-0.5">
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
