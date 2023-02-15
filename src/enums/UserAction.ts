export enum UserActionKey {
    'UserCreatesCard',
    'UserGetsUserInfo',
    'UserModifiesCardData',
    'UserModifiesUserData',
    'UserReadsACard',
    'UserRemovesAccount',
    'UserRemovesCard',
    'UserSearchesForCards',
    'UserSignsUp',
    'UserSubscribesToCard',
    'UserTransfersCard',
    'UserUnsubscribesFromCard' ,
    'UserGetsUserSubscriptions',
}

export type UserAction = keyof typeof UserActionKey;

