const injectIntoTab = (tabId) => {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: injected
    },
    (result) => {
        console.log("YT to Ableton executed")
    })
}


const injected = () => {
    const url = window.location.href;
    const clipboard = `ytd: ${url}`;
    
    console.log("Ytd: sending url through clipboard")
    console.log(clipboard);
    navigator.clipboard.writeText(clipboard);
}

const id = chrome.contextMenus.create({
    id: 'yt2abl',
    title: "YT to Ableton",
    contexts: ['all']
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    injectIntoTab(tab.id);
});

chrome.action.onClicked.addListener((tab) => {
    injectIntoTab(tab.id);
});