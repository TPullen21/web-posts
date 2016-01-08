Meteor.startup(function () {

	AccountsEntry.config({ 
		wrapLinks: true,
		homeRoute: '/',
		dashboardRoute: '/',
		passwordSignupFields: 'USERNAME_AND_EMAIL',
		waitEmailVerification: false
	});

	Accounts.ui.config({
		passwordSignupFields: 'USERNAME_AND_EMAIL'
	});

});