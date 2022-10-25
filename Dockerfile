FROM nginx
COPY /dist /var/www/webui
COPY /nginx/cloud.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
