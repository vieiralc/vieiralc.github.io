let jobs = [
    {
        id: 1,
        block: '001',
        company: 'Instituto de Pesquisas Eldorado',
        companySite: 'https://www.eldorado.org.br/',
        role: 'Blockchain Developer Intern',
        description: 'Build and test Ethereum Blockchain Dapps using Solidity, Truffle, JavaScript, React and Nodejs.',
        badges: {
            bg1: 'Truffle',
            bg2: 'Infura',
            bg3: 'Web3js'
        },
        hash: '0x3b7dd9c058ac7dac2d8fe9a3ba1e1d4710d47aea55b35a13ef40fc79f46fba59',
        prevHash: 'Genesis Block'
    },
    {
        id: 2,
        block: '002',
        company: 'Not mined yet',
        companySite: '#',
        role: 'Lorem ipsum dolor sit amet consectetur.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem recusandae qui voluptatum.',
        badges: {
            bg1: 'empty',
            bg2: 'empty',
            bg3: 'empty'
        },
        hash: '0xafb0d1fc57f0eb53a5a98ef4ae87dd75286cd1ff6d115a6ad8d05bb56ff914fa',
        prevHash: '0x3b7dd9c058ac7dac2d8fe9a3ba1e1d4710d47aea55b35a13ef40fc79f46fba59'
    },
    {
        id: 3,
        block: '003',
        company: 'Not mined yet',
        companySite: '#',
        role: 'Lorem ipsum dolor sit amet consectetur.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptatem recusandae qui voluptatum.',
        badges: {
            bg1: 'empty',
            bg2: 'empty',
            bg3: 'empty'
        },
        hash: '0x7cc2285730db2dffb852729b5861ad0e68adf10ef8e2f300f99299511cd3dfad',
        prevHash: '0xafb0d1fc57f0eb53a5a98ef4ae87dd75286cd1ff6d115a6ad8d05bb56ff914fa'
    }
]

window.addEventListener('load', () => {
    jobs.forEach(job => {
        let div = document.createElement('div')
        let html = `
            <div class="job job-${job.id}">
                <span class="small-2">Block #: ${job.block}</span>
                <h3><a href="${job.companySite}" target="_blank">${job.company}</a></h3>
                <h5>${job.role}</h5>
                <p>${job.description}</p>
                <span class="badge">${job.badges.bg1}</span>
                <span class="badge">${job.badges.bg2}</span>
                <span class="badge">${job.badges.bg3}</span>
                <table>
                    <tr>
                        <td class="small"> Hash: </td>
                        <td class="small"> ${job.hash} </td>
                    </tr>
                    <tr>
                        <td class="small">Prev: </td>
                        <td class="small">"${job.prevHash}"</td>
                    </tr>
                </table>
            </div>`
        div.innerHTML = html
        document.querySelector('.about-info').appendChild(div)
    })
})