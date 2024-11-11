export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type MenuItem = NavItem & {
  image?: string;
  description?: string;
  launched?: boolean;
  external?: boolean;
  forceReload?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
    | {
      href: string;
      items?: never;
    }
    | {
      href?: string;
      items: MenuItem[];
    }
  );

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    xielab: string;
    foodie: string;
    twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type NavMenuConfig = {
  dataNav: SidebarNavItem[];
  pagesNav: SidebarNavItem[];
  examplesNav: SidebarNavItem[];
  links: MenuItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

// Animes types
export type Airing = {
  id: number;
  episode: number;
  airingAt: number;
  media: Media;
};

export type Media = {
  id: number;
  title: Title;
  coverImage: CoverImage;
  isAdult: boolean;
};

export type DataFile = {
  sample: string
  sampleClass: string
  organism: string
  assay: string
  dataType: string
  fileName: string
  fileSize: string
  downloadUrl: string
}

type Title = {
  userPreferred: string;
};

type CoverImage = {
  extraLarge: string;
  large: string;
};

export type InfoList = {
  icon: string;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
}

export type CellLineInfo = {
  name: string;
  fileSizeR1: string;
  fileSizeR2: string;
}
