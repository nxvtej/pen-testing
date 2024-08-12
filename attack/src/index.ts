import axios from 'axios'


async function sendRequest(otp: string) {
    let data = JSON.stringify({
        "email": "nxvtej@gmail.com",
        "otp": otp,
        "newPassword": "1234789"
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/reset-password',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    await axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
}

sendRequest("639740");