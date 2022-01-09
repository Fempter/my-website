FROM openjdk:17
MAINTAINER = "dawid-haniewicz.xyz"
WORKDIR /my-website
ADD build/libs/my-website-0.0.1-SNAPSHOT.jar my-website.jar
ENTRYPOINT ["java", "-jar", "my-website.jar"]