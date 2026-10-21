const categories = [
  {
    id: 'first',
    title: '첫만남',
    description: '처음 인사를 나누고 서로를 알아가기 시작한 날의 기록',
    photos: [
      { src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=88', alt: '처음 만난 날의 다정한 순간', title: '처음 만난 날', date: '2024. 03. 16' },
      { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=88', alt: '함께 걷는 두 사람', title: '조금 서툴렀던 인사', date: '2024. 03. 16' },
      { src: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=88', alt: '햇살 아래 서로를 바라보는 커플', title: '느린 오후', date: '2024. 03. 23' },
      { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=88', alt: '서로의 손을 꼭 잡은 순간', title: '우리의 첫 사진', date: '2024. 04. 02' },
    ],
  },
  {
    id: 'academy',
    title: '어학원',
    description: '같은 교실에서 시작되어 자연스럽게 가까워진 시간',
    photos: [
      { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=88', alt: '함께 공부하는 친구들', title: '같은 교실', date: '2024. 04. 11' },
      { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=88', alt: '교실에서 공부하는 모습', title: '열심히, 그리고 같이', date: '2024. 04. 18' },
      { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=88', alt: '함께 웃고 있는 친구들', title: '쉬는 시간', date: '2024. 05. 03' },
      { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=88', alt: '창가의 책과 노트', title: '공부보다 좋았던 것', date: '2024. 05. 17' },
    ],
  },
  {
    id: 'proposal',
    title: '혼인신고 및 프러포즈',
    description: '서로의 평생이 되기로 약속한 가장 설레는 장면들',
    photos: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88', alt: '결혼을 약속하는 손과 반지', title: '우리의 약속', date: '2025. 02. 14' },
      { src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=88', alt: '프러포즈 반지', title: 'Will you marry me?', date: '2025. 02. 14' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=88', alt: '결혼식장으로 향하는 커플', title: '이제, 우리', date: '2025. 03. 08' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=88', alt: '결혼을 축하하는 꽃', title: '새로운 시작', date: '2025. 03. 08' },
    ],
  },
  {
    id: 'travel',
    title: '여행사진',
    description: '낯선 도시와 익숙한 우리, 함께라서 더 선명했던 여행',
    photos: [
      { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=88', alt: '여행지의 푸른 바다', title: '바다 건너', date: '2025. 06. 11' },
      { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=88', alt: '여행지의 산과 하늘', title: '여행의 끝에서', date: '2025. 06. 15' },
      { src: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=88', alt: '여행지의 골목 풍경', title: '길을 잃어도 좋아', date: '2025. 06. 13' },
      { src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=88', alt: '여행지의 아름다운 마을', title: '우리의 작은 엽서', date: '2025. 06. 14' },
    ],
  },
  {
    id: 'snap',
    title: '스냅사진',
    description: '꾸미지 않아 더 우리다운, 자연스러운 하루의 표정',
    photos: [
      { src: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=88', alt: '자연스럽게 웃는 커플', title: '웃음이 닮아가던 날', date: '2024. 10. 27' },
      { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=88', alt: '함께 시간을 보내는 사람들', title: '평범한 주말', date: '2024. 11. 04' },
      { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=88', alt: '햇살 아래의 자연스러운 초상', title: '햇살 한 조각', date: '2024. 11. 18' },
      { src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=88', alt: '편안한 표정의 인물', title: '가장 편안한 우리', date: '2024. 12. 02' },
    ],
  },
  {
    id: 'wedding',
    title: '결혼사진',
    description: '많은 축복 속에서 서로에게 가장 가까워진 하루',
    photos: [
      { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88', alt: '결혼식의 신랑 신부', title: '가장 빛나던 날', date: '2025. 05. 24' },
      { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=88', alt: '결혼식의 꽃 장식', title: '꽃보다 우리', date: '2025. 05. 24' },
      { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=88', alt: '결혼식에서 함께 걷는 신랑 신부', title: '같은 방향으로', date: '2025. 05. 24' },
      { src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=88', alt: '결혼식장의 따뜻한 조명', title: '우리의 밤', date: '2025. 05. 24' },
    ],
  },
  {
    id: 'wife',
    title: '사랑하는 아내 사진',
    description: '내가 가장 사랑하는 사람의 다정하고 아름다운 순간들',
    photos: [
      { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=88', alt: '밝게 웃는 여성의 초상', title: '내가 사랑하는 사람', date: '2025. 01. 12' },
      { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=88', alt: '자연스럽게 미소 짓는 여성', title: '가장 예쁜 웃음', date: '2025. 02. 02' },
      { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=88', alt: '창가에 앉아 있는 여성', title: '좋아하는 오후', date: '2025. 03. 19' },
      { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=88', alt: '편안한 분위기의 여성 초상', title: '나의 가장 가까운 사람', date: '2025. 04. 07' },
    ],
  },
  {
    id: 'couple',
    title: '커플사진',
    description: '둘이어서 더 완전한 우리, 함께 남긴 모든 장면',
    photos: [
      { src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=88', alt: '노을 아래 손을 잡은 커플', title: '우리의 계절', date: '2024. 08. 02' },
      { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=88', alt: '함께 도시를 바라보는 커플', title: '나란히', date: '2024. 09. 16' },
      { src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=88', alt: '서로의 손을 잡고 있는 커플', title: '손을 잡으면', date: '2024. 12. 24' },
      { src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=88', alt: '다정하게 마주 보는 커플', title: '둘이서 충분한 하루', date: '2025. 01. 01' },
    ],
  },
];

const showcaseTrack = document.querySelector('#showcase-track');
const showcaseSlides = [...document.querySelectorAll('.showcase-slide')];
const showcaseDots = [...document.querySelectorAll('.showcase-dot')];
const showcaseIndexLabel = document.querySelector('#showcase-index');
const showcaseProgressBar = document.querySelector('#showcase-progress-bar');
const showcaseInterval = 3800;

let showcaseIndex = 0;
let showcaseTimer;

const getShowcaseStep = () => {
  if (!showcaseSlides.length) return 0;
  const gap = parseFloat(window.getComputedStyle(showcaseTrack).gap) || 0;
  return showcaseSlides[0].getBoundingClientRect().width + gap;
};

const updateShowcasePosition = () => {
  if (!showcaseTrack) return;
  showcaseTrack.style.transform = `translate3d(-${showcaseIndex * getShowcaseStep()}px, 0, 0)`;
};

const resetShowcaseProgress = () => {
  if (!showcaseProgressBar) return;
  showcaseProgressBar.classList.remove('is-running');
  void showcaseProgressBar.offsetWidth;
  showcaseProgressBar.classList.add('is-running');
};

const scheduleShowcase = () => {
  window.clearTimeout(showcaseTimer);
  if (showcaseSlides.length < 2) return;
  showcaseTimer = window.setTimeout(() => setShowcaseSlide(showcaseIndex + 1), showcaseInterval);
};

const setShowcaseSlide = (nextIndex) => {
  if (!showcaseSlides.length) return;
  showcaseIndex = (nextIndex + showcaseSlides.length) % showcaseSlides.length;
  updateShowcasePosition();

  showcaseSlides.forEach((slide, index) => slide.classList.toggle('is-active', index === showcaseIndex));
  showcaseDots.forEach((dot, index) => {
    const isActive = index === showcaseIndex;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-selected', String(isActive));
  });
  if (showcaseIndexLabel) {
    showcaseIndexLabel.textContent = `${String(showcaseIndex + 1).padStart(2, '0')} / ${String(showcaseSlides.length).padStart(2, '0')}`;
  }
  resetShowcaseProgress();
  scheduleShowcase();
};

showcaseDots.forEach((dot) => {
  dot.addEventListener('click', () => setShowcaseSlide(Number(dot.dataset.showcaseIndex)));
});

window.addEventListener('resize', updateShowcasePosition);
setShowcaseSlide(0);

const categoryButtons = document.querySelectorAll('.category-button');
const archiveGrid = document.querySelector('#archive-grid');
const activeIndex = document.querySelector('#active-index');
const activeTitle = document.querySelector('#active-title');
const activeDescription = document.querySelector('#active-description');
const photoCount = document.querySelector('#photo-count');
const photoInput = document.querySelector('#photo-input');
const uploadButton = document.querySelector('#upload-button');
const uploadDropzone = document.querySelector('#upload-dropzone');
const uploadedPhotos = Object.fromEntries(categories.map((category) => [category.id, []]));

let activeCategoryId = categories[0].id;
let renderSequence = 0;

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxDate = lightbox.querySelector('p');
const lightboxTitle = lightbox.querySelector('strong');

const closeLightbox = () => {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

const openLightbox = (photo) => {
  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.alt;
  lightboxDate.textContent = photo.date;
  lightboxTitle.textContent = photo.title;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const createPhotoCard = (photo, index) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'archive-photo';
  card.classList.add(`photo-layout-${Math.min(index, 3)}`);
  card.setAttribute('aria-label', `${photo.title} 사진 크게 보기`);

  const image = document.createElement('img');
  image.src = photo.src;
  image.alt = photo.alt;
  image.loading = index > 1 ? 'lazy' : 'eager';

  const overlay = document.createElement('span');
  overlay.className = 'photo-overlay';

  const date = document.createElement('small');
  date.textContent = photo.date;
  const title = document.createElement('strong');
  title.textContent = photo.title;
  const zoom = document.createElement('i');
  zoom.textContent = '↗';

  overlay.append(date, title, zoom);
  card.append(image, overlay);
  card.addEventListener('click', () => openLightbox(photo));
  return card;
};

const renderCategory = (categoryId) => {
  const categoryIndex = categories.findIndex((category) => category.id === categoryId);
  const category = categories[categoryIndex];
  const photos = [...category.photos, ...uploadedPhotos[categoryId]];
  const sequence = ++renderSequence;

  activeCategoryId = categoryId;
  activeIndex.textContent = `CHAPTER ${String(categoryIndex + 1).padStart(2, '0')}`;
  activeTitle.textContent = category.title;
  activeDescription.textContent = category.description;
  photoCount.textContent = `${String(photos.length).padStart(2, '0')} PHOTOS`;

  categoryButtons.forEach((button) => {
    const isActive = button.dataset.category === categoryId;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-selected', String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  archiveGrid.classList.add('is-refreshing');
  window.setTimeout(() => {
    if (sequence !== renderSequence) return;
    archiveGrid.replaceChildren(...photos.map(createPhotoCard));
    archiveGrid.classList.remove('is-refreshing');
  }, 120);
};

const addFiles = (files) => {
  const imageFiles = [...files].filter((file) => file.type.startsWith('image/'));
  imageFiles.forEach((file) => {
    uploadedPhotos[activeCategoryId].push({
      src: URL.createObjectURL(file),
      alt: file.name,
      title: file.name.replace(/\.[^/.]+$/, '') || '새로운 순간',
      date: 'JUST ADDED',
    });
  });
  if (imageFiles.length) renderCategory(activeCategoryId);
};

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => renderCategory(button.dataset.category));
  button.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const currentIndex = [...categoryButtons].indexOf(button);
    const nextIndex = event.key === 'ArrowDown'
      ? (currentIndex + 1) % categoryButtons.length
      : (currentIndex - 1 + categoryButtons.length) % categoryButtons.length;
    categoryButtons[nextIndex].focus();
    renderCategory(categoryButtons[nextIndex].dataset.category);
  });
});

uploadButton.addEventListener('click', () => photoInput.click());
photoInput.addEventListener('change', (event) => {
  addFiles(event.target.files);
  event.target.value = '';
});

['dragenter', 'dragover'].forEach((eventName) => {
  uploadDropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadDropzone.classList.add('is-dragging');
  });
});

['dragleave', 'drop'].forEach((eventName) => {
  uploadDropzone.addEventListener(eventName, (event) => {
    event.preventDefault();
    uploadDropzone.classList.remove('is-dragging');
  });
});

uploadDropzone.addEventListener('drop', (event) => addFiles(event.dataTransfer.files));

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

renderCategory(activeCategoryId);
