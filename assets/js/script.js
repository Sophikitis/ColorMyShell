var app = new Vue({
  el: '#app',
  data: {
    message: ''
  },
  computed: {
    withCode:{
      get: function () {
    var color = $('.cont p').css('color')
    var bg = $('.cont p').css('background-color')

      return this.change(color, bg)
  },
      set: function (newValue) {
    this.message = newValue
  }
}

},
  methods: {
    changeColor: function changeColor(e) {
      var heading = document.querySelector('.cont p');
      var gradient = e.target.id;
      var x = heading.classList[0]
      heading.classList.replace(x, gradient);

      // DEGEULASSE -> TROUVER UNE SOLUTION
      var moche = this.message
      this.withCode = ""
      this.withCode = moche


    },
    changeBg: function changeBg(e) {
      var heading = document.querySelector('.cont p');
      var bg = e.target.id;
      var x = heading.classList[1]

      heading.classList.replace(x, bg);

      // DEGEULASSE -> TROUVER UNE SOLUTION
      var moche = this.message
      this.withCode = ""
      this.withCode = moche
    },
    change: function change(c, bg) {

      var msg


      if (bg == "rgb(0, 0, 1)") {
        msg = this.message
      }
      // bg red
      if (bg == "rgb(255, 0, 0)") {
        msg = "\\033[41m " + this.message
      }
      //bg green
      if (bg == "rgb(0, 128, 0)") {
        msg = "\\033[42m " + this.message
      }
      //bg blue
      if (bg == "rgb(0, 0, 255)") {
        msg = "\\033[44m " + this.message
      }
      //bg yellow
      if (bg == 'rgb(255, 255, 0)') {
        msg = '\\033[0;43m ' + this.message
      }
      //bg white
      if (bg == 'rgb(255, 255, 255)') {
        msg = '\\033[0;47m ' + this.message
      // bg black
      }
      if (bg == 'rgb(0, 0, 0)') {
        msg = '\\033[0;40m ' + this.message
      }





      if (c == "rgb(255, 255, 254)") {
        msg = msg
      }
      // red
      if (c == 'rgb(255, 0, 0)') {
        msg = '\\033[0;31m '+msg
      }
      // green
      if (c == 'rgb(0, 128, 0)') {
        msg = '\\033[0;32m '+msg
      }
      //blue
      if (c == 'rgb(0, 0, 255)') {
        msg = '\\033[0;34m '+msg
      }
      //yellow
      if (c == 'rgb(255, 255, 0)') {
        msg = '\\033[0;33m '+msg
      }
      //white
      if (c == 'rgb(255, 255, 255)') {
        msg = '\\033[0;37m '+msg
      }
      if (c == 'rgb(0, 0, 0)') {
        msg = '\\033[0;30m '+msg
      }





      if (msg.includes('\\033')) {
        msg = 'echo -e "' + msg + ' \\033[0m"'
      }else {
        msg = 'echo -e "' + msg + '"'
      }


      return msg
    }

  }
});
