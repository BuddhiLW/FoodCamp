FROM openjdk:8-alpine

COPY target/uberjar/experiment-luminus.jar /experiment-luminus/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/experiment-luminus/app.jar"]
