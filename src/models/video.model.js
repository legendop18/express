const mongoose = require('mongoose')
const mongooseAggregatepaginate = require('mongoose-aggregate-paginate-v2')


const videoschema = new mongoose.Schema(
    {
        videoFile: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        views: {
            type: number,
            default: 0

        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
        {
            timestamps: true
        }
)



videoschema.plugin(mongooseAggregatepaginate)


const Video = mongoose.model("Video", videoschema)