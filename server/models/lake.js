const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const lakeSchema = new Schema({
    name: {
        type: String,
        required: 'You need to leave a name!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    region: {
        type: String,
        required: true,
        trim: true,
    },
    beaches: {
        type: Boolean,
        required: true,
        trim: true,

    },
    fishSpecies: {
        type: String,
        required: true,
        trim: true,

    },
    //   comments: [
    //     {
    //       commentText: {
    //         type: String,
    //         required: true,
    //         minlength: 1,
    //         maxlength: 280,
    //       },
    //       commentAuthor: {
    //         type: String,
    //         required: true,
    //       },
    //       createdAt: {
    //         type: Date,
    //         default: Date.now,
    //         get: (timestamp) => dateFormat(timestamp),
    //       },
    //     },
    //   ],
});

const Lake = model('Lake', lakeSchema);

module.exports = Lake;
