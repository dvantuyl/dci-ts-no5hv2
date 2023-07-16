/**
 * @DCI-context
 * A speaker proclaims a phrase to the world, that dutifully notes it
 */
export function HelloWorld(
  Speaker: { phrase: string },
  World: { log: (msg: unknown) => void }
) {
  function Speaker_proclaim() {
    World_note(Speaker.phrase);
  }

  function World_note(phrase: string) {
    World.log(phrase);
  }

  Speaker_proclaim();
}
