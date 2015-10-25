STATS_ATTRIBUTES = ["bab", "str", "dex", "con", "lvl", "intl", "wis", "cha"];
ATTACK_ATTRIBUTES = ["attackName", "damage", "critRange", "critMultiplier", "wepType", "dmgMultiplier", "range", "ammo"];

getAttributesFromForm = function (template, formType){

  userStats = {};

  if (formType == "stats") {
    formAttributes = STATS_ATTRIBUTES;
  }else{
    formAttributes = ATTACK_ATTRIBUTES;
  }

  for (var i = 0; i < formAttributes.length; i++) {
    thisAttr = formAttributes[i];
    attrId = "#" + thisAttr;
    userStats[thisAttr] = template.find(attrId).value;
  }

  return userStats;
}
