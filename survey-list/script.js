const list = [
    "Bypass level indicator",
    "Customised logos on dials of pointer measuring instruments",
    "Diaphragm seals",
    "DirectDrive",
    "External chambers",
    "Float switches, horizontal mounting",
    "Glass level gauge, glass tube, LGG-GA",
    "Glass level gauge, glass tube, LGG-GB",
    "Glass level gauge, high-pressure version, transparent and reflex version",
    "Glass level gauge, reflex version, LGG-E",
    "Glass level gauge, refraction version",
    "Glass level gauge, transparent and reflex version",
    "Glass level gauge, weld-in version, reflex version",
    "Level transmitters",
    "Primary flow elements",
    "Questionnaire for float switches, vertical installation",
    "Reactor multipoints, to determine linear temperature profiles",
    "Reactor multipoints, to determine radial temperature profiles",
    "Restriction orifices",
    "Sampling probe/injection quill, for monoblock models IBS3 and IBJ4",
    "Thermowells",
    "Tubeskin sensor application"
]

function catalogRedirect() {
    window.location.href = "../catalog/index.html"
}

document.addEventListener("DOMContentLoaded", function() {
    const wika = document.getElementById("wika")

    list.forEach((item, index) => {
        let newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class="card shadow bg-white p-6 h-[200px]">
            <div class="flex flex-col justify-between h-full">
                <div class="text-base font-medium">${item}</div>
                <div class="flex items-center space-x-2">
                    <p class="open font-light text-gray-700 uppercase">Открыть</p>
                    <div class="line border-b border-1 border-gray-500 w-[100px]"></div>
                </div>
            </div>
        </div>
        `
        wika.appendChild(newElement)
    })
})