//create angular module and an array of other methods that are going to be needed
// Angular evaluated HTML elements when bowser loaded the content, use standard DOM API and JS features to add and remove elements, set up event handlers ...
// so there is no explicit compilation step in AngularJS, just modify HTML and JS file and load them into the browser

// one-way binding: value is taken from model and used to populate the element in template;
// two-way binding: where the model is used to generate elements and changes in the element cause corresponding changes in the model.


var app = angular.module("app", []);

var model = {
  user: "yanze",
  items: [{
    action: "Buy Flowers",
    done: false
  }, {
    action: "Get Shoes",
    done: false
  }, {
    action: "Collect Tickets",
    done: true
  }, {
    action: "Call Joe",
    done: false
  }]
};

app.controller('TodoCtrl', function($scope){
  $scope.todo = model;

  $scope.incompleteCount = function(){
    var count = 0;
    angular.forEach($scope.todo.items, function(item){
      if(!item.done){count++;}
    });
    return count;
  };


  $scope.warningLevel = function(){
    return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
  };


  $scope.addNew = function(task){
    $scope.todo.items.push({action: task, done: false});
  };



});

app.filter("checkdItems", function(){
  return function(items, showComplete){
    var resArr = [];
    angular.forEach(items, function(item){
      if(!item.done || showComplete){
        resArr.push(item);
      }
    });

    return resArr;
  };
});
