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
        text: "Acertou! Você bebe.",
        position: 0
    },
    challenges: [
        {
            text: "Escolha um amigo para beber!",
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