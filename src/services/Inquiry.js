import { api } from "./_emailjs_api"

class Inquiry {
  send (data) {
    return api.post('email/send', data)
  }
}

export default new Inquiry