window.onscroll=function(){
	var y=document.documentElement.scrollTop || window.pageYOffset;
	if(y>=200){
		xuanfu.style.display='block';
	}else if(y<200){
		xuanfu.style.display='none';
	}
}