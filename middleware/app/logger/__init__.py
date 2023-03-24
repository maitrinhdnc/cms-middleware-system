import logging
import os

# DEBUG: Detailed information, typically of interest only when diagnosing problems.
# INFO: Confirmation that things are working as expected.
# WARNING: An indication that something unexpected happened, or indicative of some problem in the near future (e.g. ‘disk space low’). The software is still working as expected.
# ERROR: Due to a more serious problem, the software has not been able to perform some function.
# CRITICAL: A serious error, indicating that the program itself may be unable to continue running.

_logger = logging.getLogger(__name__)
_logger.setLevel(logging.DEBUG)

formatter = logging.Formatter('[%(levelname)s] | %(name)s | %(asctime)s | %(message)s')

# Output log file
file_handler = logging.FileHandler(os.path.join(os.getcwd(), 'app', 'logger', 'logging.log'), encoding="utf-8")
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(formatter)

# Console log output
stream_handler = logging.StreamHandler()
stream_handler.setLevel(logging.DEBUG)
stream_handler.setFormatter(formatter)

_logger.addHandler(file_handler)
_logger.addHandler(stream_handler)

# FORMAT = '[%(levelname)s] | %(name)s | %(asctime)s | %(message)s'
# logging.basicConfig(filename='logging.log', format=FORMAT, level=logging.DEBUG)
# _logger = logging.getLogger(__name__)

def debug(*msg):
    _logger.debug(msg)

def info(*msg):
    _logger.info(msg)

def warning(*msg):
    _logger.warning(msg)

def error(*msg):
    _logger.error(msg)

def critical(*msg):
    _logger.critical(msg)
