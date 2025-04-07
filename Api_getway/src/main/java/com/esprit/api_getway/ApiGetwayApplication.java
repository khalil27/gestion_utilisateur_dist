package com.esprit.api_getway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGetwayApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiGetwayApplication.class, args);
    }
    @Bean
    public RouteLocator getwayRoutes(RouteLocatorBuilder builder)
    {
        return builder.routes()
                .route("gestion_utilisateur",r->r.path("/gestion_utilisateur/**").uri("http://localhost:8083/"))
                //.route("MSjobs",r->r.path("/jobs/**").uri("lb://MS-job-s"))
                .build();
    }

}
