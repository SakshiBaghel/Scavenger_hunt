// const mongoose = require('mongoose');

// const huntSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     startTime: {
//         type: Date,
//         required: true,
//         validate: {
//             validator: function (value){
//                 return value > new Date();
//             },
//             message: "START TIME MUST BE IN FUTURE"
//         }
//     },
//     endTime: {
//         type: Date,
//         required: true,
//         validate: {
//             validator: function (value) {
//                 return this.startTime < value;
//             },
//             message: "END TIME MUST BE GREATER THAN THE CURRENT START TIME"
//         }
//     },
//     createdBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         // required: false
//         default: null
//     },
//     puzzle: [
//         {
//             clue: {
//                 type: String,
//                 required: true
//             },
//             location: {
//                 coordinates: {
//                     type: [Number],
//                     default: undefined, 
//                     required: false 
//                 }
//             },
            
//             hints: [
//                 {
//                     hint: {
//                         type: String,
//                         required: false
//                     }
//                 }
//             ],
            
//             photoReq: {
//                 type: Boolean,
//                 default: false
//             }
//         }
//     ],
//     players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
//     leaderboard: [
//         {
//             user: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'User'
//             },
//             score: {
//                 type: Number,
//                 default: 0
//             },
//             timeCompleted: Date
//         }
//     ]
// },  { timestamps: true });

// huntSchema.index({ startTime: 1, endTime: 2 });

// module.exports = mongoose.model("Hunt", huntSchema);
const mongoose = require('mongoose');

const huntSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value > new Date();
            },
            message: "START TIME MUST BE IN FUTURE"
        }
    },
    endTime: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return this.startTime && this.startTime < value;
            },
            message: "END TIME MUST BE GREATER THAN START TIME"
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    puzzle: [
        {
            clue: {
                type: String,
                required: true
            },
            location: {
                coordinates: {
                    type: [Number],
                    required: false
                }
            },
            hints: [
                {
                    hint: {
                        type: String,
                        required: true
                    }
                }
            ],
            photoReq: {
                type: Boolean,
                default: false
            }
        }
    ],
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
    leaderboard: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            score: {
                type: Number,
                default: 0
            },
            timeCompleted: Date
        }
    ]
}, { timestamps: true });

huntSchema.index({ startTime: 1, endTime: 1 });

module.exports = mongoose.model("Hunt", huntSchema);
