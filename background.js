start();

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
        if (request.greeting == 2) {
            start();
            sendResponse({farewell: "Updated"});
        }
    }
);

function start() {
    chrome.storage.local.get('onoff', function(data) {
        var onoff = data.onoff;
        console.log('Setting value is ' + onoff);
        if (onoff == 1) {
            newtabOverride();
        }
    });
}

function newtabOverride() {
    chrome.tabs.onCreated.addListener(function(tab) {
        if (tab.url === 'chrome://newtab/') {
            chrome.tabs.update(tab.id, {url: "localhost:8000/progress/review"});
        }
    })
}
