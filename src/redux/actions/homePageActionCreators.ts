import {
  SEARCH_PODCAST_REQUEST_STARTED,
  SEARCH_PODCAST_SUCCESS,
  SEARCH_PODCAST_FAILED,
  SEARCH_URL_CHANGE,
} from "./homePageActionTypes";

export const searchUrlChangeAction = (url: string) => {
  return {
    type: SEARCH_URL_CHANGE,
    payload: url,
  }  
};

const searchPodcastRequestAction = () => {
  return {
    type: SEARCH_PODCAST_REQUEST_STARTED,
  };
};

const searchPodcastSuccessAction = (podcast: object) => {
  return {
    type: SEARCH_PODCAST_SUCCESS,
    payload: podcast,
  };
};

const searchPodcastFailedAction = (error: string) => {
  return {
    type: SEARCH_PODCAST_FAILED,
    payload: error,
  };
};

export const fetchPodcastAction = (id: string, source: string = "apple") => {
  const lookupEndpoint = process.env.REACT_APP_BACKEND_ENDPOINT;
  
  return async (dispatch: any) => {
    dispatch(searchPodcastRequestAction());
    try {
      const queryParams = { source, id };
      const response = await fetch(lookupEndpoint + "/podcast?" + new URLSearchParams(queryParams));
      // manually handle erorr codes here or use axios
      const data = await response.json();
      dispatch(searchPodcastSuccessAction(data));
    } catch (error) {
      dispatch(searchPodcastFailedAction(String(error)));
    }
  };
};