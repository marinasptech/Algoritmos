let notas= [];
let faltas =[]

    function lancarFalta(){
        let faltaDia = Number(iptFalta.value)
        faltas.push(faltaDia)
        let soma =0

        for (let i = 0; i < faltas.length; i++) {
             soma += faltas[i];
            
        }
        let mediaF = soma / faltas.length
        resultadoF.innerHTML = `${mediaF}`
    }

    function lancarNota(){
        let notaDia = Number(idNota.value);
        notas.push(notaDia);
        console.log(`nota: ${notas}`);

        let soma =0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }
        let media = soma / notas.length;
        resultadoN.innerHTML = `a media de notas é: ${media}`
    }