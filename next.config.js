/** @type {import('next').NextConfig} */
const nextConfig = {
    // add fakestoreapi.com to  the list of allowed domains
    images: { 
        domains: ['fakestoreapi.com'],
    },
    experimental: {
        serverActions: true,
    }
    
}

module.exports = nextConfig
