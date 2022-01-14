


const Weather = (props) => {




    return (

        <div className="row ">
            <div className="mx-auto col-sm-6 col-md-6 bg-light my-5 shadow-lg p-3 mb-5 bg-body rounded">
                <div className="row">
                    <div className="col-6 d-flex align-items-center"> <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} className=" rounded mx-auto d-block " alt="city weather image"></img></div>
                    <div className="col-6">
                        <div className="row">
                      
                            <dl className="row py-2">
                            
                                <dt className="col-sm-6 py-2  ">City</dt>
                                <dd className="col-sm-6 py-2 lead">{props.city}</dd>

                                <dt className="col-sm-6 py-2  ">Weather Status</dt>
                                <dd className="col-sm-6 py-2 lead">
                                    {props.status}

                                </dd>

                                <dt className="col-sm-6 py-2  ">Temprature</dt>
                                <dd className="col-sm-6 py-2 lead">{props.temp} °</dd>

                                <dt className="col-sm-6 py-2  ">Humidity</dt>
                                <dd className="col-sm-6 py-2 lead"> % {props.humidity}</dd>

                                <dt className="col-sm-6 py-2  ">Feels Like Temprature</dt>
                                <dd className="col-sm-6 py-2 lead"> {props.feel} °</dd>

                                <dt className="col-sm-6 py-2  ">Max Temprature Today</dt>
                                <dd className="col-sm-6 py-2 lead"> {props.temp_max} ° </dd>

                                <dt className="col-sm-6 py-2  ">Min Temprature Today</dt>
                                <dd className="col-sm-6 py-2 lead"> {props.temp_min} °</dd>

                            </dl>
                           
                        </div>


                    </div>
                </div>


            </div>
        </div>
    );
};

export default Weather;