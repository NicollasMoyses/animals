function verificar() {
    var animal = document.getElementsByName('txtanm');
    var beleza = document.getElementsByName('txtan');
    var img = document.createElement('img');
    var res = document.getElementById('res');

    if (animal[0].checked && beleza[0].checked) {
        var img = document.createElement('img');
        img.setAttribute('src', 'tobias.png');
        res.innerText=('Tobias tonto feio')
        var res = document.getElementById('res');
        res.appendChild(img);
    } else if(animal[1].checked && beleza[1].checked) {
        img.setAttribute('src','lola.png')
        res.innerText = (`Lola linda`)
        res.appendChild(img)
    } else if (animal[1].checked && beleza[0].checked) {
        img.setAttribute('src','chanel.png')
        res.innerText= ('Muito feia KKKKKKKKKK')
        res.appendChild(img)
        
    } else if(animal[0].checked && beleza [1].checked) {
        img.setAttribute('src', 'aurora.png')
        res.innerText=('Aurora linda')
        res.appendChild(img)
    }
}