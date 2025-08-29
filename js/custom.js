
window.addEventListener('resize', function() {
  const navContentContainer = this.document.getElementById("IEIA-nav-list-container"); //nav list for resposnsive
  // const suscribeMagazineHeight = document.getElementById("subscribe-magazine-container"); // Replace 'myContainerId' with your container's ID
  // let magazineImgContainer = document.getElementById("magazine-img-container");
  // let magezineContainer = document.getElementById("magazine-container");
  // if (suscribeMagazineHeight) {
  //   magazineImgContainer.style.height = (suscribeMagazineHeight.scrollHeight + 20)+ "px";
  //   magezineContainer.style.marginTop = (suscribeMagazineHeight.scrollHeight / 15) + "px";
  // }

  if((window.innerHeight) <= (navContentContainer.scrollHeight  + 250)){
    navContentContainer.style.maxHeight= (this.window.innerHeight - 200) + "px";
  }
  else{
    navContentContainer.style.maxHeight = "unset";
  }
}); 

document.addEventListener('DOMContentLoaded', function() {
  const navContentContainer = document.getElementById("IEIA-nav-list-container"); //nav list for resposnsive
  // const suscribeMagazineHeight = document.getElementById("subscribe-magazine-container"); // Replace 'myContainerId' with your container's ID
  // const magazineImgContainer = document.getElementById("magazine-img-container");
  // let magezineContainer = document.getElementById("magazine-container");
  const committeePage = document.getElementById("Committees-page");
  const governanceTab = document.getElementById("dropdown-governance-btn");
  const governanceTabItems = document.querySelectorAll('#dropdown-governance-container .dropdown-item');

  

  if(committeePage != null){
    governanceTabItems.forEach(item => {
      item.addEventListener('click', function () {
        const selectedText = this.textContent;
        if(governanceTab)
        governanceTab.innerHTML = selectedText || "Sub-Committees";
      });
    });    
  }

  // if (suscribeMagazineHeight) {
  //   magazineImgContainer.style.height = (suscribeMagazineHeight.scrollHeight + 20)+ "px";
  //   magezineContainer.style.marginTop = (suscribeMagazineHeight.scrollHeight / 15) + "px";
  // }

  if((window.innerHeight + 210) <= navContentContainer.scrollHeight){
    navContentContainer.style.maxHeight= (this.window.innerHeight - 200) + "px";
  }
  else{
    navContentContainer.style.maxHeight = "unset";
  }
});

const video = document.getElementById("videos");
const toggleBtn = document.getElementById("toggleBtn");

const playbtn = document.createElement('img');
playbtn.src= "assets/images/play-btn.png";

if(toggleBtn){
    toggleBtn.appendChild(playbtn);

    toggleBtn.addEventListener("click", () => {
      if (video.paused) {
        playbtn.src= "";
        // playbtn.src= "assets/images/contact.png";
        // toggleBtn.classList.add('hidePlayBtn');
        // toggleBtn.classList.remove('showPlayBtn')  ; 
        video.play();
      } 
      else {
        playbtn.src= "assets/images/play-btn.png";
          
        video.pause();
      }
});

// Also hide when video ends
video.addEventListener("ended", () => {
  playbtn.src= "assets/images/play-btn.png";
});
}

