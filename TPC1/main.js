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
    else if (q.pathname == "/reparacoes") {
        axios.get("http://localhost:3000/reparacoes?_sort=id")
            .then(response => {
                var reparacoes = response.data;
                if (q.query.intervencao) {
                    let codigo = q.query.intervencao;
                    reparacoes = reparacoes.filter(rep => 
                        rep.intervencoes.some(interv => interv.codigo === codigo)
                    );
                }

                if (q.query.viatura) {
                    let matricula = q.query.viatura;
                    reparacoes = reparacoes.filter(rep => 
                        rep.viatura.matricula === matricula
                    );
                }

                if (q.query.marca) {
                    let marca = q.query.marca;
                    reparacoes = reparacoes.filter(rep => 
                        rep.viatura.marca === marca
                    );
                }
                    
                res.write(pages.genRepListPage(reparacoes));
                res.end(); 
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar as reparações.</p>");
            });
    }
    else if (q.pathname.startsWith("/reparacoes/")) {
        var id = q.pathname.split("/")[2];
        axios.get(`http://localhost:3000/reparacoes/${id}`)    
            .then(response => {
                res.write(pages.genRepPage(response.data));
                res.end(); 
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar a reparação.</p>");
            });
    }
    else if (q.pathname == "/intervencoes") {
        axios.get("http://localhost:3000/intervencoes?_sort=codigo")
            .then(response => {
                var data = response.data;
                res.write(pages.genIntervPage(data));
                res.end(); 
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar as intervenções.</p>");
            });
    }
    else if (q.pathname.startsWith("/intervencoes/")) {
        var id = q.pathname.split("/")[2];
        axios.get(`http://localhost:3000/intervencoes?codigo=${id}`)    
            .then(response => {
                var data = response.data;
                res.write(pages.genIntervDetailPage(data[0]));
                res.end(); 
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar a intervenção.</p>");
            });
    }
    else if (q.pathname == "/viaturas") {
        axios.get("http://localhost:3000/viaturas?_sort=marca,modelo")
            .then(response => {
                var data = response.data;
                res.write(pages.genViaturasPage(data));
                res.end(); 
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar as viaturas.</p>");
            });
    }
    else if (q.pathname.startsWith("/viaturas/")) {
        var caminho = q.pathname.split("/");
        var marca = caminho[2];
        var modelo = caminho[3]; 
    
        let url = modelo ? `http://localhost:3000/viaturas?marca=${marca}&modelo=${modelo}` 
                         : `http://localhost:3000/viaturas?marca=${marca}`;
    
        axios.get(url)
            .then(response => {
                var data = response.data;
                if (modelo) {
                    res.write(pages.genViaturaDetailPage(data[0]));
                } else {
                    data.sort((a, b) => {
                        if (a.modelo.toLowerCase() < b.modelo.toLowerCase()) return -1;
                        if (a.modelo.toLowerCase() > b.modelo.toLowerCase()) return 1;
                        return 0;
                    });
                    res.write(pages.genModelsPage(data));
                }
                res.end();
            })
            .catch(err => {
                console.log("Erro: " + err);
                res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
                res.end("<p>Erro ao carregar as viaturas.</p>");
            });
    }
    else {
        res.write("Operação não suportada.");
        res.end();
    }
}).listen(4000);

console.log("Servidor a correr na porta 4000...");
