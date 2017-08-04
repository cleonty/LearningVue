/* global Vue */
(function () {
  Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
  });
  var vm = new Vue({
    el: '#BindingHTMLClasses',
    data: {
      isActive: true,
      hasError: true,
      error: {
        type: 'fatal'
      },
      classObject: {
        active: true,
        'text-danger': true
      },
      activeClass: 'active',
      errorClass: 'text-danger'
    },
    computed: {
      classObjectComputed: function () {
        return {
          active: this.isActive && !this.hasError,
          'text-danger': this.error && this.error.type === 'fatal'
        };
      }}
  });

})();

(function () {
  var vm = new Vue({
    el: '#BindingInlineStyles',
    data: {
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyles: {
        color: 'red',
        fontSize: '13px'
      },
      overridingStyles: {
        color: 'blue',
        fontSize: '17px'
      }
    }
  });
})();

