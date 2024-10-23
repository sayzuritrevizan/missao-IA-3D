export const perguntas = [
    {
        enunciado: "Você lê frequentemente?",
        alternativas: [
            {
                texto: "sim,adoro livros",
                afirmacao: [
                    "é muito bom ter este hábito."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
            {
                texto: "não, acho chato",
                afirmacao: [
                    "A leitura é essencial para evolução dos seres humanos ."
                ],
                proxima: 1,  // Direciona para a pergunta 2
            },
        ]
    },
    {
        enunciado: "Você acha que a escola incentiva a prática de leitura?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: [
                   "que bom, nosso aprendizado começa na escola.",
                ],
                proxima: 2,  // Direciona para a pergunta 3
            },
            {
                texto: "nao",
                afirmacao: [
                    "uma pena...tente colocar isso na seu dia a dia."
                ],
                proxima: 2,  // Direciona para a pergunta 3
            }
        ]
    },
];
 
           