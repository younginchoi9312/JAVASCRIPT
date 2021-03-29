var req = new XMLHttpRequest( );            // 객체 생성
req.open("GET", "./json/image_list.json "); // 이미지 파일을 얻어 오도록 설정
req.onreadystatechange = function( ) {      // 콜백 함수 등록
    if (this.readyState = = 4) {            // 모든 데이터가 정상으로 수신되었을 때
        console.log(this.response);         // 응답 출력
    }
}
req.send( );    