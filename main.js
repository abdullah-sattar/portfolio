let flag = true;

const openMenu = () => {
  if (flag) {
    document.querySelector(".aside").className = "aside--openMenu";
    document.querySelector(".aside_h1").className = "aside_h1--openMenu";
    document.querySelector(".aside_ul").className = "aside_ul--openMenu";
    document.querySelector(".aside_closeBtn").className =
      "aside_closeBtn--openMenu";
    flag = false;
    console.log("sup")
  } else {
    document.querySelector(".aside--openMenu").className = "aside";
    document.querySelector(".aside_h1--openMenu").className = "aside_h1";
    document.querySelector(".aside_ul--openMenu").className = "aside_ul";
    document.querySelector(".aside_closeBtn--openMenu").className = "aside_closeBtn";
    flag = true;
    console.log("hrllo");
  }
};

const closeMenu = () => {
    document.querySelector(".aside--openMenu").className = "aside";
    document.querySelector(".aside_h1--openMenu").className = "aside_h1";
    document.querySelector(".aside_ul--openMenu").className = "aside_ul";
    document.querySelector(".aside_closeBtn--openMenu").className = "aside_closeBtn";
    flag = true;
}
