const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(e) =>{
    e.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal ===""){
        city_name.innerText = `Please write the name before search`;
    }else{
        try{
            let url1 = `api.openweathermap.org/data/2.5/weather?q=${cityVal}`;
            // console.log(url)
            const Data1 = await fetch(url1);
            const data = await response.json(Data1);
            // console.log(data)
            const arrData = [data];
            // console.log(arrData)
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather.main;
        }catch{
            city_name.innerText = `Please write the city name properly`;
        }
        
    }
}
submitBtn.addEventListener('click', getInfo);