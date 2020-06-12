let APP_URL = '';
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
    APP_URL = 'http://localhost/emp-mgt-api/';
}else{
    //APP_URL = `${process.env.PUBLIC_URL}/`;
    APP_URL = 'https://gen2wind-emp-mgt-api.herokuapp.com/';
}

const API_PATH = 'api/';

export  const CONFIG = {
    APP_ENDPOINT:APP_URL+API_PATH,
};