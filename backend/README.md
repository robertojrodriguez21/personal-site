# Backend Information

## API Calls

### like is added to post 
/users/addPostLike/:user_id/:post_id
/posts/addLike/:post_id/:user_id

### like is added to comment
/users/addCommentLike/:user_id/:comment_id
/comments/addLike/:comment_id/:user_id

### dislike is added to post 
/users/addPostDislike/:user_id/:post_id
/posts/addDislike/:post_id/:user_id

### dislike is added to comment
/users/addCommentDislike/:user_id/:comment_id
/comments/addDislike/:comment_id/:user_id

### like is removed from post 
/users/removePostLike/:user_id/:post_id
/posts/removeLike/:post_id/:user_id

### like is removed from comment
/users/removeCommentLike/:user_id/:comment_id
/comments/removeLike/:comment_id/:user_id

### dislike is removed from post 
/users/removePostDislike/:user_id/:post_id
/posts/removeDislike/:post_id/:user_id

### dislike is removed from comment
/users/removeCommentDislike/:user_id/:comment_id
/comments/removeDislike/:comment_id/:user_id

### post is bookmarked
/users/addBookmark/:user_id/:post_id

### post is unbookmarked
/users/removeBookmark/:user_id/:post_id

### user is created
/users/createOne

### experience is created 
/experiences/createOne
/users/addExperience/:user_id/:experience_id

### experience is deleted 
/experiences/deleteOne
/users/removeExperience/:user_id/:experience_id

### post is created 
/posts/createOne
/users/addPost/:user_id/:post_id

### post is deleted 
/posts/deleteOne
/users/removePost/:user_id/:post_id

### comment is created 
/comments/createOne
/users/addComment/:user_id/:comment_id
/posts/addComment/:post_id/:comment_id

### comment is deleted 
/comments/deleteOne
/users/removeComment/:user_id/:comment_id
/posts/removeComment/:post_id/:comment_id