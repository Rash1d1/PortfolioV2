import React, { useState } from "react";
import Comment from "./Comment";

export interface IComment {
    id: number;
    display: string;
    date: string;
    author: string;
    children: IComment[];
}

const Comments = () => {
    const [comment, setComment] = useState<{ author: string; text: string }>({
        author: "",
        text: "",
    });

    const [comments, setComments] = useState<IComment[]>([
        {
            id: 1,
            display: "Initial comment",
            date: "01-01-2001",
            author: "admin",
            children: [
                {
                    id: 2,
                    display: "1 reply",
                    date: "09-02-2004",
                    author: "user__name",
                    children: [],
                },
            ],
        },
    ]);

    const addReply = (commentId: number, replyAuthor: string, replyText: string) => {
        let commentsWithNewReply = [...comments];
        insertComment(commentsWithNewReply, commentId, replyAuthor, replyText);
        setComments(commentsWithNewReply);
    };

    const newComment = (author: string, text: string) => {
        return {
            id: new Date().getTime(),
            display: text,
            author: author,
            date: new Date()
                .toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })
                .replace(/\//g, ":"),
            children: [],
        };
    };

    const insertComment = (
        comments: IComment[],
        parentId: number,
        user: string,
        text: string
    ) => {
        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            if (comment.id === parentId) {
                comment.children.push(newComment(user, text));
            }
        }

        for (let i = 0; i < comments.length; i++) {
            let comment = comments[i];
            insertComment(comment.children, parentId, user, text);
        }
    };

    return (
        <div className="m-4 p-4 border border-gray-400 rounded-lg">
            <div className="mb-4 border border-gray-400 rounded-lg p-2.5">
                <input
                    onChange={(e) => setComment({ ...comment, author: e.target.value })}
                    type="text"
                    placeholder="Your name..."
                    className="w-full mb-2.5 p-1.5 text-lg border border-gray-400 rounded-lg box-border"
                />
                <textarea
                    onChange={(e) => setComment({ ...comment, text: e.target.value })}
                    placeholder="Your comment..."
                    className="w-full mb-2.5 p-1.5 text-lg border border-gray-400 rounded-lg box-border"
                />
                <button
                    onClick={() => {
                        setComments([newComment(comment.author, comment.text), ...comments]);
                        setComment({ author: "", text: "" });
                    }}
                    className="bg-green-500 text-white border-none rounded-lg p-1.5 px-5 cursor-pointer"
                >
                    Submit
                </button>
            </div>

            <div>
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} addReply={addReply} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
