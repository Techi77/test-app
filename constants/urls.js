const url = "http://mobile.karat-med.ru/";
const urlS = "https://mobile.karat-med.ru/";

const urlGoogle = "https://google.com";
const url_send_message = `${url}mob/send-message.php`;
const url_pages = `${urlS}wp-json/wp/v2/pages/24`;
const url_info_about_pages = `${urlS}wp-json/wp/v2/pages/2624`;
const url_policy = `${urlS}wp-json/wp/v2/pages/3`;
const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const urlActualVersion = `${urlS}mob/get-app-version.php`;
const urlAddFavoriteAlgorithmes = `${urlS}mob/add-favorite-algorithms_v2.php`;
const urlAddNewUser = `${urlS}mob/add-new-user.php`;
const urlAuth = `${urlS}wp-json/jwt-auth/v1/token?username=`;
const urlCategoryLibrary = `${urlS}category/library`;
const urlCategoryLibraryKlinRec = `${urlS}category/library/klin_rec/`;
const urlCheckLoginExists = `${urlS}mob/check-login-exists.php`;
const urlGetAlgorithmsAverageScores = `${urlS}mob/get-algorithms-average-scores.php`;
const urlGetFavoriteAlgorithmes = `${urlS}mob/get-favorite-algorithms_v2.php`;
const urlLibraryBooks = `${urlS}/wp-json/wp/v2/posts?categories=`;
const urlLibraryBooksPerPageSearch = `${urlLibraryBooks}3&per_page=100&search=`;
const urlLibraryCategory = `${urlS}/wp-json/wp/v2/categories?per_page=100&parent=8`;
const urlLibraryCategoryNoParent = `${urlS}wp-json/wp/v2/categories?per_page=100`;
const urlNews = `${urlS}/wp-json/wp/v2/posts?categories=2`;
const urlNumberOfUsers = `${urlS}mob/all-users_v2.php`;
const urlPosts = `${urlS}wp-json/wp/v2/posts/`;
const urlPostsWithCategories = `${urlS}wp-json/wp/v2/posts?per_page=100&categories=`;
const urlPostsWithCategories19 = `${urlPostsWithCategories}19`;
const urlPostsWithCategories118 = `${urlPostsWithCategories}118`;
const urlPostsWithCategories119 = `${urlPostsWithCategories}119`;
const urlPostsWithTags = `${urlS}wp-json/wp/v2/posts?per_page=100&tags=`;
const urlRetrieveUserPassword = `${urlS}mob/retrieve-user-password.php`;
const urlSendAlgorithmScore = `${urlS}mob/send-algorithm-score.php`;
const urlSetPushToken = `${urlS}wp-json/pushNatification/v2/set_token`;
const urlTags = `${urlS}wp-json/wp/v2/tags`;
const urlTagsPage100 = `${urlTags}?per_page=100`;
const urlUpdateUserDataV2 = `${urlS}mob/update-user-data_v2.php`;
const urlUploads = `${urlS}wp-content/uploads/`;


// ссылки на приложение в AppStore и GooglePlay
// eslint-disable-next-line max-len
const urlAppStoreKarat = "https://apps.apple.com/ru/app/%D0%BA%D0%B0%D1%80%D0%B0%D1%82-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82/id1435105331";
const urlGooglePlayKarat = "https://play.google.com/store/apps/details?id=pharmprosvet.karat&hl=ru&gl=US";

export {
  url,
  urlS,
  url_pages,
  url_info_about_pages,
  urlAuth,
  urlNews,
  urlLibraryBooks,
  urlLibraryCategory,
  emailReg,
  urlNumberOfUsers,
  url_policy,
  url_send_message,
  urlSetPushToken,
  urlGetFavoriteAlgorithmes,
  urlGoogle,
  urlPosts,
  urlUpdateUserDataV2,
  urlLibraryCategoryNoParent,
  urlPostsWithCategories,
  urlAddFavoriteAlgorithmes,
  urlTags,
  urlCategoryLibrary,
  urlCategoryLibraryKlinRec,
  urlLibraryBooksPerPageSearch,
  urlUploads,
  urlSendAlgorithmScore,
  urlPostsWithTags,
  urlTagsPage100,
  urlRetrieveUserPassword,
  urlGetAlgorithmsAverageScores,
  urlCheckLoginExists,
  urlAddNewUser,
  urlPostsWithCategories119,
  urlPostsWithCategories19,
  urlPostsWithCategories118,
  urlActualVersion,
  urlAppStoreKarat,
  urlGooglePlayKarat,
};
