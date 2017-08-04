(function () {
  
  function Person(name) {
    this.name = name;
  }
  
  Person.prototype.getName = function() {
    return this.name;
  };
  
  Person.prototype.setName = function(name) {
    this.name = name;
  };
  
  window.app = new Vue({
    el: '#app',
    data: {
      person: new Person('Leonty'),
      text: 'text'
    }
  });
})();

