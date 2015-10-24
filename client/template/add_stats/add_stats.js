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

    $('#addStats').modal('hide');

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
  },
  "click #save-attacks": function(event, template){
    event.preventDefault();

    userAttacks = getAttacksFromForm();
    UserAttacks.update(Session.get("myAttacks")._id, userAttacks, {upsert: true} );
    $('#addAttacks').modal('hide');
    function getAttacksFromForm(){
      userAttacks = {
        "userId":         Meteor.userId(),
        "attackName":     template.find("#attackName").value,
        "damage":         template.find("#damage").value, 
        "critRange":      template.find("#critRange").value,
        "critMultiplier": template.find("#critMultiplier").value,
        "wepType":        template.find("#wepType").value,
        "dmgMultiplier":  template.find("#dmgMultiplier").value,
        "range":        template.find("#range").value,
        "ammo":        template.find("#ammo").value
      }
      return userAttacks;
    }
  }
});





