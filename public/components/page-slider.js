class PageSlider extends HTMLElement {
  constructor() {
    super();
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange(e) {
    if (e.code === "ArrowLeft") {
      const previousSlidePath = this.getAttribute("previous");
      window.location.assign(previousSlidePath);
    } else if (e.code === "ArrowRight") {
      const nextSlidePath = this.getAttribute("next");
      window.location.assign(nextSlidePath);
    }
  }

  connectedCallback() {
    window.addEventListener("keydown", this.pageChange);

    const previousSlidePath = this.getAttribute("previous");
    const nextSlidePath = this.getAttribute("next");

    this.innerHTML = `
      <div class="page-slider">
        <a id="previous-slide-link" href="${previousSlidePath}" title="Back to previous slide">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
        <a
          id="next-slide-link"
          href="${nextSlidePath}"
          title="Go to next slide"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    `;
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this.pageChange);
  }
}

window.customElements.define("page-slider", PageSlider);
