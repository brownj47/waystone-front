const URL_PREFIX = 'https://waystoneapi.herokuapp.com/api';

const API = {
	checkToken: token => {
		return fetch(`${URL_PREFIX}/checkToken`, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
	},
	login: (email, password) => {
		return fetch(`${URL_PREFIX}/login`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},
	signup: (email, password, username, img_url) => {
		return fetch(`${URL_PREFIX}/users/signup`, {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				username,
				img_url
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	//user routes

	//returns array of all user objects
	getAllUsers: () => {
		return fetch(`${URL_PREFIX}/users`)
	},

	//returns one user object
	getOneUser: (UserId) => {
		return fetch(`${URL_PREFIX}/users/user/${UserId}`)
	},

	//returns random user object
	randomUser: () => {
		return fetch(`${URL_PREFIX}/users/d20`)
	},

	// creates a new user
	createNewUser: (username, email, password) => {
		return fetch(`${URL_PREFIX}/users`, {
			method: 'POST',
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// updates a user at a UserId
	updateUser: (UserId, username, email, password, bio, img_url) => {
		return fetch(`${URL_PREFIX}/users/user/${UserId}`, {
			method: 'PUT',
			body: JSON.stringify({
				UserId,
				username,
				email,
				password,
				img_url,
				bio
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// path for sending a friend request
	// UserId references the user is sending the request
	// FriendId references the user the request is being sent to
	requestFriend: (UserId, RecipientId) => {
		return fetch(`${URL_PREFIX}/users/requests`, {
			method: 'POST',
			body: JSON.stringify({
				UserId,
				RecipientId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// path for accepting a friend request
	// UserId references the user who received the request
	// FriendId references the user the who sent the request
	acceptFriend: (UserId, FriendId) => {
		return fetch(`${URL_PREFIX}/users/requests`, {
			method: 'PUT',
			body: JSON.stringify({
				UserId,
				FriendId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// path for denying a friend request
	// UserId references the user who received the request
	// FriendId references the user the who sent the request
	// Deleting will remove the FriendId from the UserId's inbox, but the UserId will persist in FriendId's outbox to prevent resend
	denyFriend: (UserId, FriendId) => {
		return fetch(`${URL_PREFIX}/users/requests`, {
			method: 'DELETE',
			body: JSON.stringify({
				UserId,
				FriendId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// path for sending a membership request to a group
	requestGroup: (UserId, GroupId) => {
		return fetch(`${URL_PREFIX}/users/groups`, {
			method: 'POST',
			body: JSON.stringify({
				UserId,
				GroupId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// path for a User to remove a friend from their friends list
	deleteFriend: (UserId, FriendId) => {
		return fetch(`${URL_PREFIX}/users/friends`, {
			method: 'DELETE',
			body: JSON.stringify({
				UserId,
				FriendId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// deactivates, but does not delete, user account
	deactivateUser: (UserId, isDeactivated) => {
		return fetch(`${URL_PREFIX}/users/deactivate`, {
			method: 'PUT',
			body: JSON.stringify({
				UserId,
				isDeactivated
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// gets a users groups 
	getUsersGroups: (UserId) => {
		return fetch(`${URL_PREFIX}/groups/${UserId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

// post routes

	// returns an array of all posts
	getAllPosts: () => {
		return fetch(`${URL_PREFIX}/posts`)
	},

	// returns one Post by id
	getOnePost: (PostId) => {
		return fetch(`${URL_PREFIX}/posts/post`, {
			method: 'GET',
			body: JSON.stringify({
				PostId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// creates a new post
	createNewPost: (title, post_body, username, UserId, GroupId) => {
		return fetch(`${URL_PREFIX}/posts`, {
			method: 'POST',
			body: JSON.stringify({
				title,
				post_body,
				username,
				UserId,
				GroupId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// updates a post by id
	updatePost: (PostId, title, post_body) => {
		return fetch(`${URL_PREFIX}/posts/post`, {
			method: 'PUT',
			body: JSON.stringify({
				PostId,
				title,
				post_body,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// deactivates, but does not delete, a post by id
	deactivatePost: (PostId) => {
		return fetch(`${URL_PREFIX}/posts/deactivate`, {
			method: 'PUT',
			body: JSON.stringify({
				PostId
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	},

	// comment routes

	// returns an array of all comments
	getAllComments: () => {
		return fetch(`${URL_PREFIX}/comments`)
	},

	// returns one comment object
	getOneComment: (CommentId) => {
		return fetch(`${URL_PREFIX}/comments/comment`, {
			method: 'GET',
			body: JSON.stringify({
				CommentId
			})
		})
	},

	// creates a new comment where ParentId=PostId
	createNewComment: (comment_body, UserId, PostId, ParentId) => {
		return fetch(`${URL_PREFIX}/comments`, {
			method: 'POST',
			body: JSON.stringify({
				comment_body,
				UserId,
				PostId,
				ParentId
			})
		})
	},

	// udpates a comment by CommentId
	updateComment: (comment_body, CommentId) => {
		return fetch(`${URL_PREFIX}/comments/comment`, {
			method: 'PUT',
			body: JSON.stringify({
				comment_body,
				CommentId
			})
		})
	},

	// posts a reply on a comment where ParentId is the CommentId being replied to
	commentReply: (comment_body, UserId, PostId, ParentId) => {
		return fetch(`${URL_PREFIX}/comments/reply`, {
			method: 'POST',
			body: JSON.stringify({
				comment_body,
				UserId,
				PostId,
				ParentId
			})
		})
	},

	// deactivates a comment at a CommentId
	deactivateComment: (CommentId) => {
		return fetch(`${URL_PREFIX}/comments/deactivate`, {
			method: 'PUT',
			body: JSON.stringify({
				CommentId
			})
		})
	},

	// group routes

	// get all groups
	getAllGroups: () => {
		return fetch(`${URL_PREFIX}/groups`)
	},

	// get one group by GroupId
	getOneGroup: (GroupId) => {
		return fetch(`${URL_PREFIX}/groups/group`, {
			method: 'GET',
			body: JSON.stringify({
				GroupId
			})
		})
	},

	// create a new group
	createNewGroup: (group_name, admin) => {
		return fetch(`${URL_PREFIX}/groups`, {
			method: 'POST',
			body: JSON.stringify({
				group_name,
				admin
			})
		})
	},

	// update a group by GroupId
	updateGroup: (group_name, admin, GroupId) => {
		return fetch(`${URL_PREFIX}/groups/group`, {
			method: 'PUT',
			body: JSON.stringify({
				group_name,
				admin,
				GroupId
			})
		})
	},

	// accept request by UserId
	acceptRequest: (GroupId, UserId) => {
		return fetch(`${URL_PREFIX}/groups/members`, {
			method: 'PUT',
			body: JSON.stringify({
				GroupId,
				UserId
			})
		})
	},

	// deny friend request
	denyRequest: (GroupId, UserId) => {
		return fetch(`${URL_PREFIX}/groups/members`, {
			method: 'DELETE',
			body: JSON.stringify({
				GroupId,
				UserId
			})
		})
	},

	// remove UserId from GroupId
	deleteMember: (GroupId, UserId) => {
		return fetch(`${URL_PREFIX}/groups/members/remove`, {
			method: 'PUT',
			body: JSON.stringify({
				GroupId,
				UserId
			})
		})
	},

	// deactivate group
	deactivateGroup: (GroupId) => {
		return fetch(`${URL_PREFIX}/comments/deactivate`, {
			method: 'PUT',
			body: JSON.stringify({
				GroupId
			})
		})
	},
}







export default API;
