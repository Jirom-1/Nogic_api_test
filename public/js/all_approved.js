const tbody = document.getElementById('table_body')
const message = document.querySelector('#message-body')


message.textContent = 'Loading..'

const test = (cell)=>{
    localStorage.setItem('cell_name', cell)
}
fetch('/get_approved_applications/').then((response) => {
    response.json().then((data) => {
        localStorage.setItem('All_Apps',JSON.stringify(data))
        if (data.error) {
            message.textContent = data.error
        } 
        else {
            //console.log(data.data[0].id)
            
            for (var i = 0; i < data.data.length; i++) {
                var tr = "<tr>";
            
            
                tr += "<td>" +data.data[i].id + "</td>" + "<td>" + data.data[i].application_status + "</td>"+"<td>" + data.data[i].application_code + "</td>"+"<td>" + data.data[i].certificate_no + "</td>"+"<td>" + data.data[i].date_issued + "</td>"+"<td>" + data.data[i].expiry_date + "</td>"+"<td>" + data.data[i].ncdmb_approval_date + "</td>"+"<td>" + data.data[i].is_archived + "</td>"+"<td>" + data.data[i].no_of_expatriates + "</td>"+"<td>" + data.data[i].no_of_new_quotas + "</td>"+"<td>" + data.data[i].no_of_renewals + "</td>"+"<td>" + data.data[i].no_of_redesignations + "</td>"+"<td>" + data.data[i].no_of_withdrawals + "</td>"+"<td><a href=\"/company\" id=\"t"+i+"\" onclick={test(this.id)}>" + data.data[i].company.org_name + "</a></td>"+"</tr>"
                
                /* We add the table row to the table body */
                tbody.innerHTML += tr;
            }
        }
        message.textContent = ''
    })
})






