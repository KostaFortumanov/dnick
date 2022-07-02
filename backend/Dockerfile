FROM gradle:7.1.0-jdk11 AS build

COPY --chown=gradle:gradle . /home/gradle/src

WORKDIR /home/gradle/src

RUN gradle bootJar --no-daemon 

FROM adoptopenjdk/openjdk11:alpine-jre

RUN mkdir /app

COPY --from=build /home/gradle/src/build/libs/dnick-0.0.1-SNAPSHOT.jar /app/spring-boot-application.jar

ENTRYPOINT ["java","-jar","/app/spring-boot-application.jar"]
