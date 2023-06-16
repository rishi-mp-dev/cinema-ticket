enum Environments {
    local_environment = 'local',
    dev_environment = 'dev',
}

class Environment {
    private environment: String;

    constructor(environment: String) {
        this.environment = environment;
    }

    getPort(): Number {
        
        if (this.environment === Environments.dev_environment) {
            return 9100;
        } 
        else {
            return 9000;
        }
    }

    getDBName(): String {
         if (this.environment === Environments.dev_environment) {
            return 'db_test_project_dev';
        }  else {
            return 'db_test_project_local';
        }
    }
}

export default new Environment(Environments.local_environment);