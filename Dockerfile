# Build the Docker image
docker build -t justech-ai .

# Run the container
docker run -p 3000:3000 justech-ai