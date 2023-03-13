let goButton = document.getElementById('go-button');
let termInput = document.getElementById('term-input');
let removeBlankTerms = document.getElementById('remove-blank-terms');
let removeLastWord = document.getElementById('remove-last-word');
let removeFirstWord = document.getElementById('remove-first-word');
let afterText = document.getElementById('after-text');

let openedTabs = [];

goButton.addEventListener('click',()=>{
  checkPopupPermissions();
});

function checkPopupPermissions(callback) {
  window.open().close();
  try {
    window.open().close();
    startTermSearch();
  } catch {
    setTimeout(function () {
      alert('Popup permissions denied, allow then try again');
    }, 10);
  };
};

function startTermSearch() {
  let terms = termInput.value.split('\n');
  terms.forEach(term => {
    if (!(removeBlankTerms.checked && term.length === 0)) {
      formattedTerm = term;
      if (removeLastWord.checked) {
        formattedTerm = formattedTerm.substring(0, formattedTerm.lastIndexOf(" "));
      };
      if (removeFirstWord.checked) {
        formattedTerm = formattedTerm.substring(formattedTerm.indexOf(" ")+1);
      };
      formattedTerm = formattedTerm + " " + afterText.value
      formattedTerm = formattedTerm.replace(/ /g, "+");
      console.log(formattedTerm);
      let currentWindow = window.open('https://www.google.com/search?q='+formattedTerm,'_blank');
      openedTabs.push(currentWindow);
    };
  });
}
