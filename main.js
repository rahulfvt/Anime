/* ===== ANIMEVERSE - MAIN JS ===== */

// ===== REAL ANIME DATA WITH IMAGES =====
const animeDB = {
    categories: [
        { id: 'shinchan', name: 'Shinchan', image: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg' },
        { id: 'dragonball', name: 'Dragon Ball', image: 'https://cdn.myanimelist.net/images/anime/6/20936.jpg' },
        { id: 'pokemon', name: 'Pokemon', image: 'https://cdn.myanimelist.net/images/anime/13/73834.jpg' },
        { id: 'ben10', name: 'Ben 10', image: 'https://cdn.myanimelist.net/images/anime/5/19558.jpg' },
        { id: 'naruto', name: 'Naruto', image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg' },
        { id: 'doraemon', name: 'Doraemon', image: 'https://cdn.myanimelist.net/images/anime/6/73987.jpg' },
        { id: 'beyblade', name: 'Beyblade', image: 'https://cdn.myanimelist.net/images/anime/9/21525.jpg' },
        { id: 'transformers', name: 'Transformers', image: 'https://cdn.myanimelist.net/images/anime/12/61039.jpg' }
    ],

    latest: [
        { id: 1, title: "The Angel Next Door Spoils Me Rotten", season: "Season 2", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1240/134653.jpg", desc: "Amane lives alone in an apartment, and the most beautiful girl in school, Mahiru, lives just beyond the wall." },
        { id: 2, title: "The Warrior Princess and the Barbaric King", season: "Season 1", ep: "EP 1-3", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1763/139803.jpg", desc: "A warrior princess must marry the barbaric king to save her kingdom." },
        { id: 3, title: "Snowball Earth", season: "Season 1", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1763/139803.jpg", desc: "In a frozen world, humanity fights for survival against the elements." },
        { id: 4, title: "Dr. Stone", season: "Season 4", ep: "EP 25-31", totalEps: 7, image: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg", desc: "Senku and his friends continue their journey to rebuild civilization." },
        { id: 5, title: "An Observation Log of My Fiancée", season: "Season 1", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1240/134653.jpg", desc: "A man observes his mysterious fiancée who may not be entirely human." },
        { id: 6, title: "The Beginning After the End", season: "Season 2", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg", desc: "King Grey is reincarnated into a world of magic and monsters." },
        { id: 7, title: "Marriage Toxin", season: "Season 1", ep: "EP 1-3", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1763/139803.jpg", desc: "A hitman must get married to save his life, but love complicates things." },
        { id: 8, title: "Reborn as a Vending Machine", season: "Season 3", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1240/134653.jpg", desc: "A man dies and is reincarnated as a vending machine in another world." },
        { id: 9, title: "Eren the Southpaw", season: "Season 1", ep: "EP 1-3", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg", desc: "A left-handed warrior rises through the ranks in a medieval world." },
        { id: 10, title: "Easygoing Territory Defense", season: "Season 1", ep: "EP 6-11", totalEps: 6, image: "https://cdn.myanimelist.net/images/anime/6/20936.jpg", desc: "A lazy lord defends his territory with unconventional strategies." },
        { id: 11, title: "Release that Witch", season: "Season 1", ep: "EP 3-8", totalEps: 6, image: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg", desc: "A prince uses science and magic to revolutionize his kingdom." },
        { id: 12, title: "Agents of the Four Seasons", season: "Season 1", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1240/134653.jpg", desc: "Four agents control the seasons to maintain world balance." }
    ],

    popular: [
        { id: 101, title: "Jujutsu Kaisen", season: "Season 3", ep: "EP 10-12", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", desc: "Yuji Itadori joins a secret organization to fight cursed spirits." },
        { id: 102, title: "Frieren: Beyond Journey's End", season: "Season 2", ep: "EP 8-10", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "An elf mage reflects on her journey after defeating the Demon King." },
        { id: 103, title: "Liar Game", season: "Season 1", ep: "EP 1-3", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg", desc: "Players compete in psychological games of deception and trust." },
        { id: 104, title: "Wistoria: Wand & Sword", season: "Season 2", ep: "EP 1-2", totalEps: 2, image: "https://cdn.myanimelist.net/images/anime/1763/139803.jpg", desc: "A boy with no magic fights with a sword in a magic academy." },
        { id: 105, title: "Daemons of the Shadow Realm", season: "Season 1", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", desc: "Shadow creatures threaten humanity and only daemons can stop them." },
        { id: 106, title: "Cute Girl in Hero's Party", season: "Season 1", ep: "EP 1-3", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "A cute girl joins the hero's party with surprising abilities." }
    ],

    newSeason: [
        { id: 201, title: "The Angel Next Door Spoils Me Rotten", season: "Season 2", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1240/134653.jpg", desc: "Season 2 of the heartwarming romance continues." },
        { id: 202, title: "The Beginning After the End", season: "Season 2", ep: "EP 1-4", totalEps: 4, image: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg", desc: "Arthur's journey continues in the magical world." },
        { id: 203, title: "Frieren: Beyond Journey's End", season: "Season 2", ep: "EP 8-10", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg", desc: "Frieren continues her emotional journey through time." },
        { id: 204, title: "Wistoria: Wand & Sword", season: "Season 2", ep: "EP 1-2", totalEps: 2, image: "https://cdn.myanimelist.net/images/anime/1763/139803.jpg", desc: "Will's second year at the magic academy begins." },
        { id: 205, title: "Dr. Stone", season: "Season 4", ep: "EP 25-31", totalEps: 7, image: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg", desc: "The science kingdom faces its greatest challenge yet." },
        { id: 206, title: "Jujutsu Kaisen", season: "Season 3", ep: "EP 10-12", totalEps: 3, image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg", desc: "The culling game reaches its climax." }
    ]
};

// Sample video URLs for demo (replace with your actual video sources)
const videoSources = {
    demo: [
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    ]
};

// ===== RENDER FUNCTIONS =====
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = animeDB.categories.map(cat => `
        <a href="pages/category.html?id=${cat.id}" class="category-card">
            <img class="cat-img" src="${cat.image}" alt="${cat.name}" loading="lazy" 
                 onload="this.style.opacity=1" style="opacity:0;transition:opacity 0.5s"
                 onerror="this.src='https://via.placeholder.com/300x300/1a1a2e/8b5cf6?text=${encodeURIComponent(cat.name)}'">
            <div class="category-overlay"><h3>${cat.name}</h3></div>
        </a>
    `).join('');
}

function renderAnimeGrid(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(anime => `
        <a href="pages/watch.html?id=${anime.id}" class="anime-card">
            <div class="anime-image">
                <img src="${anime.image}" alt="${anime.title}" loading="lazy" onload="this.classList.add('loaded')"
                     onerror="this.src='https://via.placeholder.com/300x450/1a1a2e/8b5cf6?text=${encodeURIComponent(anime.title.substring(0,15))}'">
                <div class="img-placeholder"><i class="fas fa-image"></i></div>
                <span class="anime-badge season">${anime.season}</span>
                <span class="anime-badge ep-count">${anime.totalEps} EP</span>
                <div class="play-overlay">
                    <div class="play-btn"><i class="fas fa-play"></i></div>
                </div>
            </div>
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <div class="anime-meta">
                    <span><i class="fas fa-tv"></i> ${anime.ep}</span>
                    <span><i class="fas fa-star"></i> HD</span>
                </div>
            </div>
        </a>
    `).join('');
}

// ===== SEARCH =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.anime-card').forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(term) ? 'block' : 'none';
        });
    });
}

// ===== HEADER SCROLL =====
function initHeader() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (!header) return;
        if (window.scrollY > 30) {
            header.style.background = 'rgba(10, 10, 18, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 18, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// ===== LOADER =====
function hideLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 500);
    }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderAnimeGrid('latestGrid', animeDB.latest);
    renderAnimeGrid('popularGrid', animeDB.popular);
    renderAnimeGrid('newSeasonGrid', animeDB.newSeason);
    initSearch();
    initHeader();
    hideLoader();
});
