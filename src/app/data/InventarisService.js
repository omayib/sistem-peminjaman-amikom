/**
 * Created by omayib on 24/03/17.
 */
import request from '../data/request';

function get() {
    console.log("fetching.. invetaris...")
    return request({
        url:    `/inventaris`,
        method: 'GET'
    });
}

function create({content}){
    return request({
        url: 'inventaris',
        method:'POST',
        data:{
            content
        }
    })
}


const InventarisService = {
    get,create //, update, delete, etc. ...
}

export default InventarisService;