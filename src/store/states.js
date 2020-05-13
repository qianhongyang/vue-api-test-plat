let defaultPlace = '北京';

if (sessionStorage.city) {
    defaultPlace = sessionStorage.city
}

export default {
    city: defaultPlace
}
