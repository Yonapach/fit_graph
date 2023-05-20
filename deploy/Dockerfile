FROM python:3.11
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yq update \
    && apt-get purge -y --auto-remove

COPY ./requirements.txt /requirements.txt
RUN pip install --no-cache-dir --upgrade -r /requirements.txt

WORKDIR /app
