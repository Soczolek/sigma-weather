@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans:wght@900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:wght@700&display=swap');
* {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    font-style: normal;
    color: #fff;
}
body {
    background-color: #fff;
    background-image: url(../img/background-image.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
}
header {
    background-color: #1a1a1d;
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
h1 {
    padding-left: 50px;
    text-align: center;
    top: 50%;
}
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 30px;
    background-color: #4e4e50;
    opacity: 75%;
    margin-bottom: 15px;
}
.search {
    padding: 8px;
    border: none;
    border-radius: 0;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
    box-sizing: border-box;
    width: auto;
    outline: none;
    font-weight: 300;
    margin-right: 25px;
}
.search::placeholder {
    color: #fff;
}
.search-button {
    border: 1px solid white;
    padding: 8px;
    border-radius: 50%;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-button:hover {
    background-color: #aaaaaa;
}
.fa-search {
    font-size: 16px;
    color: #fff;
    align-items: center;
}
.fa-location-arrow {
    font-size: 20px;
    padding-right: 5px;
}
.time {
    font-size: 64px;
    font-weight: 300;
}
.date {
    font-size: 32px;
}
.location {
    font-size: 24px;
    padding-top: 24px;
    font-weight: 400;
}
.current-weather {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 350px;
    margin: 50px auto;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 50px;
    background: rbga(0, 0, 0, 0.8);
    backdrop-filter: saturate(120%) blur(10px);
}
.temp {
    opacity: 100%;
    font-weight: 400;
    font-size: 64px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.temp-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.current-weather-location {
    font-size: 24px;
    font-weight: 300;
}
.current-weather-location1 {
    display: flex;
    font-size: 24px;
    font-weight: 300;
}
.weather-content {
    display: flex;
    justify-content: center;
    align-items: center;
}
.weather-img {
    display: block;
    height: auto;
    margin-right: auto;
    margin-left: auto;
}
.forecast-text{
    font-size: 32px;
    font-weight: 200;
    justify-content: center;
}
.forecast {
    font-size: 32px;
    font-weight: 200;
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
}
.forecast1,
.forecast2,
.forecast3,
.forecast4,
.empty-forecast {
    width: 350px;
    height: 350px;
    margin: 10px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    padding: 50px;
    box-sizing: border-box;
    background: rbga(0, 0, 0, 0.8);
    backdrop-filter: saturate(120%) blur(10px);
}
.empty-forecast {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
}
.forecast-temp{
    font-size: 64px;
    font-weight: 400;
}
footer{
    display: flex;
    font-size: 20px;
    width: 100%;
    height: 75px;
    background-color: #fff;
    margin-top: 50px;
    background-color: rgb(78, 78, 80);
    justify-content: center;
    align-items: center;
}
