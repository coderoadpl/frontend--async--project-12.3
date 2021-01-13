export class Textarea {

    constructor(value, onChange, readonly, isFocused) {
        this.readonly = readonly
        this.value = value
        this.onChange = onChange
        this.isFocused = isFocused
    }

    render() {

        const div = document.createElement('div')
        const textarea = document.createElement('textarea')
        const p = document.createElement('p')

        textarea.style.width = '100%'
        textarea.style.minHeight = '200px'

        let error = null
        try {
            textarea.value = JSON.stringify(JSON.parse(this.value), null, 4)
        } catch (err) {
            textarea.value = this.value
            error = err
        }

        if (error) p.innerText = error.message

        if (this.readonly) textarea.setAttribute('readonly', 'true')

        textarea.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        if (!this.readonly && this.isFocused) {
            setTimeout(
                () => textarea.focus(),
                0
            )
        }

        div.appendChild(textarea)
        div.appendChild(p)

        return div

    }

}

export default Textarea
