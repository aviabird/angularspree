import { environment } from "../environments/environment";
import { CustomConfig } from "ng2-ui-auth";


export const GOOGLE_CLIENT_ID = '493384436662-adfvbtv8otrc25kplnldokq4tlar545j.apps.googleusercontent.com';

export class OAuthConfig extends CustomConfig {
  defaultHeaders = { 'Content-Type': 'application/json' };
  providers = {
    google: { clientId: GOOGLE_CLIENT_ID, url: `${environment.API_ENDPOINT}auth/google` }
  };
}

