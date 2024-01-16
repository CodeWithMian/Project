/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_URL:"http://localhost:3000",
        DB_URI:"mongodb+srv://mianbilal:mianbilal123@cluster0.g8p1c6j.mongodb.net/buy-it-now"

    },
    images:{
        domains:["res.cloudinary.com"],
    }
}

module.exports = nextConfig
