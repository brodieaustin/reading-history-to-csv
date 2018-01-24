//adapted from https://github.com/markashleybell/mab_bookmark_extension

document.addEventListener('DOMContentLoaded', function() {

  function onPageDetailsReceived(pageDetails)  {
    var patron_name = document.getElementById('patron-name');
    var download_button = document.getElementById('download-button');

    patron_name.innerText = pageDetails.patron_name;

    var csv = 'Title / Author,Checked Out,Returned\n';
     pageDetails.data.forEach(function(row) {
        row.forEach(function(item){
          csv += '"' + item + '",'
        });
        csv += "\n";
     });

     console.log(csv);
     var csv_link = document.createElement('a');
     csv_link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     csv_link.target = '_blank';
     csv_link.download = 'readinghistory.csv';
     csv_link.innerText = 'Download Reading History'

     download_button.appendChild(csv_link)
  }

  // Get the event page
  chrome.runtime.getBackgroundPage(function(eventPage) {
      eventPage.getPageDetails(onPageDetailsReceived);
  });

}, false);

// function createCSV(data){
//   var csv = 'Title / Author,Checked Out,Returned\n';
//    data.forEach(function(row) {
//            csv += row.join(',');
//            csv += "\n";
//    });
//
//    console.log(csv);
//    var csv_link = document.createElement('a');
//    csv_link.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
//    csv_link.target = '_blank';
//    csv_link.download = 'readinghistory.csv';
// }
