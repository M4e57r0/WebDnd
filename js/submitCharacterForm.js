const form = document.getElementById('character-form');
form.addEventListener("submit", function (e) {
    const formData = new FormData(form);

    const jsonData = {};
    formData.forEach(function(value, key){
        jsonData[key] = value;
    });

    fetch('https://dnd.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
        .then(response => {
            console.log(response.statusText);
            if (response.ok) {
                console.log('Data submitted successfully');
            } else {
                console.error('Failed to submit data');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});