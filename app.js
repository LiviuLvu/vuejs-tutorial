var app = new Vue({
  el: '#vue-app',
  data: {
    name: '',
    job: 'Composer',
    age: '',
    website: 'http://google.com',
    x: 0,
    y: 0
  },
  methods: {
    greet: function (time) {
      return 'good ' + time + ' ' + this.name;
    },
    add: function (inc) {this.age+=inc},
    subtract: function (dec) {this.age-=dec},
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function () {
      console.log('you clicked');
    },
    logName: function () {
      console.log('received name data');
    },
    logAge: function () {
      console.log('received age data');
    }
  }
});