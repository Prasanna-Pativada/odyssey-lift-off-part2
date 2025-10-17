import { RESTDataSource } from "@apollo/datasource-rest";
<<<<<<< HEAD
import { TrackModel, AuthorModel } from "../models"
=======
import { TrackModel, AuthorModel, ModuleModel } from "../models"
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }
<<<<<<< HEAD
=======

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }
>>>>>>> 35e2edfb2d127d0cfcc1783015508a9433b33d0e
}
