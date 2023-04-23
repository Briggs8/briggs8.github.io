//Mobile Menu
menuToggle.addEventListener('click', ev => {
    navToggle.classList.toggle('open');
  });


//Dark Mode
  var logo = document.querySelector('#logo')
  var darkMode = document.querySelector('#darkMode')
  var colours = document.querySelector(':root')
  var darkModeTracker = 0

  darkMode.onclick = function() {
    if (darkModeTracker%2 == 1){
        logo.src = 'images/logo.png';
        darkMode.src = 'images/icons/nightmode.png';
        colours.style.setProperty('--header-colour', '#e0e0e0');
        colours.style.setProperty('--text-colour', 'black');
        colours.style.setProperty('--navigation-color', '#f6fafd');
        colours.style.setProperty('--background-color', '#f6fafd');
        colours.style.setProperty('--hover-colour', '#e9e9e9');
        colours.style.setProperty('--accent-color', '#333333');
        colours.style.setProperty('--index-banner-image', 'url("images/banner/indexminibannerlight.jpg")');

    }else{
        logo.src = 'images/logoWhite.png';
        darkMode.src = 'images/icons/lightmode.png';
        colours.style.setProperty('--header-colour', '#15202B');
        colours.style.setProperty('--text-colour', 'white');
        colours.style.setProperty('--navigation-color', '#1D2A35');
        colours.style.setProperty('--background-color', '#1D2A35');
        colours.style.setProperty('--hover-colour', '#1D2A35');
        colours.style.setProperty('--accent-color', '#15202B');
        colours.style.setProperty('--index-banner-image', 'url("images/banner/indexminibanner.jpg")');
    }
    darkModeTracker++
};