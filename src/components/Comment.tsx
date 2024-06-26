import React, { useState } from "react";
import {IComment} from "./Comments";



interface CommentProps {
    comment: IComment
    addReply: (commentId: number, author: string, text: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, addReply }) => {
    const [newComment, setNewComment] = useState({ author: "", text: "" });
    const [showReplyBox, setShowReplyBox] = useState(false);

    return (
        <div className="mb-8 p-4">
            <div className="flex items-center justify-start mb-2">
                <p className="mr-2 font-bold">{comment.author},</p>
                <p className="font-bold">{comment.date}</p>
            </div>
            <div className="flex items-start">
                <p className="border border-gray-400 rounded-lg px-2 py-1 mr-2 break-words max-w-2xl">
                    {comment.display}
                </p>
                {!showReplyBox && (
                    <button
                        type="button"
                        onClick={() => {
                            setShowReplyBox(true);
                        }}
                        className="ml-2 bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-600"
                    >
                        Reply
                    </button>
                )}
                {showReplyBox && (
                    <>
                        <br />
                        <input
                            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                            type="text"
                            placeholder="Your name..."
                            className="w-full mt-2 mb-2 px-2 py-1 text-lg border border-gray-400 rounded-lg"
                        />
                        <br />
                        <textarea
                            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                            placeholder="Your comment..."
                            className="w-full mb-2 px-2 py-1 text-lg border border-gray-400 rounded-lg"
                        />
                        <br />
                        <button
                            type="button"
                            onClick={() => {
                                addReply(comment.id, newComment.author, newComment.text);
                                setShowReplyBox(false);
                                setNewComment({ author: "", text: "" });
                            }}
                            className="bg-blue-500 text-white rounded-lg px-2 py-1 mr-2 hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setShowReplyBox(false);
                                setNewComment({ author: "", text: "" });
                            }}
                            className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600"
                        >
                            Cancel
                        </button>
                    </>
                )}
                {comment.children.length > 0 && (
                    <ul>
                        {comment.children.map((childComment) => (
                            <Comment
                                key={childComment.id}
                                comment={childComment}
                                addReply={addReply}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Comment;
