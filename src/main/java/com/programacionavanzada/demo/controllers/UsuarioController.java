package com.programacionavanzada.demo.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import com.programacionavanzada.demo.models.Usuario;

@RestController
public class UsuarioController {

    @RequestMapping(value = "usuario/{id}")
    public Usuario getUsuario(@PathVariable Long id){
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Leo");
        usuario.setApellido("Cappiello");
        usuario.setEmail("leonelcapppiello@gmail.com");
        return usuario;
    }


}
