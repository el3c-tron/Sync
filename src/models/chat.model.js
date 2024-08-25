import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
    users: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            joiningTime: {
                type: Date,
                default: Date.now() 
            }
        }
    ],
    isGroup: {
        type: Boolean,
        default: false
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    groupName: {
        type: String,
        required: true
    },
    groupDp: {
        type: String
    }
},{timestamps: true})

export const Chat = mongoose.model("Chat", chatSchema);