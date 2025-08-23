async function loadData() {
    let data = [
        {
            "logo": "./assets/images/logo-devlens.svg",
            "name": "DevLens",
            "description": "Quickly inspect page layouts and visualize element boundaries.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-style-spy.svg",
            "name": "StyleSpy",
            "description": "Instantly analyze and copy CSS from any webpage element.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-speed-boost.svg",
            "name": "SpeedBoost",
            "description": "Optimizes browser resource usage to accelerate page loading.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-json-wizard.svg",
            "name": "JSONWizard",
            "description": "Formats, validates, and prettifies JSON responses in-browser.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-tab-master-pro.svg",
            "name": "TabMaster Pro",
            "description": "Organizes browser tabs into groups and sessions.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-viewport-buddy.svg",
            "name": "ViewportBuddy",
            "description": "Simulates various screen resolutions directly within the browser.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-markup-notes.svg",
            "name": "Markup Notes",
            "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-grid-guides.svg",
            "name": "GridGuides",
            "description": "Overlay customizable grids and alignment guides on any webpage.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-palette-picker.svg",
            "name": "Palette Picker",
            "description": "Instantly extracts color palettes from any webpage.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-link-checker.svg",
            "name": "LinkChecker",
            "description": "Scans and highlights broken links on any page.",
            "isActive": true
        },
        {
            "logo": "./assets/images/logo-dom-snapshot.svg",
            "name": "DOM Snapshot",
            "description": "Capture and export DOM structures quickly.",
            "isActive": false
        },
        {
            "logo": "./assets/images/logo-console-plus.svg",
            "name": "ConsolePlus",
            "description": "Enhanced developer console with advanced filtering and logging.",
            "isActive": true
        }
    ]
    return data;
}
loadData();


async function displayCards(userSelected) {
    const data = await loadData();
    console.log(data);
    const cards = document.querySelector('.cards');
    cards.innerHTML='';
    filteredData=[]
    if (userSelected == 'all') {
       filteredData=data;
    }
    else if (userSelected == 'active') {
        filteredData=data.filter(item=>item.isActive);
        console.log(filteredData);
    }
    else if (userSelected == 'inactive') {
        filteredData=data.filter(item=>!item.isActive);
    }
filteredData.forEach(item=>{
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML =`
     <div class="about">
                <img src="${item.logo}">
                <div class="description">
                    <h2>${item.name}</h2>
                    <p>"${item.description}"</p>
                </div>
            </div>

            <div class="toggle">
                <div id="remove" class="theme">Remove</div>
                <label class="switch">
                    <input type="checkbox"${item.isActive ? 'checked' : ''}>
                    <span class="slider round"></span>
                </label>
            </div>
             `;
             cards.appendChild(card);
             const remove=card.querySelector('#remove');
            //  console.log(remove);
             remove.addEventListener('click',function(){
                card.remove();
             })
    
})
}


document.querySelector('.status').addEventListener('click', function (event) {
    if(event.target.classList.contains('theme')) {
        let userSelected = event.target.id;
        displayCards(userSelected);
        document.querySelectorAll('.theme').forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');
    }
});

// YOU CANT DO THIS HERE BECAUSE DISPLAYCARDS IS COMING AT TOP ONLY AND WE DONT RECIEVE REMOVE 
// document.querySelector('#remove')?.addEventListener('click',function(event){
//     const card= event.target.parentElement;
//     console.log(card);
//     if(card){
//     card.remove();
//     }
// })

const modeBtn = document.getElementById('mode');
let darkMode = true;

modeBtn.addEventListener('click', function() {
    darkMode = !darkMode;

if(!darkMode){
    document.body.classList.add('light');
    modeBtn.src='/Users/macbook/challenge-1/assets/images/icon-moon.svg';
}
else {
    document.body.classList.remove('light');
    modeBtn.src='/Users/macbook/challenge-1/assets/images/icon-sun.svg'
}
})
