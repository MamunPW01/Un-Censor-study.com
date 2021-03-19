// Initialize button with user's preferred color
let unlock = document.getElementById("unlock");

unlock.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: unlockContents,
  });
});

function unlockContents() {
  var fadedContent = document.getElementsByClassName("faded-content");
  var fadedContentArray = Array.prototype.slice.call(fadedContent);
  for (const fadedItem in fadedContentArray) {
    fadedContentArray[fadedItem].classList.remove("faded-content");
  }
  var hiddenContent = document.getElementsByClassName("hidden");
  var hiddenContentArray = Array.prototype.slice.call(hiddenContent);
  for (const hiddenItem in hiddenContentArray) {
    if (hiddenContentArray[hiddenItem].id == "" && hiddenContentArray[hiddenItem].className == "hidden") {
      hiddenContentArray[hiddenItem].classList.remove("hidden")
    }
  }
}