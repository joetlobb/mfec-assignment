import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteLogs } from '../../store/actions';
import Logs from './Logs/Logs';

const History = (props) => {
  useEffect(() => {
    // console.log(props.logs)
  }, [props]);

  const back = () => {
    // props.history.goBack();
  }

  const clearLogsHandler = () => {
    props.onClearLogs()
  };

  return (
    <div>
      <React.Fragment>

        <div className="m-4 mt-0">
          <div className="col-start-3 col-span-4 p-4 text-center font-extrabold tracking-wider text-2xl text-indigo-800"
            onClick={back}>
            HISTORY LOGS
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-none w-0.5"></div>
          <div className="flex-grow">
            <div className="flex justify-center">
              {/* <input className=" mr-2 border-b pl-4 pt-1" size="20" placeholder="Enter some task..."></input> */}
              <button className=" px-4 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white 
              rounded-lg px-0 py-1 font-semibold"
              onClick={clearLogsHandler}
              >Clear all logs</button>
            </div>
          </div>
          <div className="flex-none w-0.5"></div>
        </div>

        {/* logs */}
        <Logs allLogs={props.logs} />
      </React.Fragment >
    </div>
  );
};

const mapStateToProps = state => {
  return {
    logs: state.reducers.logs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearLogs: () => dispatch(deleteLogs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
