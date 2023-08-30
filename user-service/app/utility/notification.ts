import twilio from "twilio";

const accountSid = "AC4dbf4c25f4ea6ff8d0fd2279a255c987";
const authToken = "9c2adcbd262fd52afaf31389346b6223";

const client = twilio(accountSid, authToken);

export const GenerateAccessCode = () => {
    const code = Math.floor(10000 + Math.random() * 900000);
    let expiry = new Date();
    expiry.setTime(new Date().getTime() + 30 * 60 * 1000);
    return { code, expiry};
};

export const SendVerificationCode = async (
    code: number,
    toPhoneNumber: string
) => {

    const response = await client.messages.create({
        body: `Votre code de verification est ${code} a cheliqaaaaaa n kenza qui va expirer dans 30 minutes`,
        from: "+12059315471",
        // "+18138963397"
        to: toPhoneNumber.trim(),
    });
    console.log(response);
    return response;
};