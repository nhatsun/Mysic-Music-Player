// ==============================================
// PHẦN 1: DỮ LIỆU & CẤU HÌNH
// ==============================================

// --- GIỮ NGUYÊN PHẦN DỮ LIỆU CŨ CỦA BẠN (KHÔNG CHỈNH SỬA) ---
const chartData = {
    'vn': [
        { rank: 1, title: "Chúng Ta Của Tương Lai", artist: "Sơn Tùng M-TP", time: "04:30", file: "ctctl.mp3", youtube: "https://www.youtube.com/watch?v=3v3hL07b4kI", image: "ctctl.jpg" },
        { rank: 2, title: "Nâng Chén Tiêu Sầu", artist: "Bích Phương", time: "03:45", file: "ncts.mp3", youtube: "https://www.youtube.com/watch?v=Jk38n1l1T8w", image: "ncts.jpg" },
        { rank: 3, title: "Thiên Lý Ơi", artist: "Jack - J97", time: "04:10", file: "tlo.mp3", youtube: "https://www.youtube.com/watch?v=CqG10DQqyO4", image: "tlo.jpg" },
        { rank: 4, title: "Sau Lời Từ Khước", artist: "Phan Mạnh Quỳnh", time: "04:50", file: "sltk.mp3", youtube: "https://www.youtube.com/watch?v=2Tz8gG6XoO0", image: "sltk.jpg" },
        { rank: 5, title: "Từng Quen", artist: "Wren Evans", time: "03:12", file: "tungquen.mp3", youtube: "https://www.youtube.com/watch?v=CT5Y6aXN3Ew", image: "tungquen.jpg" }
    ],
    'us': [
        { rank: 1, title: "Beautiful Things", artist: "Benson Boone", time: "03:00", file: "beautifulthings.mp3", youtube: "https://www.youtube.com/watch?v=Oa_RSwwpPaA", image: "beautifulthings.jpg" },
        { rank: 2, title: "We Can't Be Friends", artist: "Ariana Grande", time: "03:35", file: "wecantbefriends.mp3", youtube: "https://www.youtube.com/watch?v=KNtJGQkC-WI", image: "wecantbefriends.jpg" },
        { rank: 3, title: "End of Beginning", artist: "Djo", time: "02:40", file: "endofbeginning.mp3", youtube: "https://www.youtube.com/watch?v=AjH1qD0i8XM", image: "endofbeginning.jpg" },
        { rank: 4, title: "Cruel Summer", artist: "Taylor Swift", time: "02:58", file: "cruelsummer.mp3", youtube: "https://www.youtube.com/watch?v=ic8j13piAhQ", image: "cruelsummer.jpg" },
        { rank: 5, title: "Greedy", artist: "Tate McRae", time: "02:11", file: "greedy.mp3", youtube: "https://www.youtube.com/watch?v=I43hCMq2nk4", image: "greedy.jpg" }
    ],
    'kp': [
        { rank: 1, title: "Magnetic", artist: "ILLIT", time: "02:40", file: "magnetic.mp3", youtube: "https://www.youtube.com/watch?v=Vk5-c_u4g8A", image: "magnetic.jpg" },
        { rank: 2, title: "Sheesh", artist: "BABYMONSTER", time: "02:55", file: "sheesh.mp3", youtube: "https://www.youtube.com/watch?v=2S24-y0Ij3Y", image: "sheesh.jpg" },
        { rank: 3, title: "Fate", artist: "(G)I-DLE", time: "02:40", file: "fate.mp3", youtube: "https://www.youtube.com/watch?v=atxTj0yRfb0", image: "fate.jpg" },
        { rank: 4, title: "Easy", artist: "LE SSERAFIM", time: "02:45", file: "easy.mp3", youtube: "https://www.youtube.com/watch?v=bNKXxwOQYB8", image: "easy.jpg" },
        { rank: 5, title: "Plot Twist", artist: "TWS", time: "02:32", file: "plottwist.mp3", youtube: "https://www.youtube.com/watch?v=hVAc1Vf2ITU", image: "plottwist.jpg" }
    ]
};

// --- GỘP NHẠC CŨ VÀ THÊM NHẠC MỚI (ĐÃ CẬP NHẬT ĐẦY ĐỦ THỂ LOẠI) ---
const allSongs = [
    // 1. Nhạc cũ từ Bảng Xếp Hạng (Giữ nguyên)
    ...chartData['vn'], 
    ...chartData['us'], 
    ...chartData['kp'],
    
    // 2. Các bài lẻ cũ của bạn (Giữ nguyên)
    { title: "Em Của Ngày Hôm Qua", artist: "Sơn Tùng M-TP", genre: "V-Pop", time: "03:50", file: "ecnhq.mp3", youtube: "https://www.youtube.com/watch?v=kRWw8gU5u2s", image: "ecnhq.jpg" },
    { title: "Lạc Trôi", artist: "Sơn Tùng M-TP", genre: "V-Pop", time: "04:00", file: "lactroi.mp3", youtube: "https://www.youtube.com/watch?v=Llw9Q66wk7s", image: "lactroi.jpg" },
    { title: "Mặt Trời Của Em", artist: "Phương Ly", genre: "V-Pop", time: "03:20", file: "mtce.mp3", youtube: "https://www.youtube.com/watch?v=cM-1aY_f4yY", image: "mtce.jpg" },
    { title: "Hoa Nở Không Màu", artist: "Hoài Lâm", genre: "Ballad", time: "05:12", file: "hnkm.mp3", youtube: "https://www.youtube.com/watch?v=y_6aSG2yfe8", image: "hnkm.jpg" },

    // 3. THÊM MỚI: BALLAD
    { title: "Tháng Tư Là Lời Nói Dối", artist: "Hà Anh Tuấn", genre: "Ballad", time: "05:15", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Thang+Tu+La+Loi+Noi+Doi+Cua+Em", image: "default.jpg" },
    { title: "Nàng Thơ", artist: "Hoàng Dũng", genre: "Ballad", time: "04:20", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Nang+Tho+Hoang+Dung", image: "default.jpg" },
    { title: "Hơn Cả Yêu", artist: "Đức Phúc", genre: "Ballad", time: "04:45", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Hon+Ca+Yeu+Duc+Phuc", image: "default.jpg" },
    { title: "Chạm Đáy Nỗi Đau", artist: "Erik", genre: "Ballad", time: "05:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Cham+Day+Noi+Dau+Erik", image: "default.jpg" },
    { title: "Em Gái Mưa", artist: "Hương Tràm", genre: "Ballad", time: "04:30", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Em+Gai+Mua+Huong+Tram", image: "default.jpg" },

    // 4. THÊM MỚI: ROCK
    { title: "Numb", artist: "Linkin Park", genre: "Rock", time: "03:07", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=kXYiU_JCYtU", image: "default.jpg" },
    { title: "It's My Life", artist: "Bon Jovi", genre: "Rock", time: "03:44", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=vx2u5uUu3DE", image: "default.jpg" },
    { title: "Bring Me To Life", artist: "Evanescence", genre: "Rock", time: "03:57", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=3YxaaGgTQYM", image: "default.jpg" },
    { title: "Đường Đến Ngày Vinh Quang", artist: "Bức Tường", genre: "Rock", time: "04:30", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Duong+Den+Ngay+Vinh+Quang", image: "default.jpg" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock", time: "05:01", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=hTWKbfoikeg", image: "default.jpg" },

    // 5. THÊM MỚI: RAP/HIP-HOP
    { title: "Bigcityboi", artist: "Binz", genre: "Rap/Hip-hop", time: "03:50", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Bigcityboi+Binz", image: "default.jpg" },
    { title: "Mang Tiền Về Cho Mẹ", artist: "Đen Vâu", genre: "Rap/Hip-hop", time: "04:20", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Mang+Tien+Ve+Cho+Me", image: "default.jpg" },
    { title: "Godzilla", artist: "Eminem", genre: "Rap/Hip-hop", time: "03:30", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=r_0JjYUe5jo", image: "default.jpg" },
    { title: "Người Ấy Là Ai", artist: "16 Typh", genre: "Rap/Hip-hop", time: "03:10", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Nguoi+Ay+La+Ai+16Typh", image: "default.jpg" },
    { title: "Thủ Đô Cypher", artist: "Low G, MCK...", genre: "Rap/Hip-hop", time: "04:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Thu+Do+Cypher", image: "default.jpg" },

    // 6. THÊM MỚI: R&B
    { title: "Blinding Lights", artist: "The Weeknd", genre: "R&B", time: "03:20", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=4NRXx6U8ABQ", image: "default.jpg" },
    { title: "Kill Bill", artist: "SZA", genre: "R&B", time: "02:33", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=MwpMEbgC7DA", image: "default.jpg" },
    { title: "Peaches", artist: "Justin Bieber", genre: "R&B", time: "03:18", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=tQ0yjYUFKAE", image: "default.jpg" },
    { title: "Talk", artist: "Khalid", genre: "R&B", time: "03:17", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=hE2Ira-Cwxo", image: "default.jpg" },
    { title: "Say So", artist: "Doja Cat", genre: "R&B", time: "03:57", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=pok8H_KF1FA", image: "default.jpg" },

    // 7. THÊM MỚI: EDM
    { title: "Faded", artist: "Alan Walker", genre: "EDM", time: "03:32", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=60ItHLz5WEA", image: "default.jpg" },
    { title: "Wake Me Up", artist: "Avicii", genre: "EDM", time: "04:07", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=IcrbM1l_BoI", image: "default.jpg" },
    { title: "Alone", artist: "Marshmello", genre: "EDM", time: "03:19", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=ALZHF5UqnU4", image: "default.jpg" },
    { title: "The Nights", artist: "Avicii", genre: "EDM", time: "02:56", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=UtF6Jej8yb4", image: "default.jpg" },
    { title: "Titanium", artist: "David Guetta", genre: "EDM", time: "04:05", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=JRfuAukYTKg", image: "default.jpg" },

    // 8. THÊM MỚI: INDIE
    { title: "Một Đêm Say", artist: "Thịnh Suy", genre: "Indie", time: "03:40", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Mot+Dem+Say+Thinh+Suy", image: "default.jpg" },
    { title: "Lạ Lùng", artist: "Vũ", genre: "Indie", time: "04:20", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=La+Lung+Vu", image: "default.jpg" },
    { title: "Mascara", artist: "Chillies", genre: "Indie", time: "04:10", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Mascara+Chillies", image: "default.jpg" },
    { title: "Bài Này Chill Phết", artist: "Đen ft. Min", genre: "Indie", time: "04:15", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Bai+Nay+Chill+Phet", image: "default.jpg" },
    { title: "Va Vào Giai Điệu Này", artist: "MCK", genre: "Indie", time: "03:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Va+Vao+Giai+Dieu+Nay", image: "default.jpg" },

    // 9. THÊM MỚI: LO-FI
    { title: "Old Songs", artist: "Lofi Chill", genre: "Lo-fi", time: "03:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=lofi+chill", image: "default.jpg" },
    { title: "Rainy Day", artist: "Lofi Girl", genre: "Lo-fi", time: "02:45", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=rainy+day+lofi", image: "default.jpg" },
    { title: "Study Music", artist: "ChilledCow", genre: "Lo-fi", time: "04:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=study+music+lofi", image: "default.jpg" },
    { title: "Midnight", artist: "Lofi Beats", genre: "Lo-fi", time: "03:10", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=midnight+lofi", image: "default.jpg" },
    { title: "Coffee Shop", artist: "Relax", genre: "Lo-fi", time: "03:30", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=coffee+shop+lofi", image: "default.jpg" },

    // 10. THÊM MỚI: JAZZ
    { title: "Fly Me To The Moon", artist: "Frank Sinatra", genre: "Jazz", time: "02:30", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=ZEcqHA7dbwM", image: "default.jpg" },
    { title: "What A Wonderful World", artist: "Louis Armstrong", genre: "Jazz", time: "02:21", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=CWzrABouyeE", image: "default.jpg" },
    { title: "Take Five", artist: "Dave Brubeck", genre: "Jazz", time: "05:24", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=vmDDOFXSgAs", image: "default.jpg" },
    { title: "Summertime", artist: "Ella Fitzgerald", genre: "Jazz", time: "04:58", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=u2bigf337aU", image: "default.jpg" },
    { title: "Feeling Good", artist: "Nina Simone", genre: "Jazz", time: "02:54", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=D5Y11hwjMNs", image: "default.jpg" },

    // 11. THÊM MỚI: BOLERO
    { title: "Duyên Phận", artist: "Như Quỳnh", genre: "Bolero", time: "05:46", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Duyen+Phan+Nhu+Quynh", image: "default.jpg" },
    { title: "Vùng Lá Me Bay", artist: "Như Quỳnh", genre: "Bolero", time: "05:20", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Vung+La+Me+Bay", image: "default.jpg" },
    { title: "Sầu Tím Thiệp Hồng", artist: "Quang Lê - Lệ Quyên", genre: "Bolero", time: "04:45", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Sau+Tim+Thiep+Hong", image: "default.jpg" },
    { title: "Con Đường Xưa Em Đi", artist: "Trung Quang", genre: "Bolero", time: "04:30", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Con+Duong+Xua+Em+Di", image: "default.jpg" },
    { title: "Chuyện Giàn Thiên Lý", artist: "Mạnh Quỳnh", genre: "Bolero", time: "05:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Chuyen+Gian+Thien+Ly", image: "default.jpg" },

    // 12. THÊM MỚI: ACOUSTIC
    { title: "Perfect (Acoustic)", artist: "Ed Sheeran", genre: "Acoustic", time: "04:20", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Perfect+Acoustic", image: "default.jpg" },
    { title: "Boyce Avenue Cover", artist: "Boyce Avenue", genre: "Acoustic", time: "03:40", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Boyce+Avenue", image: "default.jpg" },
    { title: "Attention (Acoustic)", artist: "Charlie Puth", genre: "Acoustic", time: "03:30", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Attention+Acoustic", image: "default.jpg" },
    { title: "Faded (Piano)", artist: "Alan Walker", genre: "Acoustic", time: "03:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Faded+Piano", image: "default.jpg" },
    { title: "Love Yourself", artist: "Justin Bieber", genre: "Acoustic", time: "03:50", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Love+Yourself+Acoustic", image: "default.jpg" },

    // 13. THÊM MỚI: REMIX
    { title: "Cắt Đôi Nỗi Sầu (Remix)", artist: "Tăng Duy Tân", genre: "Remix", time: "03:30", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Cat+Doi+Noi+Sau+Remix", image: "default.jpg" },
    { title: "Bên Trên Tầng Lầu (Remix)", artist: "Tăng Duy Tân", genre: "Remix", time: "03:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Ben+Tren+Tang+Lau+Remix", image: "default.jpg" },
    { title: "See Tình (Remix)", artist: "Hoàng Thùy Linh", genre: "Remix", time: "03:10", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=See+Tinh+Remix", image: "default.jpg" },
    { title: "Waiting For You (Remix)", artist: "Mono", genre: "Remix", time: "03:40", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Waiting+For+You+Remix", image: "default.jpg" },
    { title: "2 Phút Hơn (KAIZ Remix)", artist: "Pháo", genre: "Remix", time: "03:05", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=2+Phut+Hon+Remix", image: "default.jpg" },

    // 14. THÊM MỚI: LATIN
    { title: "Despacito", artist: "Luis Fonsi", genre: "Latin", time: "03:48", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=kJQP7kiw5Fk", image: "default.jpg" },
    { title: "Havana", artist: "Camila Cabello", genre: "Latin", time: "03:37", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=HCjNJDNzw8Y", image: "default.jpg" },
    { title: "Senorita", artist: "Shawn Mendes", genre: "Latin", time: "03:11", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=Pkh8UtuejGw", image: "default.jpg" },
    { title: "Bailando", artist: "Enrique Iglesias", genre: "Latin", time: "04:03", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=NUsoVlDFqZg", image: "default.jpg" },
    { title: "Taki Taki", artist: "DJ Snake", genre: "Latin", time: "03:32", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=ixkoVwKQaJg", image: "default.jpg" },

    // 15. THÊM MỚI: NHẠC PHIM
    { title: "My Heart Will Go On", artist: "Celine Dion", genre: "Nhạc phim", time: "04:40", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=FHG2oizTlpY", image: "default.jpg" },
    { title: "Let It Go", artist: "Frozen OST", genre: "Nhạc phim", time: "03:44", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=L0MK7qz13bU", image: "default.jpg" },
    { title: "See You Again", artist: "Wiz Khalifa", genre: "Nhạc phim", time: "03:50", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=RgKAFK5djSk", image: "default.jpg" },
    { title: "A Thousand Years", artist: "Christina Perri", genre: "Nhạc phim", time: "04:45", file: "dummy.mp3", youtube: "https://www.youtube.com/watch?v=rtOvBOTyX00", image: "default.jpg" },
    { title: "Có Chàng Trai Viết Lên Cây", artist: "Phan Mạnh Quỳnh", genre: "Nhạc phim", time: "05:00", file: "dummy.mp3", youtube: "https://www.youtube.com/results?search_query=Co+Chang+Trai+Viet+Len+Cay", image: "default.jpg" }
];

// --- QUAN TRỌNG: TỰ ĐỘNG GÁN THỂ LOẠI CHO NHẠC CŨ (ĐỂ HIỆN TRONG TAB THỂ LOẠI) ---
// Đoạn này giúp bạn không cần sửa code cũ mà vẫn lọc được nhạc
chartData['vn'].forEach(s => s.genre = "V-Pop");
chartData['us'].forEach(s => s.genre = "US-UK");
chartData['kp'].forEach(s => s.genre = "K-Pop");

const genres = [
    { name: "V-Pop", icon: "🇻🇳" }, { name: "K-Pop", icon: "🇰🇷" }, { name: "US-UK", icon: "🇺🇸" },
    { name: "Ballad", icon: "🎹" }, { name: "Rock", icon: "🎸" }, { name: "Rap/Hip-hop", icon: "🎤" },
    { name: "R&B", icon: "🎷" }, { name: "EDM", icon: "🎧" }, { name: "Indie", icon: "🌿" },
    { name: "Lo-fi", icon: "☕" }, { name: "Jazz", icon: "🎺" }, { name: "Bolero", icon: "📀" },
    { name: "Acoustic", icon: "🎻" }, { name: "Remix", icon: "🔥" }, { name: "Latin", icon: "💃" }, { name: "Nhạc phim", icon: "🎬" }
];

// ==============================================
// PHẦN 2: CHỨC NĂNG CHUYỂN TRANG (SPA)
// ==============================================
function switchPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const target = document.getElementById(`page-${pageId}`);
    if(target) target.classList.add('active');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(nav => nav.classList.remove('active'));
    
    const activeNav = document.getElementById(`nav-${pageId}`);
    if(activeNav) activeNav.classList.add('active');

    if(pageId === 'leaderboard') renderChart('vn');
    if(pageId === 'genres') renderGenres();
    
    // THÊM DÒNG NÀY:
    if(pageId === 'download') renderDownloadPage();
}


// ==============================================
// PHẦN 3: TRÌNH PHÁT NHẠC (ĐÃ SỬA: NEXT, PREV, AUTO-PLAY)
// ==============================================

let currentAudio = new Audio();
let currentBtn = null; 
let currentIndex = 0; // Biến theo dõi bài hát đang hát số mấy

// 1. Hàm phát nhạc chính
function playMusic(fileName, btnElement) {
    const songPath = `music/${fileName}`;
    const songInfo = allSongs.find(s => s.file === fileName);

    // Cập nhật chỉ số currentIndex dựa trên bài hát được chọn
    currentIndex = allSongs.findIndex(s => s.file === fileName);

    // TRƯỜNG HỢP 1: Bấm vào bài đang phát -> Toggle Play/Pause
    if (currentAudio.src.includes(fileName)) {
        if (currentAudio.paused) {
            currentAudio.play();
            updatePlayState(true, btnElement);
        } else {
            currentAudio.pause();
            updatePlayState(false, btnElement);
        }
    } 
    // TRƯỜNG HỢP 2: Bấm vào bài mới (Hoặc chuyển bài)
    else {
        // Reset nút của bài cũ (nếu có)
        // Tìm nút cũ trong giao diện để tắt icon pause đi
        const oldBtns = document.querySelectorAll('.btn-play.playing');
        oldBtns.forEach(btn => {
            btn.innerText = "▶";
            btn.classList.remove('playing');
        });

        currentAudio.src = songPath;
        currentAudio.play().catch(() => console.log("Chờ người dùng tương tác để phát nhạc..."));
        
        currentBtn = btnElement; // Lưu nút hiện tại (nếu bấm từ list)
        updatePlayState(true, btnElement);
        
        // Cập nhật Thanh Player dưới đáy
        const bar = document.getElementById('musicPlayerBar');
        if(bar) bar.classList.add('active');
        
        document.getElementById('playerTitle').innerText = songInfo ? songInfo.title : "Unknown Title";
        document.getElementById('playerArtist').innerText = songInfo ? songInfo.artist : "Unknown Artist";

        // Cập nhật Ảnh bìa
        const playerThumb = document.getElementById('playerThumb');
        if (songInfo && songInfo.image) {
            playerThumb.src = "images/" + songInfo.image;
        } else {
            playerThumb.src = "images/hero-gif.gif";
        }

        // Cập nhật nút Youtube
        const ytBtn = document.getElementById('youtubeBtn');
        if (ytBtn) {
            if (songInfo && songInfo.youtube) {
                ytBtn.href = songInfo.youtube; 
                ytBtn.style.display = "flex";  
            } else {
                ytBtn.href = "#";
                ytBtn.style.display = "none";  
            }
        }
    }
}

// 2. Hàm chuyển bài TIẾP THEO
function nextSong() {
    currentIndex++;
    // Nếu hết danh sách thì quay về bài đầu tiên (Loop)
    if (currentIndex >= allSongs.length) {
        currentIndex = 0;
    }
    
    // Lấy tên file của bài mới và phát
    const nextFile = allSongs[currentIndex].file;
    playMusic(nextFile, null); // null vì khi bấm nút Next ở dưới, ta không click vào nút nhỏ trên list
}

// 3. Hàm quay lại bài TRƯỚC
function prevSong() {
    currentIndex--;
    // Nếu lùi quá bài đầu tiên thì nhảy xuống bài cuối cùng
    if (currentIndex < 0) {
        currentIndex = allSongs.length - 1;
    }
    
    const prevFile = allSongs[currentIndex].file;
    playMusic(prevFile, null);
}

// 4. Sự kiện TỰ ĐỘNG CHUYỂN BÀI khi hát xong
currentAudio.onended = function() {
    nextSong();
};

// 5. Gán sự kiện cho các nút điều khiển (Next/Prev/Play)
const mainPlayBtn = document.getElementById('mainPlayBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (nextBtn) nextBtn.onclick = nextSong;
if (prevBtn) prevBtn.onclick = prevSong;

if (mainPlayBtn) {
    mainPlayBtn.onclick = () => {
        // Nếu chưa có bài nào, phát bài đầu tiên
        if (!currentAudio.src) {
            playMusic(allSongs[0].file, null);
        } else {
            if (currentAudio.paused) {
                currentAudio.play();
                updatePlayState(true, currentBtn);
            } else {
                currentAudio.pause();
                updatePlayState(false, currentBtn);
            }
        }
    };
}

// Hàm cập nhật trạng thái giao diện (Icon Play/Pause)
function updatePlayState(isPlaying, btn) {
    const mainBtn = document.getElementById('mainPlayBtn');
    
    if(isPlaying) {
        // Cập nhật nút nhỏ trên list (nếu có)
        if(btn) { btn.innerText = "⏸"; btn.classList.add('playing'); }
        // Cập nhật nút to dưới thanh player
        if(mainBtn) mainBtn.innerText = "⏸";
    } else {
        if(btn) { btn.innerText = "▶"; btn.classList.remove('playing'); }
        if(mainBtn) mainBtn.innerText = "▶";
    }
}

// --- GIỮ NGUYÊN PHẦN THANH TRƯỢT & VOLUME ---
const progressBar = document.getElementById('progressBar');
const currTimeTxt = document.getElementById('currentTime');
const durTimeTxt = document.getElementById('duration');

currentAudio.ontimeupdate = () => {
    if(currentAudio.duration) {
        const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
        if(progressBar) progressBar.value = percent;
        if(currTimeTxt) currTimeTxt.innerText = formatTime(currentAudio.currentTime);
        if(durTimeTxt) durTimeTxt.innerText = formatTime(currentAudio.duration);
    }
}

if(progressBar) {
    progressBar.oninput = () => { 
        currentAudio.currentTime = (progressBar.value / 100) * currentAudio.duration; 
    }
}

const volumeBar = document.getElementById('volumeBar');
if(volumeBar) {
    volumeBar.oninput = () => { currentAudio.volume = volumeBar.value / 100; };
}

function formatTime(s) { return (s-(s%=60))/60+(9<s?':':':0')+Math.floor(s); }
// ==============================================
// PHẦN 4: RENDER DỮ LIỆU
// ==============================================
function renderChart(type) {
    const list = document.getElementById('chartList');
    if(!list) return;
    list.innerHTML = '';
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.tab-btn[data-type="${type}"]`);
    if(activeBtn) activeBtn.classList.add('active');

    chartData[type].forEach(song => {
        let rankClass = song.rank <= 3 ? `top-${song.rank}` : '';
        list.innerHTML += `
            <div class="song-item ${rankClass}">
                <div class="rank">${song.rank < 10 ? '0'+song.rank : song.rank}</div>
                <div class="song-info"><h3>${song.title}</h3><p>${song.artist}</p></div>
                <div class="song-time">${song.time}</div>
                <button class="btn-play" onclick="playMusic('${song.file}', this)">▶</button>
            </div>`;
    });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => renderChart(btn.getAttribute('data-type'));
});

function renderGenres() {
    const grid = document.getElementById('genreGrid');
    if(!grid || grid.innerHTML.trim() !== "") return;
    genres.forEach(g => {
        grid.innerHTML += `<div class="genre-card" onclick="alert('Xem thể loại: ${g.name}')">
            <div class="genre-icon">${g.icon}</div><div class="genre-name">${g.name}</div>
        </div>`;
    });
}

// ==============================================
// PHẦN 5: TÌM KIẾM
// ==============================================
function removeTone(str) { return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }

function handleSearch(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const val = input.value.trim();
    if(!val) return;
    
    switchPage('search');
    
    const pageInput = document.getElementById('pageSearchInput');
    if(pageInput) pageInput.value = val;
    document.getElementById('searchResultText').innerText = `Kết quả tìm kiếm cho: "${val}"`;
    
    const res = document.getElementById('searchResults');
    res.innerHTML = '';
    
    const key = removeTone(val);
    const found = allSongs.filter(s => removeTone(s.title).includes(key) || removeTone(s.artist).includes(key));
    
    if(found.length > 0) {
        found.forEach(song => {
            res.innerHTML += `
            <div class="song-item">
                <div class="rank">#</div>
                <div class="song-info"><h3>${song.title}</h3><p>${song.artist}</p></div>
                <div class="song-time">${song.time}</div>
                <button class="btn-play" onclick="playMusic('${song.file}', this)">▶</button>
            </div>`;
        });
    } else {
        res.innerHTML = '<p style="text-align:center;">Không tìm thấy bài hát nào phù hợp 😢</p>';
    }
}

document.querySelectorAll('.search-box input').forEach(inp => {
    inp.onkeypress = (e) => { if(e.key === 'Enter') handleSearch(inp.id); }
});

// ==============================================
// PHẦN 6: MODAL & ĐĂNG NHẬP
// ==============================================
const modal = document.getElementById("myModal");
const regModal = document.getElementById("registerModal");

const loginBtnLink = document.getElementById("loginBtn");
if(loginBtnLink) {
    loginBtnLink.onclick = (e) => { 
        e.preventDefault(); 
        const currentUser = localStorage.getItem("mysic_current_user");
        if (currentUser) {
            if(confirm("Bạn muốn đăng xuất?")) logout();
        } else {
            if(modal) modal.classList.add("show"); 
        }
    };
}

document.querySelectorAll(".close").forEach(span => {
    span.onclick = () => {
        if(modal) modal.classList.remove("show");
        if(regModal) regModal.classList.remove("show");
    };
});

const showReg = document.getElementById("showRegisterLink");
const showLog = document.getElementById("showLoginLink");

if(showReg) showReg.onclick = (e) => {
    e.preventDefault();
    modal.classList.remove("show");
    setTimeout(() => regModal.classList.add("show"), 200);
}
if(showLog) showLog.onclick = (e) => {
    e.preventDefault();
    regModal.classList.remove("show");
    setTimeout(() => modal.classList.add("show"), 200);
}

window.onclick = (e) => { 
    if(e.target == modal) modal.classList.remove("show"); 
    if(e.target == regModal) regModal.classList.remove("show");
};

// Xử lý Đăng ký
const regForm = document.getElementById("registerForm");
if (regForm) {
    regForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("reg-username").value;
        const password = document.getElementById("reg-pass").value;
        const repass = document.getElementById("reg-repass").value;

        if (password !== repass) { alert("Mật khẩu không khớp!"); return; }

        let users = JSON.parse(localStorage.getItem("mysic_users")) || [];
        if (users.find(u => u.username === username)) { alert("Tên đăng nhập đã tồn tại!"); return; }

        users.push({ username, password });
        localStorage.setItem("mysic_users", JSON.stringify(users));

        alert("Đăng ký thành công! Vui lòng đăng nhập.");
        regModal.classList.remove("show");
        setTimeout(() => modal.classList.add("show"), 200);
    });
}

// Xử lý Đăng nhập & Lưu trạng thái
const logForm = document.getElementById("loginForm");
if (logForm) {
    logForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const userIn = document.getElementById("login-username").value;
        const passIn = document.getElementById("login-pass").value;

        let users = JSON.parse(localStorage.getItem("mysic_users")) || [];
        const valid = users.find(u => u.username === userIn && u.password === passIn);

        if (valid) {
            alert("Đăng nhập thành công! Xin chào " + valid.username);
            localStorage.setItem("mysic_current_user", valid.username); // Lưu vào bộ nhớ
            updateLoginUI(valid.username);
            modal.classList.remove("show");
        } else {
            alert("Sai tên đăng nhập hoặc mật khẩu!");
        }
    });
}

function updateLoginUI(username) {
    const btn = document.getElementById("loginBtn");
    if (btn) {
        if (username) {
            btn.textContent = "Hi, " + username;
            btn.style.backgroundColor = "#eebbc3"; 
            btn.title = "Bấm vào để đăng xuất";
        } else {
            btn.textContent = "Đăng nhập";
            btn.style.backgroundColor = ""; 
        }
    }
}

function logout() {
    localStorage.removeItem("mysic_current_user");
    updateLoginUI(null);
    alert("Đã đăng xuất!");
}

// ==============================================
// PHẦN 7: KHỞI TẠO
// ==============================================
window.onload = () => {
    const loader = document.querySelector('.transition-overlay');
    if(loader) loader.classList.add('hidden');

    renderChart('vn'); 

    // Tự động kiểm tra đăng nhập khi mở web
    const currentUser = localStorage.getItem("mysic_current_user");
    if (currentUser) {
        updateLoginUI(currentUser);
    }
};

// Toggle Xem nhanh (Quick List)
const toggleBtn = document.getElementById('toggleListBtn');
if(toggleBtn) {
    toggleBtn.onclick = () => {
        const list = document.getElementById('quickSongList');
        if(list.innerHTML.trim() === "") {
            allSongs.forEach(s => {
                list.innerHTML += `<div class="quick-song-item">
                    <div class="quick-song-info"><h4>${s.title}</h4><p>${s.artist}</p></div>
                    <button class="btn-play" onclick="playMusic('${s.file}', this)">▶</button>
                </div>`;
            });
        }
        list.classList.toggle('show');
        toggleBtn.innerText = list.classList.contains('show') ? "Ẩn danh sách ▲" : "Xem tất cả bài hát ▼";
    };
}

// ==============================================
// PHẦN 8: TẠO PLAYLIST & TÍNH TỔNG THỜI GIAN
// ==============================================

const playlistModal = document.getElementById("playlistModal");
const createPlaylistBtn = document.getElementById("createPlaylistBtn");
const closePlaylistBtn = document.querySelector(".playlist-close");
const savePlaylistBtn = document.getElementById("savePlaylistBtn");
const songSelectionList = document.getElementById("songSelectionList");
const totalSongsCount = document.getElementById("totalSongsCount");
const totalDurationCount = document.getElementById("totalDurationCount");
const userPlaylistsContainer = document.getElementById("userPlaylistsContainer");

if(createPlaylistBtn) {
    // 1. Mở Modal và load danh sách bài hát để chọn
    createPlaylistBtn.onclick = () => {
        playlistModal.classList.add("show");
        renderSongSelection(); // Vẽ danh sách checkbox
        updateTotals(); // Reset số liệu về 0
    };

    // Đóng Modal
    closePlaylistBtn.onclick = () => playlistModal.classList.remove("show");
    
    // Đóng khi click ra ngoài
    window.onclick = (e) => {
        if(e.target == playlistModal) playlistModal.classList.remove("show");
        // (Giữ lại logic đóng các modal khác nếu có)
        if(typeof modal !== 'undefined' && e.target == modal) modal.classList.remove("show");
        if(typeof regModal !== 'undefined' && e.target == regModal) regModal.classList.remove("show");
    };
}

// 2. Hàm vẽ danh sách bài hát có checkbox
function renderSongSelection() {
    songSelectionList.innerHTML = "";
    allSongs.forEach((song, index) => {
        const div = document.createElement("div");
        div.className = "select-song-item";
        div.innerHTML = `
            <input type="checkbox" id="song-chk-${index}" value="${index}" onchange="updateTotals()">
            <label for="song-chk-${index}">
                <span>${song.title} - ${song.artist}</span>
                <span style="color: #b8c1ec;">${song.time}</span>
            </label>
        `;
        songSelectionList.appendChild(div);
    });
}

// 3. Hàm tính tổng thời gian và số lượng (Logic quan trọng)
function updateTotals() {
    const checkboxes = document.querySelectorAll('#songSelectionList input[type="checkbox"]:checked');
    let totalSeconds = 0;

    checkboxes.forEach(chk => {
        const songIndex = chk.value;
        const timeStr = allSongs[songIndex].time; // Ví dụ "04:30"
        
        // Cắt chuỗi để tính giây
        const [mins, secs] = timeStr.split(':').map(Number);
        totalSeconds += (mins * 60) + secs;
    });

    // Cập nhật giao diện
    totalSongsCount.innerText = checkboxes.length;
    totalDurationCount.innerText = formatTimeFromSeconds(totalSeconds);
}

// Helper: Đổi số giây thành mm:ss (Ví dụ 125s -> 02:05)
function formatTimeFromSeconds(totalSec) {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    // Thêm số 0 đằng trước nếu nhỏ hơn 10
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
}

// --- CẬP NHẬT LOGIC TẠO PLAYLIST (CÓ NÚT ẨN/HIỆN) ---

if(savePlaylistBtn) {
    savePlaylistBtn.onclick = () => {
        const name = document.getElementById("playlistNameInput").value.trim();
        const checkboxes = document.querySelectorAll('#songSelectionList input[type="checkbox"]:checked');

        if(!name) { alert("Vui lòng đặt tên cho Playlist!"); return; }
        if(checkboxes.length === 0) { alert("Vui lòng chọn ít nhất 1 bài hát!"); return; }

        const selectedSongs = [];
        checkboxes.forEach(chk => selectedSongs.push(allSongs[chk.value]));
        
        // Lấy bài đầu tiên để phát
        const firstSongFile = selectedSongs[0].file;
        const totalTime = document.getElementById("totalDurationCount").innerText;
        
        // Tạo ID ngẫu nhiên cho playlist này (để JS phân biệt)
        const uniqueId = 'playlist-' + Date.now(); 

        const playlistHTML = `
            <div class="my-playlist-card">
                <div class="playlist-header">
                    <div style="flex:1;">
                        <h3 style="font-size: 1rem; margin-bottom: 2px;">${name}</h3>
                        <span class="playlist-meta" style="font-size: 0.75rem;">${checkboxes.length} bài • ${totalTime}</span>
                    </div>
                    
                    <div style="display:flex; gap:5px;">
                        <button class="btn-toggle-playlist" onclick="togglePlaylistBody('${uniqueId}', this)" title="Ẩn/Hiện danh sách">
                            ▼
                        </button>

                        <button class="btn-play" style="width:35px; height:35px; font-size:1rem;" onclick="playMusic('${firstSongFile}', this)">▶</button>
                    </div>
                </div>

                <div id="${uniqueId}" class="playlist-body">
                    ${selectedSongs.map(song => `
                        <div class="song-item" style="background:transparent; padding: 5px 0; border-bottom: 1px dashed rgba(255,255,255,0.1);">
                            <div class="song-info">
                                <h4 style="margin:0; font-size:0.85rem; color:#fffffe;">${song.title}</h4>
                            </div>
                            <div class="song-time" style="font-size:0.75rem;">${song.time}</div>
                            <button class="btn-play" style="transform:scale(0.7);" onclick="playMusic('${song.file}', this)">▶</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Thêm vào container
        userPlaylistsContainer.innerHTML += playlistHTML;

        alert(`Đã tạo playlist "${name}"! Check góc phải màn hình nhé 👉`);
        playlistModal.classList.remove("show");
        document.getElementById("playlistNameInput").value = "";
    };
}

// --- HÀM ẨN/HIỆN PLAYLIST ---
function togglePlaylistBody(id, btn) {
    const body = document.getElementById(id);
    if (body) {
        // Thêm/Bỏ class 'collapsed' để kích hoạt hiệu ứng CSS
        body.classList.toggle('collapsed');
        
        // Xoay nút mũi tên
        btn.classList.toggle('rotate');
    }
}

// ==============================================
// PHẦN 9: CHỨC NĂNG GỬI GÓP Ý (AUTO SEND VIA EMAILJS)
// ==============================================

const feedbackModal = document.getElementById("feedbackModal");
const openFeedbackBtn = document.getElementById("openFeedbackBtn");
const closeFeedbackBtn = document.querySelector(".feedback-close");
const feedbackForm = document.getElementById("feedbackForm");

if (openFeedbackBtn && feedbackModal) {
    // Mở Modal
    openFeedbackBtn.onclick = () => feedbackModal.classList.add("show");
    
    // Đóng Modal
    if(closeFeedbackBtn) {
        closeFeedbackBtn.onclick = () => feedbackModal.classList.remove("show");
    }

    // Xử lý khi bấm nút Gửi
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Ngăn trang web load lại

            // Lấy nút submit để làm hiệu ứng "Đang gửi..."
            const btnSubmit = feedbackForm.querySelector('button[type="submit"]');
            const originalText = btnSubmit.innerText;
            btnSubmit.innerText = "Đang gửi...";
            btnSubmit.disabled = true;

            // Lấy dữ liệu từ form
            const templateParams = {
                from_name: document.getElementById("fbName").value,
                from_email: document.getElementById("fbEmail").value,
                message: document.getElementById("fbContent").value
            };

            // GỬI EMAIL TỰ ĐỘNG QUA EMAILJS
            // SERVICE_ID và TEMPLATE_ID
            emailjs.send('service_8zeprae', 'template_depyofl', templateParams)
                .then(function() {
                    alert('Gửi góp ý thành công! Cảm ơn bạn.');
                    feedbackModal.classList.remove("show");
                    
                    // Reset form
                    document.getElementById("fbName").value = "";
                    document.getElementById("fbEmail").value = "";
                    document.getElementById("fbContent").value = "";
                }, function(error) {
                    alert('Gửi thất bại. Vui lòng thử lại sau.\nLỗi: ' + JSON.stringify(error));
                })
                .finally(function() {
                    // Trả lại trạng thái nút bấm
                    btnSubmit.innerText = originalText;
                    btnSubmit.disabled = false;
                });
        });
    }
}

// Click ra ngoài thì đóng modal
window.addEventListener("click", function(e) {
    if (e.target == feedbackModal) feedbackModal.classList.remove("show");
});

// ==============================================
// PHẦN 10: TRANG TẢI NHẠC
// ==============================================

function renderDownloadPage() {
    const grid = document.getElementById('downloadGrid');
    // Nếu chưa có nội dung thì mới render
    if (!grid || grid.innerHTML.trim() !== "") return;

    allSongs.forEach(song => {
        const card = document.createElement('div');
        card.className = 'download-card';
        card.innerHTML = `
            <div class="download-info">
                <h3>${song.title}</h3>
                <p>${song.artist} • ${song.time}</p>
            </div>
            
            <a href="music/${song.file}" download="${song.title}.mp3" class="btn-download-file">
                ⬇ Tải về
            </a>
        `;
        grid.appendChild(card);
    });
}

// --- LOGIC HIỂN THỊ THỂ LOẠI (MỚI) ---

function renderGenres() {
    const grid = document.getElementById('genreGrid');
    if(!grid) return;
    
    // Reset lại nội dung grid về mặc định (dạng lưới icon)
    grid.style.display = "grid"; 
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(150px, 1fr))";
    grid.innerHTML = "";

    genres.forEach(g => {
        // Chú ý: onclick gọi hàm showGenreSongs
        grid.innerHTML += `
            <div class="genre-card" onclick="showGenreSongs('${g.name}')">
                <div class="genre-icon">${g.icon}</div>
                <div class="genre-name">${g.name}</div>
            </div>`;
    });
}

function showGenreSongs(genreName) {
    const grid = document.getElementById('genreGrid');
    
    // Lọc các bài hát thuộc thể loại này
    const songs = allSongs.filter(s => s.genre === genreName);
    
    // Đổi grid sang dạng list (1 cột)
    grid.style.display = "block";
    
    // Tạo nội dung danh sách
    let html = `
        <button class="btn-back" onclick="renderGenres()">⬅ Quay lại danh sách Thể loại</button>
        <h2 style="color: #eebbc3; margin-bottom: 20px;">Danh sách nhạc: ${genreName}</h2>
    `;

    if (songs.length === 0) {
        html += `<p>Chưa có bài hát nào cho thể loại này.</p>`;
    } else {
        songs.forEach(song => {
            html += `
            <div class="song-item">
                <div class="song-info">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>
                <div class="song-actions" style="display:flex; align-items:center;">
                    <div class="song-time" style="margin-right: 15px;">${song.time}</div>
                    
                    <button class="btn-play" onclick="playMusic('${song.file}', this)">▶</button>
                    
                    <a href="${song.youtube}" target="_blank" class="btn-youtube">
                        📺 Youtube
                    </a>
                </div>
            </div>`;
        });
    }

    grid.innerHTML = html;
}
