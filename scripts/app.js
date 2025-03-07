document.getElementById("askBtn").addEventListener("click", function() {
    const query = document.getElementById("queryInput").value;
    // Render 배포 시 실제 도메인으로 변경, 로컬 테스트는 http://localhost:8080 사용
    fetch("http://localhost:8080/kbo-master/baseball?query=" + encodeURIComponent(query))
        .then(response => response.json())
        .then(data => {
            // 받은 JSON 데이터를 포맷팅하여 출력
            document.getElementById("result").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error:", error));
});