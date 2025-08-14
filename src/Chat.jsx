import { useEffect, useState } from "react";
import "./style.css";
import "./Chat.css";

export default function ChatNotification() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000); // 4 seconds baad hide hoga
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <div className="fixed bottom-10 right-6 z-50 animate-slideInUp">
          <div className="flex max-w-sm items-center gap-x-3 rounded-xl bg-white p-4 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img
              className="size-10 shrink-0 rounded-full"
              src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png"
              alt="Chat Logo"
            />
            <div>
              <div className="text-base font-medium text-black dark:text-white">
                Devang Gupta
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Welcome to my Portfolio 👋
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
