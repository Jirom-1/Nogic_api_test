const tbody = document.getElementById('table_body')
const form = document.querySelector('form')
var appID = document.querySelector('#appID')
var reqID = document.querySelector('#reqID')
const message = document.querySelector('#message-body')
const message1 = document.querySelector('#message-1')
const button = document.querySelector('button')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    appID = appID.value //get app ID
    reqID = reqID.value // get request ID
    
    if(!appID || !reqID){
        return message1.textContent = 'Please fill in the required fields'
    }
    message.textContent = 'Loading..'
    
        fetch('/get_all_positions/?appID='+appID+ '&reqID='+reqID+ '&sentinel=1').then((response) => {
            response.json().then((data) => {
                console.log(data)
                if (data.error) {
                    return message.textContent = 'Please enter valid IDs'
                } 
                else {
                    message.textContent = ''
                    
                    var tr = "<tr>";
                    tr += "<td>" +data.data.id + "</td>" 
                    + "<td>" + data.data.request_code + "</td>"
                    +"<td>" + data.data.quota_type + "</td>"
                    +"<td>" + data.data.job_title + 
                    "</td>"+"<td>" + data.data.old_job_title + 
                    "</td>"+"<td>" + data.data.no_of_expatriates + 
                    "</td>"+"<td>" + data.data.no_of_approved_expatriates + 
                    "</td>"+"<td>" + data.data.age_requirements + 
                    "</td>"+"<td>" + data.data.application.id + 
                    "</td>"+"</tr>"
                        
                    /* We add the table row to the table body */
                    tbody.innerHTML += tr;
                    //console.log(data)                    
                }
            })
        })        
    appID.value = ''
    reqID.value = ''
})










