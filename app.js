const input = document.querySelector("#number");
const submit = document.querySelector("#submitBtn");
const restart = document.querySelector("#restartBtn");
const close = document.querySelector("#closeBtn");
const answer = document.querySelector("#answer");
const lists = document.querySelectorAll("li");

// Assign variable for ad display
const adsContainer = document.querySelector(".ads-container");
const adCount = document.querySelector(".ad-count");
const adIcon = document.querySelector(".ad-icon");

// Assign varibale for decider display
const deciderContainer = document.querySelector(".decider-container");
const chanceBtn = document.querySelector("#chance");
const surrenderBtn = document.querySelector("#surrender");


let index = 0;

let defaultNum = Math.floor(Math.random() * 50) + 1;
console.log(defaultNum);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let guessNum = Number(input.value);
  if (guessNum === defaultNum) {
    document.querySelector("#right").style.display = "block";
    document
      .querySelectorAll(".win")
      .forEach((el) => el.classList.add("active"));
      document.querySelector("#wrong").style.display = "none";
  } else if (guessNum === 0) {
    alert("no input");
  } else if (guessNum !== defaultNum) {
    lists[index].classList.add("active");
    index++;
    if (index === 3) {
      deciderContainer.classList.contains("hidden") ? deciderContainer.classList.remove("hidden") : deciderContainer.classList.add("hidden");
      // deciderContainer.classList.add("hidden");
      adsContainer.classList.contains("hidden") ? adsContainer.classList.add("hidden") : adsContainer.classList.remove("hidden");
      index = 0;
    }
  }
  input.value = "";
});

//reload
const reload = restart.addEventListener("click", () => location.reload());

//close
close.addEventListener("click", () => {
  if (confirm("တကယ်မဆော့တော့ဘူးလားဗျာ🥺")) {
    window.close();
  }
});

// trick
answer.addEventListener("click", () => {
  if (answer.innerHTML === "အဖြေ") {
    answer.innerHTML = defaultNum;
  } else {
    answer.innerHTML = "အဖြေ";
  }
});


// Ad-count function
let adTime = 5 ;
function adCountdown(){
    document.querySelector('.ad-time').classList.remove("hidden")
    adIcon.style.display = "none";
    document.querySelector('.ad-time').innerHTML = adTime;
    adTime--;
    if(adTime < 0)
    {
      adTime = 5;
      mystop();
      document.querySelector('.ad-time').classList.add("hidden");
      adIcon.style.display = "block";
      adCount.classList.add("close-ad");
      let closeAd = document.querySelector('.close-ad');
      closeAd.addEventListener("click", ()=>{
        document.querySelector(".ads-container").classList.add("hidden");
        lists.forEach(el=>el.classList.remove("active"));
        adCount.classList.remove("close-ad");
      })
    };
};

// const intervalID = setInterval(adCountdown, 1000);
let intervalID;

function mystop(){
  clearInterval(intervalID);
}

// For Decider 
chanceBtn.addEventListener("click", ()=>{
  deciderContainer.classList.contains("hidden") ? deciderContainer.classList.add("hidden") : deciderContainer.classList.add("hidden");
  // deciderContainer.classList.add("hidden");
  adsContainer.classList.contains("hidden") ? adsContainer.classList.remove("hidden") : adsContainer.classList.add("hidden");
  // adsContainer.classList.remove("hidden");
  intervalID = setInterval(adCountdown, 1000);
  adIcon.style.display = "none";
})

// For Surrender
surrenderBtn.addEventListener('click', ()=>{
  document.querySelector("#wrong").style.display = "none";
  document.querySelectorAll(".lose").forEach(el=>el.classList.add("active"));
  deciderContainer.classList.add("hidden");
})