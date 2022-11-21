FROM mysql
ENV MYSQL_ROOT_PASSWORD "manager"
ENV MYSQL_DATABASE "gms_db"
COPY gms.sql /docker-entrypoint-initdb.d
COPY my.cnf /etc/mysql/my.cnf
EXPOSE 3306 