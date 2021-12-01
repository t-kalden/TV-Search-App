const form = document.querySelector("#searchForm");
const showBox = document.querySelector('#showBox');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    showBox.innerHTML = '';
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const resData = res.data[0];
    console.log(resData)
    const img = document.createElement('IMG');
    const name = document.createElement('H3');
    const genre = document.createElement('SPAN');

    img.src = resData.show.image.medium;
    name.innerHTML = resData.show.name;
    genre.innerHTML = resData.show.seasons;

    showBox.append(img);
    showBox.append(name);
    showBox.append(genre);
})
