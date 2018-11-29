let projects = [
    {
        id: 1,
        projectname: 'project name',
        githublink: 'github.com/vieiralc',
        viewlink: 'github.com/vieiralc/projectname'
    },
    {
        id: 2,
        projectname: 'project name',
        githublink: 'github.com/vieiralc',
        viewlink: 'github.com/vieiralc/projectname'
    },
    {
        id: 3,
        projectname: 'project name',
        githublink: 'github.com/vieiralc',
        viewlink: 'github.com/vieiralc/projectname'
    },
    {
        id: 4,
        githublink: 'github.com/vieiralc',
        projectname: 'project name',
        viewlink: 'github.com/vieiralc/projectname'
    },
    {
        id: 5,
        githublink: 'github.com/vieiralc',
        projectname: 'project name',
        viewlink: 'github.com/vieiralc/projectname'
    },
]

window.addEventListener('load', () => {
    projects.forEach(project => {
        let div = document.createElement('div')
        let html = `
            <div class="item">
                <a href="${project.viewlink}">
                <img src="img/projects/project${project.id}.jpg" alt="Project">
                </a>
                <a href="${project.viewlink}" class="btn-light">
                    <i class="fas fa-eye"></i> ${project.projectname}
                </a>
                <a href="${project.githublink}" class="btn-dark">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>
        `
        div.innerHTML = html
        document.querySelector('.projects').appendChild(div)
    })
})