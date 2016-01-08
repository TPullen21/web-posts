Template.posts.helpers({
	posts: function() {
		return Posts.find({}, {sort:{createdAt: -1}});
	}
});

Template.registerHelper('getProfileImg', function(userId) {
	return UserImages.findOne({userId: userId}).image;
});