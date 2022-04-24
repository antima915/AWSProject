FROM python:3

WORKDIR /app

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod -R 755 config.sh

CMD ["./config.sh"]
