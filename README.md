## [linhong.dev](linhong.dev)

### Overview

This is my personal portfolio website showcasing my projects, skills, experiences, and ways to get in touch. Built with Next.js and hosted on a homelab server using Docker and Nginx.

### Technology Used

**Web Dev**
- Next.js, Tailwind, Material UI

**Hosting**
- Cloudflare, Nginx, PM2, Docker
- Architecture:  
  `Client → Cloudflare → Docker [Nginx → PM2]`

---

### Updating Website
1. Make changes and `git push`.
2. On the homelab server, run:
    ```bash
    git pull
    npm install
    npm run lint
    npm run build
    pm2 restart <pm2 container name>
    ```
3. Check that the site is live at [linhong.dev](https://linhong.dev).

---

### Hosting Process

#### Setting up Docker with Nginx and PM2

- **Docker**: Containerizes Nginx
- **Nginx**: Acts as a load balancer and reverse proxy
- **PM2**: Keeps the Node.js app running in the background

Steps:

1. SSH into the homelab server.
2. Dockerize Nginx and create a `linhong.conf` config file under `/Documents/networking/sites-enabled/`.
3. In `linhong.conf`, configure it to:
   - Listen on ports 80 and 443
   - Use `proxy_pass http://localhost:3001;` in the root location block

---

### Running the Website

1. In the homelab `~/Desktop` directory, run:
    ```bash
    git pull <repo-url>
    npm install
    npm run build
    ```

2. Start the server with PM2:
    ```bash
    npm install -g pm2
    PORT=3001 pm2 start npm --name linhong -- start
    pm2 save
    ```

3. Set up DNS on Cloudflare by pointing the domain to the homelab’s public IP address.

4. Generate an SSL certificate:
    ```bash
    sudo apt install certbot
    sudo certbot certonly --standalone -d linhong.dev -d www.linhong.dev
    ```

5. Start the Docker container:
    ```bash
    docker start <nginx-container-name>
    docker ps  # to confirm it's running
    docker compose up -d
    ```
