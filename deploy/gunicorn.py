limit_request_line = 4094
graceful_timeout = 15
capture_output = True
errorlog = "-"
worker_class = "uvicorn.workers.UvicornWorker"

bind = "0.0.0.0:5000"
reload = True
timeout = 30
