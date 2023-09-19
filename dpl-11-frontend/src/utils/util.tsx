import "../assets/css/common.css";
import axios from "axios";
import { ToastOptions } from 'react-toastify';

export default axios.create({
  baseURL: "http://localhost:3300/api",
  headers: {
    "Content-type": "application/json"
  }
});

// toaster configuration
export const notificationConfig: ToastOptions = {
  autoClose: 1000,
  position: "top-right",
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

// common date formate
export const dateFormateSql = (data: any) => {
  if (data !== null) {
    const isoDate = new Date(data);
    const year = isoDate.getFullYear();
    const month = String(isoDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(isoDate.getDate()).padStart(2, '0');
    const hours = String(isoDate.getHours()).padStart(2, '0');
    const minutes = String(isoDate.getMinutes()).padStart(2, '0');
    const seconds = String(isoDate.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  } else {
    const isoDate = new Date();
    const year = isoDate.getFullYear();
    const month = String(isoDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(isoDate.getDate()).padStart(2, '0');
    const hours = String(isoDate.getHours()).padStart(2, '0');
    const minutes = String(isoDate.getMinutes()).padStart(2, '0');
    const seconds = String(isoDate.getSeconds()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  }
}

// match status get
export const getTodayOrUpcoming = (dateStr: string) => {
  const today = new Date();
  const inputDate = new Date(dateStr);

  today.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  if (inputDate.getTime() === today.getTime()) {
    return "<span style='color: red;'>Today Match</span>";
  } else if (inputDate > today) {
    return "Upcoming Match";
  } else {
    return "<span style='color: lightgreen;'>Completed</span>";
  }
}