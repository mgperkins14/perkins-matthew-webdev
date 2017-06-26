var mongoose = require('mongoose');
var postSchema = require('./post.schema.server');
var postModel = mongoose.model('PostModel', postSchema);

postModel.createPost = createPost;
postModel.findPostById = findPostById;
postModel.findPostByTitle = findPostByTitle;
postModel.deletePost = deletePost;
postModel.editPost = editPost;
postModel.findPostsByUser = findPostsByUser;

module.exports = postModel;

function createPost(post) {
    return postModel.create(post);
}

function findPostById(postId) {
    return postModel.findById(postId);
}

function findPostByTitle(searchTerm) {
    return postModel.find({title: searchTerm});
}

function deletePost(postId) {
    return postModel.remove({_id: postId});
}

function editPost(postId, newPost) {
    return postModel.update({_id: postId}, {
        $set : {
            title: newPost.title,
            text: newPost.text,
            upvotes: newPost.upvotes,
            downvotes: newPost.downvotes,
            dateUpdated: new Date().now
        }
    });
}

function findPostsByUser(user) {
    return postModel.find({_user: user});
}

