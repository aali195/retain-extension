start();

function start() {
    chrome.storage.local.get('onoff', function(data) {
        var onoff = data.onoff;
        console.log('Setting value is ' + onoff);
        if(onoff == 1) {
            newtabOverride();
        }
    });
}

function newtabOverride() {
    chrome.tabs.onCreated.addListener(function(tab) {
        if (tab.url === 'chrome://newtab/') {
            chrome.tabs.update(tab.id, {url: "pages/collection.html"});
        }
    })
}
