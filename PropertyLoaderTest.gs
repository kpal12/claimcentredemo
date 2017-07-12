package com.mlcs.cc.Util

@gw.testharness.ServerTest
class PropertyLoaderTest extends gw.testharness.TestBase {

construct() {
  
}
  
 /**
   * Positive Test
   * This function will validate Environments correctly picked dynamically.
   * Preconditions:
   * EnvironmentProp.Properties is loaded on classpath,Application is up and running 
   * in testing environment.
   * Input:
   * 
   * Expected Result:   
   * 1.Test URL = http://localhost:8080/cc/ClaimCenter.do
   * 2.Username = su
   * 3.Password = gw
   * 
   * 
   */
  function testEnvironmentsPositively(){
    var env:String = "local"
    var url:String = "http://localhost:8080/cc/ClaimCenter.do"
    var userNameKey:String = "su"
    var pwdKey:String = "gw"
    
    var urlCompare : String = "http://"
        
    switch(env) {
      case "local": 
        urlCompare = urlCompare + "localhost:8080"
      break
      case "MLCS-CC-SIT1":
        urlCompare = urlCompare + "svdw-guidwo1:8080"
      break
      case "MLCS-CC-SIT2":
        urlCompare = urlCompare + "svdw-guidb1:8080"
      break
      case "MLCS-CC-SIT3":
        urlCompare = urlCompare + "svdw-guidw3:8080"
      break
      case "MLCS-CC-SIT4":
        urlCompare = urlCompare + "svdw-guidw4:8080"
      break
      case "MLCS-CC-SIT5":
        urlCompare = urlCompare + "svdw-guidw5:8080"
      break
      case "MLCS-CC-SIT6":
        urlCompare = urlCompare + "svdw-guidw6:8080"
      break
      case "MLCS-CC-SIT7":
        urlCompare = urlCompare + "svdw-guidw7:8080"
      break
      case "MLCS-CC-SIT8":
        urlCompare = urlCompare + "svdw-guidw8:8080"
      break
      case "MLCS-CC-SIT9":
        urlCompare = urlCompare + "svdw-guidw9:8080"
      break
      case "MLCS-CC-SIT10":
        urlCompare = urlCompare + "svdw-guidw10:8080"
      break
      case "MLCS-CC-QA1":
        urlCompare = urlCompare + "fusion-qa"
      break
      case "MLCS-CC-TEST1":
        urlCompare = urlCompare + "svqw-guidw1"
      break
      case "MLCS-CC-TEST2":
        urlCompare = urlCompare + "svqw-guidw2"
      break
      case "MLCS-CC-TEST3":
        urlCompare = urlCompare + "svqw-guidw3"
      break
      case "MLCS-CC-TEST4":
        urlCompare = urlCompare + "svqw-guidw4"
      break
      case "MLCS-CC-TEST5":
        urlCompare = urlCompare + "svqw-guidw5"
      break
      case "MLCS-CC-TEST6":
        urlCompare = urlCompare + "svqw-guidw6"
      break
      case "MLCS-CC-TEST7":
        urlCompare = urlCompare + "svqw-guidw7"
      break
      case "MLCS-CC-TEST8":
        urlCompare = urlCompare + "svqw-guidw8"
      break
      case "MLCS-CC-TEST9":
        urlCompare = urlCompare + "svqw-guidw9"
      break
      case "MLCS-CC-TEST10":
        urlCompare = urlCompare + "svqw-guidw10"
      break
      case "MLCS-CC-PC":
        urlCompare = urlCompare + "svqw-quidwo2:8080"
      break
      case "MLCS-CC-TRNG":
        urlCompare = urlCompare + "svqw-guidwtr1:8080"
      break
      case "MLCS-CC-UAT1":
        urlCompare = urlCompare + "svdw-guidwo3:8080"
      break
      case "MLCS-CC-PROD":
        urlCompare = urlCompare + "fusion"
      break
    }

    urlCompare = urlCompare + "/cc/ClaimCenter.do"
    
    //If the environment is "test" there shouldn't be anything returned - all other environments will return data
    if(!env.equalsIgnoreCase("test")) {
      assertEquals(urlCompare, url )
      assertEquals("su", userNameKey)
      assertEquals("gw",pwdKey)
    }
    else {
      assertEquals("null", url)
      assertEquals("null", userNameKey)
      assertEquals("null", pwdKey)
    }
    
    
    
    }
}
