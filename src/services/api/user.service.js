import { API } from './api.service';

export default class UserService {
  api = new API();
  constructor() {}

  async login(email, password) {
    let [err, data] = await this.api.post('/auth/sign_in', {
      email: email,
      password: password,
    })
    return [err, data];
  }


}