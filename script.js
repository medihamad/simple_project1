async function main(){

    const url= 'https://api.frankfurter.dev/v1/latest?base=USD';
    const response = await fetch(url)
    console.log(await response.json())
}


main();

