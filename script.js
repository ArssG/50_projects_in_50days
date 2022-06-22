function loadprojects(){
    fetch('links.json')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(pages){
                html += `
                <div class="card">
                    <img src="Assets/img/1.PNG${pages.image}" alt="">
                    <p class="card_title">${pages.title}</p>
                    <p class="card_info">${pages.description}</p>
                    <div class="card_buttons">
                        <a href="Projects/Day ${pages.page}/index.html"><button id="preview">Preview</button></a>
                        <a href="${pages.link}"><button id="code">Code</button>
                    </div>
                </div>
                `;
            })
            document.getElementById('container').innerHTML = html;
        })
        .catch(function(error){
            console.log(error);
        })
}
loadprojects();