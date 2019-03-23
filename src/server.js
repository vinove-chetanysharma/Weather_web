const express=require('express');
const hbs=require('hbs');
const geo=require('../../Weather-app/geo');
const wea=require('../../Weather-app/weather')

const path=require('path');

app=express();
const partialpath=path.join(__dirname,'../template/partial')
const publicpath=path.join(__dirname,'../public')
hbs.registerPartials(partialpath);
app.use(express.static(publicpath));
app.set('view engine','hbs');
const fullpath=path.join(__dirname,'../template/template1');

app.set('views',fullpath);



app.get('/',(req,res)=>{
    
    res.render("index",{
        title:'Weather'
    });
   
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
       return res.send({
            Error:"unable to fetch server"
        })

    }
    geo.geoSearch(req.query.address,(error,{latitude,longitude,City,Place}={})=>
    {
        if(error)
        {
            return res.send({error});
        }
        else
        {
          wea.weather(latitude,longitude,(error,{TimeZone,Summary,Icon,Temperature,Windspeed,CloudCover,UvIndex,Visibility})=>
          {
            if(error)
                {
                     return res.send({error});
                }
           else{
                   res.send({
                  City,
                  Place,
                  TimeZone,
                  Summary,
                  Icon,
                  Temperature,
                  Windspeed,
                  CloudCover,
                  UvIndex,
                  Visibility
             })
           }     
          })
        }
    })
 
})

app.get('/contact',(req,res)=>{
    res.render("contact",{
        title:'Contact Us'
    });
})

app.get('/about',(req,res)=>{
    res.render("about",{
        title:'About Us'
    });
})

app.get('/help',(req,res)=>{
    res.render("help",{
        title:'Need Help'
    });
})



app.get('*',(req,res)=>{
    res.render("error",{
        title:'Need Help'
    });
})
app.listen('3000',(req,res)=>{
    
    console.log("server in on");
})