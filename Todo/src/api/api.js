import request from 'superagent';

export default api = {

    getLists: (id, token) => {
        return (
            request
            .get(`http://localhost:5000/api/users/${id}`)
            .set('Content-Type', 'application/json')
            .set('Authorization', token)
            .then(res => res )
        );
    }
};