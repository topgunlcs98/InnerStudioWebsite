
let project_activited;
$('#Project .item').each((i,elem)=>{
  let folded=true,
      curstage=$(elem).children('.curstage'),
      stages=$(elem).children('.stages'),
      height=stages.height();
  stages.height(0);
  $(elem).click(()=>{
    if(folded){
      if(project_activited){
        project_activited.click();
      }
      project_activited=$(elem);
      folded=false;
      curstage.animate({height:0},200);
      setTimeout(()=>{
        curstage.css('display','none');
        stages.css('display','block');
        stages.animate({height:height},300);
      },220)
    }
    else{
      project_activited=undefined;
      folded=true;
      stages.animate({height:0},300);
      setTimeout(()=>{
        stages.css('display','none');
        curstage.css('display','block');
        curstage.animate({height:30},200);
      },320);
    }
  });
});
