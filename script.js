function go_to_insta(){
  console.log("go_to_insta")
  window.location = "https://www.instagram.com/brennavillela_/";
}
function go_to_albums(){
  console.log("go_to_albums")
  window.location = "albums.html";
}
function go_to_favorites(){
  console.log("go_to_favorites")
  window.location = "favorites.html";
}
function go_to_music(){
  console.log("go_to_music")
  window.location = "https://open.spotify.com/user/brenna_14/playlist/1l612mGXRxqArJvE1LIwMr";
}
function go_to_more_cssi(){
  console.log("go_to_more_cssi")
  window.location = "cssi_album.html";
}
function go_to_more_spain(){
  console.log("go_to_more_spain")
  window.location = "spain_album.html";
}
function go_to_more_paris(){
  console.log("go_to_more_paris")
  window.location = "paris_album.html";
}
function go_to_more_italy(){
  console.log("go_to_more_italy")
  window.location = "italy_album.html";
}

$(document).ready(setup1);

function setup1(){
  $(this).find("#more_cssi").click(go_to_more_cssi);
  $(this).find("#more_spain").click(go_to_more_spain);
  $(this).find("#more_paris").click(go_to_more_paris);
  $(this).find("#more_italy").click(go_to_more_italy);
  $('#insta').click(go_to_insta);
  $('#albums').click(go_to_albums);
  $('#favorites').click(go_to_favorites);
  $('#music').click(go_to_music);
}
function blur_over_album(){
  console.log("blur_over_album")
  $(this).css({'filter' : 'blur(3px)'});
}
function unblur_over_album(){
  console.log("unblur_over_album")
  $(this).css({'filter' : 'blur(0px)'});
}

function show_more_cssi(){
  console.log("show_more_cssi")
  $("#more_cssi").show();
}
function hide_more_cssi(){
  console.log("hide_more_cssi")
  $("#more_cssi").hide();
}
function show_more_spain(){
  console.log("show_more_spain")
  $("#more_spain").show();
}
function hide_more_spain(){
  console.log("hide_more_spain")
  $("#more_spain").hide();
}
function show_more_paris(){
  console.log("show_more_paris")
  $("#more_paris").show();
}
function hide_more_paris(){
  console.log("hide_more_paris")
  $("#more_paris").hide();
}
function show_more_italy(){
  console.log("show_more_italy")
  $("#more_italy").show();
}
function hide_more_italy(){
  console.log("hide_more_italy")
  $("#more_italy").hide();
}

$(document).ready(setup2);

function setup2(){
  $("#cssi").hover(blur_over_album, unblur_over_album)
  $("#spain").hover(blur_over_album, unblur_over_album)
  $("#paris").hover(blur_over_album, unblur_over_album)
  $("#italy").hover(blur_over_album, unblur_over_album)
  $("#cssi").hover(show_more_cssi, hide_more_cssi)
  $("#spain").hover(show_more_spain, hide_more_spain)
  $("#paris").hover(show_more_paris, hide_more_paris)
  $("#italy").hover(show_more_italy, hide_more_italy)
  $("#more_cssi").hover(show_more_cssi)
  $("#more_italy").hover(show_more_italy)
  $("#more_paris").hover(show_more_paris)
  $("#more_spain").hover(show_more_spain)
}
