function ingredientes() {
    return {
        massa: ["cenouras", "ovos", "óleo", "farinha", "açúcar", "fermento"],
        cobertura: ["chocolate", "creme de leite"]
    };
}

function prepararCozinha() {
    console.log(" Preparando a cozinha...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}

function preAquecerForno() {
    console.log("Pré-aquecendo o forno...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function untarForma() {
    console.log(" Juntando a forma...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}

function prepararCenouras() {
    console.log(" picando as cenouras...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function liquidificarCenouras() {
    console.log(" Batendo cenouras, ovos e óleo no liquidificador...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function misturarSecos() {
    console.log(" Misturando farinha, açúcar e fermento...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}

function combinarMisturas() {
    console.log(" Combinando misturas...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}

function verificarHomogeneidade() {
    console.log(" Verificando se a massa está homogênea...");
    return new Promise(resolve => setTimeout(() => {
        console.log(" Massa homogênea!");
        resolve();
    }, 2000));
}

function despejarMassa() {
    console.log(" Despejando a massa na forma...");
    return new Promise(resolve => setTimeout(resolve, 2000));
}

function assarBolo() {
    console.log(" Assando o bolo...");
    return new Promise(resolve => setTimeout(() => {
        console.log(" Bolo assado!");
        resolve();
    }, 5000));
}

function prepararCobertura() {
    console.log(" Preparando a cobertura de chocolate...");
    return new Promise(resolve => setTimeout(resolve, 3000));
}

function aplicarCobertura() {
    console.log(" Aplicando cobertura no bolo...");
    return new Promise(resolve => setTimeout(() => {
        console.log(" Bolo finalizado!");
        resolve();
    }, 2000));
}

function servirBolo() {
    console.log(" Servindo o bolo...");
    return new Promise(resolve => setTimeout(() => {
        console.log(" Aproveite seu bolo de cenoura!");
        resolve();
    }, 2000));
}

async function fazerBolo() {
    const { massa, cobertura } = ingredientes();

    await prepararCozinha();
    await preAquecerForno();
    await untarForma();
    
    await prepararCenouras();
    await liquidificarCenouras();
    await misturarSecos();
    await combinarMisturas();
    await verificarHomogeneidade();
    
    await despejarMassa();
    await assarBolo();
    
    await prepararCobertura();
    await aplicarCobertura();
    
    await servirBolo();
}

fazerBolo();