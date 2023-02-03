import { useState } from "react";
import CommentCard from "./commen-card";
import CommentReplay from "./comment-replay";

export default function CommentParent() {
  const [reply, setReply] = useState(false);
  return (
    <article className="border-b last:border-b-0 pb-2 last:pb-0">
      <CommentCard className="p-2" setReplay={setReply} />
      <div className="pl-3 py-2">
        <CommentCard className="group" setReplay={setReply}>
          <div className="absolute left-0 top-0 bg-dark h-[35px] w-[1px]">
            <div className="relative w-full h-full" />
            <div className="absolute bottom-0 left-[-2px] rounded-full h-[5px] w-[5px] bg-dark"></div>
          </div>
          <div className="group-last:hidden  absolute left-0 top-[40px] bottom-0 bg-dark w-[1px]" />
        </CommentCard>
        <CommentCard className="group" setReplay={setReply}>
          <div className="absolute left-0 top-0 bg-dark h-[35px] w-[1px]">
            <div className="relative w-full h-full" />
            <div className="absolute bottom-0 left-[-2px] rounded-full h-[5px] w-[5px] bg-dark"></div>
          </div>
          <div className="group-last:hidden  absolute left-0 top-[40px] bottom-0 bg-dark w-[1px]" />
        </CommentCard>
        <CommentCard className="group" setReplay={setReply}>
          <div className="absolute left-0 top-0 bg-dark h-[35px] w-[1px]">
            <div className="relative w-full h-full" />
            <div className="absolute bottom-0 left-[-2px] rounded-full h-[5px] w-[5px] bg-dark"></div>
          </div>
          <div className="group-last:hidden  absolute left-0 top-[40px] bottom-0 bg-dark w-[1px]" />
        </CommentCard>
        <CommentCard className="group" setReplay={setReply}>
          <div className="absolute left-0 top-0 bg-dark h-[35px] w-[1px]">
            <div className="relative w-full h-full" />
            <div className="absolute bottom-0 left-[-2px] rounded-full h-[5px] w-[5px] bg-dark"></div>
          </div>
          <div className="group-last:hidden  absolute left-0 top-[40px] bottom-0 bg-dark w-[1px]" />
        </CommentCard>
      </div>
      {reply && <CommentReplay className="px-3" />}
    </article>
  );
}
