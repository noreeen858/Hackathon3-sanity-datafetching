export interface Products {
    _id :string;
    title:string;
    _type :"products"
    _image?:{
        asset:{
            _ref:string;
            _type:"image"
        }
    };
    price:number;
    description?:string;
    slug:{
    _type:"slug";
    current:string;
    }

}



// ////
// NEXT_PUBLIC_SANITY_PROJECT_ID="chlv9gul"
// NEXT_PUBLIC_SANITY_DATASET="production"
// NEXT_PUBLIC_SANITY_AUTH_TOKEN="skgjxZW1VOYOw1QHGARrWs6k4cL8a5kgmdhdW33L3TwCT4UCcZTSwER3qxO9PqO1Zgp6PKwwca3MKY59syV1JvOMk7K9LbJUSVoZAqsHX8owtrLqZ8PDQyz394sezre3M07RxpXCg4GlpF6hLsGK2HsAaZmEyHUKkZA6y62rmcAa0IBTP10v"