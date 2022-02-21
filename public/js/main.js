const user_profile = document.querySelector("#user-profile")
user_profile.onclick = () => document.querySelector("#user-profile-details").classList.add("show")


const back = document.querySelector("#back")
back.onclick = () => document.querySelector("#user-profile-details").classList.remove("show")

function edit_profile_info(info, btn) {
    info.classList.toggle("active")

    if (info.hasAttribute("disabled")) {
        info.removeAttribute("disabled")
        btn.innerHTML = `<i class="fas fa-check"></i>`
    } else {
        info.setAttribute("disabled", "disabled")
        btn.innerHTML = `<i class="fas fa-pen"></i>`
    }
}

const edit_name = document.querySelector("#edit-name-btn")
edit_name.onclick = () => edit_profile_info(document.querySelector("#edit-name"), edit_name)

const edit_info = document.querySelector("#edit-info-btn")
edit_info.onclick = () => edit_profile_info(document.querySelector("#edit-info"), edit_info)

const chat = document.querySelector(".chat-preview")
chat.onclick = () => document.querySelector(".chat-container").classList.toggle("active")