function countSr(){
    var tableEle=document.getElementById('tableBody');

    for(let i=1;i<tableEle.rows.length;i++){  
        tableEle.rows[i].cells[0].textContent=i;          
    }
}

function addBtn(){
  var btn=  $("#TRow").clone().appendTo("#TBody");  
  $(btn).find("input").val('');    
  countSr();
}

function removeBtn(btn){  

    var index=$(btn).parent().parent().index();
        
    // avoiding to Delete the first Row
    if(index===0)  { 
        return;     
    } 
    
   $(btn).parent().parent().remove();      
   countSr();  
}

function calcW(btn){ 

    var index=$(btn).parent().parent().index();
    var length=document.getElementsByName("length")[index].value;
    var bredth=document.getElementsByName("bredth")[index].value;  
    var height=document.getElementsByName("height")[index].value; 
    var cft=document.getElementsByName("cft")[0].value;       
    var boxes= document.getElementsByName("boxes")[index].value; 
 
   var tempWeight=((length*bredth*height)/27000)*cft;    
       
   // rouding off
   var finalWeight=roundToNearestHalf(tempWeight*boxes);
     document.getElementsByName("weight")[index].value=finalWeight;    

      var flag=true;
     // auto incrementing the Rows after entering all the values 
     if (flag && length !== '' && bredth !== '' && height !== '' && cft!=='' && boxes!=='') {  
        addBtn();   
        flag=!flag;           
        volumetricWeight();    
    }   
    // volumetricWeight();   
}



/*
function volumetricWeight(){   
    
    let tableNode=document.getElementById('tableBody');
    var output=document.getElementById('volWeight');
    console.log(tableNode.rows[1].cells[4].value);    
     var totalWeight=0;       
    for(let i=1;i<tableNode.rows.length;i++){     
        var total=parseInt(tableNode.rows[i].cells[4].textContent);  
        // console.log(total);  
        // totalWeight += total || 0;               
    }
    // console.log(totalWeight);   
    output.value=totalWeight;     
}

*/
function volumetricWeight() {
    let weightNode = document.getElementsByName('weight');
    let output = document.getElementById('volWeight');
    let totalWeight = 0;
     let sum=0;
    // Loop through each row of the table
    for (let i = 0; i < weightNode.length; i++) {
        sum=weightNode[i].value;   
           console.log(sum);  
            totalWeight =+(totalWeight)+ +(sum);    
        
        
    }

    // Update the volumetric weight output field
    output.value = totalWeight;   
}
  
function roundToNearestHalf(num) {
    var remainder = num % 1;
    if (remainder >= 0.5) {
        return Math.ceil(num);
    } else {
        return Math.floor(num);
    }
}


function getPrint(){  
    window.print(); 
}
 
function logout() {
    localStorage.removeItem('isLoggedIn');  
    window.location.href = 'index.html'; // Redirect to login page after logout
}  
 