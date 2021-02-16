document.querySelector('button').onclick = () => {
    let usuario = document.querySelector('#username');

    fetch(`https://api.github.com/users/${usuario.value}`)
    .then(response => {
        if (response.status === 404) {
            return alert('Usuario não encontrado!')
        }
        else {
            return response.json().then(tratados => retorno(tratados))            
        }});
        

    const retorno = (result) => {
        for (const campo in result){
            if (document.querySelector('#'+campo)){
                document.querySelector('#'+campo).innerText = result[campo];
                document.querySelector('#'+campo).src = result[campo];
            }
    
            if ((document.querySelector('#'+campo)) === (document.querySelector('#updated_at'))) {
                document.querySelector('#updated_at').innerText = 'Última atualização: ' + new Date(result[campo]).toLocaleDateString();
            } 

            if ((document.querySelector('#'+campo)) === (document.querySelector('#created_at'))) {
                document.querySelector('#created_at').innerText = 'Desde: ' + new Date(result[campo]).toLocaleDateString();
            }
        }
        document.querySelector('#avatarBlank').href = `https://github.com/${usuario.value}`;
        document.querySelector(".main").style.display = 'block';
    }
}