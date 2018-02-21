<title>Menu Principal</title>






<form method="POST">
<label>Tipo de contrato</label>
  
<select id="tipocontrato" name="tipocontrato" onchange="pegartipo(this)">
    <option ></option>
    <option value="aluguel">Aluguel</option>
    <option value="vendacompraimovel">Venda e Compra de Imovel</option>
    <option value="vendacompraponto">Venda e Compra do Ponto Comercial</option>
    <option value="vendacompraveiculo">Venda e Compra de Veiculo</option>

</select>
</br></br>

<h2>Locador,vendedor</h2>
<label>Nome</label>
<input type="text" name="nomelocaven">
</br></br>
<label>Nacionalidade</label>
<input type="text" name="nacionalidadelocaven">
</br></br>
<label>Estado civil</label>
<select id="estadocivil" name="estadocivillocaven" >
    <option value="casado(a)">Casado(a)</option>
    <option value="solterio(a)">Solteiro(a)</option>
    <option value="amasiado(a)">Amasiado(a)</option>
    <option value="divorciado(a)">Divorciado(a)</option>
    <option value="separado(a)">Separado(a)</option>

</select>
</br></br>

<label>profissão</label>
<input type="text" name="profissaolocaven">
</br></br>

<label>Identidade</label>
<input type="text" name="identidadelocaven">
</br></br>
<label>CPF</label>
<input type="text" name="cpflocaven">
</br></br>
<label>Endereço Completo</label>
<input type="text" name="enderecolocaven" >
</br></br>
<label>Complemento</label>
<input type="text" name="complementolocaven" >
</br></br>
<label>Bairro</label>
<input type="text" name="bairrolocaven" >
</br></br>
<label>Cidade</label>
<input type="text" name="cidadelocaven" >
</br></br>
<label>Estado</label>
<input type="text" name="estadolocaven" >
</br></br>


<h2>Locatario,comprador</h2>
<label>Nome</label>
<input type="text" name="nome">
</br></br>
<label>Nacionalidade</label>
<input type="text" name="nacionalidade">
</br></br>
<label>Estado civil</label>
<select id="estadocivil" name="estadocivil">
    <option value=""></option>
    <option value="casado(a)">Casado(a)</option>
    <option value="solterio(a)">Solteiro(a)</option>
    <option value="amasiado(a)">Amasiado(a)</option>
    <option value="divorciado(a)">Divorciado(a)</option>
    <option value="separado(a)">Separado(a)</option>

</select>
</br></br>
<label>profissão</label>
<input type="text" name="profissao">
</br></br>

<label>Identidade</label>
<input type="text" name="identidade">
</br></br>
<label>CPF</label>
<input type="text" name="cpf">
</br></br>
<label>Endereço Completo</label>
<input type="text" name="endereco" >
</br></br>
<label>Complemento</label>
<input type="text" name="complemento" >
</br></br>
<label>Bairro</label>
<input type="text" name="bairro" >
</br></br>
<label>Cidade</label>
<input type="text" name="cidade" >
</br></br>
<label>Estado</label>
<input type="text" name="estado" >
</br></br>

<div class="imovel">
<h2>O endereço do imovel</h2>
    <label>Endereço Completo</label>
<input type="text" name="endereco" >
</br></br>
<label>Complemento</label>
<input type="text" name="complemento" >
</br></br>
<label>Bairro</label>
<input type="text" name="bairro" >
</br></br>
<label>Cidade</label>
<input type="text" name="cidade" >
</br></br>
<label>Estado</label>
<input type="text" name="estado" >
</br></br>


<h2> o Prazo de validade do contrato</h2>
<input type="number" name="dias">
</br>
</br>
<label>Inicia em:</label>
<input type="date" name="inicia">
</br>
</br>
<label>Termina em:</label>
<input type="date" name="termina">
</br>
</br>

<h2>O valor do Aluguel</h2>
<input type="text" name="valor">
</br></br>
<h2>Adiantamento</h2>
<input type="text" name="adiantamento">
</br>
</br>
<h2>O vencimento do aluguel</h2>
<input type="number" name="vencimento">
</br>
</br>
<h2>Multa de atraso</h2>
<label>Juros de: (por cento)</label>
<input type="number" name="juros">
</br>
</br>
</div>
</form>
