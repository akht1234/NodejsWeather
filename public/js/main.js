const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById("cityName");
const city_name=document.getElementById("city_name")
const temp_status=document.getElementById("temp_status");
const temp =document.getElementById("temp");

const getInfo =async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Plz write the name before search`;
    }
    else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=05b62693217b011b6e346e7975798f3c`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData=[data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText=arrData[0].main.temp;

            const tempmood=arrData[0].weather[0].main;

            if (tempmood=="Clear"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if (tempmood=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if(tempmood=="Rain"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
        }catch{
            city_name.innerText=`Please enter a valid city name`;
        }
    }
}

submitBtn.addEventListener('click',getInfo);