import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {};
export default function Banner({ className, ...props }: Props) {
  const [show, setShow] = useState(true);
  if (!show) return <></>;
  return (
    <div {...props} className={twMerge("container px-2 sm:px-0  relative h-[107px] bg-gray-200 justify-center", className)}>
      <img src="" alt="" className="h-full" />
      <button className="p-[1px] px-2 bg-gray-100 absolute top-[2px] right-[2px]" onClick={() => setShow(false)}>
        x
      </button>
    </div>
  );
}
