export class WebSeries {
  constructor(title, director, stars, streamingPlatform) {
      this.title = title;
      this.director = director;
      this.stars = stars;
      this.streamingPlatform = streamingPlatform;
  }
  get getTitle(){
      return this.title;
  }
  get getDirector(){
      return this.director;
  }    
  get getStars(){
      return this.stars;
  }
  get getStreamingPlatform(){
      return this.streamingPlatform;
  }

  set setTitle(title){
      this.title = title;
  }
  set setDirector(director){
      this.director = director;
  }
  set setStars(stars){
      this.stars = stars;
  }
  set setStreamingPlatform(streamingPlatform){
      this.streamingPlatform = streamingPlatform;
  }
}
