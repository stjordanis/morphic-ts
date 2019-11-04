import { InterpreterFor } from '../../core'
import { merge } from '../../utils'
import { fastCheckPrimitiveInterpreter } from './primitives'
import { fastCheckIntersectionInterpreter } from './intersections'
import { fastCheckObjectInterpreter } from './object'
import { fastCheckUnionInterpreter } from './unions'
import { fastCheckTaggedUnionInterpreter } from './tagged-unions'
import { fastCheckRecursiveInterpreter } from './recursive'
import { fastCheckStrMapInterpreter } from './str-map'
import { fastCheckSetInterpreter } from './set'
import { URI } from './index'
export { URI }

export const defineFastCheckInterpreter = InterpreterFor<URI>(URI)

export const fastCheckInterpreter = defineFastCheckInterpreter(
  merge(
    fastCheckPrimitiveInterpreter,
    fastCheckIntersectionInterpreter,
    fastCheckObjectInterpreter,
    fastCheckUnionInterpreter,
    fastCheckTaggedUnionInterpreter,
    fastCheckRecursiveInterpreter,
    fastCheckStrMapInterpreter,
    fastCheckSetInterpreter
  )
)
