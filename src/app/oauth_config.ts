import { environment } from './../environments/environment';

export const myAuthConfig = {
  providers: {
    google: {
      clientId: `682466898339-lh2psagi1s3pgo9h5unri91ogptom1os.apps.googleusercontent.com`,
      url: `${environment.config.prodApiEndpoint}auth/google`
    }
  }
}
