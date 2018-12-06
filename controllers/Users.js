'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.authUser = function authUser (req, res, next) {
  var credentials = req.swagger.params['credentials'].value;
  Users.authUser(credentials)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteOffer = function deleteOffer (req, res, next) {
  var id = req.swagger.params['id'].value;
  var providerId = req.swagger.params['providerId'].value;
  Users.deleteOffer(id,providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRequest = function deleteRequest (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.deleteRequest(id)
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
  Users.getAllJobCategories(skip,limit)
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
  Users.getAllSuggestionsCategories (skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRequestById = function getRequestById (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.getRequestById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserProfile = function getUserProfile (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.getUserProfile(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postEvaluate = function postEvaluate (req, res, next) {
  var id = req.swagger.params['id'].value;
  var evaluation = req.swagger.params['evaluation'].value;
  Users.postEvaluate(id,evaluation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postMessage = function postMessage (req, res, next) {
  var id = req.swagger.params['id'].value;
  var message = req.swagger.params['message'].value;
  Users.postMessage(id,message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postOffers = function postOffers (req, res, next) {
  var id = req.swagger.params['id'].value;
  Users.postOffers(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postRequest = function postRequest (req, res, next) {
  var request = req.swagger.params['request'].value;
  Users.postRequest(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postUser = function postUser (req, res, next) {
  var user = req.swagger.params['user'].value;
  Users.postUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putOffer = function putOffer (req, res, next) {
  var id = req.swagger.params['id'].value;
  var providerId = req.swagger.params['providerId'].value;
  Users.putOffer(id,providerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putRequest = function putRequest (req, res, next) {
  var request = req.swagger.params['request'].value;
  Users.putRequest(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putUser = function putUser (req, res, next) {
  var user = req.swagger.params['user'].value;
  Users.putUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
