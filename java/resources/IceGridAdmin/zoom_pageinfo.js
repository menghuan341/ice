pageinfo = [[1169571789,8623],
	[1169480257,6061],
	[1169571773,8999],
	[1169566661,11144],
	[1169562143,4898],
	[1169571711,5796],
	[1169507035,4747],
	[1169562105,9486],
	[1169571759,7783],
	[1169568833,4910],
	[1169568495,7112],
	[1169569693,17340],
	[1169506837,8018],
	[1169565737,6620],
	[1169568869,9049],
	[1169507067,6218],
	[1169571867,6203],
	[1169507931,6677],
	[1169507347,5935],
	[1169504459,5477],
	[1169506839,6316],
	[1169568417,23173],
	[1169563287,9943],
	[1169571705,5635],
	[1169561671,6540],
	[1169479681,7776],
	[1169156549,11170],
	[1169156489,4487],
	[1169506989,8528],
	[1169219763,8383],
	[1169227569,9221],
	[1169506929,11367],
	[1169506837,10000],
	[1169506837,19702],
	[1169245417,5881],
	[1169479635,6483],
	[1169571819,7406],
	[1169156383,4852],
	[1169219727,6204],
	[1169561615,6235]];
pagedata = [ ["./adapter.htm","Adapter","An adapter represents an Ice object adapter described in the IceGrid registry that resides in a server or an IceBox service. Note that direct obje...",""],
["./application.htm","Application","IceGrid definitions are organized in \"applications\", with typically one or a few applications deployed on a given IceGrid instance. An Application...",""],
["./app_adapter.htm","Adapter","Each indirect object adapter registered with IceGrid requires its own Adapter descriptor. If you need to specify a direct adapter, simply create a...",""],
["./app_application.htm","Application","Creating a new Application You can create a new application using File &#62; New Application: this opens a new Application pane, with an empty applica...",""],
["./app_copy__paste.htm","Copy &#38; Paste","Most descriptor sub-trees can be copied and later pasted. Copies are always deep-copies: for example if you copy a node, all the servers on this c...",""],
["./app_dbenv.htm","Database Environment","Properties The Database Environment Properties panel offers the following fields: Name The name of the Freeze Database Environment. This name must...",""],
["./app_descriptors.htm","Descriptors","An application definition is described using one application descriptor with a number of nested sub-descriptors (and sub-sub descriptors). The des...",""],
["./app_editing_and_saving.htm","Editing &#38; Saving","Editing As soon as you make any update in a form, IceGrid Admin enables two buttons at the bottom of this form: Apply and Discard. If you navigate...",""],
["./app_icebox_server.htm","IceBox Server","Properties The Properties panel for an IceBox server is identical to the Properties panel for a Plain Server . When you create a new IceBox server...",""],
["./app_navigation.htm","Navigation","Each Application pane maintains a history of the nodes you have visited in this pane. You can navigate these nodes using the View &#62; Go Back to the...",""],
["./app_node.htm","Node","Anode represents an IceGrid node that starts and monitors your servers. Several applications can be deployed on the same node; however a node desc...",""],
["./app_plain_server.htm","Plain Server","Properties The Server Properties panel offers the following fields: Server ID The ID of the server; corresponds to the Ice.ServerID property. Each...",""],
["./app_plain_service.htm","Plain Service","Properties The Service Properties panel offers the following fields: Service Name The name of the service. Must be unique within the enclosing Ice...",""],
["./app_property_set.htm","Property Set","AProperty Set defines a set of Ice properties. IceGrid Admin supports two kinds of Property Sets: � Named Property Set, defined within an applicat...",""],
["./app_replica__group.htm","Replica Group","Areplica group represents an abstract grouping of identical, or very similar, object adapters. An object adapter joins this group by setting this ...",""],
["./app_server.htm","Server","Aserver represents an Ice server deployed on a node as part of an application. IceGrid supports three kinds of servers: � Plain Server : a normal ...",""],
["./app_server_instance.htm","Server Instance","Aserver instance is a server created from a server template; it may be a plain server or an IceBox server. Properties The Server Instance Properti...",""],
["./app_server_template.htm","Server Template","Aserver template is used to capture the common definitions of several similar or identical servers. Properties The Server Template Properties pane...",""],
["./app_service.htm","Service","Aservice represents an IceBox service deployed on an IceBox server. IceGrid supports two kinds of services: � Plain Service : a service defined di...",""],
["./app_service_instance.htm","Service Instance","Properties The Service Instance Properties panel offers the following fields: Template The name of the Service Template . Parameters Use this tabl...",""],
["./app_service_template.htm","Service Template","Aservice template is used to capture the common definitions of several similar or identical services. Properties The Service Template Properties p...",""],
["./app_variables.htm","Variables","Variables allow you to define commonly-used information once and refer to them symbolically throughout your application descriptors. Syntax Substi...",""],
["./command_line_arguments.htm","Command-Line Arguments","IceGrid Admin can be configured using Ice properties, and like with most Ice applications, these properties can be set using command-line argument...",""],
["./dbenv.htm","Database Environment","ADatabase Environment represents a Berkeley DB database environment, typically used for storage by the Freeze persistence service. Properties The ...",""],
["./introduction.htm","Introduction","Everything you need to deploy IceGrid applications IceGrid Admin is a comprehensive administration tool for IceGrid. With IceGrid Admin, you can: ...",""],
["./live_deployment.htm","Live Deployment","The Live Deployment pane shows the runtime status and configuration of an existing IceGrid deployment, and allows you to perform various administr...",""],
["./login.htm","Login","The Login dialog allows you to connect to an IceGrid registry and retrieve information about the nodes and servers associated with this registry. ...",""],
["./logout.htm","Logout","Use File &#62; Logout or press the button to disconnect from an IceGrid registry. This clears all information in the Live Deployment pane. Page url: h...",""],
["./log_file_dialog.htm","Log File Dialog","The Log File dialog shows a log file (text file) retrieved through IceGrid. Often, a process will be writing to this log file and the dialog will ...",""],
["./main_window.htm","Main Window","The main IceGrid Admin window allows to navigate between your live deployment and the definitions of several applications. Tabs The main IceGrid A...",""],
["./node.htm","Node","Anode represents an IceGrid node process registered with the IceGrid registry. States A node can be either up () or down (). A \"down\" node is show...",""],
["./registry.htm","Registry","The registry is the root node of the Runtime Components tree, and represents the IceGrid registry process administered by IceGrid Admin. Actions A...",""],
["./runtime_components.htm","Runtime Components","IceGrid Admin shows the following runtime components: � Registry () Represents the IceGrid registry process with which IceGrid Admin communicates ...",""],
["./server.htm","Server","Aserver represents an Ice server process. It can be either regular server (with typically a single Ice communicator) or an IceBox server hosting a...",""],
["./service.htm","Service","Aservice represents an IceBox service loaded (or potentially loaded) within an IceBox server. States A service can be started or stopped within an...",""],
["./slave_registry.htm","Slave Registry","An IceGrid deployment may use several IceGrid registry replicas, with one Master registry and a number of read-only Slave registries. Actions A sl...",""],
["./ssl_configuration.htm","SSL Configuration","When you check Enable IceSSL in the Direct or Routed pane of the Login dialog, you need to configure the Ice-for-Java IceSSL plugin. Basic SSL Con...",""],
["./starting_icegrid_admin.htm","Starting IceGrid Admin","In some environments, IceGrid Admin can be started by simply double-clicking on the IceGridGUI.jar file. On all platforms, you can start IceGrid A...",""],
["./system_requirements.htm","System Requirements","IceGrid Admin is a JavaTM application supported a wide range of platforms including Windows XP, MacOS X and Linux. In order to run IceGrid Admin y...",""],
["./welcome.htm","Welcome","Welcome to the IceGrid Admin Online Help IceGrid Admin is the graphical administration tool for IceGrid , the server-deployment and monitoring ser...",""]];
