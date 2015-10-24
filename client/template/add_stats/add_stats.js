Template.addStats.helpers({
  "getStat": function(name){
    myStats = Session.get("myStats");
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
    
    userStats = getAttributesFromForm();

    UserStats.update(Session.get("myStats")._id, userStats, { upsert: true} );

    $('#myModal').modal('hide');

    function getAttributesFromForm(){
      userStats = {
        "userId": Meteor.userId(),
        "bab":   template.find("#bab").value,
        "str":   template.find("#str").value,
        "dex":   template.find("#dex").value,
        "con":   template.find("#con").value,
        "lvl":   template.find("#lvl").value,
        "intl":  template.find("#int").value,
        "wis":   template.find("#wis").value,
        "cha":   template.find("#cha").value
      }
      return userStats;
    }
  }
});
