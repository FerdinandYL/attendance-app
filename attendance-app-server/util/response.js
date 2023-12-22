export const successResponse = (res, data) => {
    return res.status(200).json({
        'Status' : 200,
        'Data' : data,
    });
}

export const failedResponse = (res, err) => {
    return res.status(400).json({
        'Status' : 400,
        'Message' : err,
    });
}

export const unauthorizedResponse = (res) => {
    return res.status(440).json({
        'Status' : 440,
        'Message' : "Unauthorized Access",
    });
}