var inputData=document.getElementById("input")

function targetInput(x){
    inputData.value=inputData.value+x
  
}

function calculate(){
    const data=document.getElementById('input').value
    try{
        let result=eval(data)
        inputData.value=result
        if(inputData.value=="Undefined"){
            inputData.value="Enter Input"
            inputData.style.color='red'
            setTimeout(()=>{
               inputData.value=''
            },1000)
        }
        else{
            inputData.value=result
        }
    }
    catch{
        inputData.value="Enter the Proper Expression"
        inputData.style.color='red'
        setTimeout(()=>{
            inputData.value=''
         },1000)
    }
}

function allclear(){
    inputData.value=''
}

function remove(){
    inputData.value=inputData.value.slice(0,-1)
}