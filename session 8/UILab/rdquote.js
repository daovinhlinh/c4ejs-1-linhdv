async function load() {
    let url = 'https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json';
    let obj = await (await fetch(url)).json();
    Object.keys(obj);
    console.log(obj.length);
    btn = document.getElementById('button');
    function randomarr() {
        let rand = Math.random();
        let totalarr = obj.length;
        let randIndex = Math.floor(rand *totalarr);
        document.getElementById('text').innerHTML = obj[randIndex].quoteText;
        document.getElementById('author').innerHTML = obj[randIndex].quoteAuthor;
    }
    randomarr();
    btn.onclick = () => {
        randomarr()
    }
}load();

