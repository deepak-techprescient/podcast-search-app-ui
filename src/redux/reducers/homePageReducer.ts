import {
  SEARCH_PODCAST_REQUEST_STARTED,
  SEARCH_PODCAST_SUCCESS,
  SEARCH_PODCAST_FAILED,
  SEARCH_URL_CHANGE,
  TOGGLE_SHOW_MORE_INFO,
} from "../actions/homePageActionTypes";

import isURL from "validator/lib/isURL";
import isEmpty from "validator/lib/isEmpty";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";

import { AnyAction } from "redux";

export interface Podcast {
  name: string,
  author:string,
  genres: string[],
  image: string,
  totalEpisodes: number,
  startDate: string,
  isRssAvailable: boolean,
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
  showMoreInfo: boolean;
  showMoreInfoButtonText: string;
};

const initialState: homePageState = {
  podcast: {
    name: "",
    author: "",
    genres: [],
    image: "",
    totalEpisodes: null,
    startDate: "",
    isRssAvailable: null,
    summary: "",
    lastEpisodeReleaseDate: "",
  },
  loading: false,
  searchUrl: "",
  extractedIdFromInput: "",
  isSearchButtonActive: false,
  validationMessage: "",
  error: "",
  showMoreInfo: false,
  showMoreInfoButtonText: "More info",
};

export const homePageReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEARCH_PODCAST_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
        showMoreInfo: initialState.showMoreInfo,
        showMoreInfoButtonText: initialState.showMoreInfoButtonText,
        error: action.payload,
      };
    case SEARCH_PODCAST_SUCCESS:
    dayjs.extend(utc);  
    const startDate = dayjs.utc(action.payload.startDate).format("MMMM D, YYYY")
    const lastEpisodeReleaseDate = dayjs.utc(action.payload.lastEpisodeReleaseDate).format(
      "MMMM D, YYYY"
    );  
    return {
        ...state,
        podcast: {
          ...action.payload,
          startDate: startDate,
          lastEpisodeReleaseDate: lastEpisodeReleaseDate,
        },
        loading: false,
        error: initialState.error,
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

    case TOGGLE_SHOW_MORE_INFO:
      const buttonText = state.showMoreInfo ? "More info" : "Hide more info";
      return {
        ...state,
        showMoreInfo: !state.showMoreInfo,
        showMoreInfoButtonText: buttonText,
      };
    default:
      return state;
  }
};

export default homePageReducer;