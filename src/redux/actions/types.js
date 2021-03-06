export const resetpassword = {
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE'
};

export const loginTypes = {
  LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};
export const signupType = {
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_ERROR: "SIGNUP_ERROR",
  IS_LOADING: "IS_LOADING"
};

export const articleTypes = {
  CREATE_ARTICLE_SUCCESS: 'CREATE_ARTICLE_SUCCESS',
  CREATE_ARTICLE_FAIL: 'CREATE_ARTICLE_FAIL',
  FETCH_ARTICLE: 'FETCH_ARTICLE'
};

export const socialTypes = {
  FACEBOOK_AUTH: 'FACEBOOK_AUTH',
  GOOGLE_AUTH: 'GOOGLE_AUTH',
  FACEBOOK_FAIL: 'FACEBOOK_FAIL',
  GOOGLE_FAIL: 'GOOGLE_FAIL'
};

export const rateArticleTypes = {
  RATE_ARTICLE: 'RATE_ARTICLE'
};

export const profileTypes = {
  IS_LOADING: 'IS_LOADING',
  PROFILE_VIEW: 'USER_REQUEST_VIEW',
  PROFILE_VIEW_FAILED: 'PROFILE_VIEW_FAILD',
  EDIT_PROFILE: 'USER_REQUEST_EDIT',
  FAIL_EDIT: 'USER_FAIL_EDIT'
};

export const articlesTypes = {
  FETCH_ARTICLES: 'FETCH_ARTICLES'
};

export const likeTypes = {
  LIKE_ARTICLE_SUCCESS: 'LIKE_ARTICLE_SUCCESS',
  LIKE_ARTICLE_REVOKE: 'LIKE_ARTICLE_REVOKE',
  LIKE_ARTICLE_DISLIKE: 'LIKE_ARTICLE_DISLIKE',
  LIKE_ARTICLE_FAIL: 'LIKE_ARTICLE_FAIL'
};

export const dislikeTypes = {
  DISLIKE_ARTICLE_SUCCESS: 'DISLIKE_ARTICLE_SUCCESS',
  DISLIKE_ARTICLE_REVOKE: 'DISLIKE_ARTICLE_REVOKE',
  DISLIKE_ARTICLE_LIKE: 'DISLIKE_ARTICLE_LIKE',
  DISLIKE_ARTICLE_FAIL: 'DISLIKE_ARTICLE_FAIL'
};

export const commentTypes = {
  CREATE_COMMENTS: 'COMMENT_CREATE',
  FETCH_COMMENTS: 'COMMENT_FETCH',
  FETCH_COMMENTS_FAIL: 'FAIL_FETCH_COMMENT',
  CREATE_COMMENTS_FAIL: 'COMMENT_FAIL'
};

export const updateArticleTypes = {
  UPDATE_ARTICLE_SUCCESS: "UPDATE_ARTICLE_SUCCESS",
  UPDATE_ARTICLE_ERROR: "UPDATE_ARTICLE_ERROR"
};

export const deleteArticleTypes = {
  DELETE_ARTICLE_SUCCESS: "DELETE_ARTICLE_SUCCESS",
  DELETE_ARTICLE_ERROR: "DELETE_ARTICLE_ERROR"
};

export const bookmarkTypes = {
  CREATE_BOOKMARK_SUCCESS: 'CREATE_BOOKMARK_SUCCESS',
  CREATE_BOOKMARK_ALREADY: 'CREATE_BOOKMARK_ALREADY',
  CREATE_BOOKMARK_NO_ARTICLE: 'CREATE_BOOKMARK_NO_ARTICLE',
  CREATE_BOOKMARK_FAIL: 'CREATE_BOOKMARK_FAIL'
};

export const notificationTypes = {
  NOTIFICATIONS: 'NOTIFICATIONS'
};

export const searchTypes = {
  RESULTS: 'RESULTS'
};
