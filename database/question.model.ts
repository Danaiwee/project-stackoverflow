import {Document, Schema, Types, model, models} from 'mongoose';

export interface IQuestion {
    title: string;
    content: string;
    tags: string;
    views: string;
    upvotes: number;
    downvotes: string;
    answer: number;
    author: Types.ObjectId;
}

export interface IQuestionDoc extends IQuestion, Document {}

const questionSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    tags: [{type: Schema.Types.ObjectId, ref: "Tag"}],
    views: {type: Number, default: 0},
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0},
    answer: {type: Number, default: 0},
    author: {type: Schema.Types.ObjectId, ref: "User", required: true},
}, {timestamps: true});

const Question = models?.Question || model<IQuestion>("Question", questionSchema);

export default Question;