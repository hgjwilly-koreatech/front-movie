console.log(detectDeviceType());

function setStyle2(){
  switch (detectDeviceType()) {
    case "mobile":
      setStyle("mobile");
      break;        
    case "tablet":
      setStyle("tablet");
      break;
    case "pc":
      break;
  }
}    

function detectDeviceType() {
  if (window.matchMedia("(max-width: 765px)").matches) {
    return "mobile";
  } else if (window.matchMedia("(min-width: 766px) and (max-width: 1020px)").matches) {
    return "tablet";
  } else {
    return "pc";
  }
}

function setStyle(deviceType) {
  const grid = document.querySelector("#grid");
  grid.style.gridTemplateColumns = (deviceType == "mobile") ? "repeat(2, 140px)" : "repeat(3, 180px)";
  
  grid.style.rowGap = (deviceType == "mobile") ? "36px" : "64px"; 
  grid.style.columnGap = (deviceType == "mobile") ? "32px" : "55px"; 
  
  grid.style.paddingTop = (deviceType == "mobile") ? "40px" : "48px";
  grid.style.paddingBottom = (deviceType == "mobile") ? "60px" : "71px";

  const gridTitle = document.querySelector("#grid-title");
  gridTitle.style.gridColumn = (deviceType == "mobile") ? "span 2" : "span 3";
  gridTitle.style.fontSize = "28px";

  const gridButton = document.querySelectorAll("#grid button");
  gridButton.forEach(item => {
    item.style.gridColumn = (deviceType == "mobile") ? "span 2" : "span 3";
  });
}
