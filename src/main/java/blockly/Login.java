package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity(post = "Public", get = "Public", execute = "Public", delete = "Public", put = "Public")
public class Login {

public static final int TIMEOUT = 300;

/**
 *
 * @param nome
 * @param email
 * @param param_senha
 * @param confirmasenha
 * @return Var
 */
// Login
public static Var Cadastrar(Var nome, Var email, Var param_senha, Var confirmasenha) throws Exception {
 return new Callable<Var>() {

   // param
   private Var senha = param_senha;
   // end

   public Var call() throws Exception {
    if (Var.valueOf(senha.equals(confirmasenha)).getObjectAsBoolean()) {
        cronapi.database.Operations.insert(Var.valueOf("app.entity.User"),Var.valueOf("password",cronapi.util.Operations.encryptPassword(senha)),Var.valueOf("normalizedUserName",email),Var.valueOf("name",nome),Var.valueOf("normalizedEmail",email),Var.valueOf("userName",email),Var.valueOf("email",email));
        cronapi.util.Operations.callClientFunction( Var.valueOf("cronapi.screen.notify"), Var.valueOf("success"), Var.valueOf("Usuário registrado com sucesso"));
    } else {
        cronapi.util.Operations.callClientFunction( Var.valueOf("cronapi.screen.notify"), Var.valueOf("error"), Var.valueOf("Campos senha e confirma senha não conferem! "));
    }
    return Var.VAR_NULL;
   }
 }.call();
}

}

