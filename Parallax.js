class Parallax {
    constructor ($el, options = {}) {
    this.$el = typeof $el === 'string' 
    ? document.querySelector($el)
    : $el
     
    this.stepWidth = options.stepWidth || 30
    this.stepHeight = options.stepHeight || 10
    
      }
    
      #moveBackground (e) {
       let offsetX = (e.clientX  / window.innerWidth * this.stepWidth) - (this.stepWidth / 2);
       let offsetY = (e.clientY / window.innerHeight * this.stepHeight) - (this.stepHeight / 2);
     
       //Меняем положение фона или картинки
    this.$el.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
    this.$el.style.transform = 'translate(' + offsetX + 'px , ' + offsetY + 'px)';
      }
      
      #leaveBackground () {
          this.$el.setAttribute("style", "background-position: " +  "center");
    
      }
    
      listener () {
        document.addEventListener("mousemove", (e) => {
          this.#moveBackground(e) 
          }
          )
        
         document.addEventListener("mouseout", (e) => {
          this.#leaveBackground () 
          }
          )
      }
    
    }
    
    
    const phon = new Parallax('.two')
    phon.listener()

    const three = new Parallax('.three', [

    ])
    three.listener()

