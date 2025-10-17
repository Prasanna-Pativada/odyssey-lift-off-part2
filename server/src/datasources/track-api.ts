import { RESTDataSource } from "@apollo/datasource-rest";
<<<<<<< HEAD
import { TrackModel, AuthorModel } from "../models";
 
export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
   
  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }
   
  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
=======
import { TrackModel, AuthorModel } from "../models"

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
}
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
