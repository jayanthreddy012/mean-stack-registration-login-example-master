var pubnub = new PubNub({
    publishKey: 'demo',
    subscribeKey: 'demo'
});
var map = eon.map({
    id: 'map',
    mbId: 'YOUR_MAPBOX_ID',
    mbToken: 'YOUR_MAPBOX_TOKEN',
    channels: ['eon-map-multiple'],
    pubnub: pubnub,
    message: function (data) {
        map.setView(data[3].latlng, 13);
    }
});