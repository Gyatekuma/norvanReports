<script setup>
import { ref, computed } from 'vue'

const videos = ref([
  {
    id: 1,
    title: 'NorvanReports | Official Launch of Cedi @ 60 Celebration | Bank of Ghana',
    videoId: 'wUVq7GCRH8w',
    duration: '15:42'
  },
  {
    id: 2,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | African Department Press Briefing',
    videoId: '78MvPORq1IM',
    duration: '28:15'
  },
  {
    id: 3,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | Governor Dr. Johnson P. Asiama',
    videoId: 'jq4X9PSNODw',
    duration: '22:30'
  },
  {
    id: 4,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | IMF Managing Director Press Briefing',
    videoId: 'jmhsylQ2iLs',
    duration: '35:18'
  },
  {
    id: 5,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | Fiscal Monitor Press Briefing',
    videoId: 'S72nJzMZSsA',
    duration: '41:22'
  },
  {
    id: 6,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | The Future of Finance',
    videoId: 'z4WHnLaAPVw',
    duration: '18:45'
  },
  {
    id: 7,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | G-24 Press Briefing',
    videoId: 'jt00Y8x2QCk',
    duration: '25:10'
  },
  {
    id: 8,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | Financial Stability Report',
    videoId: 'WYRWoox726w',
    duration: '32:55'
  },
  {
    id: 9,
    title: 'NorvanReports | IMF/World Bank 2025 Annual Meetings | World Economic Outlook',
    videoId: 'R2PApJZQtZI',
    duration: '45:30'
  },
  {
    id: 10,
    title: 'NorvanReports | Bank of Ghana | 126th MPC Press Briefing',
    videoId: 'XJpkCFa0pFE',
    duration: '38:20'
  },
])

const currentIndex = ref(0)
const isPlaying = ref(false)
const activeVideoId = ref(null)

const visibleVideos = computed(() => {
  // Show 4 videos at a time on desktop
  const start = currentIndex.value
  const end = Math.min(start + 4, videos.value.length)
  return videos.value.slice(start, end)
})

const canGoPrev = computed(() => currentIndex.value > 0)
const canGoNext = computed(() => currentIndex.value + 4 < videos.value.length)

const currentPage = computed(() => Math.floor(currentIndex.value / 4) + 1)
const totalPages = computed(() => Math.ceil(videos.value.length / 4))

const goToPrev = () => {
  if (canGoPrev.value) {
    currentIndex.value = Math.max(0, currentIndex.value - 4)
  }
}

const goToNext = () => {
  if (canGoNext.value) {
    currentIndex.value = Math.min(videos.value.length - 4, currentIndex.value + 4)
  }
}

const playVideo = (video) => {
  activeVideoId.value = video.videoId
  isPlaying.value = true
}

const closePlayer = () => {
  isPlaying.value = false
  activeVideoId.value = null
}

const getThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
}
</script>

<template>
  <section class="video-section">
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </span>
        Featured Videos
      </h2>
      <div class="carousel-controls">
        <span class="page-indicator">{{ currentPage }} of {{ totalPages }}</span>
        <button
          class="control-btn"
          @click="goToPrev"
          :disabled="!canGoPrev"
          aria-label="Previous videos"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button
          class="control-btn"
          @click="goToNext"
          :disabled="!canGoNext"
          aria-label="Next videos"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="videos-carousel">
      <div class="videos-track">
        <article
          v-for="video in visibleVideos"
          :key="video.id"
          class="video-card"
          @click="playVideo(video)"
        >
          <div class="video-thumbnail">
            <img :src="getThumbnail(video.videoId)" :alt="video.title" />
            <div class="play-overlay">
              <span class="play-button">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
            </div>
            <span class="video-duration">{{ video.duration }}</span>
          </div>
          <h3 class="video-title">{{ video.title }}</h3>
        </article>
      </div>
    </div>

    <a href="#" class="view-all-link">
      View All Videos on YouTube
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>

    <!-- Video Player Modal -->
    <Teleport to="body">
      <div v-if="isPlaying" class="video-modal" @click.self="closePlayer">
        <div class="modal-content">
          <button class="close-btn" @click="closePlayer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <div class="video-wrapper">
            <iframe
              :src="`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.video-section {
  margin-bottom: 2.5rem;
  padding: 2rem 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background: #fafafa;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #1a1a1a;
}

.title-icon {
  color: #ff0000;
  display: flex;
  align-items: center;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.page-indicator {
  font-size: 0.75rem;
  color: #666;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  color: #333;
  transition: all 0.2s;
}

.control-btn:hover:not(:disabled) {
  background: #0b57d4;
  border-color: #0b57d4;
  color: #fff;
}

.control-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.videos-carousel {
  overflow: hidden;
}

.videos-track {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.video-card {
  cursor: pointer;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.video-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.video-thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.video-card:hover .video-thumbnail img {
  transform: scale(1.05);
}

.play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.video-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  color: #0b57d4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.video-duration {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.125rem 0.375rem;
  font-size: 0.6875rem;
  font-weight: 600;
  border-radius: 2px;
}

.video-title {
  padding: 0.875rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.4;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-card:hover .video-title {
  color: #0b57d4;
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #0b57d4;
  text-decoration: none;
  transition: color 0.2s;
}

.view-all-link:hover {
  text-decoration: underline;
}

/* Video Modal */
.video-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 900px;
}

.close-btn {
  position: absolute;
  top: -2.5rem;
  right: 0;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #ccc;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  background: #000;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Responsive */
@media (max-width: 1024px) {
  .videos-track {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .videos-track {
    grid-template-columns: repeat(2, 1fr);
  }

  .video-section {
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 500px) {
  .videos-track {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
