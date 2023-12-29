class Counter {
    constructor() {
      this.count = 0;
      this.intervalId = null;
      this.autoIncrementEnabled = false;

      this.startStopButton = document.getElementById('startStopButton');
      this.incrementButton = document.getElementById('incrementButton');
      this.decrementButton = document.getElementById('decrementButton');
      this.countDisplay = document.getElementById('countDisplay');

      this.startStopButton.addEventListener('click', this.toggleStartStop.bind(this));
      this.incrementButton.addEventListener('click', this.increment.bind(this));
      this.decrementButton.addEventListener('click', this.decrement.bind(this));
    }

    toggleStartStop() {
      if (this.autoIncrementEnabled) {
        this.stopAutoIncrement();
      } else {
        this.startAutoIncrement();
      }
    }

    startAutoIncrement() {
      this.autoIncrementEnabled = true;
      this.intervalId = setInterval(() => {
        this.count++;
        this.updateDisplay();
      }, 1000);

      this.startStopButton.textContent = 'Stop';
    }

    stopAutoIncrement() {
      this.autoIncrementEnabled = false;
      clearInterval(this.intervalId);
      this.startStopButton.textContent = 'Start';
    }

    increment() {
      this.stopAutoIncrement();
      this.count++;
      this.updateDisplay();
    }

    decrement() {
      this.stopAutoIncrement();
      this.count--;
      this.updateDisplay();
    }

    updateDisplay() {
      this.countDisplay.textContent = this.count;
    }
  }

  // Instantiate the Counter class
  const counter = new Counter();