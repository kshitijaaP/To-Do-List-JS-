
  
   
   var output=""
   var taskArray=[];
   var k="";
   function submit()
   {
    var input = document.getElementById('tasks').value;
    taskArray.push(input);
    var table = document.getElementById("f");
    var row = table.insertRow(); 
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var pval = "";
            
            var editText="";
            var deleteText="";
            var deleteText="";
            var editVal="";
            for (var i = 0; i < taskArray.length; i++) {
                var pvalText=""
                // pval = pval + taskArray[i]+'<button  id="editBtn" onclick="editFunc('+i+')" class="editBtn" type="button" class="btn btn-primary btn-sm">Edit</button> '+ '<button id="DelBtn" type="button" class="DelBtn"   onclick="deleteFunc('+i+')"  class="btn btn-primary btn-sm">Delete</button> '+' </br>' + '</br> ';
                editVal= editVal + taskArray[i] ;
                pval = taskArray[i] + '</br>' ;
                
                editText='<button class="edit">Edit</button>' + '</br>';
                 
                // editText= editText +'<button  onclick="editFunc("'+ taskArray[i]+'")"  id="editBtn1'+i+ '" class="editBtn" type="button" class="btn btn-primary btn-sm">Edit</button>' + '</br>';
                deleteText= '<button class="delete" >Delete</button>' + '</br>';
                row.id = i; //you can add your id like this
                cell1.innerHTML = pval;
                cell2.innerHTML = editText;
                cell3.innerHTML = deleteText;
                
                
                              
            }
           
            cell2.addEventListener('click', () => {
                if (cell2.innerText.toLowerCase() == "save") {
                    cell2.innerHTML = '<button class="edit">Edit</button>';
                    // cell2.innerText = '<button class="edit">Edit</button>';
                     cell1.contentEditable = "false";
                 } else {
                    cell2.innerHTML = '<button class="edit">Save</button>';
                    //  cell2.innerText = "Save";
                   
                     cell2.focus();
                     cell1.contentEditable = "true";
                     row.id = i-1;
                 }   
             });
             document.getElementById('tasks').value="";
             cell3.addEventListener('click', () => {
                table.deleteRow(row.id);
            //   row.deleteRow(row.id);
             });
  
   }
   