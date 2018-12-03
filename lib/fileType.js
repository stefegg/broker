const uploads = []


const filereader = new FileReader()

filereader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
        const uint = new Uint8Array(evt.target.result)
        let bytes = []
        uint.forEach((byte) => {
            bytes.push(byte.toString(16))
        })
        const hex = bytes.join('').toUpperCase()

        uploads.push({
            filename: file.name,
            filetype: file.type ? file.type : 'Unknown/Extension missing',
            binaryFileType: getMimetype(hex),
            hex: hex
        })
        render()
    }

    console.timeEnd('FileOpen')
}


const blob = file.slice(0, 4);
filereader.readAsArrayBuffer(blob);


const render = () => {
    const container = document.getElementById('files')

    const uploadedFiles = uploads.map((file) => {
        return `<div>
                    <strong>${file.filename}</strong><br>
                    Filetype from file object: ${file.filetype}<br>
                    Filetype from binary: ${file.binaryFileType}<br>
                    Hex: <em>${file.hex}</em>
                    </div>`
    })

    container.innerHTML = uploadedFiles.join('')
}

const getMimetype = (signature) => {
    switch (signature) {
        case '89504E47':
            return 'image/png'
        case '47494638':
            return 'image/gif'
        case '25504446':
            return 'application/pdf'
        case 'FFD8FFDB':
        case 'FFD8FFE0':
        case 'FFD8FFE1':
        case 'FFD8FFEE':
            return 'image/jpeg'
        case '504B0304':
            return 'application/zip'
        case '43443030':
            return 'iso'
        case '75737461':
            return 'tar archive'
        case '213C6172':
            return 'deb file'
        case '4E45531A':
            return 'NES Rom file'
        case '00000100':
            return 'ico'
        default:
            return 'Unknown filetype'
    }
}