var request     = require('request');
var cheerio     = require('cheerio');
var URL         = require('url-parse');
var fs          = require('fs');

//Get every manga available on the site. Not sure if it should be used/needed
function getCompleteMangaList () {
  request('http://mangafox.me/manga/', function(error, response, body) {
    if (response.statusCode !== 200) {
      console.log("Error loading manga list, code "+ response.statusCode);
      return;
    }
    var $ = cheerio.load(body);
    var mangaLinkList = new Set();
    $('.manga_open').each(function() {
      console.log(this.attribs.href);
      mangaLinkList.add(this.attribs.href);
    });
    var tempArray = Array.from(mangaLinkList);
    var jsonList = JSON.stringify(tempArray);
    console.log(jsonList);
  });
}

//Get manga page. Use name as a search term? not sure yet
function getManga () {

}

//Get every chapter available from the manga
//Returns a javascript Set() with all links (href)
function getChapterList (urlArg) {
  var url = urlArg.replace('http://ma', 'http://m.ma');
  request(url, function (error, response, body) {
    if (response.statusCode !== 200) {
      console.log("Failed to load page, code: " + response.statusCode);
      return;
    }
    var $ = cheerio.load(body);
    var chapLinkList = new Set();

    $('.chlist a').each(function() {
      console.log(this.attribs.href);
      chapLinkList.add(this.attribs.href);
    });
    return chapLinkList;
  });
}

//Get manga metada available.
//Ideally it should crossreference mangaupdates for more complete metadata
function getMangaData () {

}

//Download every image on the chapter and save to system
function downloadChapter () {

}
