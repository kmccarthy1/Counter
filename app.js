const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);

//set initial count
let count = 0;

// select values and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//console.log(btns);
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
            if (styles.contains("decrease")) {
                count--;
            } 
            else if (styles.contains("increase")) {
                count++;
            } 
            else {
                count = 0;
            } 
            if (count > 0) {
                value.style.color = "green";
            }
            else if (count < 0) {
                value.style.color = "orange";
            }
            else {
                value.style.color = "hsl(209, 61%, 16%)";
            }
            
            value.textContent = count;
    })
});