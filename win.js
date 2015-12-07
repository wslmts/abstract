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
    show:function(options){
      this.cfg= $.extend(this.cfg,options);
      var html1=this.container.append(options.content);
        var html=this.container.append('<div><input type="button" id="sure" value="'+this.cfg.btnSure+'"/><input id="cancel" type="button" value="'+this.cfg.btnCancle+'"/> </div>');
      $("body").append(html);
       this.registerEvent();
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
    },
    offEvent:function(type){
        if(this.handlers[type] instanceof Array){
            for(var i=0;i<this.handlers[type].length;i++){
                this.handlers[type].splice(i,1);
            }
        }
    },
    registerEvent:function(){
        $("#sure").click(this.cfg.btnSureHandler);
        $("#cancel").click(this.cfg.btnCancleHandler)
    }

}
