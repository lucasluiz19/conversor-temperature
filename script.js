function exect() {
    let infoTemp=document.getElementById('temperature')
    infoTemp=Number(temperature.value)
    let seletcTemp=document.getElementsByName('selectTemp')
    let resultado=document.getElementById('result')

    if(infoTemp==""){
        alert("entre com um numero")
    }else if (seletcTemp[0].checked){
        function soma() {
            
            
        }
        
        resultado.innerHTML=`${infoTemp} graus celsius`
        
    }if(seletcTemp[1].checked){
       (infoTemp -32) * 5/9
    
        resultado.innerHTML=`${infoTemp} graus fahrenheit`

    }
    
  
}