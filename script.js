function exect() {
    let infoTemp=document.getElementById('temperature')
    infoTemp=Number(temperature.value)
    let seletcTemp=document.getElementsByName('selectTemp')
    let resultado=document.getElementById('result')

    if(infoTemp==""){
        alert("entre com um numero")
    }else if (seletcTemp[0].checked){
        let soma=(infoTemp * 9/5) + 32
        
        resultado.innerHTML=`${String(infoTemp.toFixed(2)).replace(".",",")}°C são ${soma.toFixed(2).replace(".",",") } graus fahrenheit`
        
    }if(seletcTemp[1].checked){
        let soma=(infoTemp -32)*5/9 
    
        resultado.innerHTML=`${String(infoTemp.toFixed(2)).replace(".",",")}°F são ${soma.toFixed("2").replace(".",",") } graus Celsius`

    }
    
  
}