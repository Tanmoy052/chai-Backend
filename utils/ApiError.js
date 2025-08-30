class ApiError extends Error {
    constructor(message="something went wrong", statusCode=500) {
        super(message);
        this.statusCode = statusCode;
        this.data=null;
        this.message=message;
        this.success=false;
        this.error=this.error;

        if(stack) {
            this.stack=stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
