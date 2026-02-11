export interface HeroSection {
    title: string;
    subtitle: string;
}

export interface AboutSection {
    image1: string;
    image2: string;
    text1: string;
    text2: string;
}

export interface Wedding {
    image: string;
    couple: string;
    date: string;
    slug?: string;
}

export interface Film {
    image: string;
    title: string;
    description: string;
}

export interface Story {
    image: string;
    couple: string;
    location: string;
}

export interface Award {
    name: string;
    subtitle: string;
    years: string;
}

export interface IbtdaSection {
    title: string;
    description: string;
    link: string;
}

export interface GalleryData {
    [key: string]: {
        couple: string;
        description: string;
        details: {
            planner?: string;
            brideOutfit?: string;
            groomOutfit?: string;
            stylists?: string;
            makeup?: string;
            hair?: string;
        };
        images: string[];
    };
}

export interface FAQPageContent {
    hero: {
        title: string;
        subtitle: string;
        image: string;
    };
    intro: {
        text: string;
    };
    categories: {
        title: string;
        subtitle: string;
        items: {
            question: string;
            answer: string;
        }[];
    }[];
}

export interface CTASection {
    title: string;
    text: string;
}

export interface HomeContent {
    hero: HeroSection;
    about: AboutSection;
    featuredWeddings: Wedding[];
    films: Film[];
    weddingStories: Story[];
    awards: Award[];
    ibtda: IbtdaSection;
    cta: CTASection;
}

export interface AboutPageContent {
    hero: {
        image: string;
        subtitle: string;
        title: string;
    };
    story: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
    };
    philosophy: {
        subtitle: string;
        title: string;
        principles: { title: string; text: string }[];
    };
    team: {
        title: string;
        members: { name: string; role: string; image: string }[];
    };
}

export interface FilmPageContent {
    header: {
        subtitle: string;
        title: string;
    };
    films: {
        id: string;
        title: string;
        category: string;
        date: string;
        description: string;
        thumbnail: string;
    }[];
}

export interface PhotographyPageContent {
    header: {
        subtitle: string;
        title: string;
    };
    weddings: {
        id: string;
        slug: string;
        couple: string;
        description: string;
        image: string;
        categories: string[];
    }[];
}

export interface ContactPageContent {
    hero: {
        title: string;
        subtitle: string;
        image: string;
    };
    intro: {
        text: string;
    };
    info: {
        title: string;
        subtitle: string;
        email: string;
        phone: string;
        location: string;
    };
}
