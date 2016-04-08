import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class UploadService{
    constructor(private http: Http){ }
    /*
    This does nothing more than fetching the policy and signature from a node backend
    Check this for more info:
    http://stackoverflow.com/questions/18476217/amazon-s3-post-api-and-signing-a-policy-with-nodejs
     */
    getPolicy(directory){
        console.log('fetching Policy and Signature');
        let params = JSON.stringify({directory: directory});
        let headers = new Headers();

        headers.append('Content-Type','application/json');
        return this.http.post('http://127.0.0.1/api/aws3',
        params,
            {
                headers: headers
            })
            .map(response => response.json());

    }
}