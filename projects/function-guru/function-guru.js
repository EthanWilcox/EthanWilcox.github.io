//////////////////////////////////////////////////////////////////////
// Function 1 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var uString = string.split('');
    uString[0] = uString[0].toUpperCase();
    
    return uString.join('');
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var uString = string.split(' ');
  
    for (var i = 0; i < uString.length; i++) {
        uString[i] = uString[i][0].toUpperCase() + uString[i].substring(1);
    }
  
    return uString.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = object.name.split('');
    name[0] = name[0].toUpperCase();
    var uName = name.join('');
    
    return 'Welcome ' + uName + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var name = object.name.split('');
    name[0] = name[0].toUpperCase();
    var uName = name.join('');
    var species = object.species.split('');
    species[0] = species[0].toUpperCase();
    var uSpecies = species.join('');  
  
    return uName + ' is a ' + uSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    string = string.toLowerCase();
    word = word.toLowerCase();
    var result = 0;
    if (string.indexOf(word) > 0) {
        result = true;
    }
    else if (string.indexOf(word) < 0) {
        result = false;
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    var result = 0;
    if (object.friends === undefined) {
        result = false;
    }
    else if (object.friends.includes(name) === true) {
        result = true;
    }
    else if (object.friends.includes(name) === false) {
        result = false;
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        delete object[array[i]];
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}