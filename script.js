
// 방문자 수 저장용 (간단한 localStorage 사용)
window.onload = () => {
  const visited = localStorage.getItem("hasVisited");
  if (!visited) {
    let count = parseInt(localStorage.getItem("visitorCount") || "0", 10);
    count++;
    localStorage.setItem("visitorCount", count);
    localStorage.setItem("hasVisited", "true");
  }

  const finalCount = localStorage.getItem("visitorCount");
  document.getElementById("visitor-count").textContent = `방문자 수: ${finalCount}`;
};
