﻿var finalString;
// gets selected text
document.onmouseup = function (e) {
	var t = '';
	selection = (document.all) ? document.selection.createRange().text : document.getSelection();
    t = selection.toString();

    var range = selection.getRangeAt(0);
    var cssclass = $(selection.anchorNode.parentNode).attr("class");
    $this.startPoint = selection.anchorOffset;
    $this.endPoint = selection.extentOffset;
    var newNode = document.createElement("mark");
    range.surroundContents(newNode);

    finalString = transliterate(t); // transliterates
    document.getElementById('romanised').innerHTML = finalString;
}
if (!document.all) document.captureEvents(Event.MOUSEUP);

var key = [];
key["Ё"]="YO";key["Й"]="I";key["Ц"]="TS";key["У"]="U";key["К"]="K";key["Е"]="E";key["Н"]="N";key["Г"]="G";key["Ш"]="SH";key["Щ"]="SCH";key["З"]="Z";
key["Х"]="H";key["Ъ"]="'";key["ё"]="yo";key["й"]="i";key["ц"]="ts";key["у"]="u";key["к"]="k";key["е"]="e";key["н"]="n";key["г"]="g";key["ш"]="sh";
key["щ"]="sch";key["з"]="z";key["х"]="h";key["ъ"]="'";key["Ф"]="F";key["Ы"]="I";key["В"]="V";key["А"]="A";key["П"]="P";key["Р"]="R";key["О"]="O";
key["Л"]="L";key["Д"]="D";key["Ж"]="ZH";key["Э"]="E";key["ф"]="f";key["ы"]="i";key["в"]="v";key["а"]="a";key["п"]="p";key["р"]="r";key["о"]="o";
key["л"]="l";key["д"]="d";key["ж"]="zh";key["э"]="e";key["Я"]="YA";key["Ч"]="CH";key["С"]="S";key["М"]="M";key["И"]="I";key["Т"]="T";key["Ь"]="'";
key["Б"]="B";key["Ю"]="YU";key["я"]="ya";key["ч"]="ch";key["с"]="s";key["м"]="m";key["и"]="i";key["т"]="t";key["ь"]="'";key["б"]="b";key["ю"]="yu";

function transliterate(word) {
	var result = "";
	for (var i = 0; i < word.length; i++) {
		var cyrillic = key[word.charAt(i) + ""];
		if (cyrillic != undefined) {
			result += cyrillic;
		} else {
			result += word.charAt(i) + "";
		}
	}
    return result;
}