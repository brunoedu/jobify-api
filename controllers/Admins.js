'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.authUser = function authUser (req, res, next) {
  var credentials = req.swagger.params['credentials'].value;
  Admins.authUser(credentials)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllJobCategories = function getAllJobCategories (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Admins.getAllJobCategories(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSuggestions = function getAllSuggestions (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Admins.getAllSuggestions(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllSuggestionsCategories  = function getAllSuggestionsCategories  (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Admins.getAllSuggestionsCategories (skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postJobCategory = function postJobCategory (req, res, next) {
  var jobCategory = req.swagger.params['jobCategory'].value;
  Admins.postJobCategory(jobCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postSuggestionCategory = function postSuggestionCategory (req, res, next) {
  var suggestionCategory = req.swagger.params['suggestionCategory'].value;
  Admins.postSuggestionCategory(suggestionCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putJobCategory = function putJobCategory (req, res, next) {
  var jobCategory = req.swagger.params['jobCategory'].value;
  Admins.putJobCategory(jobCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putSuggestionCategory = function putSuggestionCategory (req, res, next) {
  var suggestionCategory = req.swagger.params['suggestionCategory'].value;
  Admins.putSuggestionCategory(suggestionCategory)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
