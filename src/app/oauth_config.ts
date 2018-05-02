import { environment } from './../environments/environment';
import { IPartialConfigOptions } from 'ng2-ui-auth';

export const myAuthConfig: IPartialConfigOptions = {
  providers: {
    google: {
      clientId: `682466898339-lh2psagi1s3pgo9h5unri91ogptom1os.apps.googleusercontent.com`,
      url: `${environment.config.prodApiEndpoint}/auth/google`
    }
  }
}
