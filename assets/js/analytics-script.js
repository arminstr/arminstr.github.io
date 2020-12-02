document.addEventListener('DOMContentLoaded', async function(){
    if(sessionStorage.getItem('firebaseInitialized') == 'true'){   
        
    }else{
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCJdatPE8t1ZusE7wRc8Te-WADK9WE1ePA",
            authDomain: "airbee-website.firebaseapp.com",
            databaseURL: "https://airbee-website.firebaseio.com",
            projectId: "airbee-website",
            storageBucket: "airbee-website.appspot.com",
            messagingSenderId: "733844281719",
            appId: "1:733844281719:web:5c35982e2eb2f53dc3a972",
            measurementId: "G-M93SYN8Z0Y"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        // Daten im sessionStorage speichern
        sessionStorage.setItem('firebaseInitialized', 'true');
    }

});
  