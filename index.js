import * as dotenv from 'dotenv';
dotenv.config();
import * as PushAPI from '@pushprotocol/restapi';
import * as ethers from 'ethers';

const PK = process.env.PRIVATE_KEY; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
	try {
		const apiResponse = await PushAPI.payloads.sendNotification({
			signer,
			type: 3, // target
			identityType: 2, // direct payload
			notification: {
				title: `This is notification TITLE:`,
				body: `Hemlo, notification BODY`,
			},
			payload: {
				title: `This is payload title`,
				body: `hello bhamiya, kaise ho?`,
				cta: '',
				img: '',
			},
			recipients: 'eip155:5:0x4e76d6B2404d59D01bD50e159A775044d37debdA', // recipient address
			channel: 'eip155:5:0x31B0F3eeD8cAFA7D09C862b7779AAc826F3c4468', // your channel address
			env: 'staging',
		});

		// apiResponse?.status === 204, if sent successfully!
		console.log('API repsonse: ', apiResponse);
	} catch (err) {
		console.error('Error: ', err);
	}
};

sendNotification();
