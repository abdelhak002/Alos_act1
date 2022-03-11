
// var Request = unirest.get('http://localhost:3000/recipes')
var Request = unirest.get('unirest');
  var req = unirest("GET","http://localhost:3000/recipes")
req.headers({
    "cache-control":"no-cache",
})
req.end(function (res){
    if(res.error) throw new error (res.error)
    console.log(res.body)
})
async function get(){
   var app=document.getElementById("app")
   var app3=document.getElementById("app2")
   let template=""
   var template2=""
   const api="http://localhost:3000/recipes"
    const response= await fetch(api);
    const data= await response.json(); 
    data.forEach(element => {
        var titlle= element.title;
        template += `${element.id},${element.pricePerServing},${element.cuisines},${element.readyInMinutes}`
        var startsWit=titlle.startsWith("M")
        if(startsWit==true){
          template2 +=`${element.title}`
        }
        
    });
    app.innerHTML=template;
    app3.innerHTML=template2;
    console.log(data)
}
get()
