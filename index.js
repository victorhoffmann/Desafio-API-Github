document.querySelector('button').onclick = () => {
    let usuario = document.querySelector('#username');

    fetch(`https://api.github.com/users/${usuario.value}`).then(dados => dados.json()).then(tratados => retorno(tratados));

    const retorno = (result) => {
        for (const campo in result){
            if (document.querySelector('#'+campo)){

                if ((document.querySelector('#'+campo)) === (document.querySelector('#updated_at'))) {
                    let data = result[campo]
                    let split = data.split('T');
                    let formatada = split[0].split('-');
                    let final = formatada[2]+'/'+formatada[1]+'/'+formatada[0];
                    document.querySelector('#updated_at').innerText = 'Última atualização: ' + final;
                } 

                if ((document.querySelector('#'+campo)) === (document.querySelector('#created_at'))) {
                    let data = result[campo]
                    let split = data.split('T');
                    let formatada = split[0].split('-');
                    let final = formatada[2]+'/'+formatada[1]+'/'+formatada[0];
                    document.querySelector('#created_at').innerText = 'Desde: ' + final;
                } 
                
                else {
                    document.querySelector('#'+campo).innerText = result[campo];
                    document.querySelector('#'+campo).src = result[campo];
                }
            }
        }
    }  
    document.querySelector('#avatarBlank').href = `https://github.com/${usuario.value}`;
    document.querySelector(".main").style.display = 'block';
}