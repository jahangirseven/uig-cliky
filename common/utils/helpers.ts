export function getRandomColor() {
    const colors = ["#048eea" ,"#4f04ea","#07d686","#b233ff","#ff861f", "#ff1f3e" , "#4b6a74" , "#ff7878"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
