import Api from '@/services/Api'

export default {
    getEmojis() {
        return Api().post('api/emojis');
    },
    getSidebar() {
        return Api().post('api/sidebar');
    }
}