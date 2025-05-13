# `appEngineStandardAppVersion` Submodule <a name="`appEngineStandardAppVersion` Submodule" id="@cdktf/provider-google.appEngineStandardAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineStandardAppVersion <a name="AppEngineStandardAppVersion" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version google_app_engine_standard_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deployment: AppEngineStandardAppVersionDeployment,
  entrypoint: AppEngineStandardAppVersionEntrypoint,
  runtime: str,
  service: str,
  app_engine_apis: typing.Union[bool, IResolvable] = None,
  automatic_scaling: AppEngineStandardAppVersionAutomaticScaling = None,
  basic_scaling: AppEngineStandardAppVersionBasicScaling = None,
  delete_service_on_destroy: typing.Union[bool, IResolvable] = None,
  env_variables: typing.Mapping[str] = None,
  handlers: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionHandlers]] = None,
  id: str = None,
  inbound_services: typing.List[str] = None,
  instance_class: str = None,
  libraries: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionLibraries]] = None,
  manual_scaling: AppEngineStandardAppVersionManualScaling = None,
  noop_on_destroy: typing.Union[bool, IResolvable] = None,
  project: str = None,
  runtime_api_version: str = None,
  service_account: str = None,
  threadsafe: typing.Union[bool, IResolvable] = None,
  timeouts: AppEngineStandardAppVersionTimeouts = None,
  version_id: str = None,
  vpc_access_connector: AppEngineStandardAppVersionVpcAccessConnector = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.service">service</a></code> | <code>str</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.appEngineApis">app_engine_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.basicScaling">basic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.handlers">handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.libraries">libraries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]</code> | libraries block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.threadsafe">threadsafe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#deployment AppEngineStandardAppVersion#deployment}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.entrypoint"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#entrypoint AppEngineStandardAppVersion#entrypoint}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.runtime"></a>

- *Type:* str

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#runtime AppEngineStandardAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.service"></a>

- *Type:* str

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#service AppEngineStandardAppVersion#service}

---

##### `app_engine_apis`<sup>Optional</sup> <a name="app_engine_apis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.appEngineApis"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#app_engine_apis AppEngineStandardAppVersion#app_engine_apis}

---

##### `automatic_scaling`<sup>Optional</sup> <a name="automatic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.automaticScaling"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#automatic_scaling AppEngineStandardAppVersion#automatic_scaling}

---

##### `basic_scaling`<sup>Optional</sup> <a name="basic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.basicScaling"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#basic_scaling AppEngineStandardAppVersion#basic_scaling}

---

##### `delete_service_on_destroy`<sup>Optional</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.deleteServiceOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#delete_service_on_destroy AppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.envVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#env_variables AppEngineStandardAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.handlers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#handlers AppEngineStandardAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_services`<sup>Optional</sup> <a name="inbound_services" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.inboundServices"></a>

- *Type:* typing.List[str]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#inbound_services AppEngineStandardAppVersion#inbound_services}

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.instanceClass"></a>

- *Type:* str

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#instance_class AppEngineStandardAppVersion#instance_class}

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.libraries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#libraries AppEngineStandardAppVersion#libraries}

---

##### `manual_scaling`<sup>Optional</sup> <a name="manual_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.manualScaling"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#manual_scaling AppEngineStandardAppVersion#manual_scaling}

---

##### `noop_on_destroy`<sup>Optional</sup> <a name="noop_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.noopOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#noop_on_destroy AppEngineStandardAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}.

---

##### `runtime_api_version`<sup>Optional</sup> <a name="runtime_api_version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.runtimeApiVersion"></a>

- *Type:* str

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#runtime_api_version AppEngineStandardAppVersion#runtime_api_version}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#service_account AppEngineStandardAppVersion#service_account}

---

##### `threadsafe`<sup>Optional</sup> <a name="threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.threadsafe"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#threadsafe AppEngineStandardAppVersion#threadsafe}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#timeouts AppEngineStandardAppVersion#timeouts}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.versionId"></a>

- *Type:* str

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#version_id AppEngineStandardAppVersion#version_id}

---

##### `vpc_access_connector`<sup>Optional</sup> <a name="vpc_access_connector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.Initializer.parameter.vpcAccessConnector"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#vpc_access_connector AppEngineStandardAppVersion#vpc_access_connector}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling">put_automatic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling">put_basic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint">put_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers">put_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries">put_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling">put_manual_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector">put_vpc_access_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis">reset_app_engine_apis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling">reset_automatic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling">reset_basic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy">reset_delete_service_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables">reset_env_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers">reset_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices">reset_inbound_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass">reset_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries">reset_libraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling">reset_manual_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy">reset_noop_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion">reset_runtime_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe">reset_threadsafe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId">reset_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector">reset_vpc_access_connector</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_automatic_scaling` <a name="put_automatic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling"></a>

```python
def put_automatic_scaling(
  max_concurrent_requests: typing.Union[int, float] = None,
  max_idle_instances: typing.Union[int, float] = None,
  max_pending_latency: str = None,
  min_idle_instances: typing.Union[int, float] = None,
  min_pending_latency: str = None,
  standard_scheduler_settings: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings = None
) -> None
```

###### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.maxConcurrentRequests"></a>

- *Type:* typing.Union[int, float]

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_concurrent_requests AppEngineStandardAppVersion#max_concurrent_requests}

---

###### `max_idle_instances`<sup>Optional</sup> <a name="max_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.maxIdleInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_idle_instances AppEngineStandardAppVersion#max_idle_instances}

---

###### `max_pending_latency`<sup>Optional</sup> <a name="max_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.maxPendingLatency"></a>

- *Type:* str

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_pending_latency AppEngineStandardAppVersion#max_pending_latency}

---

###### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.minIdleInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#min_idle_instances AppEngineStandardAppVersion#min_idle_instances}

---

###### `min_pending_latency`<sup>Optional</sup> <a name="min_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.minPendingLatency"></a>

- *Type:* str

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#min_pending_latency AppEngineStandardAppVersion#min_pending_latency}

---

###### `standard_scheduler_settings`<sup>Optional</sup> <a name="standard_scheduler_settings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putAutomaticScaling.parameter.standardSchedulerSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#standard_scheduler_settings AppEngineStandardAppVersion#standard_scheduler_settings}

---

##### `put_basic_scaling` <a name="put_basic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling"></a>

```python
def put_basic_scaling(
  max_instances: typing.Union[int, float],
  idle_timeout: str = None
) -> None
```

###### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putBasicScaling.parameter.idleTimeout"></a>

- *Type:* str

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#idle_timeout AppEngineStandardAppVersion#idle_timeout}

---

##### `put_deployment` <a name="put_deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment"></a>

```python
def put_deployment(
  files: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionDeploymentFiles]] = None,
  zip: AppEngineStandardAppVersionDeploymentZip = None
) -> None
```

###### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment.parameter.files"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#files AppEngineStandardAppVersion#files}

---

###### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putDeployment.parameter.zip"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#zip AppEngineStandardAppVersion#zip}

---

##### `put_entrypoint` <a name="put_entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint"></a>

```python
def put_entrypoint(
  shell: str
) -> None
```

###### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putEntrypoint.parameter.shell"></a>

- *Type:* str

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#shell AppEngineStandardAppVersion#shell}

---

##### `put_handlers` <a name="put_handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers"></a>

```python
def put_handlers(
  value: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionHandlers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putHandlers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]

---

##### `put_libraries` <a name="put_libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries"></a>

```python
def put_libraries(
  value: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionLibraries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putLibraries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]

---

##### `put_manual_scaling` <a name="put_manual_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling"></a>

```python
def put_manual_scaling(
  instances: typing.Union[int, float]
) -> None
```

###### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putManualScaling.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#instances AppEngineStandardAppVersion#instances}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}.

---

##### `put_vpc_access_connector` <a name="put_vpc_access_connector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector"></a>

```python
def put_vpc_access_connector(
  name: str,
  egress_setting: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector.parameter.name"></a>

- *Type:* str

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

###### `egress_setting`<sup>Optional</sup> <a name="egress_setting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.putVpcAccessConnector.parameter.egressSetting"></a>

- *Type:* str

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#egress_setting AppEngineStandardAppVersion#egress_setting}

---

##### `reset_app_engine_apis` <a name="reset_app_engine_apis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAppEngineApis"></a>

```python
def reset_app_engine_apis() -> None
```

##### `reset_automatic_scaling` <a name="reset_automatic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetAutomaticScaling"></a>

```python
def reset_automatic_scaling() -> None
```

##### `reset_basic_scaling` <a name="reset_basic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetBasicScaling"></a>

```python
def reset_basic_scaling() -> None
```

##### `reset_delete_service_on_destroy` <a name="reset_delete_service_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetDeleteServiceOnDestroy"></a>

```python
def reset_delete_service_on_destroy() -> None
```

##### `reset_env_variables` <a name="reset_env_variables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetEnvVariables"></a>

```python
def reset_env_variables() -> None
```

##### `reset_handlers` <a name="reset_handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetHandlers"></a>

```python
def reset_handlers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_services` <a name="reset_inbound_services" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInboundServices"></a>

```python
def reset_inbound_services() -> None
```

##### `reset_instance_class` <a name="reset_instance_class" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetInstanceClass"></a>

```python
def reset_instance_class() -> None
```

##### `reset_libraries` <a name="reset_libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetLibraries"></a>

```python
def reset_libraries() -> None
```

##### `reset_manual_scaling` <a name="reset_manual_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetManualScaling"></a>

```python
def reset_manual_scaling() -> None
```

##### `reset_noop_on_destroy` <a name="reset_noop_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetNoopOnDestroy"></a>

```python
def reset_noop_on_destroy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_runtime_api_version` <a name="reset_runtime_api_version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetRuntimeApiVersion"></a>

```python
def reset_runtime_api_version() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_threadsafe` <a name="reset_threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetThreadsafe"></a>

```python
def reset_threadsafe() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVersionId"></a>

```python
def reset_version_id() -> None
```

##### `reset_vpc_access_connector` <a name="reset_vpc_access_connector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.resetVpcAccessConnector"></a>

```python
def reset_vpc_access_connector() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersion.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppEngineStandardAppVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppEngineStandardAppVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppEngineStandardAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppEngineStandardAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling">basic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries">libraries</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput">app_engine_apis_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput">automatic_scaling_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput">basic_scaling_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput">delete_service_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput">deployment_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput">entrypoint_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput">env_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput">handlers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput">inbound_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput">libraries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput">manual_scaling_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput">noop_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput">runtime_api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput">threadsafe_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput">vpc_access_connector_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis">app_engine_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe">threadsafe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automatic_scaling`<sup>Required</sup> <a name="automatic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScaling"></a>

```python
automatic_scaling: AppEngineStandardAppVersionAutomaticScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference">AppEngineStandardAppVersionAutomaticScalingOutputReference</a>

---

##### `basic_scaling`<sup>Required</sup> <a name="basic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScaling"></a>

```python
basic_scaling: AppEngineStandardAppVersionBasicScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference">AppEngineStandardAppVersionBasicScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deployment"></a>

```python
deployment: AppEngineStandardAppVersionDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference">AppEngineStandardAppVersionDeploymentOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypoint"></a>

```python
entrypoint: AppEngineStandardAppVersionEntrypointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference">AppEngineStandardAppVersionEntrypointOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlers"></a>

```python
handlers: AppEngineStandardAppVersionHandlersList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList">AppEngineStandardAppVersionHandlersList</a>

---

##### `libraries`<sup>Required</sup> <a name="libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.libraries"></a>

```python
libraries: AppEngineStandardAppVersionLibrariesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList">AppEngineStandardAppVersionLibrariesList</a>

---

##### `manual_scaling`<sup>Required</sup> <a name="manual_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScaling"></a>

```python
manual_scaling: AppEngineStandardAppVersionManualScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference">AppEngineStandardAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeouts"></a>

```python
timeouts: AppEngineStandardAppVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference">AppEngineStandardAppVersionTimeoutsOutputReference</a>

---

##### `vpc_access_connector`<sup>Required</sup> <a name="vpc_access_connector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnector"></a>

```python
vpc_access_connector: AppEngineStandardAppVersionVpcAccessConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference">AppEngineStandardAppVersionVpcAccessConnectorOutputReference</a>

---

##### `app_engine_apis_input`<sup>Optional</sup> <a name="app_engine_apis_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApisInput"></a>

```python
app_engine_apis_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `automatic_scaling_input`<sup>Optional</sup> <a name="automatic_scaling_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.automaticScalingInput"></a>

```python
automatic_scaling_input: AppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---

##### `basic_scaling_input`<sup>Optional</sup> <a name="basic_scaling_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.basicScalingInput"></a>

```python
basic_scaling_input: AppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---

##### `delete_service_on_destroy_input`<sup>Optional</sup> <a name="delete_service_on_destroy_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroyInput"></a>

```python
delete_service_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deploymentInput"></a>

```python
deployment_input: AppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.entrypointInput"></a>

```python
entrypoint_input: AppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---

##### `env_variables_input`<sup>Optional</sup> <a name="env_variables_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariablesInput"></a>

```python
env_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `handlers_input`<sup>Optional</sup> <a name="handlers_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.handlersInput"></a>

```python
handlers_input: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_services_input`<sup>Optional</sup> <a name="inbound_services_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServicesInput"></a>

```python
inbound_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `libraries_input`<sup>Optional</sup> <a name="libraries_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.librariesInput"></a>

```python
libraries_input: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionLibraries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]

---

##### `manual_scaling_input`<sup>Optional</sup> <a name="manual_scaling_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.manualScalingInput"></a>

```python
manual_scaling_input: AppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---

##### `noop_on_destroy_input`<sup>Optional</sup> <a name="noop_on_destroy_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroyInput"></a>

```python
noop_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `runtime_api_version_input`<sup>Optional</sup> <a name="runtime_api_version_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersionInput"></a>

```python
runtime_api_version_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `threadsafe_input`<sup>Optional</sup> <a name="threadsafe_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafeInput"></a>

```python
threadsafe_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppEngineStandardAppVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>]

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `vpc_access_connector_input`<sup>Optional</sup> <a name="vpc_access_connector_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.vpcAccessConnectorInput"></a>

```python
vpc_access_connector_input: AppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---

##### `app_engine_apis`<sup>Required</sup> <a name="app_engine_apis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.appEngineApis"></a>

```python
app_engine_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_service_on_destroy`<sup>Required</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.deleteServiceOnDestroy"></a>

```python
delete_service_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_variables`<sup>Required</sup> <a name="env_variables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inbound_services`<sup>Required</sup> <a name="inbound_services" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.inboundServices"></a>

```python
inbound_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `noop_on_destroy`<sup>Required</sup> <a name="noop_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.noopOnDestroy"></a>

```python
noop_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `runtime_api_version`<sup>Required</sup> <a name="runtime_api_version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.runtimeApiVersion"></a>

```python
runtime_api_version: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `threadsafe`<sup>Required</sup> <a name="threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.threadsafe"></a>

```python
threadsafe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineStandardAppVersionAutomaticScaling <a name="AppEngineStandardAppVersionAutomaticScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling(
  max_concurrent_requests: typing.Union[int, float] = None,
  max_idle_instances: typing.Union[int, float] = None,
  max_pending_latency: str = None,
  min_idle_instances: typing.Union[int, float] = None,
  min_pending_latency: str = None,
  standard_scheduler_settings: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances">max_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency">max_pending_latency</a></code> | <code>str</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency">min_pending_latency</a></code> | <code>str</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings">standard_scheduler_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | standard_scheduler_settings block. |

---

##### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_concurrent_requests AppEngineStandardAppVersion#max_concurrent_requests}

---

##### `max_idle_instances`<sup>Optional</sup> <a name="max_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```python
max_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_idle_instances AppEngineStandardAppVersion#max_idle_instances}

---

##### `max_pending_latency`<sup>Optional</sup> <a name="max_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```python
max_pending_latency: str
```

- *Type:* str

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_pending_latency AppEngineStandardAppVersion#max_pending_latency}

---

##### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#min_idle_instances AppEngineStandardAppVersion#min_idle_instances}

---

##### `min_pending_latency`<sup>Optional</sup> <a name="min_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.minPendingLatency"></a>

```python
min_pending_latency: str
```

- *Type:* str

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#min_pending_latency AppEngineStandardAppVersion#min_pending_latency}

---

##### `standard_scheduler_settings`<sup>Optional</sup> <a name="standard_scheduler_settings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling.property.standardSchedulerSettings"></a>

```python
standard_scheduler_settings: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

standard_scheduler_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#standard_scheduler_settings AppEngineStandardAppVersion#standard_scheduler_settings}

---

### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  target_cpu_utilization: typing.Union[int, float] = None,
  target_throughput_utilization: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | Target CPU utilization ratio to maintain when scaling. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization">target_throughput_utilization</a></code> | <code>typing.Union[int, float]</code> | Target throughput utilization ratio to maintain when scaling. |

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

**Note:** Starting from March 2025, App Engine sets the maxInstances default for standard environment deployments to 20. This change doesn't impact existing apps. To override the default, specify a new value between 0 and 2147483647, and deploy a new version or redeploy over an existing version. To disable the maxInstances default configuration setting, specify the maximum permitted value 2147483647.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#min_instances AppEngineStandardAppVersion#min_instances}

---

##### `target_cpu_utilization`<sup>Optional</sup> <a name="target_cpu_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#target_cpu_utilization AppEngineStandardAppVersion#target_cpu_utilization}

---

##### `target_throughput_utilization`<sup>Optional</sup> <a name="target_throughput_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings.property.targetThroughputUtilization"></a>

```python
target_throughput_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#target_throughput_utilization AppEngineStandardAppVersion#target_throughput_utilization}

---

### AppEngineStandardAppVersionBasicScaling <a name="AppEngineStandardAppVersionBasicScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling(
  max_instances: typing.Union[int, float],
  idle_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | Duration of time after the last request that an instance must wait before the instance is shut down. |

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

Duration of time after the last request that an instance must wait before the instance is shut down.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#idle_timeout AppEngineStandardAppVersion#idle_timeout}

---

### AppEngineStandardAppVersionConfig <a name="AppEngineStandardAppVersionConfig" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  deployment: AppEngineStandardAppVersionDeployment,
  entrypoint: AppEngineStandardAppVersionEntrypoint,
  runtime: str,
  service: str,
  app_engine_apis: typing.Union[bool, IResolvable] = None,
  automatic_scaling: AppEngineStandardAppVersionAutomaticScaling = None,
  basic_scaling: AppEngineStandardAppVersionBasicScaling = None,
  delete_service_on_destroy: typing.Union[bool, IResolvable] = None,
  env_variables: typing.Mapping[str] = None,
  handlers: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionHandlers]] = None,
  id: str = None,
  inbound_services: typing.List[str] = None,
  instance_class: str = None,
  libraries: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionLibraries]] = None,
  manual_scaling: AppEngineStandardAppVersionManualScaling = None,
  noop_on_destroy: typing.Union[bool, IResolvable] = None,
  project: str = None,
  runtime_api_version: str = None,
  service_account: str = None,
  threadsafe: typing.Union[bool, IResolvable] = None,
  timeouts: AppEngineStandardAppVersionTimeouts = None,
  version_id: str = None,
  vpc_access_connector: AppEngineStandardAppVersionVpcAccessConnector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime">runtime</a></code> | <code>str</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service">service</a></code> | <code>str</code> | AppEngine service resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis">app_engine_apis</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows App Engine second generation runtimes to access the legacy bundled services. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling">basic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | basic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers">handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries">libraries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]</code> | libraries block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe">threadsafe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether multiple requests can be dispatched to this version at once. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId">version_id</a></code> | <code>str</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deployment"></a>

```python
deployment: AppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#deployment AppEngineStandardAppVersion#deployment}

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.entrypoint"></a>

```python
entrypoint: AppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#entrypoint AppEngineStandardAppVersion#entrypoint}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#runtime AppEngineStandardAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.service"></a>

```python
service: str
```

- *Type:* str

AppEngine service resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#service AppEngineStandardAppVersion#service}

---

##### `app_engine_apis`<sup>Optional</sup> <a name="app_engine_apis" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.appEngineApis"></a>

```python
app_engine_apis: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows App Engine second generation runtimes to access the legacy bundled services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#app_engine_apis AppEngineStandardAppVersion#app_engine_apis}

---

##### `automatic_scaling`<sup>Optional</sup> <a name="automatic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.automaticScaling"></a>

```python
automatic_scaling: AppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#automatic_scaling AppEngineStandardAppVersion#automatic_scaling}

---

##### `basic_scaling`<sup>Optional</sup> <a name="basic_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.basicScaling"></a>

```python
basic_scaling: AppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

basic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#basic_scaling AppEngineStandardAppVersion#basic_scaling}

---

##### `delete_service_on_destroy`<sup>Optional</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.deleteServiceOnDestroy"></a>

```python
delete_service_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#delete_service_on_destroy AppEngineStandardAppVersion#delete_service_on_destroy}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#env_variables AppEngineStandardAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.handlers"></a>

```python
handlers: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#handlers AppEngineStandardAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#id AppEngineStandardAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_services`<sup>Optional</sup> <a name="inbound_services" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.inboundServices"></a>

```python
inbound_services: typing.List[str]
```

- *Type:* typing.List[str]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#inbound_services AppEngineStandardAppVersion#inbound_services}

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#instance_class AppEngineStandardAppVersion#instance_class}

---

##### `libraries`<sup>Optional</sup> <a name="libraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.libraries"></a>

```python
libraries: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionLibraries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]

libraries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#libraries AppEngineStandardAppVersion#libraries}

---

##### `manual_scaling`<sup>Optional</sup> <a name="manual_scaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.manualScaling"></a>

```python
manual_scaling: AppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#manual_scaling AppEngineStandardAppVersion#manual_scaling}

---

##### `noop_on_destroy`<sup>Optional</sup> <a name="noop_on_destroy" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.noopOnDestroy"></a>

```python
noop_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#noop_on_destroy AppEngineStandardAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#project AppEngineStandardAppVersion#project}.

---

##### `runtime_api_version`<sup>Optional</sup> <a name="runtime_api_version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.runtimeApiVersion"></a>

```python
runtime_api_version: str
```

- *Type:* str

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#runtime_api_version AppEngineStandardAppVersion#runtime_api_version}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#service_account AppEngineStandardAppVersion#service_account}

---

##### `threadsafe`<sup>Optional</sup> <a name="threadsafe" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.threadsafe"></a>

```python
threadsafe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether multiple requests can be dispatched to this version at once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#threadsafe AppEngineStandardAppVersion#threadsafe}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.timeouts"></a>

```python
timeouts: AppEngineStandardAppVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#timeouts AppEngineStandardAppVersion#timeouts}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#version_id AppEngineStandardAppVersion#version_id}

---

##### `vpc_access_connector`<sup>Optional</sup> <a name="vpc_access_connector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionConfig.property.vpcAccessConnector"></a>

```python
vpc_access_connector: AppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#vpc_access_connector AppEngineStandardAppVersion#vpc_access_connector}

---

### AppEngineStandardAppVersionDeployment <a name="AppEngineStandardAppVersionDeployment" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment(
  files: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionDeploymentFiles]] = None,
  zip: AppEngineStandardAppVersionDeploymentZip = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files">files</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]</code> | files block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | zip block. |

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.files"></a>

```python
files: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#files AppEngineStandardAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment.property.zip"></a>

```python
zip: AppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#zip AppEngineStandardAppVersion#zip}

---

### AppEngineStandardAppVersionDeploymentFiles <a name="AppEngineStandardAppVersionDeploymentFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles(
  name: str,
  source_url: str,
  sha1_sum: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl">source_url</a></code> | <code>str</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum">sha1_sum</a></code> | <code>str</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}.

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `sha1_sum`<sup>Optional</sup> <a name="sha1_sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles.property.sha1Sum"></a>

```python
sha1_sum: str
```

- *Type:* str

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#sha1_sum AppEngineStandardAppVersion#sha1_sum}

---

### AppEngineStandardAppVersionDeploymentZip <a name="AppEngineStandardAppVersionDeploymentZip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip(
  source_url: str,
  files_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl">source_url</a></code> | <code>str</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount">files_count</a></code> | <code>typing.Union[int, float]</code> | files count. |

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

##### `files_count`<sup>Optional</sup> <a name="files_count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip.property.filesCount"></a>

```python
files_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#files_count AppEngineStandardAppVersion#files_count}

---

### AppEngineStandardAppVersionEntrypoint <a name="AppEngineStandardAppVersionEntrypoint" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint(
  shell: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell">shell</a></code> | <code>str</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint.property.shell"></a>

```python
shell: str
```

- *Type:* str

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#shell AppEngineStandardAppVersion#shell}

---

### AppEngineStandardAppVersionHandlers <a name="AppEngineStandardAppVersionHandlers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers(
  auth_fail_action: str = None,
  login: str = None,
  redirect_http_response_code: str = None,
  script: AppEngineStandardAppVersionHandlersScript = None,
  security_level: str = None,
  static_files: AppEngineStandardAppVersionHandlersStaticFiles = None,
  url_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login">login</a></code> | <code>str</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode">redirect_http_response_code</a></code> | <code>str</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel">security_level</a></code> | <code>str</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles">static_files</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex">url_regex</a></code> | <code>str</code> | URL prefix. |

---

##### `auth_fail_action`<sup>Optional</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#auth_fail_action AppEngineStandardAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.login"></a>

```python
login: str
```

- *Type:* str

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#login AppEngineStandardAppVersion#login}

---

##### `redirect_http_response_code`<sup>Optional</sup> <a name="redirect_http_response_code" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.redirectHttpResponseCode"></a>

```python
redirect_http_response_code: str
```

- *Type:* str

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#redirect_http_response_code AppEngineStandardAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.script"></a>

```python
script: AppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#script AppEngineStandardAppVersion#script}

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#security_level AppEngineStandardAppVersion#security_level}

---

##### `static_files`<sup>Optional</sup> <a name="static_files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.staticFiles"></a>

```python
static_files: AppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#static_files AppEngineStandardAppVersion#static_files}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#url_regex AppEngineStandardAppVersion#url_regex}

---

### AppEngineStandardAppVersionHandlersScript <a name="AppEngineStandardAppVersionHandlersScript" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript(
  script_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath">script_path</a></code> | <code>str</code> | Path to the script from the application root directory. |

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#script_path AppEngineStandardAppVersion#script_path}

---

### AppEngineStandardAppVersionHandlersStaticFiles <a name="AppEngineStandardAppVersionHandlersStaticFiles" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles(
  application_readable: typing.Union[bool, IResolvable] = None,
  expiration: str = None,
  http_headers: typing.Mapping[str] = None,
  mime_type: str = None,
  path: str = None,
  require_matching_file: typing.Union[bool, IResolvable] = None,
  upload_path_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable">application_readable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>str</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType">mime_type</a></code> | <code>str</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>str</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile">require_matching_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex">upload_path_regex</a></code> | <code>str</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `application_readable`<sup>Optional</sup> <a name="application_readable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```python
application_readable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#application_readable AppEngineStandardAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#expiration AppEngineStandardAppVersion#expiration}

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#http_headers AppEngineStandardAppVersion#http_headers}

---

##### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#mime_type AppEngineStandardAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.path"></a>

```python
path: str
```

- *Type:* str

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#path AppEngineStandardAppVersion#path}

---

##### `require_matching_file`<sup>Optional</sup> <a name="require_matching_file" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```python
require_matching_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#require_matching_file AppEngineStandardAppVersion#require_matching_file}

---

##### `upload_path_regex`<sup>Optional</sup> <a name="upload_path_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```python
upload_path_regex: str
```

- *Type:* str

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#upload_path_regex AppEngineStandardAppVersion#upload_path_regex}

---

### AppEngineStandardAppVersionLibraries <a name="AppEngineStandardAppVersionLibraries" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries(
  name: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name">name</a></code> | <code>str</code> | Name of the library. Example "django". |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version">version</a></code> | <code>str</code> | Version of the library to select, or "latest". |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the library. Example "django".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries.property.version"></a>

```python
version: str
```

- *Type:* str

Version of the library to select, or "latest".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#version AppEngineStandardAppVersion#version}

---

### AppEngineStandardAppVersionManualScaling <a name="AppEngineStandardAppVersionManualScaling" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling(
  instances: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#instances AppEngineStandardAppVersion#instances}

---

### AppEngineStandardAppVersionTimeouts <a name="AppEngineStandardAppVersionTimeouts" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#create AppEngineStandardAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#delete AppEngineStandardAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#update AppEngineStandardAppVersion#update}.

---

### AppEngineStandardAppVersionVpcAccessConnector <a name="AppEngineStandardAppVersionVpcAccessConnector" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector(
  name: str,
  egress_setting: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name">name</a></code> | <code>str</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting">egress_setting</a></code> | <code>str</code> | The egress setting for the connector, controlling what traffic is diverted through it. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.name"></a>

```python
name: str
```

- *Type:* str

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#name AppEngineStandardAppVersion#name}

---

##### `egress_setting`<sup>Optional</sup> <a name="egress_setting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector.property.egressSetting"></a>

```python
egress_setting: str
```

- *Type:* str

The egress setting for the connector, controlling what traffic is diverted through it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#egress_setting AppEngineStandardAppVersion#egress_setting}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineStandardAppVersionAutomaticScalingOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings">put_standard_scheduler_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">reset_max_concurrent_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">reset_max_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">reset_max_pending_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">reset_min_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">reset_min_pending_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings">reset_standard_scheduler_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_standard_scheduler_settings` <a name="put_standard_scheduler_settings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings"></a>

```python
def put_standard_scheduler_settings(
  max_instances: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  target_cpu_utilization: typing.Union[int, float] = None,
  target_throughput_utilization: typing.Union[int, float] = None
) -> None
```

###### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.

**Note:** Starting from March 2025, App Engine sets the maxInstances default for standard environment deployments to 20. This change doesn't impact existing apps. To override the default, specify a new value between 0 and 2147483647, and deploy a new version or redeploy over an existing version. To disable the maxInstances default configuration setting, specify the maximum permitted value 2147483647.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#max_instances AppEngineStandardAppVersion#max_instances}

---

###### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#min_instances AppEngineStandardAppVersion#min_instances}

---

###### `target_cpu_utilization`<sup>Optional</sup> <a name="target_cpu_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.targetCpuUtilization"></a>

- *Type:* typing.Union[int, float]

Target CPU utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#target_cpu_utilization AppEngineStandardAppVersion#target_cpu_utilization}

---

###### `target_throughput_utilization`<sup>Optional</sup> <a name="target_throughput_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.putStandardSchedulerSettings.parameter.targetThroughputUtilization"></a>

- *Type:* typing.Union[int, float]

Target throughput utilization ratio to maintain when scaling.

Should be a value in the range [0.50, 0.95], zero, or a negative value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#target_throughput_utilization AppEngineStandardAppVersion#target_throughput_utilization}

---

##### `reset_max_concurrent_requests` <a name="reset_max_concurrent_requests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```python
def reset_max_concurrent_requests() -> None
```

##### `reset_max_idle_instances` <a name="reset_max_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```python
def reset_max_idle_instances() -> None
```

##### `reset_max_pending_latency` <a name="reset_max_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```python
def reset_max_pending_latency() -> None
```

##### `reset_min_idle_instances` <a name="reset_min_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```python
def reset_min_idle_instances() -> None
```

##### `reset_min_pending_latency` <a name="reset_min_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```python
def reset_min_pending_latency() -> None
```

##### `reset_standard_scheduler_settings` <a name="reset_standard_scheduler_settings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.resetStandardSchedulerSettings"></a>

```python
def reset_standard_scheduler_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings">standard_scheduler_settings</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">max_concurrent_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">max_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">max_pending_latency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">min_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">min_pending_latency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput">standard_scheduler_settings_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">max_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">max_pending_latency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency">min_pending_latency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_scheduler_settings`<sup>Required</sup> <a name="standard_scheduler_settings" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettings"></a>

```python
standard_scheduler_settings: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference</a>

---

##### `max_concurrent_requests_input`<sup>Optional</sup> <a name="max_concurrent_requests_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```python
max_concurrent_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_instances_input`<sup>Optional</sup> <a name="max_idle_instances_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```python
max_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_latency_input`<sup>Optional</sup> <a name="max_pending_latency_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```python
max_pending_latency_input: str
```

- *Type:* str

---

##### `min_idle_instances_input`<sup>Optional</sup> <a name="min_idle_instances_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```python
min_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pending_latency_input`<sup>Optional</sup> <a name="min_pending_latency_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```python
min_pending_latency_input: str
```

- *Type:* str

---

##### `standard_scheduler_settings_input`<sup>Optional</sup> <a name="standard_scheduler_settings_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.standardSchedulerSettingsInput"></a>

```python
standard_scheduler_settings_input: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---

##### `max_concurrent_requests`<sup>Required</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_instances`<sup>Required</sup> <a name="max_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```python
max_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_latency`<sup>Required</sup> <a name="max_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```python
max_pending_latency: str
```

- *Type:* str

---

##### `min_idle_instances`<sup>Required</sup> <a name="min_idle_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pending_latency`<sup>Required</sup> <a name="min_pending_latency" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```python
min_pending_latency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScaling">AppEngineStandardAppVersionAutomaticScaling</a>

---


### AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference <a name="AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization">reset_target_cpu_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization">reset_target_throughput_utilization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_target_cpu_utilization` <a name="reset_target_cpu_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetCpuUtilization"></a>

```python
def reset_target_cpu_utilization() -> None
```

##### `reset_target_throughput_utilization` <a name="reset_target_throughput_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.resetTargetThroughputUtilization"></a>

```python
def reset_target_throughput_utilization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput">target_cpu_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput">target_throughput_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization">target_cpu_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization">target_throughput_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization_input`<sup>Optional</sup> <a name="target_cpu_utilization_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilizationInput"></a>

```python
target_cpu_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_throughput_utilization_input`<sup>Optional</sup> <a name="target_throughput_utilization_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilizationInput"></a>

```python
target_throughput_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_cpu_utilization`<sup>Required</sup> <a name="target_cpu_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetCpuUtilization"></a>

```python
target_cpu_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_throughput_utilization`<sup>Required</sup> <a name="target_throughput_utilization" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.targetThroughputUtilization"></a>

```python
target_throughput_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings">AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings</a>

---


### AppEngineStandardAppVersionBasicScalingOutputReference <a name="AppEngineStandardAppVersionBasicScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScalingOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionBasicScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionBasicScaling">AppEngineStandardAppVersionBasicScaling</a>

---


### AppEngineStandardAppVersionDeploymentFilesList <a name="AppEngineStandardAppVersionDeploymentFilesList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineStandardAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]

---


### AppEngineStandardAppVersionDeploymentFilesOutputReference <a name="AppEngineStandardAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum">reset_sha1_sum</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sha1_sum` <a name="reset_sha1_sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```python
def reset_sha1_sum() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1_sum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1_sum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sha1_sum_input`<sup>Optional</sup> <a name="sha1_sum_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```python
sha1_sum_input: str
```

- *Type:* str

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sha1_sum`<sup>Required</sup> <a name="sha1_sum" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```python
sha1_sum: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineStandardAppVersionDeploymentFiles]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]

---


### AppEngineStandardAppVersionDeploymentOutputReference <a name="AppEngineStandardAppVersionDeploymentOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip">put_zip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles">reset_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip">reset_zip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_files` <a name="put_files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles"></a>

```python
def put_files(
  value: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionDeploymentFiles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]

---

##### `put_zip` <a name="put_zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip"></a>

```python
def put_zip(
  source_url: str,
  files_count: typing.Union[int, float] = None
) -> None
```

###### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.sourceUrl"></a>

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#source_url AppEngineStandardAppVersion#source_url}

---

###### `files_count`<sup>Optional</sup> <a name="files_count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.putZip.parameter.filesCount"></a>

- *Type:* typing.Union[int, float]

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#files_count AppEngineStandardAppVersion#files_count}

---

##### `reset_files` <a name="reset_files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetFiles"></a>

```python
def reset_files() -> None
```

##### `reset_zip` <a name="reset_zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.resetZip"></a>

```python
def reset_zip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput">zip_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.files"></a>

```python
files: AppEngineStandardAppVersionDeploymentFilesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFilesList">AppEngineStandardAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zip"></a>

```python
zip: AppEngineStandardAppVersionDeploymentZipOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference">AppEngineStandardAppVersionDeploymentZipOutputReference</a>

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentFiles">AppEngineStandardAppVersionDeploymentFiles</a>]]

---

##### `zip_input`<sup>Optional</sup> <a name="zip_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.zipInput"></a>

```python
zip_input: AppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeployment">AppEngineStandardAppVersionDeployment</a>

---


### AppEngineStandardAppVersionDeploymentZipOutputReference <a name="AppEngineStandardAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount">reset_files_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_files_count` <a name="reset_files_count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```python
def reset_files_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput">files_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount">files_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files_count_input`<sup>Optional</sup> <a name="files_count_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```python
files_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `files_count`<sup>Required</sup> <a name="files_count" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```python
files_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionDeploymentZip">AppEngineStandardAppVersionDeploymentZip</a>

---


### AppEngineStandardAppVersionEntrypointOutputReference <a name="AppEngineStandardAppVersionEntrypointOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput">shell_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shell_input`<sup>Optional</sup> <a name="shell_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shellInput"></a>

```python
shell_input: str
```

- *Type:* str

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.shell"></a>

```python
shell: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypointOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionEntrypoint">AppEngineStandardAppVersionEntrypoint</a>

---


### AppEngineStandardAppVersionHandlersList <a name="AppEngineStandardAppVersionHandlersList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineStandardAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]]

---


### AppEngineStandardAppVersionHandlersOutputReference <a name="AppEngineStandardAppVersionHandlersOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript">put_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles">put_static_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction">reset_auth_fail_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">reset_redirect_http_response_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript">reset_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles">reset_static_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex">reset_url_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script` <a name="put_script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript"></a>

```python
def put_script(
  script_path: str
) -> None
```

###### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putScript.parameter.scriptPath"></a>

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#script_path AppEngineStandardAppVersion#script_path}

---

##### `put_static_files` <a name="put_static_files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles"></a>

```python
def put_static_files(
  application_readable: typing.Union[bool, IResolvable] = None,
  expiration: str = None,
  http_headers: typing.Mapping[str] = None,
  mime_type: str = None,
  path: str = None,
  require_matching_file: typing.Union[bool, IResolvable] = None,
  upload_path_regex: str = None
) -> None
```

###### `application_readable`<sup>Optional</sup> <a name="application_readable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.applicationReadable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#application_readable AppEngineStandardAppVersion#application_readable}

---

###### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.expiration"></a>

- *Type:* str

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#expiration AppEngineStandardAppVersion#expiration}

---

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.httpHeaders"></a>

- *Type:* typing.Mapping[str]

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#http_headers AppEngineStandardAppVersion#http_headers}

---

###### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.mimeType"></a>

- *Type:* str

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#mime_type AppEngineStandardAppVersion#mime_type}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.path"></a>

- *Type:* str

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#path AppEngineStandardAppVersion#path}

---

###### `require_matching_file`<sup>Optional</sup> <a name="require_matching_file" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.requireMatchingFile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#require_matching_file AppEngineStandardAppVersion#require_matching_file}

---

###### `upload_path_regex`<sup>Optional</sup> <a name="upload_path_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.putStaticFiles.parameter.uploadPathRegex"></a>

- *Type:* str

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/app_engine_standard_app_version#upload_path_regex AppEngineStandardAppVersion#upload_path_regex}

---

##### `reset_auth_fail_action` <a name="reset_auth_fail_action" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```python
def reset_auth_fail_action() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_redirect_http_response_code` <a name="reset_redirect_http_response_code" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```python
def reset_redirect_http_response_code() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetScript"></a>

```python
def reset_script() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```

##### `reset_static_files` <a name="reset_static_files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetStaticFiles"></a>

```python
def reset_static_files() -> None
```

##### `reset_url_regex` <a name="reset_url_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.resetUrlRegex"></a>

```python
def reset_url_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles">static_files</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput">auth_fail_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirect_http_response_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput">script_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput">static_files_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput">url_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirect_http_response_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex">url_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.script"></a>

```python
script: AppEngineStandardAppVersionHandlersScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference">AppEngineStandardAppVersionHandlersScriptOutputReference</a>

---

##### `static_files`<sup>Required</sup> <a name="static_files" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFiles"></a>

```python
static_files: AppEngineStandardAppVersionHandlersStaticFilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference">AppEngineStandardAppVersionHandlersStaticFilesOutputReference</a>

---

##### `auth_fail_action_input`<sup>Optional</sup> <a name="auth_fail_action_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```python
auth_fail_action_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `redirect_http_response_code_input`<sup>Optional</sup> <a name="redirect_http_response_code_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```python
redirect_http_response_code_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.scriptInput"></a>

```python
script_input: AppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `static_files_input`<sup>Optional</sup> <a name="static_files_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```python
static_files_input: AppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---

##### `url_regex_input`<sup>Optional</sup> <a name="url_regex_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```python
url_regex_input: str
```

- *Type:* str

---

##### `auth_fail_action`<sup>Required</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `redirect_http_response_code`<sup>Required</sup> <a name="redirect_http_response_code" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```python
redirect_http_response_code: str
```

- *Type:* str

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `url_regex`<sup>Required</sup> <a name="url_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineStandardAppVersionHandlers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlers">AppEngineStandardAppVersionHandlers</a>]

---


### AppEngineStandardAppVersionHandlersScriptOutputReference <a name="AppEngineStandardAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput">script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath">script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_path_input`<sup>Optional</sup> <a name="script_path_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```python
script_path_input: str
```

- *Type:* str

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersScript">AppEngineStandardAppVersionHandlersScript</a>

---


### AppEngineStandardAppVersionHandlersStaticFilesOutputReference <a name="AppEngineStandardAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">reset_application_readable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType">reset_mime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">reset_require_matching_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">reset_upload_path_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_readable` <a name="reset_application_readable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```python
def reset_application_readable() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_mime_type` <a name="reset_mime_type" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```python
def reset_mime_type() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_require_matching_file` <a name="reset_require_matching_file" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```python
def reset_require_matching_file() -> None
```

##### `reset_upload_path_regex` <a name="reset_upload_path_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```python
def reset_upload_path_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">application_readable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">require_matching_file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">upload_path_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">application_readable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">require_matching_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">upload_path_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_readable_input`<sup>Optional</sup> <a name="application_readable_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```python
application_readable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mime_type_input`<sup>Optional</sup> <a name="mime_type_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```python
mime_type_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `require_matching_file_input`<sup>Optional</sup> <a name="require_matching_file_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```python
require_matching_file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upload_path_regex_input`<sup>Optional</sup> <a name="upload_path_regex_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```python
upload_path_regex_input: str
```

- *Type:* str

---

##### `application_readable`<sup>Required</sup> <a name="application_readable" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```python
application_readable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `require_matching_file`<sup>Required</sup> <a name="require_matching_file" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```python
require_matching_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upload_path_regex`<sup>Required</sup> <a name="upload_path_regex" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```python
upload_path_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionHandlersStaticFiles">AppEngineStandardAppVersionHandlersStaticFiles</a>

---


### AppEngineStandardAppVersionLibrariesList <a name="AppEngineStandardAppVersionLibrariesList" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineStandardAppVersionLibrariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineStandardAppVersionLibraries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]]

---


### AppEngineStandardAppVersionLibrariesOutputReference <a name="AppEngineStandardAppVersionLibrariesOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibrariesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineStandardAppVersionLibraries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionLibraries">AppEngineStandardAppVersionLibraries</a>]

---


### AppEngineStandardAppVersionManualScalingOutputReference <a name="AppEngineStandardAppVersionManualScalingOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScalingOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionManualScaling">AppEngineStandardAppVersionManualScaling</a>

---


### AppEngineStandardAppVersionTimeoutsOutputReference <a name="AppEngineStandardAppVersionTimeoutsOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppEngineStandardAppVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionTimeouts">AppEngineStandardAppVersionTimeouts</a>]

---


### AppEngineStandardAppVersionVpcAccessConnectorOutputReference <a name="AppEngineStandardAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_standard_app_version

appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting">reset_egress_setting</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_egress_setting` <a name="reset_egress_setting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.resetEgressSetting"></a>

```python
def reset_egress_setting() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput">egress_setting_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting">egress_setting</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `egress_setting_input`<sup>Optional</sup> <a name="egress_setting_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSettingInput"></a>

```python
egress_setting_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `egress_setting`<sup>Required</sup> <a name="egress_setting" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.egressSetting"></a>

```python
egress_setting: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineStandardAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineStandardAppVersion.AppEngineStandardAppVersionVpcAccessConnector">AppEngineStandardAppVersionVpcAccessConnector</a>

---



