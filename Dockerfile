# syntax=docker/dockerfile:1
FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /code/
COPY . /code/

RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6  -y

RUN pip install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-interaction --no-ansi