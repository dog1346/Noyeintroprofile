const visitorKey = "visited_discord_intro";

// 방문 확인
if (!localStorage.getItem(visitorKey)) {
  // 서버에서 count.json을 불러와 증가시키는 방식은 로컬 환경에선 불가능하므로,
  // 이 예제에서는 localStorage에만 저장 (진짜 카운트는 서버 백엔드 필요)
  let count = parseInt(localStorage.getItem("visitor_count") || "0");
  count++;
  localStorage.setItem("visitor_count", count);
  localStorage.setItem(visitorKey, "true");
}

// 화면에 표시
let countDisplay = localStorage.getItem("visitor_count") || "1";
document.getElementById("visitorCount").textContent = `방문자 수: ${countDisplay}명`;
