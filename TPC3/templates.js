exports.studentsListPage = function (list, d) {
    let pagHTML = `
    <!DOCTYPE html>
    <html lang="pt">
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Gestão de Estudantes</title>
        </head>
        <body class="w3-light-grey">
            <div class="w3-container w3-margin-top">
                <div class="w3-card-4 w3-white w3-round-large">

                    <header class="w3-container w3-teal w3-padding-16 w3-round-large w3-margin-bottom">
                        <h2 class="w3-left">Lista de Estudantes</h2>
                        <a href="/alunos/registo" class="w3-button w3-round w3-orange w3-right w3-margin-top">+ Adicionar</a>
                        <div style="clear: both;"></div>
                    </header>

                    <div class="w3-container w3-responsive">
                        <table class="w3-table-all w3-striped w3-hoverable w3-border w3-small">
                            <tr class="w3-light-grey">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>GitHub</th>
                                <th>Ações</th>
                            </tr>
    `;

    for (let i = 0; i < list.length; i++) {
        pagHTML += `
                            <tr>
                                <td>${list[i].id}</td>
                                <td>
                                    <a href="/alunos/${list[i].id}" class="w3-text-blue">${list[i].nome}</a>
                                </td>
                                <td>
                                    <a href="${list[i].git}" target="_blank" class="w3-text-green">${list[i].git}</a>
                                </td>
                                <td>
                                    <a href="/alunos/edit/${list[i].id}" class="w3-button w3-blue w3-small">Editar</a>
                                    <a href="/alunos/delete/${list[i].id}" class="w3-button w3-red w3-small">Remover</a>
                                </td>
                            </tr>
        `;
    }

    pagHTML += `
                        </table>
                    </div>

                    <!-- Rodapé -->
                    <footer class="w3-container w3-teal w3-center w3-padding-16 w3-round-large w3-margin-top">
                        <p>Gerado por <b>EngWeb2025</b> em ${d}</p>
                    </footer>

                </div>
            </div>
        </body>
    </html>
    `;

    return pagHTML;
};

exports.studentFormPage = function (d) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Formulário de Estudante</title>
        </head>
        <body class="w3-light-grey">
            <div class="w3-container w3-margin-top">
                <div class="w3-card-4 w3-white w3-round-large">

                    <header class="w3-container w3-purple w3-padding-16">
                        <h2>Formulário de Estudante</h2>
                    </header>

                    <form class="w3-container w3-padding" method="POST">
                        
                        <fieldset class="w3-margin-bottom">
                            <legend class="w3-text-purple"><b>Informações do Estudante</b></legend>
                            <label><b>ID</b></label>
                            <input class="w3-input w3-border w3-round" type="text" name="id" required/>
                            
                            <label><b>Nome</b></label>
                            <input class="w3-input w3-border w3-round" type="text" name="nome" required/>
                            
                            <label><b>GitHub</b></label>
                            <input class="w3-input w3-border w3-round" type="text" name="git" required/>
                        </fieldset>

                        <fieldset class="w3-margin-bottom">
                            <legend class="w3-text-purple"><b>Trabalhos de Casa (TPCs)</b></legend>
                            <div class="w3-row-padding">
                                <div class="w3-half">
                                    <input class="w3-check" type="checkbox" name="tpc1" value="1"/>
                                    <label>TPC1</label><br/>
                                    
                                    <input class="w3-check" type="checkbox" name="tpc2" value="1"/>
                                    <label>TPC2</label><br/>

                                    <input class="w3-check" type="checkbox" name="tpc3" value="1"/>
                                    <label>TPC3</label><br/>

                                    <input class="w3-check" type="checkbox" name="tpc4" value="1"/>
                                    <label>TPC4</label>
                                </div>
                                <div class="w3-half">
                                    <input class="w3-check" type="checkbox" name="tpc5" value="1"/>
                                    <label>TPC5</label><br/>

                                    <input class="w3-check" type="checkbox" name="tpc6" value="1"/>
                                    <label>TPC6</label><br/>

                                    <input class="w3-check" type="checkbox" name="tpc7" value="1"/>
                                    <label>TPC7</label><br/>

                                    <input class="w3-check" type="checkbox" name="tpc8" value="1"/>
                                    <label>TPC8</label>
                                </div>
                            </div>
                        </fieldset>  

                        <div class="w3-center">
                            <button class="w3-button w3-purple w3-round w3-large w3-margin-top" type="submit">
                                Registar
                            </button>
                        </div>
                    </form>

                    <footer class="w3-container w3-purple w3-padding-16 w3-round-large w3-center w3-margin-top">
                        <p>Gerado por <b>EngWeb2025</b> em ${d} - 
                        <a href="/" class="w3-text-white">Voltar</a></p>
                    </footer>

                </div>
            </div>
        </body>
    </html>
    `;
};

exports.studentFormEditPage = function (a, d) {
    let pagHTML = `
    <!DOCTYPE html>
    <html lang="pt">
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="w3.css"/>
            <title>Editar Estudante</title>
        </head>
        <body class="w3-light-grey">
            <div class="w3-container w3-margin-top">
                <div class="w3-card-4 w3-white w3-round-large">

                    <header class="w3-container w3-purple w3-padding-16">
                        <h2>Editar Estudante</h2>
                    </header>

                    <form class="w3-container w3-padding" method="POST">
                        
                        <fieldset class="w3-margin-bottom">
                            <legend class="w3-text-purple"><b>Informações do Estudante</b></legend>
                            <label><b>ID</b></label>
                            <input class="w3-input w3-border w3-round" type="text" name="id" readonly value="${a.id}"/>
                            
                            <label><b>Nome</b></label>
                            <input class="w3-input w3-border w3-round" type="text" name="nome" value="${a.nome}"/>
                            
                            <label><b>GitHub</b></label>
                            <input class="w3-input w3-border w3-round" type="text" name="git" value="${a.git}"/>
                        </fieldset>

                        <fieldset class="w3-margin-bottom">
                            <legend class="w3-text-purple"><b>Trabalhos de Casa (TPCs)</b></legend>
                            <div class="w3-row-padding">
    `;

    for (let i = 1; i <= 8; i++) {
        let tpc = "tpc" + i;
        let checked = Object.prototype.hasOwnProperty.call(a, tpc) ? "checked" : "";

        if (i === 1 || i === 5) pagHTML += `<div class="w3-half">`;

        pagHTML += `
            <input class="w3-check" type="checkbox" name="tpc${i}" value="1" ${checked}/>
            <label>TPC${i}</label><br/>
        `;

        if (i === 4 || i === 8) pagHTML += `</div>`;
    }

    pagHTML += `
                            </div>
                        </fieldset>  

                        <div class="w3-center">
                            <button class="w3-button w3-purple w3-round w3-large w3-margin-top" type="submit">
                                Guardar Alterações
                            </button>
                        </div>
                    </form>

                    <footer class="w3-container w3-purple w3-padding-16 w3-round-large w3-center w3-margin-top">
                        <p>Gerado por <b>EngWeb2025</b> em ${d} - 
                        <a href="/" class="w3-text-white">Voltar</a></p>
                    </footer>

                </div>
            </div>
        </body>
    </html>
    `;

    return pagHTML;
};

// ---------------Student's Page--------------------------------
// Change and adapt to current dataset...
exports.studentPage = function (aluno, d) {
    var pagHTML = `
    <html>
    <head>
        <title>Aluno: ${aluno.id}</title>
        <meta charset="utf-8"/>
        <link rel="icon" href="favicon.png"/>
        <link rel="stylesheet" href="w3.css"/>
    </head>
    <body class="w3-light-grey">
        <div class="w3-container w3-margin-top">
            <div class="w3-card-4 w3-white w3-round-large">

                <header class="w3-container w3-teal w3-center w3-padding-16">
                    <h1><b>Perfil do Aluno</b></h1>
                </header>

                <div class="w3-container w3-padding">
                    <ul class="w3-ul w3-card w3-white w3-border w3-round w3-padding">
                        <li><b>Nome:</b> ${aluno.nome}</li>
                        <li><b>Número:</b> ${aluno.id}</li>
                        <li><b>GitHub:</b> <a href="${aluno.git}" target="_blank" class="w3-text-blue">${aluno.git}</a></li>
                    </ul>
                </div>

                <div class="w3-container w3-padding">
                    <h3 class="w3-text-teal"><b>Trabalhos de Casa</b></h3>
                    <div class="w3-row-padding">
    `;

    let tpcsConcluidos = [];
    for (let i = 1; i <= 8; i++) {
        let key = `tpc${i}`;
        if (key in aluno) {
            tpcsConcluidos.push(`<span class="w3-tag w3-green w3-round w3-margin">${key.toUpperCase()}</span>`);
        }
    }

    pagHTML += tpcsConcluidos.length
        ? `<div class="w3-panel w3-padding">${tpcsConcluidos.join(" ")}</div>`
        : `<p class="w3-text-red">Nenhum TPC concluído.</p>`;

    pagHTML += `
                </div>
                </div>

                <footer class="w3-container w3-teal w3-center w3-padding-16 w3-margin-top">
                    <address>Gerado por aluno::EngWeb2025 em ${d} - [<a href="/" class="w3-text-white">Voltar</a>]</address>
                </footer>

            </div>
        </div>
    </body>
    </html>
    `;
    return pagHTML;
};

// -------------- Error Treatment ------------------------------
exports.errorPage = function(errorMessage, d){
    return `
    <p>${d}: Error: ${errorMessage}</p>
    `
}