import {
  SEARCH_PODCAST_REQUEST_STARTED,
  SEARCH_PODCAST_SUCCESS,
  SEARCH_PODCAST_FAILED,
  SEARCH_URL_CHANGE,
} from "../actions/homePageActionTypes";

import isURL from "validator/lib/isURL";
import isEmpty from "validator/lib/isEmpty";

import { AnyAction } from "redux";

export interface Podcast {
  name: string,
  author:string,
  genres: string[],
  image: string,
  totalEpisodes: number,
  releaseDate: string,
  issRssAvailable: boolean,
  summary: string,
  lastEpisodeReleaseDate: string,
}

export interface homePageState {
  podcast: any; // Throws an error if changed to type Podcast
  loading: boolean;
  searchUrl: string;
  extractedIdFromInput: string;
  isSearchButtonActive: boolean;
  validationMessage: string;
  error: string;
};

const initialState: homePageState = {
  podcast: {
    name: "",
    author: "",
    genres: [],
    image: "",
    totalEpisodes: null,
    releaseDate: "",
    issRssAvailable: null,
    summary: "",
    lastEpisodeReleaseDate: "",
  },
  loading: false,
  searchUrl: "",
  extractedIdFromInput: "",
  isSearchButtonActive: false,
  validationMessage: "",
  error: "",
};

export const homePageReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_PODCAST_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_PODCAST_SUCCESS:
      return {
        ...state,
        podcast: action.payload,
        loading: false,
      };
    case SEARCH_PODCAST_FAILED:
      return {
        ...state,
        podcast: {},
        loading: false,
        error: action.payload,
      };
    case SEARCH_URL_CHANGE:
      const searchUrl = action.payload;
      const idMatchResults = searchUrl.match(/\d+$/);
      
      const updatedStateWithValidations: homePageState = {...state, searchUrl};
      
      if (isEmpty(searchUrl)) {
        updatedStateWithValidations.validationMessage = "Empty URL";
      } 
      else if (isURL(searchUrl) && idMatchResults) {
        updatedStateWithValidations.validationMessage = "";
        updatedStateWithValidations.isSearchButtonActive = true;
        updatedStateWithValidations.extractedIdFromInput = idMatchResults[0];
      }
      else {
        updatedStateWithValidations.validationMessage = "Invalid URL";
        updatedStateWithValidations.isSearchButtonActive = false;
      }      
      return updatedStateWithValidations;

    default:
      return state;
  }
};

export default homePageReducer;