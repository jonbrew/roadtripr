from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from basecontroller import BaseController

class DatabaseController(BaseController):
    '''
    Controller for mySQL Database.
    '''

    def __init__(self):
        super(DatabaseController, self).__init__()

        user = self._config['MYSQL']['USER']
        password = self._config['MYSQL']['PASS']
        db_name = self._config['MYSQL']['NAME']
        self.engine = create_engine('mysql+pymysql://'+user+':'+password+'@localhost/'+db_name)
        DBSession = sessionmaker(bind=self.engine)
        self.session = DBSession()

    def get_engine(self):
        '''
        Return the engine
        '''
        return self.engine


    def get_session(self):
        '''
        Return the session
        '''
        return self.session
        