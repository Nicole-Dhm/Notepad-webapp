# Use an OpenJDK image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy pom.xml and download dependencies first (caching)
COPY pom.xml .
RUN apt-get update && apt-get install -y maven \
    && mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Package the application
RUN mvn package -DskipTests

# Run the app
ENTRYPOINT ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]
