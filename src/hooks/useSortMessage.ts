type ChallengeType = {
    text: string
    position: number
}

export type MessageType = {
    wins: ChallengeType,
    challenges: ChallengeType[]
}


const numberOfMessage: number[] = []

export const MESSAGES: MessageType = {
    wins: {
        text: "Você ganhou!!! Você bebe.",
        position: 0
    },
    challenges: [
        {
            text: "Aponte um amigo para beber!",
            position: 0
        },
        {
            text: "Amigos para sempre! Escolha alguém para beber com você.",
            position: 0
        },
        {
            text: "Passou perto!",
            position: 0
        },
        {
            text: "Tome água e fique uma rodada sem jogar.",
            position: 0
        },
        {
            text: "Vamos brindar a vida! Todos bebem e fazem um brinde.",
            position: 0
        },
        {
            text: "A pessoa mais velha bebe!",
            position: 0
        },
        {
            text: "A pessoa mais nova bebe!",
            position: 0
        },
        {
            text: "Quem está de short bebe!",
            position: 0
        },
        {
            text: "Quem está de calça bebe!",
            position: 0
        },
        {
            text: "Quem está de saia bebe!",
            position: 0
        },
        {
            text: "Quem tem cabelo grande bebe!",
            position: 0
        },
        {
            text: "Quem tem cabelo curto bebe!",
            position: 0
        },
        {
            text: "Crianças para a cama! O mais novo fica 2 rodadas sem jogar",
            position: 0
        },

        
        {
            text: "Aponte um amigo para beber!",
            position: 0
        },
        {
            text: "Amigos para sempre! Escolha alguém para beber com você.",
            position: 0
        },
        {
            text: "Passou perto!",
            position: 0
        },
        {
            text: "Tome água e fique uma rodada sem jogar.",
            position: 0
        },
        {
            text: "Vamos brindar a vida! Todos bebem e fazem um brinde.",
            position: 0
        },
        {
            text: "A pessoa mais velha bebe!",
            position: 0
        },
        {
            text: "A pessoa mais nova bebe!",
            position: 0
        },
        {
            text: "Quem está de short bebe!",
            position: 0
        },
        {
            text: "Quem está de calça bebe!",
            position: 0
        },
        {
            text: "Quem está de saia bebe!",
            position: 0
        },
        {
            text: "Quem tem cabelo grande bebe!",
            position: 0
        },
        {
            text: "Quem tem cabelo curto bebe!",
            position: 0
        },
        {
            text: "Crianças para a cama! O mais novo fica 2 rodadas sem jogar",
            position: 0
        },
    ],
}

const RandomNumber = (): number => {
    const newNumber = Math.floor(Math.random() * 49)

    if (numberOfMessage.includes(newNumber)) {
        console.log('Numero existente: '+ newNumber, numberOfMessage)
        return RandomNumber()
    }

    return newNumber
}

export const useSortMessage = () => {
    MESSAGES.wins.position = RandomNumber()
    MESSAGES.challenges.map(challenge => {
        challenge.position = RandomNumber()
        numberOfMessage.push(challenge.position)
    })
    console.log(MESSAGES)
    return MESSAGES
}