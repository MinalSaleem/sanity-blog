"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CommentsSection() {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    []
  );
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && name.trim()) {
      setComments([...comments, { name, comment: newComment }]);
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-xl xs:text-2xl md:text-3xl font-semibold text-[#333333] mb-5">
        Comments:
      </h2>

      <div className="flex flex-col space-y-5 justify-start ">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="outline-[#7C4EE4] rounded-sm w-[270px]  border border-[#7C4EE4] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
        />
        <span
          className="flex flex-col space-x-5 justify-start space-y-5 items-start
        text-start"
        >
          <textarea
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            placeholder="Comment here"
            className="outline-[#7C4EE4] rounded-sm w-[270px] border border-[#7C4EE4] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
          />
          <Button
            onClick={handleAddComment}
            className="bg-[#7C4EE4] hover:border-[#7C4EE4] hover:text-[#7C4EE4] hover:bg-white  w-[270px] focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
          >
            Comment
          </Button>
        </span>
      </div>
      <ul className="mt-4">
        {comments.map((comment, index) => (
          <li key={index} className="border-b py-2">
            <strong>{comment.name}:</strong> {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}
