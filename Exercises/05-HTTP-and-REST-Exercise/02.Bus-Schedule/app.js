function solve() {
    const stationNameDiv = document.querySelector('#info > span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStopId = 'depot';
    let stopName = null;

    function depart() {
        arriveBtn.disabled = false;
        departBtn.disabled = true;
        fetch(`${BASE_URL}${nextStopId}`)
            .then((response) => response.json())
            .then((nextStopInfo) => {
                // console.log(nextStopInfo);y
                const { name, next } = nextStopInfo;
                // console.log(`Station Name: "${name}" Next Station ID: "${next}"`);
                stationNameDiv.textContent = `Next stop ${name}`;
                nextStopId = next;
                stopName = name;
            })
            .catch(() => {
                stationNameDiv.textContent = 'Error';
                arriveBtn.disabled = true;
                departBtn.disabled = true;
            });
    }

    async function arrive() {
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        stationNameDiv.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();