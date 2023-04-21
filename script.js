let smiley1Count = 0;
let smiley2Count = 0;
let smiley3Count = 0;

function vote(smileyId) {
  switch(smileyId) {
    case 1:
      smiley1Count++;
      document.getElementById("smiley1-count").textContent = smiley1Count;
      break;
    case 2:
      smiley2Count++;
      document.getElementById("smiley2-count").textContent = smiley2Count;
      break;
    case 3:
      smiley3Count++;
      document.getElementById("smiley3-count").textContent = smiley3Count;
      break;
    default:
      break;
  }
}

function showResults() {
  const counts = [smiley1Count, smiley2Count, smiley3Count];
  const maxCount = Math.max(...counts);
  const winnerIndex = counts.indexOf(maxCount) + 1; // Adding 1 to match smileyId
  const winnerText = `Переможний смайл: ${winnerIndex}`;
  document.getElementById("winner-text").textContent = winnerText;
}