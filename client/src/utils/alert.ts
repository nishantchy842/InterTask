import { toast } from "react-toastify";

export const successNotification = (message: string) =>
  toast.success(message, {
    autoClose: 1500,
    bodyClassName: "align-baseline",
    style: {
      fontWeight: 500,
      fontFamily: "Mukta",
    },
  });

export const errorNotification = (message: string) =>
  toast.error(message, {
    autoClose: 1500,
    bodyClassName: "align-baseline",
    style: {
      fontWeight: 500,
      fontFamily: "Mukta",
    },
  });
