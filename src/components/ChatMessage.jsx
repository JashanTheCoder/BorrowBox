const ChatMessage = ({ text, sender, isMine }) => {
	return (
		<div
			style={{
				textAlign: isMine ? 'right' : 'left',
				margin: '8px 0',
			}}
		>
			<p
				style={{
					display: 'inline-block',
					padding: '10px 14px',
					borderRadius: '10px',
					background: isMine ? '#DCF8C6' : '#F1F1F1',
				}}
			>
				<strong>{sender}:</strong> {text}
			</p>
		</div>
	);
};

export default ChatMessage;
