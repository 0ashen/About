module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/aboutme-contacts-skills',
                permanent: true,
            },
        ]
    },
}