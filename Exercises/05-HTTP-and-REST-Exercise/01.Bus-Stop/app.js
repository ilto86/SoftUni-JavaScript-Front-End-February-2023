async function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const stopIdInput = document.getElementById('stopId');
    const submitBtn = document.getElementById('submit');
    const stationNameDiv = document.getElementById('stopName');
    const ulListOfBuses = document.getElementById('buses');
    const stopIdValue = stopIdInput.value;

    stopIdInput.value = '';
    ulListOfBuses.innerHTML = '';
    stationNameDiv.textContent = '';

    try {
        const response = await fetch(`${BASE_URL}${stopIdValue}`);
        const data = await response.json();
        const { name, buses } = data;
        stationNameDiv.textContent = name;
        for (const [busNumber, time] of Object.entries(buses)) {
            const li = document.createElement('li');
            li.textContent = `Bus ${busNumber} arrives in ${time} minutes`;
            ulListOfBuses.appendChild(li);
        }
    } catch (error) {
        console.error(error);
        stationNameDiv.textContent = 'Error';
    }
}