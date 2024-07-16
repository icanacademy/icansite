//***************************** notice_list ****************************************
//***************************** notice_list/notice_list.asp ****************************







//***************************** notice_view/notice_view.asp ****************************







//***************************** reply_basic_list ****************************************
//***************************** reply_basic_list/reply_basic_list.asp ****************************






//***************************** reply_basic_view/reply_basic_view.asp ****************************



//***************************** reply_basic/reply_basic_reply.asp ****************************

















//***************************** faq_list ****************************************
//***************************** faq_list/faq_list.asp ****************************












//***************************** gallery ****************************************
//***************************** gallery/gallery_list.asp ****************************

function gallery_list(gubun, b_Seq) {
	
	
	var TabGubun = document.getElementById("TabGubun").value;
	var schIcon = document.getElementById("schIcon").value;	
	var schGubun = document.getElementById("schGubun").value;	
	var schText = document.getElementById("schText").value;			
	var b_Board_id = document.getElementById("b_Board_id").value;	
	var pageNum = document.getElementById("pageNum").value;	
	
	
	if(gubun=="Reg"){										
		location.href="gallery_reg.asp?TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum;
	}else if(gubun=="View"){	
		location.href="gallery_view.asp?b_Seq="+b_Seq+"&TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum;
	}	
}
//+"&CategorySeq="+CategorySeq



function gallery_list_sch(){
	var f=document.getElementById("gallery_list");	
	f.schGubun.className = "";  
	f.schText.className = "";
	
	
	var TabGubun = document.getElementById("TabGubun").value;
	var schIcon = document.getElementById("schIcon").value;	
	var schGubun = document.getElementById("schGubun").value;	
	var schText = document.getElementById("schText").value;			
	var b_Board_id = document.getElementById("b_Board_id").value;	
	var pageNum = document.getElementById("pageNum").value;	

  if(schGubun==""){
  	alert("검색구분을 선택해주세요.");  
  	f.schGubun.className = "emptyfield";  
		f.schGubun.focus(); 
		return;
	} 

  if(schText==""){
  	alert("검색어를 입력해주세요.");  
  	f.schText.className = "emptyfield";  
		f.schText.focus(); 
		return;
	} 				
	
	document.getElementById("gallery_list").method="post";
	document.getElementById("gallery_list").action="gallery_list.asp?TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum;
	document.getElementById("gallery_list").submit();  
	
}


//***************************** gallery/gallery_reg.asp ****************************
function gallery_reg_chk(){	
	
	oEditors.getById["b_Contents"].exec("UPDATE_CONTENTS_FIELD", []);	// 에디터의 내용이 textarea에 적용됩니다.
	var f=document.getElementById("gallery_reg");	
	
	f.b_Title.className = "";
				
	if(f.b_Title.value==""){			
		alert("제목을 입력해주세요."); 
		f.b_Title.className = "emptyfield";  
		f.b_Title.focus();         
		return;		
	}	
	if(f.Input_Captcha_Code.value==""){			
		alert("가입방지코드를 입력해주세요."); 
		f.Input_Captcha_Code.className = "emptyfield";  
		f.Input_Captcha_Code.focus();         
		return;		
	}	
	if(f.Input_Captcha_Code.value != f.Captcha_Code.value){			
		alert("가입방지코드가 틀렸습니다.다시 입력해주세요."); 
		f.Input_Captcha_Code.className = "emptyfield";  
		f.Input_Captcha_Code.focus();         
		return;		
	}	
	
	f.submit();
}



function gallery_reg_file_del(b_Seq) {

	if (confirm("정말로 삭제 하시겠습니까?")) {		
		
		var PageAction = "FileDel"
		var b_Seq = b_Seq;	
		var Location_URL = location.href;
		
		location.href="gallery_file_del.asp?PageAction="+PageAction+"&b_Seq="+b_Seq+"&Location_URL="+escape(Location_URL);		
	
	} else {
	
	}
	
}	

function gallery_reg_list() {
	
	var TabGubun = document.getElementById("TabGubun").value;
	var schIcon = document.getElementById("schIcon").value;	
	var schGubun = document.getElementById("schGubun").value;	
	var schText = document.getElementById("schText").value;			
	var b_Board_id = document.getElementById("b_Board_id").value;	
	var pageNum = document.getElementById("pageNum").value;		
	
	
	location.href="gallery_list.asp?TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum;
	
}


//***************************** gallery/gallery_view.asp ****************************


function gallery_view(PageAction, b_Seq) {
	
	var PageAction = PageAction;var TabGubun = document.getElementById("TabGubun").value;
	var schIcon = document.getElementById("schIcon").value;		
	var schGubun = document.getElementById("schGubun").value;	
	var schText = document.getElementById("schText").value;			
	var b_Board_id = document.getElementById("b_Board_id").value;	
	var pageNum = document.getElementById("pageNum").value;		
	
	if(PageAction=="Modify"){										
		location.href="gallery_reg.asp?TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum+"&b_Seq="+b_Seq;
	}else if(PageAction=="Del"){	
		if (confirm("정말로 삭제 하시겠습니까?")) {				
			location.href="gallery_del_sql.asp?TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum+"&b_Seq="+b_Seq+"&PageAction="+PageAction;
		} else {		
		}		
	}else if(PageAction=="List"){	
		location.href="gallery_list.asp?TabGubun="+TabGubun+"&schIcon="+schIcon+"&schGubun="+schGubun+"&schText="+escape(schText)+"&b_Board_id="+b_Board_id+"&pageNum="+pageNum;
	}	
}


