function go_Home(){
	location.href="/";
}

function popup_close(){
	self.close();
}

function modal_close_LT(){	
	//모달 닫으면서 부모창 reload하기
	parent.location.reload();	
	parent.close_xbox();
}

/** 상단 언어팩 **/
function Language_SettingH(Language){
	var Language = Language;
	var Location_URL = location.href;	
	location.href="/_admin/_homepage/_inc/homepage_language_sql.asp?Language="+escape(Language)+"&Location_URL="+escape(Location_URL);
	
}	

/** 상단 언어팩 **/


function HolidayCalendar(NationCode, parColumnName,HolidayType,a_Seq){
	
	var PopUpType = "PopUp"
	var NationCode = NationCode;
	var parColumnName = parColumnName;
	var HolidayType = HolidayType;
	var a_Seq = a_Seq;	
	var popupX = (window.screen.width / 2) - (200 / 2);
	var popupY= (window.screen.height /2) - (300 / 2);													
		
	window.open('/_admin/_homepage/_common/CalendarHoliday_1Month_pop.asp?PopUpType='+PopUpType+'&NationCode='+NationCode+'&parColumnName='+parColumnName+'&HolidayType='+HolidayType+'&a_Seq='+a_Seq, '', ' location=no, scrollbars=no, status=no, height=380, width=400, left='+ popupX + ', top='+ popupY + ', screenX='+ popupX + ', screenY= '+ popupY);
	
	
}	

function HolidayCalendar_Modal(Month, parColumnName,HolidayType,a_Seq){
	
	var PopUpType = "Modal"
	var Month = Month;
	var parColumnName = parColumnName;
	var HolidayType = HolidayType;
	var a_Seq = a_Seq;												
	
	if(Month=="1Month"){		
		open_box('/_admin/_homepage/_common/CalendarHoliday_1Month_pop.asp?PopUpType='+PopUpType+'&parColumnName='+parColumnName+'&HolidayType='+HolidayType+'&a_Seq='+a_Seq, 300, 340);
	}	
		
}	


function email_chk(ColumnName, PageName){
	var f=document.getElementById(""+PageName);
	if(f.Select_Email.value== "" ){
		document.getElementById(""+ColumnName).value = ""
		document.getElementById(""+ColumnName).focus();
	}
	else {
		document.getElementById(""+ColumnName).value = f.Select_Email.value;
	return;
	}
}



function sns_chk(ColumnName, PageName){
	var f=document.getElementById(""+PageName);
	if(f.Select_SNSCompany.value== "" ){
		document.getElementById(""+ColumnName).value= ""
		document.getElementById(""+ColumnName).focus();
	}
	else {
		document.getElementById(""+ColumnName).value = f.Select_SNSCompany.value;
	return;
	}
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

//모바일에서 maxlength 사용 maxlength="4" oninput="maxLengthCheck(this)"
function maxLengthCheck(object){
    if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
    }    
}



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

// 10보다 작을경우 0붙이기 ##################################################
function PlusZero(n) {
	var n = n
	if(parseInt(n) < parseInt(10)){
		result = "0"+n		
	}else{
		result = n	
	}	
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


function printWindow() {

	document.getElementById("factory").printing.header = "" // 머릿말
	document.getElementById("factory").printing.footer = "" // 꼬릿말
	document.getElementById("factory").printing.portrait = true // true이면 세로 인쇄, false이면 가로 인쇄.
	document.getElementById("factory").printing.leftMargin = 7.0 // 왼쪽 여백
	document.getElementById("factory").printing.topMargin = 7.0 // 오른쪽 여백
	document.getElementById("factory").printing.rightMargin = 7.0 // 윗쪽 여백
	document.getElementById("factory").printing.bottomMargin = 7.0 // 아랫쪽 여백
	document.getElementById("factory").printing.Print(false, window)
	
} 

