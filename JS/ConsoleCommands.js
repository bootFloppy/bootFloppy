// <img width="300" src="./Files/svg/logo.svg">
document.getElementById("fakeconsole").innerHTML = document.getElementById("fakeconsole").innerHTML + '<a class="seperate"> You are currently running: '+window.navigator.userAgent+'</a>';
document.getElementById("fakeconsole").innerHTML = document.getElementById("fakeconsole").innerHTML + '<b>More:</b> <a href="#" onclick="listProjects()" class="linkNoPadding">[ Projects ]</a>';

function bismuthascii() {
  console.log("                           ._...\n                           _////___...\n                           _////_//////___...\n                           _///_///////////////__...\n ..                        _///_//////////////////////__...\n.____....                 _///_////////////////////////////___...\n   _///////___...          _//__///////////////////////////////////___...\n    .//////////////___...  _//_///////////////////////////////////////////___..\n     ._/////////////______________/////.....___///////////////////////////////_\n       .//////////___////////////___///____.... _/////////////////////////////\n        .////////__////////__///////__/////_____/////////////////////////////.\n          _/////_////////__//_///////__/////////////////////////////////////.\n           .///__///___/__///__///////_////////////////////////////////////_\n            .//_///__/___////__///////_///////////////////////////////////_.\n             .__//__///__////______///_///////////////////////////////////.\n               ._/__////_///__////_///_//////////////////////////////////.\n                .///_//__//__///__///__//////___///////_____//////_______\n                 ._//_______//___///__/////////________////________////_\n                   ._//////____//___///////////////////////////////////.\n                      ..______________________________________________.")
  // ❤
}

function listProjects() {
  document.getElementById("fakeconsole").innerHTML = "<b class='seperate'>Layne's Public Projects:</b><a class='linkNoPadding' href='https://github.com/PixelNetNeon/batFetch'>batFetch</a>";
}