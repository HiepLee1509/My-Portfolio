// ==========================================
// ABOUT ME MODAL TOGGLE
// ==========================================
(function () {
  const overlay = document.getElementById("aboutModalOverlay");
  const openBtn = document.getElementById("aboutTrigger");
  const closeBtn = document.getElementById("aboutModalClose");

  const openModal = () => {
    if (!overlay) return;
    overlay.classList.add("is-visible");
    overlay.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    if (!overlay) return;
    overlay.classList.remove("is-visible");
    overlay.setAttribute("aria-hidden", "true");
  };

  if (openBtn) {
    openBtn.addEventListener("click", openModal);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close when clicking outside modal content
  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay && overlay.classList.contains("is-visible")) {
      closeModal();
    }
  });
})();

// ==========================================
// DYNAMIC YEAR IN FOOTER
// ==========================================
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();

// ==========================================
// MULTI-LANGUAGE SYSTEM (VIE / ENG)
// ==========================================
(function () {
  const translations = {
    vi: {
      "nav.about": "Về tôi",
      "nav.skills": "Kỹ năng",
      "nav.projects": "Dự án",
      "nav.contact": "Liên hệ",
      "nav.cv": "CV",

      "hero.kicker": "Sinh viên Kỹ thuật Máy tính",
      "hero.title": 'Xin chào👋,<br> Tôi là <span class="accent">Lê Nghĩa Hiệp</span>',
      "hero.subtitle": "Sinh viên Kỹ thuật Máy tính với tư duy hệ thống vững chắc và niềm đam mê với các công nghệ cốt lõi. Nền tảng vững vàng về Cấu trúc dữ liệu & Giải thuật, Hệ điều hành và Kiến trúc máy tính, chuyên sâu vào tối ưu hóa hiệu năng phần mềm. Bên cạnh kỹ thuật nền tảng, tôi có kinh nghiệm thực chiến phát triển và triển khai các mô hình AI ứng dụng. Kết hợp với kỹ năng giao tiếp, thuyết trình và làm việc nhóm hiệu quả, tôi luôn hướng đến việc tạo ra các giải pháp kỹ thuật tối ưu và mang lại giá trị cao.",
      "hero.btn_projects": '<span>Xem Dự án</span> <span class="emoji">🚀</span>',
      "hero.btn_contact": '<span>Liên hệ</span> <span class="emoji">💬</span>',
      "hero.school": '<i class="fa-solid fa-building-columns"></i> Đại học Bách khoa Hà Nội',
      "hero.location": '<i class="fa-solid fa-location-dot"></i> Hà Nội, Việt Nam',
      "hero.badge_student": "Sinh viên Kỹ thuật Máy tính",
      "hero.badge_cpa": "Điểm CPA",

      "modal.title": "Về tôi",
      "modal.intro": "Tôi hiện là sinh viên ngành Kỹ thuật Máy tính, nhưng luôn tràn đầy năng lượng vượt ra khỏi khuôn mẫu công nghệ thông thường. Bên cạnh năng lực kỹ thuật, tôi được biết đến là người rất năng động, có kỹ năng mềm và giao tiếp xuất sắc, giúp tôi luôn làm việc nhóm và phối hợp hiệu quả. Tôi cũng cân bằng tư duy kỹ thuật bằng niềm đam mê nghệ thuật chân thành. Và bật mí nhỏ: tôi chính là minh chứng rằng trong giới IT, bạn hoàn toàn có thể vừa sở hữu tư duy kỹ thuật sắc bén, vừa cực kỳ đa tài và linh hoạt!",
      "modal.hobbies_title": "Sở thích & Đam mê",
      "modal.hobbies_list": "<li>🎤Hát </li><li>🎸Chơi Guitar </li><li>📷Nhiếp ảnh </li><li>📖Đọc sách </li>",
      "modal.facts_title": "Thông tin thú vị",
      "modal.facts_list": "<li>⬆️Chiều cao: 1.80m</li><li>💪Cân nặng: 75 kg</li>",
      "modal.gallery_title": "Bộ sưu tập nhỏ",

      "skills.header_title": "Kỹ năng & Kinh nghiệm",
      "skills.header_desc": "Sự kết hợp giữa lập trình hệ thống nhúng, thuật toán AI và phát triển web/ứng dụng.",
      "skills.cat_core": "Ngôn ngữ cốt lõi",
      "skills.cat_embedded": "Hệ thống nhúng & Phần cứng",
      "skills.cat_network": "Mạng & Giao thức",
      "skills.cat_tools": "Công cụ & Khác",
      "skills.cat_english": "Tiếng Anh",

      "timeline.title": "Dòng thời gian kinh nghiệm",
      "timeline.item1_date": "2023 – Hiện tại",
      "timeline.item1_major": "Kỹ thuật Máy tính",
      "timeline.item1_school": "Đại học Bách khoa Hà Nội",
      "timeline.item1_list": "<li>CPA: 3.60</li><li>Giải Nhì SCIC Quý 3 - SoICT</li><li>Học bổng Khuyến khích học tập SoICT</li><li>Học bổng Lotte</li><li>Học bổng SCG Sharing the Dream 2023, 2024</li>",
      "timeline.item2_date": "2020 – 2023",
      "timeline.item2_school": "THPT Phú Xuyên A",
      "timeline.item2_achieve": "Thành tích",
      "timeline.item2_list": "<li>28.7 điểm thi Tốt nghiệp THPT (Khối A00).</li><li>76.68 điểm thi Đánh giá tư duy TSA (Bách Khoa).</li>",

      "projects.header_title": "Dự án Nổi bật",
      "projects.header_desc": "Tuyển tập các dự án thể hiện kinh nghiệm thực chiến trong lĩnh vực công nghệ web hiện đại, tối ưu hóa hiệu năng và AIoT.",
      "project.voice_robot_title": "AI Voice Robot",
      "project.voice_robot_desc": "Trợ lý giọng nói AI tương tác thông minh phát triển trên vi điều khiển ESP32-S3 sử dụng ESP-IDF. Tích hợp truyền phát âm thanh I2S độ trễ thấp, biểu cảm khuôn mặt thời gian thực trên màn hình LCD, và điều khiển động cơ vòng kín kết hợp cảm biến khoảng cách ToF tránh vật cản. Thiết kế kiến trúc nguồn Buck & Boost riêng biệt đảm bảo hoạt động liên tục và ổn định.",
      "project.chatbot_title": "RAG-based University Query Chatbot",
      "project.chatbot_desc": "Trợ lý AI thông minh giải đáp chính xác các thắc mắc về thông tin trường đại học dựa trên ngữ cảnh thực tế. Ứng dụng kỹ thuật RAG để neo câu trả lời của LLM vào tài liệu nội bộ, giảm thiểu ảo giác và đảm bảo tính chính xác cao.",
      "project.arrhythmia_title": "DL model for arrhythmia classification",
      "project.arrhythmia_desc": "Mô hình Deep Learning hiện đại phát triển để phát hiện và phân loại sớm các dạng rối loạn nhịp tim bất thường từ dữ liệu điện tâm đồ ECG. Kiến trúc kết hợp mạng 1D CNNs và LSTM để phân tích các phụ thuộc theo chuỗi thời gian.",
      "project.smartclock_title": "SmartClock",
      "project.smartclock_desc": "Hệ thống đồng hồ sức khỏe thông minh sử dụng chip ESP32-C3, xử lý dữ liệu thô từ cảm biến hồng ngoại (PPG) thông qua AI Server để đưa ra phân tích sức khỏe theo thời gian thực, kèm ứng dụng di động Android tiện lợi.",
      "project.source_code": '<i class="fa-brands fa-github"></i> Mã nguồn',

      "contact.header_title": "Liên hệ",
      "contact.header_desc": "Bạn có hứng thú hợp tác hoặc có ý tưởng dự án? Đừng ngần ngại kết nối với tôi.",
      "contact.email_title": "Email",
      "contact.find_me": "Kết nối trực tuyến",
      "footer.developed": "Phát triển bởi Lê Nghĩa Hiệp"
    },
    en: {
      "nav.about": "About Me",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.cv": "CV",

      "hero.kicker": "Computer Engineering Student",
      "hero.title": 'Hi👋,<br> I’m <span class="accent">Le Nghia Hiep</span>',
      "hero.subtitle": "A Computer Engineering student with a robust systematic mindset and a passion for core technologies. I possess a solid foundation in Data Structures & Algorithms, Operating Systems, and Computer Architecture, with a specialized focus on software performance optimization. Beyond core engineering, I have extensive experience in developing and deploying practical AI models. Combined with excellent communication, presentation and teamwork skills, I am driven to deliver high-impact, optimized technical solutions",
      "hero.btn_projects": '<span>View Projects</span> <span class="emoji">🚀</span>',
      "hero.btn_contact": '<span>Contact</span> <span class="emoji">📧</span>',
      "hero.school": '<i class="fa-solid fa-building-columns"></i> Hanoi University of Science and Technology',
      "hero.location": '<i class="fa-solid fa-location-dot"></i> Hanoi, VietNam',
      "hero.badge_student": "Computer Engineering Student",
      "hero.badge_cpa": "CPA Score",

      "modal.title": "About Me",
      "modal.intro": "I'm currently an IT Engineering student, but I thrive outside the typical tech bubble. Beyond my technical skills, I'm known for being highly dynamic and possessing excellent communication and soft skills, making me an effective collaborator. I also balance my technical rigor with a genuine passion for the arts. Oh, and just between us, I'm proof that you can have both technical brains and incredible versatility in the world of IT!",
      "modal.hobbies_title": "Interests & Hobbies",
      "modal.hobbies_list": "<li>🎤Singing </li><li>🎸Playing Guitar </li><li>📷Photography </li><li>📖Reading </li>",
      "modal.facts_title": "Fun Facts",
      "modal.facts_list": "<li>⬆️Height: 1.80m</li><li>💪Weight: 75 kg</li>",
      "modal.gallery_title": "Mini Gallery",

      "skills.header_title": "Skills & Experience",
      "skills.header_desc": "A blend of embedded systems programming, AI algorithms, web/app development.",
      "skills.cat_core": "Core Languages",
      "skills.cat_embedded": "Embedded Systems & Hardware",
      "skills.cat_network": "Networking & Protocols",
      "skills.cat_tools": "Tools & Others",
      "skills.cat_english": "English",

      "timeline.title": "Experience Timeline",
      "timeline.item1_date": "2023 – Present",
      "timeline.item1_major": "Computer Engineering",
      "timeline.item1_school": "Hanoi University of Science and Technology",
      "timeline.item1_list": "<li>GPA: 3.60</li><li>2nd Prize in the 3rd Quarter SCIC - SoICT</li><li>Academic Achievement scholarship of SoICT</li><li>Lotte Scholarship</li><li>SCG Sharing the Dream Scholarship 2023, 2024</li>",
      "timeline.item2_date": "2020 – 2023",
      "timeline.item2_school": "Phu Xuyen A High School",
      "timeline.item2_achieve": "Achievements",
      "timeline.item2_list": "<li>28.7 score (A00) in the High School Graduation Examination.</li><li>76,68 score in TSA exam (HUST).</li>",

      "projects.header_title": "Featured Projects",
      "projects.header_desc": "A selection of projects showcasing my experience with modern web technologies, performance, and AIoT fields.",
      "project.voice_robot_title": "AI Voice Robot",
      "project.voice_robot_desc": "An interactive AI voice assistant built on ESP32-S3 using ESP-IDF. Integrates low-latency I2S audio streaming, real-time LCD facial expressions, and closed-loop motor control with ToF obstacle sensing. Designed with a custom buck&amp;boost power architecture for continuous performance.",
      "project.chatbot_title": "RAG-based University Query Chatbot",
      "project.chatbot_desc": "An intelligent AI assistant designed to provide accurate, context-specific answers regarding university information. It implements the RAG technique to ground LLM responses in proprietary documentation, minimizing hallucinations and ensuring relevance",
      "project.arrhythmia_title": "DL model for arrhythmia classification",
      "project.arrhythmia_desc": "A cutting-edge deep learning model developed for the early detection and classification of abnormal heart rhythms from ECG data. The architecture combines 1D CNNs and LSTM for analyzing temporal dependencies.",
      "project.smartclock_title": "SmartClock",
      "project.smartclock_desc": "A smart health clock system using ESP32-C3, processing raw IR sensor data (PPG) through an AI Server for real-time health insights, complete with an Android mobile companion app.",
      "project.source_code": '<i class="fa-brands fa-github"></i> Source Code',

      "contact.header_title": "Contact",
      "contact.header_desc": "Interested in collaborating or have a project in mind? Feel free to reach out.",
      "contact.email_title": "Email",
      "contact.find_me": "Find me online",
      "footer.developed": "Developed by Le Nghia Hiep"
    }
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) return;

    document.documentElement.lang = lang;
    localStorage.setItem("portfolio_lang", lang);

    // Update active button state
    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Update all i18n elements
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
        el.classList.remove("lang-fade");
        void el.offsetWidth; // Trigger reflow for animation restart
        el.classList.add("lang-fade");
      }
    });
  };

  // Bind click event on language switch buttons
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Initialize language from localStorage or default to English
  const savedLang = localStorage.getItem("portfolio_lang") || "en";
  if (savedLang !== "en") {
    setLanguage(savedLang);
  }
})();

// ==========================================
// SCROLL REVEAL & DYNAMIC ANIMATIONS
// ==========================================
(function () {
  const revealElements = document.querySelectorAll(
    ".section-header, .skill-card, .project-card, .timeline-item, .contact-main, .contact-socials"
  );

  revealElements.forEach((el, index) => {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.12,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add("is-revealed"));
  }
})();

// ==========================================
// PCB CIRCUIT LASER PULSES (Authentic Hardware Data Bus)
// Pulses follow the exact physical copper traces of images/pcb_circuit_bg.png
// ==========================================
(function () {
  const canvas = document.getElementById("pcbCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const IMG_W = 1024;
  const IMG_H = 572;
  const IMG_RATIO = IMG_W / IMG_H;

  // Exact polyline coordinates extracted directly from pcb_circuit_bg.png
  const PCB_TRACES = [[[350, 114], [324, 114], [248, 38], [179, 38], [179, 0]], [[350, 129], [312, 129], [240, 57], [128, 57], [71, 0]], [[350, 136], [292, 136], [280, 127], [0, 127]], [[350, 159], [325, 159], [288, 196], [0, 196]], [[350, 166], [330, 166], [262, 234], [167, 234], [115, 286], [54, 347], [51, 510], [0, 561]], [[350, 174], [337, 174], [269, 242], [171, 242], [112, 301], [112, 355], [0, 467]], [[375, 85], [376, 64], [344, 32], [344, 0]], [[382, 85], [382, 60], [364, 42], [364, 0]], [[388, 85], [388, 57], [368, 37], [368, 0]], [[394, 85], [394, 54], [373, 33], [373, 0]], [[401, 85], [401, 43], [389, 31], [389, 0]], [[407, 85], [407, 39], [413, 33], [413, 0]], [[413, 85], [414, 46], [430, 30], [430, 0]], [[425, 85], [426, 64], [447, 43], [447, 0]], [[431, 85], [432, 69], [453, 48], [453, 0]], [[375, 205], [365, 215], [365, 230], [374, 239], [374, 274]], [[382, 205], [382, 240], [396, 254], [396, 285]], [[401, 205], [401, 230], [413, 242], [413, 270]], [[413, 205], [413, 245], [426, 258], [426, 268]], [[425, 205], [425, 220], [436, 231], [436, 240]], [[755, 219], [723, 219], [614, 110], [527, 110], [520, 110]], [[755, 239], [696, 239], [596, 140], [489, 140], [445, 140]], [[755, 259], [681, 259], [572, 151], [445, 151]], [[755, 268], [653, 268], [572, 187], [483, 187], [469, 174], [445, 174]], [[755, 279], [680, 279], [570, 389], [415, 389], [366, 340], [0, 340]], [[755, 290], [670, 290], [558, 402], [414, 402]], [[755, 300], [675, 300], [562, 413], [512, 413]], [[755, 309], [680, 309], [562, 427], [500, 427], [414, 513], [0, 513]], [[755, 319], [690, 319], [571, 438], [523, 438], [488, 473]], [[755, 329], [700, 329], [579, 450], [533, 450], [411, 572]], [[440, 457], [402, 495], [0, 495]], [[415, 532], [0, 532]], [[791, 185], [792, 138], [748, 94], [728, 94], [717, 83], [717, 0]], [[801, 185], [802, 134], [749, 82], [749, 0]], [[812, 185], [812, 127], [763, 78], [752, 67], [752, 0]], [[824, 185], [824, 112], [795, 83], [777, 65], [777, 0]], [[836, 185], [836, 100], [790, 54], [790, 0]], [[848, 185], [848, 49]], [[860, 185], [860, 110], [913, 57], [913, 0]], [[872, 185], [872, 112], [926, 58], [926, 0]], [[882, 185], [883, 149], [940, 92], [940, 0]], [[893, 185], [893, 158], [937, 114], [945, 106], [945, 0]], [[930, 219], [961, 221], [1021, 161]], [[930, 230], [975, 231], [1021, 185]], [[930, 240], [980, 241], [1021, 200]], [[930, 250], [988, 250], [1021, 216]], [[930, 260], [994, 259], [1021, 232]], [[930, 270], [1021, 270]], [[930, 280], [1021, 281]], [[930, 290], [1011, 291], [1021, 301]], [[930, 310], [982, 311], [1021, 350]], [[930, 320], [977, 320], [1021, 364]], [[930, 330], [964, 330], [1021, 387]], [[930, 340], [956, 340], [977, 361], [977, 393], [1021, 437]], [[804, 375], [804, 408], [744, 467], [727, 467], [727, 569]], [[814, 375], [814, 417], [756, 474], [756, 569]], [[825, 375], [825, 435], [779, 480], [779, 569]], [[835, 375], [835, 440], [790, 485], [790, 569]], [[844, 375], [844, 520]], [[884, 375], [884, 428], [931, 475], [931, 569]], [[895, 375], [895, 398], [944, 447], [994, 447], [1021, 475]]];

  let width = 0;
  let height = 0;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;
  let animationFrameId;

  // Pre-calculate segment lengths for all traces
  const parsedTraces = PCB_TRACES.map((pts) => {
    const segments = [];
    let totalLen = 0;
    for (let i = 0; i < pts.length - 1; i++) {
      const dx = pts[i + 1][0] - pts[i][0];
      const dy = pts[i + 1][1] - pts[i][1];
      const len = Math.hypot(dx, dy);
      segments.push({
        p1: pts[i],
        p2: pts[i + 1],
        len: len,
        cumDist: totalLen,
      });
      totalLen += len;
    }
    return { pts, segments, totalLen };
  });

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const screenRatio = width / height;

    // CSS background-size: cover; background-position: center top;
    if (screenRatio >= IMG_RATIO) {
      scale = width / IMG_W;
      offsetX = 0;
      offsetY = 0;
    } else {
      scale = height / IMG_H;
      offsetX = (width - IMG_W * scale) / 2;
      offsetY = 0;
    }
  };

  // Luminous laser cyan and cyber amber colors matching the artwork glows
  const COLORS = [
    {
      head: "#ffffff",
      glow: "#00f0ff",
      colorStart: "rgba(0, 240, 255, 0.92)",
      colorEnd: "rgba(0, 240, 255, 0)",
    },
    {
      head: "#ffffff",
      glow: "#38bdf8",
      colorStart: "rgba(56, 189, 248, 0.92)",
      colorEnd: "rgba(56, 189, 248, 0)",
    },
    {
      head: "#fffdf0",
      glow: "#ffb703",
      colorStart: "rgba(255, 183, 3, 0.92)",
      colorEnd: "rgba(255, 183, 3, 0)",
    },
    {
      head: "#ffffff",
      glow: "#f59e0b",
      colorStart: "rgba(245, 158, 11, 0.92)",
      colorEnd: "rgba(245, 158, 11, 0)",
    },
  ];

  let pulses = [];
  let sparks = [];
  const MAX_PULSES = 22;

  function createPulse(forcedTraceIdx) {
    const traceIdx =
      forcedTraceIdx !== undefined
        ? forcedTraceIdx
        : Math.floor(Math.random() * parsedTraces.length);
    const trace = parsedTraces[traceIdx];
    const reverse = Math.random() < 0.45; // RX vs TX direction
    const colorScheme = COLORS[Math.floor(Math.random() * COLORS.length)];
    const speed = 1.7 + Math.random() * 2.3;
    const length = 32 + Math.random() * 42; // Length of the laser streak along the trace

    return {
      traceIdx: traceIdx,
      reverse: reverse,
      dist: reverse ? trace.totalLen : 0,
      speed: speed,
      length: length,
      width: 1.8 + Math.random() * 1.2,
      color: colorScheme,
      active: true,
    };
  }

  function initPulses() {
    pulses = [];
    sparks = [];
    for (let i = 0; i < MAX_PULSES; i++) {
      const p = createPulse();
      const trace = parsedTraces[p.traceIdx];
      // Stagger initial positions along the traces
      const randOffset = Math.random() * trace.totalLen;
      p.dist = p.reverse ? trace.totalLen - randOffset : randOffset;
      pulses.push(p);
    }
  }

  // Extract the exact sub-polyline for a pulse between dStart and dEnd
  function getSubpolyline(trace, dStart, dEnd) {
    dStart = Math.max(0, dStart);
    dEnd = Math.min(trace.totalLen, dEnd);
    if (dStart >= dEnd) return null;

    function getPt(dist) {
      for (let i = 0; i < trace.segments.length; i++) {
        const seg = trace.segments[i];
        if (dist <= seg.cumDist + seg.len || i === trace.segments.length - 1) {
          const t = seg.len > 0 ? (dist - seg.cumDist) / seg.len : 0;
          const px = seg.p1[0] + (seg.p2[0] - seg.p1[0]) * t;
          const py = seg.p1[1] + (seg.p2[1] - seg.p1[1]) * t;
          return {
            x: offsetX + px * scale,
            y: offsetY + py * scale,
            segIdx: i,
          };
        }
      }
      const last = trace.pts[trace.pts.length - 1];
      return {
        x: offsetX + last[0] * scale,
        y: offsetY + last[1] * scale,
        segIdx: trace.segments.length - 1,
      };
    }

    const startPt = getPt(dStart);
    const endPt = getPt(dEnd);
    const points = [{ x: startPt.x, y: startPt.y }];

    for (let i = startPt.segIdx + 1; i <= endPt.segIdx; i++) {
      const v = trace.pts[i];
      points.push({
        x: offsetX + v[0] * scale,
        y: offsetY + v[1] * scale,
      });
    }

    points.push({ x: endPt.x, y: endPt.y });
    return points;
  }

  // Interactive burst on user click/tap
  window.addEventListener("pointerdown", () => {
    // Fire pulses along multiple traces simultaneously
    for (let i = 0; i < 6; i++) {
      const randIdx = Math.floor(Math.random() * parsedTraces.length);
      const p = createPulse(randIdx);
      p.speed *= 1.35; // Turbo burst
      pulses.push(p);
    }
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw expanding sparks / terminal micro-flares at vias
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.radius += 0.85;
      s.alpha -= 0.045;

      if (s.alpha <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.strokeStyle = s.color;
      ctx.globalAlpha = Math.max(0, s.alpha);
      ctx.lineWidth = 1.6;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 9;
      ctx.stroke();

      // Bright center core
      ctx.beginPath();
      ctx.arc(s.x, s.y, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.restore();
    }

    // 2. Render and update active laser pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const p = pulses[i];
      const trace = parsedTraces[p.traceIdx];

      // Move pulse
      if (!p.reverse) {
        p.dist += p.speed;
      } else {
        p.dist -= p.speed;
      }

      // Calculate streak segment bounds
      let dTail, dHead;
      if (!p.reverse) {
        dHead = p.dist;
        dTail = p.dist - p.length;
      } else {
        dHead = p.dist;
        dTail = p.dist + p.length;
      }

      const dMin = Math.min(dTail, dHead);
      const dMax = Math.max(dTail, dHead);

      const pts = getSubpolyline(trace, dMin, dMax);

      if (pts && pts.length >= 2) {
        const headPt = !p.reverse ? pts[pts.length - 1] : pts[0];
        const tailPt = !p.reverse ? pts[0] : pts[pts.length - 1];

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let j = 1; j < pts.length; j++) {
          ctx.lineTo(pts[j].x, pts[j].y);
        }

        // Gradient fading from head to tail along the trace
        const grad = ctx.createLinearGradient(tailPt.x, tailPt.y, headPt.x, headPt.y);
        grad.addColorStop(0, p.color.colorEnd);
        grad.addColorStop(0.65, p.color.colorStart);
        grad.addColorStop(1, p.color.head);

        ctx.strokeStyle = grad;
        ctx.lineWidth = p.width * scale;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = p.color.glow;
        ctx.shadowBlur = 12;
        ctx.stroke();

        // Vivid glowing head
        ctx.beginPath();
        ctx.arc(headPt.x, headPt.y, (p.width * scale) * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = p.color.head;
        ctx.shadowColor = p.color.glow;
        ctx.shadowBlur = 15;
        ctx.fill();

        ctx.restore();
      }

      // Check if pulse has completed its run
      const isFinished = !p.reverse
        ? p.dist - p.length >= trace.totalLen
        : p.dist + p.length <= 0;

      if (isFinished) {
        // Spawn terminal flare at the destination via/pad
        const terminalPt = !p.reverse
          ? trace.pts[trace.pts.length - 1]
          : trace.pts[0];
        sparks.push({
          x: offsetX + terminalPt[0] * scale,
          y: offsetY + terminalPt[1] * scale,
          color: p.color.glow,
          radius: 2,
          alpha: 0.95,
        });

        // Respawn on a new trace
        pulses.splice(i, 1);
        pulses.push(createPulse());
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(draw);
    }
  });

  window.addEventListener("resize", () => {
    resize();
  });

  resize();
  initPulses();
  animationFrameId = requestAnimationFrame(draw);
})();

// ==========================================
// CUSTOM MOUSE GLOW TRAIL
// ==========================================
(function () {
  const glow = document.getElementById("mouseGlow");
  if (!glow || !window.matchMedia("(pointer: fine)").matches) return;

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;
  let isVisible = false;

  window.addEventListener("pointermove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      glow.style.opacity = "1";
    }
  });

  document.addEventListener("mouseleave", () => {
    isVisible = false;
    glow.style.opacity = "0";
  });

  function renderGlow() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;

    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;

    requestAnimationFrame(renderGlow);
  }

  renderGlow();
})();