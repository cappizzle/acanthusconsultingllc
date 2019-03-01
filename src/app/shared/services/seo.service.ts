import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";


@Injectable()
export class SeoService {
  constructor(private meta: Meta, private title: Title) {

  }

  generateTags(config) {
    config = {
      title: "Acanthus Consulting LLC",
      description: "Acanthus Consulting LLC - ",
      image: "",
      slug: '',
      robots: "index,follow",
      ...config
    }

    this.title.setTitle( config.title )

    this.meta.updateTag({ property: "robots", content: config.robots })

    this.meta.updateTag({ property: "twitter:card", content: "summary" })
    this.meta.updateTag({ property: "twitter:site", content: "https://acanthusconstultingllc.com" })
    this.meta.updateTag({ property: "twitter:title", content: config.title })
    this.meta.updateTag({ property: "twitter:description", content: config.description })
    this.meta.updateTag({ property: "twitter:image", content: config.image })

    this.meta.updateTag({ property: "og:type", content: "article" })
    this.meta.updateTag({ property: "og:site_name", content: "Acanthus Consulting LLC" })
    this.meta.updateTag({ property: "og:title", content: config.title })
    this.meta.updateTag({ property: "og:description", content: config.description })
    this.meta.updateTag({ property: "og:image", content: config.image })
    this.meta.updateTag({ property: "og:url", content: `https://www.acanthusconstultingllc.com/${config.slug}` })
  }
}