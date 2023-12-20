export const successResponse = (res, data) => {
    res.status(200).json({
        'Status' : 200,
        'Data' : data,
    });
}

export const failedResponse = (res, err) => {
    res.status(400).json({
        'Status' : 400,
        'Message' : err,
    });
}

export const unauthorizedResponse = (res) => {
    res.status(440).json({
        'Status' : 440,
        'Message' : "Unauthorized Access",
    });
}