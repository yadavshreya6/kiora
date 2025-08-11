// Custom Cursor
        const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.top = e.clientY + 'px';
            cursor.style.left = e.clientX + 'px';
        });

        const hoverElements = document.querySelectorAll('a, button, .floating-cta');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Theme toggle functionality
        const themeToggle = document.querySelector('.theme-toggle');
        const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        function updateThemeIcon(isLight) {
            if (isLight) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }

        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            updateThemeIcon(isLight);
            localStorage.setItem('kaiora-theme', isLight ? 'light' : 'dark');
        }

        // Initialize theme
        const savedTheme = localStorage.getItem('kaiora-theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            updateThemeIcon(true);
        }

        themeToggle.addEventListener('click', toggleTheme);

        // Search dropdown functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchDropdown = document.querySelector('.search-dropdown');

    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchDropdown.classList.toggle('active');
    });

    searchDropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close dropdown on escape key or click outside
    document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' && searchDropdown.classList.contains('active')) {
            closeDropdown();
        }
    });

    document.addEventListener('click', () => {
        if (searchDropdown.classList.contains('active')) {
            closeDropdown();
        }
    });

    function closeDropdown() {
        searchDropdown.classList.remove('active');
    }
        // Menu functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const menuPanel = document.querySelector('.menu-panel');
        const menuOverlay = document.querySelector('.menu-overlay');

        function openMenu() {
            menuPanel.classList.add('open');
            menuOverlay.classList.add('open');
        }

        function closeMenu() {
            menuPanel.classList.remove('open');
            menuOverlay.classList.remove('open');
        }

        function toggleMenu() {
            if (menuPanel.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        menuOverlay.addEventListener('click', closeMenu);

        document.addEventListener('click', (e) => {
            if (menuPanel.classList.contains('open')) {
                if (!menuPanel.contains(e.target) && !menuToggle.contains(e.target)) {
                    closeMenu();
                }
            }
        });

        menuPanel.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Floating CTA visibility
        const floatingCta = document.querySelector('.floating-cta');
        
        function checkCTAVisibility() {
            const scrollY = window.scrollY;
            if (scrollY > 200) {
                floatingCta.classList.add('visible');
            } else {
                floatingCta.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', checkCTAVisibility);
        checkCTAVisibility();

        // Smooth scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });