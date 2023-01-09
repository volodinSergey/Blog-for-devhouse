import Axios from '@/api/axios'

const MediaService = {
    upload: async (file) => {
        const { data } = await Axios.post('/api/upload', file)

        return data
    }
}

export default MediaService