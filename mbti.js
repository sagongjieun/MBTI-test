let questions = { //질문지
    1 : {"question": "문제 1번", "type": "EI", "A": "E", "B": "I"},
    2 : {"question": "문제 2번", "type": "EI", "A": "E", "B": "I"},
    3 : {"question": "문제 3번", "type": "EI", "A": "E", "B": "I"},
    4 : {"question": "문제 4번", "type": "SN", "A": "S", "B": "N"},
    5 : {"question": "문제 5번", "type": "SN", "A": "S", "B": "N"},
    6 : {"question": "문제 6번", "type": "SN", "A": "S", "B": "N"},
    7 : {"question": "문제 7번", "type": "TF", "A": "T", "B": "F"},
    8 : {"question": "문제 8번", "type": "TF", "A": "T", "B": "F"},
    9 : {"question": "문제 9번", "type": "TF", "A": "T", "B": "F"},
    10 : {"question": "문제 10번", "type": "JP", "A": "J", "B": "P"},
    11 : {"question": "문제 11번", "type": "JP", "A": "J", "B": "P"},
    12 : {"question": "문제 12번", "type": "JP", "A": "J", "B": "P"},
}

let results = { //mbti 결과지
    "ISTJ": {"job": "ISTJ", "explain": "설명", "img": "img/mcdonald.png"},
    "ISFJ": {"job": "ISFJ", "explain": "설명", "img": "img/mcdonald.png"},
    "INFJ": {"job": "INFJ", "explain": "설명", "img": "img/mcdonald.png"},
    "INTJ": {"job": "INTJ", "explain": "설명", "img": "img/mcdonald.png"},
    "ISTP": {"job": "ISTP", "explain": "설명", "img": "img/mcdonald.png"},
    "ISFP": {"job": "ISFP", "explain": "설명", "img": "img/mcdonald.png"},
    "INFP": {"job": "INFP", "explain": "설명", "img": "img/mcdonald.png"},
    "INTP": {"job": "INTP", "explain": "설명", "img": "img/mcdonald.png"},
    "ESTJ": {"job": "ESTJ", "explain": "설명", "img": "img/mcdonald.png"},
    "ESFJ": {"job": "ESFJ", "explain": "설명", "img": "img/mcdonald.png"},
    "ENFJ": {"job": "ENFJ", "explain": "설명", "img": "img/mcdonald.png"},
    "ENTJ": {"job": "ENTJ", "explain": "설명", "img": "img/mcdonald.png"},
    "ESTP": {"job": "ESTP", "explain": "설명", "img": "img/mcdonald.png"},
    "ESFP": {"job": "ESFP", "explain": "설명", "img": "img/mcdonald.png"},
    "ENFP": {"job": "ENFP", "explain": "설명", "img": "img/mcdonald.png"},
    "ENTP": {"job": "ENTP", "explain": "설명", "img": "img/mcdonald.png"}
}

let num = 1;
let countOfQuestion = Object.keys(questions).length; //질문지 문항 개수

function start() { 
    $(".start").hide(); //시작화면 숨기기
    $(".question").show(); //질문지 화면으로 화면전환
    next();
}

$("#A").click(function() { //선택지 위에꺼 누르면
    let mbtiType = $("#mbti").val();
    let preValue = $("#"+mbtiType).val(); //mbti 유형별 value 가져오기
    $("#"+mbtiType).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function() { //선택지 밑에꺼 누르면
    next();
});

function next() {
    if (num === countOfQuestion + 1) { //질문지 문항 수를 넘어가면
        $(".question").hide(); //질문지 화면 숨기고
        $(".result").show(); //결과 화면으로 화면전환

        let mbti = "";
        ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
        ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
        ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
        ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";

        $("#img").attr("src",results[mbti]["img"]);
        $("#job").html(results[mbti]["job"]);
        $("#explain").html(results[mbti]["explain"]);
    } 
    else {
        $(".progress-bar").attr('style','width: calc(100/12*'+(num-1)+'%)');
        $("#question").html(questions[num]["question"]);
        $("#mbti").val(questions[num]["type"]);
        $("#A").html(questions[num]["A"]);
        $("#B").html(questions[num]["B"]);
        num++;
    }
}