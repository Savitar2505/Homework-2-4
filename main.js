let input = document.getElementById('country')

const getCountry = () =>{
        fetch('https://restcountries.com/v3.1/name/' + input.value)
            .then(response => response.ok ? response : Promise.reject(response))
            .catch(() => alert('Ошибка 404'))
            .then((data) => {
                data.json().then(response => {
                    response.forEach(elem => {

                        const name = document.getElementById('name')
                        const region = document.getElementById('region')
                        const capital = document.getElementById('capital')
                        const subRegion = document.getElementById('subregion')
                        const flag = document.getElementById('flag')

                        const flagImage = document.createElement('img')
                        flagImage.setAttribute('src', elem.flags.svg)
                        flag.innerText = ''
                        flag.append(flagImage)

                        name.innerText = elem.name.common
                        region.innerText = elem.region
                        capital.innerText = elem.capital
                        subRegion.innerText = elem.subregion

                    })
                })
            })
}
const countryTable =() => {
    fetch('https://restcountries.com/v3.1/all' + input.value).then((data) => {
        data.json().then(response => {
            response.forEach(elem => {
                const tb =document.getElementById('table')
                const tr = document.createElement('tr')

                const code = document.createElement('td')
                const flag = document.createElement('td')
                const name = document.createElement('td')
                const capital  = document.createElement('td')
                const population = document.createElement('td')

                const flagImage =document.createElement('img')
                flagImage.setAttribute('src', elem.flags.svg)
                flag.append(flagImage)

                code.innerText=elem.cca2
                name.innerText=elem.name.common
                capital.innerText=elem.capital
                population.innerText=elem.population

                tr.append(code)
                tr.append(flag)
                tr.append(name)
                tr.append(capital)
                tr.append(population)

                tb.append(tr)
            })
            console.log(response)
        })
    })
}
countryTable()