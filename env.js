const env = {
    API_URL: 'http://localhost:8080/api/v1/',
    stripeAPIKey: 'pk_test_51QmCweRuSIuECqCmXLJwLJqdye0BE0HvIoPXkRJcETeGUMt825clnHzuzcj2mbyqlpAKPV6lLNzZWQB8pcM0YmKU00KMa6ZYNw',
    API_URL_STRIPE: 'http://localhost:8080/api/v1',
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