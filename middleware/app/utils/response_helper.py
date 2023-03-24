class ResponseHelper():
    """ HTTP response mapping Helper
    """
    @staticmethod
    def mappingResponse(success, data, errors, status):
        res = {
            "success": success,
            "data": data,
            "errors": errors,
            "status": status
        }
        return res
