Start the server. 
```javascript
node .\index.js 
```
Go to http://localhost:8080 and enter the following in the console.

```javascript
let sse = new EventSource("http://localhost:8080/events")

sse.onmessage = console.log
```

You can see the message stream you sent to the server in the console