
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model Favourite
 * 
 */
export type Favourite = $Result.DefaultSelection<Prisma.$FavouritePayload>
/**
 * Model Ingredients
 * 
 */
export type Ingredients = $Result.DefaultSelection<Prisma.$IngredientsPayload>
/**
 * Model Recipe_Ingredient
 * 
 */
export type Recipe_Ingredient = $Result.DefaultSelection<Prisma.$Recipe_IngredientPayload>
/**
 * Model Instructions
 * 
 */
export type Instructions = $Result.DefaultSelection<Prisma.$InstructionsPayload>
/**
 * Model Recipe_Type
 * 
 */
export type Recipe_Type = $Result.DefaultSelection<Prisma.$Recipe_TypePayload>
/**
 * Model Recipe_Filter
 * 
 */
export type Recipe_Filter = $Result.DefaultSelection<Prisma.$Recipe_FilterPayload>
/**
 * Model Shopping_List
 * 
 */
export type Shopping_List = $Result.DefaultSelection<Prisma.$Shopping_ListPayload>
/**
 * Model Shopping_List_Ingredient
 * 
 */
export type Shopping_List_Ingredient = $Result.DefaultSelection<Prisma.$Shopping_List_IngredientPayload>
/**
 * Model Planner
 * 
 */
export type Planner = $Result.DefaultSelection<Prisma.$PlannerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourite`: Exposes CRUD operations for the **Favourite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourite.findMany()
    * ```
    */
  get favourite(): Prisma.FavouriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredients`: Exposes CRUD operations for the **Ingredients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredients.findMany()
    * ```
    */
  get ingredients(): Prisma.IngredientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_Ingredient`: Exposes CRUD operations for the **Recipe_Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_Ingredients
    * const recipe_Ingredients = await prisma.recipe_Ingredient.findMany()
    * ```
    */
  get recipe_Ingredient(): Prisma.Recipe_IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructions`: Exposes CRUD operations for the **Instructions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructions
    * const instructions = await prisma.instructions.findMany()
    * ```
    */
  get instructions(): Prisma.InstructionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_Type`: Exposes CRUD operations for the **Recipe_Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_Types
    * const recipe_Types = await prisma.recipe_Type.findMany()
    * ```
    */
  get recipe_Type(): Prisma.Recipe_TypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipe_Filter`: Exposes CRUD operations for the **Recipe_Filter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipe_Filters
    * const recipe_Filters = await prisma.recipe_Filter.findMany()
    * ```
    */
  get recipe_Filter(): Prisma.Recipe_FilterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopping_List`: Exposes CRUD operations for the **Shopping_List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shopping_Lists
    * const shopping_Lists = await prisma.shopping_List.findMany()
    * ```
    */
  get shopping_List(): Prisma.Shopping_ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopping_List_Ingredient`: Exposes CRUD operations for the **Shopping_List_Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shopping_List_Ingredients
    * const shopping_List_Ingredients = await prisma.shopping_List_Ingredient.findMany()
    * ```
    */
  get shopping_List_Ingredient(): Prisma.Shopping_List_IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planner`: Exposes CRUD operations for the **Planner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planners
    * const planners = await prisma.planner.findMany()
    * ```
    */
  get planner(): Prisma.PlannerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Recipe: 'Recipe',
    Favourite: 'Favourite',
    Ingredients: 'Ingredients',
    Recipe_Ingredient: 'Recipe_Ingredient',
    Instructions: 'Instructions',
    Recipe_Type: 'Recipe_Type',
    Recipe_Filter: 'Recipe_Filter',
    Shopping_List: 'Shopping_List',
    Shopping_List_Ingredient: 'Shopping_List_Ingredient',
    Planner: 'Planner'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "recipe" | "favourite" | "ingredients" | "recipe_Ingredient" | "instructions" | "recipe_Type" | "recipe_Filter" | "shopping_List" | "shopping_List_Ingredient" | "planner"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Favourite: {
        payload: Prisma.$FavouritePayload<ExtArgs>
        fields: Prisma.FavouriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findFirst: {
            args: Prisma.FavouriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findMany: {
            args: Prisma.FavouriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          create: {
            args: Prisma.FavouriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          createMany: {
            args: Prisma.FavouriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          delete: {
            args: Prisma.FavouriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          update: {
            args: Prisma.FavouriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          deleteMany: {
            args: Prisma.FavouriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavouriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          upsert: {
            args: Prisma.FavouriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          aggregate: {
            args: Prisma.FavouriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourite>
          }
          groupBy: {
            args: Prisma.FavouriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavouriteCountAggregateOutputType> | number
          }
        }
      }
      Ingredients: {
        payload: Prisma.$IngredientsPayload<ExtArgs>
        fields: Prisma.IngredientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findFirst: {
            args: Prisma.IngredientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          findMany: {
            args: Prisma.IngredientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          create: {
            args: Prisma.IngredientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          createMany: {
            args: Prisma.IngredientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          delete: {
            args: Prisma.IngredientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          update: {
            args: Prisma.IngredientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          deleteMany: {
            args: Prisma.IngredientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>[]
          }
          upsert: {
            args: Prisma.IngredientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientsPayload>
          }
          aggregate: {
            args: Prisma.IngredientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredients>
          }
          groupBy: {
            args: Prisma.IngredientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientsCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientsCountAggregateOutputType> | number
          }
        }
      }
      Recipe_Ingredient: {
        payload: Prisma.$Recipe_IngredientPayload<ExtArgs>
        fields: Prisma.Recipe_IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Recipe_IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Recipe_IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>
          }
          findFirst: {
            args: Prisma.Recipe_IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Recipe_IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>
          }
          findMany: {
            args: Prisma.Recipe_IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>[]
          }
          create: {
            args: Prisma.Recipe_IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>
          }
          createMany: {
            args: Prisma.Recipe_IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Recipe_IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>[]
          }
          delete: {
            args: Prisma.Recipe_IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>
          }
          update: {
            args: Prisma.Recipe_IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>
          }
          deleteMany: {
            args: Prisma.Recipe_IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Recipe_IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Recipe_IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>[]
          }
          upsert: {
            args: Prisma.Recipe_IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_IngredientPayload>
          }
          aggregate: {
            args: Prisma.Recipe_IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_Ingredient>
          }
          groupBy: {
            args: Prisma.Recipe_IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.Recipe_IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_IngredientCountAggregateOutputType> | number
          }
        }
      }
      Instructions: {
        payload: Prisma.$InstructionsPayload<ExtArgs>
        fields: Prisma.InstructionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          findFirst: {
            args: Prisma.InstructionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          findMany: {
            args: Prisma.InstructionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>[]
          }
          create: {
            args: Prisma.InstructionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          createMany: {
            args: Prisma.InstructionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>[]
          }
          delete: {
            args: Prisma.InstructionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          update: {
            args: Prisma.InstructionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          deleteMany: {
            args: Prisma.InstructionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>[]
          }
          upsert: {
            args: Prisma.InstructionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructionsPayload>
          }
          aggregate: {
            args: Prisma.InstructionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructions>
          }
          groupBy: {
            args: Prisma.InstructionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructionsCountArgs<ExtArgs>
            result: $Utils.Optional<InstructionsCountAggregateOutputType> | number
          }
        }
      }
      Recipe_Type: {
        payload: Prisma.$Recipe_TypePayload<ExtArgs>
        fields: Prisma.Recipe_TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Recipe_TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Recipe_TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>
          }
          findFirst: {
            args: Prisma.Recipe_TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Recipe_TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>
          }
          findMany: {
            args: Prisma.Recipe_TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>[]
          }
          create: {
            args: Prisma.Recipe_TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>
          }
          createMany: {
            args: Prisma.Recipe_TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Recipe_TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>[]
          }
          delete: {
            args: Prisma.Recipe_TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>
          }
          update: {
            args: Prisma.Recipe_TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>
          }
          deleteMany: {
            args: Prisma.Recipe_TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Recipe_TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Recipe_TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>[]
          }
          upsert: {
            args: Prisma.Recipe_TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_TypePayload>
          }
          aggregate: {
            args: Prisma.Recipe_TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_Type>
          }
          groupBy: {
            args: Prisma.Recipe_TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Recipe_TypeCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_TypeCountAggregateOutputType> | number
          }
        }
      }
      Recipe_Filter: {
        payload: Prisma.$Recipe_FilterPayload<ExtArgs>
        fields: Prisma.Recipe_FilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Recipe_FilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Recipe_FilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>
          }
          findFirst: {
            args: Prisma.Recipe_FilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Recipe_FilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>
          }
          findMany: {
            args: Prisma.Recipe_FilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>[]
          }
          create: {
            args: Prisma.Recipe_FilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>
          }
          createMany: {
            args: Prisma.Recipe_FilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Recipe_FilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>[]
          }
          delete: {
            args: Prisma.Recipe_FilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>
          }
          update: {
            args: Prisma.Recipe_FilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>
          }
          deleteMany: {
            args: Prisma.Recipe_FilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Recipe_FilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Recipe_FilterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>[]
          }
          upsert: {
            args: Prisma.Recipe_FilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Recipe_FilterPayload>
          }
          aggregate: {
            args: Prisma.Recipe_FilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe_Filter>
          }
          groupBy: {
            args: Prisma.Recipe_FilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recipe_FilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.Recipe_FilterCountArgs<ExtArgs>
            result: $Utils.Optional<Recipe_FilterCountAggregateOutputType> | number
          }
        }
      }
      Shopping_List: {
        payload: Prisma.$Shopping_ListPayload<ExtArgs>
        fields: Prisma.Shopping_ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Shopping_ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Shopping_ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>
          }
          findFirst: {
            args: Prisma.Shopping_ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Shopping_ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>
          }
          findMany: {
            args: Prisma.Shopping_ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>[]
          }
          create: {
            args: Prisma.Shopping_ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>
          }
          createMany: {
            args: Prisma.Shopping_ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Shopping_ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>[]
          }
          delete: {
            args: Prisma.Shopping_ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>
          }
          update: {
            args: Prisma.Shopping_ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>
          }
          deleteMany: {
            args: Prisma.Shopping_ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Shopping_ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Shopping_ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>[]
          }
          upsert: {
            args: Prisma.Shopping_ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_ListPayload>
          }
          aggregate: {
            args: Prisma.Shopping_ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopping_List>
          }
          groupBy: {
            args: Prisma.Shopping_ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shopping_ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.Shopping_ListCountArgs<ExtArgs>
            result: $Utils.Optional<Shopping_ListCountAggregateOutputType> | number
          }
        }
      }
      Shopping_List_Ingredient: {
        payload: Prisma.$Shopping_List_IngredientPayload<ExtArgs>
        fields: Prisma.Shopping_List_IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Shopping_List_IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Shopping_List_IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>
          }
          findFirst: {
            args: Prisma.Shopping_List_IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Shopping_List_IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>
          }
          findMany: {
            args: Prisma.Shopping_List_IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>[]
          }
          create: {
            args: Prisma.Shopping_List_IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>
          }
          createMany: {
            args: Prisma.Shopping_List_IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Shopping_List_IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>[]
          }
          delete: {
            args: Prisma.Shopping_List_IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>
          }
          update: {
            args: Prisma.Shopping_List_IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>
          }
          deleteMany: {
            args: Prisma.Shopping_List_IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Shopping_List_IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Shopping_List_IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>[]
          }
          upsert: {
            args: Prisma.Shopping_List_IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shopping_List_IngredientPayload>
          }
          aggregate: {
            args: Prisma.Shopping_List_IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopping_List_Ingredient>
          }
          groupBy: {
            args: Prisma.Shopping_List_IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<Shopping_List_IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.Shopping_List_IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<Shopping_List_IngredientCountAggregateOutputType> | number
          }
        }
      }
      Planner: {
        payload: Prisma.$PlannerPayload<ExtArgs>
        fields: Prisma.PlannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>
          }
          findFirst: {
            args: Prisma.PlannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>
          }
          findMany: {
            args: Prisma.PlannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>[]
          }
          create: {
            args: Prisma.PlannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>
          }
          createMany: {
            args: Prisma.PlannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>[]
          }
          delete: {
            args: Prisma.PlannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>
          }
          update: {
            args: Prisma.PlannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>
          }
          deleteMany: {
            args: Prisma.PlannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>[]
          }
          upsert: {
            args: Prisma.PlannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlannerPayload>
          }
          aggregate: {
            args: Prisma.PlannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanner>
          }
          groupBy: {
            args: Prisma.PlannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlannerCountArgs<ExtArgs>
            result: $Utils.Optional<PlannerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    recipe?: RecipeOmit
    favourite?: FavouriteOmit
    ingredients?: IngredientsOmit
    recipe_Ingredient?: Recipe_IngredientOmit
    instructions?: InstructionsOmit
    recipe_Type?: Recipe_TypeOmit
    recipe_Filter?: Recipe_FilterOmit
    shopping_List?: Shopping_ListOmit
    shopping_List_Ingredient?: Shopping_List_IngredientOmit
    planner?: PlannerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favourites: number
    recipes: number
    lists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
    recipes?: boolean | UserCountOutputTypeCountRecipesArgs
    lists?: boolean | UserCountOutputTypeCountListsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shopping_ListWhereInput
  }


  /**
   * Count Type RecipeCountOutputType
   */

  export type RecipeCountOutputType = {
    favourites: number
    instructions: number
    ingredients: number
    recipeTypes: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | RecipeCountOutputTypeCountFavouritesArgs
    instructions?: boolean | RecipeCountOutputTypeCountInstructionsArgs
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs
    recipeTypes?: boolean | RecipeCountOutputTypeCountRecipeTypesArgs
  }

  // Custom InputTypes
  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountInstructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionsWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_IngredientWhereInput
  }

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountRecipeTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_TypeWhereInput
  }


  /**
   * Count Type IngredientsCountOutputType
   */

  export type IngredientsCountOutputType = {
    recipes: number
    list: number
  }

  export type IngredientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | IngredientsCountOutputTypeCountRecipesArgs
    list?: boolean | IngredientsCountOutputTypeCountListArgs
  }

  // Custom InputTypes
  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientsCountOutputType
     */
    select?: IngredientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_IngredientWhereInput
  }

  /**
   * IngredientsCountOutputType without action
   */
  export type IngredientsCountOutputTypeCountListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shopping_List_IngredientWhereInput
  }


  /**
   * Count Type Recipe_FilterCountOutputType
   */

  export type Recipe_FilterCountOutputType = {
    recipe: number
  }

  export type Recipe_FilterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | Recipe_FilterCountOutputTypeCountRecipeArgs
  }

  // Custom InputTypes
  /**
   * Recipe_FilterCountOutputType without action
   */
  export type Recipe_FilterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_FilterCountOutputType
     */
    select?: Recipe_FilterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Recipe_FilterCountOutputType without action
   */
  export type Recipe_FilterCountOutputTypeCountRecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_TypeWhereInput
  }


  /**
   * Count Type Shopping_ListCountOutputType
   */

  export type Shopping_ListCountOutputType = {
    ingredients: number
  }

  export type Shopping_ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Shopping_ListCountOutputTypeCountIngredientsArgs
  }

  // Custom InputTypes
  /**
   * Shopping_ListCountOutputType without action
   */
  export type Shopping_ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_ListCountOutputType
     */
    select?: Shopping_ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Shopping_ListCountOutputType without action
   */
  export type Shopping_ListCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shopping_List_IngredientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    planner?: boolean | User$plannerArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    lists?: boolean | User$listsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    planner?: boolean | User$plannerArgs<ExtArgs>
    recipes?: boolean | User$recipesArgs<ExtArgs>
    lists?: boolean | User$listsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favourites: Prisma.$FavouritePayload<ExtArgs>[]
      planner: Prisma.$PlannerPayload<ExtArgs> | null
      recipes: Prisma.$RecipePayload<ExtArgs>[]
      lists: Prisma.$Shopping_ListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    planner<T extends User$plannerArgs<ExtArgs> = {}>(args?: Subset<T, User$plannerArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipes<T extends User$recipesArgs<ExtArgs> = {}>(args?: Subset<T, User$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lists<T extends User$listsArgs<ExtArgs> = {}>(args?: Subset<T, User$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * User.planner
   */
  export type User$plannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    where?: PlannerWhereInput
  }

  /**
   * User.recipes
   */
  export type User$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    cursor?: RecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * User.lists
   */
  export type User$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    where?: Shopping_ListWhereInput
    orderBy?: Shopping_ListOrderByWithRelationInput | Shopping_ListOrderByWithRelationInput[]
    cursor?: Shopping_ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Shopping_ListScalarFieldEnum | Shopping_ListScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    id: number | null
    preparation_time: number | null
    UserId: number | null
  }

  export type RecipeSumAggregateOutputType = {
    id: number | null
    preparation_time: number | null
    UserId: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    difficulty: string | null
    preparation_time: number | null
    imageUrl: string | null
    UserId: number | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    difficulty: string | null
    preparation_time: number | null
    imageUrl: string | null
    UserId: number | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    difficulty: number
    preparation_time: number
    imageUrl: number
    UserId: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    id?: true
    preparation_time?: true
    UserId?: true
  }

  export type RecipeSumAggregateInputType = {
    id?: true
    preparation_time?: true
    UserId?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    difficulty?: true
    preparation_time?: true
    imageUrl?: true
    UserId?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    difficulty?: true
    preparation_time?: true
    imageUrl?: true
    UserId?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    difficulty?: true
    preparation_time?: true
    imageUrl?: true
    UserId?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl: string | null
    UserId: number
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    preparation_time?: boolean
    imageUrl?: boolean
    UserId?: boolean
    favourites?: boolean | Recipe$favouritesArgs<ExtArgs>
    instructions?: boolean | Recipe$instructionsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    recipeTypes?: boolean | Recipe$recipeTypesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    preparation_time?: boolean
    imageUrl?: boolean
    UserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    preparation_time?: boolean
    imageUrl?: boolean
    UserId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    difficulty?: boolean
    preparation_time?: boolean
    imageUrl?: boolean
    UserId?: boolean
  }

  export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "difficulty" | "preparation_time" | "imageUrl" | "UserId", ExtArgs["result"]["recipe"]>
  export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favourites?: boolean | Recipe$favouritesArgs<ExtArgs>
    instructions?: boolean | Recipe$instructionsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Recipe$ingredientsArgs<ExtArgs>
    recipeTypes?: boolean | Recipe$recipeTypesArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {
      favourites: Prisma.$FavouritePayload<ExtArgs>[]
      instructions: Prisma.$InstructionsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      ingredients: Prisma.$Recipe_IngredientPayload<ExtArgs>[]
      recipeTypes: Prisma.$Recipe_TypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      difficulty: string
      preparation_time: number
      imageUrl: string | null
      UserId: number
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favourites<T extends Recipe$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instructions<T extends Recipe$instructionsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$instructionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recipeTypes<T extends Recipe$recipeTypesArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$recipeTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe model
   */ 
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'Int'>
    readonly name: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly difficulty: FieldRef<"Recipe", 'String'>
    readonly preparation_time: FieldRef<"Recipe", 'Int'>
    readonly imageUrl: FieldRef<"Recipe", 'String'>
    readonly UserId: FieldRef<"Recipe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipe updateManyAndReturn
   */
  export type RecipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipe.favourites
   */
  export type Recipe$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Recipe.instructions
   */
  export type Recipe$instructionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    where?: InstructionsWhereInput
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    cursor?: InstructionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Recipe.ingredients
   */
  export type Recipe$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    where?: Recipe_IngredientWhereInput
    orderBy?: Recipe_IngredientOrderByWithRelationInput | Recipe_IngredientOrderByWithRelationInput[]
    cursor?: Recipe_IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_IngredientScalarFieldEnum | Recipe_IngredientScalarFieldEnum[]
  }

  /**
   * Recipe.recipeTypes
   */
  export type Recipe$recipeTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    where?: Recipe_TypeWhereInput
    orderBy?: Recipe_TypeOrderByWithRelationInput | Recipe_TypeOrderByWithRelationInput[]
    cursor?: Recipe_TypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_TypeScalarFieldEnum | Recipe_TypeScalarFieldEnum[]
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe
     */
    omit?: RecipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipeInclude<ExtArgs> | null
  }


  /**
   * Model Favourite
   */

  export type AggregateFavourite = {
    _count: FavouriteCountAggregateOutputType | null
    _avg: FavouriteAvgAggregateOutputType | null
    _sum: FavouriteSumAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  export type FavouriteAvgAggregateOutputType = {
    id_user: number | null
    id_recipe: number | null
  }

  export type FavouriteSumAggregateOutputType = {
    id_user: number | null
    id_recipe: number | null
  }

  export type FavouriteMinAggregateOutputType = {
    id_user: number | null
    id_recipe: number | null
  }

  export type FavouriteMaxAggregateOutputType = {
    id_user: number | null
    id_recipe: number | null
  }

  export type FavouriteCountAggregateOutputType = {
    id_user: number
    id_recipe: number
    _all: number
  }


  export type FavouriteAvgAggregateInputType = {
    id_user?: true
    id_recipe?: true
  }

  export type FavouriteSumAggregateInputType = {
    id_user?: true
    id_recipe?: true
  }

  export type FavouriteMinAggregateInputType = {
    id_user?: true
    id_recipe?: true
  }

  export type FavouriteMaxAggregateInputType = {
    id_user?: true
    id_recipe?: true
  }

  export type FavouriteCountAggregateInputType = {
    id_user?: true
    id_recipe?: true
    _all?: true
  }

  export type FavouriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourite to aggregate.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favourites
    **/
    _count?: true | FavouriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavouriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavouriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouriteMaxAggregateInputType
  }

  export type GetFavouriteAggregateType<T extends FavouriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourite[P]>
      : GetScalarType<T[P], AggregateFavourite[P]>
  }




  export type FavouriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithAggregationInput | FavouriteOrderByWithAggregationInput[]
    by: FavouriteScalarFieldEnum[] | FavouriteScalarFieldEnum
    having?: FavouriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouriteCountAggregateInputType | true
    _avg?: FavouriteAvgAggregateInputType
    _sum?: FavouriteSumAggregateInputType
    _min?: FavouriteMinAggregateInputType
    _max?: FavouriteMaxAggregateInputType
  }

  export type FavouriteGroupByOutputType = {
    id_user: number
    id_recipe: number
    _count: FavouriteCountAggregateOutputType | null
    _avg: FavouriteAvgAggregateOutputType | null
    _sum: FavouriteSumAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  type GetFavouriteGroupByPayload<T extends FavouriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
        }
      >
    >


  export type FavouriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_recipe?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_recipe?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    id_recipe?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectScalar = {
    id_user?: boolean
    id_recipe?: boolean
  }

  export type FavouriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "id_recipe", ExtArgs["result"]["favourite"]>
  export type FavouriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavouriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FavouriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavouritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favourite"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      id_recipe: number
    }, ExtArgs["result"]["favourite"]>
    composites: {}
  }

  type FavouriteGetPayload<S extends boolean | null | undefined | FavouriteDefaultArgs> = $Result.GetResult<Prisma.$FavouritePayload, S>

  type FavouriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouriteCountAggregateInputType | true
    }

  export interface FavouriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favourite'], meta: { name: 'Favourite' } }
    /**
     * Find zero or one Favourite that matches the filter.
     * @param {FavouriteFindUniqueArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouriteFindUniqueArgs>(args: SelectSubset<T, FavouriteFindUniqueArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouriteFindUniqueOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouriteFindFirstArgs>(args?: SelectSubset<T, FavouriteFindFirstArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourite.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourite.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const favouriteWithId_userOnly = await prisma.favourite.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends FavouriteFindManyArgs>(args?: SelectSubset<T, FavouriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourite.
     * @param {FavouriteCreateArgs} args - Arguments to create a Favourite.
     * @example
     * // Create one Favourite
     * const Favourite = await prisma.favourite.create({
     *   data: {
     *     // ... data to create a Favourite
     *   }
     * })
     * 
     */
    create<T extends FavouriteCreateArgs>(args: SelectSubset<T, FavouriteCreateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {FavouriteCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouriteCreateManyArgs>(args?: SelectSubset<T, FavouriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favourites and returns the data saved in the database.
     * @param {FavouriteCreateManyAndReturnArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favourites and only return the `id_user`
     * const favouriteWithId_userOnly = await prisma.favourite.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favourite.
     * @param {FavouriteDeleteArgs} args - Arguments to delete one Favourite.
     * @example
     * // Delete one Favourite
     * const Favourite = await prisma.favourite.delete({
     *   where: {
     *     // ... filter to delete one Favourite
     *   }
     * })
     * 
     */
    delete<T extends FavouriteDeleteArgs>(args: SelectSubset<T, FavouriteDeleteArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourite.
     * @param {FavouriteUpdateArgs} args - Arguments to update one Favourite.
     * @example
     * // Update one Favourite
     * const favourite = await prisma.favourite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouriteUpdateArgs>(args: SelectSubset<T, FavouriteUpdateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {FavouriteDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouriteDeleteManyArgs>(args?: SelectSubset<T, FavouriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouriteUpdateManyArgs>(args: SelectSubset<T, FavouriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites and returns the data updated in the database.
     * @param {FavouriteUpdateManyAndReturnArgs} args - Arguments to update many Favourites.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favourites and only return the `id_user`
     * const favouriteWithId_userOnly = await prisma.favourite.updateManyAndReturn({
     *   select: { id_user: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavouriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavouriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favourite.
     * @param {FavouriteUpsertArgs} args - Arguments to update or create a Favourite.
     * @example
     * // Update or create a Favourite
     * const favourite = await prisma.favourite.upsert({
     *   create: {
     *     // ... data to create a Favourite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourite we want to update
     *   }
     * })
     */
    upsert<T extends FavouriteUpsertArgs>(args: SelectSubset<T, FavouriteUpsertArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourite.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends FavouriteCountArgs>(
      args?: Subset<T, FavouriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavouriteAggregateArgs>(args: Subset<T, FavouriteAggregateArgs>): Prisma.PrismaPromise<GetFavouriteAggregateType<T>>

    /**
     * Group by Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavouriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouriteGroupByArgs['orderBy'] }
        : { orderBy?: FavouriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavouriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favourite model
   */
  readonly fields: FavouriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favourite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favourite model
   */ 
  interface FavouriteFieldRefs {
    readonly id_user: FieldRef<"Favourite", 'Int'>
    readonly id_recipe: FieldRef<"Favourite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favourite findUnique
   */
  export type FavouriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findUniqueOrThrow
   */
  export type FavouriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findFirst
   */
  export type FavouriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findFirstOrThrow
   */
  export type FavouriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findMany
   */
  export type FavouriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite create
   */
  export type FavouriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favourite.
     */
    data: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
  }

  /**
   * Favourite createMany
   */
  export type FavouriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favourite createManyAndReturn
   */
  export type FavouriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourite update
   */
  export type FavouriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favourite.
     */
    data: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
    /**
     * Choose, which Favourite to update.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite updateMany
   */
  export type FavouriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
  }

  /**
   * Favourite updateManyAndReturn
   */
  export type FavouriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourite upsert
   */
  export type FavouriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favourite to update in case it exists.
     */
    where: FavouriteWhereUniqueInput
    /**
     * In case the Favourite found by the `where` argument doesn't exist, create a new Favourite with this data.
     */
    create: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
    /**
     * In case the Favourite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
  }

  /**
   * Favourite delete
   */
  export type FavouriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter which Favourite to delete.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite deleteMany
   */
  export type FavouriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to delete
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to delete.
     */
    limit?: number
  }

  /**
   * Favourite without action
   */
  export type FavouriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
  }


  /**
   * Model Ingredients
   */

  export type AggregateIngredients = {
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  export type IngredientsAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientsSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientsMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    images: string | null
  }

  export type IngredientsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    images: string | null
  }

  export type IngredientsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    images: number
    _all: number
  }


  export type IngredientsAvgAggregateInputType = {
    id?: true
  }

  export type IngredientsSumAggregateInputType = {
    id?: true
  }

  export type IngredientsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    images?: true
  }

  export type IngredientsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    images?: true
  }

  export type IngredientsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    images?: true
    _all?: true
  }

  export type IngredientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to aggregate.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientsMaxAggregateInputType
  }

  export type GetIngredientsAggregateType<T extends IngredientsAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredients[P]>
      : GetScalarType<T[P], AggregateIngredients[P]>
  }




  export type IngredientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientsWhereInput
    orderBy?: IngredientsOrderByWithAggregationInput | IngredientsOrderByWithAggregationInput[]
    by: IngredientsScalarFieldEnum[] | IngredientsScalarFieldEnum
    having?: IngredientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientsCountAggregateInputType | true
    _avg?: IngredientsAvgAggregateInputType
    _sum?: IngredientsSumAggregateInputType
    _min?: IngredientsMinAggregateInputType
    _max?: IngredientsMaxAggregateInputType
  }

  export type IngredientsGroupByOutputType = {
    id: number
    name: string
    type: string
    images: string | null
    _count: IngredientsCountAggregateOutputType | null
    _avg: IngredientsAvgAggregateOutputType | null
    _sum: IngredientsSumAggregateOutputType | null
    _min: IngredientsMinAggregateOutputType | null
    _max: IngredientsMaxAggregateOutputType | null
  }

  type GetIngredientsGroupByPayload<T extends IngredientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientsGroupByOutputType[P]>
        }
      >
    >


  export type IngredientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    images?: boolean
    recipes?: boolean | Ingredients$recipesArgs<ExtArgs>
    list?: boolean | Ingredients$listArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    images?: boolean
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    images?: boolean
  }, ExtArgs["result"]["ingredients"]>

  export type IngredientsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    images?: boolean
  }

  export type IngredientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "images", ExtArgs["result"]["ingredients"]>
  export type IngredientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | Ingredients$recipesArgs<ExtArgs>
    list?: boolean | Ingredients$listArgs<ExtArgs>
    _count?: boolean | IngredientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredients"
    objects: {
      recipes: Prisma.$Recipe_IngredientPayload<ExtArgs>[]
      list: Prisma.$Shopping_List_IngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      images: string | null
    }, ExtArgs["result"]["ingredients"]>
    composites: {}
  }

  type IngredientsGetPayload<S extends boolean | null | undefined | IngredientsDefaultArgs> = $Result.GetResult<Prisma.$IngredientsPayload, S>

  type IngredientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientsCountAggregateInputType | true
    }

  export interface IngredientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredients'], meta: { name: 'Ingredients' } }
    /**
     * Find zero or one Ingredients that matches the filter.
     * @param {IngredientsFindUniqueArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientsFindUniqueArgs>(args: SelectSubset<T, IngredientsFindUniqueArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientsFindUniqueOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientsFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientsFindFirstArgs>(args?: SelectSubset<T, IngredientsFindFirstArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindFirstOrThrowArgs} args - Arguments to find a Ingredients
     * @example
     * // Get one Ingredients
     * const ingredients = await prisma.ingredients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientsFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredients.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientsFindManyArgs>(args?: SelectSubset<T, IngredientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredients.
     * @param {IngredientsCreateArgs} args - Arguments to create a Ingredients.
     * @example
     * // Create one Ingredients
     * const Ingredients = await prisma.ingredients.create({
     *   data: {
     *     // ... data to create a Ingredients
     *   }
     * })
     * 
     */
    create<T extends IngredientsCreateArgs>(args: SelectSubset<T, IngredientsCreateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientsCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientsCreateManyArgs>(args?: SelectSubset<T, IngredientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientsCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredients = await prisma.ingredients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientsCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredients.
     * @param {IngredientsDeleteArgs} args - Arguments to delete one Ingredients.
     * @example
     * // Delete one Ingredients
     * const Ingredients = await prisma.ingredients.delete({
     *   where: {
     *     // ... filter to delete one Ingredients
     *   }
     * })
     * 
     */
    delete<T extends IngredientsDeleteArgs>(args: SelectSubset<T, IngredientsDeleteArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredients.
     * @param {IngredientsUpdateArgs} args - Arguments to update one Ingredients.
     * @example
     * // Update one Ingredients
     * const ingredients = await prisma.ingredients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientsUpdateArgs>(args: SelectSubset<T, IngredientsUpdateArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientsDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientsDeleteManyArgs>(args?: SelectSubset<T, IngredientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientsUpdateManyArgs>(args: SelectSubset<T, IngredientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientsUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredients = await prisma.ingredients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientsWithIdOnly = await prisma.ingredients.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientsUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredients.
     * @param {IngredientsUpsertArgs} args - Arguments to update or create a Ingredients.
     * @example
     * // Update or create a Ingredients
     * const ingredients = await prisma.ingredients.upsert({
     *   create: {
     *     // ... data to create a Ingredients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredients we want to update
     *   }
     * })
     */
    upsert<T extends IngredientsUpsertArgs>(args: SelectSubset<T, IngredientsUpsertArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredients.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientsCountArgs>(
      args?: Subset<T, IngredientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngredientsAggregateArgs>(args: Subset<T, IngredientsAggregateArgs>): Prisma.PrismaPromise<GetIngredientsAggregateType<T>>

    /**
     * Group by Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngredientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientsGroupByArgs['orderBy'] }
        : { orderBy?: IngredientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredients model
   */
  readonly fields: IngredientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipes<T extends Ingredients$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Ingredients$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    list<T extends Ingredients$listArgs<ExtArgs> = {}>(args?: Subset<T, Ingredients$listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredients model
   */ 
  interface IngredientsFieldRefs {
    readonly id: FieldRef<"Ingredients", 'Int'>
    readonly name: FieldRef<"Ingredients", 'String'>
    readonly type: FieldRef<"Ingredients", 'String'>
    readonly images: FieldRef<"Ingredients", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ingredients findUnique
   */
  export type IngredientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findUniqueOrThrow
   */
  export type IngredientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients findFirst
   */
  export type IngredientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findFirstOrThrow
   */
  export type IngredientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients findMany
   */
  export type IngredientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientsOrderByWithRelationInput | IngredientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientsScalarFieldEnum | IngredientsScalarFieldEnum[]
  }

  /**
   * Ingredients create
   */
  export type IngredientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredients.
     */
    data: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
  }

  /**
   * Ingredients createMany
   */
  export type IngredientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredients createManyAndReturn
   */
  export type IngredientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientsCreateManyInput | IngredientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredients update
   */
  export type IngredientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredients.
     */
    data: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
    /**
     * Choose, which Ingredients to update.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients updateMany
   */
  export type IngredientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredients updateManyAndReturn
   */
  export type IngredientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientsUpdateManyMutationInput, IngredientsUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredients upsert
   */
  export type IngredientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredients to update in case it exists.
     */
    where: IngredientsWhereUniqueInput
    /**
     * In case the Ingredients found by the `where` argument doesn't exist, create a new Ingredients with this data.
     */
    create: XOR<IngredientsCreateInput, IngredientsUncheckedCreateInput>
    /**
     * In case the Ingredients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientsUpdateInput, IngredientsUncheckedUpdateInput>
  }

  /**
   * Ingredients delete
   */
  export type IngredientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
    /**
     * Filter which Ingredients to delete.
     */
    where: IngredientsWhereUniqueInput
  }

  /**
   * Ingredients deleteMany
   */
  export type IngredientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientsWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredients.recipes
   */
  export type Ingredients$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    where?: Recipe_IngredientWhereInput
    orderBy?: Recipe_IngredientOrderByWithRelationInput | Recipe_IngredientOrderByWithRelationInput[]
    cursor?: Recipe_IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_IngredientScalarFieldEnum | Recipe_IngredientScalarFieldEnum[]
  }

  /**
   * Ingredients.list
   */
  export type Ingredients$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    where?: Shopping_List_IngredientWhereInput
    orderBy?: Shopping_List_IngredientOrderByWithRelationInput | Shopping_List_IngredientOrderByWithRelationInput[]
    cursor?: Shopping_List_IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Shopping_List_IngredientScalarFieldEnum | Shopping_List_IngredientScalarFieldEnum[]
  }

  /**
   * Ingredients without action
   */
  export type IngredientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredients
     */
    select?: IngredientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredients
     */
    omit?: IngredientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientsInclude<ExtArgs> | null
  }


  /**
   * Model Recipe_Ingredient
   */

  export type AggregateRecipe_Ingredient = {
    _count: Recipe_IngredientCountAggregateOutputType | null
    _avg: Recipe_IngredientAvgAggregateOutputType | null
    _sum: Recipe_IngredientSumAggregateOutputType | null
    _min: Recipe_IngredientMinAggregateOutputType | null
    _max: Recipe_IngredientMaxAggregateOutputType | null
  }

  export type Recipe_IngredientAvgAggregateOutputType = {
    id_recipe: number | null
    id_ingredient: number | null
    quantity: number | null
  }

  export type Recipe_IngredientSumAggregateOutputType = {
    id_recipe: number | null
    id_ingredient: number | null
    quantity: number | null
  }

  export type Recipe_IngredientMinAggregateOutputType = {
    id_recipe: number | null
    id_ingredient: number | null
    measurement_unit: string | null
    quantity: number | null
  }

  export type Recipe_IngredientMaxAggregateOutputType = {
    id_recipe: number | null
    id_ingredient: number | null
    measurement_unit: string | null
    quantity: number | null
  }

  export type Recipe_IngredientCountAggregateOutputType = {
    id_recipe: number
    id_ingredient: number
    measurement_unit: number
    quantity: number
    _all: number
  }


  export type Recipe_IngredientAvgAggregateInputType = {
    id_recipe?: true
    id_ingredient?: true
    quantity?: true
  }

  export type Recipe_IngredientSumAggregateInputType = {
    id_recipe?: true
    id_ingredient?: true
    quantity?: true
  }

  export type Recipe_IngredientMinAggregateInputType = {
    id_recipe?: true
    id_ingredient?: true
    measurement_unit?: true
    quantity?: true
  }

  export type Recipe_IngredientMaxAggregateInputType = {
    id_recipe?: true
    id_ingredient?: true
    measurement_unit?: true
    quantity?: true
  }

  export type Recipe_IngredientCountAggregateInputType = {
    id_recipe?: true
    id_ingredient?: true
    measurement_unit?: true
    quantity?: true
    _all?: true
  }

  export type Recipe_IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Ingredient to aggregate.
     */
    where?: Recipe_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Ingredients to fetch.
     */
    orderBy?: Recipe_IngredientOrderByWithRelationInput | Recipe_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recipe_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipe_Ingredients
    **/
    _count?: true | Recipe_IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_IngredientMaxAggregateInputType
  }

  export type GetRecipe_IngredientAggregateType<T extends Recipe_IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_Ingredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_Ingredient[P]>
      : GetScalarType<T[P], AggregateRecipe_Ingredient[P]>
  }




  export type Recipe_IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_IngredientWhereInput
    orderBy?: Recipe_IngredientOrderByWithAggregationInput | Recipe_IngredientOrderByWithAggregationInput[]
    by: Recipe_IngredientScalarFieldEnum[] | Recipe_IngredientScalarFieldEnum
    having?: Recipe_IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_IngredientCountAggregateInputType | true
    _avg?: Recipe_IngredientAvgAggregateInputType
    _sum?: Recipe_IngredientSumAggregateInputType
    _min?: Recipe_IngredientMinAggregateInputType
    _max?: Recipe_IngredientMaxAggregateInputType
  }

  export type Recipe_IngredientGroupByOutputType = {
    id_recipe: number
    id_ingredient: number
    measurement_unit: string
    quantity: number
    _count: Recipe_IngredientCountAggregateOutputType | null
    _avg: Recipe_IngredientAvgAggregateOutputType | null
    _sum: Recipe_IngredientSumAggregateOutputType | null
    _min: Recipe_IngredientMinAggregateOutputType | null
    _max: Recipe_IngredientMaxAggregateOutputType | null
  }

  type GetRecipe_IngredientGroupByPayload<T extends Recipe_IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_IngredientGroupByOutputType[P]>
        }
      >
    >


  export type Recipe_IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recipe?: boolean
    id_ingredient?: boolean
    measurement_unit?: boolean
    quantity?: boolean
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Ingredient"]>

  export type Recipe_IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recipe?: boolean
    id_ingredient?: boolean
    measurement_unit?: boolean
    quantity?: boolean
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Ingredient"]>

  export type Recipe_IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recipe?: boolean
    id_ingredient?: boolean
    measurement_unit?: boolean
    quantity?: boolean
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Ingredient"]>

  export type Recipe_IngredientSelectScalar = {
    id_recipe?: boolean
    id_ingredient?: boolean
    measurement_unit?: boolean
    quantity?: boolean
  }

  export type Recipe_IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_recipe" | "id_ingredient" | "measurement_unit" | "quantity", ExtArgs["result"]["recipe_Ingredient"]>
  export type Recipe_IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type Recipe_IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type Recipe_IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $Recipe_IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe_Ingredient"
    objects: {
      ingredient: Prisma.$IngredientsPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_recipe: number
      id_ingredient: number
      measurement_unit: string
      quantity: number
    }, ExtArgs["result"]["recipe_Ingredient"]>
    composites: {}
  }

  type Recipe_IngredientGetPayload<S extends boolean | null | undefined | Recipe_IngredientDefaultArgs> = $Result.GetResult<Prisma.$Recipe_IngredientPayload, S>

  type Recipe_IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Recipe_IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_IngredientCountAggregateInputType | true
    }

  export interface Recipe_IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe_Ingredient'], meta: { name: 'Recipe_Ingredient' } }
    /**
     * Find zero or one Recipe_Ingredient that matches the filter.
     * @param {Recipe_IngredientFindUniqueArgs} args - Arguments to find a Recipe_Ingredient
     * @example
     * // Get one Recipe_Ingredient
     * const recipe_Ingredient = await prisma.recipe_Ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Recipe_IngredientFindUniqueArgs>(args: SelectSubset<T, Recipe_IngredientFindUniqueArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Recipe_IngredientFindUniqueOrThrowArgs} args - Arguments to find a Recipe_Ingredient
     * @example
     * // Get one Recipe_Ingredient
     * const recipe_Ingredient = await prisma.recipe_Ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Recipe_IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, Recipe_IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientFindFirstArgs} args - Arguments to find a Recipe_Ingredient
     * @example
     * // Get one Recipe_Ingredient
     * const recipe_Ingredient = await prisma.recipe_Ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Recipe_IngredientFindFirstArgs>(args?: SelectSubset<T, Recipe_IngredientFindFirstArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientFindFirstOrThrowArgs} args - Arguments to find a Recipe_Ingredient
     * @example
     * // Get one Recipe_Ingredient
     * const recipe_Ingredient = await prisma.recipe_Ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Recipe_IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, Recipe_IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_Ingredients
     * const recipe_Ingredients = await prisma.recipe_Ingredient.findMany()
     * 
     * // Get first 10 Recipe_Ingredients
     * const recipe_Ingredients = await prisma.recipe_Ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id_recipe`
     * const recipe_IngredientWithId_recipeOnly = await prisma.recipe_Ingredient.findMany({ select: { id_recipe: true } })
     * 
     */
    findMany<T extends Recipe_IngredientFindManyArgs>(args?: SelectSubset<T, Recipe_IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_Ingredient.
     * @param {Recipe_IngredientCreateArgs} args - Arguments to create a Recipe_Ingredient.
     * @example
     * // Create one Recipe_Ingredient
     * const Recipe_Ingredient = await prisma.recipe_Ingredient.create({
     *   data: {
     *     // ... data to create a Recipe_Ingredient
     *   }
     * })
     * 
     */
    create<T extends Recipe_IngredientCreateArgs>(args: SelectSubset<T, Recipe_IngredientCreateArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_Ingredients.
     * @param {Recipe_IngredientCreateManyArgs} args - Arguments to create many Recipe_Ingredients.
     * @example
     * // Create many Recipe_Ingredients
     * const recipe_Ingredient = await prisma.recipe_Ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Recipe_IngredientCreateManyArgs>(args?: SelectSubset<T, Recipe_IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipe_Ingredients and returns the data saved in the database.
     * @param {Recipe_IngredientCreateManyAndReturnArgs} args - Arguments to create many Recipe_Ingredients.
     * @example
     * // Create many Recipe_Ingredients
     * const recipe_Ingredient = await prisma.recipe_Ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipe_Ingredients and only return the `id_recipe`
     * const recipe_IngredientWithId_recipeOnly = await prisma.recipe_Ingredient.createManyAndReturn({
     *   select: { id_recipe: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Recipe_IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, Recipe_IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe_Ingredient.
     * @param {Recipe_IngredientDeleteArgs} args - Arguments to delete one Recipe_Ingredient.
     * @example
     * // Delete one Recipe_Ingredient
     * const Recipe_Ingredient = await prisma.recipe_Ingredient.delete({
     *   where: {
     *     // ... filter to delete one Recipe_Ingredient
     *   }
     * })
     * 
     */
    delete<T extends Recipe_IngredientDeleteArgs>(args: SelectSubset<T, Recipe_IngredientDeleteArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_Ingredient.
     * @param {Recipe_IngredientUpdateArgs} args - Arguments to update one Recipe_Ingredient.
     * @example
     * // Update one Recipe_Ingredient
     * const recipe_Ingredient = await prisma.recipe_Ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Recipe_IngredientUpdateArgs>(args: SelectSubset<T, Recipe_IngredientUpdateArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_Ingredients.
     * @param {Recipe_IngredientDeleteManyArgs} args - Arguments to filter Recipe_Ingredients to delete.
     * @example
     * // Delete a few Recipe_Ingredients
     * const { count } = await prisma.recipe_Ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Recipe_IngredientDeleteManyArgs>(args?: SelectSubset<T, Recipe_IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_Ingredients
     * const recipe_Ingredient = await prisma.recipe_Ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Recipe_IngredientUpdateManyArgs>(args: SelectSubset<T, Recipe_IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Ingredients and returns the data updated in the database.
     * @param {Recipe_IngredientUpdateManyAndReturnArgs} args - Arguments to update many Recipe_Ingredients.
     * @example
     * // Update many Recipe_Ingredients
     * const recipe_Ingredient = await prisma.recipe_Ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipe_Ingredients and only return the `id_recipe`
     * const recipe_IngredientWithId_recipeOnly = await prisma.recipe_Ingredient.updateManyAndReturn({
     *   select: { id_recipe: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Recipe_IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, Recipe_IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe_Ingredient.
     * @param {Recipe_IngredientUpsertArgs} args - Arguments to update or create a Recipe_Ingredient.
     * @example
     * // Update or create a Recipe_Ingredient
     * const recipe_Ingredient = await prisma.recipe_Ingredient.upsert({
     *   create: {
     *     // ... data to create a Recipe_Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends Recipe_IngredientUpsertArgs>(args: SelectSubset<T, Recipe_IngredientUpsertArgs<ExtArgs>>): Prisma__Recipe_IngredientClient<$Result.GetResult<Prisma.$Recipe_IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientCountArgs} args - Arguments to filter Recipe_Ingredients to count.
     * @example
     * // Count the number of Recipe_Ingredients
     * const count = await prisma.recipe_Ingredient.count({
     *   where: {
     *     // ... the filter for the Recipe_Ingredients we want to count
     *   }
     * })
    **/
    count<T extends Recipe_IngredientCountArgs>(
      args?: Subset<T, Recipe_IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recipe_IngredientAggregateArgs>(args: Subset<T, Recipe_IngredientAggregateArgs>): Prisma.PrismaPromise<GetRecipe_IngredientAggregateType<T>>

    /**
     * Group by Recipe_Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Recipe_IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recipe_IngredientGroupByArgs['orderBy'] }
        : { orderBy?: Recipe_IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Recipe_IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_IngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe_Ingredient model
   */
  readonly fields: Recipe_IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe_Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Recipe_IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends IngredientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientsDefaultArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe_Ingredient model
   */ 
  interface Recipe_IngredientFieldRefs {
    readonly id_recipe: FieldRef<"Recipe_Ingredient", 'Int'>
    readonly id_ingredient: FieldRef<"Recipe_Ingredient", 'Int'>
    readonly measurement_unit: FieldRef<"Recipe_Ingredient", 'String'>
    readonly quantity: FieldRef<"Recipe_Ingredient", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Recipe_Ingredient findUnique
   */
  export type Recipe_IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Ingredient to fetch.
     */
    where: Recipe_IngredientWhereUniqueInput
  }

  /**
   * Recipe_Ingredient findUniqueOrThrow
   */
  export type Recipe_IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Ingredient to fetch.
     */
    where: Recipe_IngredientWhereUniqueInput
  }

  /**
   * Recipe_Ingredient findFirst
   */
  export type Recipe_IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Ingredient to fetch.
     */
    where?: Recipe_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Ingredients to fetch.
     */
    orderBy?: Recipe_IngredientOrderByWithRelationInput | Recipe_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Ingredients.
     */
    cursor?: Recipe_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Ingredients.
     */
    distinct?: Recipe_IngredientScalarFieldEnum | Recipe_IngredientScalarFieldEnum[]
  }

  /**
   * Recipe_Ingredient findFirstOrThrow
   */
  export type Recipe_IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Ingredient to fetch.
     */
    where?: Recipe_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Ingredients to fetch.
     */
    orderBy?: Recipe_IngredientOrderByWithRelationInput | Recipe_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Ingredients.
     */
    cursor?: Recipe_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Ingredients.
     */
    distinct?: Recipe_IngredientScalarFieldEnum | Recipe_IngredientScalarFieldEnum[]
  }

  /**
   * Recipe_Ingredient findMany
   */
  export type Recipe_IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Ingredients to fetch.
     */
    where?: Recipe_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Ingredients to fetch.
     */
    orderBy?: Recipe_IngredientOrderByWithRelationInput | Recipe_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipe_Ingredients.
     */
    cursor?: Recipe_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Ingredients.
     */
    skip?: number
    distinct?: Recipe_IngredientScalarFieldEnum | Recipe_IngredientScalarFieldEnum[]
  }

  /**
   * Recipe_Ingredient create
   */
  export type Recipe_IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe_Ingredient.
     */
    data: XOR<Recipe_IngredientCreateInput, Recipe_IngredientUncheckedCreateInput>
  }

  /**
   * Recipe_Ingredient createMany
   */
  export type Recipe_IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipe_Ingredients.
     */
    data: Recipe_IngredientCreateManyInput | Recipe_IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe_Ingredient createManyAndReturn
   */
  export type Recipe_IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Recipe_Ingredients.
     */
    data: Recipe_IngredientCreateManyInput | Recipe_IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe_Ingredient update
   */
  export type Recipe_IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe_Ingredient.
     */
    data: XOR<Recipe_IngredientUpdateInput, Recipe_IngredientUncheckedUpdateInput>
    /**
     * Choose, which Recipe_Ingredient to update.
     */
    where: Recipe_IngredientWhereUniqueInput
  }

  /**
   * Recipe_Ingredient updateMany
   */
  export type Recipe_IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipe_Ingredients.
     */
    data: XOR<Recipe_IngredientUpdateManyMutationInput, Recipe_IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Ingredients to update
     */
    where?: Recipe_IngredientWhereInput
    /**
     * Limit how many Recipe_Ingredients to update.
     */
    limit?: number
  }

  /**
   * Recipe_Ingredient updateManyAndReturn
   */
  export type Recipe_IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Recipe_Ingredients.
     */
    data: XOR<Recipe_IngredientUpdateManyMutationInput, Recipe_IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Ingredients to update
     */
    where?: Recipe_IngredientWhereInput
    /**
     * Limit how many Recipe_Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe_Ingredient upsert
   */
  export type Recipe_IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe_Ingredient to update in case it exists.
     */
    where: Recipe_IngredientWhereUniqueInput
    /**
     * In case the Recipe_Ingredient found by the `where` argument doesn't exist, create a new Recipe_Ingredient with this data.
     */
    create: XOR<Recipe_IngredientCreateInput, Recipe_IngredientUncheckedCreateInput>
    /**
     * In case the Recipe_Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recipe_IngredientUpdateInput, Recipe_IngredientUncheckedUpdateInput>
  }

  /**
   * Recipe_Ingredient delete
   */
  export type Recipe_IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
    /**
     * Filter which Recipe_Ingredient to delete.
     */
    where: Recipe_IngredientWhereUniqueInput
  }

  /**
   * Recipe_Ingredient deleteMany
   */
  export type Recipe_IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Ingredients to delete
     */
    where?: Recipe_IngredientWhereInput
    /**
     * Limit how many Recipe_Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Recipe_Ingredient without action
   */
  export type Recipe_IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Ingredient
     */
    select?: Recipe_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Ingredient
     */
    omit?: Recipe_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_IngredientInclude<ExtArgs> | null
  }


  /**
   * Model Instructions
   */

  export type AggregateInstructions = {
    _count: InstructionsCountAggregateOutputType | null
    _avg: InstructionsAvgAggregateOutputType | null
    _sum: InstructionsSumAggregateOutputType | null
    _min: InstructionsMinAggregateOutputType | null
    _max: InstructionsMaxAggregateOutputType | null
  }

  export type InstructionsAvgAggregateOutputType = {
    id: number | null
    id_recipe: number | null
  }

  export type InstructionsSumAggregateOutputType = {
    id: number | null
    id_recipe: number | null
  }

  export type InstructionsMinAggregateOutputType = {
    id: number | null
    id_recipe: number | null
    steps_numerations: string | null
    Description: string | null
  }

  export type InstructionsMaxAggregateOutputType = {
    id: number | null
    id_recipe: number | null
    steps_numerations: string | null
    Description: string | null
  }

  export type InstructionsCountAggregateOutputType = {
    id: number
    id_recipe: number
    steps_numerations: number
    Description: number
    _all: number
  }


  export type InstructionsAvgAggregateInputType = {
    id?: true
    id_recipe?: true
  }

  export type InstructionsSumAggregateInputType = {
    id?: true
    id_recipe?: true
  }

  export type InstructionsMinAggregateInputType = {
    id?: true
    id_recipe?: true
    steps_numerations?: true
    Description?: true
  }

  export type InstructionsMaxAggregateInputType = {
    id?: true
    id_recipe?: true
    steps_numerations?: true
    Description?: true
  }

  export type InstructionsCountAggregateInputType = {
    id?: true
    id_recipe?: true
    steps_numerations?: true
    Description?: true
    _all?: true
  }

  export type InstructionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructions to aggregate.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructions
    **/
    _count?: true | InstructionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstructionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstructionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructionsMaxAggregateInputType
  }

  export type GetInstructionsAggregateType<T extends InstructionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructions[P]>
      : GetScalarType<T[P], AggregateInstructions[P]>
  }




  export type InstructionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructionsWhereInput
    orderBy?: InstructionsOrderByWithAggregationInput | InstructionsOrderByWithAggregationInput[]
    by: InstructionsScalarFieldEnum[] | InstructionsScalarFieldEnum
    having?: InstructionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructionsCountAggregateInputType | true
    _avg?: InstructionsAvgAggregateInputType
    _sum?: InstructionsSumAggregateInputType
    _min?: InstructionsMinAggregateInputType
    _max?: InstructionsMaxAggregateInputType
  }

  export type InstructionsGroupByOutputType = {
    id: number
    id_recipe: number
    steps_numerations: string
    Description: string
    _count: InstructionsCountAggregateOutputType | null
    _avg: InstructionsAvgAggregateOutputType | null
    _sum: InstructionsSumAggregateOutputType | null
    _min: InstructionsMinAggregateOutputType | null
    _max: InstructionsMaxAggregateOutputType | null
  }

  type GetInstructionsGroupByPayload<T extends InstructionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructionsGroupByOutputType[P]>
            : GetScalarType<T[P], InstructionsGroupByOutputType[P]>
        }
      >
    >


  export type InstructionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_recipe?: boolean
    steps_numerations?: boolean
    Description?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructions"]>

  export type InstructionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_recipe?: boolean
    steps_numerations?: boolean
    Description?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructions"]>

  export type InstructionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_recipe?: boolean
    steps_numerations?: boolean
    Description?: boolean
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructions"]>

  export type InstructionsSelectScalar = {
    id?: boolean
    id_recipe?: boolean
    steps_numerations?: boolean
    Description?: boolean
  }

  export type InstructionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_recipe" | "steps_numerations" | "Description", ExtArgs["result"]["instructions"]>
  export type InstructionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type InstructionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type InstructionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $InstructionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructions"
    objects: {
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_recipe: number
      steps_numerations: string
      Description: string
    }, ExtArgs["result"]["instructions"]>
    composites: {}
  }

  type InstructionsGetPayload<S extends boolean | null | undefined | InstructionsDefaultArgs> = $Result.GetResult<Prisma.$InstructionsPayload, S>

  type InstructionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructionsCountAggregateInputType | true
    }

  export interface InstructionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructions'], meta: { name: 'Instructions' } }
    /**
     * Find zero or one Instructions that matches the filter.
     * @param {InstructionsFindUniqueArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructionsFindUniqueArgs>(args: SelectSubset<T, InstructionsFindUniqueArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructionsFindUniqueOrThrowArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructionsFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsFindFirstArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructionsFindFirstArgs>(args?: SelectSubset<T, InstructionsFindFirstArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsFindFirstOrThrowArgs} args - Arguments to find a Instructions
     * @example
     * // Get one Instructions
     * const instructions = await prisma.instructions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructionsFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructions
     * const instructions = await prisma.instructions.findMany()
     * 
     * // Get first 10 Instructions
     * const instructions = await prisma.instructions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructionsWithIdOnly = await prisma.instructions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructionsFindManyArgs>(args?: SelectSubset<T, InstructionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructions.
     * @param {InstructionsCreateArgs} args - Arguments to create a Instructions.
     * @example
     * // Create one Instructions
     * const Instructions = await prisma.instructions.create({
     *   data: {
     *     // ... data to create a Instructions
     *   }
     * })
     * 
     */
    create<T extends InstructionsCreateArgs>(args: SelectSubset<T, InstructionsCreateArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructions.
     * @param {InstructionsCreateManyArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instructions = await prisma.instructions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructionsCreateManyArgs>(args?: SelectSubset<T, InstructionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructions and returns the data saved in the database.
     * @param {InstructionsCreateManyAndReturnArgs} args - Arguments to create many Instructions.
     * @example
     * // Create many Instructions
     * const instructions = await prisma.instructions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructions and only return the `id`
     * const instructionsWithIdOnly = await prisma.instructions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructionsCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructions.
     * @param {InstructionsDeleteArgs} args - Arguments to delete one Instructions.
     * @example
     * // Delete one Instructions
     * const Instructions = await prisma.instructions.delete({
     *   where: {
     *     // ... filter to delete one Instructions
     *   }
     * })
     * 
     */
    delete<T extends InstructionsDeleteArgs>(args: SelectSubset<T, InstructionsDeleteArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructions.
     * @param {InstructionsUpdateArgs} args - Arguments to update one Instructions.
     * @example
     * // Update one Instructions
     * const instructions = await prisma.instructions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructionsUpdateArgs>(args: SelectSubset<T, InstructionsUpdateArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructions.
     * @param {InstructionsDeleteManyArgs} args - Arguments to filter Instructions to delete.
     * @example
     * // Delete a few Instructions
     * const { count } = await prisma.instructions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructionsDeleteManyArgs>(args?: SelectSubset<T, InstructionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructions
     * const instructions = await prisma.instructions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructionsUpdateManyArgs>(args: SelectSubset<T, InstructionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructions and returns the data updated in the database.
     * @param {InstructionsUpdateManyAndReturnArgs} args - Arguments to update many Instructions.
     * @example
     * // Update many Instructions
     * const instructions = await prisma.instructions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructions and only return the `id`
     * const instructionsWithIdOnly = await prisma.instructions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructionsUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructions.
     * @param {InstructionsUpsertArgs} args - Arguments to update or create a Instructions.
     * @example
     * // Update or create a Instructions
     * const instructions = await prisma.instructions.upsert({
     *   create: {
     *     // ... data to create a Instructions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructions we want to update
     *   }
     * })
     */
    upsert<T extends InstructionsUpsertArgs>(args: SelectSubset<T, InstructionsUpsertArgs<ExtArgs>>): Prisma__InstructionsClient<$Result.GetResult<Prisma.$InstructionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsCountArgs} args - Arguments to filter Instructions to count.
     * @example
     * // Count the number of Instructions
     * const count = await prisma.instructions.count({
     *   where: {
     *     // ... the filter for the Instructions we want to count
     *   }
     * })
    **/
    count<T extends InstructionsCountArgs>(
      args?: Subset<T, InstructionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructionsAggregateArgs>(args: Subset<T, InstructionsAggregateArgs>): Prisma.PrismaPromise<GetInstructionsAggregateType<T>>

    /**
     * Group by Instructions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructionsGroupByArgs['orderBy'] }
        : { orderBy?: InstructionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructions model
   */
  readonly fields: InstructionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructions model
   */ 
  interface InstructionsFieldRefs {
    readonly id: FieldRef<"Instructions", 'Int'>
    readonly id_recipe: FieldRef<"Instructions", 'Int'>
    readonly steps_numerations: FieldRef<"Instructions", 'String'>
    readonly Description: FieldRef<"Instructions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructions findUnique
   */
  export type InstructionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions findUniqueOrThrow
   */
  export type InstructionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions findFirst
   */
  export type InstructionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Instructions findFirstOrThrow
   */
  export type InstructionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructions.
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructions.
     */
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Instructions findMany
   */
  export type InstructionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter, which Instructions to fetch.
     */
    where?: InstructionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructions to fetch.
     */
    orderBy?: InstructionsOrderByWithRelationInput | InstructionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructions.
     */
    cursor?: InstructionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructions.
     */
    skip?: number
    distinct?: InstructionsScalarFieldEnum | InstructionsScalarFieldEnum[]
  }

  /**
   * Instructions create
   */
  export type InstructionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructions.
     */
    data: XOR<InstructionsCreateInput, InstructionsUncheckedCreateInput>
  }

  /**
   * Instructions createMany
   */
  export type InstructionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructions.
     */
    data: InstructionsCreateManyInput | InstructionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instructions createManyAndReturn
   */
  export type InstructionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * The data used to create many Instructions.
     */
    data: InstructionsCreateManyInput | InstructionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructions update
   */
  export type InstructionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructions.
     */
    data: XOR<InstructionsUpdateInput, InstructionsUncheckedUpdateInput>
    /**
     * Choose, which Instructions to update.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions updateMany
   */
  export type InstructionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionsUpdateManyMutationInput, InstructionsUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionsWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
  }

  /**
   * Instructions updateManyAndReturn
   */
  export type InstructionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * The data used to update Instructions.
     */
    data: XOR<InstructionsUpdateManyMutationInput, InstructionsUncheckedUpdateManyInput>
    /**
     * Filter which Instructions to update
     */
    where?: InstructionsWhereInput
    /**
     * Limit how many Instructions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructions upsert
   */
  export type InstructionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructions to update in case it exists.
     */
    where: InstructionsWhereUniqueInput
    /**
     * In case the Instructions found by the `where` argument doesn't exist, create a new Instructions with this data.
     */
    create: XOR<InstructionsCreateInput, InstructionsUncheckedCreateInput>
    /**
     * In case the Instructions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructionsUpdateInput, InstructionsUncheckedUpdateInput>
  }

  /**
   * Instructions delete
   */
  export type InstructionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
    /**
     * Filter which Instructions to delete.
     */
    where: InstructionsWhereUniqueInput
  }

  /**
   * Instructions deleteMany
   */
  export type InstructionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructions to delete
     */
    where?: InstructionsWhereInput
    /**
     * Limit how many Instructions to delete.
     */
    limit?: number
  }

  /**
   * Instructions without action
   */
  export type InstructionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructions
     */
    select?: InstructionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructions
     */
    omit?: InstructionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructionsInclude<ExtArgs> | null
  }


  /**
   * Model Recipe_Type
   */

  export type AggregateRecipe_Type = {
    _count: Recipe_TypeCountAggregateOutputType | null
    _avg: Recipe_TypeAvgAggregateOutputType | null
    _sum: Recipe_TypeSumAggregateOutputType | null
    _min: Recipe_TypeMinAggregateOutputType | null
    _max: Recipe_TypeMaxAggregateOutputType | null
  }

  export type Recipe_TypeAvgAggregateOutputType = {
    id_RecipeType: number | null
    id_recipe: number | null
    id_recipeFilter: number | null
  }

  export type Recipe_TypeSumAggregateOutputType = {
    id_RecipeType: number | null
    id_recipe: number | null
    id_recipeFilter: number | null
  }

  export type Recipe_TypeMinAggregateOutputType = {
    id_RecipeType: number | null
    id_recipe: number | null
    id_recipeFilter: number | null
  }

  export type Recipe_TypeMaxAggregateOutputType = {
    id_RecipeType: number | null
    id_recipe: number | null
    id_recipeFilter: number | null
  }

  export type Recipe_TypeCountAggregateOutputType = {
    id_RecipeType: number
    id_recipe: number
    id_recipeFilter: number
    _all: number
  }


  export type Recipe_TypeAvgAggregateInputType = {
    id_RecipeType?: true
    id_recipe?: true
    id_recipeFilter?: true
  }

  export type Recipe_TypeSumAggregateInputType = {
    id_RecipeType?: true
    id_recipe?: true
    id_recipeFilter?: true
  }

  export type Recipe_TypeMinAggregateInputType = {
    id_RecipeType?: true
    id_recipe?: true
    id_recipeFilter?: true
  }

  export type Recipe_TypeMaxAggregateInputType = {
    id_RecipeType?: true
    id_recipe?: true
    id_recipeFilter?: true
  }

  export type Recipe_TypeCountAggregateInputType = {
    id_RecipeType?: true
    id_recipe?: true
    id_recipeFilter?: true
    _all?: true
  }

  export type Recipe_TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Type to aggregate.
     */
    where?: Recipe_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Types to fetch.
     */
    orderBy?: Recipe_TypeOrderByWithRelationInput | Recipe_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recipe_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipe_Types
    **/
    _count?: true | Recipe_TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_TypeMaxAggregateInputType
  }

  export type GetRecipe_TypeAggregateType<T extends Recipe_TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_Type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_Type[P]>
      : GetScalarType<T[P], AggregateRecipe_Type[P]>
  }




  export type Recipe_TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_TypeWhereInput
    orderBy?: Recipe_TypeOrderByWithAggregationInput | Recipe_TypeOrderByWithAggregationInput[]
    by: Recipe_TypeScalarFieldEnum[] | Recipe_TypeScalarFieldEnum
    having?: Recipe_TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_TypeCountAggregateInputType | true
    _avg?: Recipe_TypeAvgAggregateInputType
    _sum?: Recipe_TypeSumAggregateInputType
    _min?: Recipe_TypeMinAggregateInputType
    _max?: Recipe_TypeMaxAggregateInputType
  }

  export type Recipe_TypeGroupByOutputType = {
    id_RecipeType: number
    id_recipe: number
    id_recipeFilter: number
    _count: Recipe_TypeCountAggregateOutputType | null
    _avg: Recipe_TypeAvgAggregateOutputType | null
    _sum: Recipe_TypeSumAggregateOutputType | null
    _min: Recipe_TypeMinAggregateOutputType | null
    _max: Recipe_TypeMaxAggregateOutputType | null
  }

  type GetRecipe_TypeGroupByPayload<T extends Recipe_TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_TypeGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_TypeGroupByOutputType[P]>
        }
      >
    >


  export type Recipe_TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RecipeType?: boolean
    id_recipe?: boolean
    id_recipeFilter?: boolean
    filter?: boolean | Recipe_FilterDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Type"]>

  export type Recipe_TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RecipeType?: boolean
    id_recipe?: boolean
    id_recipeFilter?: boolean
    filter?: boolean | Recipe_FilterDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Type"]>

  export type Recipe_TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RecipeType?: boolean
    id_recipe?: boolean
    id_recipeFilter?: boolean
    filter?: boolean | Recipe_FilterDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Type"]>

  export type Recipe_TypeSelectScalar = {
    id_RecipeType?: boolean
    id_recipe?: boolean
    id_recipeFilter?: boolean
  }

  export type Recipe_TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_RecipeType" | "id_recipe" | "id_recipeFilter", ExtArgs["result"]["recipe_Type"]>
  export type Recipe_TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filter?: boolean | Recipe_FilterDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type Recipe_TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filter?: boolean | Recipe_FilterDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }
  export type Recipe_TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filter?: boolean | Recipe_FilterDefaultArgs<ExtArgs>
    recipe?: boolean | RecipeDefaultArgs<ExtArgs>
  }

  export type $Recipe_TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe_Type"
    objects: {
      filter: Prisma.$Recipe_FilterPayload<ExtArgs>
      recipe: Prisma.$RecipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_RecipeType: number
      id_recipe: number
      id_recipeFilter: number
    }, ExtArgs["result"]["recipe_Type"]>
    composites: {}
  }

  type Recipe_TypeGetPayload<S extends boolean | null | undefined | Recipe_TypeDefaultArgs> = $Result.GetResult<Prisma.$Recipe_TypePayload, S>

  type Recipe_TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Recipe_TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_TypeCountAggregateInputType | true
    }

  export interface Recipe_TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe_Type'], meta: { name: 'Recipe_Type' } }
    /**
     * Find zero or one Recipe_Type that matches the filter.
     * @param {Recipe_TypeFindUniqueArgs} args - Arguments to find a Recipe_Type
     * @example
     * // Get one Recipe_Type
     * const recipe_Type = await prisma.recipe_Type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Recipe_TypeFindUniqueArgs>(args: SelectSubset<T, Recipe_TypeFindUniqueArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Recipe_TypeFindUniqueOrThrowArgs} args - Arguments to find a Recipe_Type
     * @example
     * // Get one Recipe_Type
     * const recipe_Type = await prisma.recipe_Type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Recipe_TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, Recipe_TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeFindFirstArgs} args - Arguments to find a Recipe_Type
     * @example
     * // Get one Recipe_Type
     * const recipe_Type = await prisma.recipe_Type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Recipe_TypeFindFirstArgs>(args?: SelectSubset<T, Recipe_TypeFindFirstArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeFindFirstOrThrowArgs} args - Arguments to find a Recipe_Type
     * @example
     * // Get one Recipe_Type
     * const recipe_Type = await prisma.recipe_Type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Recipe_TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, Recipe_TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_Types
     * const recipe_Types = await prisma.recipe_Type.findMany()
     * 
     * // Get first 10 Recipe_Types
     * const recipe_Types = await prisma.recipe_Type.findMany({ take: 10 })
     * 
     * // Only select the `id_RecipeType`
     * const recipe_TypeWithId_RecipeTypeOnly = await prisma.recipe_Type.findMany({ select: { id_RecipeType: true } })
     * 
     */
    findMany<T extends Recipe_TypeFindManyArgs>(args?: SelectSubset<T, Recipe_TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_Type.
     * @param {Recipe_TypeCreateArgs} args - Arguments to create a Recipe_Type.
     * @example
     * // Create one Recipe_Type
     * const Recipe_Type = await prisma.recipe_Type.create({
     *   data: {
     *     // ... data to create a Recipe_Type
     *   }
     * })
     * 
     */
    create<T extends Recipe_TypeCreateArgs>(args: SelectSubset<T, Recipe_TypeCreateArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_Types.
     * @param {Recipe_TypeCreateManyArgs} args - Arguments to create many Recipe_Types.
     * @example
     * // Create many Recipe_Types
     * const recipe_Type = await prisma.recipe_Type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Recipe_TypeCreateManyArgs>(args?: SelectSubset<T, Recipe_TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipe_Types and returns the data saved in the database.
     * @param {Recipe_TypeCreateManyAndReturnArgs} args - Arguments to create many Recipe_Types.
     * @example
     * // Create many Recipe_Types
     * const recipe_Type = await prisma.recipe_Type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipe_Types and only return the `id_RecipeType`
     * const recipe_TypeWithId_RecipeTypeOnly = await prisma.recipe_Type.createManyAndReturn({
     *   select: { id_RecipeType: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Recipe_TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, Recipe_TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe_Type.
     * @param {Recipe_TypeDeleteArgs} args - Arguments to delete one Recipe_Type.
     * @example
     * // Delete one Recipe_Type
     * const Recipe_Type = await prisma.recipe_Type.delete({
     *   where: {
     *     // ... filter to delete one Recipe_Type
     *   }
     * })
     * 
     */
    delete<T extends Recipe_TypeDeleteArgs>(args: SelectSubset<T, Recipe_TypeDeleteArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_Type.
     * @param {Recipe_TypeUpdateArgs} args - Arguments to update one Recipe_Type.
     * @example
     * // Update one Recipe_Type
     * const recipe_Type = await prisma.recipe_Type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Recipe_TypeUpdateArgs>(args: SelectSubset<T, Recipe_TypeUpdateArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_Types.
     * @param {Recipe_TypeDeleteManyArgs} args - Arguments to filter Recipe_Types to delete.
     * @example
     * // Delete a few Recipe_Types
     * const { count } = await prisma.recipe_Type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Recipe_TypeDeleteManyArgs>(args?: SelectSubset<T, Recipe_TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_Types
     * const recipe_Type = await prisma.recipe_Type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Recipe_TypeUpdateManyArgs>(args: SelectSubset<T, Recipe_TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Types and returns the data updated in the database.
     * @param {Recipe_TypeUpdateManyAndReturnArgs} args - Arguments to update many Recipe_Types.
     * @example
     * // Update many Recipe_Types
     * const recipe_Type = await prisma.recipe_Type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipe_Types and only return the `id_RecipeType`
     * const recipe_TypeWithId_RecipeTypeOnly = await prisma.recipe_Type.updateManyAndReturn({
     *   select: { id_RecipeType: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Recipe_TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, Recipe_TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe_Type.
     * @param {Recipe_TypeUpsertArgs} args - Arguments to update or create a Recipe_Type.
     * @example
     * // Update or create a Recipe_Type
     * const recipe_Type = await prisma.recipe_Type.upsert({
     *   create: {
     *     // ... data to create a Recipe_Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_Type we want to update
     *   }
     * })
     */
    upsert<T extends Recipe_TypeUpsertArgs>(args: SelectSubset<T, Recipe_TypeUpsertArgs<ExtArgs>>): Prisma__Recipe_TypeClient<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeCountArgs} args - Arguments to filter Recipe_Types to count.
     * @example
     * // Count the number of Recipe_Types
     * const count = await prisma.recipe_Type.count({
     *   where: {
     *     // ... the filter for the Recipe_Types we want to count
     *   }
     * })
    **/
    count<T extends Recipe_TypeCountArgs>(
      args?: Subset<T, Recipe_TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recipe_TypeAggregateArgs>(args: Subset<T, Recipe_TypeAggregateArgs>): Prisma.PrismaPromise<GetRecipe_TypeAggregateType<T>>

    /**
     * Group by Recipe_Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Recipe_TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recipe_TypeGroupByArgs['orderBy'] }
        : { orderBy?: Recipe_TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Recipe_TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_TypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe_Type model
   */
  readonly fields: Recipe_TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe_Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Recipe_TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filter<T extends Recipe_FilterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Recipe_FilterDefaultArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipeDefaultArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe_Type model
   */ 
  interface Recipe_TypeFieldRefs {
    readonly id_RecipeType: FieldRef<"Recipe_Type", 'Int'>
    readonly id_recipe: FieldRef<"Recipe_Type", 'Int'>
    readonly id_recipeFilter: FieldRef<"Recipe_Type", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recipe_Type findUnique
   */
  export type Recipe_TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Type to fetch.
     */
    where: Recipe_TypeWhereUniqueInput
  }

  /**
   * Recipe_Type findUniqueOrThrow
   */
  export type Recipe_TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Type to fetch.
     */
    where: Recipe_TypeWhereUniqueInput
  }

  /**
   * Recipe_Type findFirst
   */
  export type Recipe_TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Type to fetch.
     */
    where?: Recipe_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Types to fetch.
     */
    orderBy?: Recipe_TypeOrderByWithRelationInput | Recipe_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Types.
     */
    cursor?: Recipe_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Types.
     */
    distinct?: Recipe_TypeScalarFieldEnum | Recipe_TypeScalarFieldEnum[]
  }

  /**
   * Recipe_Type findFirstOrThrow
   */
  export type Recipe_TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Type to fetch.
     */
    where?: Recipe_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Types to fetch.
     */
    orderBy?: Recipe_TypeOrderByWithRelationInput | Recipe_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Types.
     */
    cursor?: Recipe_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Types.
     */
    distinct?: Recipe_TypeScalarFieldEnum | Recipe_TypeScalarFieldEnum[]
  }

  /**
   * Recipe_Type findMany
   */
  export type Recipe_TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Types to fetch.
     */
    where?: Recipe_TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Types to fetch.
     */
    orderBy?: Recipe_TypeOrderByWithRelationInput | Recipe_TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipe_Types.
     */
    cursor?: Recipe_TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Types.
     */
    skip?: number
    distinct?: Recipe_TypeScalarFieldEnum | Recipe_TypeScalarFieldEnum[]
  }

  /**
   * Recipe_Type create
   */
  export type Recipe_TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe_Type.
     */
    data: XOR<Recipe_TypeCreateInput, Recipe_TypeUncheckedCreateInput>
  }

  /**
   * Recipe_Type createMany
   */
  export type Recipe_TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipe_Types.
     */
    data: Recipe_TypeCreateManyInput | Recipe_TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe_Type createManyAndReturn
   */
  export type Recipe_TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Recipe_Types.
     */
    data: Recipe_TypeCreateManyInput | Recipe_TypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe_Type update
   */
  export type Recipe_TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe_Type.
     */
    data: XOR<Recipe_TypeUpdateInput, Recipe_TypeUncheckedUpdateInput>
    /**
     * Choose, which Recipe_Type to update.
     */
    where: Recipe_TypeWhereUniqueInput
  }

  /**
   * Recipe_Type updateMany
   */
  export type Recipe_TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipe_Types.
     */
    data: XOR<Recipe_TypeUpdateManyMutationInput, Recipe_TypeUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Types to update
     */
    where?: Recipe_TypeWhereInput
    /**
     * Limit how many Recipe_Types to update.
     */
    limit?: number
  }

  /**
   * Recipe_Type updateManyAndReturn
   */
  export type Recipe_TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * The data used to update Recipe_Types.
     */
    data: XOR<Recipe_TypeUpdateManyMutationInput, Recipe_TypeUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Types to update
     */
    where?: Recipe_TypeWhereInput
    /**
     * Limit how many Recipe_Types to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipe_Type upsert
   */
  export type Recipe_TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe_Type to update in case it exists.
     */
    where: Recipe_TypeWhereUniqueInput
    /**
     * In case the Recipe_Type found by the `where` argument doesn't exist, create a new Recipe_Type with this data.
     */
    create: XOR<Recipe_TypeCreateInput, Recipe_TypeUncheckedCreateInput>
    /**
     * In case the Recipe_Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recipe_TypeUpdateInput, Recipe_TypeUncheckedUpdateInput>
  }

  /**
   * Recipe_Type delete
   */
  export type Recipe_TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    /**
     * Filter which Recipe_Type to delete.
     */
    where: Recipe_TypeWhereUniqueInput
  }

  /**
   * Recipe_Type deleteMany
   */
  export type Recipe_TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Types to delete
     */
    where?: Recipe_TypeWhereInput
    /**
     * Limit how many Recipe_Types to delete.
     */
    limit?: number
  }

  /**
   * Recipe_Type without action
   */
  export type Recipe_TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
  }


  /**
   * Model Recipe_Filter
   */

  export type AggregateRecipe_Filter = {
    _count: Recipe_FilterCountAggregateOutputType | null
    _avg: Recipe_FilterAvgAggregateOutputType | null
    _sum: Recipe_FilterSumAggregateOutputType | null
    _min: Recipe_FilterMinAggregateOutputType | null
    _max: Recipe_FilterMaxAggregateOutputType | null
  }

  export type Recipe_FilterAvgAggregateOutputType = {
    id_RecipeFilter: number | null
  }

  export type Recipe_FilterSumAggregateOutputType = {
    id_RecipeFilter: number | null
  }

  export type Recipe_FilterMinAggregateOutputType = {
    id_RecipeFilter: number | null
    Name: string | null
  }

  export type Recipe_FilterMaxAggregateOutputType = {
    id_RecipeFilter: number | null
    Name: string | null
  }

  export type Recipe_FilterCountAggregateOutputType = {
    id_RecipeFilter: number
    Name: number
    _all: number
  }


  export type Recipe_FilterAvgAggregateInputType = {
    id_RecipeFilter?: true
  }

  export type Recipe_FilterSumAggregateInputType = {
    id_RecipeFilter?: true
  }

  export type Recipe_FilterMinAggregateInputType = {
    id_RecipeFilter?: true
    Name?: true
  }

  export type Recipe_FilterMaxAggregateInputType = {
    id_RecipeFilter?: true
    Name?: true
  }

  export type Recipe_FilterCountAggregateInputType = {
    id_RecipeFilter?: true
    Name?: true
    _all?: true
  }

  export type Recipe_FilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Filter to aggregate.
     */
    where?: Recipe_FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Filters to fetch.
     */
    orderBy?: Recipe_FilterOrderByWithRelationInput | Recipe_FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Recipe_FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipe_Filters
    **/
    _count?: true | Recipe_FilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recipe_FilterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recipe_FilterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recipe_FilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recipe_FilterMaxAggregateInputType
  }

  export type GetRecipe_FilterAggregateType<T extends Recipe_FilterAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe_Filter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe_Filter[P]>
      : GetScalarType<T[P], AggregateRecipe_Filter[P]>
  }




  export type Recipe_FilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Recipe_FilterWhereInput
    orderBy?: Recipe_FilterOrderByWithAggregationInput | Recipe_FilterOrderByWithAggregationInput[]
    by: Recipe_FilterScalarFieldEnum[] | Recipe_FilterScalarFieldEnum
    having?: Recipe_FilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recipe_FilterCountAggregateInputType | true
    _avg?: Recipe_FilterAvgAggregateInputType
    _sum?: Recipe_FilterSumAggregateInputType
    _min?: Recipe_FilterMinAggregateInputType
    _max?: Recipe_FilterMaxAggregateInputType
  }

  export type Recipe_FilterGroupByOutputType = {
    id_RecipeFilter: number
    Name: string
    _count: Recipe_FilterCountAggregateOutputType | null
    _avg: Recipe_FilterAvgAggregateOutputType | null
    _sum: Recipe_FilterSumAggregateOutputType | null
    _min: Recipe_FilterMinAggregateOutputType | null
    _max: Recipe_FilterMaxAggregateOutputType | null
  }

  type GetRecipe_FilterGroupByPayload<T extends Recipe_FilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recipe_FilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recipe_FilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recipe_FilterGroupByOutputType[P]>
            : GetScalarType<T[P], Recipe_FilterGroupByOutputType[P]>
        }
      >
    >


  export type Recipe_FilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RecipeFilter?: boolean
    Name?: boolean
    recipe?: boolean | Recipe_Filter$recipeArgs<ExtArgs>
    _count?: boolean | Recipe_FilterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipe_Filter"]>

  export type Recipe_FilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RecipeFilter?: boolean
    Name?: boolean
  }, ExtArgs["result"]["recipe_Filter"]>

  export type Recipe_FilterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_RecipeFilter?: boolean
    Name?: boolean
  }, ExtArgs["result"]["recipe_Filter"]>

  export type Recipe_FilterSelectScalar = {
    id_RecipeFilter?: boolean
    Name?: boolean
  }

  export type Recipe_FilterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_RecipeFilter" | "Name", ExtArgs["result"]["recipe_Filter"]>
  export type Recipe_FilterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | Recipe_Filter$recipeArgs<ExtArgs>
    _count?: boolean | Recipe_FilterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Recipe_FilterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Recipe_FilterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Recipe_FilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe_Filter"
    objects: {
      recipe: Prisma.$Recipe_TypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_RecipeFilter: number
      Name: string
    }, ExtArgs["result"]["recipe_Filter"]>
    composites: {}
  }

  type Recipe_FilterGetPayload<S extends boolean | null | undefined | Recipe_FilterDefaultArgs> = $Result.GetResult<Prisma.$Recipe_FilterPayload, S>

  type Recipe_FilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Recipe_FilterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recipe_FilterCountAggregateInputType | true
    }

  export interface Recipe_FilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe_Filter'], meta: { name: 'Recipe_Filter' } }
    /**
     * Find zero or one Recipe_Filter that matches the filter.
     * @param {Recipe_FilterFindUniqueArgs} args - Arguments to find a Recipe_Filter
     * @example
     * // Get one Recipe_Filter
     * const recipe_Filter = await prisma.recipe_Filter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Recipe_FilterFindUniqueArgs>(args: SelectSubset<T, Recipe_FilterFindUniqueArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipe_Filter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Recipe_FilterFindUniqueOrThrowArgs} args - Arguments to find a Recipe_Filter
     * @example
     * // Get one Recipe_Filter
     * const recipe_Filter = await prisma.recipe_Filter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Recipe_FilterFindUniqueOrThrowArgs>(args: SelectSubset<T, Recipe_FilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Filter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterFindFirstArgs} args - Arguments to find a Recipe_Filter
     * @example
     * // Get one Recipe_Filter
     * const recipe_Filter = await prisma.recipe_Filter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Recipe_FilterFindFirstArgs>(args?: SelectSubset<T, Recipe_FilterFindFirstArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipe_Filter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterFindFirstOrThrowArgs} args - Arguments to find a Recipe_Filter
     * @example
     * // Get one Recipe_Filter
     * const recipe_Filter = await prisma.recipe_Filter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Recipe_FilterFindFirstOrThrowArgs>(args?: SelectSubset<T, Recipe_FilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipe_Filters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipe_Filters
     * const recipe_Filters = await prisma.recipe_Filter.findMany()
     * 
     * // Get first 10 Recipe_Filters
     * const recipe_Filters = await prisma.recipe_Filter.findMany({ take: 10 })
     * 
     * // Only select the `id_RecipeFilter`
     * const recipe_FilterWithId_RecipeFilterOnly = await prisma.recipe_Filter.findMany({ select: { id_RecipeFilter: true } })
     * 
     */
    findMany<T extends Recipe_FilterFindManyArgs>(args?: SelectSubset<T, Recipe_FilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipe_Filter.
     * @param {Recipe_FilterCreateArgs} args - Arguments to create a Recipe_Filter.
     * @example
     * // Create one Recipe_Filter
     * const Recipe_Filter = await prisma.recipe_Filter.create({
     *   data: {
     *     // ... data to create a Recipe_Filter
     *   }
     * })
     * 
     */
    create<T extends Recipe_FilterCreateArgs>(args: SelectSubset<T, Recipe_FilterCreateArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipe_Filters.
     * @param {Recipe_FilterCreateManyArgs} args - Arguments to create many Recipe_Filters.
     * @example
     * // Create many Recipe_Filters
     * const recipe_Filter = await prisma.recipe_Filter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Recipe_FilterCreateManyArgs>(args?: SelectSubset<T, Recipe_FilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipe_Filters and returns the data saved in the database.
     * @param {Recipe_FilterCreateManyAndReturnArgs} args - Arguments to create many Recipe_Filters.
     * @example
     * // Create many Recipe_Filters
     * const recipe_Filter = await prisma.recipe_Filter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipe_Filters and only return the `id_RecipeFilter`
     * const recipe_FilterWithId_RecipeFilterOnly = await prisma.recipe_Filter.createManyAndReturn({
     *   select: { id_RecipeFilter: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Recipe_FilterCreateManyAndReturnArgs>(args?: SelectSubset<T, Recipe_FilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipe_Filter.
     * @param {Recipe_FilterDeleteArgs} args - Arguments to delete one Recipe_Filter.
     * @example
     * // Delete one Recipe_Filter
     * const Recipe_Filter = await prisma.recipe_Filter.delete({
     *   where: {
     *     // ... filter to delete one Recipe_Filter
     *   }
     * })
     * 
     */
    delete<T extends Recipe_FilterDeleteArgs>(args: SelectSubset<T, Recipe_FilterDeleteArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipe_Filter.
     * @param {Recipe_FilterUpdateArgs} args - Arguments to update one Recipe_Filter.
     * @example
     * // Update one Recipe_Filter
     * const recipe_Filter = await prisma.recipe_Filter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Recipe_FilterUpdateArgs>(args: SelectSubset<T, Recipe_FilterUpdateArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipe_Filters.
     * @param {Recipe_FilterDeleteManyArgs} args - Arguments to filter Recipe_Filters to delete.
     * @example
     * // Delete a few Recipe_Filters
     * const { count } = await prisma.recipe_Filter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Recipe_FilterDeleteManyArgs>(args?: SelectSubset<T, Recipe_FilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Filters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipe_Filters
     * const recipe_Filter = await prisma.recipe_Filter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Recipe_FilterUpdateManyArgs>(args: SelectSubset<T, Recipe_FilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipe_Filters and returns the data updated in the database.
     * @param {Recipe_FilterUpdateManyAndReturnArgs} args - Arguments to update many Recipe_Filters.
     * @example
     * // Update many Recipe_Filters
     * const recipe_Filter = await prisma.recipe_Filter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipe_Filters and only return the `id_RecipeFilter`
     * const recipe_FilterWithId_RecipeFilterOnly = await prisma.recipe_Filter.updateManyAndReturn({
     *   select: { id_RecipeFilter: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Recipe_FilterUpdateManyAndReturnArgs>(args: SelectSubset<T, Recipe_FilterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipe_Filter.
     * @param {Recipe_FilterUpsertArgs} args - Arguments to update or create a Recipe_Filter.
     * @example
     * // Update or create a Recipe_Filter
     * const recipe_Filter = await prisma.recipe_Filter.upsert({
     *   create: {
     *     // ... data to create a Recipe_Filter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe_Filter we want to update
     *   }
     * })
     */
    upsert<T extends Recipe_FilterUpsertArgs>(args: SelectSubset<T, Recipe_FilterUpsertArgs<ExtArgs>>): Prisma__Recipe_FilterClient<$Result.GetResult<Prisma.$Recipe_FilterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipe_Filters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterCountArgs} args - Arguments to filter Recipe_Filters to count.
     * @example
     * // Count the number of Recipe_Filters
     * const count = await prisma.recipe_Filter.count({
     *   where: {
     *     // ... the filter for the Recipe_Filters we want to count
     *   }
     * })
    **/
    count<T extends Recipe_FilterCountArgs>(
      args?: Subset<T, Recipe_FilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recipe_FilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe_Filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recipe_FilterAggregateArgs>(args: Subset<T, Recipe_FilterAggregateArgs>): Prisma.PrismaPromise<GetRecipe_FilterAggregateType<T>>

    /**
     * Group by Recipe_Filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recipe_FilterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Recipe_FilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Recipe_FilterGroupByArgs['orderBy'] }
        : { orderBy?: Recipe_FilterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Recipe_FilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipe_FilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe_Filter model
   */
  readonly fields: Recipe_FilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe_Filter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Recipe_FilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recipe<T extends Recipe_Filter$recipeArgs<ExtArgs> = {}>(args?: Subset<T, Recipe_Filter$recipeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Recipe_TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipe_Filter model
   */ 
  interface Recipe_FilterFieldRefs {
    readonly id_RecipeFilter: FieldRef<"Recipe_Filter", 'Int'>
    readonly Name: FieldRef<"Recipe_Filter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipe_Filter findUnique
   */
  export type Recipe_FilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Filter to fetch.
     */
    where: Recipe_FilterWhereUniqueInput
  }

  /**
   * Recipe_Filter findUniqueOrThrow
   */
  export type Recipe_FilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Filter to fetch.
     */
    where: Recipe_FilterWhereUniqueInput
  }

  /**
   * Recipe_Filter findFirst
   */
  export type Recipe_FilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Filter to fetch.
     */
    where?: Recipe_FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Filters to fetch.
     */
    orderBy?: Recipe_FilterOrderByWithRelationInput | Recipe_FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Filters.
     */
    cursor?: Recipe_FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Filters.
     */
    distinct?: Recipe_FilterScalarFieldEnum | Recipe_FilterScalarFieldEnum[]
  }

  /**
   * Recipe_Filter findFirstOrThrow
   */
  export type Recipe_FilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Filter to fetch.
     */
    where?: Recipe_FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Filters to fetch.
     */
    orderBy?: Recipe_FilterOrderByWithRelationInput | Recipe_FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipe_Filters.
     */
    cursor?: Recipe_FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipe_Filters.
     */
    distinct?: Recipe_FilterScalarFieldEnum | Recipe_FilterScalarFieldEnum[]
  }

  /**
   * Recipe_Filter findMany
   */
  export type Recipe_FilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * Filter, which Recipe_Filters to fetch.
     */
    where?: Recipe_FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipe_Filters to fetch.
     */
    orderBy?: Recipe_FilterOrderByWithRelationInput | Recipe_FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipe_Filters.
     */
    cursor?: Recipe_FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipe_Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipe_Filters.
     */
    skip?: number
    distinct?: Recipe_FilterScalarFieldEnum | Recipe_FilterScalarFieldEnum[]
  }

  /**
   * Recipe_Filter create
   */
  export type Recipe_FilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe_Filter.
     */
    data: XOR<Recipe_FilterCreateInput, Recipe_FilterUncheckedCreateInput>
  }

  /**
   * Recipe_Filter createMany
   */
  export type Recipe_FilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipe_Filters.
     */
    data: Recipe_FilterCreateManyInput | Recipe_FilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe_Filter createManyAndReturn
   */
  export type Recipe_FilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * The data used to create many Recipe_Filters.
     */
    data: Recipe_FilterCreateManyInput | Recipe_FilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe_Filter update
   */
  export type Recipe_FilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe_Filter.
     */
    data: XOR<Recipe_FilterUpdateInput, Recipe_FilterUncheckedUpdateInput>
    /**
     * Choose, which Recipe_Filter to update.
     */
    where: Recipe_FilterWhereUniqueInput
  }

  /**
   * Recipe_Filter updateMany
   */
  export type Recipe_FilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipe_Filters.
     */
    data: XOR<Recipe_FilterUpdateManyMutationInput, Recipe_FilterUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Filters to update
     */
    where?: Recipe_FilterWhereInput
    /**
     * Limit how many Recipe_Filters to update.
     */
    limit?: number
  }

  /**
   * Recipe_Filter updateManyAndReturn
   */
  export type Recipe_FilterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * The data used to update Recipe_Filters.
     */
    data: XOR<Recipe_FilterUpdateManyMutationInput, Recipe_FilterUncheckedUpdateManyInput>
    /**
     * Filter which Recipe_Filters to update
     */
    where?: Recipe_FilterWhereInput
    /**
     * Limit how many Recipe_Filters to update.
     */
    limit?: number
  }

  /**
   * Recipe_Filter upsert
   */
  export type Recipe_FilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe_Filter to update in case it exists.
     */
    where: Recipe_FilterWhereUniqueInput
    /**
     * In case the Recipe_Filter found by the `where` argument doesn't exist, create a new Recipe_Filter with this data.
     */
    create: XOR<Recipe_FilterCreateInput, Recipe_FilterUncheckedCreateInput>
    /**
     * In case the Recipe_Filter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Recipe_FilterUpdateInput, Recipe_FilterUncheckedUpdateInput>
  }

  /**
   * Recipe_Filter delete
   */
  export type Recipe_FilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
    /**
     * Filter which Recipe_Filter to delete.
     */
    where: Recipe_FilterWhereUniqueInput
  }

  /**
   * Recipe_Filter deleteMany
   */
  export type Recipe_FilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe_Filters to delete
     */
    where?: Recipe_FilterWhereInput
    /**
     * Limit how many Recipe_Filters to delete.
     */
    limit?: number
  }

  /**
   * Recipe_Filter.recipe
   */
  export type Recipe_Filter$recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Type
     */
    select?: Recipe_TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Type
     */
    omit?: Recipe_TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_TypeInclude<ExtArgs> | null
    where?: Recipe_TypeWhereInput
    orderBy?: Recipe_TypeOrderByWithRelationInput | Recipe_TypeOrderByWithRelationInput[]
    cursor?: Recipe_TypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recipe_TypeScalarFieldEnum | Recipe_TypeScalarFieldEnum[]
  }

  /**
   * Recipe_Filter without action
   */
  export type Recipe_FilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe_Filter
     */
    select?: Recipe_FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipe_Filter
     */
    omit?: Recipe_FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Recipe_FilterInclude<ExtArgs> | null
  }


  /**
   * Model Shopping_List
   */

  export type AggregateShopping_List = {
    _count: Shopping_ListCountAggregateOutputType | null
    _avg: Shopping_ListAvgAggregateOutputType | null
    _sum: Shopping_ListSumAggregateOutputType | null
    _min: Shopping_ListMinAggregateOutputType | null
    _max: Shopping_ListMaxAggregateOutputType | null
  }

  export type Shopping_ListAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type Shopping_ListSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type Shopping_ListMinAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type Shopping_ListMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type Shopping_ListCountAggregateOutputType = {
    id: number
    id_user: number
    _all: number
  }


  export type Shopping_ListAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type Shopping_ListSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type Shopping_ListMinAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type Shopping_ListMaxAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type Shopping_ListCountAggregateInputType = {
    id?: true
    id_user?: true
    _all?: true
  }

  export type Shopping_ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shopping_List to aggregate.
     */
    where?: Shopping_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_Lists to fetch.
     */
    orderBy?: Shopping_ListOrderByWithRelationInput | Shopping_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Shopping_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shopping_Lists
    **/
    _count?: true | Shopping_ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shopping_ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shopping_ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shopping_ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shopping_ListMaxAggregateInputType
  }

  export type GetShopping_ListAggregateType<T extends Shopping_ListAggregateArgs> = {
        [P in keyof T & keyof AggregateShopping_List]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopping_List[P]>
      : GetScalarType<T[P], AggregateShopping_List[P]>
  }




  export type Shopping_ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shopping_ListWhereInput
    orderBy?: Shopping_ListOrderByWithAggregationInput | Shopping_ListOrderByWithAggregationInput[]
    by: Shopping_ListScalarFieldEnum[] | Shopping_ListScalarFieldEnum
    having?: Shopping_ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shopping_ListCountAggregateInputType | true
    _avg?: Shopping_ListAvgAggregateInputType
    _sum?: Shopping_ListSumAggregateInputType
    _min?: Shopping_ListMinAggregateInputType
    _max?: Shopping_ListMaxAggregateInputType
  }

  export type Shopping_ListGroupByOutputType = {
    id: number
    id_user: number
    _count: Shopping_ListCountAggregateOutputType | null
    _avg: Shopping_ListAvgAggregateOutputType | null
    _sum: Shopping_ListSumAggregateOutputType | null
    _min: Shopping_ListMinAggregateOutputType | null
    _max: Shopping_ListMaxAggregateOutputType | null
  }

  type GetShopping_ListGroupByPayload<T extends Shopping_ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shopping_ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shopping_ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shopping_ListGroupByOutputType[P]>
            : GetScalarType<T[P], Shopping_ListGroupByOutputType[P]>
        }
      >
    >


  export type Shopping_ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Shopping_List$ingredientsArgs<ExtArgs>
    _count?: boolean | Shopping_ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopping_List"]>

  export type Shopping_ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopping_List"]>

  export type Shopping_ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopping_List"]>

  export type Shopping_ListSelectScalar = {
    id?: boolean
    id_user?: boolean
  }

  export type Shopping_ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user", ExtArgs["result"]["shopping_List"]>
  export type Shopping_ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ingredients?: boolean | Shopping_List$ingredientsArgs<ExtArgs>
    _count?: boolean | Shopping_ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Shopping_ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Shopping_ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Shopping_ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shopping_List"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ingredients: Prisma.$Shopping_List_IngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
    }, ExtArgs["result"]["shopping_List"]>
    composites: {}
  }

  type Shopping_ListGetPayload<S extends boolean | null | undefined | Shopping_ListDefaultArgs> = $Result.GetResult<Prisma.$Shopping_ListPayload, S>

  type Shopping_ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Shopping_ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shopping_ListCountAggregateInputType | true
    }

  export interface Shopping_ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shopping_List'], meta: { name: 'Shopping_List' } }
    /**
     * Find zero or one Shopping_List that matches the filter.
     * @param {Shopping_ListFindUniqueArgs} args - Arguments to find a Shopping_List
     * @example
     * // Get one Shopping_List
     * const shopping_List = await prisma.shopping_List.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Shopping_ListFindUniqueArgs>(args: SelectSubset<T, Shopping_ListFindUniqueArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shopping_List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Shopping_ListFindUniqueOrThrowArgs} args - Arguments to find a Shopping_List
     * @example
     * // Get one Shopping_List
     * const shopping_List = await prisma.shopping_List.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Shopping_ListFindUniqueOrThrowArgs>(args: SelectSubset<T, Shopping_ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shopping_List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListFindFirstArgs} args - Arguments to find a Shopping_List
     * @example
     * // Get one Shopping_List
     * const shopping_List = await prisma.shopping_List.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Shopping_ListFindFirstArgs>(args?: SelectSubset<T, Shopping_ListFindFirstArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shopping_List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListFindFirstOrThrowArgs} args - Arguments to find a Shopping_List
     * @example
     * // Get one Shopping_List
     * const shopping_List = await prisma.shopping_List.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Shopping_ListFindFirstOrThrowArgs>(args?: SelectSubset<T, Shopping_ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shopping_Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shopping_Lists
     * const shopping_Lists = await prisma.shopping_List.findMany()
     * 
     * // Get first 10 Shopping_Lists
     * const shopping_Lists = await prisma.shopping_List.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopping_ListWithIdOnly = await prisma.shopping_List.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Shopping_ListFindManyArgs>(args?: SelectSubset<T, Shopping_ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shopping_List.
     * @param {Shopping_ListCreateArgs} args - Arguments to create a Shopping_List.
     * @example
     * // Create one Shopping_List
     * const Shopping_List = await prisma.shopping_List.create({
     *   data: {
     *     // ... data to create a Shopping_List
     *   }
     * })
     * 
     */
    create<T extends Shopping_ListCreateArgs>(args: SelectSubset<T, Shopping_ListCreateArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shopping_Lists.
     * @param {Shopping_ListCreateManyArgs} args - Arguments to create many Shopping_Lists.
     * @example
     * // Create many Shopping_Lists
     * const shopping_List = await prisma.shopping_List.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Shopping_ListCreateManyArgs>(args?: SelectSubset<T, Shopping_ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shopping_Lists and returns the data saved in the database.
     * @param {Shopping_ListCreateManyAndReturnArgs} args - Arguments to create many Shopping_Lists.
     * @example
     * // Create many Shopping_Lists
     * const shopping_List = await prisma.shopping_List.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shopping_Lists and only return the `id`
     * const shopping_ListWithIdOnly = await prisma.shopping_List.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Shopping_ListCreateManyAndReturnArgs>(args?: SelectSubset<T, Shopping_ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shopping_List.
     * @param {Shopping_ListDeleteArgs} args - Arguments to delete one Shopping_List.
     * @example
     * // Delete one Shopping_List
     * const Shopping_List = await prisma.shopping_List.delete({
     *   where: {
     *     // ... filter to delete one Shopping_List
     *   }
     * })
     * 
     */
    delete<T extends Shopping_ListDeleteArgs>(args: SelectSubset<T, Shopping_ListDeleteArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shopping_List.
     * @param {Shopping_ListUpdateArgs} args - Arguments to update one Shopping_List.
     * @example
     * // Update one Shopping_List
     * const shopping_List = await prisma.shopping_List.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Shopping_ListUpdateArgs>(args: SelectSubset<T, Shopping_ListUpdateArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shopping_Lists.
     * @param {Shopping_ListDeleteManyArgs} args - Arguments to filter Shopping_Lists to delete.
     * @example
     * // Delete a few Shopping_Lists
     * const { count } = await prisma.shopping_List.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Shopping_ListDeleteManyArgs>(args?: SelectSubset<T, Shopping_ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shopping_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shopping_Lists
     * const shopping_List = await prisma.shopping_List.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Shopping_ListUpdateManyArgs>(args: SelectSubset<T, Shopping_ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shopping_Lists and returns the data updated in the database.
     * @param {Shopping_ListUpdateManyAndReturnArgs} args - Arguments to update many Shopping_Lists.
     * @example
     * // Update many Shopping_Lists
     * const shopping_List = await prisma.shopping_List.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shopping_Lists and only return the `id`
     * const shopping_ListWithIdOnly = await prisma.shopping_List.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Shopping_ListUpdateManyAndReturnArgs>(args: SelectSubset<T, Shopping_ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shopping_List.
     * @param {Shopping_ListUpsertArgs} args - Arguments to update or create a Shopping_List.
     * @example
     * // Update or create a Shopping_List
     * const shopping_List = await prisma.shopping_List.upsert({
     *   create: {
     *     // ... data to create a Shopping_List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shopping_List we want to update
     *   }
     * })
     */
    upsert<T extends Shopping_ListUpsertArgs>(args: SelectSubset<T, Shopping_ListUpsertArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shopping_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListCountArgs} args - Arguments to filter Shopping_Lists to count.
     * @example
     * // Count the number of Shopping_Lists
     * const count = await prisma.shopping_List.count({
     *   where: {
     *     // ... the filter for the Shopping_Lists we want to count
     *   }
     * })
    **/
    count<T extends Shopping_ListCountArgs>(
      args?: Subset<T, Shopping_ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shopping_ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shopping_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shopping_ListAggregateArgs>(args: Subset<T, Shopping_ListAggregateArgs>): Prisma.PrismaPromise<GetShopping_ListAggregateType<T>>

    /**
     * Group by Shopping_List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_ListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Shopping_ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shopping_ListGroupByArgs['orderBy'] }
        : { orderBy?: Shopping_ListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Shopping_ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopping_ListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shopping_List model
   */
  readonly fields: Shopping_ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shopping_List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Shopping_ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredients<T extends Shopping_List$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Shopping_List$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shopping_List model
   */ 
  interface Shopping_ListFieldRefs {
    readonly id: FieldRef<"Shopping_List", 'Int'>
    readonly id_user: FieldRef<"Shopping_List", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shopping_List findUnique
   */
  export type Shopping_ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List to fetch.
     */
    where: Shopping_ListWhereUniqueInput
  }

  /**
   * Shopping_List findUniqueOrThrow
   */
  export type Shopping_ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List to fetch.
     */
    where: Shopping_ListWhereUniqueInput
  }

  /**
   * Shopping_List findFirst
   */
  export type Shopping_ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List to fetch.
     */
    where?: Shopping_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_Lists to fetch.
     */
    orderBy?: Shopping_ListOrderByWithRelationInput | Shopping_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shopping_Lists.
     */
    cursor?: Shopping_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shopping_Lists.
     */
    distinct?: Shopping_ListScalarFieldEnum | Shopping_ListScalarFieldEnum[]
  }

  /**
   * Shopping_List findFirstOrThrow
   */
  export type Shopping_ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List to fetch.
     */
    where?: Shopping_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_Lists to fetch.
     */
    orderBy?: Shopping_ListOrderByWithRelationInput | Shopping_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shopping_Lists.
     */
    cursor?: Shopping_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shopping_Lists.
     */
    distinct?: Shopping_ListScalarFieldEnum | Shopping_ListScalarFieldEnum[]
  }

  /**
   * Shopping_List findMany
   */
  export type Shopping_ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_Lists to fetch.
     */
    where?: Shopping_ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_Lists to fetch.
     */
    orderBy?: Shopping_ListOrderByWithRelationInput | Shopping_ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shopping_Lists.
     */
    cursor?: Shopping_ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_Lists.
     */
    skip?: number
    distinct?: Shopping_ListScalarFieldEnum | Shopping_ListScalarFieldEnum[]
  }

  /**
   * Shopping_List create
   */
  export type Shopping_ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * The data needed to create a Shopping_List.
     */
    data: XOR<Shopping_ListCreateInput, Shopping_ListUncheckedCreateInput>
  }

  /**
   * Shopping_List createMany
   */
  export type Shopping_ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shopping_Lists.
     */
    data: Shopping_ListCreateManyInput | Shopping_ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shopping_List createManyAndReturn
   */
  export type Shopping_ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * The data used to create many Shopping_Lists.
     */
    data: Shopping_ListCreateManyInput | Shopping_ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shopping_List update
   */
  export type Shopping_ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * The data needed to update a Shopping_List.
     */
    data: XOR<Shopping_ListUpdateInput, Shopping_ListUncheckedUpdateInput>
    /**
     * Choose, which Shopping_List to update.
     */
    where: Shopping_ListWhereUniqueInput
  }

  /**
   * Shopping_List updateMany
   */
  export type Shopping_ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shopping_Lists.
     */
    data: XOR<Shopping_ListUpdateManyMutationInput, Shopping_ListUncheckedUpdateManyInput>
    /**
     * Filter which Shopping_Lists to update
     */
    where?: Shopping_ListWhereInput
    /**
     * Limit how many Shopping_Lists to update.
     */
    limit?: number
  }

  /**
   * Shopping_List updateManyAndReturn
   */
  export type Shopping_ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * The data used to update Shopping_Lists.
     */
    data: XOR<Shopping_ListUpdateManyMutationInput, Shopping_ListUncheckedUpdateManyInput>
    /**
     * Filter which Shopping_Lists to update
     */
    where?: Shopping_ListWhereInput
    /**
     * Limit how many Shopping_Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shopping_List upsert
   */
  export type Shopping_ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * The filter to search for the Shopping_List to update in case it exists.
     */
    where: Shopping_ListWhereUniqueInput
    /**
     * In case the Shopping_List found by the `where` argument doesn't exist, create a new Shopping_List with this data.
     */
    create: XOR<Shopping_ListCreateInput, Shopping_ListUncheckedCreateInput>
    /**
     * In case the Shopping_List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Shopping_ListUpdateInput, Shopping_ListUncheckedUpdateInput>
  }

  /**
   * Shopping_List delete
   */
  export type Shopping_ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
    /**
     * Filter which Shopping_List to delete.
     */
    where: Shopping_ListWhereUniqueInput
  }

  /**
   * Shopping_List deleteMany
   */
  export type Shopping_ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shopping_Lists to delete
     */
    where?: Shopping_ListWhereInput
    /**
     * Limit how many Shopping_Lists to delete.
     */
    limit?: number
  }

  /**
   * Shopping_List.ingredients
   */
  export type Shopping_List$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    where?: Shopping_List_IngredientWhereInput
    orderBy?: Shopping_List_IngredientOrderByWithRelationInput | Shopping_List_IngredientOrderByWithRelationInput[]
    cursor?: Shopping_List_IngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Shopping_List_IngredientScalarFieldEnum | Shopping_List_IngredientScalarFieldEnum[]
  }

  /**
   * Shopping_List without action
   */
  export type Shopping_ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List
     */
    select?: Shopping_ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List
     */
    omit?: Shopping_ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_ListInclude<ExtArgs> | null
  }


  /**
   * Model Shopping_List_Ingredient
   */

  export type AggregateShopping_List_Ingredient = {
    _count: Shopping_List_IngredientCountAggregateOutputType | null
    _avg: Shopping_List_IngredientAvgAggregateOutputType | null
    _sum: Shopping_List_IngredientSumAggregateOutputType | null
    _min: Shopping_List_IngredientMinAggregateOutputType | null
    _max: Shopping_List_IngredientMaxAggregateOutputType | null
  }

  export type Shopping_List_IngredientAvgAggregateOutputType = {
    id_ShoppingList: number | null
    id_Ingredients: number | null
  }

  export type Shopping_List_IngredientSumAggregateOutputType = {
    id_ShoppingList: number | null
    id_Ingredients: number | null
  }

  export type Shopping_List_IngredientMinAggregateOutputType = {
    id_ShoppingList: number | null
    id_Ingredients: number | null
    quantity: string | null
    bought: boolean | null
  }

  export type Shopping_List_IngredientMaxAggregateOutputType = {
    id_ShoppingList: number | null
    id_Ingredients: number | null
    quantity: string | null
    bought: boolean | null
  }

  export type Shopping_List_IngredientCountAggregateOutputType = {
    id_ShoppingList: number
    id_Ingredients: number
    quantity: number
    bought: number
    _all: number
  }


  export type Shopping_List_IngredientAvgAggregateInputType = {
    id_ShoppingList?: true
    id_Ingredients?: true
  }

  export type Shopping_List_IngredientSumAggregateInputType = {
    id_ShoppingList?: true
    id_Ingredients?: true
  }

  export type Shopping_List_IngredientMinAggregateInputType = {
    id_ShoppingList?: true
    id_Ingredients?: true
    quantity?: true
    bought?: true
  }

  export type Shopping_List_IngredientMaxAggregateInputType = {
    id_ShoppingList?: true
    id_Ingredients?: true
    quantity?: true
    bought?: true
  }

  export type Shopping_List_IngredientCountAggregateInputType = {
    id_ShoppingList?: true
    id_Ingredients?: true
    quantity?: true
    bought?: true
    _all?: true
  }

  export type Shopping_List_IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shopping_List_Ingredient to aggregate.
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_List_Ingredients to fetch.
     */
    orderBy?: Shopping_List_IngredientOrderByWithRelationInput | Shopping_List_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Shopping_List_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_List_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_List_Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shopping_List_Ingredients
    **/
    _count?: true | Shopping_List_IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shopping_List_IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shopping_List_IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shopping_List_IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shopping_List_IngredientMaxAggregateInputType
  }

  export type GetShopping_List_IngredientAggregateType<T extends Shopping_List_IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateShopping_List_Ingredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopping_List_Ingredient[P]>
      : GetScalarType<T[P], AggregateShopping_List_Ingredient[P]>
  }




  export type Shopping_List_IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shopping_List_IngredientWhereInput
    orderBy?: Shopping_List_IngredientOrderByWithAggregationInput | Shopping_List_IngredientOrderByWithAggregationInput[]
    by: Shopping_List_IngredientScalarFieldEnum[] | Shopping_List_IngredientScalarFieldEnum
    having?: Shopping_List_IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shopping_List_IngredientCountAggregateInputType | true
    _avg?: Shopping_List_IngredientAvgAggregateInputType
    _sum?: Shopping_List_IngredientSumAggregateInputType
    _min?: Shopping_List_IngredientMinAggregateInputType
    _max?: Shopping_List_IngredientMaxAggregateInputType
  }

  export type Shopping_List_IngredientGroupByOutputType = {
    id_ShoppingList: number
    id_Ingredients: number
    quantity: string
    bought: boolean
    _count: Shopping_List_IngredientCountAggregateOutputType | null
    _avg: Shopping_List_IngredientAvgAggregateOutputType | null
    _sum: Shopping_List_IngredientSumAggregateOutputType | null
    _min: Shopping_List_IngredientMinAggregateOutputType | null
    _max: Shopping_List_IngredientMaxAggregateOutputType | null
  }

  type GetShopping_List_IngredientGroupByPayload<T extends Shopping_List_IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shopping_List_IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shopping_List_IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shopping_List_IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], Shopping_List_IngredientGroupByOutputType[P]>
        }
      >
    >


  export type Shopping_List_IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ShoppingList?: boolean
    id_Ingredients?: boolean
    quantity?: boolean
    bought?: boolean
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    list?: boolean | Shopping_ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopping_List_Ingredient"]>

  export type Shopping_List_IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ShoppingList?: boolean
    id_Ingredients?: boolean
    quantity?: boolean
    bought?: boolean
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    list?: boolean | Shopping_ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopping_List_Ingredient"]>

  export type Shopping_List_IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ShoppingList?: boolean
    id_Ingredients?: boolean
    quantity?: boolean
    bought?: boolean
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    list?: boolean | Shopping_ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopping_List_Ingredient"]>

  export type Shopping_List_IngredientSelectScalar = {
    id_ShoppingList?: boolean
    id_Ingredients?: boolean
    quantity?: boolean
    bought?: boolean
  }

  export type Shopping_List_IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ShoppingList" | "id_Ingredients" | "quantity" | "bought", ExtArgs["result"]["shopping_List_Ingredient"]>
  export type Shopping_List_IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    list?: boolean | Shopping_ListDefaultArgs<ExtArgs>
  }
  export type Shopping_List_IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    list?: boolean | Shopping_ListDefaultArgs<ExtArgs>
  }
  export type Shopping_List_IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredient?: boolean | IngredientsDefaultArgs<ExtArgs>
    list?: boolean | Shopping_ListDefaultArgs<ExtArgs>
  }

  export type $Shopping_List_IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shopping_List_Ingredient"
    objects: {
      ingredient: Prisma.$IngredientsPayload<ExtArgs>
      list: Prisma.$Shopping_ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ShoppingList: number
      id_Ingredients: number
      quantity: string
      bought: boolean
    }, ExtArgs["result"]["shopping_List_Ingredient"]>
    composites: {}
  }

  type Shopping_List_IngredientGetPayload<S extends boolean | null | undefined | Shopping_List_IngredientDefaultArgs> = $Result.GetResult<Prisma.$Shopping_List_IngredientPayload, S>

  type Shopping_List_IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Shopping_List_IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shopping_List_IngredientCountAggregateInputType | true
    }

  export interface Shopping_List_IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shopping_List_Ingredient'], meta: { name: 'Shopping_List_Ingredient' } }
    /**
     * Find zero or one Shopping_List_Ingredient that matches the filter.
     * @param {Shopping_List_IngredientFindUniqueArgs} args - Arguments to find a Shopping_List_Ingredient
     * @example
     * // Get one Shopping_List_Ingredient
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Shopping_List_IngredientFindUniqueArgs>(args: SelectSubset<T, Shopping_List_IngredientFindUniqueArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shopping_List_Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Shopping_List_IngredientFindUniqueOrThrowArgs} args - Arguments to find a Shopping_List_Ingredient
     * @example
     * // Get one Shopping_List_Ingredient
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Shopping_List_IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, Shopping_List_IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shopping_List_Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientFindFirstArgs} args - Arguments to find a Shopping_List_Ingredient
     * @example
     * // Get one Shopping_List_Ingredient
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Shopping_List_IngredientFindFirstArgs>(args?: SelectSubset<T, Shopping_List_IngredientFindFirstArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shopping_List_Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientFindFirstOrThrowArgs} args - Arguments to find a Shopping_List_Ingredient
     * @example
     * // Get one Shopping_List_Ingredient
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Shopping_List_IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, Shopping_List_IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shopping_List_Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shopping_List_Ingredients
     * const shopping_List_Ingredients = await prisma.shopping_List_Ingredient.findMany()
     * 
     * // Get first 10 Shopping_List_Ingredients
     * const shopping_List_Ingredients = await prisma.shopping_List_Ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id_ShoppingList`
     * const shopping_List_IngredientWithId_ShoppingListOnly = await prisma.shopping_List_Ingredient.findMany({ select: { id_ShoppingList: true } })
     * 
     */
    findMany<T extends Shopping_List_IngredientFindManyArgs>(args?: SelectSubset<T, Shopping_List_IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shopping_List_Ingredient.
     * @param {Shopping_List_IngredientCreateArgs} args - Arguments to create a Shopping_List_Ingredient.
     * @example
     * // Create one Shopping_List_Ingredient
     * const Shopping_List_Ingredient = await prisma.shopping_List_Ingredient.create({
     *   data: {
     *     // ... data to create a Shopping_List_Ingredient
     *   }
     * })
     * 
     */
    create<T extends Shopping_List_IngredientCreateArgs>(args: SelectSubset<T, Shopping_List_IngredientCreateArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shopping_List_Ingredients.
     * @param {Shopping_List_IngredientCreateManyArgs} args - Arguments to create many Shopping_List_Ingredients.
     * @example
     * // Create many Shopping_List_Ingredients
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Shopping_List_IngredientCreateManyArgs>(args?: SelectSubset<T, Shopping_List_IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shopping_List_Ingredients and returns the data saved in the database.
     * @param {Shopping_List_IngredientCreateManyAndReturnArgs} args - Arguments to create many Shopping_List_Ingredients.
     * @example
     * // Create many Shopping_List_Ingredients
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shopping_List_Ingredients and only return the `id_ShoppingList`
     * const shopping_List_IngredientWithId_ShoppingListOnly = await prisma.shopping_List_Ingredient.createManyAndReturn({
     *   select: { id_ShoppingList: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Shopping_List_IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, Shopping_List_IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shopping_List_Ingredient.
     * @param {Shopping_List_IngredientDeleteArgs} args - Arguments to delete one Shopping_List_Ingredient.
     * @example
     * // Delete one Shopping_List_Ingredient
     * const Shopping_List_Ingredient = await prisma.shopping_List_Ingredient.delete({
     *   where: {
     *     // ... filter to delete one Shopping_List_Ingredient
     *   }
     * })
     * 
     */
    delete<T extends Shopping_List_IngredientDeleteArgs>(args: SelectSubset<T, Shopping_List_IngredientDeleteArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shopping_List_Ingredient.
     * @param {Shopping_List_IngredientUpdateArgs} args - Arguments to update one Shopping_List_Ingredient.
     * @example
     * // Update one Shopping_List_Ingredient
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Shopping_List_IngredientUpdateArgs>(args: SelectSubset<T, Shopping_List_IngredientUpdateArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shopping_List_Ingredients.
     * @param {Shopping_List_IngredientDeleteManyArgs} args - Arguments to filter Shopping_List_Ingredients to delete.
     * @example
     * // Delete a few Shopping_List_Ingredients
     * const { count } = await prisma.shopping_List_Ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Shopping_List_IngredientDeleteManyArgs>(args?: SelectSubset<T, Shopping_List_IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shopping_List_Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shopping_List_Ingredients
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Shopping_List_IngredientUpdateManyArgs>(args: SelectSubset<T, Shopping_List_IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shopping_List_Ingredients and returns the data updated in the database.
     * @param {Shopping_List_IngredientUpdateManyAndReturnArgs} args - Arguments to update many Shopping_List_Ingredients.
     * @example
     * // Update many Shopping_List_Ingredients
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shopping_List_Ingredients and only return the `id_ShoppingList`
     * const shopping_List_IngredientWithId_ShoppingListOnly = await prisma.shopping_List_Ingredient.updateManyAndReturn({
     *   select: { id_ShoppingList: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Shopping_List_IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, Shopping_List_IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shopping_List_Ingredient.
     * @param {Shopping_List_IngredientUpsertArgs} args - Arguments to update or create a Shopping_List_Ingredient.
     * @example
     * // Update or create a Shopping_List_Ingredient
     * const shopping_List_Ingredient = await prisma.shopping_List_Ingredient.upsert({
     *   create: {
     *     // ... data to create a Shopping_List_Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shopping_List_Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends Shopping_List_IngredientUpsertArgs>(args: SelectSubset<T, Shopping_List_IngredientUpsertArgs<ExtArgs>>): Prisma__Shopping_List_IngredientClient<$Result.GetResult<Prisma.$Shopping_List_IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shopping_List_Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientCountArgs} args - Arguments to filter Shopping_List_Ingredients to count.
     * @example
     * // Count the number of Shopping_List_Ingredients
     * const count = await prisma.shopping_List_Ingredient.count({
     *   where: {
     *     // ... the filter for the Shopping_List_Ingredients we want to count
     *   }
     * })
    **/
    count<T extends Shopping_List_IngredientCountArgs>(
      args?: Subset<T, Shopping_List_IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shopping_List_IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shopping_List_Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shopping_List_IngredientAggregateArgs>(args: Subset<T, Shopping_List_IngredientAggregateArgs>): Prisma.PrismaPromise<GetShopping_List_IngredientAggregateType<T>>

    /**
     * Group by Shopping_List_Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shopping_List_IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Shopping_List_IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shopping_List_IngredientGroupByArgs['orderBy'] }
        : { orderBy?: Shopping_List_IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Shopping_List_IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopping_List_IngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shopping_List_Ingredient model
   */
  readonly fields: Shopping_List_IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shopping_List_Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Shopping_List_IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredient<T extends IngredientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientsDefaultArgs<ExtArgs>>): Prisma__IngredientsClient<$Result.GetResult<Prisma.$IngredientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    list<T extends Shopping_ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Shopping_ListDefaultArgs<ExtArgs>>): Prisma__Shopping_ListClient<$Result.GetResult<Prisma.$Shopping_ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shopping_List_Ingredient model
   */ 
  interface Shopping_List_IngredientFieldRefs {
    readonly id_ShoppingList: FieldRef<"Shopping_List_Ingredient", 'Int'>
    readonly id_Ingredients: FieldRef<"Shopping_List_Ingredient", 'Int'>
    readonly quantity: FieldRef<"Shopping_List_Ingredient", 'String'>
    readonly bought: FieldRef<"Shopping_List_Ingredient", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Shopping_List_Ingredient findUnique
   */
  export type Shopping_List_IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List_Ingredient to fetch.
     */
    where: Shopping_List_IngredientWhereUniqueInput
  }

  /**
   * Shopping_List_Ingredient findUniqueOrThrow
   */
  export type Shopping_List_IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List_Ingredient to fetch.
     */
    where: Shopping_List_IngredientWhereUniqueInput
  }

  /**
   * Shopping_List_Ingredient findFirst
   */
  export type Shopping_List_IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List_Ingredient to fetch.
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_List_Ingredients to fetch.
     */
    orderBy?: Shopping_List_IngredientOrderByWithRelationInput | Shopping_List_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shopping_List_Ingredients.
     */
    cursor?: Shopping_List_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_List_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_List_Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shopping_List_Ingredients.
     */
    distinct?: Shopping_List_IngredientScalarFieldEnum | Shopping_List_IngredientScalarFieldEnum[]
  }

  /**
   * Shopping_List_Ingredient findFirstOrThrow
   */
  export type Shopping_List_IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List_Ingredient to fetch.
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_List_Ingredients to fetch.
     */
    orderBy?: Shopping_List_IngredientOrderByWithRelationInput | Shopping_List_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shopping_List_Ingredients.
     */
    cursor?: Shopping_List_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_List_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_List_Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shopping_List_Ingredients.
     */
    distinct?: Shopping_List_IngredientScalarFieldEnum | Shopping_List_IngredientScalarFieldEnum[]
  }

  /**
   * Shopping_List_Ingredient findMany
   */
  export type Shopping_List_IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Shopping_List_Ingredients to fetch.
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shopping_List_Ingredients to fetch.
     */
    orderBy?: Shopping_List_IngredientOrderByWithRelationInput | Shopping_List_IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shopping_List_Ingredients.
     */
    cursor?: Shopping_List_IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shopping_List_Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shopping_List_Ingredients.
     */
    skip?: number
    distinct?: Shopping_List_IngredientScalarFieldEnum | Shopping_List_IngredientScalarFieldEnum[]
  }

  /**
   * Shopping_List_Ingredient create
   */
  export type Shopping_List_IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Shopping_List_Ingredient.
     */
    data: XOR<Shopping_List_IngredientCreateInput, Shopping_List_IngredientUncheckedCreateInput>
  }

  /**
   * Shopping_List_Ingredient createMany
   */
  export type Shopping_List_IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shopping_List_Ingredients.
     */
    data: Shopping_List_IngredientCreateManyInput | Shopping_List_IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shopping_List_Ingredient createManyAndReturn
   */
  export type Shopping_List_IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Shopping_List_Ingredients.
     */
    data: Shopping_List_IngredientCreateManyInput | Shopping_List_IngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shopping_List_Ingredient update
   */
  export type Shopping_List_IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Shopping_List_Ingredient.
     */
    data: XOR<Shopping_List_IngredientUpdateInput, Shopping_List_IngredientUncheckedUpdateInput>
    /**
     * Choose, which Shopping_List_Ingredient to update.
     */
    where: Shopping_List_IngredientWhereUniqueInput
  }

  /**
   * Shopping_List_Ingredient updateMany
   */
  export type Shopping_List_IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shopping_List_Ingredients.
     */
    data: XOR<Shopping_List_IngredientUpdateManyMutationInput, Shopping_List_IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Shopping_List_Ingredients to update
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * Limit how many Shopping_List_Ingredients to update.
     */
    limit?: number
  }

  /**
   * Shopping_List_Ingredient updateManyAndReturn
   */
  export type Shopping_List_IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Shopping_List_Ingredients.
     */
    data: XOR<Shopping_List_IngredientUpdateManyMutationInput, Shopping_List_IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Shopping_List_Ingredients to update
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * Limit how many Shopping_List_Ingredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shopping_List_Ingredient upsert
   */
  export type Shopping_List_IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Shopping_List_Ingredient to update in case it exists.
     */
    where: Shopping_List_IngredientWhereUniqueInput
    /**
     * In case the Shopping_List_Ingredient found by the `where` argument doesn't exist, create a new Shopping_List_Ingredient with this data.
     */
    create: XOR<Shopping_List_IngredientCreateInput, Shopping_List_IngredientUncheckedCreateInput>
    /**
     * In case the Shopping_List_Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Shopping_List_IngredientUpdateInput, Shopping_List_IngredientUncheckedUpdateInput>
  }

  /**
   * Shopping_List_Ingredient delete
   */
  export type Shopping_List_IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
    /**
     * Filter which Shopping_List_Ingredient to delete.
     */
    where: Shopping_List_IngredientWhereUniqueInput
  }

  /**
   * Shopping_List_Ingredient deleteMany
   */
  export type Shopping_List_IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shopping_List_Ingredients to delete
     */
    where?: Shopping_List_IngredientWhereInput
    /**
     * Limit how many Shopping_List_Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Shopping_List_Ingredient without action
   */
  export type Shopping_List_IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shopping_List_Ingredient
     */
    select?: Shopping_List_IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shopping_List_Ingredient
     */
    omit?: Shopping_List_IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Shopping_List_IngredientInclude<ExtArgs> | null
  }


  /**
   * Model Planner
   */

  export type AggregatePlanner = {
    _count: PlannerCountAggregateOutputType | null
    _avg: PlannerAvgAggregateOutputType | null
    _sum: PlannerSumAggregateOutputType | null
    _min: PlannerMinAggregateOutputType | null
    _max: PlannerMaxAggregateOutputType | null
  }

  export type PlannerAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type PlannerSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type PlannerMinAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type PlannerMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type PlannerCountAggregateOutputType = {
    id: number
    id_user: number
    _all: number
  }


  export type PlannerAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type PlannerSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type PlannerMinAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type PlannerMaxAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type PlannerCountAggregateInputType = {
    id?: true
    id_user?: true
    _all?: true
  }

  export type PlannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planner to aggregate.
     */
    where?: PlannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planners to fetch.
     */
    orderBy?: PlannerOrderByWithRelationInput | PlannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Planners
    **/
    _count?: true | PlannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlannerMaxAggregateInputType
  }

  export type GetPlannerAggregateType<T extends PlannerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanner[P]>
      : GetScalarType<T[P], AggregatePlanner[P]>
  }




  export type PlannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlannerWhereInput
    orderBy?: PlannerOrderByWithAggregationInput | PlannerOrderByWithAggregationInput[]
    by: PlannerScalarFieldEnum[] | PlannerScalarFieldEnum
    having?: PlannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlannerCountAggregateInputType | true
    _avg?: PlannerAvgAggregateInputType
    _sum?: PlannerSumAggregateInputType
    _min?: PlannerMinAggregateInputType
    _max?: PlannerMaxAggregateInputType
  }

  export type PlannerGroupByOutputType = {
    id: number
    id_user: number
    _count: PlannerCountAggregateOutputType | null
    _avg: PlannerAvgAggregateOutputType | null
    _sum: PlannerSumAggregateOutputType | null
    _min: PlannerMinAggregateOutputType | null
    _max: PlannerMaxAggregateOutputType | null
  }

  type GetPlannerGroupByPayload<T extends PlannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlannerGroupByOutputType[P]>
            : GetScalarType<T[P], PlannerGroupByOutputType[P]>
        }
      >
    >


  export type PlannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planner"]>

  export type PlannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planner"]>

  export type PlannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planner"]>

  export type PlannerSelectScalar = {
    id?: boolean
    id_user?: boolean
  }

  export type PlannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user", ExtArgs["result"]["planner"]>
  export type PlannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Planner"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
    }, ExtArgs["result"]["planner"]>
    composites: {}
  }

  type PlannerGetPayload<S extends boolean | null | undefined | PlannerDefaultArgs> = $Result.GetResult<Prisma.$PlannerPayload, S>

  type PlannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlannerCountAggregateInputType | true
    }

  export interface PlannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Planner'], meta: { name: 'Planner' } }
    /**
     * Find zero or one Planner that matches the filter.
     * @param {PlannerFindUniqueArgs} args - Arguments to find a Planner
     * @example
     * // Get one Planner
     * const planner = await prisma.planner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlannerFindUniqueArgs>(args: SelectSubset<T, PlannerFindUniqueArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Planner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlannerFindUniqueOrThrowArgs} args - Arguments to find a Planner
     * @example
     * // Get one Planner
     * const planner = await prisma.planner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlannerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerFindFirstArgs} args - Arguments to find a Planner
     * @example
     * // Get one Planner
     * const planner = await prisma.planner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlannerFindFirstArgs>(args?: SelectSubset<T, PlannerFindFirstArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Planner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerFindFirstOrThrowArgs} args - Arguments to find a Planner
     * @example
     * // Get one Planner
     * const planner = await prisma.planner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlannerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Planners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planners
     * const planners = await prisma.planner.findMany()
     * 
     * // Get first 10 Planners
     * const planners = await prisma.planner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plannerWithIdOnly = await prisma.planner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlannerFindManyArgs>(args?: SelectSubset<T, PlannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Planner.
     * @param {PlannerCreateArgs} args - Arguments to create a Planner.
     * @example
     * // Create one Planner
     * const Planner = await prisma.planner.create({
     *   data: {
     *     // ... data to create a Planner
     *   }
     * })
     * 
     */
    create<T extends PlannerCreateArgs>(args: SelectSubset<T, PlannerCreateArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Planners.
     * @param {PlannerCreateManyArgs} args - Arguments to create many Planners.
     * @example
     * // Create many Planners
     * const planner = await prisma.planner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlannerCreateManyArgs>(args?: SelectSubset<T, PlannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Planners and returns the data saved in the database.
     * @param {PlannerCreateManyAndReturnArgs} args - Arguments to create many Planners.
     * @example
     * // Create many Planners
     * const planner = await prisma.planner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Planners and only return the `id`
     * const plannerWithIdOnly = await prisma.planner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlannerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Planner.
     * @param {PlannerDeleteArgs} args - Arguments to delete one Planner.
     * @example
     * // Delete one Planner
     * const Planner = await prisma.planner.delete({
     *   where: {
     *     // ... filter to delete one Planner
     *   }
     * })
     * 
     */
    delete<T extends PlannerDeleteArgs>(args: SelectSubset<T, PlannerDeleteArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Planner.
     * @param {PlannerUpdateArgs} args - Arguments to update one Planner.
     * @example
     * // Update one Planner
     * const planner = await prisma.planner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlannerUpdateArgs>(args: SelectSubset<T, PlannerUpdateArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Planners.
     * @param {PlannerDeleteManyArgs} args - Arguments to filter Planners to delete.
     * @example
     * // Delete a few Planners
     * const { count } = await prisma.planner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlannerDeleteManyArgs>(args?: SelectSubset<T, PlannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planners
     * const planner = await prisma.planner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlannerUpdateManyArgs>(args: SelectSubset<T, PlannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planners and returns the data updated in the database.
     * @param {PlannerUpdateManyAndReturnArgs} args - Arguments to update many Planners.
     * @example
     * // Update many Planners
     * const planner = await prisma.planner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Planners and only return the `id`
     * const plannerWithIdOnly = await prisma.planner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlannerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Planner.
     * @param {PlannerUpsertArgs} args - Arguments to update or create a Planner.
     * @example
     * // Update or create a Planner
     * const planner = await prisma.planner.upsert({
     *   create: {
     *     // ... data to create a Planner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planner we want to update
     *   }
     * })
     */
    upsert<T extends PlannerUpsertArgs>(args: SelectSubset<T, PlannerUpsertArgs<ExtArgs>>): Prisma__PlannerClient<$Result.GetResult<Prisma.$PlannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Planners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerCountArgs} args - Arguments to filter Planners to count.
     * @example
     * // Count the number of Planners
     * const count = await prisma.planner.count({
     *   where: {
     *     // ... the filter for the Planners we want to count
     *   }
     * })
    **/
    count<T extends PlannerCountArgs>(
      args?: Subset<T, PlannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlannerAggregateArgs>(args: Subset<T, PlannerAggregateArgs>): Prisma.PrismaPromise<GetPlannerAggregateType<T>>

    /**
     * Group by Planner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlannerGroupByArgs['orderBy'] }
        : { orderBy?: PlannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Planner model
   */
  readonly fields: PlannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Planner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Planner model
   */ 
  interface PlannerFieldRefs {
    readonly id: FieldRef<"Planner", 'Int'>
    readonly id_user: FieldRef<"Planner", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Planner findUnique
   */
  export type PlannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * Filter, which Planner to fetch.
     */
    where: PlannerWhereUniqueInput
  }

  /**
   * Planner findUniqueOrThrow
   */
  export type PlannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * Filter, which Planner to fetch.
     */
    where: PlannerWhereUniqueInput
  }

  /**
   * Planner findFirst
   */
  export type PlannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * Filter, which Planner to fetch.
     */
    where?: PlannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planners to fetch.
     */
    orderBy?: PlannerOrderByWithRelationInput | PlannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planners.
     */
    cursor?: PlannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planners.
     */
    distinct?: PlannerScalarFieldEnum | PlannerScalarFieldEnum[]
  }

  /**
   * Planner findFirstOrThrow
   */
  export type PlannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * Filter, which Planner to fetch.
     */
    where?: PlannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planners to fetch.
     */
    orderBy?: PlannerOrderByWithRelationInput | PlannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Planners.
     */
    cursor?: PlannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Planners.
     */
    distinct?: PlannerScalarFieldEnum | PlannerScalarFieldEnum[]
  }

  /**
   * Planner findMany
   */
  export type PlannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * Filter, which Planners to fetch.
     */
    where?: PlannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Planners to fetch.
     */
    orderBy?: PlannerOrderByWithRelationInput | PlannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Planners.
     */
    cursor?: PlannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Planners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Planners.
     */
    skip?: number
    distinct?: PlannerScalarFieldEnum | PlannerScalarFieldEnum[]
  }

  /**
   * Planner create
   */
  export type PlannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Planner.
     */
    data: XOR<PlannerCreateInput, PlannerUncheckedCreateInput>
  }

  /**
   * Planner createMany
   */
  export type PlannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Planners.
     */
    data: PlannerCreateManyInput | PlannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Planner createManyAndReturn
   */
  export type PlannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * The data used to create many Planners.
     */
    data: PlannerCreateManyInput | PlannerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Planner update
   */
  export type PlannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Planner.
     */
    data: XOR<PlannerUpdateInput, PlannerUncheckedUpdateInput>
    /**
     * Choose, which Planner to update.
     */
    where: PlannerWhereUniqueInput
  }

  /**
   * Planner updateMany
   */
  export type PlannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Planners.
     */
    data: XOR<PlannerUpdateManyMutationInput, PlannerUncheckedUpdateManyInput>
    /**
     * Filter which Planners to update
     */
    where?: PlannerWhereInput
    /**
     * Limit how many Planners to update.
     */
    limit?: number
  }

  /**
   * Planner updateManyAndReturn
   */
  export type PlannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * The data used to update Planners.
     */
    data: XOR<PlannerUpdateManyMutationInput, PlannerUncheckedUpdateManyInput>
    /**
     * Filter which Planners to update
     */
    where?: PlannerWhereInput
    /**
     * Limit how many Planners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Planner upsert
   */
  export type PlannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Planner to update in case it exists.
     */
    where: PlannerWhereUniqueInput
    /**
     * In case the Planner found by the `where` argument doesn't exist, create a new Planner with this data.
     */
    create: XOR<PlannerCreateInput, PlannerUncheckedCreateInput>
    /**
     * In case the Planner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlannerUpdateInput, PlannerUncheckedUpdateInput>
  }

  /**
   * Planner delete
   */
  export type PlannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
    /**
     * Filter which Planner to delete.
     */
    where: PlannerWhereUniqueInput
  }

  /**
   * Planner deleteMany
   */
  export type PlannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Planners to delete
     */
    where?: PlannerWhereInput
    /**
     * Limit how many Planners to delete.
     */
    limit?: number
  }

  /**
   * Planner without action
   */
  export type PlannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Planner
     */
    select?: PlannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Planner
     */
    omit?: PlannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlannerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    difficulty: 'difficulty',
    preparation_time: 'preparation_time',
    imageUrl: 'imageUrl',
    UserId: 'UserId'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const FavouriteScalarFieldEnum: {
    id_user: 'id_user',
    id_recipe: 'id_recipe'
  };

  export type FavouriteScalarFieldEnum = (typeof FavouriteScalarFieldEnum)[keyof typeof FavouriteScalarFieldEnum]


  export const IngredientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    images: 'images'
  };

  export type IngredientsScalarFieldEnum = (typeof IngredientsScalarFieldEnum)[keyof typeof IngredientsScalarFieldEnum]


  export const Recipe_IngredientScalarFieldEnum: {
    id_recipe: 'id_recipe',
    id_ingredient: 'id_ingredient',
    measurement_unit: 'measurement_unit',
    quantity: 'quantity'
  };

  export type Recipe_IngredientScalarFieldEnum = (typeof Recipe_IngredientScalarFieldEnum)[keyof typeof Recipe_IngredientScalarFieldEnum]


  export const InstructionsScalarFieldEnum: {
    id: 'id',
    id_recipe: 'id_recipe',
    steps_numerations: 'steps_numerations',
    Description: 'Description'
  };

  export type InstructionsScalarFieldEnum = (typeof InstructionsScalarFieldEnum)[keyof typeof InstructionsScalarFieldEnum]


  export const Recipe_TypeScalarFieldEnum: {
    id_RecipeType: 'id_RecipeType',
    id_recipe: 'id_recipe',
    id_recipeFilter: 'id_recipeFilter'
  };

  export type Recipe_TypeScalarFieldEnum = (typeof Recipe_TypeScalarFieldEnum)[keyof typeof Recipe_TypeScalarFieldEnum]


  export const Recipe_FilterScalarFieldEnum: {
    id_RecipeFilter: 'id_RecipeFilter',
    Name: 'Name'
  };

  export type Recipe_FilterScalarFieldEnum = (typeof Recipe_FilterScalarFieldEnum)[keyof typeof Recipe_FilterScalarFieldEnum]


  export const Shopping_ListScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user'
  };

  export type Shopping_ListScalarFieldEnum = (typeof Shopping_ListScalarFieldEnum)[keyof typeof Shopping_ListScalarFieldEnum]


  export const Shopping_List_IngredientScalarFieldEnum: {
    id_ShoppingList: 'id_ShoppingList',
    id_Ingredients: 'id_Ingredients',
    quantity: 'quantity',
    bought: 'bought'
  };

  export type Shopping_List_IngredientScalarFieldEnum = (typeof Shopping_List_IngredientScalarFieldEnum)[keyof typeof Shopping_List_IngredientScalarFieldEnum]


  export const PlannerScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user'
  };

  export type PlannerScalarFieldEnum = (typeof PlannerScalarFieldEnum)[keyof typeof PlannerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    favourites?: FavouriteListRelationFilter
    planner?: XOR<PlannerNullableScalarRelationFilter, PlannerWhereInput> | null
    recipes?: RecipeListRelationFilter
    lists?: Shopping_ListListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    favourites?: FavouriteOrderByRelationAggregateInput
    planner?: PlannerOrderByWithRelationInput
    recipes?: RecipeOrderByRelationAggregateInput
    lists?: Shopping_ListOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    favourites?: FavouriteListRelationFilter
    planner?: XOR<PlannerNullableScalarRelationFilter, PlannerWhereInput> | null
    recipes?: RecipeListRelationFilter
    lists?: Shopping_ListListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: IntFilter<"Recipe"> | number
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    difficulty?: StringFilter<"Recipe"> | string
    preparation_time?: IntFilter<"Recipe"> | number
    imageUrl?: StringNullableFilter<"Recipe"> | string | null
    UserId?: IntFilter<"Recipe"> | number
    favourites?: FavouriteListRelationFilter
    instructions?: InstructionsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: Recipe_IngredientListRelationFilter
    recipeTypes?: Recipe_TypeListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    preparation_time?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    UserId?: SortOrder
    favourites?: FavouriteOrderByRelationAggregateInput
    instructions?: InstructionsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    ingredients?: Recipe_IngredientOrderByRelationAggregateInput
    recipeTypes?: Recipe_TypeOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    difficulty?: StringFilter<"Recipe"> | string
    preparation_time?: IntFilter<"Recipe"> | number
    imageUrl?: StringNullableFilter<"Recipe"> | string | null
    UserId?: IntFilter<"Recipe"> | number
    favourites?: FavouriteListRelationFilter
    instructions?: InstructionsListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: Recipe_IngredientListRelationFilter
    recipeTypes?: Recipe_TypeListRelationFilter
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    preparation_time?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    UserId?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipe"> | number
    name?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringWithAggregatesFilter<"Recipe"> | string
    difficulty?: StringWithAggregatesFilter<"Recipe"> | string
    preparation_time?: IntWithAggregatesFilter<"Recipe"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    UserId?: IntWithAggregatesFilter<"Recipe"> | number
  }

  export type FavouriteWhereInput = {
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    id_user?: IntFilter<"Favourite"> | number
    id_recipe?: IntFilter<"Favourite"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FavouriteOrderByWithRelationInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FavouriteWhereUniqueInput = Prisma.AtLeast<{
    id_user_id_recipe?: FavouriteId_userId_recipeCompoundUniqueInput
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    id_user?: IntFilter<"Favourite"> | number
    id_recipe?: IntFilter<"Favourite"> | number
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_user_id_recipe">

  export type FavouriteOrderByWithAggregationInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
    _count?: FavouriteCountOrderByAggregateInput
    _avg?: FavouriteAvgOrderByAggregateInput
    _max?: FavouriteMaxOrderByAggregateInput
    _min?: FavouriteMinOrderByAggregateInput
    _sum?: FavouriteSumOrderByAggregateInput
  }

  export type FavouriteScalarWhereWithAggregatesInput = {
    AND?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    OR?: FavouriteScalarWhereWithAggregatesInput[]
    NOT?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"Favourite"> | number
    id_recipe?: IntWithAggregatesFilter<"Favourite"> | number
  }

  export type IngredientsWhereInput = {
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    id?: IntFilter<"Ingredients"> | number
    name?: StringFilter<"Ingredients"> | string
    type?: StringFilter<"Ingredients"> | string
    images?: StringNullableFilter<"Ingredients"> | string | null
    recipes?: Recipe_IngredientListRelationFilter
    list?: Shopping_List_IngredientListRelationFilter
  }

  export type IngredientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    images?: SortOrderInput | SortOrder
    recipes?: Recipe_IngredientOrderByRelationAggregateInput
    list?: Shopping_List_IngredientOrderByRelationAggregateInput
  }

  export type IngredientsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngredientsWhereInput | IngredientsWhereInput[]
    OR?: IngredientsWhereInput[]
    NOT?: IngredientsWhereInput | IngredientsWhereInput[]
    name?: StringFilter<"Ingredients"> | string
    type?: StringFilter<"Ingredients"> | string
    images?: StringNullableFilter<"Ingredients"> | string | null
    recipes?: Recipe_IngredientListRelationFilter
    list?: Shopping_List_IngredientListRelationFilter
  }, "id">

  export type IngredientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    images?: SortOrderInput | SortOrder
    _count?: IngredientsCountOrderByAggregateInput
    _avg?: IngredientsAvgOrderByAggregateInput
    _max?: IngredientsMaxOrderByAggregateInput
    _min?: IngredientsMinOrderByAggregateInput
    _sum?: IngredientsSumOrderByAggregateInput
  }

  export type IngredientsScalarWhereWithAggregatesInput = {
    AND?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    OR?: IngredientsScalarWhereWithAggregatesInput[]
    NOT?: IngredientsScalarWhereWithAggregatesInput | IngredientsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredients"> | number
    name?: StringWithAggregatesFilter<"Ingredients"> | string
    type?: StringWithAggregatesFilter<"Ingredients"> | string
    images?: StringNullableWithAggregatesFilter<"Ingredients"> | string | null
  }

  export type Recipe_IngredientWhereInput = {
    AND?: Recipe_IngredientWhereInput | Recipe_IngredientWhereInput[]
    OR?: Recipe_IngredientWhereInput[]
    NOT?: Recipe_IngredientWhereInput | Recipe_IngredientWhereInput[]
    id_recipe?: IntFilter<"Recipe_Ingredient"> | number
    id_ingredient?: IntFilter<"Recipe_Ingredient"> | number
    measurement_unit?: StringFilter<"Recipe_Ingredient"> | string
    quantity?: FloatFilter<"Recipe_Ingredient"> | number
    ingredient?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type Recipe_IngredientOrderByWithRelationInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    measurement_unit?: SortOrder
    quantity?: SortOrder
    ingredient?: IngredientsOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type Recipe_IngredientWhereUniqueInput = Prisma.AtLeast<{
    id_recipe_id_ingredient?: Recipe_IngredientId_recipeId_ingredientCompoundUniqueInput
    AND?: Recipe_IngredientWhereInput | Recipe_IngredientWhereInput[]
    OR?: Recipe_IngredientWhereInput[]
    NOT?: Recipe_IngredientWhereInput | Recipe_IngredientWhereInput[]
    id_recipe?: IntFilter<"Recipe_Ingredient"> | number
    id_ingredient?: IntFilter<"Recipe_Ingredient"> | number
    measurement_unit?: StringFilter<"Recipe_Ingredient"> | string
    quantity?: FloatFilter<"Recipe_Ingredient"> | number
    ingredient?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id_recipe_id_ingredient">

  export type Recipe_IngredientOrderByWithAggregationInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    measurement_unit?: SortOrder
    quantity?: SortOrder
    _count?: Recipe_IngredientCountOrderByAggregateInput
    _avg?: Recipe_IngredientAvgOrderByAggregateInput
    _max?: Recipe_IngredientMaxOrderByAggregateInput
    _min?: Recipe_IngredientMinOrderByAggregateInput
    _sum?: Recipe_IngredientSumOrderByAggregateInput
  }

  export type Recipe_IngredientScalarWhereWithAggregatesInput = {
    AND?: Recipe_IngredientScalarWhereWithAggregatesInput | Recipe_IngredientScalarWhereWithAggregatesInput[]
    OR?: Recipe_IngredientScalarWhereWithAggregatesInput[]
    NOT?: Recipe_IngredientScalarWhereWithAggregatesInput | Recipe_IngredientScalarWhereWithAggregatesInput[]
    id_recipe?: IntWithAggregatesFilter<"Recipe_Ingredient"> | number
    id_ingredient?: IntWithAggregatesFilter<"Recipe_Ingredient"> | number
    measurement_unit?: StringWithAggregatesFilter<"Recipe_Ingredient"> | string
    quantity?: FloatWithAggregatesFilter<"Recipe_Ingredient"> | number
  }

  export type InstructionsWhereInput = {
    AND?: InstructionsWhereInput | InstructionsWhereInput[]
    OR?: InstructionsWhereInput[]
    NOT?: InstructionsWhereInput | InstructionsWhereInput[]
    id?: IntFilter<"Instructions"> | number
    id_recipe?: IntFilter<"Instructions"> | number
    steps_numerations?: StringFilter<"Instructions"> | string
    Description?: StringFilter<"Instructions"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type InstructionsOrderByWithRelationInput = {
    id?: SortOrder
    id_recipe?: SortOrder
    steps_numerations?: SortOrder
    Description?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
  }

  export type InstructionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstructionsWhereInput | InstructionsWhereInput[]
    OR?: InstructionsWhereInput[]
    NOT?: InstructionsWhereInput | InstructionsWhereInput[]
    id_recipe?: IntFilter<"Instructions"> | number
    steps_numerations?: StringFilter<"Instructions"> | string
    Description?: StringFilter<"Instructions"> | string
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id">

  export type InstructionsOrderByWithAggregationInput = {
    id?: SortOrder
    id_recipe?: SortOrder
    steps_numerations?: SortOrder
    Description?: SortOrder
    _count?: InstructionsCountOrderByAggregateInput
    _avg?: InstructionsAvgOrderByAggregateInput
    _max?: InstructionsMaxOrderByAggregateInput
    _min?: InstructionsMinOrderByAggregateInput
    _sum?: InstructionsSumOrderByAggregateInput
  }

  export type InstructionsScalarWhereWithAggregatesInput = {
    AND?: InstructionsScalarWhereWithAggregatesInput | InstructionsScalarWhereWithAggregatesInput[]
    OR?: InstructionsScalarWhereWithAggregatesInput[]
    NOT?: InstructionsScalarWhereWithAggregatesInput | InstructionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instructions"> | number
    id_recipe?: IntWithAggregatesFilter<"Instructions"> | number
    steps_numerations?: StringWithAggregatesFilter<"Instructions"> | string
    Description?: StringWithAggregatesFilter<"Instructions"> | string
  }

  export type Recipe_TypeWhereInput = {
    AND?: Recipe_TypeWhereInput | Recipe_TypeWhereInput[]
    OR?: Recipe_TypeWhereInput[]
    NOT?: Recipe_TypeWhereInput | Recipe_TypeWhereInput[]
    id_RecipeType?: IntFilter<"Recipe_Type"> | number
    id_recipe?: IntFilter<"Recipe_Type"> | number
    id_recipeFilter?: IntFilter<"Recipe_Type"> | number
    filter?: XOR<Recipe_FilterScalarRelationFilter, Recipe_FilterWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }

  export type Recipe_TypeOrderByWithRelationInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
    filter?: Recipe_FilterOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type Recipe_TypeWhereUniqueInput = Prisma.AtLeast<{
    id_RecipeType?: number
    id_recipe_id_recipeFilter?: Recipe_TypeId_recipeId_recipeFilterCompoundUniqueInput
    AND?: Recipe_TypeWhereInput | Recipe_TypeWhereInput[]
    OR?: Recipe_TypeWhereInput[]
    NOT?: Recipe_TypeWhereInput | Recipe_TypeWhereInput[]
    id_recipe?: IntFilter<"Recipe_Type"> | number
    id_recipeFilter?: IntFilter<"Recipe_Type"> | number
    filter?: XOR<Recipe_FilterScalarRelationFilter, Recipe_FilterWhereInput>
    recipe?: XOR<RecipeScalarRelationFilter, RecipeWhereInput>
  }, "id_RecipeType" | "id_recipe_id_recipeFilter">

  export type Recipe_TypeOrderByWithAggregationInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
    _count?: Recipe_TypeCountOrderByAggregateInput
    _avg?: Recipe_TypeAvgOrderByAggregateInput
    _max?: Recipe_TypeMaxOrderByAggregateInput
    _min?: Recipe_TypeMinOrderByAggregateInput
    _sum?: Recipe_TypeSumOrderByAggregateInput
  }

  export type Recipe_TypeScalarWhereWithAggregatesInput = {
    AND?: Recipe_TypeScalarWhereWithAggregatesInput | Recipe_TypeScalarWhereWithAggregatesInput[]
    OR?: Recipe_TypeScalarWhereWithAggregatesInput[]
    NOT?: Recipe_TypeScalarWhereWithAggregatesInput | Recipe_TypeScalarWhereWithAggregatesInput[]
    id_RecipeType?: IntWithAggregatesFilter<"Recipe_Type"> | number
    id_recipe?: IntWithAggregatesFilter<"Recipe_Type"> | number
    id_recipeFilter?: IntWithAggregatesFilter<"Recipe_Type"> | number
  }

  export type Recipe_FilterWhereInput = {
    AND?: Recipe_FilterWhereInput | Recipe_FilterWhereInput[]
    OR?: Recipe_FilterWhereInput[]
    NOT?: Recipe_FilterWhereInput | Recipe_FilterWhereInput[]
    id_RecipeFilter?: IntFilter<"Recipe_Filter"> | number
    Name?: StringFilter<"Recipe_Filter"> | string
    recipe?: Recipe_TypeListRelationFilter
  }

  export type Recipe_FilterOrderByWithRelationInput = {
    id_RecipeFilter?: SortOrder
    Name?: SortOrder
    recipe?: Recipe_TypeOrderByRelationAggregateInput
  }

  export type Recipe_FilterWhereUniqueInput = Prisma.AtLeast<{
    id_RecipeFilter?: number
    AND?: Recipe_FilterWhereInput | Recipe_FilterWhereInput[]
    OR?: Recipe_FilterWhereInput[]
    NOT?: Recipe_FilterWhereInput | Recipe_FilterWhereInput[]
    Name?: StringFilter<"Recipe_Filter"> | string
    recipe?: Recipe_TypeListRelationFilter
  }, "id_RecipeFilter">

  export type Recipe_FilterOrderByWithAggregationInput = {
    id_RecipeFilter?: SortOrder
    Name?: SortOrder
    _count?: Recipe_FilterCountOrderByAggregateInput
    _avg?: Recipe_FilterAvgOrderByAggregateInput
    _max?: Recipe_FilterMaxOrderByAggregateInput
    _min?: Recipe_FilterMinOrderByAggregateInput
    _sum?: Recipe_FilterSumOrderByAggregateInput
  }

  export type Recipe_FilterScalarWhereWithAggregatesInput = {
    AND?: Recipe_FilterScalarWhereWithAggregatesInput | Recipe_FilterScalarWhereWithAggregatesInput[]
    OR?: Recipe_FilterScalarWhereWithAggregatesInput[]
    NOT?: Recipe_FilterScalarWhereWithAggregatesInput | Recipe_FilterScalarWhereWithAggregatesInput[]
    id_RecipeFilter?: IntWithAggregatesFilter<"Recipe_Filter"> | number
    Name?: StringWithAggregatesFilter<"Recipe_Filter"> | string
  }

  export type Shopping_ListWhereInput = {
    AND?: Shopping_ListWhereInput | Shopping_ListWhereInput[]
    OR?: Shopping_ListWhereInput[]
    NOT?: Shopping_ListWhereInput | Shopping_ListWhereInput[]
    id?: IntFilter<"Shopping_List"> | number
    id_user?: IntFilter<"Shopping_List"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: Shopping_List_IngredientListRelationFilter
  }

  export type Shopping_ListOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    user?: UserOrderByWithRelationInput
    ingredients?: Shopping_List_IngredientOrderByRelationAggregateInput
  }

  export type Shopping_ListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Shopping_ListWhereInput | Shopping_ListWhereInput[]
    OR?: Shopping_ListWhereInput[]
    NOT?: Shopping_ListWhereInput | Shopping_ListWhereInput[]
    id_user?: IntFilter<"Shopping_List"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ingredients?: Shopping_List_IngredientListRelationFilter
  }, "id">

  export type Shopping_ListOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    _count?: Shopping_ListCountOrderByAggregateInput
    _avg?: Shopping_ListAvgOrderByAggregateInput
    _max?: Shopping_ListMaxOrderByAggregateInput
    _min?: Shopping_ListMinOrderByAggregateInput
    _sum?: Shopping_ListSumOrderByAggregateInput
  }

  export type Shopping_ListScalarWhereWithAggregatesInput = {
    AND?: Shopping_ListScalarWhereWithAggregatesInput | Shopping_ListScalarWhereWithAggregatesInput[]
    OR?: Shopping_ListScalarWhereWithAggregatesInput[]
    NOT?: Shopping_ListScalarWhereWithAggregatesInput | Shopping_ListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shopping_List"> | number
    id_user?: IntWithAggregatesFilter<"Shopping_List"> | number
  }

  export type Shopping_List_IngredientWhereInput = {
    AND?: Shopping_List_IngredientWhereInput | Shopping_List_IngredientWhereInput[]
    OR?: Shopping_List_IngredientWhereInput[]
    NOT?: Shopping_List_IngredientWhereInput | Shopping_List_IngredientWhereInput[]
    id_ShoppingList?: IntFilter<"Shopping_List_Ingredient"> | number
    id_Ingredients?: IntFilter<"Shopping_List_Ingredient"> | number
    quantity?: StringFilter<"Shopping_List_Ingredient"> | string
    bought?: BoolFilter<"Shopping_List_Ingredient"> | boolean
    ingredient?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
    list?: XOR<Shopping_ListScalarRelationFilter, Shopping_ListWhereInput>
  }

  export type Shopping_List_IngredientOrderByWithRelationInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
    quantity?: SortOrder
    bought?: SortOrder
    ingredient?: IngredientsOrderByWithRelationInput
    list?: Shopping_ListOrderByWithRelationInput
  }

  export type Shopping_List_IngredientWhereUniqueInput = Prisma.AtLeast<{
    id_ShoppingList_id_Ingredients?: Shopping_List_IngredientId_ShoppingListId_IngredientsCompoundUniqueInput
    AND?: Shopping_List_IngredientWhereInput | Shopping_List_IngredientWhereInput[]
    OR?: Shopping_List_IngredientWhereInput[]
    NOT?: Shopping_List_IngredientWhereInput | Shopping_List_IngredientWhereInput[]
    id_ShoppingList?: IntFilter<"Shopping_List_Ingredient"> | number
    id_Ingredients?: IntFilter<"Shopping_List_Ingredient"> | number
    quantity?: StringFilter<"Shopping_List_Ingredient"> | string
    bought?: BoolFilter<"Shopping_List_Ingredient"> | boolean
    ingredient?: XOR<IngredientsScalarRelationFilter, IngredientsWhereInput>
    list?: XOR<Shopping_ListScalarRelationFilter, Shopping_ListWhereInput>
  }, "id_ShoppingList_id_Ingredients">

  export type Shopping_List_IngredientOrderByWithAggregationInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
    quantity?: SortOrder
    bought?: SortOrder
    _count?: Shopping_List_IngredientCountOrderByAggregateInput
    _avg?: Shopping_List_IngredientAvgOrderByAggregateInput
    _max?: Shopping_List_IngredientMaxOrderByAggregateInput
    _min?: Shopping_List_IngredientMinOrderByAggregateInput
    _sum?: Shopping_List_IngredientSumOrderByAggregateInput
  }

  export type Shopping_List_IngredientScalarWhereWithAggregatesInput = {
    AND?: Shopping_List_IngredientScalarWhereWithAggregatesInput | Shopping_List_IngredientScalarWhereWithAggregatesInput[]
    OR?: Shopping_List_IngredientScalarWhereWithAggregatesInput[]
    NOT?: Shopping_List_IngredientScalarWhereWithAggregatesInput | Shopping_List_IngredientScalarWhereWithAggregatesInput[]
    id_ShoppingList?: IntWithAggregatesFilter<"Shopping_List_Ingredient"> | number
    id_Ingredients?: IntWithAggregatesFilter<"Shopping_List_Ingredient"> | number
    quantity?: StringWithAggregatesFilter<"Shopping_List_Ingredient"> | string
    bought?: BoolWithAggregatesFilter<"Shopping_List_Ingredient"> | boolean
  }

  export type PlannerWhereInput = {
    AND?: PlannerWhereInput | PlannerWhereInput[]
    OR?: PlannerWhereInput[]
    NOT?: PlannerWhereInput | PlannerWhereInput[]
    id?: IntFilter<"Planner"> | number
    id_user?: IntFilter<"Planner"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlannerOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PlannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_user?: number
    AND?: PlannerWhereInput | PlannerWhereInput[]
    OR?: PlannerWhereInput[]
    NOT?: PlannerWhereInput | PlannerWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id_user">

  export type PlannerOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    _count?: PlannerCountOrderByAggregateInput
    _avg?: PlannerAvgOrderByAggregateInput
    _max?: PlannerMaxOrderByAggregateInput
    _min?: PlannerMinOrderByAggregateInput
    _sum?: PlannerSumOrderByAggregateInput
  }

  export type PlannerScalarWhereWithAggregatesInput = {
    AND?: PlannerScalarWhereWithAggregatesInput | PlannerScalarWhereWithAggregatesInput[]
    OR?: PlannerScalarWhereWithAggregatesInput[]
    NOT?: PlannerScalarWhereWithAggregatesInput | PlannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Planner"> | number
    id_user?: IntWithAggregatesFilter<"Planner"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteCreateNestedManyWithoutUserInput
    planner?: PlannerCreateNestedOneWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutUserInput
    lists?: Shopping_ListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
    planner?: PlannerUncheckedCreateNestedOneWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
    lists?: Shopping_ListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
    planner?: PlannerUpdateOneWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutUserNestedInput
    lists?: Shopping_ListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
    planner?: PlannerUncheckedUpdateOneWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
    lists?: Shopping_ListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type RecipeCreateInput = {
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    favourites?: FavouriteCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsCreateNestedManyWithoutRecipeInput
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: Recipe_IngredientCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    UserId: number
    favourites?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: Recipe_IngredientUncheckedCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favourites?: FavouriteUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUpdateManyWithoutRecipeNestedInput
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: Recipe_IngredientUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: Recipe_IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    UserId: number
  }

  export type RecipeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteCreateInput = {
    recipe: RecipeCreateNestedOneWithoutFavouritesInput
    user: UserCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteUncheckedCreateInput = {
    id_user: number
    id_recipe: number
  }

  export type FavouriteUpdateInput = {
    recipe?: RecipeUpdateOneRequiredWithoutFavouritesNestedInput
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteCreateManyInput = {
    id_user: number
    id_recipe: number
  }

  export type FavouriteUpdateManyMutationInput = {

  }

  export type FavouriteUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
  }

  export type IngredientsCreateInput = {
    name: string
    type: string
    images?: string | null
    recipes?: Recipe_IngredientCreateNestedManyWithoutIngredientInput
    list?: Shopping_List_IngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    images?: string | null
    recipes?: Recipe_IngredientUncheckedCreateNestedManyWithoutIngredientInput
    list?: Shopping_List_IngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: Recipe_IngredientUpdateManyWithoutIngredientNestedInput
    list?: Shopping_List_IngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: Recipe_IngredientUncheckedUpdateManyWithoutIngredientNestedInput
    list?: Shopping_List_IngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientsCreateManyInput = {
    id?: number
    name: string
    type: string
    images?: string | null
  }

  export type IngredientsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngredientsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Recipe_IngredientCreateInput = {
    measurement_unit: string
    quantity: number
    ingredient: IngredientsCreateNestedOneWithoutRecipesInput
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type Recipe_IngredientUncheckedCreateInput = {
    id_recipe: number
    id_ingredient: number
    measurement_unit: string
    quantity: number
  }

  export type Recipe_IngredientUpdateInput = {
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    ingredient?: IngredientsUpdateOneRequiredWithoutRecipesNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type Recipe_IngredientUncheckedUpdateInput = {
    id_recipe?: IntFieldUpdateOperationsInput | number
    id_ingredient?: IntFieldUpdateOperationsInput | number
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type Recipe_IngredientCreateManyInput = {
    id_recipe: number
    id_ingredient: number
    measurement_unit: string
    quantity: number
  }

  export type Recipe_IngredientUpdateManyMutationInput = {
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type Recipe_IngredientUncheckedUpdateManyInput = {
    id_recipe?: IntFieldUpdateOperationsInput | number
    id_ingredient?: IntFieldUpdateOperationsInput | number
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type InstructionsCreateInput = {
    steps_numerations: string
    Description: string
    recipe: RecipeCreateNestedOneWithoutInstructionsInput
  }

  export type InstructionsUncheckedCreateInput = {
    id?: number
    id_recipe: number
    steps_numerations: string
    Description: string
  }

  export type InstructionsUpdateInput = {
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
    recipe?: RecipeUpdateOneRequiredWithoutInstructionsNestedInput
  }

  export type InstructionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsCreateManyInput = {
    id?: number
    id_recipe: number
    steps_numerations: string
    Description: string
  }

  export type InstructionsUpdateManyMutationInput = {
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type Recipe_TypeCreateInput = {
    filter: Recipe_FilterCreateNestedOneWithoutRecipeInput
    recipe: RecipeCreateNestedOneWithoutRecipeTypesInput
  }

  export type Recipe_TypeUncheckedCreateInput = {
    id_RecipeType?: number
    id_recipe: number
    id_recipeFilter: number
  }

  export type Recipe_TypeUpdateInput = {
    filter?: Recipe_FilterUpdateOneRequiredWithoutRecipeNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutRecipeTypesNestedInput
  }

  export type Recipe_TypeUncheckedUpdateInput = {
    id_RecipeType?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
    id_recipeFilter?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_TypeCreateManyInput = {
    id_RecipeType?: number
    id_recipe: number
    id_recipeFilter: number
  }

  export type Recipe_TypeUpdateManyMutationInput = {

  }

  export type Recipe_TypeUncheckedUpdateManyInput = {
    id_RecipeType?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
    id_recipeFilter?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_FilterCreateInput = {
    Name: string
    recipe?: Recipe_TypeCreateNestedManyWithoutFilterInput
  }

  export type Recipe_FilterUncheckedCreateInput = {
    id_RecipeFilter?: number
    Name: string
    recipe?: Recipe_TypeUncheckedCreateNestedManyWithoutFilterInput
  }

  export type Recipe_FilterUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    recipe?: Recipe_TypeUpdateManyWithoutFilterNestedInput
  }

  export type Recipe_FilterUncheckedUpdateInput = {
    id_RecipeFilter?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    recipe?: Recipe_TypeUncheckedUpdateManyWithoutFilterNestedInput
  }

  export type Recipe_FilterCreateManyInput = {
    id_RecipeFilter?: number
    Name: string
  }

  export type Recipe_FilterUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type Recipe_FilterUncheckedUpdateManyInput = {
    id_RecipeFilter?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type Shopping_ListCreateInput = {
    user: UserCreateNestedOneWithoutListsInput
    ingredients?: Shopping_List_IngredientCreateNestedManyWithoutListInput
  }

  export type Shopping_ListUncheckedCreateInput = {
    id?: number
    id_user: number
    ingredients?: Shopping_List_IngredientUncheckedCreateNestedManyWithoutListInput
  }

  export type Shopping_ListUpdateInput = {
    user?: UserUpdateOneRequiredWithoutListsNestedInput
    ingredients?: Shopping_List_IngredientUpdateManyWithoutListNestedInput
  }

  export type Shopping_ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    ingredients?: Shopping_List_IngredientUncheckedUpdateManyWithoutListNestedInput
  }

  export type Shopping_ListCreateManyInput = {
    id?: number
    id_user: number
  }

  export type Shopping_ListUpdateManyMutationInput = {

  }

  export type Shopping_ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type Shopping_List_IngredientCreateInput = {
    quantity: string
    bought: boolean
    ingredient: IngredientsCreateNestedOneWithoutListInput
    list: Shopping_ListCreateNestedOneWithoutIngredientsInput
  }

  export type Shopping_List_IngredientUncheckedCreateInput = {
    id_ShoppingList: number
    id_Ingredients: number
    quantity: string
    bought: boolean
  }

  export type Shopping_List_IngredientUpdateInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
    ingredient?: IngredientsUpdateOneRequiredWithoutListNestedInput
    list?: Shopping_ListUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type Shopping_List_IngredientUncheckedUpdateInput = {
    id_ShoppingList?: IntFieldUpdateOperationsInput | number
    id_Ingredients?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Shopping_List_IngredientCreateManyInput = {
    id_ShoppingList: number
    id_Ingredients: number
    quantity: string
    bought: boolean
  }

  export type Shopping_List_IngredientUpdateManyMutationInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Shopping_List_IngredientUncheckedUpdateManyInput = {
    id_ShoppingList?: IntFieldUpdateOperationsInput | number
    id_Ingredients?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlannerCreateInput = {
    user: UserCreateNestedOneWithoutPlannerInput
  }

  export type PlannerUncheckedCreateInput = {
    id?: number
    id_user: number
  }

  export type PlannerUpdateInput = {
    user?: UserUpdateOneRequiredWithoutPlannerNestedInput
  }

  export type PlannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type PlannerCreateManyInput = {
    id?: number
    id_user: number
  }

  export type PlannerUpdateManyMutationInput = {

  }

  export type PlannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FavouriteListRelationFilter = {
    every?: FavouriteWhereInput
    some?: FavouriteWhereInput
    none?: FavouriteWhereInput
  }

  export type PlannerNullableScalarRelationFilter = {
    is?: PlannerWhereInput | null
    isNot?: PlannerWhereInput | null
  }

  export type RecipeListRelationFilter = {
    every?: RecipeWhereInput
    some?: RecipeWhereInput
    none?: RecipeWhereInput
  }

  export type Shopping_ListListRelationFilter = {
    every?: Shopping_ListWhereInput
    some?: Shopping_ListWhereInput
    none?: Shopping_ListWhereInput
  }

  export type FavouriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Shopping_ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type InstructionsListRelationFilter = {
    every?: InstructionsWhereInput
    some?: InstructionsWhereInput
    none?: InstructionsWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Recipe_IngredientListRelationFilter = {
    every?: Recipe_IngredientWhereInput
    some?: Recipe_IngredientWhereInput
    none?: Recipe_IngredientWhereInput
  }

  export type Recipe_TypeListRelationFilter = {
    every?: Recipe_TypeWhereInput
    some?: Recipe_TypeWhereInput
    none?: Recipe_TypeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InstructionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Recipe_IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Recipe_TypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    preparation_time?: SortOrder
    imageUrl?: SortOrder
    UserId?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    id?: SortOrder
    preparation_time?: SortOrder
    UserId?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    preparation_time?: SortOrder
    imageUrl?: SortOrder
    UserId?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    preparation_time?: SortOrder
    imageUrl?: SortOrder
    UserId?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    id?: SortOrder
    preparation_time?: SortOrder
    UserId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecipeScalarRelationFilter = {
    is?: RecipeWhereInput
    isNot?: RecipeWhereInput
  }

  export type FavouriteId_userId_recipeCompoundUniqueInput = {
    id_user: number
    id_recipe: number
  }

  export type FavouriteCountOrderByAggregateInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
  }

  export type FavouriteAvgOrderByAggregateInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
  }

  export type FavouriteMaxOrderByAggregateInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
  }

  export type FavouriteMinOrderByAggregateInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
  }

  export type FavouriteSumOrderByAggregateInput = {
    id_user?: SortOrder
    id_recipe?: SortOrder
  }

  export type Shopping_List_IngredientListRelationFilter = {
    every?: Shopping_List_IngredientWhereInput
    some?: Shopping_List_IngredientWhereInput
    none?: Shopping_List_IngredientWhereInput
  }

  export type Shopping_List_IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    images?: SortOrder
  }

  export type IngredientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    images?: SortOrder
  }

  export type IngredientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    images?: SortOrder
  }

  export type IngredientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IngredientsScalarRelationFilter = {
    is?: IngredientsWhereInput
    isNot?: IngredientsWhereInput
  }

  export type Recipe_IngredientId_recipeId_ingredientCompoundUniqueInput = {
    id_recipe: number
    id_ingredient: number
  }

  export type Recipe_IngredientCountOrderByAggregateInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    measurement_unit?: SortOrder
    quantity?: SortOrder
  }

  export type Recipe_IngredientAvgOrderByAggregateInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    quantity?: SortOrder
  }

  export type Recipe_IngredientMaxOrderByAggregateInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    measurement_unit?: SortOrder
    quantity?: SortOrder
  }

  export type Recipe_IngredientMinOrderByAggregateInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    measurement_unit?: SortOrder
    quantity?: SortOrder
  }

  export type Recipe_IngredientSumOrderByAggregateInput = {
    id_recipe?: SortOrder
    id_ingredient?: SortOrder
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InstructionsCountOrderByAggregateInput = {
    id?: SortOrder
    id_recipe?: SortOrder
    steps_numerations?: SortOrder
    Description?: SortOrder
  }

  export type InstructionsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_recipe?: SortOrder
  }

  export type InstructionsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_recipe?: SortOrder
    steps_numerations?: SortOrder
    Description?: SortOrder
  }

  export type InstructionsMinOrderByAggregateInput = {
    id?: SortOrder
    id_recipe?: SortOrder
    steps_numerations?: SortOrder
    Description?: SortOrder
  }

  export type InstructionsSumOrderByAggregateInput = {
    id?: SortOrder
    id_recipe?: SortOrder
  }

  export type Recipe_FilterScalarRelationFilter = {
    is?: Recipe_FilterWhereInput
    isNot?: Recipe_FilterWhereInput
  }

  export type Recipe_TypeId_recipeId_recipeFilterCompoundUniqueInput = {
    id_recipe: number
    id_recipeFilter: number
  }

  export type Recipe_TypeCountOrderByAggregateInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
  }

  export type Recipe_TypeAvgOrderByAggregateInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
  }

  export type Recipe_TypeMaxOrderByAggregateInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
  }

  export type Recipe_TypeMinOrderByAggregateInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
  }

  export type Recipe_TypeSumOrderByAggregateInput = {
    id_RecipeType?: SortOrder
    id_recipe?: SortOrder
    id_recipeFilter?: SortOrder
  }

  export type Recipe_FilterCountOrderByAggregateInput = {
    id_RecipeFilter?: SortOrder
    Name?: SortOrder
  }

  export type Recipe_FilterAvgOrderByAggregateInput = {
    id_RecipeFilter?: SortOrder
  }

  export type Recipe_FilterMaxOrderByAggregateInput = {
    id_RecipeFilter?: SortOrder
    Name?: SortOrder
  }

  export type Recipe_FilterMinOrderByAggregateInput = {
    id_RecipeFilter?: SortOrder
    Name?: SortOrder
  }

  export type Recipe_FilterSumOrderByAggregateInput = {
    id_RecipeFilter?: SortOrder
  }

  export type Shopping_ListCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type Shopping_ListAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type Shopping_ListMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type Shopping_ListMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type Shopping_ListSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Shopping_ListScalarRelationFilter = {
    is?: Shopping_ListWhereInput
    isNot?: Shopping_ListWhereInput
  }

  export type Shopping_List_IngredientId_ShoppingListId_IngredientsCompoundUniqueInput = {
    id_ShoppingList: number
    id_Ingredients: number
  }

  export type Shopping_List_IngredientCountOrderByAggregateInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
    quantity?: SortOrder
    bought?: SortOrder
  }

  export type Shopping_List_IngredientAvgOrderByAggregateInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
  }

  export type Shopping_List_IngredientMaxOrderByAggregateInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
    quantity?: SortOrder
    bought?: SortOrder
  }

  export type Shopping_List_IngredientMinOrderByAggregateInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
    quantity?: SortOrder
    bought?: SortOrder
  }

  export type Shopping_List_IngredientSumOrderByAggregateInput = {
    id_ShoppingList?: SortOrder
    id_Ingredients?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlannerCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type PlannerAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type PlannerMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type PlannerMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type PlannerSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type FavouriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type PlannerCreateNestedOneWithoutUserInput = {
    create?: XOR<PlannerCreateWithoutUserInput, PlannerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlannerCreateOrConnectWithoutUserInput
    connect?: PlannerWhereUniqueInput
  }

  export type RecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type Shopping_ListCreateNestedManyWithoutUserInput = {
    create?: XOR<Shopping_ListCreateWithoutUserInput, Shopping_ListUncheckedCreateWithoutUserInput> | Shopping_ListCreateWithoutUserInput[] | Shopping_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Shopping_ListCreateOrConnectWithoutUserInput | Shopping_ListCreateOrConnectWithoutUserInput[]
    createMany?: Shopping_ListCreateManyUserInputEnvelope
    connect?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type PlannerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlannerCreateWithoutUserInput, PlannerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlannerCreateOrConnectWithoutUserInput
    connect?: PlannerWhereUniqueInput
  }

  export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
  }

  export type Shopping_ListUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Shopping_ListCreateWithoutUserInput, Shopping_ListUncheckedCreateWithoutUserInput> | Shopping_ListCreateWithoutUserInput[] | Shopping_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Shopping_ListCreateOrConnectWithoutUserInput | Shopping_ListCreateOrConnectWithoutUserInput[]
    createMany?: Shopping_ListCreateManyUserInputEnvelope
    connect?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type FavouriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type PlannerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlannerCreateWithoutUserInput, PlannerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlannerCreateOrConnectWithoutUserInput
    upsert?: PlannerUpsertWithoutUserInput
    disconnect?: PlannerWhereInput | boolean
    delete?: PlannerWhereInput | boolean
    connect?: PlannerWhereUniqueInput
    update?: XOR<XOR<PlannerUpdateToOneWithWhereWithoutUserInput, PlannerUpdateWithoutUserInput>, PlannerUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput | RecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUserInput | RecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUserInput | RecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type Shopping_ListUpdateManyWithoutUserNestedInput = {
    create?: XOR<Shopping_ListCreateWithoutUserInput, Shopping_ListUncheckedCreateWithoutUserInput> | Shopping_ListCreateWithoutUserInput[] | Shopping_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Shopping_ListCreateOrConnectWithoutUserInput | Shopping_ListCreateOrConnectWithoutUserInput[]
    upsert?: Shopping_ListUpsertWithWhereUniqueWithoutUserInput | Shopping_ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Shopping_ListCreateManyUserInputEnvelope
    set?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    disconnect?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    delete?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    connect?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    update?: Shopping_ListUpdateWithWhereUniqueWithoutUserInput | Shopping_ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Shopping_ListUpdateManyWithWhereWithoutUserInput | Shopping_ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Shopping_ListScalarWhereInput | Shopping_ListScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavouriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type PlannerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlannerCreateWithoutUserInput, PlannerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlannerCreateOrConnectWithoutUserInput
    upsert?: PlannerUpsertWithoutUserInput
    disconnect?: PlannerWhereInput | boolean
    delete?: PlannerWhereInput | boolean
    connect?: PlannerWhereUniqueInput
    update?: XOR<XOR<PlannerUpdateToOneWithWhereWithoutUserInput, PlannerUpdateWithoutUserInput>, PlannerUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput> | RecipeCreateWithoutUserInput[] | RecipeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecipeCreateOrConnectWithoutUserInput | RecipeCreateOrConnectWithoutUserInput[]
    upsert?: RecipeUpsertWithWhereUniqueWithoutUserInput | RecipeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecipeCreateManyUserInputEnvelope
    set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[]
    update?: RecipeUpdateWithWhereUniqueWithoutUserInput | RecipeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecipeUpdateManyWithWhereWithoutUserInput | RecipeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
  }

  export type Shopping_ListUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Shopping_ListCreateWithoutUserInput, Shopping_ListUncheckedCreateWithoutUserInput> | Shopping_ListCreateWithoutUserInput[] | Shopping_ListUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Shopping_ListCreateOrConnectWithoutUserInput | Shopping_ListCreateOrConnectWithoutUserInput[]
    upsert?: Shopping_ListUpsertWithWhereUniqueWithoutUserInput | Shopping_ListUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Shopping_ListCreateManyUserInputEnvelope
    set?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    disconnect?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    delete?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    connect?: Shopping_ListWhereUniqueInput | Shopping_ListWhereUniqueInput[]
    update?: Shopping_ListUpdateWithWhereUniqueWithoutUserInput | Shopping_ListUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Shopping_ListUpdateManyWithWhereWithoutUserInput | Shopping_ListUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Shopping_ListScalarWhereInput | Shopping_ListScalarWhereInput[]
  }

  export type FavouriteCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type InstructionsCreateNestedManyWithoutRecipeInput = {
    create?: XOR<InstructionsCreateWithoutRecipeInput, InstructionsUncheckedCreateWithoutRecipeInput> | InstructionsCreateWithoutRecipeInput[] | InstructionsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutRecipeInput | InstructionsCreateOrConnectWithoutRecipeInput[]
    createMany?: InstructionsCreateManyRecipeInputEnvelope
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    connect?: UserWhereUniqueInput
  }

  export type Recipe_IngredientCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Recipe_IngredientCreateWithoutRecipeInput, Recipe_IngredientUncheckedCreateWithoutRecipeInput> | Recipe_IngredientCreateWithoutRecipeInput[] | Recipe_IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutRecipeInput | Recipe_IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: Recipe_IngredientCreateManyRecipeInputEnvelope
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
  }

  export type Recipe_TypeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Recipe_TypeCreateWithoutRecipeInput, Recipe_TypeUncheckedCreateWithoutRecipeInput> | Recipe_TypeCreateWithoutRecipeInput[] | Recipe_TypeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutRecipeInput | Recipe_TypeCreateOrConnectWithoutRecipeInput[]
    createMany?: Recipe_TypeCreateManyRecipeInputEnvelope
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type InstructionsUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<InstructionsCreateWithoutRecipeInput, InstructionsUncheckedCreateWithoutRecipeInput> | InstructionsCreateWithoutRecipeInput[] | InstructionsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutRecipeInput | InstructionsCreateOrConnectWithoutRecipeInput[]
    createMany?: InstructionsCreateManyRecipeInputEnvelope
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
  }

  export type Recipe_IngredientUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Recipe_IngredientCreateWithoutRecipeInput, Recipe_IngredientUncheckedCreateWithoutRecipeInput> | Recipe_IngredientCreateWithoutRecipeInput[] | Recipe_IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutRecipeInput | Recipe_IngredientCreateOrConnectWithoutRecipeInput[]
    createMany?: Recipe_IngredientCreateManyRecipeInputEnvelope
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
  }

  export type Recipe_TypeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Recipe_TypeCreateWithoutRecipeInput, Recipe_TypeUncheckedCreateWithoutRecipeInput> | Recipe_TypeCreateWithoutRecipeInput[] | Recipe_TypeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutRecipeInput | Recipe_TypeCreateOrConnectWithoutRecipeInput[]
    createMany?: Recipe_TypeCreateManyRecipeInputEnvelope
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FavouriteUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutRecipeInput | FavouriteUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutRecipeInput | FavouriteUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutRecipeInput | FavouriteUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type InstructionsUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<InstructionsCreateWithoutRecipeInput, InstructionsUncheckedCreateWithoutRecipeInput> | InstructionsCreateWithoutRecipeInput[] | InstructionsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutRecipeInput | InstructionsCreateOrConnectWithoutRecipeInput[]
    upsert?: InstructionsUpsertWithWhereUniqueWithoutRecipeInput | InstructionsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: InstructionsCreateManyRecipeInputEnvelope
    set?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    disconnect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    delete?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    update?: InstructionsUpdateWithWhereUniqueWithoutRecipeInput | InstructionsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: InstructionsUpdateManyWithWhereWithoutRecipeInput | InstructionsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecipesInput
    upsert?: UserUpsertWithoutRecipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecipesInput, UserUpdateWithoutRecipesInput>, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type Recipe_IngredientUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Recipe_IngredientCreateWithoutRecipeInput, Recipe_IngredientUncheckedCreateWithoutRecipeInput> | Recipe_IngredientCreateWithoutRecipeInput[] | Recipe_IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutRecipeInput | Recipe_IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: Recipe_IngredientUpsertWithWhereUniqueWithoutRecipeInput | Recipe_IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: Recipe_IngredientCreateManyRecipeInputEnvelope
    set?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    disconnect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    delete?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    update?: Recipe_IngredientUpdateWithWhereUniqueWithoutRecipeInput | Recipe_IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: Recipe_IngredientUpdateManyWithWhereWithoutRecipeInput | Recipe_IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: Recipe_IngredientScalarWhereInput | Recipe_IngredientScalarWhereInput[]
  }

  export type Recipe_TypeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Recipe_TypeCreateWithoutRecipeInput, Recipe_TypeUncheckedCreateWithoutRecipeInput> | Recipe_TypeCreateWithoutRecipeInput[] | Recipe_TypeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutRecipeInput | Recipe_TypeCreateOrConnectWithoutRecipeInput[]
    upsert?: Recipe_TypeUpsertWithWhereUniqueWithoutRecipeInput | Recipe_TypeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: Recipe_TypeCreateManyRecipeInputEnvelope
    set?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    disconnect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    delete?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    update?: Recipe_TypeUpdateWithWhereUniqueWithoutRecipeInput | Recipe_TypeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: Recipe_TypeUpdateManyWithWhereWithoutRecipeInput | Recipe_TypeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: Recipe_TypeScalarWhereInput | Recipe_TypeScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput> | FavouriteCreateWithoutRecipeInput[] | FavouriteUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutRecipeInput | FavouriteCreateOrConnectWithoutRecipeInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutRecipeInput | FavouriteUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: FavouriteCreateManyRecipeInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutRecipeInput | FavouriteUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutRecipeInput | FavouriteUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type InstructionsUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<InstructionsCreateWithoutRecipeInput, InstructionsUncheckedCreateWithoutRecipeInput> | InstructionsCreateWithoutRecipeInput[] | InstructionsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: InstructionsCreateOrConnectWithoutRecipeInput | InstructionsCreateOrConnectWithoutRecipeInput[]
    upsert?: InstructionsUpsertWithWhereUniqueWithoutRecipeInput | InstructionsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: InstructionsCreateManyRecipeInputEnvelope
    set?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    disconnect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    delete?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    connect?: InstructionsWhereUniqueInput | InstructionsWhereUniqueInput[]
    update?: InstructionsUpdateWithWhereUniqueWithoutRecipeInput | InstructionsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: InstructionsUpdateManyWithWhereWithoutRecipeInput | InstructionsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
  }

  export type Recipe_IngredientUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Recipe_IngredientCreateWithoutRecipeInput, Recipe_IngredientUncheckedCreateWithoutRecipeInput> | Recipe_IngredientCreateWithoutRecipeInput[] | Recipe_IngredientUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutRecipeInput | Recipe_IngredientCreateOrConnectWithoutRecipeInput[]
    upsert?: Recipe_IngredientUpsertWithWhereUniqueWithoutRecipeInput | Recipe_IngredientUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: Recipe_IngredientCreateManyRecipeInputEnvelope
    set?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    disconnect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    delete?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    update?: Recipe_IngredientUpdateWithWhereUniqueWithoutRecipeInput | Recipe_IngredientUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: Recipe_IngredientUpdateManyWithWhereWithoutRecipeInput | Recipe_IngredientUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: Recipe_IngredientScalarWhereInput | Recipe_IngredientScalarWhereInput[]
  }

  export type Recipe_TypeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Recipe_TypeCreateWithoutRecipeInput, Recipe_TypeUncheckedCreateWithoutRecipeInput> | Recipe_TypeCreateWithoutRecipeInput[] | Recipe_TypeUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutRecipeInput | Recipe_TypeCreateOrConnectWithoutRecipeInput[]
    upsert?: Recipe_TypeUpsertWithWhereUniqueWithoutRecipeInput | Recipe_TypeUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: Recipe_TypeCreateManyRecipeInputEnvelope
    set?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    disconnect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    delete?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    update?: Recipe_TypeUpdateWithWhereUniqueWithoutRecipeInput | Recipe_TypeUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: Recipe_TypeUpdateManyWithWhereWithoutRecipeInput | Recipe_TypeUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: Recipe_TypeScalarWhereInput | Recipe_TypeScalarWhereInput[]
  }

  export type RecipeCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavouritesInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFavouritesInput
    upsert?: RecipeUpsertWithoutFavouritesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutFavouritesInput, RecipeUpdateWithoutFavouritesInput>, RecipeUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    upsert?: UserUpsertWithoutFavouritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesInput, UserUpdateWithoutFavouritesInput>, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type Recipe_IngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<Recipe_IngredientCreateWithoutIngredientInput, Recipe_IngredientUncheckedCreateWithoutIngredientInput> | Recipe_IngredientCreateWithoutIngredientInput[] | Recipe_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutIngredientInput | Recipe_IngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: Recipe_IngredientCreateManyIngredientInputEnvelope
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
  }

  export type Shopping_List_IngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutIngredientInput, Shopping_List_IngredientUncheckedCreateWithoutIngredientInput> | Shopping_List_IngredientCreateWithoutIngredientInput[] | Shopping_List_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutIngredientInput | Shopping_List_IngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: Shopping_List_IngredientCreateManyIngredientInputEnvelope
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
  }

  export type Recipe_IngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<Recipe_IngredientCreateWithoutIngredientInput, Recipe_IngredientUncheckedCreateWithoutIngredientInput> | Recipe_IngredientCreateWithoutIngredientInput[] | Recipe_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutIngredientInput | Recipe_IngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: Recipe_IngredientCreateManyIngredientInputEnvelope
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
  }

  export type Shopping_List_IngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutIngredientInput, Shopping_List_IngredientUncheckedCreateWithoutIngredientInput> | Shopping_List_IngredientCreateWithoutIngredientInput[] | Shopping_List_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutIngredientInput | Shopping_List_IngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: Shopping_List_IngredientCreateManyIngredientInputEnvelope
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
  }

  export type Recipe_IngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<Recipe_IngredientCreateWithoutIngredientInput, Recipe_IngredientUncheckedCreateWithoutIngredientInput> | Recipe_IngredientCreateWithoutIngredientInput[] | Recipe_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutIngredientInput | Recipe_IngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: Recipe_IngredientUpsertWithWhereUniqueWithoutIngredientInput | Recipe_IngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: Recipe_IngredientCreateManyIngredientInputEnvelope
    set?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    disconnect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    delete?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    update?: Recipe_IngredientUpdateWithWhereUniqueWithoutIngredientInput | Recipe_IngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: Recipe_IngredientUpdateManyWithWhereWithoutIngredientInput | Recipe_IngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: Recipe_IngredientScalarWhereInput | Recipe_IngredientScalarWhereInput[]
  }

  export type Shopping_List_IngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutIngredientInput, Shopping_List_IngredientUncheckedCreateWithoutIngredientInput> | Shopping_List_IngredientCreateWithoutIngredientInput[] | Shopping_List_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutIngredientInput | Shopping_List_IngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: Shopping_List_IngredientUpsertWithWhereUniqueWithoutIngredientInput | Shopping_List_IngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: Shopping_List_IngredientCreateManyIngredientInputEnvelope
    set?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    disconnect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    delete?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    update?: Shopping_List_IngredientUpdateWithWhereUniqueWithoutIngredientInput | Shopping_List_IngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: Shopping_List_IngredientUpdateManyWithWhereWithoutIngredientInput | Shopping_List_IngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: Shopping_List_IngredientScalarWhereInput | Shopping_List_IngredientScalarWhereInput[]
  }

  export type Recipe_IngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<Recipe_IngredientCreateWithoutIngredientInput, Recipe_IngredientUncheckedCreateWithoutIngredientInput> | Recipe_IngredientCreateWithoutIngredientInput[] | Recipe_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Recipe_IngredientCreateOrConnectWithoutIngredientInput | Recipe_IngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: Recipe_IngredientUpsertWithWhereUniqueWithoutIngredientInput | Recipe_IngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: Recipe_IngredientCreateManyIngredientInputEnvelope
    set?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    disconnect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    delete?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    connect?: Recipe_IngredientWhereUniqueInput | Recipe_IngredientWhereUniqueInput[]
    update?: Recipe_IngredientUpdateWithWhereUniqueWithoutIngredientInput | Recipe_IngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: Recipe_IngredientUpdateManyWithWhereWithoutIngredientInput | Recipe_IngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: Recipe_IngredientScalarWhereInput | Recipe_IngredientScalarWhereInput[]
  }

  export type Shopping_List_IngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutIngredientInput, Shopping_List_IngredientUncheckedCreateWithoutIngredientInput> | Shopping_List_IngredientCreateWithoutIngredientInput[] | Shopping_List_IngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutIngredientInput | Shopping_List_IngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: Shopping_List_IngredientUpsertWithWhereUniqueWithoutIngredientInput | Shopping_List_IngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: Shopping_List_IngredientCreateManyIngredientInputEnvelope
    set?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    disconnect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    delete?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    update?: Shopping_List_IngredientUpdateWithWhereUniqueWithoutIngredientInput | Shopping_List_IngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: Shopping_List_IngredientUpdateManyWithWhereWithoutIngredientInput | Shopping_List_IngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: Shopping_List_IngredientScalarWhereInput | Shopping_List_IngredientScalarWhereInput[]
  }

  export type IngredientsCreateNestedOneWithoutRecipesInput = {
    create?: XOR<IngredientsCreateWithoutRecipesInput, IngredientsUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutRecipesInput
    connect?: IngredientsWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IngredientsUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<IngredientsCreateWithoutRecipesInput, IngredientsUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutRecipesInput
    upsert?: IngredientsUpsertWithoutRecipesInput
    connect?: IngredientsWhereUniqueInput
    update?: XOR<XOR<IngredientsUpdateToOneWithWhereWithoutRecipesInput, IngredientsUpdateWithoutRecipesInput>, IngredientsUncheckedUpdateWithoutRecipesInput>
  }

  export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutIngredientsInput
    upsert?: RecipeUpsertWithoutIngredientsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutIngredientsInput, RecipeUpdateWithoutIngredientsInput>, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeCreateNestedOneWithoutInstructionsInput = {
    create?: XOR<RecipeCreateWithoutInstructionsInput, RecipeUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutInstructionsInput
    connect?: RecipeWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutInstructionsNestedInput = {
    create?: XOR<RecipeCreateWithoutInstructionsInput, RecipeUncheckedCreateWithoutInstructionsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutInstructionsInput
    upsert?: RecipeUpsertWithoutInstructionsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutInstructionsInput, RecipeUpdateWithoutInstructionsInput>, RecipeUncheckedUpdateWithoutInstructionsInput>
  }

  export type Recipe_FilterCreateNestedOneWithoutRecipeInput = {
    create?: XOR<Recipe_FilterCreateWithoutRecipeInput, Recipe_FilterUncheckedCreateWithoutRecipeInput>
    connectOrCreate?: Recipe_FilterCreateOrConnectWithoutRecipeInput
    connect?: Recipe_FilterWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutRecipeTypesInput = {
    create?: XOR<RecipeCreateWithoutRecipeTypesInput, RecipeUncheckedCreateWithoutRecipeTypesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeTypesInput
    connect?: RecipeWhereUniqueInput
  }

  export type Recipe_FilterUpdateOneRequiredWithoutRecipeNestedInput = {
    create?: XOR<Recipe_FilterCreateWithoutRecipeInput, Recipe_FilterUncheckedCreateWithoutRecipeInput>
    connectOrCreate?: Recipe_FilterCreateOrConnectWithoutRecipeInput
    upsert?: Recipe_FilterUpsertWithoutRecipeInput
    connect?: Recipe_FilterWhereUniqueInput
    update?: XOR<XOR<Recipe_FilterUpdateToOneWithWhereWithoutRecipeInput, Recipe_FilterUpdateWithoutRecipeInput>, Recipe_FilterUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeUpdateOneRequiredWithoutRecipeTypesNestedInput = {
    create?: XOR<RecipeCreateWithoutRecipeTypesInput, RecipeUncheckedCreateWithoutRecipeTypesInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeTypesInput
    upsert?: RecipeUpsertWithoutRecipeTypesInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<XOR<RecipeUpdateToOneWithWhereWithoutRecipeTypesInput, RecipeUpdateWithoutRecipeTypesInput>, RecipeUncheckedUpdateWithoutRecipeTypesInput>
  }

  export type Recipe_TypeCreateNestedManyWithoutFilterInput = {
    create?: XOR<Recipe_TypeCreateWithoutFilterInput, Recipe_TypeUncheckedCreateWithoutFilterInput> | Recipe_TypeCreateWithoutFilterInput[] | Recipe_TypeUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutFilterInput | Recipe_TypeCreateOrConnectWithoutFilterInput[]
    createMany?: Recipe_TypeCreateManyFilterInputEnvelope
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
  }

  export type Recipe_TypeUncheckedCreateNestedManyWithoutFilterInput = {
    create?: XOR<Recipe_TypeCreateWithoutFilterInput, Recipe_TypeUncheckedCreateWithoutFilterInput> | Recipe_TypeCreateWithoutFilterInput[] | Recipe_TypeUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutFilterInput | Recipe_TypeCreateOrConnectWithoutFilterInput[]
    createMany?: Recipe_TypeCreateManyFilterInputEnvelope
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
  }

  export type Recipe_TypeUpdateManyWithoutFilterNestedInput = {
    create?: XOR<Recipe_TypeCreateWithoutFilterInput, Recipe_TypeUncheckedCreateWithoutFilterInput> | Recipe_TypeCreateWithoutFilterInput[] | Recipe_TypeUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutFilterInput | Recipe_TypeCreateOrConnectWithoutFilterInput[]
    upsert?: Recipe_TypeUpsertWithWhereUniqueWithoutFilterInput | Recipe_TypeUpsertWithWhereUniqueWithoutFilterInput[]
    createMany?: Recipe_TypeCreateManyFilterInputEnvelope
    set?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    disconnect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    delete?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    update?: Recipe_TypeUpdateWithWhereUniqueWithoutFilterInput | Recipe_TypeUpdateWithWhereUniqueWithoutFilterInput[]
    updateMany?: Recipe_TypeUpdateManyWithWhereWithoutFilterInput | Recipe_TypeUpdateManyWithWhereWithoutFilterInput[]
    deleteMany?: Recipe_TypeScalarWhereInput | Recipe_TypeScalarWhereInput[]
  }

  export type Recipe_TypeUncheckedUpdateManyWithoutFilterNestedInput = {
    create?: XOR<Recipe_TypeCreateWithoutFilterInput, Recipe_TypeUncheckedCreateWithoutFilterInput> | Recipe_TypeCreateWithoutFilterInput[] | Recipe_TypeUncheckedCreateWithoutFilterInput[]
    connectOrCreate?: Recipe_TypeCreateOrConnectWithoutFilterInput | Recipe_TypeCreateOrConnectWithoutFilterInput[]
    upsert?: Recipe_TypeUpsertWithWhereUniqueWithoutFilterInput | Recipe_TypeUpsertWithWhereUniqueWithoutFilterInput[]
    createMany?: Recipe_TypeCreateManyFilterInputEnvelope
    set?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    disconnect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    delete?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    connect?: Recipe_TypeWhereUniqueInput | Recipe_TypeWhereUniqueInput[]
    update?: Recipe_TypeUpdateWithWhereUniqueWithoutFilterInput | Recipe_TypeUpdateWithWhereUniqueWithoutFilterInput[]
    updateMany?: Recipe_TypeUpdateManyWithWhereWithoutFilterInput | Recipe_TypeUpdateManyWithWhereWithoutFilterInput[]
    deleteMany?: Recipe_TypeScalarWhereInput | Recipe_TypeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    connect?: UserWhereUniqueInput
  }

  export type Shopping_List_IngredientCreateNestedManyWithoutListInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutListInput, Shopping_List_IngredientUncheckedCreateWithoutListInput> | Shopping_List_IngredientCreateWithoutListInput[] | Shopping_List_IngredientUncheckedCreateWithoutListInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutListInput | Shopping_List_IngredientCreateOrConnectWithoutListInput[]
    createMany?: Shopping_List_IngredientCreateManyListInputEnvelope
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
  }

  export type Shopping_List_IngredientUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutListInput, Shopping_List_IngredientUncheckedCreateWithoutListInput> | Shopping_List_IngredientCreateWithoutListInput[] | Shopping_List_IngredientUncheckedCreateWithoutListInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutListInput | Shopping_List_IngredientCreateOrConnectWithoutListInput[]
    createMany?: Shopping_List_IngredientCreateManyListInputEnvelope
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    upsert?: UserUpsertWithoutListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListsInput, UserUpdateWithoutListsInput>, UserUncheckedUpdateWithoutListsInput>
  }

  export type Shopping_List_IngredientUpdateManyWithoutListNestedInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutListInput, Shopping_List_IngredientUncheckedCreateWithoutListInput> | Shopping_List_IngredientCreateWithoutListInput[] | Shopping_List_IngredientUncheckedCreateWithoutListInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutListInput | Shopping_List_IngredientCreateOrConnectWithoutListInput[]
    upsert?: Shopping_List_IngredientUpsertWithWhereUniqueWithoutListInput | Shopping_List_IngredientUpsertWithWhereUniqueWithoutListInput[]
    createMany?: Shopping_List_IngredientCreateManyListInputEnvelope
    set?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    disconnect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    delete?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    update?: Shopping_List_IngredientUpdateWithWhereUniqueWithoutListInput | Shopping_List_IngredientUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: Shopping_List_IngredientUpdateManyWithWhereWithoutListInput | Shopping_List_IngredientUpdateManyWithWhereWithoutListInput[]
    deleteMany?: Shopping_List_IngredientScalarWhereInput | Shopping_List_IngredientScalarWhereInput[]
  }

  export type Shopping_List_IngredientUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<Shopping_List_IngredientCreateWithoutListInput, Shopping_List_IngredientUncheckedCreateWithoutListInput> | Shopping_List_IngredientCreateWithoutListInput[] | Shopping_List_IngredientUncheckedCreateWithoutListInput[]
    connectOrCreate?: Shopping_List_IngredientCreateOrConnectWithoutListInput | Shopping_List_IngredientCreateOrConnectWithoutListInput[]
    upsert?: Shopping_List_IngredientUpsertWithWhereUniqueWithoutListInput | Shopping_List_IngredientUpsertWithWhereUniqueWithoutListInput[]
    createMany?: Shopping_List_IngredientCreateManyListInputEnvelope
    set?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    disconnect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    delete?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    connect?: Shopping_List_IngredientWhereUniqueInput | Shopping_List_IngredientWhereUniqueInput[]
    update?: Shopping_List_IngredientUpdateWithWhereUniqueWithoutListInput | Shopping_List_IngredientUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: Shopping_List_IngredientUpdateManyWithWhereWithoutListInput | Shopping_List_IngredientUpdateManyWithWhereWithoutListInput[]
    deleteMany?: Shopping_List_IngredientScalarWhereInput | Shopping_List_IngredientScalarWhereInput[]
  }

  export type IngredientsCreateNestedOneWithoutListInput = {
    create?: XOR<IngredientsCreateWithoutListInput, IngredientsUncheckedCreateWithoutListInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutListInput
    connect?: IngredientsWhereUniqueInput
  }

  export type Shopping_ListCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<Shopping_ListCreateWithoutIngredientsInput, Shopping_ListUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: Shopping_ListCreateOrConnectWithoutIngredientsInput
    connect?: Shopping_ListWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IngredientsUpdateOneRequiredWithoutListNestedInput = {
    create?: XOR<IngredientsCreateWithoutListInput, IngredientsUncheckedCreateWithoutListInput>
    connectOrCreate?: IngredientsCreateOrConnectWithoutListInput
    upsert?: IngredientsUpsertWithoutListInput
    connect?: IngredientsWhereUniqueInput
    update?: XOR<XOR<IngredientsUpdateToOneWithWhereWithoutListInput, IngredientsUpdateWithoutListInput>, IngredientsUncheckedUpdateWithoutListInput>
  }

  export type Shopping_ListUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<Shopping_ListCreateWithoutIngredientsInput, Shopping_ListUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: Shopping_ListCreateOrConnectWithoutIngredientsInput
    upsert?: Shopping_ListUpsertWithoutIngredientsInput
    connect?: Shopping_ListWhereUniqueInput
    update?: XOR<XOR<Shopping_ListUpdateToOneWithWhereWithoutIngredientsInput, Shopping_ListUpdateWithoutIngredientsInput>, Shopping_ListUncheckedUpdateWithoutIngredientsInput>
  }

  export type UserCreateNestedOneWithoutPlannerInput = {
    create?: XOR<UserCreateWithoutPlannerInput, UserUncheckedCreateWithoutPlannerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlannerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlannerNestedInput = {
    create?: XOR<UserCreateWithoutPlannerInput, UserUncheckedCreateWithoutPlannerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlannerInput
    upsert?: UserUpsertWithoutPlannerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlannerInput, UserUpdateWithoutPlannerInput>, UserUncheckedUpdateWithoutPlannerInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FavouriteCreateWithoutUserInput = {
    recipe: RecipeCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteUncheckedCreateWithoutUserInput = {
    id_recipe: number
  }

  export type FavouriteCreateOrConnectWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteCreateManyUserInputEnvelope = {
    data: FavouriteCreateManyUserInput | FavouriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlannerCreateWithoutUserInput = {

  }

  export type PlannerUncheckedCreateWithoutUserInput = {
    id?: number
  }

  export type PlannerCreateOrConnectWithoutUserInput = {
    where: PlannerWhereUniqueInput
    create: XOR<PlannerCreateWithoutUserInput, PlannerUncheckedCreateWithoutUserInput>
  }

  export type RecipeCreateWithoutUserInput = {
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    favourites?: FavouriteCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsCreateNestedManyWithoutRecipeInput
    ingredients?: Recipe_IngredientCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    favourites?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: Recipe_IngredientUncheckedCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUserInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeCreateManyUserInputEnvelope = {
    data: RecipeCreateManyUserInput | RecipeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Shopping_ListCreateWithoutUserInput = {
    ingredients?: Shopping_List_IngredientCreateNestedManyWithoutListInput
  }

  export type Shopping_ListUncheckedCreateWithoutUserInput = {
    id?: number
    ingredients?: Shopping_List_IngredientUncheckedCreateNestedManyWithoutListInput
  }

  export type Shopping_ListCreateOrConnectWithoutUserInput = {
    where: Shopping_ListWhereUniqueInput
    create: XOR<Shopping_ListCreateWithoutUserInput, Shopping_ListUncheckedCreateWithoutUserInput>
  }

  export type Shopping_ListCreateManyUserInputEnvelope = {
    data: Shopping_ListCreateManyUserInput | Shopping_ListCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutUserInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouriteScalarWhereInput = {
    AND?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    OR?: FavouriteScalarWhereInput[]
    NOT?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    id_user?: IntFilter<"Favourite"> | number
    id_recipe?: IntFilter<"Favourite"> | number
  }

  export type PlannerUpsertWithoutUserInput = {
    update: XOR<PlannerUpdateWithoutUserInput, PlannerUncheckedUpdateWithoutUserInput>
    create: XOR<PlannerCreateWithoutUserInput, PlannerUncheckedCreateWithoutUserInput>
    where?: PlannerWhereInput
  }

  export type PlannerUpdateToOneWithWhereWithoutUserInput = {
    where?: PlannerWhereInput
    data: XOR<PlannerUpdateWithoutUserInput, PlannerUncheckedUpdateWithoutUserInput>
  }

  export type PlannerUpdateWithoutUserInput = {

  }

  export type PlannerUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    update: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
    create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
  }

  export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: RecipeWhereUniqueInput
    data: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>
  }

  export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: RecipeScalarWhereInput
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutUserInput>
  }

  export type RecipeScalarWhereInput = {
    AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    OR?: RecipeScalarWhereInput[]
    NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[]
    id?: IntFilter<"Recipe"> | number
    name?: StringFilter<"Recipe"> | string
    description?: StringFilter<"Recipe"> | string
    difficulty?: StringFilter<"Recipe"> | string
    preparation_time?: IntFilter<"Recipe"> | number
    imageUrl?: StringNullableFilter<"Recipe"> | string | null
    UserId?: IntFilter<"Recipe"> | number
  }

  export type Shopping_ListUpsertWithWhereUniqueWithoutUserInput = {
    where: Shopping_ListWhereUniqueInput
    update: XOR<Shopping_ListUpdateWithoutUserInput, Shopping_ListUncheckedUpdateWithoutUserInput>
    create: XOR<Shopping_ListCreateWithoutUserInput, Shopping_ListUncheckedCreateWithoutUserInput>
  }

  export type Shopping_ListUpdateWithWhereUniqueWithoutUserInput = {
    where: Shopping_ListWhereUniqueInput
    data: XOR<Shopping_ListUpdateWithoutUserInput, Shopping_ListUncheckedUpdateWithoutUserInput>
  }

  export type Shopping_ListUpdateManyWithWhereWithoutUserInput = {
    where: Shopping_ListScalarWhereInput
    data: XOR<Shopping_ListUpdateManyMutationInput, Shopping_ListUncheckedUpdateManyWithoutUserInput>
  }

  export type Shopping_ListScalarWhereInput = {
    AND?: Shopping_ListScalarWhereInput | Shopping_ListScalarWhereInput[]
    OR?: Shopping_ListScalarWhereInput[]
    NOT?: Shopping_ListScalarWhereInput | Shopping_ListScalarWhereInput[]
    id?: IntFilter<"Shopping_List"> | number
    id_user?: IntFilter<"Shopping_List"> | number
  }

  export type FavouriteCreateWithoutRecipeInput = {
    user: UserCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteUncheckedCreateWithoutRecipeInput = {
    id_user: number
  }

  export type FavouriteCreateOrConnectWithoutRecipeInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput>
  }

  export type FavouriteCreateManyRecipeInputEnvelope = {
    data: FavouriteCreateManyRecipeInput | FavouriteCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type InstructionsCreateWithoutRecipeInput = {
    steps_numerations: string
    Description: string
  }

  export type InstructionsUncheckedCreateWithoutRecipeInput = {
    id?: number
    steps_numerations: string
    Description: string
  }

  export type InstructionsCreateOrConnectWithoutRecipeInput = {
    where: InstructionsWhereUniqueInput
    create: XOR<InstructionsCreateWithoutRecipeInput, InstructionsUncheckedCreateWithoutRecipeInput>
  }

  export type InstructionsCreateManyRecipeInputEnvelope = {
    data: InstructionsCreateManyRecipeInput | InstructionsCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRecipesInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteCreateNestedManyWithoutUserInput
    planner?: PlannerCreateNestedOneWithoutUserInput
    lists?: Shopping_ListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecipesInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
    planner?: PlannerUncheckedCreateNestedOneWithoutUserInput
    lists?: Shopping_ListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
  }

  export type Recipe_IngredientCreateWithoutRecipeInput = {
    measurement_unit: string
    quantity: number
    ingredient: IngredientsCreateNestedOneWithoutRecipesInput
  }

  export type Recipe_IngredientUncheckedCreateWithoutRecipeInput = {
    id_ingredient: number
    measurement_unit: string
    quantity: number
  }

  export type Recipe_IngredientCreateOrConnectWithoutRecipeInput = {
    where: Recipe_IngredientWhereUniqueInput
    create: XOR<Recipe_IngredientCreateWithoutRecipeInput, Recipe_IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type Recipe_IngredientCreateManyRecipeInputEnvelope = {
    data: Recipe_IngredientCreateManyRecipeInput | Recipe_IngredientCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type Recipe_TypeCreateWithoutRecipeInput = {
    filter: Recipe_FilterCreateNestedOneWithoutRecipeInput
  }

  export type Recipe_TypeUncheckedCreateWithoutRecipeInput = {
    id_RecipeType?: number
    id_recipeFilter: number
  }

  export type Recipe_TypeCreateOrConnectWithoutRecipeInput = {
    where: Recipe_TypeWhereUniqueInput
    create: XOR<Recipe_TypeCreateWithoutRecipeInput, Recipe_TypeUncheckedCreateWithoutRecipeInput>
  }

  export type Recipe_TypeCreateManyRecipeInputEnvelope = {
    data: Recipe_TypeCreateManyRecipeInput | Recipe_TypeCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutRecipeInput, FavouriteUncheckedUpdateWithoutRecipeInput>
    create: XOR<FavouriteCreateWithoutRecipeInput, FavouriteUncheckedCreateWithoutRecipeInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutRecipeInput, FavouriteUncheckedUpdateWithoutRecipeInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutRecipeInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutRecipeInput>
  }

  export type InstructionsUpsertWithWhereUniqueWithoutRecipeInput = {
    where: InstructionsWhereUniqueInput
    update: XOR<InstructionsUpdateWithoutRecipeInput, InstructionsUncheckedUpdateWithoutRecipeInput>
    create: XOR<InstructionsCreateWithoutRecipeInput, InstructionsUncheckedCreateWithoutRecipeInput>
  }

  export type InstructionsUpdateWithWhereUniqueWithoutRecipeInput = {
    where: InstructionsWhereUniqueInput
    data: XOR<InstructionsUpdateWithoutRecipeInput, InstructionsUncheckedUpdateWithoutRecipeInput>
  }

  export type InstructionsUpdateManyWithWhereWithoutRecipeInput = {
    where: InstructionsScalarWhereInput
    data: XOR<InstructionsUpdateManyMutationInput, InstructionsUncheckedUpdateManyWithoutRecipeInput>
  }

  export type InstructionsScalarWhereInput = {
    AND?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
    OR?: InstructionsScalarWhereInput[]
    NOT?: InstructionsScalarWhereInput | InstructionsScalarWhereInput[]
    id?: IntFilter<"Instructions"> | number
    id_recipe?: IntFilter<"Instructions"> | number
    steps_numerations?: StringFilter<"Instructions"> | string
    Description?: StringFilter<"Instructions"> | string
  }

  export type UserUpsertWithoutRecipesInput = {
    update: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
    create: XOR<UserCreateWithoutRecipesInput, UserUncheckedCreateWithoutRecipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecipesInput, UserUncheckedUpdateWithoutRecipesInput>
  }

  export type UserUpdateWithoutRecipesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
    planner?: PlannerUpdateOneWithoutUserNestedInput
    lists?: Shopping_ListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
    planner?: PlannerUncheckedUpdateOneWithoutUserNestedInput
    lists?: Shopping_ListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Recipe_IngredientUpsertWithWhereUniqueWithoutRecipeInput = {
    where: Recipe_IngredientWhereUniqueInput
    update: XOR<Recipe_IngredientUpdateWithoutRecipeInput, Recipe_IngredientUncheckedUpdateWithoutRecipeInput>
    create: XOR<Recipe_IngredientCreateWithoutRecipeInput, Recipe_IngredientUncheckedCreateWithoutRecipeInput>
  }

  export type Recipe_IngredientUpdateWithWhereUniqueWithoutRecipeInput = {
    where: Recipe_IngredientWhereUniqueInput
    data: XOR<Recipe_IngredientUpdateWithoutRecipeInput, Recipe_IngredientUncheckedUpdateWithoutRecipeInput>
  }

  export type Recipe_IngredientUpdateManyWithWhereWithoutRecipeInput = {
    where: Recipe_IngredientScalarWhereInput
    data: XOR<Recipe_IngredientUpdateManyMutationInput, Recipe_IngredientUncheckedUpdateManyWithoutRecipeInput>
  }

  export type Recipe_IngredientScalarWhereInput = {
    AND?: Recipe_IngredientScalarWhereInput | Recipe_IngredientScalarWhereInput[]
    OR?: Recipe_IngredientScalarWhereInput[]
    NOT?: Recipe_IngredientScalarWhereInput | Recipe_IngredientScalarWhereInput[]
    id_recipe?: IntFilter<"Recipe_Ingredient"> | number
    id_ingredient?: IntFilter<"Recipe_Ingredient"> | number
    measurement_unit?: StringFilter<"Recipe_Ingredient"> | string
    quantity?: FloatFilter<"Recipe_Ingredient"> | number
  }

  export type Recipe_TypeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: Recipe_TypeWhereUniqueInput
    update: XOR<Recipe_TypeUpdateWithoutRecipeInput, Recipe_TypeUncheckedUpdateWithoutRecipeInput>
    create: XOR<Recipe_TypeCreateWithoutRecipeInput, Recipe_TypeUncheckedCreateWithoutRecipeInput>
  }

  export type Recipe_TypeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: Recipe_TypeWhereUniqueInput
    data: XOR<Recipe_TypeUpdateWithoutRecipeInput, Recipe_TypeUncheckedUpdateWithoutRecipeInput>
  }

  export type Recipe_TypeUpdateManyWithWhereWithoutRecipeInput = {
    where: Recipe_TypeScalarWhereInput
    data: XOR<Recipe_TypeUpdateManyMutationInput, Recipe_TypeUncheckedUpdateManyWithoutRecipeInput>
  }

  export type Recipe_TypeScalarWhereInput = {
    AND?: Recipe_TypeScalarWhereInput | Recipe_TypeScalarWhereInput[]
    OR?: Recipe_TypeScalarWhereInput[]
    NOT?: Recipe_TypeScalarWhereInput | Recipe_TypeScalarWhereInput[]
    id_RecipeType?: IntFilter<"Recipe_Type"> | number
    id_recipe?: IntFilter<"Recipe_Type"> | number
    id_recipeFilter?: IntFilter<"Recipe_Type"> | number
  }

  export type RecipeCreateWithoutFavouritesInput = {
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    instructions?: InstructionsCreateNestedManyWithoutRecipeInput
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: Recipe_IngredientCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFavouritesInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    UserId: number
    instructions?: InstructionsUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: Recipe_IngredientUncheckedCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutFavouritesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
  }

  export type UserCreateWithoutFavouritesInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    planner?: PlannerCreateNestedOneWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutUserInput
    lists?: Shopping_ListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    planner?: PlannerUncheckedCreateNestedOneWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
    lists?: Shopping_ListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type RecipeUpsertWithoutFavouritesInput = {
    update: XOR<RecipeUpdateWithoutFavouritesInput, RecipeUncheckedUpdateWithoutFavouritesInput>
    create: XOR<RecipeCreateWithoutFavouritesInput, RecipeUncheckedCreateWithoutFavouritesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutFavouritesInput, RecipeUncheckedUpdateWithoutFavouritesInput>
  }

  export type RecipeUpdateWithoutFavouritesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: InstructionsUpdateManyWithoutRecipeNestedInput
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: Recipe_IngredientUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: IntFieldUpdateOperationsInput | number
    instructions?: InstructionsUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: Recipe_IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type UserUpsertWithoutFavouritesInput = {
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateWithoutFavouritesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    planner?: PlannerUpdateOneWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutUserNestedInput
    lists?: Shopping_ListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    planner?: PlannerUncheckedUpdateOneWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
    lists?: Shopping_ListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Recipe_IngredientCreateWithoutIngredientInput = {
    measurement_unit: string
    quantity: number
    recipe: RecipeCreateNestedOneWithoutIngredientsInput
  }

  export type Recipe_IngredientUncheckedCreateWithoutIngredientInput = {
    id_recipe: number
    measurement_unit: string
    quantity: number
  }

  export type Recipe_IngredientCreateOrConnectWithoutIngredientInput = {
    where: Recipe_IngredientWhereUniqueInput
    create: XOR<Recipe_IngredientCreateWithoutIngredientInput, Recipe_IngredientUncheckedCreateWithoutIngredientInput>
  }

  export type Recipe_IngredientCreateManyIngredientInputEnvelope = {
    data: Recipe_IngredientCreateManyIngredientInput | Recipe_IngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type Shopping_List_IngredientCreateWithoutIngredientInput = {
    quantity: string
    bought: boolean
    list: Shopping_ListCreateNestedOneWithoutIngredientsInput
  }

  export type Shopping_List_IngredientUncheckedCreateWithoutIngredientInput = {
    id_ShoppingList: number
    quantity: string
    bought: boolean
  }

  export type Shopping_List_IngredientCreateOrConnectWithoutIngredientInput = {
    where: Shopping_List_IngredientWhereUniqueInput
    create: XOR<Shopping_List_IngredientCreateWithoutIngredientInput, Shopping_List_IngredientUncheckedCreateWithoutIngredientInput>
  }

  export type Shopping_List_IngredientCreateManyIngredientInputEnvelope = {
    data: Shopping_List_IngredientCreateManyIngredientInput | Shopping_List_IngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type Recipe_IngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: Recipe_IngredientWhereUniqueInput
    update: XOR<Recipe_IngredientUpdateWithoutIngredientInput, Recipe_IngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<Recipe_IngredientCreateWithoutIngredientInput, Recipe_IngredientUncheckedCreateWithoutIngredientInput>
  }

  export type Recipe_IngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: Recipe_IngredientWhereUniqueInput
    data: XOR<Recipe_IngredientUpdateWithoutIngredientInput, Recipe_IngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type Recipe_IngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: Recipe_IngredientScalarWhereInput
    data: XOR<Recipe_IngredientUpdateManyMutationInput, Recipe_IngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type Shopping_List_IngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: Shopping_List_IngredientWhereUniqueInput
    update: XOR<Shopping_List_IngredientUpdateWithoutIngredientInput, Shopping_List_IngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<Shopping_List_IngredientCreateWithoutIngredientInput, Shopping_List_IngredientUncheckedCreateWithoutIngredientInput>
  }

  export type Shopping_List_IngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: Shopping_List_IngredientWhereUniqueInput
    data: XOR<Shopping_List_IngredientUpdateWithoutIngredientInput, Shopping_List_IngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type Shopping_List_IngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: Shopping_List_IngredientScalarWhereInput
    data: XOR<Shopping_List_IngredientUpdateManyMutationInput, Shopping_List_IngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type Shopping_List_IngredientScalarWhereInput = {
    AND?: Shopping_List_IngredientScalarWhereInput | Shopping_List_IngredientScalarWhereInput[]
    OR?: Shopping_List_IngredientScalarWhereInput[]
    NOT?: Shopping_List_IngredientScalarWhereInput | Shopping_List_IngredientScalarWhereInput[]
    id_ShoppingList?: IntFilter<"Shopping_List_Ingredient"> | number
    id_Ingredients?: IntFilter<"Shopping_List_Ingredient"> | number
    quantity?: StringFilter<"Shopping_List_Ingredient"> | string
    bought?: BoolFilter<"Shopping_List_Ingredient"> | boolean
  }

  export type IngredientsCreateWithoutRecipesInput = {
    name: string
    type: string
    images?: string | null
    list?: Shopping_List_IngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsUncheckedCreateWithoutRecipesInput = {
    id?: number
    name: string
    type: string
    images?: string | null
    list?: Shopping_List_IngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsCreateOrConnectWithoutRecipesInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutRecipesInput, IngredientsUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeCreateWithoutIngredientsInput = {
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    favourites?: FavouriteCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsCreateNestedManyWithoutRecipeInput
    user: UserCreateNestedOneWithoutRecipesInput
    recipeTypes?: Recipe_TypeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    UserId: number
    favourites?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsUncheckedCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientsUpsertWithoutRecipesInput = {
    update: XOR<IngredientsUpdateWithoutRecipesInput, IngredientsUncheckedUpdateWithoutRecipesInput>
    create: XOR<IngredientsCreateWithoutRecipesInput, IngredientsUncheckedCreateWithoutRecipesInput>
    where?: IngredientsWhereInput
  }

  export type IngredientsUpdateToOneWithWhereWithoutRecipesInput = {
    where?: IngredientsWhereInput
    data: XOR<IngredientsUpdateWithoutRecipesInput, IngredientsUncheckedUpdateWithoutRecipesInput>
  }

  export type IngredientsUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    list?: Shopping_List_IngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientsUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    list?: Shopping_List_IngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type RecipeUpsertWithoutIngredientsInput = {
    update: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
    create: XOR<RecipeCreateWithoutIngredientsInput, RecipeUncheckedCreateWithoutIngredientsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutIngredientsInput, RecipeUncheckedUpdateWithoutIngredientsInput>
  }

  export type RecipeUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favourites?: FavouriteUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUpdateManyWithoutRecipeNestedInput
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    recipeTypes?: Recipe_TypeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUncheckedUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateWithoutInstructionsInput = {
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    favourites?: FavouriteCreateNestedManyWithoutRecipeInput
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: Recipe_IngredientCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutInstructionsInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    UserId: number
    favourites?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: Recipe_IngredientUncheckedCreateNestedManyWithoutRecipeInput
    recipeTypes?: Recipe_TypeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutInstructionsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutInstructionsInput, RecipeUncheckedCreateWithoutInstructionsInput>
  }

  export type RecipeUpsertWithoutInstructionsInput = {
    update: XOR<RecipeUpdateWithoutInstructionsInput, RecipeUncheckedUpdateWithoutInstructionsInput>
    create: XOR<RecipeCreateWithoutInstructionsInput, RecipeUncheckedCreateWithoutInstructionsInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutInstructionsInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutInstructionsInput, RecipeUncheckedUpdateWithoutInstructionsInput>
  }

  export type RecipeUpdateWithoutInstructionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favourites?: FavouriteUpdateManyWithoutRecipeNestedInput
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: Recipe_IngredientUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutInstructionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: Recipe_IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type Recipe_FilterCreateWithoutRecipeInput = {
    Name: string
  }

  export type Recipe_FilterUncheckedCreateWithoutRecipeInput = {
    id_RecipeFilter?: number
    Name: string
  }

  export type Recipe_FilterCreateOrConnectWithoutRecipeInput = {
    where: Recipe_FilterWhereUniqueInput
    create: XOR<Recipe_FilterCreateWithoutRecipeInput, Recipe_FilterUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeCreateWithoutRecipeTypesInput = {
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    favourites?: FavouriteCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsCreateNestedManyWithoutRecipeInput
    user: UserCreateNestedOneWithoutRecipesInput
    ingredients?: Recipe_IngredientCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutRecipeTypesInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
    UserId: number
    favourites?: FavouriteUncheckedCreateNestedManyWithoutRecipeInput
    instructions?: InstructionsUncheckedCreateNestedManyWithoutRecipeInput
    ingredients?: Recipe_IngredientUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutRecipeTypesInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutRecipeTypesInput, RecipeUncheckedCreateWithoutRecipeTypesInput>
  }

  export type Recipe_FilterUpsertWithoutRecipeInput = {
    update: XOR<Recipe_FilterUpdateWithoutRecipeInput, Recipe_FilterUncheckedUpdateWithoutRecipeInput>
    create: XOR<Recipe_FilterCreateWithoutRecipeInput, Recipe_FilterUncheckedCreateWithoutRecipeInput>
    where?: Recipe_FilterWhereInput
  }

  export type Recipe_FilterUpdateToOneWithWhereWithoutRecipeInput = {
    where?: Recipe_FilterWhereInput
    data: XOR<Recipe_FilterUpdateWithoutRecipeInput, Recipe_FilterUncheckedUpdateWithoutRecipeInput>
  }

  export type Recipe_FilterUpdateWithoutRecipeInput = {
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type Recipe_FilterUncheckedUpdateWithoutRecipeInput = {
    id_RecipeFilter?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUpsertWithoutRecipeTypesInput = {
    update: XOR<RecipeUpdateWithoutRecipeTypesInput, RecipeUncheckedUpdateWithoutRecipeTypesInput>
    create: XOR<RecipeCreateWithoutRecipeTypesInput, RecipeUncheckedCreateWithoutRecipeTypesInput>
    where?: RecipeWhereInput
  }

  export type RecipeUpdateToOneWithWhereWithoutRecipeTypesInput = {
    where?: RecipeWhereInput
    data: XOR<RecipeUpdateWithoutRecipeTypesInput, RecipeUncheckedUpdateWithoutRecipeTypesInput>
  }

  export type RecipeUpdateWithoutRecipeTypesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favourites?: FavouriteUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUpdateManyWithoutRecipeNestedInput
    user?: UserUpdateOneRequiredWithoutRecipesNestedInput
    ingredients?: Recipe_IngredientUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutRecipeTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    UserId?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: Recipe_IngredientUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type Recipe_TypeCreateWithoutFilterInput = {
    recipe: RecipeCreateNestedOneWithoutRecipeTypesInput
  }

  export type Recipe_TypeUncheckedCreateWithoutFilterInput = {
    id_RecipeType?: number
    id_recipe: number
  }

  export type Recipe_TypeCreateOrConnectWithoutFilterInput = {
    where: Recipe_TypeWhereUniqueInput
    create: XOR<Recipe_TypeCreateWithoutFilterInput, Recipe_TypeUncheckedCreateWithoutFilterInput>
  }

  export type Recipe_TypeCreateManyFilterInputEnvelope = {
    data: Recipe_TypeCreateManyFilterInput | Recipe_TypeCreateManyFilterInput[]
    skipDuplicates?: boolean
  }

  export type Recipe_TypeUpsertWithWhereUniqueWithoutFilterInput = {
    where: Recipe_TypeWhereUniqueInput
    update: XOR<Recipe_TypeUpdateWithoutFilterInput, Recipe_TypeUncheckedUpdateWithoutFilterInput>
    create: XOR<Recipe_TypeCreateWithoutFilterInput, Recipe_TypeUncheckedCreateWithoutFilterInput>
  }

  export type Recipe_TypeUpdateWithWhereUniqueWithoutFilterInput = {
    where: Recipe_TypeWhereUniqueInput
    data: XOR<Recipe_TypeUpdateWithoutFilterInput, Recipe_TypeUncheckedUpdateWithoutFilterInput>
  }

  export type Recipe_TypeUpdateManyWithWhereWithoutFilterInput = {
    where: Recipe_TypeScalarWhereInput
    data: XOR<Recipe_TypeUpdateManyMutationInput, Recipe_TypeUncheckedUpdateManyWithoutFilterInput>
  }

  export type UserCreateWithoutListsInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteCreateNestedManyWithoutUserInput
    planner?: PlannerCreateNestedOneWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListsInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
    planner?: PlannerUncheckedCreateNestedOneWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type Shopping_List_IngredientCreateWithoutListInput = {
    quantity: string
    bought: boolean
    ingredient: IngredientsCreateNestedOneWithoutListInput
  }

  export type Shopping_List_IngredientUncheckedCreateWithoutListInput = {
    id_Ingredients: number
    quantity: string
    bought: boolean
  }

  export type Shopping_List_IngredientCreateOrConnectWithoutListInput = {
    where: Shopping_List_IngredientWhereUniqueInput
    create: XOR<Shopping_List_IngredientCreateWithoutListInput, Shopping_List_IngredientUncheckedCreateWithoutListInput>
  }

  export type Shopping_List_IngredientCreateManyListInputEnvelope = {
    data: Shopping_List_IngredientCreateManyListInput | Shopping_List_IngredientCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListsInput = {
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateWithoutListsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
    planner?: PlannerUpdateOneWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
    planner?: PlannerUncheckedUpdateOneWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Shopping_List_IngredientUpsertWithWhereUniqueWithoutListInput = {
    where: Shopping_List_IngredientWhereUniqueInput
    update: XOR<Shopping_List_IngredientUpdateWithoutListInput, Shopping_List_IngredientUncheckedUpdateWithoutListInput>
    create: XOR<Shopping_List_IngredientCreateWithoutListInput, Shopping_List_IngredientUncheckedCreateWithoutListInput>
  }

  export type Shopping_List_IngredientUpdateWithWhereUniqueWithoutListInput = {
    where: Shopping_List_IngredientWhereUniqueInput
    data: XOR<Shopping_List_IngredientUpdateWithoutListInput, Shopping_List_IngredientUncheckedUpdateWithoutListInput>
  }

  export type Shopping_List_IngredientUpdateManyWithWhereWithoutListInput = {
    where: Shopping_List_IngredientScalarWhereInput
    data: XOR<Shopping_List_IngredientUpdateManyMutationInput, Shopping_List_IngredientUncheckedUpdateManyWithoutListInput>
  }

  export type IngredientsCreateWithoutListInput = {
    name: string
    type: string
    images?: string | null
    recipes?: Recipe_IngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsUncheckedCreateWithoutListInput = {
    id?: number
    name: string
    type: string
    images?: string | null
    recipes?: Recipe_IngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientsCreateOrConnectWithoutListInput = {
    where: IngredientsWhereUniqueInput
    create: XOR<IngredientsCreateWithoutListInput, IngredientsUncheckedCreateWithoutListInput>
  }

  export type Shopping_ListCreateWithoutIngredientsInput = {
    user: UserCreateNestedOneWithoutListsInput
  }

  export type Shopping_ListUncheckedCreateWithoutIngredientsInput = {
    id?: number
    id_user: number
  }

  export type Shopping_ListCreateOrConnectWithoutIngredientsInput = {
    where: Shopping_ListWhereUniqueInput
    create: XOR<Shopping_ListCreateWithoutIngredientsInput, Shopping_ListUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientsUpsertWithoutListInput = {
    update: XOR<IngredientsUpdateWithoutListInput, IngredientsUncheckedUpdateWithoutListInput>
    create: XOR<IngredientsCreateWithoutListInput, IngredientsUncheckedCreateWithoutListInput>
    where?: IngredientsWhereInput
  }

  export type IngredientsUpdateToOneWithWhereWithoutListInput = {
    where?: IngredientsWhereInput
    data: XOR<IngredientsUpdateWithoutListInput, IngredientsUncheckedUpdateWithoutListInput>
  }

  export type IngredientsUpdateWithoutListInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: Recipe_IngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientsUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    images?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: Recipe_IngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type Shopping_ListUpsertWithoutIngredientsInput = {
    update: XOR<Shopping_ListUpdateWithoutIngredientsInput, Shopping_ListUncheckedUpdateWithoutIngredientsInput>
    create: XOR<Shopping_ListCreateWithoutIngredientsInput, Shopping_ListUncheckedCreateWithoutIngredientsInput>
    where?: Shopping_ListWhereInput
  }

  export type Shopping_ListUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: Shopping_ListWhereInput
    data: XOR<Shopping_ListUpdateWithoutIngredientsInput, Shopping_ListUncheckedUpdateWithoutIngredientsInput>
  }

  export type Shopping_ListUpdateWithoutIngredientsInput = {
    user?: UserUpdateOneRequiredWithoutListsNestedInput
  }

  export type Shopping_ListUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutPlannerInput = {
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteCreateNestedManyWithoutUserInput
    recipes?: RecipeCreateNestedManyWithoutUserInput
    lists?: Shopping_ListCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlannerInput = {
    id?: number
    username: string
    email: string
    password: string
    role?: $Enums.Role
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
    recipes?: RecipeUncheckedCreateNestedManyWithoutUserInput
    lists?: Shopping_ListUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlannerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlannerInput, UserUncheckedCreateWithoutPlannerInput>
  }

  export type UserUpsertWithoutPlannerInput = {
    update: XOR<UserUpdateWithoutPlannerInput, UserUncheckedUpdateWithoutPlannerInput>
    create: XOR<UserCreateWithoutPlannerInput, UserUncheckedCreateWithoutPlannerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlannerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlannerInput, UserUncheckedUpdateWithoutPlannerInput>
  }

  export type UserUpdateWithoutPlannerInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
    recipes?: RecipeUpdateManyWithoutUserNestedInput
    lists?: Shopping_ListUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlannerInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
    recipes?: RecipeUncheckedUpdateManyWithoutUserNestedInput
    lists?: Shopping_ListUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FavouriteCreateManyUserInput = {
    id_recipe: number
  }

  export type RecipeCreateManyUserInput = {
    id?: number
    name: string
    description: string
    difficulty: string
    preparation_time: number
    imageUrl?: string | null
  }

  export type Shopping_ListCreateManyUserInput = {
    id?: number
  }

  export type FavouriteUpdateWithoutUserInput = {
    recipe?: RecipeUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutUserInput = {
    id_recipe?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteUncheckedUpdateManyWithoutUserInput = {
    id_recipe?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favourites?: FavouriteUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUpdateManyWithoutRecipeNestedInput
    ingredients?: Recipe_IngredientUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favourites?: FavouriteUncheckedUpdateManyWithoutRecipeNestedInput
    instructions?: InstructionsUncheckedUpdateManyWithoutRecipeNestedInput
    ingredients?: Recipe_IngredientUncheckedUpdateManyWithoutRecipeNestedInput
    recipeTypes?: Recipe_TypeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    preparation_time?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shopping_ListUpdateWithoutUserInput = {
    ingredients?: Shopping_List_IngredientUpdateManyWithoutListNestedInput
  }

  export type Shopping_ListUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingredients?: Shopping_List_IngredientUncheckedUpdateManyWithoutListNestedInput
  }

  export type Shopping_ListUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteCreateManyRecipeInput = {
    id_user: number
  }

  export type InstructionsCreateManyRecipeInput = {
    id?: number
    steps_numerations: string
    Description: string
  }

  export type Recipe_IngredientCreateManyRecipeInput = {
    id_ingredient: number
    measurement_unit: string
    quantity: number
  }

  export type Recipe_TypeCreateManyRecipeInput = {
    id_RecipeType?: number
    id_recipeFilter: number
  }

  export type FavouriteUpdateWithoutRecipeInput = {
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutRecipeInput = {
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteUncheckedUpdateManyWithoutRecipeInput = {
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type InstructionsUpdateWithoutRecipeInput = {
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type InstructionsUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    steps_numerations?: StringFieldUpdateOperationsInput | string
    Description?: StringFieldUpdateOperationsInput | string
  }

  export type Recipe_IngredientUpdateWithoutRecipeInput = {
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    ingredient?: IngredientsUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type Recipe_IngredientUncheckedUpdateWithoutRecipeInput = {
    id_ingredient?: IntFieldUpdateOperationsInput | number
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type Recipe_IngredientUncheckedUpdateManyWithoutRecipeInput = {
    id_ingredient?: IntFieldUpdateOperationsInput | number
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type Recipe_TypeUpdateWithoutRecipeInput = {
    filter?: Recipe_FilterUpdateOneRequiredWithoutRecipeNestedInput
  }

  export type Recipe_TypeUncheckedUpdateWithoutRecipeInput = {
    id_RecipeType?: IntFieldUpdateOperationsInput | number
    id_recipeFilter?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_TypeUncheckedUpdateManyWithoutRecipeInput = {
    id_RecipeType?: IntFieldUpdateOperationsInput | number
    id_recipeFilter?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_IngredientCreateManyIngredientInput = {
    id_recipe: number
    measurement_unit: string
    quantity: number
  }

  export type Shopping_List_IngredientCreateManyIngredientInput = {
    id_ShoppingList: number
    quantity: string
    bought: boolean
  }

  export type Recipe_IngredientUpdateWithoutIngredientInput = {
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    recipe?: RecipeUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type Recipe_IngredientUncheckedUpdateWithoutIngredientInput = {
    id_recipe?: IntFieldUpdateOperationsInput | number
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type Recipe_IngredientUncheckedUpdateManyWithoutIngredientInput = {
    id_recipe?: IntFieldUpdateOperationsInput | number
    measurement_unit?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type Shopping_List_IngredientUpdateWithoutIngredientInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
    list?: Shopping_ListUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type Shopping_List_IngredientUncheckedUpdateWithoutIngredientInput = {
    id_ShoppingList?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Shopping_List_IngredientUncheckedUpdateManyWithoutIngredientInput = {
    id_ShoppingList?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Recipe_TypeCreateManyFilterInput = {
    id_RecipeType?: number
    id_recipe: number
  }

  export type Recipe_TypeUpdateWithoutFilterInput = {
    recipe?: RecipeUpdateOneRequiredWithoutRecipeTypesNestedInput
  }

  export type Recipe_TypeUncheckedUpdateWithoutFilterInput = {
    id_RecipeType?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
  }

  export type Recipe_TypeUncheckedUpdateManyWithoutFilterInput = {
    id_RecipeType?: IntFieldUpdateOperationsInput | number
    id_recipe?: IntFieldUpdateOperationsInput | number
  }

  export type Shopping_List_IngredientCreateManyListInput = {
    id_Ingredients: number
    quantity: string
    bought: boolean
  }

  export type Shopping_List_IngredientUpdateWithoutListInput = {
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
    ingredient?: IngredientsUpdateOneRequiredWithoutListNestedInput
  }

  export type Shopping_List_IngredientUncheckedUpdateWithoutListInput = {
    id_Ingredients?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Shopping_List_IngredientUncheckedUpdateManyWithoutListInput = {
    id_Ingredients?: IntFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    bought?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}