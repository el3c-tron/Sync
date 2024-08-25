import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    chatId: {
        type: mongoose.Schema.Types.ObjecId,
        ref: "Chat"
    },
    content: {
        type: String,
        required: true
    },
    seenBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]

},{timestamps: true})

export const Message = mongoose.model("Message", messageSchema);