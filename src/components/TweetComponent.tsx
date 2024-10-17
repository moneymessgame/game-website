import * as React from 'react';
import '../styles/tweet.css';

type TweetProps = {
	username: string;
	handle: string;
	avatarUrl: string;
	replyTo: string;
	text: string;
	time: string;
	date: string;
	likes: string;
	replies: number;
};

export const TweetComponent: React.FC<TweetProps> = ({
	username,
	handle,
	avatarUrl,
	replyTo,
	text,
	time,
	date,
	likes,
	replies,
}) => {
	return (
		<div className="tweet-container transition-transform duration-200 hover:scale-105 hover:shadow-m hover:shadow-blue-800 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
  <div className="tweet-header flex items-center mb-2">
    <img
      className="avatar w-10 h-10 rounded-full mr-2"
      src={avatarUrl}
      alt={`${username}'s avatar`}
    />
    <div>
      <span className="username font-bold">{username}</span>
      <span className="handle text-gray-500">@{handle}</span>
      <span className="follow text-blue-500"> • Follow</span>
    </div>
  </div>
  <div className="tweet-reply text-gray-500 mb-2">
    Replying to <span className="reply-handle text-blue-500">@{replyTo}</span>
  </div>
  <div className="tweet-content mb-2">{text}</div>
  <div className="tweet-footer flex justify-between text-gray-500">
    <span className="tweet-time">{time} · {date}</span>
    <div className="tweet-actions flex space-x-4">
      <span className="like">❤️ {likes}</span>
      <span className="reply-icon">💬 Reply</span>
      <span className="share">🔗 Copy link</span>
    </div>
  </div>
  <div className="tweet-replies text-gray-500">Read {replies} replies</div>
</div>

	);
};
