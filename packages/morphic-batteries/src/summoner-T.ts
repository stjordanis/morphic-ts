import { cacheUnaryFunction } from '@morphic-ts/common/lib/core'
import { makeSummoner } from './usage/summoner'
import { makeTagged } from './usage/tagged-union'
import { TInterpreter, M, UM, AsOpaque, AsUOpaque } from './interpreters-T'

import {} from '@morphic-ts/io-ts-interpreters'
import {} from '@morphic-ts/eq-interpreters'
import {} from '@morphic-ts/fastcheck-interpreters'
import {} from '@morphic-ts/show-interpreters'

const summon = makeSummoner(cacheUnaryFunction, TInterpreter)
const tagged = makeTagged(summon)
export {
  /**
   *  @since 0.0.1
   */
  M,
  /**
   *  @since 0.0.1
   */
  UM,
  /**
   *  @since 0.0.1
   */
  AsOpaque,
  /**
   *  @since 0.0.1
   */
  AsUOpaque,
  /**
   *  @since 0.0.1
   */
  summon,
  /**
   *  @since 0.0.1
   */
  tagged
}
