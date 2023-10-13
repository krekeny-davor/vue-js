Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    handleMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruit(fruit) {
      this.fruitBasket = this.fruitBasket.filter(
        (current) => current !== fruit
      );
    },
  },
}).mount("#app");
