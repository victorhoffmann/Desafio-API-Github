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
                let data = formataData(result[campo])
                document.querySelector('#updated_at').innerText = 'Última atualização: ' + data;
            } 

            if ((document.querySelector('#'+campo)) === (document.querySelector('#created_at'))) {
                let data = formataData(result[campo])
                document.querySelector('#created_at').innerText = 'Desde: ' + data;
            } 

            function formataData(dates) {
                let split = dates.split('T');
                let formatada = split[0].split('-');
                let final = formatada[2]+'/'+formatada[1]+'/'+formatada[0];
                return final
            }
        }
        document.querySelector('#avatarBlank').href = `https://github.com/${usuario.value}`;
        document.querySelector(".main").style.display = 'block';
    }
}