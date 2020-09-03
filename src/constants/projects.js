import massageLoft from "./../images/projects/massage-loft.png"
import massageLoftLogo from "./../images/projects/massage-loft-logo.png"
import massageLoftWebsite from "./../images/projects/massage-loft-website.png"
import brahminDigitalCatalog from "./../images/projects/brahmin-digital-catalog.png"
import brahminDigitalCatalogFull from "./../images/projects/brahmin-digital-catalog-full.png"
import brahminCustomerService from "./../images/projects/brahmin-customer-service.png"
import brahminSupportContact from "./../images/projects/brahmin-support-contact.png"
import brahminSupportShipping from "./../images/projects/brahmin-support-shipping.png"
import brahminSupportReturns from "./../images/projects/brahmin-support-returns.png"
import brahminSupportRepairs from "./../images/projects/brahmin-support-repairs.png"
import brahminSupportGiftServices from "./../images/projects/brahmin-support-gift-services.png"
import brahminSupportCare from "./../images/projects/brahmin-support-care.png"
import brahminLandingPage from "./../images/projects/brahmin-landing-page.png"
import brahminLandingTopsail from "./../images/projects/brahmin-landing-topsail.png"
import cdsDensityManagement from "./../images/projects/cds-density-management.png"
import cdsDensityManagementFull from "./../images/projects/cds-density-management-full.png"
import cdsShowPro from "./../images/projects/cds-showpro.png"
import cdsShowProSelectEvent from "./../images/projects/cds-showpro-select-event.png"
import cdsShowProEventInformation from "./../images/projects/cds-showpro-event-information.png"
import cdsShowProPlugins from "./../images/projects/cds-showpro-plugins.png"
import cdsShowProCart from "./../images/projects/cds-showpro-cart.png"
import cdsShowProCartFull from "./../images/projects/cds-showpro-cart-full.png"
import harmony from "./../images/projects/harmony.png"
import harmonyLogo from "./../images/projects/harmony-logo.png"
import powerbiHeatmap from "./../images/projects/powerbi-heatmap.png"
import powerbiHeatmapFull from "./../images/projects/powerbi-heatmap-full.png"
import powerbiHeatmapZoomed from "./../images/projects/powerbi-heatmap-zoomed.png"
import powerbiHeatmapModal from "./../images/projects/powerbi-heatmap-modal.png"
import cdsDigitalBackpack from "./../images/projects/digital-backpack.png"
import cdsDigitalBackpackLogo from "./../images/projects/digital-backpack-logo.png"
import cdsPrimed from "./../images/projects/cds-primed.png"
import cdsPrimedFull from "./../images/projects/cds-primed-full.png"
import cdsHub from "./../images/projects/cds-hub.png"
import cdsHubHome from "./../images/projects/cds-hub-home.png"
import cdsHubLogin from "./../images/projects/cds-hub-login.png"
import cdsHubSelectEvent from "./../images/projects/cds-hub-select-event.png"
import cdsHubHelp from "./../images/projects/cds-hub-help.png"

export const images = {
  massageLoft: {
    thumbnail: massageLoft,
    projectImages: [massageLoftWebsite, massageLoftLogo],
  },
  brahminDigitalCatalog: {
    thumbnail: brahminDigitalCatalog,
    projectImages: [brahminDigitalCatalogFull],
  },
  brahminCustomerService: {
    thumbnail: brahminCustomerService,
    projectImages: [
      brahminSupportContact,
      brahminSupportShipping,
      brahminSupportReturns,
      brahminSupportRepairs,
      brahminSupportGiftServices,
      brahminSupportCare,
    ],
  },
  cdsDensityManagement: {
    thumbnail: cdsDensityManagement,
    projectImages: [cdsDensityManagementFull],
  },
  cdsShowPro: {
    thumbnail: cdsShowPro,
    projectImages: [
      cdsShowProSelectEvent,
      cdsShowProEventInformation,
      cdsShowProPlugins,
    ],
  },
  cdsShowProCart: {
    thumbnail: cdsShowProCart,
    projectImages: [cdsShowProCartFull],
  },
  harmony: {
    thumbnail: harmony,
    projectImages: [harmonyLogo],
  },
  powerbiHeatmap: {
    thumbnail: powerbiHeatmap,
    projectImages: [powerbiHeatmapModal, powerbiHeatmapZoomed],
  },
  cdsDigitalBackpack: {
    thumbnail: cdsDigitalBackpack,
    projectImages: [cdsDigitalBackpackLogo],
  },
  cdsPrimed: {
    thumbnail: cdsPrimed,
    projectImages: [cdsPrimedFull],
  },
  brahminLandingPage: {
    thumbnail: brahminLandingPage,
    projectImages: [brahminLandingTopsail],
  },
  cdsHub: {
    thumbnail: cdsHub,
    projectImages: [cdsHubLogin, cdsHubSelectEvent, cdsHubHome, cdsHubHelp],
  },
}

export const projects = [
  {
    id: "massageLoft",
    company: "Massage Loft",
    display: "Company Website",
    tags: ["PHP", "jQuery", "HTML", "CSS"],
    thumbnail: images.massageLoft.thumbnail,
    images: images.massageLoft.projectImages,
    type: ["development", "design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "brahminDigitalCatalog",
    company: "Brahmin Leather Works",
    display: "Digital Catalog Concept",
    tags: ["XD", "Photoshop", "HTML", "CSS"],
    thumbnail: images.brahminDigitalCatalog.thumbnail,
    images: images.brahminDigitalCatalog.projectImages,
    type: ["design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "brahminCustomerService",
    company: "Brahmin Leather Works",
    display: "Customer Service Pages",
    tags: ["XD", "Photoshop", "HTML", "CSS", "JavaScript"],
    thumbnail: images.brahminCustomerService.thumbnail,
    images: images.brahminCustomerService.projectImages,
    type: ["design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "cdsDensityManagement",
    company: "Convention Data Services",
    display: "Density Management Dashboard",
    tags: ["HTML", "CSS", "JavaScript"],
    thumbnail: images.cdsDensityManagement.thumbnail,
    images: images.cdsDensityManagement.projectImages,
    type: ["development"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "cdsShowPro",
    company: "Convention Data Services",
    display: "Show Pro",
    tags: [".NET", "HTML", "CSS", "jQuery"],
    thumbnail: images.cdsShowPro.thumbnail,
    images: images.cdsShowPro.projectImages,
    type: ["development", "design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "cdsShowProCart",
    company: "Convention Data Services",
    display: "Event Registration Items Concept",
    tags: ["XD"],
    thumbnail: images.cdsShowProCart.thumbnail,
    images: images.cdsShowProCart.projectImages,
    type: ["design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "harmony",
    company: "Harmony",
    display: "Logo Design",
    tags: ["Illustrator"],
    thumbnail: images.harmony.thumbnail,
    images: images.harmony.projectImages,
    type: ["design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "powerbiHeatmap",
    company: "Convention Data Services",
    display: "Power BI Exhibitor Booth Heatmap",
    tags: ["JavaScript", "ES6", "HTML", "CSS"],
    thumbnail: images.powerbiHeatmap.thumbnail,
    images: images.powerbiHeatmap.projectImages,
    type: ["development"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "cdsDigitalBackpack",
    company: "Convention Data Services",
    display: "Digital Backpack Mobile App",
    tags: ["JavaScript", "ES6", "HTML", "CSS", "Illustrator", "Photoshop"],
    thumbnail: images.cdsDigitalBackpack.thumbnail,
    images: images.cdsDigitalBackpack.projectImages,
    type: ["design", "development"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "cdsPrimed",
    company: "Convention Data Services",
    display: "Client Registration Page Redesign",
    tags: ["XD"],
    thumbnail: images.cdsPrimed.thumbnail,
    images: images.cdsPrimed.projectImages,
    type: ["design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "brahminLandingPage",
    company: "Brahmin Leather Works",
    display: "Landing Page",
    tags: ["XD", "Photoshop", "HTML", "CSS"],
    thumbnail: images.brahminLandingPage.thumbnail,
    images: images.brahminLandingPage.projectImages,
    type: ["design"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
  {
    id: "cdsHub",
    company: "Convention Data Services",
    display: "Client Portal",
    tags: [".NET", "HTML", "CSS", "jQuery"],
    thumbnail: images.cdsHub.thumbnail,
    images: images.cdsHub.projectImages,
    type: ["design", "development"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
  },
]

export default projects
