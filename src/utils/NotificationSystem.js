import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const success = ({ message }) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2500,
    pauseOnFocusLoss: true,
    hideProgressBar: true,
  });
};

const error = ({ message }) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2000,
    pauseOnFocusLoss: true,
    hideProgressBar: true,
  });
};

export const Notification = ({ type }) => {
  switch (type) {
    case 'CANCEL_REQUEST_ERROR':
      error({ message: 'Request has been canceled! Please, reload page for search!' });
      break;
    default:
        success({ message: 'Default notification!' });
  }
};
