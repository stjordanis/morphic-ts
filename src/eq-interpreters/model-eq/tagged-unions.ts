import { ModelAlgebraTaggedUnions1 } from '../../model-algebras/tagged-unions'
import { EqType, EqURI } from '..'
import { mapRecord } from '../../common/utils'

export const eqTaggedUnionInterpreter: ModelAlgebraTaggedUnions1<EqURI> = {
  taggedUnion: (tag, types) => {
    const equals = mapRecord(types, a => a.eq.equals)
    return new EqType({
      equals: (a, b): boolean => {
        if (a === b) {
          return true
        } else {
          const aTag = a[tag]
          return aTag === b[tag] ? equals[aTag](a, b) : false
        }
      }
    })
  }
}