const eventSource = new EventSource('http://127.0.0.1:8080');

// Handler for events without an event type specified
eventSource.onmessage = (e) => {
    // Do something - event data etc will be in e.data
    console.log(e);
};
// Handler for events of type 'eventType' only
eventSource.addEventListener('myEvent', (e) => {
    // Do something - event data will be in e.data,
    // message will be of type 'eventType'
    console.log(1,e);
});

// We want to stop receiving events now
// eventSource.close();