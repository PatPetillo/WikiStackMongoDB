const mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  urlTitle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['open', 'closed'],
  },
  date: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

pageSchema.virtual('route').get(() => {
  return `/wiki/${this.urlTitle}`;
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
