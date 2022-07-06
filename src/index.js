const init = () => {
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target)
        console.log(event.target.isPrototypeOf)
        console.log(event.target.searchByID.value)
        const input = event.target.searchByID.value

        let inputs = document.getElementsByTagName('input')
        console.log(inputs)
        console.log(inputs.searchByID.value)

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                const title = document.querySelector('section#movieDetails h4')
                const summary = document.querySelector('section#movieDetails p')

                title.innerText = data.title
                summary.innerText = data.summary
            })
    })
}
document.addEventListener('DOMContentLoaded', init);