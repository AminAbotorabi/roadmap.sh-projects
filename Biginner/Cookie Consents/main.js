function checkCookieConsent() {
    const accepted = localStorage.getItem('cookiesAccepted')
    if (!accepted) {
        document.querySelector('.container').classList.add('show')
    }
}

function acceptedCookies() {
    localStorage.setItem('cookiesAccepted', 'true')
    document.querySelector('.container').classList.remove('show')
}

function customizeSettings() {
    alert('Customize settings functionality would go here')
    acceptedCookies()
}

document.querySelector('.accept-btn').addEventListener('click', acceptedCookies)
document.querySelector('.customize-btn').addEventListener('click', customizeSettings)

document.addEventListener('DOMContentLoaded', checkCookieConsent)