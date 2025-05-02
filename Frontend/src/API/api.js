
const HMDT_URL = "http://localhost:8000/hmdt";


async function getHmdt() {
    fetch(HMDT_URL)
    .then(response => {
        if (!response.ok) {
            setHmdtError(true);
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        {console.log('Fetched Data:', data);
            return data;
    }
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setErrorMsg(error);
    }); 
}
const dt =  getHmdt();

export default dt;