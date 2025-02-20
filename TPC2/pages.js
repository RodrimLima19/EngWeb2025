exports.genLandingPage = function () {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Escola de Música</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        </style>
    </head>
    <body class="flex flex-col justify-between h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
        <div class="flex flex-col items-center justify-center flex-1">
            <h1 class="text-6xl font-bold mb-12 gradient-text animate-fadeIn">
                Escola de Música
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl animate-fadeIn">
                <a href="/alunos" class="hover-scale flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-3xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition duration-300 rounded-xl p-12 border border-gray-700 hover:border-gray-500">
                    <span class="text-center">Alunos</span>
                </a>
                <a href="/cursos" class="hover-scale flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-3xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition duration-300 rounded-xl p-12 border border-gray-700 hover:border-gray-500">
                    <span class="text-center">Cursos</span>
                </a>
                <a href="/instrumentos" class="hover-scale flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-3xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition duration-300 rounded-xl p-12 border border-gray-700 hover:border-gray-500">
                    <span class="text-center">Instrumentos</span>
                </a>
            </div>
        </div>
        <footer class="text-center text-gray-500 mt-12 animate-fadeIn">
            <p>&copy; Escola de Música. Todos os direitos reservados.</p>
        </footer>
    </body>
    </html>
    `;
};

exports.genAlunosListPage = function (alunos) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Alunos</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Lista de Alunos</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${alunos.map(a => {
                    return `
                    <div class="hover-scale bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300">
                        <h2 class="text-3xl font-bold text-white mb-4">Aluno: ${a.id}</h2>
                        <a href="/alunos/${a.id}" 
                           class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300">
                            Ver detalhes
                        </a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genAlunoDetailPage = function (aluno) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalhes do Aluno</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/alunos" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Detalhes do Aluno</h1>
            <div class="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300 hover-scale">
                <h2 class="text-3xl font-bold text-white mb-6">${aluno.nome}</h2>
                <div class="space-y-4 text-gray-300">
                    <p><strong class="text-white">ID:</strong> ${aluno.id}</p>
                    <p><strong class="text-white">Data de Nascimento:</strong> ${aluno.dataNasc}</p>
                    <p><strong class="text-white">Curso:</strong> ${aluno.curso}</p>
                    <p><strong class="text-white">Ano do Curso:</strong> ${aluno.anoCurso}</p>
                    <p><strong class="text-white">Instrumento:</strong> ${aluno.instrumento}</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genCursosListPage = function (cursos) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Cursos</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Lista de Cursos</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${cursos.map(c => {
                    return `
                    <div class="hover-scale bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300">
                        <h2 class="text-3xl font-bold text-white mb-4">Curso: ${c.id}</h2>
                        <a href="/cursos/${c.id}" 
                           class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300">
                            Ver detalhes
                        </a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genCursoDetailPage = function (curso) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalhes do Curso</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .btn-gradient {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 18px;
                font-weight: bold;
                color: white;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: inline-block;
                text-align: center;
                text-decoration: none;
            }
            .btn-gradient:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/alunos" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Detalhes do Curso</h1>
            <div class="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300 hover-scale">
                <h2 class="text-3xl font-bold text-white mb-6">${curso.designacao}</h2>
                <div class="space-y-4 text-gray-300">
                    <p><strong class="text-white">ID:</strong> ${curso.id}</p>
                    <p><strong class="text-white">Duração:</strong> ${curso.duracao}</p>
                    <p><strong class="text-white">Instrumento:</strong> ${curso.instrumento["#text"]}</p>
                </div>
                <div class="mt-8 text-center">
                    <a href="/cursos/${curso.id}/alunos" class="btn-gradient">Ver Alunos</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genCursoAlunosPage = function (alunos, id_curso) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Alunos</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/cursos/${id_curso}" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Lista de Alunos</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${alunos.map(a => {
                    return `
                    <div class="hover-scale bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300">
                        <h2 class="text-3xl font-bold text-white mb-4">Aluno: ${a.id}</h2>
                        <a href="/alunos/${a.id}" 
                           class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300">
                            Ver detalhes
                        </a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genInstrumentosListPage = function (instrumentos) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Instrumentos</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Lista de Instrumentos</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${instrumentos.map(i => {
                    return `
                    <div class="hover-scale bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300">
                        <h2 class="text-3xl font-bold text-white mb-4">Instrumento: ${i.id}</h2>
                        <a href="/instrumentos/${i["#text"]}" 
                           class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300">
                            Ver detalhes
                        </a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genInstrumentoDetailPage = function (instrumento) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalhes do Instrumento</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .btn-gradient {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 18px;
                font-weight: bold;
                color: white;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                display: inline-block;
                text-align: center;
                text-decoration: none;
            }
            .btn-gradient:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/instrumentos" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Detalhes do Instrumento</h1>
            <div class="max-w-3xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300 hover-scale">
                <h2 class="text-3xl font-bold text-white mb-6">${instrumento["#text"]}</h2>
                <div class="space-y-4 text-gray-300">
                    <p><strong class="text-white">ID:</strong> ${instrumento.id}</p>
                </div>
                <div class="mt-8 text-center">
                    <a href="/instrumentos/${instrumento["#text"]}/alunos" class="btn-gradient">Ver Alunos</a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genInstrumentoAlunosPage = function (alunos, instrumento) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Alunos</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
                animation: fadeIn 1s ease-out;
            }
            .hover-scale {
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .hover-scale:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
            }
            .gradient-text {
                background: linear-gradient(90deg, #ff7e5f, #feb47b);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        </style>
    </head>
    <body class="bg-gradient-to-br from-gray-900 to-black min-h-screen p-6">
        <div class="container mx-auto relative animate-fadeIn">
            <a href="/instrumentos/${instrumento}" class="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-700 hover:border-gray-500">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-6xl font-bold text-center gradient-text mb-12">Lista de Alunos</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${alunos.map(a => {
                    return `
                    <div class="hover-scale bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl p-8 border border-gray-700 hover:border-gray-500 transition duration-300">
                        <h2 class="text-3xl font-bold text-white mb-4">Aluno: ${a.id}</h2>
                        <a href="/alunos/${a.id}" 
                           class="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300">
                            Ver detalhes
                        </a>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};