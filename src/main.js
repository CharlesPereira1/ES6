import api from './api'; //conexão com o axio API GITHUB

class App {
    constructor() {
        this.repositories =[];

        this.formEl = document.querySelector('#repo-form');
        this.inputEl = document.querySelector('input[name=repository');
        this.listEl = document.querySelector('#repo-list');

        this.registerHandlers();
    }

    registerHandlers() { //reponsavel por registrar os eventos
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    //conexão com o repositorio
    async addRepository(event) {
        event.preventDefault(); //metodo que previne que o form fique atualizando toda hora

       //comando para contar quant de caracteres do input
        const repoInput = this.inputEl.Value;        
        if (repoInput.length === 0) 
            return;
        
        //caminho na url
        //const response = await api.get(`/users/${repoInput}`);        
        const response = await api.get(`/repos/${repoInput}`);
        
        console.log(response);

        const { name, description, html_url, owner: { avatar_url } } = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        })

        this.render(); 
    }

    render(){ 
        //apaga todo conteudo da lista e renderiza do zero
        this.listEl.innerHTML= '';  

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);


        })
    }
}

new App();