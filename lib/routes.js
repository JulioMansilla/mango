Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/add-stats', {
  name: 'addStats',
  onBeforeAction: function(){
    var myStats = UserStats.findOne({ userId: Meteor.userId() });
    if (!myStats) {
      UserStats.insert({userId: Meteor.userId()});
    }
    Session.set("myStats", myStats);
    this.next();
  }
});
