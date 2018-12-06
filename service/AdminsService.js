'use strict';


/**
 * Autentica um usuário no sistema liberando seu token de acesso
 * Autnetica um usuário no sistema liberando seu token de acesso
 *
 * credentials Auth Dados de autenticação de usuário
 * returns User
 **/
exports.authUser = function(credentials) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lng" : -74.0059731,
  "email_enabled" : true,
  "jobs_requested" : 2.0,
  "rating" : 4.5,
  "push_mobile_token" : "50a5ecd2-bebc-440f-9486-bd17b9503a21",
  "push_web_enabled" : true,
  "tutorial_completed" : true,
  "type" : "user",
  "picture" : "https://res.cloudinary.com/brunoedu/image/upload/v1508965936/sample.jpg",
  "password" : "Senh@123",
  "push_web_token" : "50a5ecd2-bebc-440f-9486-bd17b9503a21",
  "push_mobile_enabled" : true,
  "jobs_accepted" : 10.0,
  "name" : "Bruno",
  "cellphone" : 1.2999999999E10,
  "socket_token" : "8411473621394413000",
  "_id" : "507f191e810c19729de860ea",
  "categories" : [ {
    "min_value" : 150.0,
    "km" : 30.0,
    "name" : "Encanador",
    "icon" : "https://res.cloudinary.com/brunoedu/image/upload/v1508965936/sample.jpg",
    "description" : "Você conserta sistemas hidráulicos",
    "_id" : "507f191e810c19729de860ea"
  }, {
    "min_value" : 150.0,
    "km" : 30.0,
    "name" : "Encanador",
    "icon" : "https://res.cloudinary.com/brunoedu/image/upload/v1508965936/sample.jpg",
    "description" : "Você conserta sistemas hidráulicos",
    "_id" : "507f191e810c19729de860ea"
  } ],
  "email" : "bruno@email.com",
  "lat" : 40.7143528
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas as categorias de serviço
 * Lista todas as categorias de serviços podendo conter alguns filtros 
 *
 * skip Integer Número de categorias a pular para paginação (optional)
 * limit Integer Número máximo de categorias a retornar (optional)
 * returns List
 **/
exports.getAllJobCategories = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Encanador",
  "icon" : "https://res.cloudinary.com/brunoedu/image/upload/v1508965936/sample.jpg",
  "description" : "Você conserta sistemas hidráulicos",
  "_id" : "507f191e810c19729de860ea"
}, {
  "name" : "Encanador",
  "icon" : "https://res.cloudinary.com/brunoedu/image/upload/v1508965936/sample.jpg",
  "description" : "Você conserta sistemas hidráulicos",
  "_id" : "507f191e810c19729de860ea"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas as sugestões deixadas por usuários
 * Lista todas as sugestões de usuários podendo conter alguns filtros 
 *
 * skip Integer Número de sugestões a pular para paginação (optional)
 * limit Integer Número máximo de sugestões a retornar (optional)
 * returns List
 **/
exports.getAllSuggestions = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "suggestion_category" : {
    "name" : "Melhorias",
    "description" : "Descreva o que podemos melhorar para melhor atendê-lo",
    "_id" : "507f191e810c19729de860ea"
  },
  "description" : "Olá, gostaria que o aplicativo carregasse mais rapidamente.",
  "_id" : "507f191e810c19729de860ea"
}, {
  "suggestion_category" : {
    "name" : "Melhorias",
    "description" : "Descreva o que podemos melhorar para melhor atendê-lo",
    "_id" : "507f191e810c19729de860ea"
  },
  "description" : "Olá, gostaria que o aplicativo carregasse mais rapidamente.",
  "_id" : "507f191e810c19729de860ea"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas as categorias de sugestões
 * Lista todas as categorias de sugestões podendo conter alguns filtros 
 *
 * skip Integer Número de categorias a pular para paginação (optional)
 * limit Integer Número máximo de categorias a retornar (optional)
 * returns List
 **/
exports.getAllSuggestionsCategories  = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Melhorias",
  "description" : "Descreva o que podemos melhorar para melhor atendê-lo",
  "_id" : "507f191e810c19729de860ea"
}, {
  "name" : "Melhorias",
  "description" : "Descreva o que podemos melhorar para melhor atendê-lo",
  "_id" : "507f191e810c19729de860ea"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cria uma nova categoria de serviço
 * Cria uma nova categoria de serviço
 *
 * jobCategory JobCategory Categoria de serviço a ser adicionada
 * no response value expected for this operation
 **/
exports.postJobCategory = function(jobCategory) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cria uma nova categoria de sugestão
 * Cria uma nova categoria de sugestão
 *
 * suggestionCategory SuggestionCategory Categoria de sugestão a ser adicionada
 * no response value expected for this operation
 **/
exports.postSuggestionCategory = function(suggestionCategory) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edita uma nova categoria de serviço
 * Edita uma nova categoria de serviço
 *
 * jobCategory JobCategory Categoria de serviço a ser editada
 * no response value expected for this operation
 **/
exports.putJobCategory = function(jobCategory) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edita uma nova categoria de sugestão
 * Edita uma nova categoria de sugestão
 *
 * suggestionCategory SuggestionCategory Categoria de sugestão a ser editada
 * no response value expected for this operation
 **/
exports.putSuggestionCategory = function(suggestionCategory) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

