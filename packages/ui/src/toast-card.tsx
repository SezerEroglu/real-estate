import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import reactHotToast from 'react-hot-toast';

export interface ToastCardProps {
  toastId: string;
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

export const ToastCard = forwardRef<HTMLDivElement, ToastCardProps>(
  function ToastCardForwardRef({ toastId, icon, title, description }, ref) {
    return (
      <div
        className="pointer-events-auto flex w-full max-w-md items-center rounded-lg bg-secondary text-secondary-foreground shadow-lg ring-1 ring-black ring-opacity-5"
        ref={ref}
      >
        {
          icon && <div className="shrink-0 text-4xl opacity-30">{icon}</div>
          // : (
          //   <div className="shrink-0 pl-3 text-4xl text-primary/30">
          //     <IconNotification className="!text-black" />
          //   </div>
          // )
        }
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-1">
              <p className="text font-medium">{title}</p>
              <p className="mt-1 text-sm">{description}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => reactHotToast.dismiss(toastId)}
          className="hover:opcaity-80 flex h-full items-center justify-center rounded-none rounded-r-lg border border-l border-default-200 border-transparent p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/10"
        >
          Dismiss
        </button>
      </div>
    );
  },
);
