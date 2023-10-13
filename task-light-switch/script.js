Vue.createApp({
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark;
      if (this.dark) {
        document.body.classList.add("body-dark");
        document.title = "Good night";
      } else {
        document.body.classList.remove("body-dark");
        document.title = "Good morning";
      }
    },
  },
}).mount("#app");
