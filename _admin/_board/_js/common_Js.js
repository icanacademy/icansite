function go_Home(){
	location.href="/";
}



// *************************
// 체크박스 전체선택, 취소
function CheckALL_List(FormID){

	var frm = document.getElementById(""+FormID);
	var vLen = frm.LCheck_List.length;	
	var vCheckValue_List = "";
	if(vLen == null){
		if(frm.LCheckALL_List.checked){
			frm.LCheck_List.checked = true;
		}else{
			frm.LCheck_List.checked = false;
		}
	}else{
		for(var i = 0 ; i < vLen ; i++){
			if(frm.LCheckALL_List.checked){
				frm.LCheck_List[i].checked = true;
			}else{
				frm.LCheck_List[i].checked = false;
			}
		}
	}
}

//선택된 값을 | 로 join, 문자열로 만듬 aa|bb|cc 형태
function CallCheck_List(FormID){
	var frm = document.getElementById(""+FormID);
	var vCallValue_List = "";
	var vLen = frm.LCheck_List.length;

	var vCallArray_List = new Array;
	if(vLen == null){				
		if(frm.LCheck_List.checked == true ){		
			LCheck_List_Value =  frm.LCheck_List.value.split('@@@')[0]
			vCallArray_List.push(LCheck_List_Value);
		}
	}else{		
		for(var i = 0 ; i < vLen ; i++){						
			if(frm.LCheck_List[i].checked == true){				
				LCheck_List_Value =  frm.LCheck_List[i].value.split('@@@')[0]			
				vCallArray_List.push(LCheck_List_Value);
			}
		}
	}

	vCallValue_List = vCallArray_List.join("|");
	//alert(vCallValue_List)
	return vCallValue_List;
}
// *************************


// *************************multiple selectbox관련 *************************
function gor(num, PageName){
	var num = num;
	var PageName = PageName;
	var frm = document.getElementById(""+PageName);
	if(num==""){
		frm.b.length = "";
	}else {

			j=frm.b.length;
			for(var i=0;i<frm.a.length;i++)	{
				if(frm.a.options[i].selected && frm.a.options[i].value){
				frm.a.options[i].selected=false;
				chk_same=0;
					for(var k=0;k<frm.b.length;k++){
						if(frm.a.options[i].value==frm.b.options[k].value){
						chk_same=1;
						}
					}

					if(!chk_same){
						frm.b.options[j]=new Option(frm.a.options[i].text,frm.a.options[i].value);
						j++;
					}
				}
			}

	}
	get_result(PageName)
}

function gol(num, PageName){
	var PageName = PageName;
	var frm = document.getElementById(""+PageName);
	buff=new Array();
	j=0;
	for(var i=frm.b.length-1;i>=0;i--){
		if(frm.b.options[i].selected && frm.b.options[i].value){
			frm.b.options[i] = null;
		}
	}
	get_result()
}
function get_result(PageName){
	var PageName = PageName;
	var frm = document.getElementById(""+PageName);
	res=new Array();
	for(var i=0;i<frm.b.length;i++){
		res[i]=frm.b.options[i].value;
	}
	res=res.join("|");
	frm.SelectMemSKU.value=res;
}

// *************************



function popup_close(){
	self.close()
}


//자동 탭 시작
var isNN = (navigator.appName.indexOf("Netscape")!=-1);

function autoTab(input,len, e) {
        var keyCode = (isNN) ? e.which : e.keyCode;
        var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
        if(input.value.length >= len && !containsElement(filter,keyCode)) {
        input.value = input.value.slice(0, len);
        input.form[(getIndex(input)+1) % input.form.length].focus();
}

function containsElement(arr, ele) {
        var found = false, index = 0;
        while(!found && index < arr.length)
        if(arr[index] == ele)
        found = true;
        else
        index++;
        return found;
}

function getIndex(input) {
        var index = -1, i = 0, found = false;
        while (i < input.form.length && index == -1)
        if (input.form[i] == input)index = i;
        else i++;
        return index;
        }
return true;
}
//자동 탭 끝



//특수문자 입력 금지
function inputCheckSpecial(obj)

{

 var strobj = obj; //입력값을 담을변수.

 re = /[<>;=#%${}]/gi;

 if(re.test(strobj.value))

 {

  alert("특수문자는 입력하실수 없습니다.");

  strobj.value=strobj.value.replace(re,"");

 }

}



//복사붙여 넣기 금지
function CopyChk()

{
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "v")) {
       //alert("복사 및 붙여넣기 안돼!!.");
       event.returnValue = false;
    }
    
}
//onkeydown="CopyChk();"

//숫자만 입력가능
function numberChk(sip)
{

 if (event.keyCode >= 48 && event.keyCode <= 57) { //숫자키만 입력
  return true;
 } else {
alert("숫자만 기입하십시오.");
  event.returnValue = false;
 }

//인풋박스에 반드시 포함 style="ime-mode:disabled;"
}	
//onkeypress="numberChk(this);"



<!--
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
//-->



function Js_Formatnumber(n) {
  var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
  n += '';                          // 숫자를 문자열로 변환

  while (reg.test(n))
    n = n.replace(reg, '$1' + ',' + '$2');

  return n;
}	

// 문자열 공백제거 함수 ##################################################
// Ex) str = "    테 스   트   ".stripspace(); => str = "테스트";
String.prototype.stripspace = function() {
	return this.replace(/ /g, '');
}

// 숫자 확인 ##################################################
function checkNum(value, isDec) {
	var RegExp;

	if (!isDec) isDec = false;
	RegExp = (isDec) ? /^-?[\d\.]*$/ : /^-?[\d]*$/;

	return RegExp.test(value)? true : false;
}
// 콤마(,) 제거 ##################################################
function stripComma(str) {
    var re = /,/g;
    return str.replace(re, "");
}

// 숫자 3자리수마다 콤마(,) 찍기 ##################################################
function formatComma(num, pos) {
	if (!pos) pos = 0;  //소숫점 이하 자리수
	var re = /(-?\d+)(\d{3}[,.])/;

	var strNum = stripComma(num.toString());
	var arrNum = strNum.split(".");

	arrNum[0] += ".";

    while (re.test(arrNum[0])) {
        arrNum[0] = arrNum[0].replace(re, "$1,$2");
    }

	if (arrNum.length > 1) {
		if (arrNum[1].length > pos) {
			arrNum[1] = arrNum[1].substr(0, pos);
		}
		return arrNum.join("");
	}
	else {
		return arrNum[0].split(".")[0];
	}
}
// 숫자 문자열에서 문자열 제거 ##################################################
function stripCharFromNum(value, isDec) {
	var i;
	var minus = "-";
	var nums = "1234567890"+((isDec) ? "." : "");
	var result = "";

	for(i=0; i<value.length; i++) {
		numChk = value.charAt(i);
		if (i == 0 && numChk == minus) {
			result += minus;
		}
		else {
			for(j=0; j<nums.length; j++) {
				if(numChk == nums.charAt(j)) {
					result += nums.charAt(j);
					break;
				}
			}
		}
	}
	return result;
}



// 숫자 문자열에서 "0" 시작문자 제거 ##################################################
function removePreZero(str) {
	var i, result;

	if (str == "0") return str;

	for (i = 0; i<str.length; i++) {
		if (str.substr(i,1) != "0") break;
	}

	result = str.substr(i, str.length-i);
	return result;
}

// 통화형태로 변환 ##################################################
function toCurrency(obj) {
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == "") return false;

	if (!checkNum(stripComma(num))) {
		//alert ("숫자만 입력해주세요.");
		num = stripCharFromNum(num, false);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(stripComma(num), false);
	num = removePreZero(num);
	obj.value = formatComma(num);
}


<!--
function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
//-->



function Js_Formatnumber(n) {
  var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
  n += '';                          // 숫자를 문자열로 변환

  while (reg.test(n))
    n = n.replace(reg, '$1' + ',' + '$2');

  return n;
}	





// 키 관련 함수 ##################################################
function blockKey(e) {
	var e = window.event || e;
	if (window.event) {
		e.returnValue = false;
	}
	else {
		if (e.which != 8) e.preventDefault(); // 8 : Back Space
	}
}

function blockEnter(e) {
	var e = window.event || e;
	if (window.event) {
		if (e.keyCode == 13) e.returnValue = false;
	}
	else {
		if (e.which == 13) e.preventDefault();
	}
}

function blockNotNumber(e) {
	var e = window.event || e;
	if (window.event) {
		if (e.keyCode < 48 || e.keyCode > 57) e.returnValue = false;
	}
	else {
		if (e.which != 8 && (e.which < 48 || e.which > 57)) e.preventDefault(); // 8 : Back Space
	}
}

function onEnter(e, exec) {
	var e = window.event || e;
	var keyCode = (window.event) ? e.keyCode : e.which;
	if (keyCode == 13) eval(exec);
}


// 숫자입력 확인 ##################################################
function numberOnly(obj, isDec) {
	if (!isDec) isDec = false;
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == "") return false;

	if (!checkNum(num, isDec)) {
		//alert ("숫자만 입력해주세요.");
		num = stripCharFromNum(num, isDec);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(stripComma(num), isDec);

	var arrNum = num.split(".");
	if (arrNum.length > 1) {
		obj.value = arrNum[0]+"."+arrNum[1];
	}
	else {
		obj.value = arrNum[0];
	}
}




