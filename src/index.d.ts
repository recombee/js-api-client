export module "recombee-js-api-client" {
    /**
     * Base class for errors that occur because of errors in requests reported by API or because of a timeout
     */
    export class ApiError extends Error {
      /**
       * @param message - Message of the exception.
       */
      constructor(
        message: string
      );
    }

    /**
     * Error thrown when a request did not succeed (did not return 200 or 201)
     */
    export class ResponseError extends ApiError {
      /**
       * @param request - Request which caused the exception.
       * @param statusCode - The returned status code.
       * @param message - Error message from the API.
       */
      constructor(
        request: Request,
        statusCode: number,
        message: string
      );
    }

    /**
     * Error thrown when a request is not processed within the timeout
     */
    export class TimeoutError extends ApiError {
      /**
       * @param request - Request which caused the exception.
       */
      constructor(
        request: Request
      );
    }

    /**
     * Base class for all the requests
     */
    export class Request {
      /**
       * @param method - GET/PUT/POST/DELETE.
       * @param path - Path to the endpoint.
       * @param timeout - Timeout in milliseconds.
       */
      constructor(
        method: "GET" | "PUT" | "POST" | "DELETE",
        path: string,
        timeout: number,
        ensureHttps: boolean
      );

      method: "GET" | "PUT" | "POST" | "DELETE";
      path: string;
      timeout: number;
      ensureHttps: boolean;

      protected __response_type: any;
    }

    /**
     * In many cases, it may be desirable to execute multiple requests at once. For example, when synchronizing the catalog of items in a periodical manner, you would have to execute a sequence of thousands of separate POST requests, which is very ineffective and may take a very long time to complete. Most notably, network latencies can make execution of such sequence very slow and even if executed in multiple parallel threads, there will still be unreasonable overhead caused by the HTTP(s). To avoid the mentioned problems, batch processing may be used, encapsulating a sequence of requests into a single HTTPS request.
     * Batch processing allows you to submit arbitrary sequence of requests and the batch may combine different types of requests arbitrarily as well.
     * Note that the status code of the batch request itself is 200 even if the individual requests result in error – you have to inspect the code values in the resulting array.
      */
    export class Batch extends Request {
      /**
       * @param requests - Array containing the requests.
       * @param optional - Optional parameters given as an object (allowed parameters: distinctRecomms).
       */
      constructor(
        requests: Request[],
        optional?: {
          distinctRecomms?: boolean
        }
      );

      protected __response_type: BatchResponse;

      /**
       * Get body parameters
       *
       * @returns The values of body parameters (name of parameter: value of the parameter)
       */
      bodyParameters(): {
        requests: BatchedRequest[];
        distinctRecomms?: boolean;
      }

      _request_to_batch_object(
        req: Request
      ): BatchedRequest
    }


  export type BatchedRequest = {
    method: string;
    path: string;
    params?: { [key: string]: unknown };
  }

  export type ApiClientOptions = {
    baseUri?: string;
    region?: string;
    useHttps?: boolean;
    async?: boolean;
  }

  export type BatchResponse = {
    code: number;
    json: any;
  }[];

  /**
    * Client for sending requests to Recombee and getting replies
    */
  export class ApiClient {
    /**
     * @param databaseId - ID of your database.
     * @param publicToken - Corresponding public token.
     * @param options - Other custom options.
     */
    constructor(
      databaseId: string,
      publicToken: string,
      options?: ApiClientOptions
    );


    _getRegionalBaseUri(
      region: string
    ): string;

    _getBaseUri(): string;

    /**
     * Send the request to Recombee
     *
     * @param request - Request to be sent.
     * @param callback - Optional callback.
     * @returns Promise if callback is omitted, otherwise void.
     */
    send<TRequest extends Request>(
      request: TRequest, // @ts-expect-error
      callback?: (error: ResponseError | null, response?: TRequest["__response_type"]) => void // @ts-expect-error
    ): Promise<TRequest["__response_type"]>;

    _signUrl(
      req_part: string
    ): string
  }

  type Response = RecommendationResponse | SearchResponse;

  export type Recommendation = {
    id: string;
    values?: { [key: string]: unknown };
  }

  export type RecommendationResponse = {
    recommId: string;
    recomms: Recommendation[];
    numberNextRecommsCalls?: number;
    abGroup?: string;
  }

  export type SearchResponse = {
    recommId: string;
    recomms: Recommendation[];
    numberNextRecommsCalls?: number;
    abGroup?: string;
  }

    /**
     * Merges interactions (purchases, ratings, bookmarks, detail views ...) of two different users under a single user ID. This is especially useful for online e-commerce applications working with anonymous users identified by unique tokens such as the session ID. In such applications, it may often happen that a user owns a persistent account, yet accesses the system anonymously while, e.g., putting items into a shopping cart. At some point in time, such as when the user wishes to confirm the purchase, (s)he logs into the system using his/her username and password. The interactions made under anonymous session ID then become connected with the persistent account, and merging these two becomes desirable.
     * Merging happens between two users referred to as the *target* and the *source*. After the merge, all the interactions of the source user are attributed to the target user, and the source user is **deleted**.
     */
    export class MergeUsers extends Request {
      /**
       * @param targetUserId - ID of the target user.
       * @param sourceUserId - ID of the source user.
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        targetUserId: string,
        sourceUserId: string,
        optional?: {
          /** Sets whether the user *targetUserId* should be created if not present in the database. */
          cascadeCreate?: boolean;
        }
      );

      targetUserId: string;
      sourceUserId: string;
      cascadeCreate?: boolean;
      protected __response_type: string;

      bodyParameters(): {
      };

      queryParameters(): {
        cascadeCreate?: boolean;
      };
    }

    /**
     * Adds a detail view of the given item made by the given user.
     */
    export class AddDetailView extends Request {
      /**
       * @param userId - User who viewed the item
       * @param itemId - Viewed item
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        itemId: string,
        optional?: {
          /** UTC timestamp of the view as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
          timestamp?: string | number;
          /** Duration of the view */
          duration?: number;
          /** Sets whether the given user/item should be created if not present in the database. */
          cascadeCreate?: boolean;
          /** If this detail view is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
          recommId?: string;
          /** A dictionary of additional data for the interaction. */
          additionalData?: { [key: string]: unknown };
        }
      );

      userId: string;
      itemId: string;
      timestamp?: string | number;
      duration?: number;
      cascadeCreate?: boolean;
      recommId?: string;
      additionalData?: { [key: string]: unknown };
      protected __response_type: string;

      bodyParameters(): {
        userId: string;
        itemId: string;
        timestamp?: string | number;
        duration?: number;
        cascadeCreate?: boolean;
        recommId?: string;
        additionalData?: { [key: string]: unknown };
      };

      queryParameters(): {
      };
    }

    /**
     * Adds a purchase of the given item made by the given user.
     */
    export class AddPurchase extends Request {
      /**
       * @param userId - User who purchased the item
       * @param itemId - Purchased item
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        itemId: string,
        optional?: {
          /** UTC timestamp of the purchase as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
          timestamp?: string | number;
          /** Sets whether the given user/item should be created if not present in the database. */
          cascadeCreate?: boolean;
          /** Amount (number) of purchased items. The default is 1. For example, if `user-x` purchases two `item-y` during a single order (session...), the `amount` should equal 2. */
          amount?: number;
          /** Price paid by the user for the item. If `amount` is greater than 1, the sum of prices of all the items should be given. */
          price?: number;
          /** Your profit from the purchased item. The profit is natural in the e-commerce domain (for example, if `user-x` purchases `item-y` for $100 and the gross margin is 30 %, then the profit is $30) but is also applicable in other domains (for example, at a news company it may be income from a displayed advertisement on article page). If `amount` is greater than 1, the sum of profit of all the items should be given. */
          profit?: number;
          /** If this purchase is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
          recommId?: string;
          /** A dictionary of additional data for the interaction. */
          additionalData?: { [key: string]: unknown };
        }
      );

      userId: string;
      itemId: string;
      timestamp?: string | number;
      cascadeCreate?: boolean;
      amount?: number;
      price?: number;
      profit?: number;
      recommId?: string;
      additionalData?: { [key: string]: unknown };
      protected __response_type: string;

      bodyParameters(): {
        userId: string;
        itemId: string;
        timestamp?: string | number;
        cascadeCreate?: boolean;
        amount?: number;
        price?: number;
        profit?: number;
        recommId?: string;
        additionalData?: { [key: string]: unknown };
      };

      queryParameters(): {
      };
    }

    /**
     * Adds a rating of the given item made by the given user.
     */
    export class AddRating extends Request {
      /**
       * @param userId - User who submitted the rating
       * @param itemId - Rated item
       * @param rating - Rating rescaled to interval [-1.0,1.0], where -1.0 means the worst rating possible, 0.0 means neutral, and 1.0 means absolutely positive rating. For example, in the case of 5-star evaluations, rating = (numStars-3)/2 formula may be used for the conversion.
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        itemId: string,
        rating: number,
        optional?: {
          /** UTC timestamp of the rating as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
          timestamp?: string | number;
          /** Sets whether the given user/item should be created if not present in the database. */
          cascadeCreate?: boolean;
          /** If this rating is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
          recommId?: string;
          /** A dictionary of additional data for the interaction. */
          additionalData?: { [key: string]: unknown };
        }
      );

      userId: string;
      itemId: string;
      rating: number;
      timestamp?: string | number;
      cascadeCreate?: boolean;
      recommId?: string;
      additionalData?: { [key: string]: unknown };
      protected __response_type: string;

      bodyParameters(): {
        userId: string;
        itemId: string;
        rating: number;
        timestamp?: string | number;
        cascadeCreate?: boolean;
        recommId?: string;
        additionalData?: { [key: string]: unknown };
      };

      queryParameters(): {
      };
    }

    /**
     * Adds a cart addition of the given item made by the given user.
     */
    export class AddCartAddition extends Request {
      /**
       * @param userId - User who added the item to the cart
       * @param itemId - Item added to the cart
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        itemId: string,
        optional?: {
          /** UTC timestamp of the cart addition as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
          timestamp?: string | number;
          /** Sets whether the given user/item should be created if not present in the database. */
          cascadeCreate?: boolean;
          /** Amount (number) added to cart. The default is 1. For example, if `user-x` adds two `item-y` during a single order (session...), the `amount` should equal 2. */
          amount?: number;
          /** Price of the added item. If `amount` is greater than 1, the sum of prices of all the items should be given. */
          price?: number;
          /** If this cart addition is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
          recommId?: string;
          /** A dictionary of additional data for the interaction. */
          additionalData?: { [key: string]: unknown };
        }
      );

      userId: string;
      itemId: string;
      timestamp?: string | number;
      cascadeCreate?: boolean;
      amount?: number;
      price?: number;
      recommId?: string;
      additionalData?: { [key: string]: unknown };
      protected __response_type: string;

      bodyParameters(): {
        userId: string;
        itemId: string;
        timestamp?: string | number;
        cascadeCreate?: boolean;
        amount?: number;
        price?: number;
        recommId?: string;
        additionalData?: { [key: string]: unknown };
      };

      queryParameters(): {
      };
    }

    /**
     * Adds a bookmark of the given item made by the given user.
     */
    export class AddBookmark extends Request {
      /**
       * @param userId - User who bookmarked the item
       * @param itemId - Bookmarked item
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        itemId: string,
        optional?: {
          /** UTC timestamp of the bookmark as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
          timestamp?: string | number;
          /** Sets whether the given user/item should be created if not present in the database. */
          cascadeCreate?: boolean;
          /** If this bookmark is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
          recommId?: string;
          /** A dictionary of additional data for the interaction. */
          additionalData?: { [key: string]: unknown };
        }
      );

      userId: string;
      itemId: string;
      timestamp?: string | number;
      cascadeCreate?: boolean;
      recommId?: string;
      additionalData?: { [key: string]: unknown };
      protected __response_type: string;

      bodyParameters(): {
        userId: string;
        itemId: string;
        timestamp?: string | number;
        cascadeCreate?: boolean;
        recommId?: string;
        additionalData?: { [key: string]: unknown };
      };

      queryParameters(): {
      };
    }

    /**
     * Sets viewed portion of an item (for example a video or article) by a user (at a session).
     * If you send a new request with the same (`userId`, `itemId`, `sessionId`), the portion gets updated.
     */
    export class SetViewPortion extends Request {
      /**
       * @param userId - User who viewed a portion of the item
       * @param itemId - Viewed item
       * @param portion - Viewed portion of the item (number between 0.0 (viewed nothing) and 1.0 (viewed full item) ). It should be the actual viewed part of the item, no matter the seeking. For example, if the user seeked immediately to half of the item and then viewed 10% of the item, the `portion` should still be `0.1`.
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        itemId: string,
        portion: number,
        optional?: {
          /** ID of the session in which the user viewed the item. Default is `null` (`None`, `nil`, `NULL` etc., depending on the language). */
          sessionId?: string;
          /** UTC timestamp of the rating as ISO8601-1 pattern or UTC epoch time. The default value is the current time. */
          timestamp?: string | number;
          /** Sets whether the given user/item should be created if not present in the database. */
          cascadeCreate?: boolean;
          /** If this view portion is based on a recommendation request, `recommId` is the id of the clicked recommendation. */
          recommId?: string;
          /** A dictionary of additional data for the interaction. */
          additionalData?: { [key: string]: unknown };
        }
      );

      userId: string;
      itemId: string;
      portion: number;
      sessionId?: string;
      timestamp?: string | number;
      cascadeCreate?: boolean;
      recommId?: string;
      additionalData?: { [key: string]: unknown };
      protected __response_type: string;

      bodyParameters(): {
        userId: string;
        itemId: string;
        portion: number;
        sessionId?: string;
        timestamp?: string | number;
        cascadeCreate?: boolean;
        recommId?: string;
        additionalData?: { [key: string]: unknown };
      };

      queryParameters(): {
      };
    }

    /**
     * Based on the user's past interactions (purchases, ratings, etc.) with the items, recommends top-N items that are most likely to be of high value for the given user.
     * The most typical use cases are recommendations on the homepage, in some "Picked just for you" section, or in email.
     * The returned items are sorted by relevance (the first item being the most relevant).
     * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
     * - Let Recombee know that this recommendation was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
     * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
     * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
     */
    export class RecommendItemsToUser extends Request {
      /**
       * @param userId - ID of the user for whom personalized recommendations are to be generated.
       * @param count - Number of items to be recommended (N for the top-N recommendation).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        count: number,
        optional?: {
          /** Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing". */
          scenario?: string;
          /** If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.  */
          returnProperties?: boolean;
          /** Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list. */
          includedProperties?: string[];
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** **Expert option** Real number from [0.0, 1.0], which determines how mutually dissimilar the recommended items should be. The default value is 0.0, i.e., no diversification. Value 1.0 means maximal diversification. */
          diversity?: number;
          /** **Expert option** Specifies the threshold of how relevant must the recommended items be to the user. Possible values one of: "low", "medium", "high". The default value is "low", meaning that the system attempts to recommend a number of items equal to *count* at any cost. If there is not enough data (such as interactions or item properties), this may even lead to bestseller-based recommendations to be appended to reach the full *count*. This behavior may be suppressed by using "medium" or "high" values. In such a case, the system only recommends items of at least the requested relevance and may return less than *count* items when there is not enough data to fulfill it. */
          minRelevance?: string;
          /** **Expert option** If your users browse the system in real-time, it may easily happen that you wish to offer them recommendations multiple times. Here comes the question: how much should the recommendations change? Should they remain the same, or should they rotate? Recombee API allows you to control this per request in a backward fashion. You may penalize an item for being recommended in the near past. For the specific user, `rotationRate=1` means maximal rotation, `rotationRate=0` means absolutely no rotation. You may also use, for example, `rotationRate=0.2` for only slight rotation of recommended items. Default: `0`. */
          rotationRate?: number;
          /** **Expert option** Taking *rotationRate* into account, specifies how long it takes for an item to recover from the penalization. For example, `rotationTime=7200.0` means that items recommended less than 2 hours ago are penalized. Default: `7200.0`. */
          rotationTime?: number;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      userId: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      returnProperties?: boolean;
      includedProperties?: string[];
      filter?: string;
      booster?: string;
      logic?: string | object;
      diversity?: number;
      minRelevance?: string;
      rotationRate?: number;
      rotationTime?: number;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: RecommendationResponse;

      bodyParameters(): {
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        returnProperties?: boolean;
        includedProperties?: string[];
        filter?: string;
        booster?: string;
        logic?: string | object;
        diversity?: number;
        minRelevance?: string;
        rotationRate?: number;
        rotationTime?: number;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

    /**
     * Recommends a set of items that are somehow related to one given item, *X*. A typical scenario is when the user *A* is viewing *X*. Then you may display items to the user that he might also be interested in. Recommend items to item request gives you Top-N such items, optionally taking the target user *A* into account.
     * The returned items are sorted by relevance (the first item being the most relevant).
     * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
     * - Let Recombee know that this recommendation was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
     * - Get subsequent recommended items when the user scrolls down (*infinite scroll*) or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
     * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
     */
    export class RecommendItemsToItem extends Request {
      /**
       * @param itemId - ID of the item for which the recommendations are to be generated.
       * @param targetUserId - ID of the user who will see the recommendations.
       * Specifying the *targetUserId* is beneficial because:
       * * It makes the recommendations personalized
       * * Allows the calculation of Actions and Conversions
       *   in the graphical user interface,
       *   as Recombee can pair the user who got recommendations
       *   and who afterward viewed/purchased an item.
       * If you insist on not specifying the user, pass `null`
       * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
       * Do not create some special dummy user for getting recommendations,
       * as it could mislead the recommendation models,
       * and result in wrong recommendations.
       * For anonymous/unregistered users, it is possible to use, for example, their session ID.
       * @param count - Number of items to be recommended (N for the top-N recommendation).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        itemId: string,
        targetUserId: string,
        count: number,
        optional?: {
          /** Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing". */
          scenario?: string;
          /** If an item of the given *itemId* or user of the given *targetUserId* doesn't exist in the database, it creates the missing entity/entities and returns some (non-personalized) recommendations. This allows, for example, rotations in the following recommendations for the user of the given *targetUserId*, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.  */
          returnProperties?: boolean;
          /** Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list. */
          includedProperties?: string[];
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** **Expert option** If *targetUserId* parameter is present, the recommendations are biased towards the given user. Using *userImpact*, you may control this bias. For an extreme case of `userImpact=0.0`, the interactions made by the user are not taken into account at all (with the exception of history-based blacklisting), for `userImpact=1.0`, you'll get a user-based recommendation. The default value is `0`. */
          userImpact?: number;
          /** **Expert option** Real number from [0.0, 1.0], which determines how mutually dissimilar the recommended items should be. The default value is 0.0, i.e., no diversification. Value 1.0 means maximal diversification. */
          diversity?: number;
          /** **Expert option** If the *targetUserId* is provided:  Specifies the threshold of how relevant must the recommended items be to the user. Possible values one of: "low", "medium", "high". The default value is "low", meaning that the system attempts to recommend a number of items equal to *count* at any cost. If there is not enough data (such as interactions or item properties), this may even lead to bestseller-based recommendations being appended to reach the full *count*. This behavior may be suppressed by using "medium" or "high" values. In such case, the system only recommends items of at least the requested relevance and may return less than *count* items when there is not enough data to fulfill it. */
          minRelevance?: string;
          /** **Expert option** If the *targetUserId* is provided: If your users browse the system in real-time, it may easily happen that you wish to offer them recommendations multiple times. Here comes the question: how much should the recommendations change? Should they remain the same, or should they rotate? Recombee API allows you to control this per request in a backward fashion. You may penalize an item for being recommended in the near past. For the specific user, `rotationRate=1` means maximal rotation, `rotationRate=0` means absolutely no rotation. You may also use, for example, `rotationRate=0.2` for only slight rotation of recommended items. */
          rotationRate?: number;
          /** **Expert option** If the *targetUserId* is provided: Taking *rotationRate* into account, specifies how long it takes for an item to recover from the penalization. For example, `rotationTime=7200.0` means that items recommended less than 2 hours ago are penalized. */
          rotationTime?: number;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      itemId: string;
      targetUserId: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      returnProperties?: boolean;
      includedProperties?: string[];
      filter?: string;
      booster?: string;
      logic?: string | object;
      userImpact?: number;
      diversity?: number;
      minRelevance?: string;
      rotationRate?: number;
      rotationTime?: number;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: RecommendationResponse;

      bodyParameters(): {
        targetUserId: string;
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        returnProperties?: boolean;
        includedProperties?: string[];
        filter?: string;
        booster?: string;
        logic?: string | object;
        userImpact?: number;
        diversity?: number;
        minRelevance?: string;
        rotationRate?: number;
        rotationTime?: number;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

    /**
     * Returns items that shall be shown to a user as next recommendations when the user e.g. scrolls the page down (*infinite scroll*) or goes to the next page.
     * It accepts `recommId` of a base recommendation request (e.g., request from the first page) and the number of items that shall be returned (`count`).
     * The base request can be one of:
     *   - [Recommend items to item](https://docs.recombee.com/api.html#recommend-items-to-item)
     *   - [Recommend items to user](https://docs.recombee.com/api.html#recommend-items-to-user)
     *   - [Search items](https://docs.recombee.com/api.html#search-items)
     * All the other parameters are inherited from the base request.
     * *Recommend next items* can be called many times for a single `recommId` and each call returns different (previously not recommended) items.
     * The number of *Recommend next items* calls performed so far is returned in the `numberNextRecommsCalls` field.
     * *Recommend next items* can be requested up to 30 minutes after the base request or a previous *Recommend next items* call.
     * For billing purposes, each call to *Recommend next items* is counted as a separate recommendation request.
     */
    export class RecommendNextItems extends Request {
      /**
       * @param recommId - ID of the base recommendation request for which next recommendations should be returned
       * @param count - Number of items to be recommended
       */
      constructor(
        recommId: string,
        count: number,
      );

      recommId: string;
      count: number;
      protected __response_type: RecommendationResponse;

      bodyParameters(): {
        count: number;
      };

      queryParameters(): {
      };
    }

    /**
     * Recommends the top Segments from a Segmentation for a particular user, based on the user's past interactions.
     * Based on the used Segmentation, this endpoint can be used for example for:
     *   - Recommending the top categories for the user
     *   - Recommending the top genres for the user
     *   - Recommending the top brands for the user
     *   - Recommending the top artists for the user
     * You need to set the used Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
     * The returned segments are sorted by relevance (first segment being the most relevant).
     * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
     */
    export class RecommendItemSegmentsToUser extends Request {
      /**
       * @param userId - ID of the user for whom personalized recommendations are to be generated.
       * @param count - Number of item segments to be recommended (N for the top-N recommendation).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        count: number,
        optional?: {
          /** Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing". */
          scenario?: string;
          /** If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      userId: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      filter?: string;
      booster?: string;
      logic?: string | object;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: RecommendationResponse;

      bodyParameters(): {
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        filter?: string;
        booster?: string;
        logic?: string | object;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

    /**
     * Recommends Segments from a Segmentation that are the most relevant to a particular item.
     * Based on the used Segmentation, this endpoint can be used for example for:
     *   - Recommending the related categories
     *   - Recommending the related genres
     *   - Recommending the related brands
     *   - Recommending the related artists
     * You need to set the used Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
     * The returned segments are sorted by relevance (first segment being the most relevant).
     * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
     */
    export class RecommendItemSegmentsToItem extends Request {
      /**
       * @param itemId - ID of the item for which the recommendations are to be generated.
       * @param targetUserId - ID of the user who will see the recommendations.
       * Specifying the *targetUserId* is beneficial because:
       * * It makes the recommendations personalized
       * * Allows the calculation of Actions and Conversions
       *   in the graphical user interface,
       *   as Recombee can pair the user who got recommendations
       *   and who afterward viewed/purchased an item.
       * If you insist on not specifying the user, pass `null`
       * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
       * Do not create some special dummy user for getting recommendations,
       * as it could mislead the recommendation models,
       * and result in wrong recommendations.
       * For anonymous/unregistered users, it is possible to use, for example, their session ID.
       * @param count - Number of item segments to be recommended (N for the top-N recommendation).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        itemId: string,
        targetUserId: string,
        count: number,
        optional?: {
          /** Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing". */
          scenario?: string;
          /** If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      itemId: string;
      targetUserId: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      filter?: string;
      booster?: string;
      logic?: string | object;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: RecommendationResponse;

      bodyParameters(): {
        targetUserId: string;
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        filter?: string;
        booster?: string;
        logic?: string | object;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

    /**
     * Recommends Segments from a result Segmentation that are the most relevant to a particular Segment from a context Segmentation.
     * Based on the used Segmentations, this endpoint can be used for example for:
     *   - Recommending the related brands to particular brand
     *   - Recommending the related brands to particular category
     *   - Recommending the related artists to a particular genre (assuming songs are the Items)
     * You need to set the used context and result Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
     * The returned segments are sorted by relevance (first segment being the most relevant).
     * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
     */
    export class RecommendItemSegmentsToItemSegment extends Request {
      /**
       * @param contextSegmentId - ID of the segment from `contextSegmentationId` for which the recommendations are to be generated.
       * @param targetUserId - ID of the user who will see the recommendations.
       * Specifying the *targetUserId* is beneficial because:
       * * It makes the recommendations personalized
       * * Allows the calculation of Actions and Conversions
       *   in the graphical user interface,
       *   as Recombee can pair the user who got recommendations
       *   and who afterward viewed/purchased an item.
       * If you insist on not specifying the user, pass `null`
       * (`None`, `nil`, `NULL` etc., depending on the language) to *targetUserId*.
       * Do not create some special dummy user for getting recommendations,
       * as it could mislead the recommendation models,
       * and result in wrong recommendations.
       * For anonymous/unregistered users, it is possible to use, for example, their session ID.
       * @param count - Number of item segments to be recommended (N for the top-N recommendation).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        contextSegmentId: string,
        targetUserId: string,
        count: number,
        optional?: {
          /** Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing". */
          scenario?: string;
          /** If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      contextSegmentId: string;
      targetUserId: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      filter?: string;
      booster?: string;
      logic?: string | object;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: RecommendationResponse;

      bodyParameters(): {
        contextSegmentId: string;
        targetUserId: string;
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        filter?: string;
        booster?: string;
        logic?: string | object;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

    /**
     * Full-text personalized search. The results are based on the provided `searchQuery` and also on the user's past interactions (purchases, ratings, etc.) with the items (items more suitable for the user are preferred in the results).
     * All the string and set item properties are indexed by the search engine.
     * This endpoint should be used in a search box on your website/app. It can be called multiple times as the user is typing the query in order to get the most viable suggestions based on the current state of the query, or once after submitting the whole query. 
     * The returned items are sorted by relevance (the first item being the most relevant).
     * Besides the recommended items, also a unique `recommId` is returned in the response. It can be used to:
     * - Let Recombee know that this search was successful (e.g., user clicked one of the recommended items). See [Reported metrics](https://docs.recombee.com/admin_ui.html#reported-metrics).
     * - Get subsequent search results when the user scrolls down or goes to the next page. See [Recommend Next Items](https://docs.recombee.com/api.html#recommend-next-items).
     * It is also possible to use POST HTTP method (for example in the case of a very long ReQL filter) - query parameters then become body parameters.
     */
    export class SearchItems extends Request {
      /**
       * @param userId - ID of the user for whom personalized search will be performed.
       * @param searchQuery - Search query provided by the user. It is used for the full-text search.
       * @param count - Number of items to be returned (N for the top-N results).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        searchQuery: string,
        count: number,
        optional?: {
          /** Scenario defines a particular search field in your user interface. */
          scenario?: string;
          /** If the user does not exist in the database, returns a list of non-personalized search results and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** With `returnProperties=true`, property values of the recommended items are returned along with their IDs in a JSON dictionary. The acquired property values can be used to easily display the recommended items to the user.  */
          returnProperties?: boolean;
          /** Allows specifying which properties should be returned when `returnProperties=true` is set. The properties are given as a comma-separated list. */
          includedProperties?: string[];
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to filter recommended items based on the values of their attributes. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression, which allows you to boost the recommendation rate of some items based on the values of their attributes. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      userId: string;
      searchQuery: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      returnProperties?: boolean;
      includedProperties?: string[];
      filter?: string;
      booster?: string;
      logic?: string | object;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: SearchResponse;

      bodyParameters(): {
        searchQuery: string;
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        returnProperties?: boolean;
        includedProperties?: string[];
        filter?: string;
        booster?: string;
        logic?: string | object;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

    /**
     * Full-text personalized search that returns Segments from a Segmentation. The results are based on the provided `searchQuery` and also on the user's past interactions (purchases, ratings, etc.).
     * Based on the used Segmentation, this endpoint can be used for example for:
     *   - Searching within categories or brands
     *   - Searching within genres or artists
     * For example if the user is searching for "iPhone" this endpoint can return "cell phones" category.
     * You need to set the used Segmentation the Admin UI in the Scenario settings prior to using this endpoint.
     * The returned segments are sorted by relevance (first segment being the most relevant).
     * It is also possible to use POST HTTP method (for example in case of very long ReQL filter) - query parameters then become body parameters.
     */
    export class SearchItemSegments extends Request {
      /**
       * @param userId - ID of the user for whom personalized search will be performed.
       * @param searchQuery - Search query provided by the user. It is used for the full-text search.
       * @param count - Number of segments to be returned (N for the top-N results).
       * @param optional - Optional parameters given as an object.
       */
      constructor(
        userId: string,
        searchQuery: string,
        count: number,
        optional?: {
          /** Scenario defines a particular application of recommendations. It can be, for example, "homepage", "cart", or "emailing". */
          scenario?: string;
          /** If the user does not exist in the database, returns a list of non-personalized recommendations and creates the user in the database. This allows, for example, rotations in the following recommendations for that user, as the user will be already known to the system. */
          cascadeCreate?: boolean;
          /** Boolean-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to filter recommended segments based on the `segmentationId`. */
          filter?: string;
          /** Number-returning [ReQL](https://docs.recombee.com/reql.html) expression which allows you to boost recommendation rate of some segments based on the `segmentationId`. */
          booster?: string;
          /** Logic specifies the particular behavior of the recommendation models. You can pick tailored logic for your domain and use case. */
          logic?: string | object;
          /** Dictionary of custom options. */
          expertSettings?: { [key: string]: unknown };
          /** If there is a custom AB-testing running, return the name of the group to which the request belongs. */
          returnAbGroup?: boolean;
        }
      );

      userId: string;
      searchQuery: string;
      count: number;
      scenario?: string;
      cascadeCreate?: boolean;
      filter?: string;
      booster?: string;
      logic?: string | object;
      expertSettings?: { [key: string]: unknown };
      returnAbGroup?: boolean;
      protected __response_type: SearchResponse;

      bodyParameters(): {
        searchQuery: string;
        count: number;
        scenario?: string;
        cascadeCreate?: boolean;
        filter?: string;
        booster?: string;
        logic?: string | object;
        expertSettings?: { [key: string]: unknown };
        returnAbGroup?: boolean;
      };

      queryParameters(): {
      };
    }

}