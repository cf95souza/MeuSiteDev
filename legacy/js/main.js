const defaultConfig = {
    hero_title: 'Desenvolvedor de Sistemas Web',
    hero_subtitle: 'Soluções simples, eficientes e escaláveis - Desde 2019',
    about_text: 'Desde 2019 desenvolvendo soluções web que realmente funcionam. Minha experiência vem da operação - conheço os desafios reais. Especializado em criar sistemas sob medida que organizam, otimizam e escalam com sua empresa. Do workflow ao CRM, do helpdesk a gestão de ordens de serviço: código limpo, banco de dados bem modelado e suporte que você merece.',
    about_experience: '+5 anos de experiência em TI',
    about_projects: '+20 projetos entregues',
    contact_email: 'cf95.souza@gmail.com',
    contact_phone: '(11) 94915-6525',
    contact_location: 'SP - São Paulo | Brasil',
    primary_color: '#06b6d4',
    secondary_color: '#8b5cf6',
    bg_color: '#0f172a', /* UPDATED */
    surface_color: '#1e293b', /* UPDATED */
    text_color: '#f8fafc', /* UPDATED */
    font_family: 'Space Grotesk',
    font_size: 16
};

let config = { ...defaultConfig };

async function onConfigChange(newConfig) {
    config = { ...config, ...newConfig };

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = config.hero_title.includes('Web')
            ? config.hero_title.replace('Web', '<span class="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Web</span>')
            : config.hero_title;
    }

    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle;

    const aboutText = document.getElementById('about-text');
    if (aboutText) aboutText.textContent = config.about_text;

    const aboutExperience = document.getElementById('about-experience');
    if (aboutExperience) aboutExperience.textContent = config.about_experience;

    const aboutProjects = document.getElementById('about-projects');
    if (aboutProjects) aboutProjects.textContent = config.about_projects;

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.textContent = config.contact_email;

    const contactPhone = document.getElementById('contact-phone');
    if (contactPhone) contactPhone.textContent = config.contact_phone;

    const contactLocation = document.getElementById('contact-location');
    if (contactLocation) contactLocation.textContent = config.contact_location;

    document.documentElement.style.setProperty('--accent-cyan', config.primary_color);
    document.documentElement.style.setProperty('--accent-purple', config.secondary_color);
    document.documentElement.style.setProperty('--bg-dark', config.bg_color);
    document.documentElement.style.setProperty('--surface', config.surface_color);
    document.documentElement.style.setProperty('--text-primary', config.text_color);

    const customFont = config.font_family;
    const baseFontStack = 'sans-serif';
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

    const baseSize = config.font_size;
    document.documentElement.style.fontSize = `${baseSize}px`;
}

function mapToCapabilities(cfg) {
    return {
        recolorables: [
            {
                get: () => cfg.bg_color || defaultConfig.bg_color,
                set: (value) => window.elementSdk.setConfig({ bg_color: value })
            },
            {
                get: () => cfg.surface_color || defaultConfig.surface_color,
                set: (value) => window.elementSdk.setConfig({ surface_color: value })
            },
            {
                get: () => cfg.text_color || defaultConfig.text_color,
                set: (value) => window.elementSdk.setConfig({ text_color: value })
            },
            {
                get: () => cfg.primary_color || defaultConfig.primary_color,
                set: (value) => window.elementSdk.setConfig({ primary_color: value })
            },
            {
                get: () => cfg.secondary_color || defaultConfig.secondary_color,
                set: (value) => window.elementSdk.setConfig({ secondary_color: value })
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => cfg.font_family || defaultConfig.font_family,
            set: (value) => window.elementSdk.setConfig({ font_family: value })
        },
        fontSizeable: {
            get: () => cfg.font_size || defaultConfig.font_size,
            set: (value) => window.elementSdk.setConfig({ font_size: value })
        }
    };
}

function mapToEditPanelValues(cfg) {
    return new Map([
        ['hero_title', cfg.hero_title || defaultConfig.hero_title],
        ['hero_subtitle', cfg.hero_subtitle || defaultConfig.hero_subtitle],
        ['about_text', cfg.about_text || defaultConfig.about_text],
        ['about_experience', cfg.about_experience || defaultConfig.about_experience],
        ['about_projects', cfg.about_projects || defaultConfig.about_projects],
        ['contact_email', cfg.contact_email || defaultConfig.contact_email],
        ['contact_phone', cfg.contact_phone || defaultConfig.contact_phone],
        ['contact_location', cfg.contact_location || defaultConfig.contact_location]
    ]);
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

onConfigChange(config);
