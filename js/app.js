var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

$.getJSON('http://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){
  var mainResults = serverRes.results;
  var insertInfo = document.querySelector('#app-container');
    forEach(mainResults, function(listEl, index, array){

      var infoStr = '';

    infoStr = '<div class="column-container">';
      infoStr += '<h3>' + listEl.first_name + ' ' + listEl.last_name + '</h3>';
      infoStr += '<h4>' + listEl.title + ' -- ' + listEl.party + '-' + listEl.state_name + '</h4>';
      infoStr += '<ul>';
      infoStr += '<li>email: ' + listEl.oc_email + '</li>';
      infoStr += '<li>website: ' + listEl.website + '</li>';
      infoStr += '<li>facebook: ' + listEl.facebook_id + '</li>';
      infoStr += '<li>twitter: ' + listEl.twitter_id + '</li>';
      infoStr += '</ul>';
      infoStr += '<h4>Term End ' + listEl.term_end + '</h4>'
    infoStr += '</div>'

    insertInfo.innerHTML += infoStr;
  })
});
