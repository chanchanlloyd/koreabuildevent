// 링크 설정
const links = {
    kakao: "https://pf.kakao.com/_yJiuxj/chat",
    youtube: "https://youtube.com/channel/@dada_store",
    instagram: "https://instagram.com/dada_gimpo"
};

// 방문 상태 추적
const visitedLinks = {
    kakao: false,
    youtube: false,
    instagram: false
};

// 링크 클릭 처리
function handleLinkClick(platform) {
    const button = document.getElementById(`${platform}Button`);
    if (button.classList.contains('disabled')) {
        return;
    }

    // 새 창에서 링크 열기
    window.open(links[platform], '_blank');
    
    // 방문 상태 업데이트
    visitedLinks[platform] = true;
    
    // 버튼 상태 업데이트
    updateButtonStates();
}

// 버튼 상태 업데이트
function updateButtonStates() {
    // 유튜브 버튼 활성화 조건: 카카오톡 방문
    const youtubeButton = document.getElementById('youtubeButton');
    if (visitedLinks.kakao) {
        youtubeButton.classList.remove('disabled');
    }

    // 인스타그램 버튼 활성화 조건: 카카오톡 방문
    const instagramButton = document.getElementById('instagramButton');
    if (visitedLinks.kakao) {
        instagramButton.classList.remove('disabled');
    }

    // 다음 버튼 활성화 조건: 카카오톡 + (유튜브 또는 인스타그램)
    const nextButton = document.getElementById('nextButton');
    if (visitedLinks.kakao && (visitedLinks.youtube || visitedLinks.instagram)) {
        nextButton.classList.remove('disabled');
    }
}

// 클립보드에 텍스트 복사
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('링크가 복사되었습니다!');
        })
        .catch(err => {
            console.error('클립보드 복사 실패:', err);
            alert('링크 복사에 실패했습니다. 직접 텍스트를 선택하여 복사해주세요.');
        });
}

// 전화번호 클릭 처리
function handlePhoneClick() {
    window.location.href = 'tel:070-8821-6610';
}

// 최종 페이지 표시
function showFinalPage() {
    const nextButton = document.getElementById('nextButton');
    if (nextButton.classList.contains('disabled')) {
        return;
    }

    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('finalPage').classList.remove('hidden');
}
