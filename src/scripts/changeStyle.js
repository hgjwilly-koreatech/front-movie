console.log(detectDeviceType());

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
    

function detectDeviceType() {
  if (window.matchMedia("(max-width: 758px)").matches) {
    return "mobile";
  } else if (window.matchMedia("(min-width: 759px) and (max-width: 1024px)").matches) {
    return "tablet";
  } else {
    return "pc";
  }
}

function setStyle(deviceType) {
  const grid = document.querySelector("#grid");
  grid.style.gridTemplateColumns = (deviceType == "mobile") ? "repeat(2, 140px)" : "repeat(3, 180px)";
  
  grid.style.rowGap = (deviceType == "mobile") ? "36px" : "64px"; /* 적용 안되는 문제? */
  grid.style.columnGap = (deviceType == "mobile") ? "32px" : "55px"; 
  
  grid.style.paddingTop = (deviceType == "mobile") ? "40px" : "48px";
  grid.style.paddingBottom = (deviceType == "mobile") ? "60px" : "71px";

  const gridTitle = document.querySelector("#grid-title");
  gridTitle.style.gridColumn = (deviceType == "mobile") ? "span 2" : "span 3";
  gridTitle.style.fontSize = "28px";

  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach(item => {
    item.style.width = (deviceType == "mobile") ? "140px" : "180px";
    item.style.height = (deviceType == "mobile") ? "280px" : "360px";
    item.style.fontSize = (deviceType == "mobile") ? "16px" : "18px";
  });
  const itemImage = document.querySelectorAll(".grid-item img");
  itemImage.forEach(item => {
    item.style.borderRadius = "15px";
    item.style.width = (deviceType == "mobile") ? "140px" : "180px"; /* 적용 안되는 문제? */
    item.style.height = (deviceType == "mobile") ? "210px" : "270px";
  });
  const gridImage = document.querySelectorAll(".grid-item div");
  gridImage.forEach(item => {
    item.style.flexDirection = (deviceType == "mobile") ? "row-reverse" : "row";
    item.style.justifyContent = (deviceType == "mobile") ? "flex-end" : "flex-start";
    item.style.height = (deviceType == "mobile") ? "24px" : "27px";
  });
  const gridDivImage = document.querySelectorAll(".grid-item div img");
  gridDivImage.forEach(item => {
    item.style.width = "20px";
    item.style.height = "20px";
    item.style.marginLeft = (deviceType == "mobile") ? "0px" : "7px";
    item.style.marginRight = (deviceType == "mobile") ? "4px" : "0px";
  });
  const gridButton = document.querySelectorAll("#grid button");
  gridButton.forEach(item => {
    item.style.gridColumn = (deviceType == "mobile") ? "span 2" : "span 3";
  });
}

