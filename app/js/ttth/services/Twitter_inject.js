// Get the ipcRenderer of electron
const {ipcRenderer} = require("electron");


/**
* @name serviceTwitterGetUnreadMessageCount
* @summary Gets the amount of unread DMs of the service Twitter
* @description Gets the amount of unread DMs of the service Twitter
*/
function serviceTwitterGetUnreadMessageCount()
{
    const getMessages = function getMessages()
    {
        let count = 0;
        const elem = document.querySelector('a[href="/messages"] div div');

        if (elem) {
          count = parseInt(elem.innerText, 10);
        }

        ipcRenderer.sendToHost(count);
    };

    console.log("serviceTwitterGetUnreadMessageCount ::: Total unread Twitter DMs: " + unreadCount);
}



// Do something according to a request of your mainview
ipcRenderer.on("request", function()
{
    ipcRenderer.sendToHost(serviceTwitterGetUnreadMessageCount());
});