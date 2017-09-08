//CONSTRUCTOR SERVICE
app.service("dataModel",function(){

  this.Construct = function(){
    this.state = false;
    this.list   = [];
    this.value  = "";
  }

  this.Construct.prototype.hide = function(){
    this.state = false;
  }
  this.Construct.prototype.show = function(){
    this.state = true;
  }
  this.Construct.prototype.toggle = function(){
    this.state = !this.state;
  }

  this.Construct.prototype.setValue = function(value){
    this.value = value;
  }

  this.Construct.prototype.clearValue = function(){
    this.value = "";
  }

  this.Construct.prototype.setValueFromListByKey = function(keyName){
    
    var self = this;
    for(var i = 0; i < self.list.length; i++){
      if(self.list[i][keyName] == true){
        self.value = self.list[i];
        break;
      }
    }
  }
  
  this.Construct.prototype.setList = function(arr){
    this.list = arr;
  }
  
  this.Construct.prototype.clearList = function(){
    this.list = [];
  }


  this.Construct.prototype.showMsg = function(msg){
    this.value = msg;
    this.state = true;
  }

  this.Construct.prototype.hideMsg = function(msg){
    this.value = "";
    this.state = false;
  }


});