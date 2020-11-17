const express = require(`express`)
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)
const ejs = require('ejs');
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.set(`view engine`, `ejs`)
app.use(express.static(`public`))
mongoose.connect("mongodb+srv://TmAdmin:magigingfreelancerako72215@cluster0.c7khy.mongodb.net/loremDB", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const loremSchema = new mongoose.Schema ({
    id: Number,
    email: String,
    message: String
})

const feedback = mongoose.model(`feedback`, loremSchema)

app.get(`/`, function(req, res){
    res.render(`home`)
})

app.get(`/gallery`, function(req, res){
    res.render(`gallery`)
})

app.get(`/pricing`, function(req, res){
    res.render(`pricing`)
})

app.get(`/contact`, function(req, res){
    res.render(`contact`)
})

app.post(`/contact`, function(req, res){

    const emailAdd = req.body.emailers
    const msgs = req.body.personMsg

    const message = new feedback ({
        email: emailAdd,
        message: msgs
    })

    message.save()

    feedback.find(function(err){
        if (message.email === emailAdd) {
            res.render(`contact2`)
        } else {
            console.log(err)
        }
    })
    

})

app.listen(process.env.PORT || 3000, function(){
    console.log(`Server is running`)
})

// asasdfsadf




