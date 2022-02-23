// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSrsIT_vItQj1vy3E8eWLocA1gjpXEt7g",
    authDomain: "whatsapp-clone-5c435.firebaseapp.com",
    projectId: "whatsapp-clone-5c435",
    storageBucket: "whatsapp-clone-5c435.appspot.com",
    messagingSenderId: "586910136227",
    appId: "1:586910136227:web:cadb26c35608a326a7cc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user)
            // ...

        document.querySelectorAll(".container").forEach((con) => {

            !con.classList.contains("auth") ? con.classList.add("active") : con.classList.remove("active")

        })

    } else {

        document.querySelectorAll(".container").forEach((con) => {

            con.classList.contains("auth") ? con.classList.add("active") : con.classList.remove("active")

        })
    }
});

//END FIREBASE

const toggleRegister = document.querySelector(".toggle-register")
const toggleLogin = document.querySelector(".toggle-login")

toggleRegister.addEventListener('click', () => {
    document.querySelector("#login").classList.add('s-register')
    document.querySelector(".auth-title").classList.add('s-register')
    document.querySelector(".toggle-control").classList.add('s-register')
})

toggleLogin.addEventListener('click', () => {
    document.querySelector("#login").classList.remove('s-register')
    document.querySelector(".auth-title").classList.remove('s-register')
    document.querySelector(".toggle-control").classList.remove('s-register')
})

const registerForm = document.querySelector(".registerSubmit")
const loginForm = document.querySelector(".loginSubmit")

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = registerForm.email.value
    const password = registerForm.password.value


    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            sendEmailVerification(auth.currentUser)
            console.log("it works, user", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            snackbar(errorMessage)
        });

})

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    e.preventDefault()

    const email = registerForm.email.value
    const password = registerForm.password.value

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("it works, user", user)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            snackbar(errorMessage)
        });
})

const logoutButton = document.querySelector("#logout-btn")

logoutButton.addEventListener("click", () => signOut(auth))

const menu = document.querySelector("#menu")
menu.addEventListener("click", () => {
    menu.classList.toggle("active")
})

const snackbar = (msg) => {
    const _snackbar = document.createElement('div')
    _snackbar.setAttribute('class', 'snackbar')

    const _msg = document.createElement('span')
    _msg.setAttribute('class', 'msg')
    _msg.innerText = msg

    const btn = document.createElement('button')
    btn.setAttribute('class', 'btn')
    btn.innerHTML = `<i class="fas fa-times-circle"></i>`
    btn.onclick = () => document.querySelector('.snackbar-container').removeChild(_snackbar)

    _snackbar.append(_msg, btn)
    document.querySelector('.snackbar-container').append(_snackbar)

    setTimeout(() => {
        document.querySelector('.snackbar-container').removeChild(_snackbar)
    }, 5000)
}