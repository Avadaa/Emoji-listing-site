import Api from '@/services/Api'

export default {
    getEmojis(asd) {
        return Api().post('api/emojis', asd);
    }
}