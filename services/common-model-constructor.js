//CONSTRUCTOR SERVICE
app.service("constructor",[function(){
  
  var _self = this;

  var setValue = function(value){
    this.value = value;
  }

  //TOGGLE CONSTRUCTOR THAT CAN BE USED FOR CREATING A TOGGLING MODEL i.e POPUPS, MESSAGES etc.
  this.Toggle = function(defaultState){
    this.state  = defaultState || false;
    this.msg  = '';
  }

  this.Toggle.prototype.show = function(msg){
    if(!this.state)
      this.state = true;

    if(msg != undefined)
      this.msg = msg;
  };

  this.Toggle.prototype.hide = function(){
    if(this.state)
      this.state = false;

    if(this.msg != '')
      this.msg = '';
  };

  this.Toggle.prototype.toggle = function(){
    this.state = !this.state;
  }

  //TYPE OF CONSTRUCTOR WHICH CAN BE USED AS MODEL WHICH HAS VALUE, LIST AND FILTERS.
  this.Data = function(){
    this.value = "";
    this.list = [];
    this.filter = "";
  }

  this.Data.prototype.setList = function(list){
    this.list = list;
  }

  this.Data.prototype.setValue = setValue;


  //CONSTRUCTOR FUNCTION FOR ALL INPUT TEXT
  _self.InputText = function(value){
    this.value = '';
    this.disabled = false;
  }

  _self.InputText.prototype.setValue = setValue;

}]);