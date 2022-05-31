
// get checked button 
let india = document.getElementById('India');
let unitedKingdom = document.getElementById('UnitedKingdom');
let australia = document.getElementById('Australia');
let argentina = document.getElementById('Argentina');
let newZealand = document.getElementById('NewZealand');

function getData() {
    // api key 
    let ApiKey = "6b18e29758f945d6ad37b0d6bb1010d2";

    // the radio button checked for if else condtion 
    if (india.checked) {
        url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${ApiKey}`;

        // use fetch api 
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            // get div and add news in that div.collepsNews
            let collepsNews = document.getElementById('collepsNews');
            let articles = data.articles;
            let NewHtml = '';
            articles.forEach(function (element, index) {
                let news = `
                        <div style="text-align: left; margin: 1rem;" class="cared" id="news">
                            <p>
                                <button  style="width: 100%; text-align: left;" class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseWidthExample${index + 1}" aria-expanded="false" aria-controls="collapseWidthExample">
                                    <img style="width: 100px;  border: 2px solid whitesmoke;" src="${element.urlToImage}" alt="">
                                    ${index + 1}    ${element.title} 
                                    
                                </button> 
                            </p>
                            <div style="margin: auto;" class="collapse collapse-horizontal "  id="collapseWidthExample${index + 1}">
                                <div class="card card-body"  style="margin: auto;width: 100%;" >
                                    ${element.content} <a href="${element.url}" target="_blank"> Read More </a>
                                </div>
                            </div>
                        </div> `
                NewHtml += news;
            });
            collepsNews.innerHTML = NewHtml;
        })
    }
    else if (unitedKingdom.checked) {
        url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${ApiKey}`;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            let collepsNews = document.getElementById('collepsNews');
            let articles = data.articles;
            let NewHtml = '';
            articles.forEach(function (element, index) {
                let news = `
                            <div style="text-align: left; margin: 1rem;" class="cared" id="news">
                                <p>
                                    <button  style="width: 100%; text-align: left;" class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseWidthExample${index + 1}" aria-expanded="false" aria-controls="collapseWidthExample">
                                        <img style="width: 100px;  border: 2px solid whitesmoke;" src="${element.urlToImage}" alt="">
                                        ${index + 1}    ${element.title} 
                                        
                                    </button> 
                                </p>
                                <div style="margin: auto;" class="collapse collapse-horizontal "  id="collapseWidthExample${index + 1}">
                                    <div class="card card-body"  style="margin: auto;width: 100%;" >
                                        ${element.content} <a href="${element.url}" target="_blank"> Read More </a>
                                    </div>
                                </div>
                            </div> `
                NewHtml += news;
            });
            collepsNews.innerHTML = NewHtml;
        })
    }
    else if (australia.checked) {
        url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${ApiKey}`
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            let collepsNews = document.getElementById('collepsNews');
            let articles = data.articles;
            let NewHtml = '';
            articles.forEach(function (element, index) {
                let news = `
                            <div style="text-align: left; margin: 1rem;" class="cared" id="news">
                                <p>
                                    <button  style="width: 100%; text-align: left;" class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseWidthExample${index + 1}" aria-expanded="false" aria-controls="collapseWidthExample">
                                        <img style="width: 100px;  border: 2px solid whitesmoke;" src="${element.urlToImage}" alt="">
                                        ${index + 1 }    ${element.title} 
                                        
                                    </button> 
                                </p>
                                <div style="margin: auto;" class="collapse collapse-horizontal "  id="collapseWidthExample${index + 1}">
                                    <div class="card card-body"  style="margin: auto;width: 100%;" >
                                        ${element.content} <a href="${element.url}" target="_blank"> Read More </a>
                                    </div>
                                </div>
                            </div> `
                NewHtml += news;
            });
            collepsNews.innerHTML = NewHtml;
        })
    }
    else if (argentina.checked) {
        url = `https://newsapi.org/v2/top-headlines?country=ar&apiKey=${ApiKey}`
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            let collepsNews = document.getElementById('collepsNews');
            let articles = data.articles;
            let NewHtml = '';
            articles.forEach(function (element, index) {
                let news =  `
                            <div style="text-align: left; margin: 1rem;" class="cared" id="news">
                                <p>
                                    <button  style="width: 100%; text-align: left;" class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseWidthExample${index + 1}" aria-expanded="false" aria-controls="collapseWidthExample">
                                        <img style="width: 100px;  border: 2px solid whitesmoke;" src="${element.urlToImage}" alt="">
                                        ${index + 1}    ${element.title} 
                                        
                                    </button> 
                                </p>
                                <div style="margin: auto;" class="collapse collapse-horizontal "  id="collapseWidthExample${index + 1}">
                                    <div class="card card-body"  style="margin: auto;width: 100%;" >
                                        ${element.content} <a href="${element.url}" target="_blank"> Read More </a>
                                    </div>
                                </div>
                            </div> `
                NewHtml += news;
            });
            collepsNews.innerHTML = NewHtml;
        })
    }
    else {
        url = `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${ApiKey}`
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            let collepsNews = document.getElementById('collepsNews');
            let articles = data.articles;
            let NewHtml = '';
            articles.forEach(function (element, index) {
                let news =  `
                            <div style="text-align: left; margin: 1rem;" class="cared" id="news">
                                <p>
                                    <button  style="width: 100%; text-align: left;" class="btn btn-primary" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseWidthExample${index + 1}" aria-expanded="false" aria-controls="collapseWidthExample">
                                        <img style="width: 100px;  border: 2px solid whitesmoke;" src="${element.urlToImage}" alt="">
                                        ${index + 1}    ${element.title} 
                                        
                                    </button> 
                                </p>
                                <div style="margin: auto;" class="collapse collapse-horizontal "  id="collapseWidthExample${index + 1}">
                                    <div class="card card-body"  style="margin: auto;width: 100%;" >
                                        ${element.content} <a href="${element.url}" target="_blank"> Read More </a>
                                    </div>
                                </div>
                            </div> `
                NewHtml += news;
            });
            collepsNews.innerHTML = NewHtml;
        })
    }

}


// get sectionh1 in sectionBar 
const sectionBar = document.getElementById('sectionBar');
// get year for date function 
let date = new Date();
let year = date.getFullYear();
// add <h2> and two <a> tag 
let section =  ` <h2 id="sectionh1"> Copyright side &copy; ${year} <br> <a class="fa-brands fa-instagram" href=""></a> &nbsp; <a class="fa-brands fa-facebook" href=""></a> </h2>  ` ;
// change innerHTML 
sectionBar.innerHTML = section;


// get button 
let newsbtn = document.getElementById('newsbtn');
// add click event on newsbtn 
newsbtn.addEventListener('click', showNews);
// showNews function  
function showNews() {
    getData();
    sectionBar.style.bottom = '100vh';
}