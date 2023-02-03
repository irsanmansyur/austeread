import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  setReplay: Dispatch<SetStateAction<boolean>>;
};
export default function CommentCard({ setReplay, className = "", ...props }: Props) {
  return (
    <article {...props} className={twMerge("relative py-5 px-6 sm:py-6  text-base bg-white rounded-lg dark:bg-gray-900", className)}>
      <footer className="flex justify-between items-center mb-2 relative">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img className="mr-2 w-6 h-6 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos" />
            Jese Leos
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time dateTime="2022-02-12" title="February 12th, 2022">
              Feb. 12, 2022
            </time>
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
      <div className="flex items-center mt-4 space-x-4">
        <button className="flex gap-2 items-center">
          <img src="/static/icons/like.png" className="w-[17px] h-[15px]" /> <span>16</span>
        </button>
        <button className="flex gap-2 items-center">
          <img src="/static/icons/comment.png" className="w-[17px] h-[15px]" /> <span>26</span>
        </button>
        <button type="button" className="flex items-center text-sm text-primary hover:underline" onClick={(e) => setReplay(true)}>
          Show Replay
        </button>
      </div>
      {props.children}
    </article>
  );
}
