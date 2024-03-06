var id = "Global";
var title;
var arr_title = [];
var ids;
var arr_ids = [];
var j = 0;
var c = 0;
var counter;
var f = 0;
var activetab = "Youtube";
var mode = "dark";
var bool = [false, false, false, false];
var isclicked1 = [false, false, false, false];

var deezer = {
  Global: "3155776842",
  France: "1109890291",
  Canada: "1652248171",
  Mexico: "1111142361",
  Brazil: "1111141961",
  Argentina: "1279119721",
  Chile: "1279119121",
  Guatemala: "1279118671",
  Honduras: "1116190301",
  Ecuador: "1362501235",
  Venezuela: "1362527605",
  Colombia: "1116188451",
};
var spotify = {
  Global: "37i9dQZEVXbMDoHDwVN2tF",
  France: "37i9dQZEVXbIPWwFssbupI",
  Canada: "37i9dQZEVXbKj23U1GF4IR",
};
var youtube = {
  France: "FR",
  Canada: "CA",
  Morocco: "MA",
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    "X-RapidAPI-Key": "19765bc4a2mshd0d2aa14304d44fp1a383djsn5896751789d5",
  },
};

let url =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyAzAuWUGcQzTQnOllmn3frSBGRjisBru3w&regionCode=";

let urlnews = "https://free-news.p.rapidapi.com/v1/search?lang=en&q=";
const checkbox = document.getElementById("dark-light");
checkbox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    mode = "light";
    document.getElementById("svgs").style.stroke = "black";
    document.getElementById("svgs").style.fill = "#ffeba7";
    document.getElementById("svgs").style.strokeWidth = "1px";
    document.getElementById("title").style.color = "#ffffff";
    document.getElementById("youtube").style.color = "#000000";
    document.getElementById("youtube").style.backgroundColor = "#fff";
    document.getElementById("droite").style.backgroundColor = "#00394f";
    document.getElementById("droite").style.color = "#ffffff";
    document.getElementById("gauche").style.backgroundColor = "#00394f";
    document.getElementById("gauche").style.color = "#ffffff";
    document.getElementById("Deezer").src =
      "https://widget.deezer.com/widget/" + mode + "/playlist/" + deezer[id];
    document.getElementById("logint").style.color = "#000000";
    document.getElementById("loginl1").style.color = "#000000";
    document.getElementById("loginl2").style.color = "#000000";
    document.getElementById("loginl3").style.color = "#000000";
    document.getElementById("news").style.color = "#000000";
    document.getElementById("news").style.backgroundColor = "#fff";
    document.getElementById("news0").style.color = "#000000";
    document.getElementById("news1").style.color = "#000000";
    document.getElementById("news2").style.color = "#000000";
    document.getElementById("news3").style.color = "#000000";
    document.getElementById("droite1").style.backgroundColor = "#00394f";
    document.getElementById("droite1").style.color = "#ffffff";
    document.getElementById("gauche1").style.backgroundColor = "#00394f";
    document.getElementById("gauche1").style.color = "#ffffff";
  } else {
    mode = "dark";
    document.getElementById("svgs").style.stroke = "#eee";
    document.getElementById("svgs").style.fill = "#00394f";
    document.getElementById("svgs").style.strokeWidth = "0.5px";
    document.getElementById("title").style.color = "#ffeba7";
    document.getElementById("youtube").style.color = "#ffffff";
    document.getElementById("youtube").style.backgroundColor = "#1f2029";
    document.getElementById("droite").style.backgroundColor = "#ffeba7";
    document.getElementById("droite").style.color = "#000000";
    document.getElementById("gauche").style.backgroundColor = "#ffeba7";
    document.getElementById("gauche").style.color = "#000000";
    document.getElementById("Deezer").src =
      "https://widget.deezer.com/widget/" + mode + "/playlist/" + deezer[id];
    document.getElementById("logint").style.color = "#ffffff";
    document.getElementById("loginl1").style.color = "#ffffff";
    document.getElementById("loginl2").style.color = "#ffffff";
    document.getElementById("loginl3").style.color = "#ffffff";
    document.getElementById("news").style.color = "#ffffff";
    document.getElementById("news").style.backgroundColor = "#1f2029";
    document.getElementById("news0").style.color = "#ffffff";
    document.getElementById("news1").style.color = "#ffffff";
    document.getElementById("news2").style.color = "#ffffff";
    document.getElementById("news3").style.color = "#ffffff";
    document.getElementById("droite1").style.backgroundColor = "#ffeba7";
    document.getElementById("droite1").style.color = "#000000";
    document.getElementById("gauche1").style.backgroundColor = "#ffeba7";
    document.getElementById("gauche1").style.color = "#000000";
  }
});

document.getElementById("Menu").innerHTML = activetab;

const menudez = document.getElementById("dez");
menudez.addEventListener("click", clickHandlerdez);

function clickHandlerdez(event) {
  document.getElementById("youtube").style.visibility = "hidden";
  document.getElementById("Spotify").style.visibility = "hidden";
  document.getElementById("Deezer").style.visibility = "visible";
  document.getElementById("news").style.visibility = "hidden";
  activetab = "Deezer";
  document.getElementById("Menu").innerHTML = activetab;
}

const menuspot = document.getElementById("spot");
menuspot.addEventListener("click", clickHandlerspot);

function clickHandlerspot(event) {
  document.getElementById("youtube").style.visibility = "hidden";
  document.getElementById("Deezer").style.visibility = "hidden";
  document.getElementById("Spotify").style.visibility = "visible";
  document.getElementById("news").style.visibility = "hidden";
  activetab = "Spotify";
  document.getElementById("Menu").innerHTML = activetab;
}

const menuytb = document.getElementById("ytb");
menuytb.addEventListener("click", clickHandlerytb);

function clickHandlerytb(event) {
  document.getElementById("youtube").style.visibility = "visible";
  document.getElementById("news").style.visibility = "hidden";
  document.getElementById("Deezer").style.visibility = "hidden";
  document.getElementById("Spotify").style.visibility = "hidden";
  activetab = "Youtube";
  document.getElementById("Menu").innerHTML = activetab;
}

const menunews = document.getElementById("nws");
menunews.addEventListener("click", clickHandlernews);

function clickHandlernews(event) {
  document.getElementById("news").style.visibility = "visible";
  document.getElementById("youtube").style.visibility = "hidden";
  document.getElementById("Deezer").style.visibility = "hidden";
  document.getElementById("Spotify").style.visibility = "hidden";
  activetab = "News";
  document.getElementById("Menu").innerHTML = activetab;
}
fetch(url)
  .then((res) => res.json())
  .then((out) => {
    for (let i = 0; i < 50; i++) {
      if (
        j < 5 &&
        out.items[i].snippet.categoryId != 10 &&
        out.items[i].snippet.categoryId != 17 &&
        out.items[i].snippet.categoryId != 24
      ) {
        title = out.items[i].snippet.title;
        ids = out.items[i].id;
        if (title.length < 12) {
          title += "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ";
        }
        if (title.length > 65) {
          title = title.substr(0, 65 - 1) + "&hellip;";
        }
        document.getElementById("video" + j).src =
          "https://www.youtube.com/embed/";

        document.getElementById("title" + j).innerHTML = title;
        document.getElementById("video" + j).src =
          document.getElementById("video" + j).src + ids;
        j++;
      }
      if (
        out.items[i].snippet.categoryId != 10 &&
        out.items[i].snippet.categoryId != 17 &&
        out.items[i].snippet.categoryId != 24
      ) {
        arr_title[c] = out.items[i].snippet.title;
        arr_ids[c] = out.items[i].id;
        c++;
      }
    }
    counter = 5;
  });

news_title = [];
news_img = [];
news_url = [];
let ntitle = "";

fetch("https://free-news.p.rapidapi.com/v1/search?q=World&lang=en", options)
  .then((response) => response.json())
  .then((out) => {
    console.log(out);
    for (let i = 0; i < 24; i++) {
      news_title[i] = out.articles[i].title;
      news_img[i] = out.articles[i].media;
      news_url[i] = out.articles[i].link;
    }

    for (let j = 0; j < 4; j++) {
      ntitle = news_title[j];
      if (ntitle.length > 50) {
        ntitle = ntitle.substr(0, 50 - 1) + "&hellip;";
      }
      document.getElementById("news" + j).innerHTML = ntitle;
      document.getElementById("img" + j).src = news_img[j];
      document.getElementById("news" + j).href = news_url[j];
    }
  });

const heart1 = document.getElementById("test1");
heart1.addEventListener("click", (event) => {
  if (bool[0]) {
    heart1.style.transitionDuration = "0s";
    heart1.style.backgroundPosition = "0 0";
    bool[0] = false;
  } else {
    heart1.style.transitionDuration = "1s";
    heart1.style.backgroundPosition = "-2800px 0";
    bool[0] = true;
  }
});

const heart2 = document.getElementById("test2");
heart2.addEventListener("click", (event) => {
  if (bool[1]) {
    heart2.style.transitionDuration = "0s";
    heart2.style.backgroundPosition = "0 0";
    bool[1] = false;
  } else {
    heart2.style.transitionDuration = "1s";
    heart2.style.backgroundPosition = "-2800px 0";
    bool[1] = true;
  }
});

const heart3 = document.getElementById("test3");
heart3.addEventListener("click", (event) => {
  if (bool[2]) {
    heart3.style.transitionDuration = "0s";
    heart3.style.backgroundPosition = "0 0";
    bool[2] = false;
  } else {
    heart3.style.transitionDuration = "1s";
    heart3.style.backgroundPosition = "-2800px 0";
    bool[2] = true;
  }
});

const heart4 = document.getElementById("test4");
heart4.addEventListener("click", (event) => {
  if (bool[3]) {
    heart4.style.transitionDuration = "0s";
    heart4.style.backgroundPosition = "0 0";
    bool[3] = false;
  } else {
    heart4.style.transitionDuration = "1s";
    heart4.style.backgroundPosition = "-2800px 0";
    bool[3] = true;
  }
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", clickHandler);

function clickHandler(event) {
  for (let i = counter; i < counter + 5; i++) {
    if (arr_title[i].length < 12) {
      arr_title[i] += "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ";
    }
    if (arr_title[i].length > 65) {
      arr_title[i] = arr_title[i].substr(0, 65 - 1) + "&hellip;";
    }
    document.getElementById("video" + (i - counter)).src =
      "https://www.youtube.com/embed/";

    document.getElementById("title" + (i - counter)).innerHTML = arr_title[i];
    document.getElementById("video" + (i - counter)).src =
      document.getElementById("video" + (i - counter)).src + arr_ids[i];
  }
  counter += 5;
  if (counter > 10) {
    f++;
  }
  heart1.style.transitionDuration = "0s";
  heart1.style.backgroundPosition = "0 0";
  bool[0] = false;
  heart2.style.transitionDuration = "0s";
  heart2.style.backgroundPosition = "0 0";
  bool[1] = false;
  heart4.style.transitionDuration = "0s";
  heart4.style.backgroundPosition = "0 0";
  bool[3] = false;
  heart3.style.transitionDuration = "0s";
  heart3.style.backgroundPosition = "0 0";
  bool[2] = false;
}

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", clickHandler1);

function clickHandler1(event) {
  console.log("counter " + counter);
  if (counter > 5) {
    for (let i = counter - 6; i >= counter - 10; i--) {
      console.log(i - f * 5);
      console.log(i);
      console.log(f);
      if (arr_title[i].length < 12) {
        arr_title[i] += "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ";
      }
      if (arr_title[i].length > 65) {
        arr_title[i] = arr_title[i].substr(0, 65 - 1) + "&hellip;";
      }
      document.getElementById("title" + (i - f * 5)).innerHTML = arr_title[i];
      document.getElementById("video" + (i - f * 5)).src =
        "https://www.youtube.com/embed/";

      document.getElementById("video" + (i - f * 5)).src =
        document.getElementById("video" + (i - f * 5)).src + arr_ids[i];
    }
    counter -= 5;
    if (f > 0) {
      f--;
    }
  } else {
    console.log("already fisrt page");
  }
  heart1.style.transitionDuration = "0s";
  heart1.style.backgroundPosition = "0 0";
  bool[0] = false;
  heart2.style.transitionDuration = "0s";
  heart2.style.backgroundPosition = "0 0";
  bool[1] = false;
  heart4.style.transitionDuration = "0s";
  heart4.style.backgroundPosition = "0 0";
  bool[3] = false;
  heart3.style.transitionDuration = "0s";
  heart3.style.backgroundPosition = "0 0";
  bool[2] = false;
}

const loginbtn = document.getElementById("logintt");
loginbtn.addEventListener("click", login);

const rgbtbtn = document.getElementById("rgbt");
rgbtbtn.addEventListener("click", login1);

function login() {
  document.getElementById("login").style.visibility = "hidden";
}

function login1() {
  document.getElementById("logint").innerHTML = "Register";
  document.getElementById("logintt").innerHTML = "Register";
  document.getElementById("lgbt").style.visibility = "visible";
  document.getElementById("l").style.visibility = "hidden";
}

jQuery(function ($) {
  $("path").click(function () {
    var name = this.getAttribute("name");
    var clas = this.getAttribute("class");
    var temp = "";
    if (name == null) {
      id = clas;
    } else if (clas == null) {
      id = name;
    }
    document.getElementById("country").innerHTML = id;
    if (id in deezer) {
      document.getElementById("Deezer").src =
        "https://widget.deezer.com/widget/" + mode + "/playlist/" + deezer[id];
      document.getElementById("Spotify").src =
        "https://open.spotify.com/embed/playlist/" + spotify[id];
    } else {
      document.getElementById("Deezer").src =
        "https://widget.deezer.com/widget/dark/playlist/" + deezer.Global;
      document.getElementById("Spotify").src =
        "https://open.spotify.com/embed/playlist/" + spotify.Global;
    }
    if (id in youtube) {
      urlytb = url + youtube[id];
    } else {
      urlytb = url + this.getAttribute("id");
    }
    j = 0;
    c = 0;
    console.log(urlytb);
    let urlnews1 = urlnews + id.replace(" ", "%20");
    console.log(urlnews1);
    news_title = [];
    news_img = [];
    news_url = [];
    let ntitle = "";
    w = 0;
    fetch(urlnews1, options)
      .then((response) => response.json())
      .then((out) => {
        console.log(out);
        for (let i = 0; i < 24; i++) {
          news_title[i] = out.articles[i].title;
          news_img[i] = out.articles[i].media;
          news_url[i] = out.articles[i].link;
        }

        for (let j = 0; j < 24; j++) {
          if (w < 4) {
            if (news_img[j] != null) {
              ntitle = news_title[j];
              if (ntitle.length > 50) {
                ntitle = ntitle.substr(0, 50 - 1) + "&hellip;";
              }
              document.getElementById("news" + w).innerHTML = ntitle;
              document.getElementById("img" + w).src = news_img[j];
              document.getElementById("news" + w).href = news_url[j];
              w++;
            }
          }
        }
      });

    fetch(urlytb)
      .then((res) => res.json())
      .then((out) => {
        for (let i = 0; i < 50; i++) {
          if (
            j < 5 &&
            out.items[i].snippet.categoryId != 10 &&
            out.items[i].snippet.categoryId != 24 &&
            out.items[i].snippet.categoryId != 17
          ) {
            title = out.items[i].snippet.title;
            ids = out.items[i].id;
            if (title.length < 12) {
              title += "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ";
            }
            if (title.length > 65) {
              title = title.substr(0, 65 - 1) + "&hellip;";
            }
            document.getElementById("video" + j).src =
              "https://www.youtube.com/embed/";

            document.getElementById("title" + j).innerHTML = title;
            document.getElementById("video" + j).src =
              document.getElementById("video" + j).src + ids;
            j++;
          }
          if (
            out.items[i].snippet.categoryId != 10 &&
            out.items[i].snippet.categoryId != 17 &&
            out.items[i].snippet.categoryId != 24
          ) {
            arr_title[c] = out.items[i].snippet.title;
            arr_ids[c] = out.items[i].id;
            c++;
          }
        }
        counter = 5;
      });
  });
});
