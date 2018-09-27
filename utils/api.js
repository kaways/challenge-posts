//Receive Json posts
export const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
//Receive Json photos
export const fetchDataImages = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
//Receive Json users
export const fetchDataUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};