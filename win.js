var win=function(){
    this.cfg={
        title:"对话框",
        width:200,
        height:100,
        btnSure:"确定",
        btnCancle:"取消",
        btnSureHandler:null,
        btnCancleHandler:null
    };
    this.container=$('<div class="container"></div>');
    this.handlers={};
}
win.prototype={
    constructor:win,
    show:function(options,content){
      this.cfg= $.extend(this.cfg);
      var html=this.container.append(options.content);
      $("body").append(html);
    },
    onEvent:function(type,handler) {
        this.handlers[type] = this.handlers[type]||[];
        this.handlers[type].push(handler);
    },
    fireEvent:function(type,data){
          if(this.handlers[type] instanceof Array){
              for(var i=0;i<this.handlers[type].length;i++){
                  this.handlers[type][i](data);
              }
          }
    }
}
