Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/add-stats', {
  name: 'addStats',
  onBeforeAction: function(){
    var myStats = UserStats.findOne({ userId: Meteor.userId() });
    var myAttacks = UserAttacks.findOne({ userId: Meteor.userId() });
    if (!myStats) {
      UserStats.insert({userId: Meteor.userId()});
      UserAttacks.insert({userId: Meteor.userId()});
    }
    Session.set("myStats", myStats);
    Session.set("myAttacks", myAttacks)
    this.next();
  }
});
