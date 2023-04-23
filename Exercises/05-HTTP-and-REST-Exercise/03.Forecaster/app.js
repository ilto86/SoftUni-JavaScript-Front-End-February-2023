function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const TODAY_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    const locationInput = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    submitBtn.addEventListener('click', async () => {
        const cityName = locationInput.value;
        let cityCode = null;

        try {
            const locationResponse = await fetch(BASE_URL);
            const locationData = await locationResponse.json();
            cityCode = locationData.find(location => location.name === cityName).code;

            const todayResponse = await fetch(`${TODAY_URL}${cityCode}`);
            const todayData = await todayResponse.json();
            const { name, forecast } = todayData;
            const { condition, high, low } = forecast;

            const symbolMap = {
                'Sunny': '&#x2600;',
                'Partly sunny': '&#x26C5;',
                'Overcast': '&#x2601;',
                'Rain': '&#x2614;',
            };

            const symbol = symbolMap[condition] ?? '';
            const temperature = `${low}&#176;/${high}&#176;`;

            currentDiv.innerHTML =
                `<div class="label">Current conditions</div>
                <div class="forecast">
                    <span class="condition symbol">${symbol}</span>
                    <span class="condition">
                        <span class="forecast-data">${name}</span>
                        <span class="forecast-data">${temperature}</span>
                        <span class="forecast-data">${condition}</span>
                    </span>
                </div>`;
            
            forecastDiv.style.display = 'inline-block';
            const upcomingResponse = await fetch(`${UPCOMING_URL}${cityCode}`);
            const upcomingData = await upcomingResponse.json();

            upcomingDiv.innerHTML =
                `<div class="label">Three-day forecast</div>
                <div class="forecast-info">
                    ${upcomingData.forecast.map(day => `
                        <span class="upcoming">
                            <span class="symbol">${symbolMap[day.condition]}</span>
                            <span class="forecast-data">${day.low}&#176;/${day.high}&#176;</span>
                            <span class="forecast-data">${day.condition}</span>
                        </span>`).join('')}
                </div>`;
        } catch (error) {
            currentDiv.innerHTML =
                `<div class="label">Error</div>
                <div class="forecast">
                    <span class="condition symbol">&#x26A0;</span>
                    <span class="condition">
                        <span class="forecast-data">Something went wrong...</span>
                    </span>
                </div>`;
        }
    });
}

attachEvents();