function calcularChurrasco() {
    const homens = parseInt(document.getElementById('homens').value, 10) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value, 10) || 0;
    const criancas = parseInt(document.getElementById('criancas').value, 10) || 0;

    const carneBovina = (homens * 500) + (mulheres * 300) + (criancas * 200);
    const frango = (homens * 200) + (mulheres * 200) + (criancas * 100);
    const linguica = (homens * 200) + (mulheres * 200) + (criancas * 200);
    const refrigerante = (homens * 300) + (mulheres * 400) + (criancas * 200);
    const cerveja = (homens * 800) + (mulheres * 500);

    const carneBovinaKg = (carneBovina / 1000).toFixed(1);
    const frangoKg = (frango / 1000).toFixed(1);
    const linguicaKg = (linguica / 1000).toFixed(1);
    const refrigeranteL = (refrigerante / 1000).toFixed(1);
    const cervejaL = (cerveja / 1000).toFixed(1);

    const resultado = `
        <h2>Quantidade de Ingredientes:</h2>
        <p><strong>Carne Bovina:</strong> ${carneBovinaKg} kg</p>
        <p><strong>Frango:</strong> ${frangoKg} kg</p>
        <p><strong>Linguiça:</strong> ${linguicaKg} kg</p>
        <p><strong>Refrigerante:</strong> ${refrigeranteL} L</p>
        <p><strong>Cerveja:</strong> ${cervejaL} L</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
