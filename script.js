const div4 = document.querySelector(".div4");
const div3 = document.querySelector(".div3");
const input = document.querySelector(".input");

let audio;

div3.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(
    `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?limit=15&q=${input.value}&index=0`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      div4.innerHTML = "";
      data.data.forEach((song) => {
        const div5 = document.createElement("div");
        div5.className = "div5";
        div5.innerHTML = `
       <h3>${song.artist.name} - ${song.title}</h3>
      <button class="buton1">Play</button>
      `;
        div4.append(div5);
        div5.addEventListener("click", () => {
          audio?.pause();
          audio = new Audio(song.preview);
          audio.play();
        });
      });
    });
});
