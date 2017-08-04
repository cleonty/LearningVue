/* global Vue */
(function () {
  console.group('Properties and Methods');
  var data = {a: 1};
  var vm = new Vue({
    data: data
  });
  console.log(vm.a === data.a); // -> true
// setting the property also affects original data
  vm.a = 2;
  console.log(data.a); // -> 2
// ... and vice-versa
  data.a = 3;
  console.log(vm.a); // -> 3
  console.groupEnd('Properties and Methods');
})();

(function () {
  console.group('Properties and Methods 2');
  var data = {a: 1};
  var vm = new Vue({
    el: '#example',
    data: data
  });
  console.log(vm.$data);
  console.log(vm.$el);
  console.groupEnd('Properties and Methods 2');
})();

(function () {
  console.group('Instance Lifecycle Hooks');
  var data = {a: 1};
  var vm = new Vue({
    el: '#lifecycle',
    data: data,
    mounted: function () {
      console.log('mounted');
    },
    created: function () {
      console.log('created');
    },
    updated: function () {
      console.log('updated');
    },
    destroyed: function () {
      console.log('destroyed');
    }
  });
  console.groupEnd('Instance Lifecycle Hooks');
})();