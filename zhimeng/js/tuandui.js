 var arr=['甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权',
  '甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权']
     for(var i =0;i<arr.length;i++){
	var de = '<li><a href="#">'+arr[i]+'</a></li>';
	content.children[0].innerHTML += de;
}
      for(var i =0;i<arr.length;i++){
	var de = '<li><a href="#">'+arr[i]+'</a></li>';
	content1.children[0].innerHTML += de;
}
       var arr1=['甲骨文和谷歌Java版权将在四月裁决版权将在四月裁决','甲骨文和谷歌Java版权甲骨文和谷歌Java版权',
       '甲骨文和谷歌Java版权四月裁决','甲骨文和谷歌Java版权',
        '甲骨文和谷歌Java版权','甲骨文和谷歌Java版权歌Java版权将在四月裁' ]
        for(var i =0;i<arr1.length;i++){
	var de = '<li><a href="#">'+arr1[i]+'</a></li>';
	content2.children[0].innerHTML += de;
}
var aaa= [
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
  
},
{ "img":"tea.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验，智盟培训中心高级c++讲师，十年c++项授课经验"
}
]

  var Ndy='';
for(var i =0;i<aaa.length;i++){

	Ndy +=' <div class="img_text"><div class="box_it"><div class="img1"><a href="#"><img src="img/'+aaa[i].img+'"></a></div><div class="box_txt1"><p>'+aaa[i].info+'</p><label>'+aaa[i].text+'</label></div></div></div>'
}
  $('.bigBox').append(Ndy);


 
 
 var sss=[
 {
  "img":"laoshi3.gif",
  "info":"陈楠",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验"
 },
{ "img":"laoshi2.jpg",
  "info":"杨学岗",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验"
 },
{ "img":"laoshi1.jpg",
  "info":"李振",
  "text":"智盟培训中心高级c++讲师，十年c++项授课经验"
 }
]


       
var Nmb='';
for(var i =0;i<sss.length;i++){

	Nmb +='<div class="content_dh_box"><div class="img"><a href="#"><img src="img/'+sss[i].img+'"></a></div><div class="box_txt"><p>'+sss[i].info+'</p><label>'+sss[i].text+'</label></div></div>'
}
  $('.content_xmzs').append(Nmb);
