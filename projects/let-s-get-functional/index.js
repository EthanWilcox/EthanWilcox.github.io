// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('./../underpants-lite/underpants-lite');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males;
    males = _.filter(array, function(x){return x.gender === 'male'});
    return males.length;
};

var femaleCount = function(array) {
    var females = [];
    var genders = [];
    _.each(array, function(x){genders.push(x.gender)});
    for (var i = 0; i < genders.length; i++) {
        if (genders[i] === 'female') {
            females.push(i);
        }
    }
    return females.length;
};

var oldestCustomer = function(array) {
    var ages = [];
    _.each(array, function(x){ages.push(x.age)});
    var max = Math.max(...ages);
    var result;
    for (var i = 0; i < array.length; i++) {
        if (ages[i] === max) {
            result = array[i].name;
            break;
        }
    }
    return result;
};

var youngestCustomer = function(array) {
    var ages = [];
    _.each(array, function(x){ages.push(x.age)});
    var min = Math.min(...ages);
    var result;
    for (var i = 0; i < array.length; i++) {
        if (ages[i] === min) {
            result = array[i].name;
            break;
        }
    }
    return result;
};

var averageBalance = function(array) {
    var bals = [];
    _.each(array, function(x) {bals.push(x.balance)});
    for (var x = 0; x < bals.length; x++) {
        if (bals[x].charAt(0) === '$') {
            bals[x] = bals[x].slice(1);
        }
        bals[x] = bals[x].replace(/,/g, '');
        bals[x] = bals[x] * 1;
    }
    var total = 0;
    for (var i = 0; i < bals.length; i++) {
        total += bals[i];
    }
    var average = total / bals.length;
    return average;
};

var firstLetterCount = function(array, letter) {
    var names = [];
    letter = letter.toLowerCase();
    _.each(array, function(x){names.push(x.name)});
    var letNames = [];
    for (var x = 0; x < names.length; x++) {
        names[x] = names[x].toLowerCase();
    }
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === letter) {
            letNames.push(names[i]);
        }
    }
    return letNames.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    var friends = [];
    var fnames = [];
    var letnames = [];
    letter = letter.toLowerCase();
    for (var i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            friends = array[i].friends;
        }
    }
    _.each(friends, function(x){fnames.push(x.name)});
    for (var z = 0; z < fnames.length; z++) {
        fnames[z] = fnames[z].toLowerCase();
    }
    for (var x = 0; x < fnames.length; x++) {
        if (fnames[x].charAt(0) === letter) {
            letnames.push(fnames[x]);
        }
    }
    return letnames.length;
};

var friendsCount = function(array, name) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        for (var x = 0; x < array[i].friends.length; x++) {
            if (array[i].friends[x].name === name) {
                result.push(array[i].name);
            }
        }
    }
    return result;
};

var topThreeTags = function(array) {
    var tags = [];
    var topTags = [];
    for (var i = 0; i < array.length; i++) {
        for (var x = 0; x < array[i].tags.length; x++) {
            tags.push(array[i].tags[x]);
        }
    }
    function mode(arr) {
        if (arr.length == 0) {
            return null;
        }
        var modeMap = {};
        var maxTag = arr[0], maxCount = 1;
        for (var i = 0; i < arr.length; i++) {
            var tag = arr[i];
            if (modeMap[tag] == null) {
                modeMap[tag] = 1;
            }
            else {
                modeMap[tag]++;
            }
            if (modeMap[tag] > maxCount) {
                maxTag = tag;
                maxCount = modeMap[tag];
            }
        }
        return maxTag;
    }
    topTags.push(mode(tags));
    tags = _.filter(tags, function(x){if (x != topTags[0]){return x}});
    topTags.push(mode(tags));
    tags = _.filter(tags, function(x){if (x != topTags[1]){return x}});
    topTags.push(mode(tags));
    return topTags;
};

var genderCount = function(array) {
    var maleArr = [];
    var femaleArr = [];
    var nonbinaryArr = [];
    var genders = [];
    _.each(array, function(x){genders.push(x.gender)});
    for (var i = 0; i < genders.length; i++) {
        if (genders[i] === 'male') {
            maleArr.push(i);
        }
        else if (genders[i] === 'female') {
            femaleArr.push(i);
        }
        else {
            nonbinaryArr.push(i);
        }
    }
    var genderOb = {
        male: maleArr.length,
        female: femaleArr.length,
        'non-binary': nonbinaryArr.length
    };
    return genderOb;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
