document.getElementById("formAdocao").addEventListener("submit", function(e){
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = document.getElementById("horas").value;
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;

   
    let cpfsExistentes = ["12345678900", "11122233344"];

    
    if(nome.length < 3) return alert("Nome inválido");

    if(!email.includes("@")) return alert("Email inválido");

    if(telefone.length < 8) return alert("Telefone inválido");

    if(!cpf) return alert("CPF obrigatório");

    if(cpfsExistentes.includes(cpf)) return alert("CPF já cadastrado");

    if(idade < 18) return alert("Você deve ser maior de idade");

    if(!cidade) return alert("Cidade obrigatória");

    if(!moradia) return alert("Selecione a moradia");

    if(!quintal) return alert("Informe sobre o quintal");

    if(!pet) return alert("Informe se já teve pet");

    if(isNaN(horas) || horas === "") return alert("Horas inválidas");

    if(motivo.length < 10) return alert("Motivo muito curto");

    if(!termo) return alert("Você deve aceitar o termo");

   

 
    if(moradia === "apartamento" && quintal.value === "sim"){
        return alert("Incoerência: apartamento não possui quintal");
    }

   
    if(moradia === "casa" && quintal.value === "nao"){
        alert("Atenção: casa sem quintal pode não ser ideal");
    }

   
    if(horas > 8){
        let justificativa = prompt("O animal ficará muito tempo sozinho. Justifique:");
        if(!justificativa) return alert("Justificativa obrigatória");
    }

   
    if(pet.value === "nao"){
        alert("A ONG poderá acompanhar sua adaptação com o pet.");
    }

   
    let motivosInvalidos = ["quero", "porque sim"];
    if(motivosInvalidos.includes(motivo.toLowerCase())){
        return alert("Motivo inválido");
    }

   
    if(motivo.toLowerCase().includes("hoje")){
        alert("Atenção: evite decisões impulsivas.");
    }

  
    document.getElementById("resultado").innerHTML =
        "Cadastro realizado com sucesso!<br><br>" +
        "Nome: " + nome + "<br>" +
        "Email: " + email + "<br>" +
        "Telefone: " + telefone + "<br>" +
        "CPF: " + cpf + "<br>" +
        "Idade: " + idade + "<br>" +
        "Cidade: " + cidade + "<br>" +
        "Moradia: " + moradia + "<br>" +
        "Quintal: " + quintal.value + "<br>" +
        "Já teve pet: " + pet.value + "<br>" +
        "Horas sozinho: " + horas + "<br>" +
        "Motivo: " + motivo;
});