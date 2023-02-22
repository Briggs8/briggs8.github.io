// console.log("Obviously, you should replace this with some event handlers.")

// myButton.addEventListener("click", output);

// function output(){
//     myButton.textContent = "Hello"
// }

menuToggle.addEventListener('click', ev => {
    mobileMenu.classList.toggle('open');
  });

  var logo = document.querySelector('#logo')
  var darkMode = document.querySelector('#darkMode')
  var colours = document.querySelector(':root')
  var darkModeTracker = 0

  darkMode.onclick = function() {
    if (darkModeTracker%2 == 1){
        logo.src = '../images/Logo.png';
        darkMode.src = '../images/Icons/NightMode.png';
        colours.style.setProperty('--header-colour', '#EFF3F6');
        colours.style.setProperty('--text-colour', 'black');
        colours.style.setProperty('--navigation-color', '#F8F9F9');
        colours.style.setProperty('--background-color', '#F8F9F9');
        colours.style.setProperty('--hover-colour', '#e2e2e2');
        colours.style.setProperty('--accent-color', '#333333');
        colours.style.setProperty('--index-banner-image', 'url("/images/Banner/IndexMiniBannerLight.jpg")');

    }else{
        logo.src = '../images/LogoWhite.png';
        darkMode.src = '../images/Icons/LightMode.png';
        colours.style.setProperty('--header-colour', '#15202B');
        colours.style.setProperty('--text-colour', 'white');
        colours.style.setProperty('--navigation-color', '#1D2A35');
        colours.style.setProperty('--background-color', '#1D2A35');
        colours.style.setProperty('--hover-colour', '#1D2A35');
        colours.style.setProperty('--accent-color', '#15202B');
        colours.style.setProperty('--index-banner-image', 'url("/images/Banner/IndexMiniBanner.jpg")');
    }
    darkModeTracker++
};
