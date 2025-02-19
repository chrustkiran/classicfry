const host_test = 'https://2bbuprb2vf.execute-api.eu-west-2.amazonaws.com/dev'
const host_local = 'http://localhost:8080'
const host = host_test
const env = {
    API_URL: `${host}/api/v1/`,
    stripeAPIKey: 'pk_test_51QmCweRuSIuECqCmXLJwLJqdye0BE0HvIoPXkRJcETeGUMt825clnHzuzcj2mbyqlpAKPV6lLNzZWQB8pcM0YmKU00KMa6ZYNw',
    API_URL_STRIPE: `${host}/api/v1`,
    DEFAULT: 'REGULAR',
    USER: "classic-fry-user",
    ITEM_TYPE : Object.freeze({
        ITEM: 'ITEM',
        DEAL: 'DEAL'
    }),
    PAYMENT_TYPE: Object.freeze({
        COUNTER: 'COUNTER',
        ONLINE: 'ONLINE'
    })
}

export default env;