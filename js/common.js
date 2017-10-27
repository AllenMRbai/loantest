(function(){

    var kenPopup=new Object();
    //confirm提示框
    kenPopup.getConfirmTemplate=function(){
        var tem=
        '<div class="ken_shade hidden" id="ken_confirm">'+
            '<div class="ken_popup ken_confirm">'+
                '<div class="ken_tips">我不知道该说些什么</div>'+
                '<div class="ken_btn_box ken_flex_center line_top">'+
                    '<div class="ken_btn">取消</div>'+
                    '<div class="ken_btn ken_blue">确定</div>'+
                '</div>'+
            '</div>'+
        '</div>'
        return tem;
    }
    /*
    *opts{
    *  tips:'',//提示信息 string
    *  btn1:'',//按钮1名称 string
    *  btn2:'',//按钮2名称 string
    *  fun1:function(){},//按钮1的回调
    *  fun2:function(){},//按钮2的回调
    *}
    */
    kenPopup.confirm=function(opts){
        var tips=opts.tips || '提示信息'
        var btn1=opts.btn1 || '取消'
        var btn2=opts.btn2 || '确定'
        var fun1=opts.fun1 || function(){}
        var fun2=opts.fun2 || function(){}
        $('.ken_confirm .ken_tips').text(tips);
        $('.ken_confirm .ken_btn').eq(0).text(btn1);
        $('.ken_confirm .ken_btn').eq(1).text(btn2);
        this.confirm.prototype.fun1=fun1;
        this.confirm.prototype.fun2=fun2;
        $('#ken_confirm').removeClass('hidden');
    }
    
    //alert提示框
    kenPopup.getAlertTemplate=function(){
        var tem=
        '<div class="ken_shade hidden" id="ken_alert">'+
            '<div class="ken_popup ken_alert ">'+
                '<div class="ken_tips">我不知道该说些什么</div>'+
                '<div class="ken_btn_box ken_flex_center line_top">'+
                    '<div class="ken_btn ken_blue">确定</div>'+
                '</div>'+
            '</div>'+
        '</div>'
        return tem;
    }
    /*
    *opts{
    *  tips:'',//提示信息 string
    *  btn1:'',//按钮1名称 string
    *  fun1:function(){},//按钮1的回调
    *}
    */
    kenPopup.alert=function(opts){
        var tips=opts.tips || '提示信息'
        var btn1=opts.btn1 || '确定'
        var fun1=opts.fun1 || function(){}
        $('.ken_alert .ken_tips').text(tips);
        $('.ken_alert .ken_btn').eq(0).text(btn1);
        this.alert.prototype.fun1=fun1;
        $('#ken_alert').removeClass('hidden');
    }
    
    //Prompt提示框 小型的提示框 没按钮
    kenPopup.getPromptTemplate=function(){
        var tem=
        '<div class="ken_shade hidden" id="ken_prompt">'+
            '<div class="ken_popup ken_prompt ken_black">'+
                '<div class="ken_tips">我不知道该说些什么</div>'+
            '</div>'+
        '</div>'
        return tem;
    }
    /*
    *opts{
    *  tips:'',//提示信息 string
    *}
    */
    kenPopup.promptShow=function(opts){
        var tips=opts.tips || '提示信息'
        $('.ken_prompt .ken_tips').text(tips)
        $('#ken_prompt').removeClass('hidden')
    }
    kenPopup.promptHide=function(){
        $('#ken_prompt').addClass('hidden');
    }
    
    //Loading提示框
    kenPopup.getLoadingTemplate=function(){
        var tem=
        '<div class="ken_shade hidden" id="ken_loading">'+
            '<div class="ken_popup ken_loading ken_md ken_black">'+
                '<div class="ken_pic"><img src="./img/common_loading.gif"></div>'+
                '<div class="ken_tips">加载中</div>'+
            '</div>'+
        '</div>'
        return tem;
    }
    /*
    *opts{
    *  tips:'',//提示信息 string
    *}
    */
    kenPopup.loadingShow=function(opts){
        var tips=opts.tips || '加载中'
        $('.ken_loading .ken_tips').text(tips)
        $('#ken_loading').removeClass('hidden')
    }
    kenPopup.loadingHide=function(){
        $('#ken_loading').addClass('hidden')
    }

    //Success提示框
    kenPopup.getSuccessTemplate=function(){
        var tem=
        '<div class="ken_shade hidden" id="ken_success">'+
            '<div class="ken_popup ken_success ken_md ken_black">'+
                '<div class="ken_pic"><img src="./img/common_success.png"></div>'+
                '<div class="ken_tips">成功</div>'+
            '</div>'+
        '</div>'
        return tem;
    }
    /*
    *opts{
    *  tips:'',//提示信息 string
    *  time:1000//延长显示时间 number
    *}
    */
    kenPopup.successShow=function(opts){
        var tips=opts.tips || '成功'
        var time=opts.time || 1000
        $('.ken_success .ken_tips').text(tips)
        $('#ken_success').removeClass('hidden')
        var setHide=setTimeout(function(){
            $('#ken_success').addClass('hidden')
        },time)
    }
    
    //tDefeated提示框
    kenPopup.getDefeatedTemplate=function(){
        var tem=
        '<div class="ken_shade hidden" id="ken_defeated">'+
            '<div class="ken_popup ken_defeated ken_md ken_black">'+
                '<div class="ken_pic"><img src="./img/common_defeated.png"></div>'+
                '<div class="ken_tips">失败</div>'+
            '</div>'+
        '</div>'  
        return tem;
    }
    /*
    *opts{
    *  tips:'',//提示信息 string
    *  time:1000//延长显示时间 number
    *}
    */
    kenPopup.defeatedShow=function(opts){
        var tips=opts.tips || '失败'
        var time=opts.time || 1000
        $('.ken_defeated .ken_tips').text(tips)
        $('#ken_defeated').removeClass('hidden')
        var setHide=setTimeout(function(){
            $('#ken_defeated').addClass('hidden')
        },time)
    }
    
    //初始化
    kenPopup.init=function(){
        var html='';
        html+=this.getConfirmTemplate();
        html+=this.getAlertTemplate();
        html+=this.getPromptTemplate();
        html+=this.getLoadingTemplate();
        html+=this.getSuccessTemplate();
        html+=this.getDefeatedTemplate();
        $('body').append(html)

        //confirm 绑定按钮
        $('.ken_confirm .ken_btn').eq(0).click(function(){
            $('#ken_confirm').addClass('hidden')
            kenPopup.confirm.prototype.fun1();
        })
        $('.ken_confirm .ken_btn').eq(1).click(function(){
            $('#ken_confirm').addClass('hidden')
            kenPopup.confirm.prototype.fun2();
        })
        //alert 绑定按钮
        $('.ken_alert .ken_btn').eq(0).click(function(){
            $('#ken_alert').addClass('hidden')
            kenPopup.alert.prototype.fun1();
        })
    }
    kenPopup.init();
    
    //向全局暴露该对象
    window.kenPopup=kenPopup;
})()



//获得token 返回编码后的token 如果网页已过期返回false
function getToken(){
    var token=sessionStorage.getItem('token');
    if(!token){
        kenPopup.alert({tips:'该网页已过期，请重新登录！',fun1:function(){
            location.href='apply.html'
        }})
        setTimeout(function(){
            location.href=location.href='apply.html'
        },3000)
        return false;
    }
    return encodeURIComponent(token);

}
