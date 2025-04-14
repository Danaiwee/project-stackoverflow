import {Document, model, models, Schema, Types} from 'mongoose';

export interface IInteraction {
    user: Types.ObjectId;
    action: String;
    actionId: Types.ObjectId,
    actionType: 'question' | 'answer'
}

export interface IInteractionDoc extends IInteraction, Document {}

const interactionSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    action: {type: String, required: true},
    actionId: {type: Schema.Types.ObjectId, required: true},
    actionType: {type: String, enum: ['question', 'answer'], required: true}

}, {timestamps: true});


const Interaction = models?.Interaction || model<IInteraction>("Interaction", interactionSchema);

export default Interaction;