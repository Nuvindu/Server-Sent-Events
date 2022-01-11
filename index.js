const app = require('express')();


app.get('/', (req,res) => {
    res.send("Hello!");
})

app.get('/events', (req,res)=> {
    res.setHeader("Content-Type", "text/event-stream")
    send(res)
})

let i = 0;
function send(res){
    res.write("data: "+`Sending Data - ${i}\n\n`) //  use /n/n to signal it is an event
    i++
    setTimeout(() => send(res),1000)
}
app.listen(8080)

console.log('listening on port 8080')