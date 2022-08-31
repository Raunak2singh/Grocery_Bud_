
const navDate = document.getElementById('showDate')
var del = document.getElementById('deletebtn')
del.disabled = true
setInterval(()=>{
    var navdatevalue = new Date()
    navDate.innerHTML = navdatevalue.toString()
},1000)



const mainItemtable = document.getElementById('MainItemTable')

var count = 1;

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}





function addItem() {
    var name = document.getElementById('NameInput').value
    var type = document.getElementById('typeInput').value
    var price =document.getElementById('MoneyInput').value
    var paid = document.getElementById('paid').checked

    const date = new Date()
    // console.log()
    if(name && type && price && isNumeric(price)){
    
    document.getElementById("NameInput").style.border = "1px solid green"
    document.getElementById("NameInput").style.boxShadow = "none";
    document.getElementById("typeInput").style.border = "1px solid green"
    document.getElementById("typeInput").style.boxShadow = "none"
    document.getElementById("MoneyInput").style.border = "1px solid green"
    document.getElementById("MoneyInput").style.boxShadow = "none"
    
    var arr = [name,price,paid]
    // var id = 01;
    var tr = document.createElement('tr')
    const btn = document.createElement('button')
    btn.innerHTML = ">"
    btn.id = "ShowDetail"
    for(i =0;i<5;i++){
        var td = document.createElement('td')
        td.innerHTML = count
        if(i > 0){
            td.innerHTML = arr[i-1];
            if(td.textContent == "false"){
                td.style.color = "red"
            }else if(td.textContent == "true"){
                td.style.color = "green"

            }
            
            
        }
        if(i == 4){
            td.innerHTML = ""
            td.style.padding = "0px"
            td.style.width = "2%"
            btn.onclick =  function ss(){
               del.disabled = false
                
                console.log(name,type,price)
                const DetailName = document.getElementById("DetailName")
                const DetailType = document.getElementById("DetailType")
                const DetailDate = document.getElementById("DetailDate")
                const DetailPaid = document.getElementById("DetailPaid")
                const DetailTime = document.getElementById("DetailTime")
                const DetailPrice = document.getElementById("DetailPrice")
                const DetailId = document.getElementById('Detailid')
                DetailId.innerHTML = tr.childNodes[0].textContent
                DetailName.innerHTML = name;
                DetailType.innerHTML = type;
                DetailDate.innerHTML =  date.getDate()+"/" + date.getMonth() +"/"+ date.getFullYear()
                DetailPaid.innerHTML = paid;
                if(DetailPaid.textContent == "false"){
                    DetailPaid.style.color = "red"
                }else if(DetailPaid.textContent == "true"){
                    DetailPaid.style.color = "green"

                }
                DetailPrice.innerHTML = price + " rs /-";
                DetailPrice.style.color = "green"
            
                // DetailPrice.style.fontSize = "2px"
                DetailTime.innerHTML = (((date.getHours() > 12)? date.getHours() - 12 : date.getHours() )+":"+ date.getMinutes()+":"+date.getSeconds()+" "+((date.getHours() > 12)? "PM" : "AM"))
            }
            td.appendChild(btn)
        }
        tr.appendChild(td);
        
        
    }
    tr.id = "rowSelection";

    mainItemtable.appendChild(tr)
    count++;
    console.log(mainItemtable.childNodes)
    AllTotal();

    }else{
        if(!name){
            document.getElementById("NameInput").style.border = "1px solid red"
            document.getElementById("NameInput").style.boxShadow = "0px 0px 50px 1px rgba(255,0,0,0.1)"
        }else{
            document.getElementById("NameInput").style.border = "1px solid green"
            document.getElementById("NameInput").style.boxShadow = "none"
        }

        if(!type){

            document.getElementById("typeInput").style.border = "1px solid red"
            document.getElementById("typeInput").style.boxShadow = "0px 0px 50px 1px rgba(255,0,0,0.1)"
        }else{
            document.getElementById("typeInput").style.border = "1px solid green"
            document.getElementById("typeInput").style.boxShadow = "none"
        }

        if(!price){

            document.getElementById("MoneyInput").style.border = "1px solid red"
            document.getElementById("MoneyInput").style.boxShadow = "0px 0px 50px 1px rgba(255,0,0,0.1)"
        }else{
            document.getElementById("MoneyInput").style.border = "1px solid green"
            document.getElementById("MoneyInput").style.boxShadow = "none"
        }

        if(!isNumeric(price)){
            document.getElementById("MoneyInput").style.border = "1px solid red"
            document.getElementById("MoneyInput").style.boxShadow = "0px 0px 50px 1px rgba(255,0,0,0.1)"
            
        }   
        
    }


   
}


function DeleteItem(){
    if(mainItemtable.childNodes.length > 2){
    const DetailId = document.getElementById('Detailid')
    var l = Number(DetailId.textContent)

        l = l + 1
    // console.log(l)
    const s = mainItemtable.childNodes[l]
    s.remove()

    count = 1
    for(i = 2;i<mainItemtable.childNodes.length;i++){
        mainItemtable.childNodes[i].childNodes[0].textContent = count    
        count++;
    }
 
    DetailName.innerHTML = "";
    DetailType.innerHTML = "";
    Detailid.innerHTML = "";
    DetailTime.innerHTML = "";
    DetailPrice.innerHTML = "";
    DetailPaid.innerHTML = "";
    DetailDate.innerHTML = "";
    AllTotal()
    }

    del.disabled = true
}



function AllTotal(){
    var AllItem = 0;
    var paidItems = 0 , NoOfPaidItem = 0;
    var UnpaidItems = 0 , NoOfUnPaidItem = 0;
        for(i = 2;i<mainItemtable.childNodes.length;i++){
            AllItem += Number(mainItemtable.childNodes[i].childNodes[2].textContent)
            if(mainItemtable.childNodes[i].childNodes[3].textContent == "true"){
               paidItems += Number(mainItemtable.childNodes[i].childNodes[2].textContent);
               NoOfPaidItem++;
            }
            if(mainItemtable.childNodes[i].childNodes[3].textContent == "false"){
                UnpaidItems += Number(mainItemtable.childNodes[i].childNodes[2].textContent);
                NoOfUnPaidItem++;
             }
        }
     document.getElementById('noOfPaidItem').innerHTML = NoOfPaidItem
     document.getElementById('PaidItemPrice').innerHTML = paidItems
     document.getElementById('noOfUnPaidItem').innerHTML = NoOfUnPaidItem
     document.getElementById('UnPaidItemPrice').innerHTML = UnpaidItems
     document.getElementById('AllItemPrice').innerHTML = AllItem
     document.getElementById('NoOfAllItem').innerHTML = mainItemtable.childNodes.length - 2
    
}