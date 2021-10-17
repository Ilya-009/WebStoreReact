//Returns a json object as a response
const fetchDataAsync = async (url)=>{

    // let response = await fetch(url, {
    //     method : 'GET',
    //     cors : 'cors',
    //     headers : {
    //         'Accept' : 'application/json',
    //         'Content-Type' : 'application/json',
    //         'content_val' : process.env.REACT_APP_GET_VALUE
    //     }
    // });
    // return await response.json();

    return [
        {
            ID: 0,
            Name: "Good 1",
            Description: "Good 1 description",
            Colors: "Red, Pink, Black",
            Discount: 0,
            ImgUrl: "https://images.wbstatic.net/c246x328/new/25900000/25905681-1.jpg",
            Price: 100
        },
        {
            ID: 1,
            Name: "Good 2",
            Description: "Good 2 description",
            Colors: "Red, Black, Yellow",
            Discount: 10,
            ImgUrl: "https://images.wbstatic.net/c246x328/new/25900000/25905681-1.jpg",
            Price: 200
        },
    ];
}

export default fetchDataAsync;
