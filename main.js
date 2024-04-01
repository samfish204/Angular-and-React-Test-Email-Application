(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
angular.module("MailboxApp", ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/inbox");
  $stateProvider.state("inbox", {
    url: "/inbox",
    templateUrl: "partials/inbox.html",
    controller: function ($scope, messageStore) {
      //console.log("Inbox.")
      $scope.messages = messageStore.getMessages();
    }
  }).state('message', {
    url: "/message/:id",
    templateUrl: "partials/message.html",
    controller: function ($scope, messageStore, $stateParams) {
      $scope.message = messageStore.getMessages().filter(function (message) {
        return message.id == $stateParams.id;
      })[0];
    }
  });
}).service("messageStore", function () {
  var messages = [];
  var sampleSize = 100;
  for (var i = 0; i < sampleSize; i++) {
    messages.push({
      sender: "john.smith" + i + "@gmail.com",
      date: Date.now() - i * 24000000,
      id: i,
      subject: "Regarding report #" + i,
      body: "Hey Sam. Where's report #" + i + "?"
    });
  }
  return {
    getMessages: function () {
      return messages;
    }
  };
});

},{}]},{},[1]);
