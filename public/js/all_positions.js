const tbody = document.getElementById('table_body')
const form = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message-body')
const message1 = document.querySelector('#message-1')


// const test = (cell)=>{
//     localStorage.setItem('cell_name', cell) //save the APP ID
// }

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const appID = search.value //get search text
    //console.log(appID)
    message.textContent = 'Loading..'
    
    if(!appID){
        return message1.textContent = 'You must provide an Application ID'
    }

    else{
        fetch('/get_all_positions?id='+appID).then((response) => {
            response.json().then((data) => {
                //localStorage.setItem('one_data',JSON.stringify(data))
                //console.log((localStorage.getItem('one_data')))
                console.log(data)
                if (data.error) {
                    return message.textContent = data.error
                } 
                else {
                    message.textContent = ''
                    for( var i = 0; i< data.data.length; i ++){
                        var tr = "<tr>";
                  
                    tr += "<td>" +data.data[i].id + "</td>" 
                    + "<td>" + data.data[i].request_code + "</td>"
                    +"<td>" + data.data[i].quota_type + "</td>"
                    +"<td>" + data.data[i].job_title + 
                    "</td>"+"<td>" + data.data[i].old_job_title + 
                    "</td>"+"<td>" + data.data[i].no_of_expatriates + 
                    "</td>"+"<td>" + data.data[i].no_of_approved_expatriates + 
                    "</td>"+"<td>" + data.data[i].age_requirements + 
                    "</td>"+"<td>" + data.data[i].application.id + 
                    "</td>"+"</tr>"
                        
                        /* We add the table row to the table body */
                    tbody.innerHTML += tr;
                    //console.log(data)  
                    }
                                      
                }
            })
        })
        localStorage.setItem('one_id', appID)// store the app ID
        localStorage.setItem('one_app',true)// Tell company that we are viewing a single application
    }
})








