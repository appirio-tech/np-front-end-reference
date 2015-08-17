// store user data in maps for ease of use and readability...
var ManageData = function() {
//    this.testUser = {'baseUrl': 'https://www.topcoder-dev.com/work/#/login', 'username': 'DhananjayKumar1', 'password': 'appirio123'}
    this.userCredentials = [ 
                             {	
                            	 'username' : 'DhananjayKumar1',
                            	 'password' : 'appirio123' 
                             },
                             {
                            	 'username' : 'aqmansuri',
                            	 'password' : 'appirio123'
                             }
                           ],
    
    this.projectList = [
                        {
                        	'name' : 'Test Project -Aq23',
                        	'type' :'Design',
                        	'upload' : 'yes',
                        	'description' : 'This is demo project for testing manage project 23',
                        	'featureList' : ['login'],
                        	'acceptTerms' :'Y'
                        },
                        
                        {
                        	'name' : 'Test Project -Aq45',
                        	'type' :'Design',
                        	'upload' : 'no',
                        	'description' : 'This is demo project for testing manage project 45',
                        	'featureList' : ['login'],
                        	'acceptTerms' :'Y',
                        	'workSummary' : '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
                        }
                       ],
    
    this.baseUrl = 'http://work.topcoder-dev.com/#/login',
    this.manageProjectUrl =  'http://work.topcoder-dev.com/#/manage';
};
module.exports = new ManageData;