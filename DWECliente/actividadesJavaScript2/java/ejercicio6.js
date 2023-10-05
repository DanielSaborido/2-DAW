const Ghost = {
    colors: [],
    init() {
        const colorList = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "cyan", "magenta", "lime", "black", "white"];
        for (let i = 0; i < 1000; i++) {
            const randomColor = colorList[Math.floor(Math.random() * colorList.length)];
            this.colors.push(randomColor);
        }

        this.displayColors();
    },
    displayColors() {
        const resultDiv = document.getElementById("Result");
        this.colors.forEach((color, index) => {
            const colorBox = document.createElement("div");
            colorBox.style.backgroundColor = color;
            colorBox.style.width = "200px";
            colorBox.style.height = "200px";
            colorBox.style.margin = "5px";
            colorBox.style.display = "inline-block";
            colorBox.textContent = `Color ${index + 1}: ${color}`;
            colorBox.style.textAlign = "center";
            resultDiv.appendChild(colorBox);
        });
    }
};

Ghost.init();