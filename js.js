$(function(){
  $("#btn1").click(function(){
    $("#company").css("display","block");
    $("#team").css("display","none");
    $("#btn1").css("backgroundColor","#9cc6d9");
    $("#btn2").css("backgroundColor","transparent");
    $("#btns").css("backgroundColor","#fff");
  })
  $("#btn2").click(function(){
    $("#company").css("display","none");
    $("#team").css("display","block");
    $("#btn2").css("backgroundColor","#9cc6d9");
    $("#btn1").css("backgroundColor","transparent");
    if($("#team_add").css("display")=="none"){
        $("#btns").css("backgroundColor","#98999c");
    }
    else{
        $("#btns").css("backgroundColor","#dbdbdb");
    }

  })
})
