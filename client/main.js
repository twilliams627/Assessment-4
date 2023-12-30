const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector("#fortuneButton");
const luckyNumberBtn = document.querySelector("#luckyNumberButton");
const dateTimeBtn = document.querySelector("#dateTimeButton");
const babyNameBtn = document.querySelector("#babyNameButton");  

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune") 
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getLuckyNumber = () => {
    const range = prompt("1-100") || "";
   
    axios.get(`http://localhost:4000/api/luckyNumber?range=${range}`)
        .then(res => {
            const data = res.data;
            alert(`Your lucky number is: ${data}`);
        })
        .catch(error => {
            console.error('Error fetching lucky number:', error);
        });
};

const getCurrentDateTime = () => {
    axios.get("http://localhost:4000/api/currentDateTime")
        .then(res => {
            const data = res.data;
            alert(`Current Date and Time: ${data}`);
        })
        .catch(error => {
            console.error('Error fetching current date and time:', error);
        });
};

const getBabyName = () => {
    axios.get("http://localhost:4000/api/babyName")
        .then(res => {
            const data = res.data;
            alert(`Here's a random baby name: ${data}`);
        })
        .catch(error => {
            console.error('Error fetching baby name:', error);
        });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
luckyNumberBtn.addEventListener('click', getLuckyNumber);
dateTimeBtn.addEventListener('click', getCurrentDateTime);
babyNameBtn.addEventListener('click', getBabyName);
