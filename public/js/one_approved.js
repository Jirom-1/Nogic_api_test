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
        fetch('/get_approved_applications?id='+appID).then((response) => {
            response.json().then((data) => {
                localStorage.setItem('one_data',JSON.stringify(data))
                //console.log((localStorage.getItem('one_data')))
                if (data.error) {
                    return message.textContent = 'Please enter a vald ID'
                } 
                else {
                    message.textContent = ''
                    
                    var tr = "<tr>";
                    
                    
                    tr += "<td>" +data.data.id + "</td>" 
                    + "<td>" + data.data.application_status + "</td>"
                    +"<td>" + data.data.application_code + "</td>"
                    +"<td>" + data.data.certificate_no + 
                    "</td>"+"<td>" + data.data.date_issued + 
                    "</td>"+"<td>" + data.data.expiry_date + 
                    "</td>"+"<td>" + data.data.ncdmb_approval_date + 
                    "</td>"+"<td>" + data.data.is_archived + 
                    "</td>"+"<td>" + data.data.no_of_expatriates + 
                    "</td>"+"<td>" + data.data.no_of_new_quotas + 
                    "</td>"+"<td>" + data.data.no_of_renewals + 
                    "</td>"+"<td>" + data.data.no_of_redesignations + 
                    "</td>"+"<td>" + data.data.no_of_withdrawals + 
                    "</td>"+"<td><a href=\"/company\" id=\"t"+appID+"\">"
                    +data.data.company.org_name + "</a></td>"+"</tr>"
                        
                        /* We add the table row to the table body */
                    tbody.innerHTML += tr;
                    //console.log(data)                    
                }
            })
        })
        localStorage.setItem('one_id', appID)// store the app ID
        localStorage.setItem('one_app',true)// Tell company that we are viewing a single application
    }
})








