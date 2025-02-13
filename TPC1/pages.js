exports.genLandingPage = function () {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Oficina do Rodrigo</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="flex flex-col justify-between h-screen bg-black text-white p-6">
        <div class="flex flex-col items-center justify-center flex-1">
            <h1 class="text-4xl font-bold mb-12">Oficina do Rodrigo</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <a href="/reparacoes" class="flex items-center justify-center bg-white text-black text-2xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-300 transition duration-300 rounded-lg p-10">
                    Reparações
                </a>
                <a href="/viaturas" class="flex items-center justify-center bg-white text-black text-2xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-300 transition duration-300 rounded-lg p-10">
                    Viaturas
                </a>
                <a href="/intervencoes" class="flex items-center justify-center bg-white text-black text-2xl font-bold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-300 transition duration-300 rounded-lg p-10">
                    Intervenções
                </a>
            </div>
        </div>
    </body>
    </html>
    `;
};



exports.genRepListPage = function (reparacoes) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Reparações</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-black min-h-screen p-6">
        <div class="container mx-auto relative">
            <a href="/" class="absolute top right-0 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-xl">&larr;</span>
            </a>

            <h1 class="text-4xl font-bold text-center text-white mb-6">Lista de Reparações</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${reparacoes.map(rep => {
                    return `
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                        <h2 class="text-2xl font-semibold text-gray-800">Reparação: ${rep.id}</h2>
                        <p class="text-gray-600 mt-2"><strong>Cliente:</strong> ${rep.nome}</p>
                        <a href="/reparacoes/${rep.id}" 
                           class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
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

exports.genRepPage = function (rep) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalhes da Reparação</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-black min-h-screen p-6">
        <div class="container mx-auto">
            <a href="/reparacoes" class="absolute top-6 right-6 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-2xl">&larr;</span>
            </a>
            <h1 class="text-4xl font-bold text-center text-white mb-6">Detalhes da Reparação</h1>
            
            <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <h2 class="text-2xl font-semibold text-gray-800">${rep.nome}</h2>
                <p class="text-gray-600 mt-2"><strong>NIF: </strong>${rep.nif}</p>
                <p class="text-gray-600 mt-2"><strong>Data:</strong> ${rep.data}</p>

                <div class="mt-6">
                    <h3 class="text-lg font-semibold text-gray-700">Viatura: </h3>
                    <a href="/viaturas/${rep.viatura.marca}/${rep.viatura.modelo}" 
                       class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                        Ver detalhes
                    </a>
                </div>

                <div class="mt-6">
                    <h3 class="text-lg font-semibold text-gray-700">Intervenções: </h3>
                    <p class="text-gray-700">Total: ${rep.nr_intervencoes}</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        ${rep.intervencoes.map(i => `
                            <div class="bg-red-100 rounded-xl shadow-lg p-4 transition hover:shadow-2xl">
                                <h4 class="text-xl font-semibold text-red-600">Intervenção ${i.codigo}</h4>
                                <div class="mt-4">
                                    <a href="/intervencoes/${i.codigo}" 
                                       class="inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                                        Ver detalhes
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genIntervPage = function (intervencoes) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Intervenções</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 min-h-screen p-6 flex items-center justify-center">
        <div class="container mx-auto">
            <a href="/" class="absolute top-6 right-6 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-4xl font-bold text-center text-white mb-8">Lista de Intervenções</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${intervencoes.map(interv => `
                    <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Código: ${interv.codigo}</h2>
                        
                        <div class="mt-4 text-center">
                            <a href="/intervencoes/${interv.codigo}" 
                               class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Ver detalhes
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};


exports.genIntervDetailPage = function (intervencao) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalhes da Intervenção</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 min-h-screen p-6">
        <div class="container mx-auto">
            <a href="/intervencoes" class="absolute top-6 right-6 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-4xl font-bold text-center text-white mb-8">Detalhes da Intervenção</h1>
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">${intervencao.nome}</h2>
                <p class="text-gray-500 text-lg mb-4">Código: <span class="font-semibold text-gray-800">${intervencao.codigo}</span></p>
                <p class="text-gray-600 mt-4">${intervencao.descricao}</p>
                
                <div class="mt-6">
                    <h3 class="text-lg font-semibold text-gray-700 mb-3">Reparações relacionadas: </h3>
                    <a href="/reparacoes?intervencao=${intervencao.codigo}" 
                       class="px-6 py-3 bg-green-600 text-white text-center font-medium rounded-lg hover:bg-green-700 transition">
                        Ver Reparações
                    </a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genViaturasPage = function (viaturas) {
    const marcasUnicas = [...new Set(viaturas.map(viatura => viatura.marca))];

    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Viaturas</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 min-h-screen p-6">
        <div class="container mx-auto">
            <a href="/" class="absolute top-6 right-6 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-4xl font-bold text-center text-white mb-6">Lista de Marcas de Viaturas</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${marcasUnicas.map(marca => `
                <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                    <h2 class="text-2xl font-semibold text-gray-800 text-center mb-4">${marca}</h2>
                    <div class="flex flex-col space-y-3">
                        <a href="/viaturas/${marca}" 
                           class="px-6 py-3 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition">
                            Ver veículos
                        </a>
                        <a href="/reparacoes?marca=${marca}" 
                           class="px-6 py-3 bg-green-600 text-white text-center font-medium rounded-lg hover:bg-green-700 transition">
                            Ver reparações
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};


exports.genModelsPage = function (viaturas) {
    const marca = viaturas[0].marca; 
    const modelos = [...new Set(viaturas.map(viatura => viatura.modelo))];

    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Modelos de Viaturas - ${marca}</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 min-h-screen p-6">
        <div class="container mx-auto">
            <a href="/viaturas" class="absolute top-6 right-6 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-xl">&larr;</span>
            </a>
            <h1 class="text-4xl font-bold text-center text-white mb-6">Modelos de Viaturas - ${marca}</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${modelos.map(modelo => {
                    return `
                    <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-4">Modelo: ${modelo}</h2>
                        
                        <div class="mt-4 flex justify-center">
                            <a href="/viaturas/${marca}/${modelo}" 
                                class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                Ver detalhes
                            </a>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </body>
    </html>
    `;
};

exports.genViaturaDetailPage = function (viatura) {
    return `
    <!DOCTYPE html>
    <html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalhes da Viatura</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-900 min-h-screen p-6">
        <div class="container mx-auto relative">
            <a href="/viaturas/${viatura.marca}" class="absolute top-2 right-4 w-10 h-10 bg-white text-black flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-200">
                <span class="text-xl">&larr;</span>
            </a>

            <h1 class="text-4xl font-bold text-center text-white mb-8">Detalhes da Viatura</h1>
            <div class="bg-white rounded-xl shadow-lg p-8">
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">${viatura.marca} - ${viatura.modelo}</h2>
                <p class="text-gray-500 text-lg mb-4">Matrícula: <span class="font-semibold text-gray-800">${viatura.matricula}</span></p>

                <div class="mt-6">
                    <h3 class="text-lg font-semibold text-gray-700 mb-3">Reparações Associadas: </h3>
                    <a href="/reparacoes?viatura=${viatura.matricula}" 
                       class="px-6 py-3 bg-green-600 text-white text-center font-medium rounded-lg hover:bg-green-700 transition">
                        Ver Reparações
                    </a>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};



