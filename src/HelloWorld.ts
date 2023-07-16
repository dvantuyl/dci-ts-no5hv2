/**
 * @DCI-context
 * A speaker proclaims a phrase to the world, that dutifully notes it
 */


interface Speaker {
  phrase: string,
  proclaim?: () => void
}

interface World {
  log: (msg: unknown) => void,
  note?: (phrase: string) => void
}

export function HelloWorld(
  Speaker: Speaker,
  World: World
) {

  World.note = (phrase: string) => World.log(phrase);
  Speaker.proclaim = () => World.note!(Speaker.phrase!)

  return {
    say: () => Speaker.proclaim!()
  }
}

const you = { phrase: "Hello Dwight!"}

const world = HelloWorld(you, console)

world.say()

