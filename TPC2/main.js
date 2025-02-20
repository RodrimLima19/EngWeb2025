const http = require("http");
const url = require("url");
const axios = require("axios");
const pages = require("./pages");

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    if (q.pathname == "/") {
        res.write(pages.genLandingPage());
        res.end();
    } 
    else if (q.pathname == "/alunos") {
        axios.get("http://localhost:3000/alunos?_sort=id")
            .then(response => { 
                var alunos = response.data;       
                res.write(pages.genAlunosListPage(alunos));
                res.end(); 
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar os alunos.</p>");
            });
    }
    else if (q.pathname.startsWith("/alunos/")) {
            var id = q.pathname.split("/")[2];
            axios.get(`http://localhost:3000/alunos/${id}`)    
                .then(response => {
                    res.write(pages.genAlunoDetailPage(response.data));
                    res.end(); 
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                    res.end("<p>Erro ao carregar o aluno.</p>");
                });
        }
        else if (q.pathname == "/cursos") {
            axios.get("http://localhost:3000/cursos?_sort=id")
                .then(response => { 
                    var cursos = response.data;       
                    res.write(pages.genCursosListPage(cursos));
                    res.end(); 
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                    res.end("<p>Erro ao carregar os cursos.</p>");
                });
        }
        else if (q.pathname.startsWith("/cursos/")) {
            var parts = q.pathname.split("/").filter(Boolean);
            var id = parts[1];
        
            if (parts.length === 2) {  
                axios.get(`http://localhost:3000/cursos/${id}`)
                    .then(response => {
                        res.write(pages.genCursoDetailPage(response.data));
                        res.end();
                    })
                    .catch(err => {
                        console.log("Erro: " + err);
                        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                        res.end("<p>Erro ao carregar o curso.</p>");
                    });
        
            } else if (parts.length === 3 && parts[2] === "alunos") {  
                axios.get(`http://localhost:3000/alunos?curso=${id}`)
                    .then(response => {
                        res.write(pages.genCursoAlunosPage(response.data, id));
                        res.end();
                    })
                    .catch(err => {
                        console.log("Erro: " + err);
                        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                        res.end("<p>Erro ao carregar a lista de alunos.</p>");
                    });
            }
        }
        else if (q.pathname == "/instrumentos") {
            axios.get("http://localhost:3000/instrumentos?_sort=id")
                .then(response => { 
                    var instrumentos = response.data;       
                    res.write(pages.genInstrumentosListPage(instrumentos));
                    res.end(); 
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                    res.end("<p>Erro ao carregar os instrumentos.</p>");
                });
        }
        else if (q.pathname.startsWith("/instrumentos/")) {
            var parts = q.pathname.split("/").filter(Boolean);
            var nome = parts[1];
            var nomeCorrigido = decodeURIComponent(nome.trim());

        
            if (parts.length === 2) { 
                axios.get("http://localhost:3000/instrumentos") 
                .then(response => {
                    var instrumento = response.data.find(inst => inst["#text"] === nomeCorrigido);
      
                    if (instrumento) {
                        res.end(pages.genInstrumentoDetailPage(instrumento));
                    } else {
                        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
                        res.end("<p>Instrumento não encontrado.</p>");
                    }
                })
                .catch(err => {
                    console.log("Erro: " + err);
                    res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                    res.end("<p>Erro ao carregar instrumentos.</p>");
                });
      } else if (parts.length === 3 && parts[2] === "alunos") {  
                axios.get(`http://localhost:3000/alunos?instrumento=${nome}`)
                    .then(response => {
                        res.write(pages.genInstrumentoAlunosPage(response.data, nome));
                        res.end();
                    })
                    .catch(err => {
                        console.log("Erro: " + err);
                        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                        res.end("<p>Erro ao carregar a lista de alunos.</p>");
                    });
            }
        }
    else {
        res.write("Operação não suportada.");
        res.end();
    }
}).listen(4000);

console.log("Servidor a correr na porta 4000...");