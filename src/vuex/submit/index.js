import { Problem } from './problem.js'
import { Editor } from './editor.js'

export const Submit = {
  namespaced: true,
  modules: {
    problem: Problem,
    editor: Editor
  }
}
