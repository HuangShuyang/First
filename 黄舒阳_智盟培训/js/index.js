// 轮播
 $(document).ready(function(){
        $('.flexslider').flexslider({
        slideshowSpeed : 3000,
        });
    });
//tab选项卡
function setSelectedStyle(tabid, obj) {
	var ma = tabs.getElementsByTagName('li')
	for(var j = 0; j < ma.length; j++) {
		ma[j].style.background = 'none'
		ma[j].style.color = 'black'
	}
	obj.style.background = '#303136'
	obj.style.color = 'white'
	}

function showContent(tabid) {
	var father = document.getElementById("container");
	var ma = tabs.getElementsByTagName('li')
	var tabsa = father.children;
	for(var i = 0; i < father.children.length; i++) {
		if(tabsa[i].getAttribute("id") == tabid) {
			tabsa[i].style.zIndex = "1";
		} else {
			tabsa[i].style.zIndex = "0";
		}
	}
}

function showTab(tabid, obj) {
 	showContent(tabid);
	setSelectedStyle(tabid, obj);
}

// li标签
   function showLi(liid){
    	
    	  var ma = lis.getElementsByTagName('li')
    	  for(var i = 0;i < ma.length;i++){
            ma[i].index = i;
        	ma[i].onmouseover = function(obj){
        	for(var j = 0;j < ma.length;j++){
                    ma[j].style.background = 'none'
        			ma[j].style.color = 'black'
        		}
        		this.style.background = 'lavenderblush'
        	
        	}
        }
    }




var arr = ['开发语言系列','数据库开发与管理系列','Redhat','Cisco','Citrix','ITIL','Vmware','CIW','CompTIA','Siemens/SAP','Software Development','IT Management'];
 var strx=[['C++','Java','Java','Android','SQL','Objective','Lisp'],
 ['Linux','MySQL','Oracle','Hadoop','HDFS','数据仓库工具 Hive','Oracle认证培训'],
['Linux OpenStack','OpenShift','CloudForms','Cloud Infrastructure','Inktank Ceph Enterprise','Red Hat Storage Server','红帽认证架构师（RHCA）'],
 ['CCA思科认证构架师','CCIE思科认证网络专家','CCDE思科网络设计专家级别','CCNP思科认证资深网络工程师','CCDP思科认证资深设计工程师','CCIP思科认证资深互联网工程师','CCSP思科认证资深安全工程师'],
['Citrix XenDesktop','Citrix&reg; XenApp™','AppDNA','XenClient','Citrix Receiver ','VDI-in-a-Box','GoToMyPC'],
 ['管理流程','实践发展','基本特点','核心模块','认证','认证体系'],
 ['VMware工作站','VMware服务器','VMware ESX服务器','VMware Workstation','VMware Player','VMware Fusion','VMware Server','VMware vSphere'],
 ['CIW助理','CIW专家','CIW大师','WEB PROFESSIONAL','Certified Internet Webmaster'],
 ['CompTIA A+™ 认证','CompTIA Network+ 认证','CompTIA Security+ ™ 认证',''],
 ['HiPath','MSR32R','Tussy','AXIOM Artis','SOMATOM(R) Sensation','Gas & Steam Turbines','Symbia TruePoint SPECT-CT'],
 ['Planning','Designing','Implementation','Deployment and maintance','View model','Mondeling language','Roles and industry'],
 ['Overview','IT infrastructure','IT management disciplines','IT managers','See also','References']];
var de = '';
 for(var i =0;i<arr.length;i++){
     de += '<li><a>'+arr[i]+'</a><span><img src="img/8.gif"></span><div class="li1d" id="psd'+i+'"></div></li>';

}
	lis.innerHTML = de;
 
 var li = lis.getElementsByTagName('li');

 for(var i=0;i<li.length;i++){

 	 arrFun(eval('psd'+i),eval('strx['+i+']'))

}

 function arrFun(id,str){
 	var mam = '';
 	for(var i = 0;i < str.length;i++){
 		mam += '<p><a>'+str[i]+'</a></p>'
 	}
 	id.innerHTML = mam
 	
 }
var arr1=['甲骨文和谷歌Java版权纠纷将在四月裁决',
		     '甲骨文和谷歌Java版权纠纷将在四月裁决',
			'甲骨文和谷歌Java版权纠纷将在四月裁决',
			'甲骨文和谷歌Java版权纠纷将在四月裁决',
			'甲骨文和谷歌Java版权纠纷将在四月裁决',
			'甲骨文和谷歌Java版权纠纷将在四月裁决',
			'甲骨文和谷歌Java版权纠纷将在四月裁决',
			'甲骨文和谷歌Java版权纠纷将在四月裁决']
var arr2 = ['2012-3-15','2012-3-15','2012-3-15','2012-3-15',
'2012-3-15','2012-3-15','2012-3-15','2012-3-15']
 

 for(var i =0;i<arr1.length;i++){
	var debang = '<li><a>'+arr1[i]+'</a><span>'+arr2[i]+'</span></li>';
	content1.children[0].innerHTML += debang;
}
 for(var i =0;i<arr1.length;i++){
	var debang = '<li><a>'+arr1[i]+'</a><span>'+arr2[i]+'</span></li>';
	content2.children[0].innerHTML += debang;
}
 for(var i =0;i<arr1.length;i++){
	var debang = '<li><a>'+arr1[i]+'</a><span>'+arr2[i]+'</span></li>';
	content3.children[0].innerHTML += debang;
}
 for(var i =0;i<arr1.length;i++){
	var debang = '<li><a>'+arr1[i]+'</a><span>'+arr2[i]+'</span></li>';
	content4.children[0].innerHTML += debang;
}
 for(var i =0;i<arr1.length;i++){
	var debang = '<li><a>'+arr1[i]+'</a></li>';
	content5.children[0].innerHTML += debang;
}

 
var arr3=['甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权',
  '甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权','甲骨文和谷歌Java版权']
  for(var i =0;i<arr3.length;i++){
	var debang = '<li><a>'+arr3[i]+'</a></li>';
	content6.children[0].innerHTML += debang;
}

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
  $('.content_rmjs').append(Nmb);


