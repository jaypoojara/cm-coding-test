import { FallbackProps } from "react-error-boundary";
import { twMerge } from "tailwind-merge";
import { RedirectToHome } from "./redirectToHome";

export const SomethingWentWrong = ({ error }: FallbackProps) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className={twMerge(`min-h-full flex flex-col items-center`)}
        role="alert"
      >
        <h6 className="text-6xl mb-8 font-medium">Something went wrong</h6>
        <pre className="text-red-500 mb-8 block">{error.message}</pre>
        <RedirectToHome />
      </div>
    </div>
  );
};
