const UsuarioModel = {

    async listarUsuario(app){
        try {
            const result = await app.pg.query('SELECT * FROM usuario');
            return result.rows;
        } catch (error) {
            throw error;
        }
    },
    
    async listarUsuarioPorId(request, app){
        try {
            const result = await app.pg.query(`SELECT * FROM usuario WHERE id_usuario = ${Number(request.params.id_usuario)})`)
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    async inserirUsuario(request, app){
        try {
            const result = await app.pg.query(`INSERT INTO usuario (nome, login_user, senha_user, perfil)
            VALUES ('${request.body.nome}', '${request.body.login_user}', '${request.body.senha_user}', '${request.body.perfil}'`)
            
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    async atualizarUsuario(request, app){
        try {
            const result = await app.pg.query(
                `UPDATE usuario SET 
                nome = '${request.body.nome}',
                login_user = '${request.body.login_user}',
                perfil = '${request.body.perfil}' 
                WHERE usuario.id_usuario = ${Number(request.params.id_usuario)}`)
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    async excluirUsuario(request, app){
        try {
            const result = await app.pg.query(`DELETE FROM usuario WHERE usuario.id_usuario = ${Number(request.params.id_usuario)}`);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    },

    async autenticarUsuario(request, app) {
        try {
            const result = await app.pg.query(`SELECT * FROM usuario WHERE login_user = '${request.body.login}' AND senha_user = '${request.body.senha}'`);
            return result.rows.length > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsuarioModel;
