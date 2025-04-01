import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../Toast/Toast";
import "./ToastContainer.scss";

export const ToastContainer = () => {
  const [toasts, setToasts] = useState<
    { id: string; message: string; duration?: number }[]
  >([]);

  const addToast = useCallback((message: string, duration?: number) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { id, message, duration }]);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-wrapper">
      <button
        onClick={() => {
          addToast("Första Toasten", 3000);
          addToast("Andra Toasten", 4000);
          addToast("Tredje Toasten", 5000);
        }}
      >
        Visa 3 Toasts
      </button>

      <div className="toast-container">
        {toasts.map(({ id, message, duration }) => (
          <Toast
            key={id}
            id={id}
            message={message}
            duration={duration}
            onRemove={removeToast}
          />
        ))}
      </div>
    </div>
  );
};
