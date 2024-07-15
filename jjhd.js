function gw(){
	window.location = "https://shop491885644.m.taobao.com/?sourceType=other&suid=df78809a-3eaf-49bd-84b6-98445278b9b5&ut_sk=1.YIPGm%2FVYEboDAMNjfwRhZlMY_21646297_1650963388679.Copy.shopimpression&un=957ca3467008e8b0ad12898721723d67&share_crt_v=1&un_site=0&spm=a2159r.13376460.0.0&sp_abtk=common_shopimpression_commonInfo&sp_tk=5ZKM5bm05LmL5bCx5pyJ5aSn5Li66ICM5Li65bCP5Lit&bc_fl_src=share-104893748619479-2-1&cpp=1&shareurl=true&short_name=h.fIN2Xt3&bxsign=scd8k0eaSYYzHn-ZnISNa6_eCtfeUf1AqDbGnccWW9E7EbGcQYI3Kql5Ds95TTAe_U3ukixBnUVQNbmv3BeP-TgXJazQ6strPbn2bFn5bgrGBR_qXqzSyxVml1N6Czsp94S&app=weixin";
}
function closeimg(){
	var imgbox = document.getElementById("imgbox");
	imgbox.style.display = "none";
}
function showimg(x){
	var imgbox = document.getElementById("imgbox");
	var img = document.getElementById("img");
	imgbox.style.display = "block";
	img.src = x;
}
function closevideo(){
	var videobox = document.getElementById("videobox");
	videobox.style.display = "none";
	video.stop();
}
function showvideo(x){
	var videobox = document.getElementById("videobox");
	var video = document.getElementById("video");
	videobox.style.display = "block";
	video.src = x;
	video.play();
}

function backtop(){
	window.scroll(0,0);
}
function img1(){
	window.location = "https://www.zjybzs.com/wangzhan/luohanyi/luohanyi.html";
}
