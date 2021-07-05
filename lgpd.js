var lgpdUrl = 'https://www.jsonplaceholder.typicode.com/posts';
var lgpdHtml = `
<div class="lgpd">
    <div class="lgpd--left">
        Nós ultilizamos cookies para melhorar a sua  experiência de usuário.<br>
        Para conferir detalhadamente todos os cookies utilizados,leia a nossa <a href=''>política de privacidade</a>.
    </div>
    <div class="lgpd--right">
        <button>ok</button>
    </div>
</div>
<link rel="stylesheet" href="lgpd.css" />
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = lgpdArea.querySelector('button');

    lgpdButton.addEventListener('click', async () =>{
        lgpdArea.remove();

        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if(json.error != ' ') {
            let id = '123'; // aqui normalmente seria json.id;
            localStorage.setItem('lgpd', id);
        }
    });
}