Template.addStats.helpers({
  "getStat": function(name){
    myStats = Meteor.user()["profile"]["userStats"];
    if (myStats){
      return myStats[name];
    }else{
      return ""
    }
  }
});

Template.addStats.events({
  "click #save-stats": function(event, template){
    event.preventDefault();

    userStats = getAttributesFromForm(template, "stats");
    Meteor.users.update({ _id: Meteor.userId() }, {$set: {profile: {userStats: userStats}}})

    $('#addStats').modal('hide');
  },

  "click #save-attacks": function(event, template){
    event.preventDefault();

    userAttacks = getAttributesFromForm(template, "attack");
    userAttacks["userId"] = Meteor.userId();

    UserAttacks.insert(userAttacks);

    $('#addAttacks').modal('hide');
  }
});





