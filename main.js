const user_profile = document.querySelector("#user-profile")
user_profile.onclick = () => {
    document.querySelector("#user-profile-details").classList.remove("hidden")
    document.querySelector("#preview").classList.add("hidden")
}

const back = document.querySelector("#back")
back.onclick = () => {
    document.querySelector("#preview").classList.remove("hidden")
    document.querySelector("#user-profile-details").classList.add("hidden")
}

function edit_profile_info(info, btn) {
    if (info.hasAttribute("disabled")) {
        info.removeAttribute("disabled")
        info.style.borderBottom = "2px solid rgb(159, 12, 196)"
        btn.innerHTML = `<i class="fas fa-check"></i>`
    } else {
        info.setAttribute("disabled", "disabled")
        info.style.borderBottom = "none"
        btn.innerHTML = `<i class="fas fa-pen"></i>`
    }
}

const edit_name = document.querySelector("#edit-name-btn")
edit_name.onclick = () => edit_profile_info(document.querySelector("#edit-name"), edit_name)

const edit_info = document.querySelector("#edit-info-btn")
edit_info.onclick = () => edit_profile_info(document.querySelector("#edit-info"), edit_info)