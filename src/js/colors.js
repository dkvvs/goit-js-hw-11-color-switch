const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startColorChangeBtn = document.querySelector(
  'button[data-action="start"]',
);
const stopColorChangeBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changer = {
  isActive: false,
  onColorChange() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const i = randomIntegerFromInterval(0, colors.length);
      document.body.style.backgroundColor = colors[i];
    }, 1000);
  },
  onStopColorChange() {
    clearInterval(this.intervalId);
    this.isActive = false;
    document.body.style.backgroundColor = colors[0];
  },
};

startColorChangeBtn.addEventListener(
  'click',
  changer.onColorChange.bind(changer),
);
stopColorChangeBtn.addEventListener(
  'click',
  changer.onStopColorChange.bind(changer),
);
