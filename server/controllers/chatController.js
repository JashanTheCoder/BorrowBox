import ChatMessage from '../models/ChatMessage.js';

export const sendMessage = async (req, res) => {
	try {
		const { requestId, message } = req.body;
		const senderId = req.user.id;

		const newMsg = await ChatMessage.create({ requestId, senderId, message });
		res.json({ success: true, data: newMsg });
	} catch (err) {
		res.status(500).json({ success: false, error: err.message });
	}
};

export const getMessages = async (req, res) => {
	try {
		// route defines param as :id (see routes/chatRoutes.js)
		const requestId = req.params.id;

		const msgs = await ChatMessage.find({ requestId }).populate(
			'senderId',
			'name'
		);
		res.json({ success: true, data: msgs });
	} catch (err) {
		res.status(500).json({ success: false, error: err.message });
	}
};
