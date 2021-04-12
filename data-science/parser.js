
function send(res, filename, pageNo) {
    let data = {
        filename, res, pageNo
    }

     fetch("http://localhost:4000/v1/book/"+filename+"/page-"+pageNo, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: res
      });
}

function call(referrer, filename, pageNo) {


    fetch("https://www.bookswagon.com/ajax.aspx/GetCategorySearchResult", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:87.0) Gecko/20100101 Firefox/87.0",
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/json; charset=utf-8",
            "X-Requested-With": "XMLHttpRequest"
        },
        "referrer": referrer,
        "body": "{\"searchTerm\":\"*:*\",\"ID_Search\":0,\"next_item_index\":\" "+pageNo+" \",\"filter\":\"category\",\"ID_ProductType\":1,\"IsAlterQuery\":true,\"FilterQuery\":\"fq=CategoryID:(252 253 254 255 256 257 258 259 260 261 262 263 264 265 266 267 268 269 270 271 272 273 274 275)\"}",
        "method": "POST",
        "mode": "cors"
    }).then((res)=> {
        res.text().then((s) => send(s, filename, pageNo));


    })

}



referrer = "https://www.bookswagon.com/literature-literary-studies-books"
filename = referrer.split("https://www.bookswagon.com/")[1]
var count = 100;//1625287
let pagesize = 15
for(var i = 0; i < count/pagesize; i++){
     doSetTimeout(i);
   
}


function doSetTimeout(pageNo) {
  setTimeout(function() { 
   call(referrer, filename, pageNo);  
    }, 500*pageNo);
}
