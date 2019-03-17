var checkbox;

document.addEventListener('DOMContentLoaded', function() {
    checkbox = document.querySelector('#onoff-checkbox');
    restoreSettings();
    console.log("Restored settings");
    checkbox.addEventListener('change', saveSettings);
});

function restoreSettings() {
    chrome.storage.local.get('onoff', function(data) {
        var onoff = data.onoff;
        if(onoff == 1) {
            checkbox.checked = true;
            console.log("Export checkbox 1");
        } else {
            checkbox.checked = false;
            console.log("Export checkbox 0");
        }
    });
}

function saveSettings(event){
    console.log("saving");
    if(checkbox.checked) {
        var value = 1;
        chrome.storage.local.set({'onoff': value}, function() {
            console.log("Saving setting 1");
        });
    } else {
        var value = 0;
        chrome.storage.local.set({'onoff': value}, function() {
            console.log("Saving setting 0");
        });
    }
    // restart other script
} 
