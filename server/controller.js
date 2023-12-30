module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "You will not die today.",
            "You're favorite sports team will lose and it's all your fault.",
            "Your hard work will pay off soon.",
            "Good things come to those who wait.",
            "Believe in yourself!"
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    }
};

getLuckyNumber: (req, res) => {
    let min = 1;
    let max = 100;
   
    if (req.query.range) {
        const range = parseInt(req.query.range);
        if (!isNaN(range) && range > 0) {
            max = range;
        }
    }

    const luckyNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    res.status(200).send(luckyNumber.toString());
}

getCurrentDateTime: (req, res) => {
    const currentDateTime = new Date().toLocaleString();
    res.status(200).send(currentDateTime);
}

getBabyName: (req, res) => {
    const babyNames = ["Katrina", "Camden", "Mila", "Whitney", "Richard", "Peter"];
    let randomIndex = Math.floor(Math.random() * babyNames.length);
    let randomBabyName = babyNames[randomIndex];
    res.status(200).send(randomBabyName);
}