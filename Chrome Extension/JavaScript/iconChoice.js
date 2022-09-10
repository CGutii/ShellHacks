let color= "#3AAA757";
chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set ({ color });
   console.log (`Defualt background color set to ${color}`); 
});