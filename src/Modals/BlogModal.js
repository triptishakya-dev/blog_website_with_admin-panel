import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    featuredImg: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
