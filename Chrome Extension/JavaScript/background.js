let color= "#3AAA757";
chrome.runtime.onInstalled.addListener(() => {
   chrome.storage.sync.set ({ color });
   console.log (`Default background logo set to ${color}`); 
});