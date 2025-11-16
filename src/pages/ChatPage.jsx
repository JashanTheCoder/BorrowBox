import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChatMessage from '../components/ChatMessage';
import { sendMessage, getMessages } from '../services/chatApi';
import { useAuth } from '../context/AuthContext.jsx';

const ChatPage = () => {
	const { user } = useAuth();
	const { requestId } = useParams();
	const navigate = useNavigate();

	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (requestId) {
			loadMessages();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [requestId]);

	const loadMessages = async () => {
		if (!requestId) return;
		setLoading(true);
		try {
			const msgs = await getMessages(requestId);
			setMessages(msgs || []);
		} catch (err) {
			console.error('Failed to load messages', err);
		} finally {
			setLoading(false);
		}
	};

	const handleSend = async () => {
		if (!input.trim() || !requestId) return;

		try {
			await sendMessage(input, requestId);
			setInput('');
			loadMessages();
		} catch (err) {
			console.error('Send failed', err);
		}
	};

	// Suggestions UI when no request selected
	const suggestions = [
		'Hi, is this item still available?',
		'Can I borrow this for a week?',
		'Where can we meet to pick this up?',
	];

	return (
		<div style={{ padding: '20px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<h2>Chat {requestId ? `— Request ${requestId}` : ''}</h2>
				<button
					onClick={() => navigate('/main')}
					style={{ padding: '6px 12px' }}
				>
					Back
				</button>
			</div>

			{!requestId && (
				<div style={{ marginBottom: '12px' }}>
					<p>
						Start a conversation — pick a suggestion or navigate from a request
						to chat
					</p>
					<div style={{ display: 'flex', gap: '8px' }}>
						{suggestions.map((s, i) => (
							<button
								key={i}
								onClick={() => setInput(s)}
								style={{ padding: '8px 12px' }}
							>
								{s}
							</button>
						))}
					</div>
				</div>
			)}

			<div
				style={{
					height: '400px',
					overflowY: 'auto',
					border: '1px solid #ccc',
					padding: '10px',
					marginBottom: '10px',
				}}
			>
				{loading ? (
					<p>Loading messages…</p>
				) : (
					messages.map((msg, index) => (
						<ChatMessage
							key={msg._id || index}
							text={msg.message}
							sender={msg.senderId?.name || 'Unknown'}
							isMine={
								user &&
								msg.senderId &&
								String(msg.senderId._id) === String(user._id)
							}
						/>
					))
				)}
			</div>

			<div style={{ display: 'flex', gap: '8px' }}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					style={{ flex: 1, padding: '10px' }}
					placeholder={
						requestId
							? 'Type a message...'
							: 'Select a request to start chatting'
					}
				/>
				<button
					onClick={handleSend}
					style={{ padding: '10px 15px' }}
					disabled={!requestId}
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default ChatPage;
