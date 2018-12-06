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
 * Rejeita uma oferta de um prestador
 * Rejeita uma oferta de um prestador
 *
 * id String Id da solicitação
 * providerId String Id do prestador de serviço que ofertou
 * no response value expected for this operation
 **/
exports.deleteOffer = function(id,providerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove uma solicitação
 * Remove uma solicitação
 *
 * id String Id da solicitação
 * no response value expected for this operation
 **/
exports.deleteRequest = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
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
 * Recupera os dados de uma solicitação
 * Recupera os dados de uma solicitação 
 *
 * id String Id da solicitação
 * returns Request
 **/
exports.getRequestById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2018-02-18T16:00:00Z",
  "requester" : "507f191e810c19729de860ea",
  "offers" : [ {
    "provider" : "507f191e810c19729de860ea",
    "rejected" : false
  }, {
    "provider" : "507f191e810c19729de860ea",
    "rejected" : false
  } ],
  "provider" : "507f191e810c19729de860ea",
  "rating" : 4.0,
  "range" : 15.0,
  "description" : "Preciso que uma única parede seja pintada",
  "messages" : [ {
    "date" : "2018-02-18T16:00:00Z",
    "request" : "507f191e810c19729de860ea",
    "read" : false,
    "receiver" : "507f191e810c19729de860ea",
    "sender" : "507f191e810c19729de860ea",
    "message" : "Olá, tudo bem?"
  }, {
    "date" : "2018-02-18T16:00:00Z",
    "request" : "507f191e810c19729de860ea",
    "read" : false,
    "receiver" : "507f191e810c19729de860ea",
    "sender" : "507f191e810c19729de860ea",
    "message" : "Olá, tudo bem?"
  } ],
  "_id" : "507f191e810c19729de860ea",
  "job_category_id" : "507f191e810c19729de860ea",
  "rating_description" : "Muito bom",
  "value" : 150.0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Recupera o perfil de um usuário
 * Recupera o perfil de um usuário 
 *
 * id String Id do usuário
 * returns User
 **/
exports.getUserProfile = function(id) {
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
 * Avalia um serviço
 * Avalia um serviço
 *
 * id String Id da solicitação
 * evaluation Evaluation Avaliação do usuário
 * no response value expected for this operation
 **/
exports.postEvaluate = function(id,evaluation) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Envia mensagem para um usuário
 * Envia mensagem para um usuário
 *
 * id String Id da solicitação
 * message Message Mensagem
 * no response value expected for this operation
 **/
exports.postMessage = function(id,message) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cria uma oferta para uma solicitação
 * Cria uma oferta para uma solicitação
 *
 * id String Id da solicitação
 * no response value expected for this operation
 **/
exports.postOffers = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Efetua uma solicitação de serviço
 * Efetua uma solicitação de serviço
 *
 * request Request Objeto de solicitação
 * no response value expected for this operation
 **/
exports.postRequest = function(request) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Cadastro de um novo usuário
 * Cadastra um novo usuário
 *
 * user RegisterUser Usuário a ser cadastrado
 * returns User
 **/
exports.postUser = function(user) {
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
 * Aceita uma oferta de um prestador de serviço
 * Aceita uma oferta de um prestador de serviço
 *
 * id String Id da solicitação
 * providerId String Id do prestador de serviço que ofertou
 * no response value expected for this operation
 **/
exports.putOffer = function(id,providerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edita uma solicitação
 * Edita uma solicitação
 *
 * request Request Solicitação a ser editada
 * no response value expected for this operation
 **/
exports.putRequest = function(request) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edita um usuário
 * Edita um usuário
 *
 * user User Usuário a ser editado
 * no response value expected for this operation
 **/
exports.putUser = function(user) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

