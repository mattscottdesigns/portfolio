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
import brahminLandingTopsail from "./../images/projects/brahmin-landing-topsail.jpg"
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
import powerbiHeatmapZoomed from "./../images/projects/powerbi-heatmap-zoomed.png"
import powerbiHeatmapModal from "./../images/projects/powerbi-heatmap-modal.png"
import cdsDigitalBackpack from "./../images/projects/digital-backpack.png"
import cdsDigitalBackpackLogo from "./../images/projects/digital-backpack-logo.png"
import cdsDigitalBackpackDemo from "./../images/projects/digital-backpack-demo.jpg"
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
    projectImages: [cdsDigitalBackpackLogo, cdsDigitalBackpackDemo],
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
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    thumbnail: images.massageLoft.thumbnail,
    images: images.massageLoft.projectImages,
    type: ["development", "design"],
    description:
      "Website and logo for a local massage business to display information topics like qualifications and services available. They requested something with earthy colors that gave off a zen feeling while still remaining professional.",
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
      "Brahmin's online catalogs were originally in a flip page format to mimic an physical catalog. However this was not ideal for a digital solution due to UX/accessability issues and responsiveness on smaller screens. In an attempt to fix this we decided to condense the catalog into a single scrollable page. First we needed to break the products into easily digestable sections which meant putting products with complementary patterns together. Then we added shopping carousels with related products that link to a product page for more information and purchasing.",
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
      "The previous customer service pages didn't fit the rest of the website and needed more structure. Users had a tendency to get lost and have a hard time finding the pages they were looking for. The solution was to create a side navigation template that would be used by all the customer service related pages. We also created a collapsable component to better orgranize the large amount of information on the pages.",
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
      "The event management industry was hit hard by COVID-19. This forced us to create new opportunites and help our clients manage events while also being safe. One solution was to use access control when allowing attendee's into the event. This involves scanning each attendee's badge when they enter or exit a hall in the convention center. From this data we created a real time dashboard to monitor the capacity of each hall within the convention center. This allows event management to control the flow of their event safely.",
  },
  {
    id: "cdsShowPro",
    company: "Convention Data Services",
    display: "Show Pro",
    tags: [".NET", "HTML", "CSS", "JavaScript"],
    thumbnail: images.cdsShowPro.thumbnail,
    images: images.cdsShowPro.projectImages,
    type: ["development", "design"],
    description:
      "Show Pro is a self service event management platform. Normally clients would request a website and then it would be built to their specifications and business rules. If they needed any updates they had to put in a request and wait for it to be completed. This changed all that because they could now manage their own events. Users now had the power to create an event, manage attendee/exhibitor registration, setup items for purchase, and design their pages to match the event branding.",
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
      "Events have the potential for complex registration pages depending on the business rules decided by event management. Just a few scenarios are: hiding/showing items based on demographics, items dependent on selecting another item, or representing an item status like required or a reserved time limit. This concept tries to solve this by using clear call to action for the add/remove buttons, collapsable dependent items, and icons/tooltips to keep the UI as clean as possible. ",
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
      "Harmony's purpose was to monitor the internet connectivity of a suite of company applications. If an application registered with Harmony lost connection to the internet, the appropriate people would be notified via text and email. The goal was to create a logo which represented the harmony between elements. I chose to represent that with overlapping letters and the intertwining water droplet and leaf.",
  },
  {
    id: "powerbiHeatmap",
    company: "Convention Data Services",
    display: "Power BI Exhibitor Booth Heatmap",
    tags: ["JavaScript", "HTML", "CSS"],
    thumbnail: images.powerbiHeatmap.thumbnail,
    images: images.powerbiHeatmap.projectImages,
    type: ["development"],
    description:
      "We use Power BI as the back bone for our analytics for out clients. In this case I created a custom visual that uses data from an integration with Map Your Show and A2Z that contains booth coordinates and then used exhibitor lead scan count from the event database as the main metric. Then you can drill down by clicking on each booth to get a list of the exhibitors at the booth and scan counts.",
  },
  {
    id: "cdsDigitalBackpack",
    company: "Convention Data Services",
    display: "Digital Backpack Mobile App",
    tags: [
      "React Native",
      "JavaScript",
      "HTML",
      "CSS",
      "Illustrator",
      "Photoshop",
    ],
    thumbnail: images.cdsDigitalBackpack.thumbnail,
    images: images.cdsDigitalBackpack.projectImages,
    type: ["design", "development"],
    description:
      "Digital Backpack gives exhibitors at events a way to both educate the customer on their products and also gather leads without even having to interact with the attendee. Once the app is installed on the device you can add your products and descriptions about them and then place them around the booth. When an attendee approaches the device they can swipe through the products at their own pace. If the attendee wants more information about the products, they can scan their badge and an email will be automaically sent to their registered email with the information. At the same time the lead gets sent to the exhibitor to follow up on for potential new business.",
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
      "A client had just finished redesigning their company website and wanted to refresh the look of the registration pages we created for them. This concept was an attempt to match that new branding which involved matching fonts, cleaning up spacing between elements, and a new step component to show where they are in the registration process.",
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
      "At least once a month Brahmin would update their landing page to showcase their new or popular products. In this case it was products with their Topsail material which is a smooth leather. The goal was to create something simple and elegant to match the look and feel of Topsail leather.",
  },
  {
    id: "cdsHub",
    company: "Convention Data Services",
    display: "Client Portal",
    tags: [".NET", "HTML", "CSS", "JavaScript"],
    thumbnail: images.cdsHub.thumbnail,
    images: images.cdsHub.projectImages,
    type: ["design", "development"],
    description:
      "CDS has a lot of products all with their own use cases. In order to help with our user experience we created a central hub that they log into using a single set of credentials and can easily switch between available applications. When they select a different application the header moves with you so you can keep moving between applications or go back to the CDS Hub.",
  },
]

export default projects
