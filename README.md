# HomeLab

A self-hosted Linux server I run, and the Next.js site deployed on it. The interesting half is the
hosting, not the site.

## Architecture

```
Client → Cloudflare → Docker [ Nginx → PM2 → Next.js ]
```

- **Cloudflare** terminates TLS, handles DNS, and fronts the origin so the home IP is never exposed.
- **Nginx**, containerized in Docker, reverse-proxies to the app and serves as the entry point for
  every site on the box.
- **PM2** keeps the Node process alive across crashes and reboots.
- **SSH key-pair authentication** only; password login is disabled.

## Stack

Next.js, Tailwind, Material UI on the application side. Linux, Docker, Nginx, PM2 and Cloudflare
underneath.

## Deploying

```bash
git pull
npm install
npm run lint
npm run build
pm2 restart <process name>
```

## Setting up a new site on the box

1. SSH into the server.
2. Add an Nginx config under `sites-enabled/`, listening on 80 and 443 for the hostname and
   proxying to the app's local port.
3. Point the hostname at Cloudflare and proxy it through to the origin.
4. Start the app under PM2 and save the process list so it survives a reboot.

## What I got out of it

Reverse proxying and load balancing in Nginx, TLS termination and CDN behaviour at the Cloudflare
edge, container networking between Nginx and the app, and process supervision. The same shapes
turn up in managed infrastructure, which made the AWS and Terraform work later a lot less abstract.
