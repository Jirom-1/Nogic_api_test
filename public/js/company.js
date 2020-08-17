
const company = document.getElementById('company_table')
var data = ''
var index = ''

// console.log(localStorage.getItem('cell_name'))
// console.log(localStorage.getItem('one_app'))
// console.log(localStorage.getItem('one_id'))

if(localStorage.getItem('one_app') === 'true'){
    data = JSON.parse(localStorage.getItem('one_data')).data
   // data = JSON.parse(localStorage.getItem('one_data')).data
    //console.log(localStorage.getItem('one_id')[1])

    var tr = "<tr>";


    tr += "<td>" +data.company.id + "</td>" + 
    "<td>" + data.company.org_name + "</td>"+
    "<td>" + data.company.category + "</td>"+
    "<td>" + data.company.nse_status + "</td>"+
    "<td>" + data.company.rc_no + "</td>"+
    "<td>" + data.company.email + "</td>"+
    "<td>" + data.company.dpr_no + "</td>"+
    "<td>" + data.company.tel + "</td>"+
    "<td>" + data.company.phone + "</td>"+
    "<td>" + data.company.staff_local + "</td>"+
    "<td>" + data.company.total_shares + "</td>"+
    "<td>" + data.company.facility_loc + "</td>"+
    "<td>" + data.company.facility + "</td>"+
    "<td>" + data.company.address + "</td>"+ 
    "<td>" + data.company.photo + "</td>" +
    "<td>"+ data.company.status + "</td>" + 
    "<td>" +data.company.wf_group_id +"</td>" + 
    "<td>" +data.company.staff_foreign + "</td>" + 
    "<td>" +data.company.tin +"</td>" + 
    "<td>" + data.company.data_of_incorporation + "</td>" + 
    "<td>" + data.company.assigned_shares + "</td>" + 
    "<td>" + data.company.crm_sc_id +"</td>" + 
    "<td>" + data.company.nogic_unique_id + "</td>" + "</tr>"
    
    /* We add the table row to the table body */
    company.innerHTML += tr;

}
else{
    //console.log(localStorage.getItem('cell_name')[1])
    console.log(localStorage.getItem('cell_name'))
    index = parseInt(localStorage.getItem('cell_name').substring(1))
    console.log(index)

    data = JSON.parse(localStorage.getItem('All_Apps')).data
    var tr = "<tr>";


    tr += "<td>" +data[index].company.id + "</td>" + 
    "<td>" + data[index].company.org_name + "</td>"+
    "<td>" + data[index].company.category + "</td>"+
    "<td>" + data[index].company.nse_status + "</td>"+
    "<td>" + data[index].company.rc_no + "</td>"+
    "<td>" + data[index].company.email + "</td>"+
    "<td>" + data[index].company.dpr_no + "</td>"+
    "<td>" + data[index].company.tel + "</td>"+
    "<td>" + data[index].company.phone + "</td>"+
    "<td>" + data[index].company.staff_local + "</td>"+
    "<td>" + data[index].company.total_shares + "</td>"+
    "<td>" + data[index].company.facility_loc + "</td>"+
    "<td>" + data[index].company.facility + "</td>"+
    "<td>" + data[index].company.address + "</td>"+ 
    "<td>" + data[index].company.photo + "</td>" +
    "<td>"+ data[index].company.status + "</td>" + 
    "<td>" +data[index].company.wf_group_id +"</td>" + 
    "<td>" +data[index].company.staff_foreign + "</td>" + 
    "<td>" +data[index].company.tin +"</td>" + 
    "<td>" + data[index].company.data_of_incorporation + "</td>" + 
    "<td>" + data[index].company.assigned_shares + "</td>" + 
    "<td>" + data[index].company.crm_sc_id +"</td>" + 
    "<td>" + data[index].company.nogic_unique_id + "</td>" + "</tr>"
        
        /* We add the table row to the table body */
    company.innerHTML += tr;
    
}




localStorage.setItem('one_app',false)







