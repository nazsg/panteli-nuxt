import Vue from 'vue'

Vue.filter('lineBreakNew', function(value) {
  return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
});
Vue.filter('upper', value => value.toUpperCase());
// Vue.filter('lineBreak', (value) => value.replace(/(?:\r\n|\r|\n)/g, '<br />'))