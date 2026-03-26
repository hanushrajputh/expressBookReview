const axios = require('axios');

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/author/${author}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Get by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/title/${title}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
