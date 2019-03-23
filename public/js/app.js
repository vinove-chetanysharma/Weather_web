console.log('hello bro');


var search=document.getElementById('button');
search.addEventListener('click',(e)=>{
    document.getElementById('p1').innerHTML='Fetching...';
    e.preventDefault();
    var place=document.getElementById('place').value;
    if(!place)
    {
      document.getElementById('p1').innerHTML='ERROR-:101 NO ADDRESS FOUND !!!';
    }
    else{
    fetch(`http://localhost:3000/weather?address=${place}`).then((response)=>{
        
    response.json().then((data)=>{
      
        if(data.error)
          {
           document.getElementById('p1').innerHTML=data.error;

          }
       else
          { 
            document.getElementById('p1').innerHTML=data.City;
            document.getElementById('p2').innerHTML=data.Place;
            document.getElementById('p3').innerHTML=data.Summary;
            document.getElementById('p4').innerHTML=data.Icon;
            document.getElementById('p5').innerHTML=data.Temperature;
            document.getElementById('p6').innerHTML=data.Windspeed;
            document.getElementById('p7').innerHTML=data.CloudCover;
            document.getElementById('p8').innerHTML=data.UvIndex;
            document.getElementById('p9').innerHTML=data.Visibility;
            document.getElementById('p10').innerHTML=data.TimeZone;
             
          }
    })

    document.getElementById('p1').innerHTML=' ';
    document.getElementById('p2').innerHTML=' ';
    document.getElementById('p3').innerHTML=' ';
    document.getElementById('p4').innerHTML=' ';
    document.getElementById('p5').innerHTML=' ';
    document.getElementById('p6').innerHTML=' ';
    document.getElementById('p7').innerHTML=' ';
    document.getElementById('p8').innerHTML=' ';
    document.getElementById('p9').innerHTML=' ';
    document.getElementById('p10').innerHTML=' ';
})}



})
    

