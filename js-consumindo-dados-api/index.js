async function buscaCEP(cep) {
  const mensagemErro = document.getElementById('erro')
  mensagemErro.innerHTML = ''
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const convertaEnderecoCEP = await consultaCEP.json()
    if (convertaEnderecoCEP.erro) {
      throw Error('CEP não existe')
    }
    const cidade = document.getElementById('cidade')
    cidade.value = convertaEnderecoCEP.localidade

    const logradouro = document.getElementById('endereco')
    logradouro.value = convertaEnderecoCEP.logradouro

    const estado = document.getElementById('estado')
    estado.value = convertaEnderecoCEP.uf
    const bairro = document.getElementById('bairro')
    bairro.value = convertaEnderecoCEP.bairro
  } catch (erro) {
    mensagemErro.innerHTML = `<p>Ops, cep não existe, digite um cep válido</p>`
    console.log(erro)
  }
}
const campoCEP = document.getElementById('cep')
campoCEP.addEventListener('focusout', () => buscaCEP(cep.value))
