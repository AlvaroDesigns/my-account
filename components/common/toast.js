/* Imports */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconsTypes from '../../utils/icons';

import * as Icon from 'react-feather';

/* Init Toast */
const Toast = (props) => {
  const { toastList, autoDelete, dismissTime } = props;
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);

    // eslint-disable-next-line
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDelete, dismissTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <div id="toast-list">
      {list.map((item, i) => (
        <div
          key={i}
          id={`toast-danger-${i}`}
          className="fixed bottom-4	left-4 flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <IconsTypes type={item.type} />
          </div>
          <div className="ml-3 text-sm font-normal">
            Su contraseña no es correcta
          </div>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-collapse-toggle="toast-danger"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <Icon.X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

Toast.propTypes = {
  toastList: PropTypes.array,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  dismissTime: PropTypes.number,
};

export default Toast;
