var app = new Vue({
  el: '#vue-app',
  data: {
    name: 'Strauss',
    job: 'Dev',
    website: 'http://google.com'
  },
  methods: {
    greet: function (time) {
      return 'good ' + time + ' ' + this.name;
    }
  }
});