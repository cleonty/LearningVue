/* global Vue */
(function () {
  var vm = new Vue({
    el: '#Interpolations',
    data: {
      msg: 'this is a message',
      rawHtml: 'This is raw <b>html</b>',
      dymanicId: "myId",
      number: 33,
      ok: true,
      message: 'another message',
      id: 'some-id'
    }
  });
})();

(function () {
  var vm = new Vue({
    el: '#Directives',
    data: {
      seen: true,
      url: 'http://google.ru'
    },
    methods: {
      doSomething: function () {
        console.log('Do something');
      }
    }
  });
})();

(function () {
  var vm = new Vue({
    el: '#Filters',
    data: {
      message: 'je suis une message'
    },
    filters: {
      capitalize: function (value) {
        if (!value)
          return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  });
})();

(function () {
  var vm = new Vue({
    el: '#Shorthands',
    data: {
      url: '#'
    },
    methods: {
      doSomething: function() {
        
      }
    }
  });
})();