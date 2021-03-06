import type { InferredAlgebra, InferredProgram } from '@morphic-ts/summoners'
import type { GetAlgebra } from '@morphic-ts/algebras/lib/core'

import type { IntersectionURI } from '@morphic-ts/model-algebras/lib/intersections'
import type { ObjectURI } from '@morphic-ts/model-algebras/lib/object'
import type { PrimitiveURI } from '@morphic-ts/model-algebras/lib/primitives'
import type { RecursiveURI } from '@morphic-ts/model-algebras/lib/recursive'
import type { SetURI } from '@morphic-ts/model-algebras/lib/set'
import type { StrMapURI } from '@morphic-ts/model-algebras/lib/str-map'
import type { TaggedUnionsURI } from '@morphic-ts/model-algebras/lib/tagged-unions'
import type { UnionsURI } from '@morphic-ts/model-algebras/lib/unions'
import type { UnknownURI } from '@morphic-ts/model-algebras/lib/unknown'
import type { NewtypeURI } from '@morphic-ts/model-algebras/lib/newtype'
import type { RefinedURI } from '@morphic-ts/model-algebras/lib/refined'
import type { AnyConfigEnv } from '@morphic-ts/summoners'

/**
 *  @since 0.0.1
 */
export const ProgramUnionURI = 'ProgramUnionURI' as const
/**
 *  @since 0.0.1
 */
export type ProgramUnionURI = typeof ProgramUnionURI

/**
 *  @since 0.0.1
 */
export interface AlgebraUnion<F, Env> extends InferredAlgebra<F, ProgramUnionURI, Env> {}
/**
 *  @since 0.0.1
 */
export interface P<R extends AnyConfigEnv, E, A> extends InferredProgram<R, E, A, ProgramUnionURI> {}

declare module '@morphic-ts/summoners/lib/ProgramType' {
  interface ProgramAlgebraURI {
    [ProgramUnionURI]: GetAlgebra<
      | PrimitiveURI
      | IntersectionURI
      | ObjectURI
      | RecursiveURI
      | SetURI
      | StrMapURI
      | TaggedUnionsURI
      | UnionsURI
      | UnknownURI
      | NewtypeURI
      | RefinedURI
    >
  }
  interface ProgramAlgebra<F, Env> {
    [ProgramUnionURI]: AlgebraUnion<F, Env>
  }
  interface ProgramType<R extends AnyConfigEnv, E, A> {
    [ProgramUnionURI]: P<R, E, A>
  }
  interface ProgramUnionInterpreters {}
}
