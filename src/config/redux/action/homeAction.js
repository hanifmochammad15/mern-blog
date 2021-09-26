import Axios from 'axios'

export const setDataBlog = (page) => (dispatch)=>{
    //return (dispatch) => {
        Axios.get(`http://localhost:4080/v1/blog/posts?page=${page}&perPage=2`)
        .then(result => {
            const responseAPI = result.data;
            console.log('data API', responseAPI);
            dispatch({type: 'UPDATE_DATA_BLOG', payload : responseAPI.data });
            dispatch({
                type: 'UPDATE_PAGE',
                payload : {
                    currentPage : responseAPI.currentPage ,
                    totalPage : Math.ceil(responseAPI.total_data / responseAPI.perPage )
                }
            });
        })
        .catch(err => {
            console.log('error', err);
        })
    //}
}
