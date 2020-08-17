const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')


// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

const options = { method: 'GET',
  url: 'https://api.eu-gb.apiconnect.appdomain.cloud/cloudtestncdmbgovng-dev/nogic-apic-test/api/v1/expatriate-quotas/',
  headers: 
   { accept: 'application/json',
     'x-ibm-client-id': 'd8c1ac4f-0b59-4b3b-bb05-13445a281a10' } 
    };

app.get('', (req, res) => {
    res.render('index', {
        title: 'NOGIC API TEST',
        name: 'Jirom'
    })
})



app.get('/get_approved_applications/',async (req, res)=>{

    if(!req.query.id){ //if this is coming from all applications
        req.query.id = '?per_page=136' // change url accordingly
    }
    
    options.url = options.url + req.query.id
    //console.log(options.url)
    await request(options, function (error, response, body) {
        if (error) {
            return res.send(error)
        
        }
      
        res.send(body)
       
    });
    options.url = 'https://api.eu-gb.apiconnect.appdomain.cloud/cloudtestncdmbgovng-dev/nogic-apic-test/api/v1/expatriate-quotas/'
})

app.get('/get_all_positions', async (req, res) =>{
    if(req.query.sentinel){ //if this is being valled from one position
        options.url = options.url + req.query.appID + '/requests/' + req.query.reqID // Change the url accordingly
    }
    else{
        options.url = options.url + req.query.id + '/requests'
    }

    await request(options, function (error, response, body) {
        if (error) return console.error('Failed: %s', error.message);
      
        res.send(body)
       
    });
    options.url = 'https://api.eu-gb.apiconnect.appdomain.cloud/cloudtestncdmbgovng-dev/nogic-apic-test/api/v1/expatriate-quotas/'

})

app.get('/view_one_application',(req,res)=>{
    res.render('view_one_application')
})

app.get('/view_all_positions',(req,res)=>{
    res.render('view_all_positions')
})

app.get('/view_one_position',(req,res)=>{
    res.render('view_one_position')
})

app.get('/company',(req,res)=>{
    res.render('company')
})

app.get('/view_all_applications',(req, res)=>{
    res.render('view_all_approved_application')   
})

app.listen(port,()=>{
    console.log('App is started on port '+ port)
})