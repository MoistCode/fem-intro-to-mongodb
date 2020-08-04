const Post = require('./post')

const postByTitle = (title) => {
  return Post.findOne({
    title
  }).exec();
}

const postsForAuthor = (authorId) => {
  return Post.find({
    author: authorId
  }).exec();
}

const fullPostById = (id) => {
  return Post.findById(id).populate().exec();
}

const allPostsSlim = (fieldsToSelect) => {
  return Post.find({}).select(fieldsToSelect).exec();
}

const postByContentLength = (maxContentLength, minContentLength) => {
  return Post.find({
    contentLength: {
      $lt: maxContentLength,
      $gt: minContentLength,
    },
  });
}

const addSimilarPosts = (postId, similarPosts) => {
  return Post.findByIdAndUpdate(postId, {
    $push: {
      similarPosts: {
        $each: similarPosts
      }
    }
  }, {
    new: true
  });
}

module.exports = {
  postByTitle,
  postsForAuthor,
  fullPostById,
  allPostsSlim,
  postByContentLength,
  addSimilarPosts
}