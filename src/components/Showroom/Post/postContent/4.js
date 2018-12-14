// prettier-ignore
const colorPicker = `
# Voice Controlled Color Picker 🎨

_Made with the browsers native \`SpeechRecognition\` API._

Pick colors, using voice commands. You will use RGB(Red, Green, Blue) colors to add to/subtract from the selected color.

## Command List

\`$rgb-colors: [red, green, blue];\`

| Commands                             | Effect                                        |
| -------------------------------------| --------------------------------------------- |
| \`Reset \${rgb-color}\`              | resets the application to the “called” color. |
| \`More/less \${rgb-color}\`          | adds/subtracts 30% of the \${rgb-color}       |
| \`A little more/less \${rgb-color}\` | adds/subtracts 15% of the \${rgb-color}       |

_Inspired by [Twitter@SusseSonderby](https://twitter.com/SusseSonderby/status/1072893936316940288)_

`;
export default colorPicker;
