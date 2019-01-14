var Type;
var Url;
var Data;
var ContentType;
var DataType;
var ProcessData;


function ShowAllWCFJSON() {
    varType              = "GET";
    varUrl                 = "http://localhost:8080/Oee/ShowAll";
    varData              = '{"value": "1"}';
    varContentType = "application/json; charset=utf-8";
    varDataType      = "json"; varProcessData = true; 
    CallService();
}

function HelloWorld() {
    var soapMessage =
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"> \
             <soap:Header> \
             <Action soap:mustUnderstand=\"1\" xmlns=\"http://schemas.microsoft.com/ws/2005/05/addressing/none\">http://tempuri.org/IService/HelloWorld</Action> \
            </soap:Header> \
            <soap:Body> \
            <HelloWorld xmlns="http://tempuri.org/"> \
            </HelloWorld> \
            </soap:Body> \
            </soap:Envelope>';
    var userid = "1";
    Type = "POST";
    Url = "http://localhost:7777/Service.svc/HelloWorld";
    Data = '{"value": "' + userid + '"}';
    ContentType = "application/json; charset=utf-8";
    DataType = "json"; varProcessData = true; 
    CallService();
}

function WCFJSON() {
    var userid = "1";
    Type = "POST";
    Url = "OeeWebService/OeeCounter.asmx/GetData";
    Data = '{"value": "' + userid + '"}';
    ContentType = "application/json; charset=utf-8";
    DataType = "json"; varProcessData = true; 
    CallService();
}

function GetUserWCFJSON() {
    var userid = "1";
    Type = "POST";
    Url = "Service1.svc/GetUser";
    Data = '{"Id": "' + userid + '"}';
    ContentType = "application/json; charset=utf-8";
    DataType = "json"; varProcessData = true; 
    CallService();
}

function GetSataWCFJSON() {
    varType              = "POST";
    varUrl                 = "http://localhost:7777/OeeWcfService/Servie1.svc/GetData";
    varData              = '{"value": "1"}';
    varContentType = "application/json; charset=utf-8";
    varDataType      = "json"; varProcessData = true; 
    CallService();
}

// Function to call WCF  Service       
function CallService() {
    $.ajax({
        type: Type, //GET or POST or PUT or DELETE verb
        url: Url, // Location of the service
        data: Data, //Data sent to server
        contentType: ContentType, // content type sent to server
        dataType: DataType, //Expected data format from server
        processdata: ProcessData, //True or False
        success: function(msg) {//On Successfull service call
            ServiceSucceeded(msg);
        },
        error: ServiceFailed// When Service call fails
    });
}

function ServiceFailed(result) {
    alert('Service call failed: ' + result.status + ' - ' + result.statusText);
    Type = null;
    varUrl = null;
    Data = null; 
    ContentType = null;
    DataType = null;
    ProcessData = null;
}

function ServiceSucceeded(result) {
    if (DataType == "json") {
        resultObject = result.GetUserResult;
        
        for (i = 0; i < resultObject.length; i++) {
            alert('service succeeded: ' +resultObject[i]);
        }
            
    }
        
}

function ServiceFailed(xhr) {
    alert('service failed: ' + xhr.responseText);

    if (xhr.responseText) {
        var err = xhr.responseText;
        if (err)
            error(err);
        else
            error({ Message: "Unknown server error." })
    }
    
    return;
}

$(function() {
    $('#btnCallService').click(function() {
        GetUserWCFJSON();
        //GetSataWCFJSON();
        //ShowAllWCFJSON();
    });
});

/*
$(function() {
    $('#btnCallService').click(function() {
        $.ajax({
            type: 'GET',
            //url: 'http://localhost:2255/Service1.asmx?op=GetEmployeeDetail',
            url: 'http://localhost:2255/Service1.asmx/GetEmployeeDetail',
            data: {},
            dataType: 'json',
            contentType: 'text/plain',
            xhrFields: {withCredentials: false },
            headers: {},
            success: function(response) {
                $('#lblData').html(JSON.stringify(response));
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});

$(function() {
    $('#btnCallService').click(function() {
        $.ajax({
            type: 'GET',
            //url: 'http://localhost:2255/Service1.asmx?op=GetEmployeeDetail',
            url: 'http://localhost:2255/Service1.asmx/GetEmployeeDetail',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                $('#lblData').html(JSON.stringify(response));
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
*/