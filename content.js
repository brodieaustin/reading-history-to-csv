/*var list_title = document.querySelector('.AdminTitle').innerText;
var grouper = document.querySelector('.GrouperInset');
var addresses_html = grouper.querySelectorAll('td > nobr');
var addresses = '';

  for (i in addresses_html){
    if (addresses_html[i].innerText != undefined){
      addresses += addresses_html[i].innerText + ',';
    }
  }

// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
    'title': list_title,
    'addresses': addresses
});
*/

var patron_name = document.querySelector('.welcome').innerText.replace(/Welcome\s/, '');
console.log(patron_name)
var data = [];
var list_container = document.querySelector('#CheckoutsHistoryList');

// if (list_container){
//   alert('there is history here!');
// }
// else{
//   alert('there is no history here');
// }

var list_headers = document.querySelector('.checkoutsHistoryHeader');
var list_lines = document.querySelectorAll('.checkoutsHistoryLine');

for (i=0; i < list_lines.length; i++){
  data[i] = []
  var line_data = list_lines[i].querySelectorAll('td');

  for (j=0; j < line_data.length; j++){
    data[i][j] = line_data[j].innerText;
  }
}

chrome.runtime.sendMessage({
    'data': data,
    'patron_name': patron_name
});
