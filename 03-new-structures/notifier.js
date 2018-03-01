module.exports = (data, error, end) => {
    return {
        onData: data,
        onError: error,
        onEnd: end
    }
};