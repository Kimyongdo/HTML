
  function showMapMaker(){
      //지도가 보여질 요소
      var e= document.getElementById('geo');

      //원하는 좌표 객체
      var issac= new google.maps.LatLng(37.495918, 127.062912);

      //표시되는 지도의 옵션객체
      var opts= {
          center: issac,
          zoom:14
      };

      //지도 보이기
      var map= new google.maps.Map( e , opts );

      //지도에 붙이 마커객체 생성
      var marker= new google.maps.Marker( {
          position: issac,
          title:"이삭토스트" 
      } );

      //지도객체에 마커 추가하기
      marker.setMap( map );

      //마커 클릭이벤트 반응하기
      marker.addListener('click', function(){
          open('http://www.isaac-toast.co.kr/bbs/content.php?co_id=found_info', '_blank');
      });

    
      var img='http://www.isaac-toast.co.kr/img/common/icon_shop1.png';
      
      //이삭토스트 지점들
      var bakery=[
          ['일원점', 37.491342, 127.082481],
          ['수서점', 37.489865, 127.102876],
          ['개포동역점', 37.489685, 127.068759],
          ['대치점', 37.495921, 127.063076]
      ];

      for(var i=0; i<bakery.length; i++){
          var title= bakery[i][0];
          var pos= new google.maps.LatLng(bakery[i][1], bakery[i][2]);

          var m= new google.maps.Marker({
              position: pos,
              title: title,
              icon: img,
              map: map,
              animation: google.maps.Animation.DROP,
          });

          m.addListener('click', function(){
              alert(this.getTitle());
          })
      }
  }



 
  function go_branch(city_do) {
    var arr = new Array("sejong","chungnam","jeju","gyeongnam","gyeongbuk","jeonbuk","chungbuk","gangwon","gyeonggi","jeonnam","ulsan","busan","daegu","daejeon","incheon","seoul","gwangju");
    var strArr = new Array("세종특별자치시","충청남도","제주특별자치도","경상남도","경상북도","전라북도","충청북도","강원도","경기도","전라남도","울산광역시","부산광역시","대구광역시","대전광역시","인천광역시","서울특별시","광주광역시");
    var idx = arr.indexOf(city_do);

    // 처음에 다 하얗게
    $.each(arr, function(index,item){
      $('#'+item).css("fill", "#ffffff");
    })
  //  마우스 올린 값만 색깔 변화
    var mapCondition = strArr[idx];
    if (mapCondition == '세종특별자치시') {
      $('#sejong').css("fill", "#cbc3ac");
    }else if (mapCondition == '충청남도') {
      $('#chungnam').css("fill", "#cbc3ac");
    }else if (mapCondition =='제주특별자치도') {
      $('#jeju').css("fill", "#cbc3ac");
    }else if (mapCondition =='경상남도') {
      $('#gyeongnam').css("fill", "#cbc3ac");
    }else if (mapCondition == '경상북도') {
      $('#gyeongbuk').css("fill", "#cbc3ac");
    }else if (mapCondition =='전라북도') {
      $('#jeonbuk').css("fill", "#cbc3ac");
    }else if (mapCondition =='충청북도') {
      $('#chungbuk').css("fill", "#cbc3ac");
    }else if (mapCondition =='경기도') {
      $('#gyeonggi').css("fill", "#cbc3ac");
    }else if (mapCondition == '전라남도') {
      $('#jeonnam').css("fill", "#cbc3ac");
    }else if (mapCondition =='울산광역시') {
      $('#ulsan').css("fill", "#cbc3ac");
    }else if (mapCondition =='부산광역시') {
      $('#busan').css("fill", "#cbc3ac");
    }else if (mapCondition == '대구광역시') {
      $('#daegu').css("fill", "#cbc3ac");
    }else if (mapCondition =='대전광역시') {
      $('#daejeon').css("fill", "#cbc3ac");
    }else if (mapCondition =='인천광역시') {
      $('#incheon').css("fill", "#cbc3ac");
    }else if (mapCondition =='서울특별시') {
      $('#seoul').css("fill", "#cbc3ac");
    }else if (mapCondition =='광주광역시') {
      $('#gwangju').css("fill", "#cbc3ac");
    }
}



// <!-- 전국지도 html에서 가져오기  -->

  $(document).ready(function(){
     $("#map").load("koreamap.html")     
  });
