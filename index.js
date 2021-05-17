import puppeteer from 'puppeteer'

/**
 * @param {puppeteer.Page} page
 * 
 * @returns {Promise<string>} 
 */
export default function (page) {
    return new Promise(async resolve => {
        const message = await page.evaluate(async () => {
            const message = await new Promise(resolve => {
                const toastInterval = setInterval(() => {
                    const toast = document.querySelector('.iziToast')
                    if (toast !== null && toast.innerText.trim()) {
                        resolve(toast.innerText)
                        clearInterval(toastInterval)
                    }
                }, 10)
            })

            return message
        })

        resolve(message)
    })
}
