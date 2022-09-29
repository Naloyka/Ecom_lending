/*
function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('demonstration-page_active');
    }
    });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.demonstration-page');
    for (let elm of elements) {
    observer.observe(elm);
    }
*/

const mainPage1 = document.querySelector(".main-page-1")
const mainPage2 = document.querySelector(".main-page-2")
const mainPage3 = document.querySelector(".main-page-3")

const homePage = [...document.querySelectorAll(".home-page")]

const sidebarItems = document.querySelectorAll('.sidebar__items')
const sidbarLink = [...document.querySelectorAll(".sidbar__link")]

sidebarItems.forEach(item => {
    item.addEventListener('click', (e)=> {
        e.preventDefault()
        let element = e.target
        if (element.closest(".sidbar__link")) {
            let parent = element.closest(".sidebar__items")
            let attr = parent.dataset.name
            console.log(attr)

            sidbarLink.forEach(item => item.classList.remove("sidbar__link_active"))
            element.classList.add('sidbar__link_active')

            // Контент картинки
            homePage.forEach(item => {
                item.style.display = "none"
            })
            if (attr === 'analyst') {
                mainPage1.style.display = "block"
            } else if (attr === 'tools') {
                mainPage2.style.display = "block"
            } else {
                mainPage3.style.display = "block"
            }

        } else {
            return
        }
    })
})