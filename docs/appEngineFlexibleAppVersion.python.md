# `google_app_engine_flexible_app_version`

Refer to the Terraform Registory for docs: [`google_app_engine_flexible_app_version`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version).

# `appEngineFlexibleAppVersion` Submodule <a name="`appEngineFlexibleAppVersion` Submodule" id="@cdktf/provider-google.appEngineFlexibleAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineFlexibleAppVersion <a name="AppEngineFlexibleAppVersion" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version google_app_engine_flexible_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  liveness_check: AppEngineFlexibleAppVersionLivenessCheck,
  readiness_check: AppEngineFlexibleAppVersionReadinessCheck,
  runtime: str,
  service: str,
  api_config: AppEngineFlexibleAppVersionApiConfig = None,
  automatic_scaling: AppEngineFlexibleAppVersionAutomaticScaling = None,
  beta_settings: typing.Mapping[str] = None,
  default_expiration: str = None,
  delete_service_on_destroy: typing.Union[bool, IResolvable] = None,
  deployment: AppEngineFlexibleAppVersionDeployment = None,
  endpoints_api_service: AppEngineFlexibleAppVersionEndpointsApiService = None,
  entrypoint: AppEngineFlexibleAppVersionEntrypoint = None,
  env_variables: typing.Mapping[str] = None,
  handlers: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionHandlers]] = None,
  id: str = None,
  inbound_services: typing.List[str] = None,
  instance_class: str = None,
  manual_scaling: AppEngineFlexibleAppVersionManualScaling = None,
  network: AppEngineFlexibleAppVersionNetwork = None,
  nobuild_files_regex: str = None,
  noop_on_destroy: typing.Union[bool, IResolvable] = None,
  project: str = None,
  resources: AppEngineFlexibleAppVersionResources = None,
  runtime_api_version: str = None,
  runtime_channel: str = None,
  runtime_main_executable_path: str = None,
  service_account: str = None,
  serving_status: str = None,
  timeouts: AppEngineFlexibleAppVersionTimeouts = None,
  version_id: str = None,
  vpc_access_connector: AppEngineFlexibleAppVersionVpcAccessConnector = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.livenessCheck">liveness_check</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.readinessCheck">readiness_check</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.service">service</a></code> | <code>str</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.apiConfig">api_config</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.betaSettings">beta_settings</a></code> | <code>typing.Mapping[str]</code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.defaultExpiration">default_expiration</a></code> | <code>str</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.endpointsApiService">endpoints_api_service</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.handlers">handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.instanceClass">instance_class</a></code> | <code>str</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.nobuildFilesRegex">nobuild_files_regex</a></code> | <code>str</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtimeChannel">runtime_channel</a></code> | <code>str</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtimeMainExecutablePath">runtime_main_executable_path</a></code> | <code>str</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.servingStatus">serving_status</a></code> | <code>str</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.versionId">version_id</a></code> | <code>str</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `liveness_check`<sup>Required</sup> <a name="liveness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.livenessCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#liveness_check AppEngineFlexibleAppVersion#liveness_check}

---

##### `readiness_check`<sup>Required</sup> <a name="readiness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.readinessCheck"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#readiness_check AppEngineFlexibleAppVersion#readiness_check}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtime"></a>

- *Type:* str

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime AppEngineFlexibleAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.service"></a>

- *Type:* str

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#service AppEngineFlexibleAppVersion#service}

---

##### `api_config`<sup>Optional</sup> <a name="api_config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.apiConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#api_config AppEngineFlexibleAppVersion#api_config}

---

##### `automatic_scaling`<sup>Optional</sup> <a name="automatic_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.automaticScaling"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#automatic_scaling AppEngineFlexibleAppVersion#automatic_scaling}

---

##### `beta_settings`<sup>Optional</sup> <a name="beta_settings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.betaSettings"></a>

- *Type:* typing.Mapping[str]

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#beta_settings AppEngineFlexibleAppVersion#beta_settings}

---

##### `default_expiration`<sup>Optional</sup> <a name="default_expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.defaultExpiration"></a>

- *Type:* str

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#default_expiration AppEngineFlexibleAppVersion#default_expiration}

---

##### `delete_service_on_destroy`<sup>Optional</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.deleteServiceOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#delete_service_on_destroy AppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.deployment"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#deployment AppEngineFlexibleAppVersion#deployment}

---

##### `endpoints_api_service`<sup>Optional</sup> <a name="endpoints_api_service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.endpointsApiService"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#endpoints_api_service AppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.entrypoint"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#entrypoint AppEngineFlexibleAppVersion#entrypoint}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.envVariables"></a>

- *Type:* typing.Mapping[str]

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#env_variables AppEngineFlexibleAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.handlers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#handlers AppEngineFlexibleAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_services`<sup>Optional</sup> <a name="inbound_services" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.inboundServices"></a>

- *Type:* typing.List[str]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#inbound_services AppEngineFlexibleAppVersion#inbound_services}

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.instanceClass"></a>

- *Type:* str

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#instance_class AppEngineFlexibleAppVersion#instance_class}

---

##### `manual_scaling`<sup>Optional</sup> <a name="manual_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.manualScaling"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#manual_scaling AppEngineFlexibleAppVersion#manual_scaling}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#network AppEngineFlexibleAppVersion#network}

---

##### `nobuild_files_regex`<sup>Optional</sup> <a name="nobuild_files_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.nobuildFilesRegex"></a>

- *Type:* str

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#nobuild_files_regex AppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `noop_on_destroy`<sup>Optional</sup> <a name="noop_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.noopOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#noop_on_destroy AppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.resources"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#resources AppEngineFlexibleAppVersion#resources}

---

##### `runtime_api_version`<sup>Optional</sup> <a name="runtime_api_version" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtimeApiVersion"></a>

- *Type:* str

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime_api_version AppEngineFlexibleAppVersion#runtime_api_version}

---

##### `runtime_channel`<sup>Optional</sup> <a name="runtime_channel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtimeChannel"></a>

- *Type:* str

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime_channel AppEngineFlexibleAppVersion#runtime_channel}

---

##### `runtime_main_executable_path`<sup>Optional</sup> <a name="runtime_main_executable_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.runtimeMainExecutablePath"></a>

- *Type:* str

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime_main_executable_path AppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.serviceAccount"></a>

- *Type:* str

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#service_account AppEngineFlexibleAppVersion#service_account}

---

##### `serving_status`<sup>Optional</sup> <a name="serving_status" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.servingStatus"></a>

- *Type:* str

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#serving_status AppEngineFlexibleAppVersion#serving_status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#timeouts AppEngineFlexibleAppVersion#timeouts}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.versionId"></a>

- *Type:* str

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#version_id AppEngineFlexibleAppVersion#version_id}

---

##### `vpc_access_connector`<sup>Optional</sup> <a name="vpc_access_connector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.Initializer.parameter.vpcAccessConnector"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#vpc_access_connector AppEngineFlexibleAppVersion#vpc_access_connector}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig">put_api_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling">put_automatic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment">put_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService">put_endpoints_api_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint">put_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers">put_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck">put_liveness_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling">put_manual_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck">put_readiness_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources">put_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector">put_vpc_access_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetApiConfig">reset_api_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetAutomaticScaling">reset_automatic_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetBetaSettings">reset_beta_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDefaultExpiration">reset_default_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy">reset_delete_service_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeployment">reset_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEndpointsApiService">reset_endpoints_api_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEntrypoint">reset_entrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEnvVariables">reset_env_variables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetHandlers">reset_handlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInboundServices">reset_inbound_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInstanceClass">reset_instance_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetManualScaling">reset_manual_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNobuildFilesRegex">reset_nobuild_files_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNoopOnDestroy">reset_noop_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetResources">reset_resources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeApiVersion">reset_runtime_api_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeChannel">reset_runtime_channel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath">reset_runtime_main_executable_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServingStatus">reset_serving_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVersionId">reset_version_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVpcAccessConnector">reset_vpc_access_connector</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_api_config` <a name="put_api_config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig"></a>

```python
def put_api_config(
  script: str,
  auth_fail_action: str = None,
  login: str = None,
  security_level: str = None,
  url: str = None
) -> None
```

###### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.script"></a>

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

###### `auth_fail_action`<sup>Optional</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.authFailAction"></a>

- *Type:* str

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

###### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.login"></a>

- *Type:* str

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

###### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.securityLevel"></a>

- *Type:* str

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putApiConfig.parameter.url"></a>

- *Type:* str

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#url AppEngineFlexibleAppVersion#url}

---

##### `put_automatic_scaling` <a name="put_automatic_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling"></a>

```python
def put_automatic_scaling(
  cpu_utilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization,
  cool_down_period: str = None,
  disk_utilization: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization = None,
  max_concurrent_requests: typing.Union[int, float] = None,
  max_idle_instances: typing.Union[int, float] = None,
  max_pending_latency: str = None,
  max_total_instances: typing.Union[int, float] = None,
  min_idle_instances: typing.Union[int, float] = None,
  min_pending_latency: str = None,
  min_total_instances: typing.Union[int, float] = None,
  network_utilization: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization = None,
  request_utilization: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization = None
) -> None
```

###### `cpu_utilization`<sup>Required</sup> <a name="cpu_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.cpuUtilization"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cpu_utilization AppEngineFlexibleAppVersion#cpu_utilization}

---

###### `cool_down_period`<sup>Optional</sup> <a name="cool_down_period" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.coolDownPeriod"></a>

- *Type:* str

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cool_down_period AppEngineFlexibleAppVersion#cool_down_period}

---

###### `disk_utilization`<sup>Optional</sup> <a name="disk_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.diskUtilization"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#disk_utilization AppEngineFlexibleAppVersion#disk_utilization}

---

###### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.maxConcurrentRequests"></a>

- *Type:* typing.Union[int, float]

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_concurrent_requests AppEngineFlexibleAppVersion#max_concurrent_requests}

---

###### `max_idle_instances`<sup>Optional</sup> <a name="max_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.maxIdleInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_idle_instances AppEngineFlexibleAppVersion#max_idle_instances}

---

###### `max_pending_latency`<sup>Optional</sup> <a name="max_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.maxPendingLatency"></a>

- *Type:* str

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_pending_latency AppEngineFlexibleAppVersion#max_pending_latency}

---

###### `max_total_instances`<sup>Optional</sup> <a name="max_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.maxTotalInstances"></a>

- *Type:* typing.Union[int, float]

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_total_instances AppEngineFlexibleAppVersion#max_total_instances}

---

###### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.minIdleInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#min_idle_instances AppEngineFlexibleAppVersion#min_idle_instances}

---

###### `min_pending_latency`<sup>Optional</sup> <a name="min_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.minPendingLatency"></a>

- *Type:* str

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#min_pending_latency AppEngineFlexibleAppVersion#min_pending_latency}

---

###### `min_total_instances`<sup>Optional</sup> <a name="min_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.minTotalInstances"></a>

- *Type:* typing.Union[int, float]

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#min_total_instances AppEngineFlexibleAppVersion#min_total_instances}

---

###### `network_utilization`<sup>Optional</sup> <a name="network_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.networkUtilization"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#network_utilization AppEngineFlexibleAppVersion#network_utilization}

---

###### `request_utilization`<sup>Optional</sup> <a name="request_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putAutomaticScaling.parameter.requestUtilization"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#request_utilization AppEngineFlexibleAppVersion#request_utilization}

---

##### `put_deployment` <a name="put_deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment"></a>

```python
def put_deployment(
  cloud_build_options: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions = None,
  container: AppEngineFlexibleAppVersionDeploymentContainer = None,
  files: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionDeploymentFiles]] = None,
  zip: AppEngineFlexibleAppVersionDeploymentZip = None
) -> None
```

###### `cloud_build_options`<sup>Optional</sup> <a name="cloud_build_options" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment.parameter.cloudBuildOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cloud_build_options AppEngineFlexibleAppVersion#cloud_build_options}

---

###### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment.parameter.container"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#container AppEngineFlexibleAppVersion#container}

---

###### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment.parameter.files"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#files AppEngineFlexibleAppVersion#files}

---

###### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putDeployment.parameter.zip"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#zip AppEngineFlexibleAppVersion#zip}

---

##### `put_endpoints_api_service` <a name="put_endpoints_api_service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService"></a>

```python
def put_endpoints_api_service(
  name: str,
  config_id: str = None,
  disable_trace_sampling: typing.Union[bool, IResolvable] = None,
  rollout_strategy: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService.parameter.name"></a>

- *Type:* str

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

###### `config_id`<sup>Optional</sup> <a name="config_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService.parameter.configId"></a>

- *Type:* str

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#config_id AppEngineFlexibleAppVersion#config_id}

---

###### `disable_trace_sampling`<sup>Optional</sup> <a name="disable_trace_sampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService.parameter.disableTraceSampling"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#disable_trace_sampling AppEngineFlexibleAppVersion#disable_trace_sampling}

---

###### `rollout_strategy`<sup>Optional</sup> <a name="rollout_strategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEndpointsApiService.parameter.rolloutStrategy"></a>

- *Type:* str

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#rollout_strategy AppEngineFlexibleAppVersion#rollout_strategy}

---

##### `put_entrypoint` <a name="put_entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint"></a>

```python
def put_entrypoint(
  shell: str
) -> None
```

###### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putEntrypoint.parameter.shell"></a>

- *Type:* str

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#shell AppEngineFlexibleAppVersion#shell}

---

##### `put_handlers` <a name="put_handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers"></a>

```python
def put_handlers(
  value: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionHandlers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putHandlers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]

---

##### `put_liveness_check` <a name="put_liveness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck"></a>

```python
def put_liveness_check(
  path: str,
  check_interval: str = None,
  failure_threshold: typing.Union[int, float] = None,
  host: str = None,
  initial_delay: str = None,
  success_threshold: typing.Union[int, float] = None,
  timeout: str = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.path"></a>

- *Type:* str

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

###### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.checkInterval"></a>

- *Type:* str

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.host"></a>

- *Type:* str

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

###### `initial_delay`<sup>Optional</sup> <a name="initial_delay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.initialDelay"></a>

- *Type:* str

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#initial_delay AppEngineFlexibleAppVersion#initial_delay}

---

###### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.successThreshold"></a>

- *Type:* typing.Union[int, float]

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putLivenessCheck.parameter.timeout"></a>

- *Type:* str

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

##### `put_manual_scaling` <a name="put_manual_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling"></a>

```python
def put_manual_scaling(
  instances: typing.Union[int, float]
) -> None
```

###### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putManualScaling.parameter.instances"></a>

- *Type:* typing.Union[int, float]

Number of instances to assign to the service at the start.

*Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#instances AppEngineFlexibleAppVersion#instances}

---

##### `put_network` <a name="put_network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork"></a>

```python
def put_network(
  name: str,
  forwarded_ports: typing.List[str] = None,
  instance_tag: str = None,
  session_affinity: typing.Union[bool, IResolvable] = None,
  subnetwork: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.name"></a>

- *Type:* str

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

###### `forwarded_ports`<sup>Optional</sup> <a name="forwarded_ports" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.forwardedPorts"></a>

- *Type:* typing.List[str]

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#forwarded_ports AppEngineFlexibleAppVersion#forwarded_ports}

---

###### `instance_tag`<sup>Optional</sup> <a name="instance_tag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.instanceTag"></a>

- *Type:* str

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#instance_tag AppEngineFlexibleAppVersion#instance_tag}

---

###### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.sessionAffinity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#session_affinity AppEngineFlexibleAppVersion#session_affinity}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putNetwork.parameter.subnetwork"></a>

- *Type:* str

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#subnetwork AppEngineFlexibleAppVersion#subnetwork}

---

##### `put_readiness_check` <a name="put_readiness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck"></a>

```python
def put_readiness_check(
  path: str,
  app_start_timeout: str = None,
  check_interval: str = None,
  failure_threshold: typing.Union[int, float] = None,
  host: str = None,
  success_threshold: typing.Union[int, float] = None,
  timeout: str = None
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.path"></a>

- *Type:* str

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

###### `app_start_timeout`<sup>Optional</sup> <a name="app_start_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.appStartTimeout"></a>

- *Type:* str

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#app_start_timeout AppEngineFlexibleAppVersion#app_start_timeout}

---

###### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.checkInterval"></a>

- *Type:* str

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.host"></a>

- *Type:* str

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

###### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.successThreshold"></a>

- *Type:* typing.Union[int, float]

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putReadinessCheck.parameter.timeout"></a>

- *Type:* str

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

##### `put_resources` <a name="put_resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources"></a>

```python
def put_resources(
  cpu: typing.Union[int, float] = None,
  disk_gb: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  volumes: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionResourcesVolumes]] = None
) -> None
```

###### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources.parameter.cpu"></a>

- *Type:* typing.Union[int, float]

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cpu AppEngineFlexibleAppVersion#cpu}

---

###### `disk_gb`<sup>Optional</sup> <a name="disk_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources.parameter.diskGb"></a>

- *Type:* typing.Union[int, float]

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#disk_gb AppEngineFlexibleAppVersion#disk_gb}

---

###### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources.parameter.memoryGb"></a>

- *Type:* typing.Union[int, float]

Memory (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#memory_gb AppEngineFlexibleAppVersion#memory_gb}

---

###### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putResources.parameter.volumes"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#volumes AppEngineFlexibleAppVersion#volumes}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}.

---

##### `put_vpc_access_connector` <a name="put_vpc_access_connector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector"></a>

```python
def put_vpc_access_connector(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.putVpcAccessConnector.parameter.name"></a>

- *Type:* str

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `reset_api_config` <a name="reset_api_config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetApiConfig"></a>

```python
def reset_api_config() -> None
```

##### `reset_automatic_scaling` <a name="reset_automatic_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetAutomaticScaling"></a>

```python
def reset_automatic_scaling() -> None
```

##### `reset_beta_settings` <a name="reset_beta_settings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetBetaSettings"></a>

```python
def reset_beta_settings() -> None
```

##### `reset_default_expiration` <a name="reset_default_expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDefaultExpiration"></a>

```python
def reset_default_expiration() -> None
```

##### `reset_delete_service_on_destroy` <a name="reset_delete_service_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy"></a>

```python
def reset_delete_service_on_destroy() -> None
```

##### `reset_deployment` <a name="reset_deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetDeployment"></a>

```python
def reset_deployment() -> None
```

##### `reset_endpoints_api_service` <a name="reset_endpoints_api_service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEndpointsApiService"></a>

```python
def reset_endpoints_api_service() -> None
```

##### `reset_entrypoint` <a name="reset_entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEntrypoint"></a>

```python
def reset_entrypoint() -> None
```

##### `reset_env_variables` <a name="reset_env_variables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetEnvVariables"></a>

```python
def reset_env_variables() -> None
```

##### `reset_handlers` <a name="reset_handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetHandlers"></a>

```python
def reset_handlers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inbound_services` <a name="reset_inbound_services" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInboundServices"></a>

```python
def reset_inbound_services() -> None
```

##### `reset_instance_class` <a name="reset_instance_class" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetInstanceClass"></a>

```python
def reset_instance_class() -> None
```

##### `reset_manual_scaling` <a name="reset_manual_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetManualScaling"></a>

```python
def reset_manual_scaling() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_nobuild_files_regex` <a name="reset_nobuild_files_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNobuildFilesRegex"></a>

```python
def reset_nobuild_files_regex() -> None
```

##### `reset_noop_on_destroy` <a name="reset_noop_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetNoopOnDestroy"></a>

```python
def reset_noop_on_destroy() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetResources"></a>

```python
def reset_resources() -> None
```

##### `reset_runtime_api_version` <a name="reset_runtime_api_version" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeApiVersion"></a>

```python
def reset_runtime_api_version() -> None
```

##### `reset_runtime_channel` <a name="reset_runtime_channel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeChannel"></a>

```python
def reset_runtime_channel() -> None
```

##### `reset_runtime_main_executable_path` <a name="reset_runtime_main_executable_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath"></a>

```python
def reset_runtime_main_executable_path() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_serving_status` <a name="reset_serving_status" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetServingStatus"></a>

```python
def reset_serving_status() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version_id` <a name="reset_version_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVersionId"></a>

```python
def reset_version_id() -> None
```

##### `reset_vpc_access_connector` <a name="reset_vpc_access_connector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.resetVpcAccessConnector"></a>

```python
def reset_vpc_access_connector() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfig">api_config</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference">AppEngineFlexibleAppVersionApiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference">AppEngineFlexibleAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference">AppEngineFlexibleAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiService">endpoints_api_service</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference">AppEngineFlexibleAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList">AppEngineFlexibleAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheck">liveness_check</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference">AppEngineFlexibleAppVersionLivenessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference">AppEngineFlexibleAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference">AppEngineFlexibleAppVersionNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheck">readiness_check</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference">AppEngineFlexibleAppVersionReadinessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference">AppEngineFlexibleAppVersionResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference">AppEngineFlexibleAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfigInput">api_config_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScalingInput">automatic_scaling_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettingsInput">beta_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpirationInput">default_expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput">delete_service_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deploymentInput">deployment_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiServiceInput">endpoints_api_service_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypointInput">entrypoint_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariablesInput">env_variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlersInput">handlers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServicesInput">inbound_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClassInput">instance_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheckInput">liveness_check_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScalingInput">manual_scaling_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.networkInput">network_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegexInput">nobuild_files_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroyInput">noop_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheckInput">readiness_check_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resourcesInput">resources_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersionInput">runtime_api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannelInput">runtime_channel_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput">runtime_main_executable_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatusInput">serving_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionIdInput">version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnectorInput">vpc_access_connector_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettings">beta_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpiration">default_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClass">instance_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegex">nobuild_files_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannel">runtime_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePath">runtime_main_executable_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatus">serving_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_config`<sup>Required</sup> <a name="api_config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfig"></a>

```python
api_config: AppEngineFlexibleAppVersionApiConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference">AppEngineFlexibleAppVersionApiConfigOutputReference</a>

---

##### `automatic_scaling`<sup>Required</sup> <a name="automatic_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScaling"></a>

```python
automatic_scaling: AppEngineFlexibleAppVersionAutomaticScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference">AppEngineFlexibleAppVersionAutomaticScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deployment"></a>

```python
deployment: AppEngineFlexibleAppVersionDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference">AppEngineFlexibleAppVersionDeploymentOutputReference</a>

---

##### `endpoints_api_service`<sup>Required</sup> <a name="endpoints_api_service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiService"></a>

```python
endpoints_api_service: AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypoint"></a>

```python
entrypoint: AppEngineFlexibleAppVersionEntrypointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference">AppEngineFlexibleAppVersionEntrypointOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlers"></a>

```python
handlers: AppEngineFlexibleAppVersionHandlersList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList">AppEngineFlexibleAppVersionHandlersList</a>

---

##### `liveness_check`<sup>Required</sup> <a name="liveness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheck"></a>

```python
liveness_check: AppEngineFlexibleAppVersionLivenessCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference">AppEngineFlexibleAppVersionLivenessCheckOutputReference</a>

---

##### `manual_scaling`<sup>Required</sup> <a name="manual_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScaling"></a>

```python
manual_scaling: AppEngineFlexibleAppVersionManualScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference">AppEngineFlexibleAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.network"></a>

```python
network: AppEngineFlexibleAppVersionNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference">AppEngineFlexibleAppVersionNetworkOutputReference</a>

---

##### `readiness_check`<sup>Required</sup> <a name="readiness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheck"></a>

```python
readiness_check: AppEngineFlexibleAppVersionReadinessCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference">AppEngineFlexibleAppVersionReadinessCheckOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resources"></a>

```python
resources: AppEngineFlexibleAppVersionResourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference">AppEngineFlexibleAppVersionResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeouts"></a>

```python
timeouts: AppEngineFlexibleAppVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference">AppEngineFlexibleAppVersionTimeoutsOutputReference</a>

---

##### `vpc_access_connector`<sup>Required</sup> <a name="vpc_access_connector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnector"></a>

```python
vpc_access_connector: AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a>

---

##### `api_config_input`<sup>Optional</sup> <a name="api_config_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.apiConfigInput"></a>

```python
api_config_input: AppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---

##### `automatic_scaling_input`<sup>Optional</sup> <a name="automatic_scaling_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.automaticScalingInput"></a>

```python
automatic_scaling_input: AppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `beta_settings_input`<sup>Optional</sup> <a name="beta_settings_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettingsInput"></a>

```python
beta_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_expiration_input`<sup>Optional</sup> <a name="default_expiration_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpirationInput"></a>

```python
default_expiration_input: str
```

- *Type:* str

---

##### `delete_service_on_destroy_input`<sup>Optional</sup> <a name="delete_service_on_destroy_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput"></a>

```python
delete_service_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deployment_input`<sup>Optional</sup> <a name="deployment_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deploymentInput"></a>

```python
deployment_input: AppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---

##### `endpoints_api_service_input`<sup>Optional</sup> <a name="endpoints_api_service_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.endpointsApiServiceInput"></a>

```python
endpoints_api_service_input: AppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `entrypoint_input`<sup>Optional</sup> <a name="entrypoint_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.entrypointInput"></a>

```python
entrypoint_input: AppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---

##### `env_variables_input`<sup>Optional</sup> <a name="env_variables_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariablesInput"></a>

```python
env_variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `handlers_input`<sup>Optional</sup> <a name="handlers_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.handlersInput"></a>

```python
handlers_input: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inbound_services_input`<sup>Optional</sup> <a name="inbound_services_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServicesInput"></a>

```python
inbound_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_class_input`<sup>Optional</sup> <a name="instance_class_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClassInput"></a>

```python
instance_class_input: str
```

- *Type:* str

---

##### `liveness_check_input`<sup>Optional</sup> <a name="liveness_check_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.livenessCheckInput"></a>

```python
liveness_check_input: AppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `manual_scaling_input`<sup>Optional</sup> <a name="manual_scaling_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.manualScalingInput"></a>

```python
manual_scaling_input: AppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.networkInput"></a>

```python
network_input: AppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---

##### `nobuild_files_regex_input`<sup>Optional</sup> <a name="nobuild_files_regex_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegexInput"></a>

```python
nobuild_files_regex_input: str
```

- *Type:* str

---

##### `noop_on_destroy_input`<sup>Optional</sup> <a name="noop_on_destroy_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroyInput"></a>

```python
noop_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `readiness_check_input`<sup>Optional</sup> <a name="readiness_check_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.readinessCheckInput"></a>

```python
readiness_check_input: AppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.resourcesInput"></a>

```python
resources_input: AppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---

##### `runtime_api_version_input`<sup>Optional</sup> <a name="runtime_api_version_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersionInput"></a>

```python
runtime_api_version_input: str
```

- *Type:* str

---

##### `runtime_channel_input`<sup>Optional</sup> <a name="runtime_channel_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannelInput"></a>

```python
runtime_channel_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `runtime_main_executable_path_input`<sup>Optional</sup> <a name="runtime_main_executable_path_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput"></a>

```python
runtime_main_executable_path_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `serving_status_input`<sup>Optional</sup> <a name="serving_status_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatusInput"></a>

```python
serving_status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AppEngineFlexibleAppVersionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>, cdktf.IResolvable]

---

##### `version_id_input`<sup>Optional</sup> <a name="version_id_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionIdInput"></a>

```python
version_id_input: str
```

- *Type:* str

---

##### `vpc_access_connector_input`<sup>Optional</sup> <a name="vpc_access_connector_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.vpcAccessConnectorInput"></a>

```python
vpc_access_connector_input: AppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `beta_settings`<sup>Required</sup> <a name="beta_settings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.betaSettings"></a>

```python
beta_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_expiration`<sup>Required</sup> <a name="default_expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.defaultExpiration"></a>

```python
default_expiration: str
```

- *Type:* str

---

##### `delete_service_on_destroy`<sup>Required</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.deleteServiceOnDestroy"></a>

```python
delete_service_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `env_variables`<sup>Required</sup> <a name="env_variables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inbound_services`<sup>Required</sup> <a name="inbound_services" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.inboundServices"></a>

```python
inbound_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_class`<sup>Required</sup> <a name="instance_class" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

---

##### `nobuild_files_regex`<sup>Required</sup> <a name="nobuild_files_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.nobuildFilesRegex"></a>

```python
nobuild_files_regex: str
```

- *Type:* str

---

##### `noop_on_destroy`<sup>Required</sup> <a name="noop_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.noopOnDestroy"></a>

```python
noop_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `runtime_api_version`<sup>Required</sup> <a name="runtime_api_version" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeApiVersion"></a>

```python
runtime_api_version: str
```

- *Type:* str

---

##### `runtime_channel`<sup>Required</sup> <a name="runtime_channel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeChannel"></a>

```python
runtime_channel: str
```

- *Type:* str

---

##### `runtime_main_executable_path`<sup>Required</sup> <a name="runtime_main_executable_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.runtimeMainExecutablePath"></a>

```python
runtime_main_executable_path: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `serving_status`<sup>Required</sup> <a name="serving_status" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.servingStatus"></a>

```python
serving_status: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineFlexibleAppVersionApiConfig <a name="AppEngineFlexibleAppVersionApiConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig(
  script: str,
  auth_fail_action: str = None,
  login: str = None,
  security_level: str = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.script">script</a></code> | <code>str</code> | Path to the script from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.login">login</a></code> | <code>str</code> | Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.securityLevel">security_level</a></code> | <code>str</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.url">url</a></code> | <code>str</code> | URL to serve the endpoint at. |

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.script"></a>

```python
script: str
```

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

##### `auth_fail_action`<sup>Optional</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.login"></a>

```python
login: str
```

- *Type:* str

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig.property.url"></a>

```python
url: str
```

- *Type:* str

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#url AppEngineFlexibleAppVersion#url}

---

### AppEngineFlexibleAppVersionAutomaticScaling <a name="AppEngineFlexibleAppVersionAutomaticScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling(
  cpu_utilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization,
  cool_down_period: str = None,
  disk_utilization: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization = None,
  max_concurrent_requests: typing.Union[int, float] = None,
  max_idle_instances: typing.Union[int, float] = None,
  max_pending_latency: str = None,
  max_total_instances: typing.Union[int, float] = None,
  min_idle_instances: typing.Union[int, float] = None,
  min_pending_latency: str = None,
  min_total_instances: typing.Union[int, float] = None,
  network_utilization: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization = None,
  request_utilization: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization">cpu_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod">cool_down_period</a></code> | <code>str</code> | The time period that the Autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization">disk_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | disk_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances">max_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency">max_pending_latency</a></code> | <code>str</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances">max_total_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum number of instances that should be started to handle requests for this version. Default: 20. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency">min_pending_latency</a></code> | <code>str</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances">min_total_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum number of running instances that should be maintained for this version. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization">network_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | network_utilization block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization">request_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | request_utilization block. |

---

##### `cpu_utilization`<sup>Required</sup> <a name="cpu_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization"></a>

```python
cpu_utilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cpu_utilization AppEngineFlexibleAppVersion#cpu_utilization}

---

##### `cool_down_period`<sup>Optional</sup> <a name="cool_down_period" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod"></a>

```python
cool_down_period: str
```

- *Type:* str

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cool_down_period AppEngineFlexibleAppVersion#cool_down_period}

---

##### `disk_utilization`<sup>Optional</sup> <a name="disk_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization"></a>

```python
disk_utilization: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#disk_utilization AppEngineFlexibleAppVersion#disk_utilization}

---

##### `max_concurrent_requests`<sup>Optional</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_concurrent_requests AppEngineFlexibleAppVersion#max_concurrent_requests}

---

##### `max_idle_instances`<sup>Optional</sup> <a name="max_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```python
max_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_idle_instances AppEngineFlexibleAppVersion#max_idle_instances}

---

##### `max_pending_latency`<sup>Optional</sup> <a name="max_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```python
max_pending_latency: str
```

- *Type:* str

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_pending_latency AppEngineFlexibleAppVersion#max_pending_latency}

---

##### `max_total_instances`<sup>Optional</sup> <a name="max_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances"></a>

```python
max_total_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#max_total_instances AppEngineFlexibleAppVersion#max_total_instances}

---

##### `min_idle_instances`<sup>Optional</sup> <a name="min_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#min_idle_instances AppEngineFlexibleAppVersion#min_idle_instances}

---

##### `min_pending_latency`<sup>Optional</sup> <a name="min_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency"></a>

```python
min_pending_latency: str
```

- *Type:* str

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#min_pending_latency AppEngineFlexibleAppVersion#min_pending_latency}

---

##### `min_total_instances`<sup>Optional</sup> <a name="min_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances"></a>

```python
min_total_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#min_total_instances AppEngineFlexibleAppVersion#min_total_instances}

---

##### `network_utilization`<sup>Optional</sup> <a name="network_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization"></a>

```python
network_utilization: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#network_utilization AppEngineFlexibleAppVersion#network_utilization}

---

##### `request_utilization`<sup>Optional</sup> <a name="request_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization"></a>

```python
request_utilization: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#request_utilization AppEngineFlexibleAppVersion#request_utilization}

---

### AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization(
  target_utilization: typing.Union[int, float],
  aggregation_window_length: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization">target_utilization</a></code> | <code>typing.Union[int, float]</code> | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength">aggregation_window_length</a></code> | <code>str</code> | Period of time over which CPU utilization is calculated. |

---

##### `target_utilization`<sup>Required</sup> <a name="target_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization"></a>

```python
target_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_utilization AppEngineFlexibleAppVersion#target_utilization}

---

##### `aggregation_window_length`<sup>Optional</sup> <a name="aggregation_window_length" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength"></a>

```python
aggregation_window_length: str
```

- *Type:* str

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#aggregation_window_length AppEngineFlexibleAppVersion#aggregation_window_length}

---

### AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization(
  target_read_bytes_per_second: typing.Union[int, float] = None,
  target_read_ops_per_second: typing.Union[int, float] = None,
  target_write_bytes_per_second: typing.Union[int, float] = None,
  target_write_ops_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond">target_read_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | Target bytes read per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond">target_read_ops_per_second</a></code> | <code>typing.Union[int, float]</code> | Target ops read per seconds. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond">target_write_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | Target bytes written per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond">target_write_ops_per_second</a></code> | <code>typing.Union[int, float]</code> | Target ops written per second. |

---

##### `target_read_bytes_per_second`<sup>Optional</sup> <a name="target_read_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond"></a>

```python
target_read_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target bytes read per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_read_bytes_per_second AppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

##### `target_read_ops_per_second`<sup>Optional</sup> <a name="target_read_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond"></a>

```python
target_read_ops_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target ops read per seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_read_ops_per_second AppEngineFlexibleAppVersion#target_read_ops_per_second}

---

##### `target_write_bytes_per_second`<sup>Optional</sup> <a name="target_write_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond"></a>

```python
target_write_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target bytes written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_write_bytes_per_second AppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

##### `target_write_ops_per_second`<sup>Optional</sup> <a name="target_write_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond"></a>

```python
target_write_ops_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target ops written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_write_ops_per_second AppEngineFlexibleAppVersion#target_write_ops_per_second}

---

### AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization(
  target_received_bytes_per_second: typing.Union[int, float] = None,
  target_received_packets_per_second: typing.Union[int, float] = None,
  target_sent_bytes_per_second: typing.Union[int, float] = None,
  target_sent_packets_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond">target_received_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | Target bytes received per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond">target_received_packets_per_second</a></code> | <code>typing.Union[int, float]</code> | Target packets received per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond">target_sent_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | Target bytes sent per second. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond">target_sent_packets_per_second</a></code> | <code>typing.Union[int, float]</code> | Target packets sent per second. |

---

##### `target_received_bytes_per_second`<sup>Optional</sup> <a name="target_received_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond"></a>

```python
target_received_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target bytes received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_received_bytes_per_second AppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

##### `target_received_packets_per_second`<sup>Optional</sup> <a name="target_received_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond"></a>

```python
target_received_packets_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target packets received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_received_packets_per_second AppEngineFlexibleAppVersion#target_received_packets_per_second}

---

##### `target_sent_bytes_per_second`<sup>Optional</sup> <a name="target_sent_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond"></a>

```python
target_sent_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target bytes sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_sent_bytes_per_second AppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

##### `target_sent_packets_per_second`<sup>Optional</sup> <a name="target_sent_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond"></a>

```python
target_sent_packets_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target packets sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_sent_packets_per_second AppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

### AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization <a name="AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization(
  target_concurrent_requests: typing.Union[int, float] = None,
  target_request_count_per_second: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests">target_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | Target number of concurrent requests. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond">target_request_count_per_second</a></code> | <code>str</code> | Target requests per second. |

---

##### `target_concurrent_requests`<sup>Optional</sup> <a name="target_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests"></a>

```python
target_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_concurrent_requests AppEngineFlexibleAppVersion#target_concurrent_requests}

---

##### `target_request_count_per_second`<sup>Optional</sup> <a name="target_request_count_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond"></a>

```python
target_request_count_per_second: str
```

- *Type:* str

Target requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_request_count_per_second AppEngineFlexibleAppVersion#target_request_count_per_second}

---

### AppEngineFlexibleAppVersionConfig <a name="AppEngineFlexibleAppVersionConfig" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  liveness_check: AppEngineFlexibleAppVersionLivenessCheck,
  readiness_check: AppEngineFlexibleAppVersionReadinessCheck,
  runtime: str,
  service: str,
  api_config: AppEngineFlexibleAppVersionApiConfig = None,
  automatic_scaling: AppEngineFlexibleAppVersionAutomaticScaling = None,
  beta_settings: typing.Mapping[str] = None,
  default_expiration: str = None,
  delete_service_on_destroy: typing.Union[bool, IResolvable] = None,
  deployment: AppEngineFlexibleAppVersionDeployment = None,
  endpoints_api_service: AppEngineFlexibleAppVersionEndpointsApiService = None,
  entrypoint: AppEngineFlexibleAppVersionEntrypoint = None,
  env_variables: typing.Mapping[str] = None,
  handlers: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionHandlers]] = None,
  id: str = None,
  inbound_services: typing.List[str] = None,
  instance_class: str = None,
  manual_scaling: AppEngineFlexibleAppVersionManualScaling = None,
  network: AppEngineFlexibleAppVersionNetwork = None,
  nobuild_files_regex: str = None,
  noop_on_destroy: typing.Union[bool, IResolvable] = None,
  project: str = None,
  resources: AppEngineFlexibleAppVersionResources = None,
  runtime_api_version: str = None,
  runtime_channel: str = None,
  runtime_main_executable_path: str = None,
  service_account: str = None,
  serving_status: str = None,
  timeouts: AppEngineFlexibleAppVersionTimeouts = None,
  version_id: str = None,
  vpc_access_connector: AppEngineFlexibleAppVersionVpcAccessConnector = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.livenessCheck">liveness_check</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.readinessCheck">readiness_check</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtime">runtime</a></code> | <code>str</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.service">service</a></code> | <code>str</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.apiConfig">api_config</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.automaticScaling">automatic_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.betaSettings">beta_settings</a></code> | <code>typing.Mapping[str]</code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.defaultExpiration">default_expiration</a></code> | <code>str</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy">delete_service_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.endpointsApiService">endpoints_api_service</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.envVariables">env_variables</a></code> | <code>typing.Mapping[str]</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.handlers">handlers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.inboundServices">inbound_services</a></code> | <code>typing.List[str]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.instanceClass">instance_class</a></code> | <code>str</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.manualScaling">manual_scaling</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex">nobuild_files_regex</a></code> | <code>str</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.noopOnDestroy">noop_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeApiVersion">runtime_api_version</a></code> | <code>str</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeChannel">runtime_channel</a></code> | <code>str</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath">runtime_main_executable_path</a></code> | <code>str</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.servingStatus">serving_status</a></code> | <code>str</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.versionId">version_id</a></code> | <code>str</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.vpcAccessConnector">vpc_access_connector</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `liveness_check`<sup>Required</sup> <a name="liveness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.livenessCheck"></a>

```python
liveness_check: AppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#liveness_check AppEngineFlexibleAppVersion#liveness_check}

---

##### `readiness_check`<sup>Required</sup> <a name="readiness_check" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.readinessCheck"></a>

```python
readiness_check: AppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#readiness_check AppEngineFlexibleAppVersion#readiness_check}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime AppEngineFlexibleAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.service"></a>

```python
service: str
```

- *Type:* str

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#service AppEngineFlexibleAppVersion#service}

---

##### `api_config`<sup>Optional</sup> <a name="api_config" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.apiConfig"></a>

```python
api_config: AppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#api_config AppEngineFlexibleAppVersion#api_config}

---

##### `automatic_scaling`<sup>Optional</sup> <a name="automatic_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.automaticScaling"></a>

```python
automatic_scaling: AppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#automatic_scaling AppEngineFlexibleAppVersion#automatic_scaling}

---

##### `beta_settings`<sup>Optional</sup> <a name="beta_settings" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.betaSettings"></a>

```python
beta_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#beta_settings AppEngineFlexibleAppVersion#beta_settings}

---

##### `default_expiration`<sup>Optional</sup> <a name="default_expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.defaultExpiration"></a>

```python
default_expiration: str
```

- *Type:* str

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#default_expiration AppEngineFlexibleAppVersion#default_expiration}

---

##### `delete_service_on_destroy`<sup>Optional</sup> <a name="delete_service_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy"></a>

```python
delete_service_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#delete_service_on_destroy AppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.deployment"></a>

```python
deployment: AppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#deployment AppEngineFlexibleAppVersion#deployment}

---

##### `endpoints_api_service`<sup>Optional</sup> <a name="endpoints_api_service" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.endpointsApiService"></a>

```python
endpoints_api_service: AppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#endpoints_api_service AppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.entrypoint"></a>

```python
entrypoint: AppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#entrypoint AppEngineFlexibleAppVersion#entrypoint}

---

##### `env_variables`<sup>Optional</sup> <a name="env_variables" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.envVariables"></a>

```python
env_variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#env_variables AppEngineFlexibleAppVersion#env_variables}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.handlers"></a>

```python
handlers: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#handlers AppEngineFlexibleAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#id AppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inbound_services`<sup>Optional</sup> <a name="inbound_services" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.inboundServices"></a>

```python
inbound_services: typing.List[str]
```

- *Type:* typing.List[str]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#inbound_services AppEngineFlexibleAppVersion#inbound_services}

---

##### `instance_class`<sup>Optional</sup> <a name="instance_class" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.instanceClass"></a>

```python
instance_class: str
```

- *Type:* str

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#instance_class AppEngineFlexibleAppVersion#instance_class}

---

##### `manual_scaling`<sup>Optional</sup> <a name="manual_scaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.manualScaling"></a>

```python
manual_scaling: AppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#manual_scaling AppEngineFlexibleAppVersion#manual_scaling}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.network"></a>

```python
network: AppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#network AppEngineFlexibleAppVersion#network}

---

##### `nobuild_files_regex`<sup>Optional</sup> <a name="nobuild_files_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex"></a>

```python
nobuild_files_regex: str
```

- *Type:* str

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#nobuild_files_regex AppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `noop_on_destroy`<sup>Optional</sup> <a name="noop_on_destroy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.noopOnDestroy"></a>

```python
noop_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#noop_on_destroy AppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#project AppEngineFlexibleAppVersion#project}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.resources"></a>

```python
resources: AppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#resources AppEngineFlexibleAppVersion#resources}

---

##### `runtime_api_version`<sup>Optional</sup> <a name="runtime_api_version" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeApiVersion"></a>

```python
runtime_api_version: str
```

- *Type:* str

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime_api_version AppEngineFlexibleAppVersion#runtime_api_version}

---

##### `runtime_channel`<sup>Optional</sup> <a name="runtime_channel" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeChannel"></a>

```python
runtime_channel: str
```

- *Type:* str

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime_channel AppEngineFlexibleAppVersion#runtime_channel}

---

##### `runtime_main_executable_path`<sup>Optional</sup> <a name="runtime_main_executable_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath"></a>

```python
runtime_main_executable_path: str
```

- *Type:* str

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#runtime_main_executable_path AppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#service_account AppEngineFlexibleAppVersion#service_account}

---

##### `serving_status`<sup>Optional</sup> <a name="serving_status" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.servingStatus"></a>

```python
serving_status: str
```

- *Type:* str

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#serving_status AppEngineFlexibleAppVersion#serving_status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.timeouts"></a>

```python
timeouts: AppEngineFlexibleAppVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#timeouts AppEngineFlexibleAppVersion#timeouts}

---

##### `version_id`<sup>Optional</sup> <a name="version_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#version_id AppEngineFlexibleAppVersion#version_id}

---

##### `vpc_access_connector`<sup>Optional</sup> <a name="vpc_access_connector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionConfig.property.vpcAccessConnector"></a>

```python
vpc_access_connector: AppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#vpc_access_connector AppEngineFlexibleAppVersion#vpc_access_connector}

---

### AppEngineFlexibleAppVersionDeployment <a name="AppEngineFlexibleAppVersionDeployment" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment(
  cloud_build_options: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions = None,
  container: AppEngineFlexibleAppVersionDeploymentContainer = None,
  files: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionDeploymentFiles]] = None,
  zip: AppEngineFlexibleAppVersionDeploymentZip = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions">cloud_build_options</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | cloud_build_options block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.files">files</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]</code> | files block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | zip block. |

---

##### `cloud_build_options`<sup>Optional</sup> <a name="cloud_build_options" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions"></a>

```python
cloud_build_options: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cloud_build_options AppEngineFlexibleAppVersion#cloud_build_options}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.container"></a>

```python
container: AppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#container AppEngineFlexibleAppVersion#container}

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.files"></a>

```python
files: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#files AppEngineFlexibleAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment.property.zip"></a>

```python
zip: AppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#zip AppEngineFlexibleAppVersion#zip}

---

### AppEngineFlexibleAppVersionDeploymentCloudBuildOptions <a name="AppEngineFlexibleAppVersionDeploymentCloudBuildOptions" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions(
  app_yaml_path: str,
  cloud_build_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath">app_yaml_path</a></code> | <code>str</code> | Path to the yaml file used in deployment, used to determine runtime configuration details. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout">cloud_build_timeout</a></code> | <code>str</code> | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. |

---

##### `app_yaml_path`<sup>Required</sup> <a name="app_yaml_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath"></a>

```python
app_yaml_path: str
```

- *Type:* str

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#app_yaml_path AppEngineFlexibleAppVersion#app_yaml_path}

---

##### `cloud_build_timeout`<sup>Optional</sup> <a name="cloud_build_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout"></a>

```python
cloud_build_timeout: str
```

- *Type:* str

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cloud_build_timeout AppEngineFlexibleAppVersion#cloud_build_timeout}

---

### AppEngineFlexibleAppVersionDeploymentContainer <a name="AppEngineFlexibleAppVersionDeploymentContainer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer(
  image: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.property.image">image</a></code> | <code>str</code> | URI to the hosted container image in Google Container Registry. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer.property.image"></a>

```python
image: str
```

- *Type:* str

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#image AppEngineFlexibleAppVersion#image}

---

### AppEngineFlexibleAppVersionDeploymentFiles <a name="AppEngineFlexibleAppVersionDeploymentFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles(
  name: str,
  source_url: str,
  sha1_sum: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl">source_url</a></code> | <code>str</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum">sha1_sum</a></code> | <code>str</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}.

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

##### `sha1_sum`<sup>Optional</sup> <a name="sha1_sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum"></a>

```python
sha1_sum: str
```

- *Type:* str

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#sha1_sum AppEngineFlexibleAppVersion#sha1_sum}

---

### AppEngineFlexibleAppVersionDeploymentZip <a name="AppEngineFlexibleAppVersionDeploymentZip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip(
  source_url: str,
  files_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl">source_url</a></code> | <code>str</code> | Source URL. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.filesCount">files_count</a></code> | <code>typing.Union[int, float]</code> | files count. |

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

##### `files_count`<sup>Optional</sup> <a name="files_count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip.property.filesCount"></a>

```python
files_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#files_count AppEngineFlexibleAppVersion#files_count}

---

### AppEngineFlexibleAppVersionEndpointsApiService <a name="AppEngineFlexibleAppVersionEndpointsApiService" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService(
  name: str,
  config_id: str = None,
  disable_trace_sampling: typing.Union[bool, IResolvable] = None,
  rollout_strategy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.name">name</a></code> | <code>str</code> | Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.configId">config_id</a></code> | <code>str</code> | Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling">disable_trace_sampling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable or disable trace sampling. By default, this is set to false for enabled. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy">rollout_strategy</a></code> | <code>str</code> | Endpoints rollout strategy. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.name"></a>

```python
name: str
```

- *Type:* str

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `config_id`<sup>Optional</sup> <a name="config_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.configId"></a>

```python
config_id: str
```

- *Type:* str

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#config_id AppEngineFlexibleAppVersion#config_id}

---

##### `disable_trace_sampling`<sup>Optional</sup> <a name="disable_trace_sampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling"></a>

```python
disable_trace_sampling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#disable_trace_sampling AppEngineFlexibleAppVersion#disable_trace_sampling}

---

##### `rollout_strategy`<sup>Optional</sup> <a name="rollout_strategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy"></a>

```python
rollout_strategy: str
```

- *Type:* str

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#rollout_strategy AppEngineFlexibleAppVersion#rollout_strategy}

---

### AppEngineFlexibleAppVersionEntrypoint <a name="AppEngineFlexibleAppVersionEntrypoint" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint(
  shell: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.property.shell">shell</a></code> | <code>str</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint.property.shell"></a>

```python
shell: str
```

- *Type:* str

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#shell AppEngineFlexibleAppVersion#shell}

---

### AppEngineFlexibleAppVersionHandlers <a name="AppEngineFlexibleAppVersionHandlers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers(
  auth_fail_action: str = None,
  login: str = None,
  redirect_http_response_code: str = None,
  script: AppEngineFlexibleAppVersionHandlersScript = None,
  security_level: str = None,
  static_files: AppEngineFlexibleAppVersionHandlersStaticFiles = None,
  url_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.login">login</a></code> | <code>str</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode">redirect_http_response_code</a></code> | <code>str</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.securityLevel">security_level</a></code> | <code>str</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.staticFiles">static_files</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.urlRegex">url_regex</a></code> | <code>str</code> | URL prefix. |

---

##### `auth_fail_action`<sup>Optional</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#auth_fail_action AppEngineFlexibleAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.login"></a>

```python
login: str
```

- *Type:* str

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#login AppEngineFlexibleAppVersion#login}

---

##### `redirect_http_response_code`<sup>Optional</sup> <a name="redirect_http_response_code" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode"></a>

```python
redirect_http_response_code: str
```

- *Type:* str

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#redirect_http_response_code AppEngineFlexibleAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.script"></a>

```python
script: AppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#script AppEngineFlexibleAppVersion#script}

---

##### `security_level`<sup>Optional</sup> <a name="security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#security_level AppEngineFlexibleAppVersion#security_level}

---

##### `static_files`<sup>Optional</sup> <a name="static_files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.staticFiles"></a>

```python
static_files: AppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#static_files AppEngineFlexibleAppVersion#static_files}

---

##### `url_regex`<sup>Optional</sup> <a name="url_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#url_regex AppEngineFlexibleAppVersion#url_regex}

---

### AppEngineFlexibleAppVersionHandlersScript <a name="AppEngineFlexibleAppVersionHandlersScript" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript(
  script_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.property.scriptPath">script_path</a></code> | <code>str</code> | Path to the script from the application root directory. |

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#script_path AppEngineFlexibleAppVersion#script_path}

---

### AppEngineFlexibleAppVersionHandlersStaticFiles <a name="AppEngineFlexibleAppVersionHandlersStaticFiles" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles(
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
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable">application_readable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>str</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType">mime_type</a></code> | <code>str</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>str</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile">require_matching_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex">upload_path_regex</a></code> | <code>str</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `application_readable`<sup>Optional</sup> <a name="application_readable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```python
application_readable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#application_readable AppEngineFlexibleAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#expiration AppEngineFlexibleAppVersion#expiration}

---

##### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#http_headers AppEngineFlexibleAppVersion#http_headers}

---

##### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#mime_type AppEngineFlexibleAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.path"></a>

```python
path: str
```

- *Type:* str

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `require_matching_file`<sup>Optional</sup> <a name="require_matching_file" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```python
require_matching_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#require_matching_file AppEngineFlexibleAppVersion#require_matching_file}

---

##### `upload_path_regex`<sup>Optional</sup> <a name="upload_path_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```python
upload_path_regex: str
```

- *Type:* str

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#upload_path_regex AppEngineFlexibleAppVersion#upload_path_regex}

---

### AppEngineFlexibleAppVersionLivenessCheck <a name="AppEngineFlexibleAppVersionLivenessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck(
  path: str,
  check_interval: str = None,
  failure_threshold: typing.Union[int, float] = None,
  host: str = None,
  initial_delay: str = None,
  success_threshold: typing.Union[int, float] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.path">path</a></code> | <code>str</code> | The request path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.checkInterval">check_interval</a></code> | <code>str</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.host">host</a></code> | <code>str</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.initialDelay">initial_delay</a></code> | <code>str</code> | The initial delay before starting to execute the checks. Default: "300s". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | Number of consecutive successful checks required before considering the VM healthy. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.timeout">timeout</a></code> | <code>str</code> | Time before the check is considered failed. Default: "4s". |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.path"></a>

```python
path: str
```

- *Type:* str

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.checkInterval"></a>

```python
check_interval: str
```

- *Type:* str

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.host"></a>

```python
host: str
```

- *Type:* str

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

##### `initial_delay`<sup>Optional</sup> <a name="initial_delay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.initialDelay"></a>

```python
initial_delay: str
```

- *Type:* str

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#initial_delay AppEngineFlexibleAppVersion#initial_delay}

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

### AppEngineFlexibleAppVersionManualScaling <a name="AppEngineFlexibleAppVersionManualScaling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling(
  instances: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of instances to assign to the service at the start.

*Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#instances AppEngineFlexibleAppVersion#instances}

---

### AppEngineFlexibleAppVersionNetwork <a name="AppEngineFlexibleAppVersionNetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork(
  name: str,
  forwarded_ports: typing.List[str] = None,
  instance_tag: str = None,
  session_affinity: typing.Union[bool, IResolvable] = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.name">name</a></code> | <code>str</code> | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.forwardedPorts">forwarded_ports</a></code> | <code>typing.List[str]</code> | List of ports, or port pairs, to forward from the virtual machine to the application container. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.instanceTag">instance_tag</a></code> | <code>str</code> | Tag to apply to the instance during creation. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.sessionAffinity">session_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable session affinity. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.subnetwork">subnetwork</a></code> | <code>str</code> | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `forwarded_ports`<sup>Optional</sup> <a name="forwarded_ports" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.forwardedPorts"></a>

```python
forwarded_ports: typing.List[str]
```

- *Type:* typing.List[str]

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#forwarded_ports AppEngineFlexibleAppVersion#forwarded_ports}

---

##### `instance_tag`<sup>Optional</sup> <a name="instance_tag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.instanceTag"></a>

```python
instance_tag: str
```

- *Type:* str

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#instance_tag AppEngineFlexibleAppVersion#instance_tag}

---

##### `session_affinity`<sup>Optional</sup> <a name="session_affinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.sessionAffinity"></a>

```python
session_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#session_affinity AppEngineFlexibleAppVersion#session_affinity}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#subnetwork AppEngineFlexibleAppVersion#subnetwork}

---

### AppEngineFlexibleAppVersionReadinessCheck <a name="AppEngineFlexibleAppVersionReadinessCheck" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck(
  path: str,
  app_start_timeout: str = None,
  check_interval: str = None,
  failure_threshold: typing.Union[int, float] = None,
  host: str = None,
  success_threshold: typing.Union[int, float] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.path">path</a></code> | <code>str</code> | The request path. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout">app_start_timeout</a></code> | <code>str</code> | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.checkInterval">check_interval</a></code> | <code>str</code> | Interval between health checks.  Default: "5s". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Number of consecutive failed checks required before removing traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.host">host</a></code> | <code>str</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | Number of consecutive successful checks required before receiving traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.timeout">timeout</a></code> | <code>str</code> | Time before the check is considered failed. Default: "4s". |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.path"></a>

```python
path: str
```

- *Type:* str

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

##### `app_start_timeout`<sup>Optional</sup> <a name="app_start_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout"></a>

```python
app_start_timeout: str
```

- *Type:* str

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#app_start_timeout AppEngineFlexibleAppVersion#app_start_timeout}

---

##### `check_interval`<sup>Optional</sup> <a name="check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.checkInterval"></a>

```python
check_interval: str
```

- *Type:* str

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#check_interval AppEngineFlexibleAppVersion#check_interval}

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#failure_threshold AppEngineFlexibleAppVersion#failure_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.host"></a>

```python
host: str
```

- *Type:* str

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#host AppEngineFlexibleAppVersion#host}

---

##### `success_threshold`<sup>Optional</sup> <a name="success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#success_threshold AppEngineFlexibleAppVersion#success_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#timeout AppEngineFlexibleAppVersion#timeout}

---

### AppEngineFlexibleAppVersionResources <a name="AppEngineFlexibleAppVersionResources" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources(
  cpu: typing.Union[int, float] = None,
  disk_gb: typing.Union[int, float] = None,
  memory_gb: typing.Union[int, float] = None,
  volumes: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionResourcesVolumes]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | Number of CPU cores needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.diskGb">disk_gb</a></code> | <code>typing.Union[int, float]</code> | Disk size (GB) needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | Memory (GB) needed. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.volumes">volumes</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]</code> | volumes block. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cpu AppEngineFlexibleAppVersion#cpu}

---

##### `disk_gb`<sup>Optional</sup> <a name="disk_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.diskGb"></a>

```python
disk_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#disk_gb AppEngineFlexibleAppVersion#disk_gb}

---

##### `memory_gb`<sup>Optional</sup> <a name="memory_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#memory_gb AppEngineFlexibleAppVersion#memory_gb}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources.property.volumes"></a>

```python
volumes: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionResourcesVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#volumes AppEngineFlexibleAppVersion#volumes}

---

### AppEngineFlexibleAppVersionResourcesVolumes <a name="AppEngineFlexibleAppVersionResourcesVolumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes(
  name: str,
  size_gb: typing.Union[int, float],
  volume_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.name">name</a></code> | <code>str</code> | Unique name for the volume. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | Volume size in gigabytes. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.volumeType">volume_type</a></code> | <code>str</code> | Underlying volume type, e.g. 'tmpfs'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Volume size in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#size_gb AppEngineFlexibleAppVersion#size_gb}

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Underlying volume type, e.g. 'tmpfs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#volume_type AppEngineFlexibleAppVersion#volume_type}

---

### AppEngineFlexibleAppVersionTimeouts <a name="AppEngineFlexibleAppVersionTimeouts" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#create AppEngineFlexibleAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#delete AppEngineFlexibleAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#update AppEngineFlexibleAppVersion#update}.

---

### AppEngineFlexibleAppVersionVpcAccessConnector <a name="AppEngineFlexibleAppVersionVpcAccessConnector" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.property.name">name</a></code> | <code>str</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector.property.name"></a>

```python
name: str
```

- *Type:* str

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#name AppEngineFlexibleAppVersion#name}

---

## Classes <a name="Classes" id="Classes"></a>

### AppEngineFlexibleAppVersionApiConfigOutputReference <a name="AppEngineFlexibleAppVersionApiConfigOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction">reset_auth_fail_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_fail_action` <a name="reset_auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction"></a>

```python
def reset_auth_fail_action() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput">auth_fail_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput">script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.script">script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_fail_action_input`<sup>Optional</sup> <a name="auth_fail_action_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput"></a>

```python
auth_fail_action_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput"></a>

```python
script_input: str
```

- *Type:* str

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `auth_fail_action`<sup>Required</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.script"></a>

```python
script: str
```

- *Type:* str

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionApiConfig
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionApiConfig">AppEngineFlexibleAppVersionApiConfig</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength">reset_aggregation_window_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation_window_length` <a name="reset_aggregation_window_length" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength"></a>

```python
def reset_aggregation_window_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput">aggregation_window_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput">target_utilization_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength">aggregation_window_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization">target_utilization</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_window_length_input`<sup>Optional</sup> <a name="aggregation_window_length_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput"></a>

```python
aggregation_window_length_input: str
```

- *Type:* str

---

##### `target_utilization_input`<sup>Optional</sup> <a name="target_utilization_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput"></a>

```python
target_utilization_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `aggregation_window_length`<sup>Required</sup> <a name="aggregation_window_length" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength"></a>

```python
aggregation_window_length: str
```

- *Type:* str

---

##### `target_utilization`<sup>Required</sup> <a name="target_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization"></a>

```python
target_utilization: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond">reset_target_read_bytes_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond">reset_target_read_ops_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond">reset_target_write_bytes_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond">reset_target_write_ops_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_read_bytes_per_second` <a name="reset_target_read_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond"></a>

```python
def reset_target_read_bytes_per_second() -> None
```

##### `reset_target_read_ops_per_second` <a name="reset_target_read_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond"></a>

```python
def reset_target_read_ops_per_second() -> None
```

##### `reset_target_write_bytes_per_second` <a name="reset_target_write_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond"></a>

```python
def reset_target_write_bytes_per_second() -> None
```

##### `reset_target_write_ops_per_second` <a name="reset_target_write_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond"></a>

```python
def reset_target_write_ops_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput">target_read_bytes_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput">target_read_ops_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput">target_write_bytes_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput">target_write_ops_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond">target_read_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond">target_read_ops_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond">target_write_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond">target_write_ops_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_read_bytes_per_second_input`<sup>Optional</sup> <a name="target_read_bytes_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput"></a>

```python
target_read_bytes_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_read_ops_per_second_input`<sup>Optional</sup> <a name="target_read_ops_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput"></a>

```python
target_read_ops_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_write_bytes_per_second_input`<sup>Optional</sup> <a name="target_write_bytes_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput"></a>

```python
target_write_bytes_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_write_ops_per_second_input`<sup>Optional</sup> <a name="target_write_ops_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput"></a>

```python
target_write_ops_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_read_bytes_per_second`<sup>Required</sup> <a name="target_read_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond"></a>

```python
target_read_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_read_ops_per_second`<sup>Required</sup> <a name="target_read_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond"></a>

```python
target_read_ops_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_write_bytes_per_second`<sup>Required</sup> <a name="target_write_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond"></a>

```python
target_write_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_write_ops_per_second`<sup>Required</sup> <a name="target_write_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond"></a>

```python
target_write_ops_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond">reset_target_received_bytes_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond">reset_target_received_packets_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond">reset_target_sent_bytes_per_second</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond">reset_target_sent_packets_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_received_bytes_per_second` <a name="reset_target_received_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond"></a>

```python
def reset_target_received_bytes_per_second() -> None
```

##### `reset_target_received_packets_per_second` <a name="reset_target_received_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond"></a>

```python
def reset_target_received_packets_per_second() -> None
```

##### `reset_target_sent_bytes_per_second` <a name="reset_target_sent_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond"></a>

```python
def reset_target_sent_bytes_per_second() -> None
```

##### `reset_target_sent_packets_per_second` <a name="reset_target_sent_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond"></a>

```python
def reset_target_sent_packets_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput">target_received_bytes_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput">target_received_packets_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput">target_sent_bytes_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput">target_sent_packets_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond">target_received_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond">target_received_packets_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond">target_sent_bytes_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond">target_sent_packets_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_received_bytes_per_second_input`<sup>Optional</sup> <a name="target_received_bytes_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput"></a>

```python
target_received_bytes_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_received_packets_per_second_input`<sup>Optional</sup> <a name="target_received_packets_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput"></a>

```python
target_received_packets_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_sent_bytes_per_second_input`<sup>Optional</sup> <a name="target_sent_bytes_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput"></a>

```python
target_sent_bytes_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_sent_packets_per_second_input`<sup>Optional</sup> <a name="target_sent_packets_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput"></a>

```python
target_sent_packets_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_received_bytes_per_second`<sup>Required</sup> <a name="target_received_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond"></a>

```python
target_received_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_received_packets_per_second`<sup>Required</sup> <a name="target_received_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond"></a>

```python
target_received_packets_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_sent_bytes_per_second`<sup>Required</sup> <a name="target_sent_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond"></a>

```python
target_sent_bytes_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_sent_packets_per_second`<sup>Required</sup> <a name="target_sent_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond"></a>

```python
target_sent_packets_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization">put_cpu_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization">put_disk_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization">put_network_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization">put_request_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod">reset_cool_down_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization">reset_disk_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">reset_max_concurrent_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">reset_max_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">reset_max_pending_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances">reset_max_total_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">reset_min_idle_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">reset_min_pending_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances">reset_min_total_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization">reset_network_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization">reset_request_utilization</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cpu_utilization` <a name="put_cpu_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization"></a>

```python
def put_cpu_utilization(
  target_utilization: typing.Union[int, float],
  aggregation_window_length: str = None
) -> None
```

###### `target_utilization`<sup>Required</sup> <a name="target_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.targetUtilization"></a>

- *Type:* typing.Union[int, float]

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_utilization AppEngineFlexibleAppVersion#target_utilization}

---

###### `aggregation_window_length`<sup>Optional</sup> <a name="aggregation_window_length" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.aggregationWindowLength"></a>

- *Type:* str

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#aggregation_window_length AppEngineFlexibleAppVersion#aggregation_window_length}

---

##### `put_disk_utilization` <a name="put_disk_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization"></a>

```python
def put_disk_utilization(
  target_read_bytes_per_second: typing.Union[int, float] = None,
  target_read_ops_per_second: typing.Union[int, float] = None,
  target_write_bytes_per_second: typing.Union[int, float] = None,
  target_write_ops_per_second: typing.Union[int, float] = None
) -> None
```

###### `target_read_bytes_per_second`<sup>Optional</sup> <a name="target_read_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.targetReadBytesPerSecond"></a>

- *Type:* typing.Union[int, float]

Target bytes read per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_read_bytes_per_second AppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

###### `target_read_ops_per_second`<sup>Optional</sup> <a name="target_read_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.targetReadOpsPerSecond"></a>

- *Type:* typing.Union[int, float]

Target ops read per seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_read_ops_per_second AppEngineFlexibleAppVersion#target_read_ops_per_second}

---

###### `target_write_bytes_per_second`<sup>Optional</sup> <a name="target_write_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.targetWriteBytesPerSecond"></a>

- *Type:* typing.Union[int, float]

Target bytes written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_write_bytes_per_second AppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

###### `target_write_ops_per_second`<sup>Optional</sup> <a name="target_write_ops_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.targetWriteOpsPerSecond"></a>

- *Type:* typing.Union[int, float]

Target ops written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_write_ops_per_second AppEngineFlexibleAppVersion#target_write_ops_per_second}

---

##### `put_network_utilization` <a name="put_network_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization"></a>

```python
def put_network_utilization(
  target_received_bytes_per_second: typing.Union[int, float] = None,
  target_received_packets_per_second: typing.Union[int, float] = None,
  target_sent_bytes_per_second: typing.Union[int, float] = None,
  target_sent_packets_per_second: typing.Union[int, float] = None
) -> None
```

###### `target_received_bytes_per_second`<sup>Optional</sup> <a name="target_received_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.targetReceivedBytesPerSecond"></a>

- *Type:* typing.Union[int, float]

Target bytes received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_received_bytes_per_second AppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

###### `target_received_packets_per_second`<sup>Optional</sup> <a name="target_received_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.targetReceivedPacketsPerSecond"></a>

- *Type:* typing.Union[int, float]

Target packets received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_received_packets_per_second AppEngineFlexibleAppVersion#target_received_packets_per_second}

---

###### `target_sent_bytes_per_second`<sup>Optional</sup> <a name="target_sent_bytes_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.targetSentBytesPerSecond"></a>

- *Type:* typing.Union[int, float]

Target bytes sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_sent_bytes_per_second AppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

###### `target_sent_packets_per_second`<sup>Optional</sup> <a name="target_sent_packets_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.targetSentPacketsPerSecond"></a>

- *Type:* typing.Union[int, float]

Target packets sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_sent_packets_per_second AppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

##### `put_request_utilization` <a name="put_request_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization"></a>

```python
def put_request_utilization(
  target_concurrent_requests: typing.Union[int, float] = None,
  target_request_count_per_second: str = None
) -> None
```

###### `target_concurrent_requests`<sup>Optional</sup> <a name="target_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.targetConcurrentRequests"></a>

- *Type:* typing.Union[int, float]

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_concurrent_requests AppEngineFlexibleAppVersion#target_concurrent_requests}

---

###### `target_request_count_per_second`<sup>Optional</sup> <a name="target_request_count_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.targetRequestCountPerSecond"></a>

- *Type:* str

Target requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#target_request_count_per_second AppEngineFlexibleAppVersion#target_request_count_per_second}

---

##### `reset_cool_down_period` <a name="reset_cool_down_period" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod"></a>

```python
def reset_cool_down_period() -> None
```

##### `reset_disk_utilization` <a name="reset_disk_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization"></a>

```python
def reset_disk_utilization() -> None
```

##### `reset_max_concurrent_requests` <a name="reset_max_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```python
def reset_max_concurrent_requests() -> None
```

##### `reset_max_idle_instances` <a name="reset_max_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```python
def reset_max_idle_instances() -> None
```

##### `reset_max_pending_latency` <a name="reset_max_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```python
def reset_max_pending_latency() -> None
```

##### `reset_max_total_instances` <a name="reset_max_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances"></a>

```python
def reset_max_total_instances() -> None
```

##### `reset_min_idle_instances` <a name="reset_min_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```python
def reset_min_idle_instances() -> None
```

##### `reset_min_pending_latency` <a name="reset_min_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```python
def reset_min_pending_latency() -> None
```

##### `reset_min_total_instances` <a name="reset_min_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances"></a>

```python
def reset_min_total_instances() -> None
```

##### `reset_network_utilization` <a name="reset_network_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization"></a>

```python
def reset_network_utilization() -> None
```

##### `reset_request_utilization` <a name="reset_request_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization"></a>

```python
def reset_request_utilization() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization">cpu_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization">disk_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization">network_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization">request_utilization</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput">cool_down_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput">cpu_utilization_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput">disk_utilization_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">max_concurrent_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">max_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">max_pending_latency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput">max_total_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">min_idle_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">min_pending_latency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput">min_total_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput">network_utilization_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput">request_utilization_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod">cool_down_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">max_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">max_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">max_pending_latency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances">max_total_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances">min_idle_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency">min_pending_latency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances">min_total_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization`<sup>Required</sup> <a name="cpu_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization"></a>

```python
cpu_utilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a>

---

##### `disk_utilization`<sup>Required</sup> <a name="disk_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization"></a>

```python
disk_utilization: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a>

---

##### `network_utilization`<sup>Required</sup> <a name="network_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization"></a>

```python
network_utilization: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a>

---

##### `request_utilization`<sup>Required</sup> <a name="request_utilization" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization"></a>

```python
request_utilization: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a>

---

##### `cool_down_period_input`<sup>Optional</sup> <a name="cool_down_period_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput"></a>

```python
cool_down_period_input: str
```

- *Type:* str

---

##### `cpu_utilization_input`<sup>Optional</sup> <a name="cpu_utilization_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput"></a>

```python
cpu_utilization_input: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `disk_utilization_input`<sup>Optional</sup> <a name="disk_utilization_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput"></a>

```python
disk_utilization_input: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `max_concurrent_requests_input`<sup>Optional</sup> <a name="max_concurrent_requests_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```python
max_concurrent_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_instances_input`<sup>Optional</sup> <a name="max_idle_instances_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```python
max_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_latency_input`<sup>Optional</sup> <a name="max_pending_latency_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```python
max_pending_latency_input: str
```

- *Type:* str

---

##### `max_total_instances_input`<sup>Optional</sup> <a name="max_total_instances_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput"></a>

```python
max_total_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_idle_instances_input`<sup>Optional</sup> <a name="min_idle_instances_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```python
min_idle_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pending_latency_input`<sup>Optional</sup> <a name="min_pending_latency_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```python
min_pending_latency_input: str
```

- *Type:* str

---

##### `min_total_instances_input`<sup>Optional</sup> <a name="min_total_instances_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput"></a>

```python
min_total_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_utilization_input`<sup>Optional</sup> <a name="network_utilization_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput"></a>

```python
network_utilization_input: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `request_utilization_input`<sup>Optional</sup> <a name="request_utilization_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput"></a>

```python
request_utilization_input: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `cool_down_period`<sup>Required</sup> <a name="cool_down_period" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod"></a>

```python
cool_down_period: str
```

- *Type:* str

---

##### `max_concurrent_requests`<sup>Required</sup> <a name="max_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```python
max_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_instances`<sup>Required</sup> <a name="max_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```python
max_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_pending_latency`<sup>Required</sup> <a name="max_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```python
max_pending_latency: str
```

- *Type:* str

---

##### `max_total_instances`<sup>Required</sup> <a name="max_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances"></a>

```python
max_total_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_idle_instances`<sup>Required</sup> <a name="min_idle_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```python
min_idle_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_pending_latency`<sup>Required</sup> <a name="min_pending_latency" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```python
min_pending_latency: str
```

- *Type:* str

---

##### `min_total_instances`<sup>Required</sup> <a name="min_total_instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances"></a>

```python
min_total_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionAutomaticScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScaling">AppEngineFlexibleAppVersionAutomaticScaling</a>

---


### AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference <a name="AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests">reset_target_concurrent_requests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond">reset_target_request_count_per_second</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_concurrent_requests` <a name="reset_target_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests"></a>

```python
def reset_target_concurrent_requests() -> None
```

##### `reset_target_request_count_per_second` <a name="reset_target_request_count_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond"></a>

```python
def reset_target_request_count_per_second() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput">target_concurrent_requests_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput">target_request_count_per_second_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests">target_concurrent_requests</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond">target_request_count_per_second</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_concurrent_requests_input`<sup>Optional</sup> <a name="target_concurrent_requests_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput"></a>

```python
target_concurrent_requests_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_request_count_per_second_input`<sup>Optional</sup> <a name="target_request_count_per_second_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput"></a>

```python
target_request_count_per_second_input: str
```

- *Type:* str

---

##### `target_concurrent_requests`<sup>Required</sup> <a name="target_concurrent_requests" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests"></a>

```python
target_concurrent_requests: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_request_count_per_second`<sup>Required</sup> <a name="target_request_count_per_second" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond"></a>

```python
target_request_count_per_second: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---


### AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference <a name="AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout">reset_cloud_build_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloud_build_timeout` <a name="reset_cloud_build_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout"></a>

```python
def reset_cloud_build_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput">app_yaml_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput">cloud_build_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath">app_yaml_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout">cloud_build_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_yaml_path_input`<sup>Optional</sup> <a name="app_yaml_path_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput"></a>

```python
app_yaml_path_input: str
```

- *Type:* str

---

##### `cloud_build_timeout_input`<sup>Optional</sup> <a name="cloud_build_timeout_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput"></a>

```python
cloud_build_timeout_input: str
```

- *Type:* str

---

##### `app_yaml_path`<sup>Required</sup> <a name="app_yaml_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath"></a>

```python
app_yaml_path: str
```

- *Type:* str

---

##### `cloud_build_timeout`<sup>Required</sup> <a name="cloud_build_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout"></a>

```python
cloud_build_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---


### AppEngineFlexibleAppVersionDeploymentContainerOutputReference <a name="AppEngineFlexibleAppVersionDeploymentContainerOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---


### AppEngineFlexibleAppVersionDeploymentFilesList <a name="AppEngineFlexibleAppVersionDeploymentFilesList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]

---


### AppEngineFlexibleAppVersionDeploymentFilesOutputReference <a name="AppEngineFlexibleAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum">reset_sha1_sum</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_sha1_sum` <a name="reset_sha1_sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```python
def reset_sha1_sum() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1_sum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1_sum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sha1_sum_input`<sup>Optional</sup> <a name="sha1_sum_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```python
sha1_sum_input: str
```

- *Type:* str

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sha1_sum`<sup>Required</sup> <a name="sha1_sum" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```python
sha1_sum: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppEngineFlexibleAppVersionDeploymentFiles, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>, cdktf.IResolvable]

---


### AppEngineFlexibleAppVersionDeploymentOutputReference <a name="AppEngineFlexibleAppVersionDeploymentOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions">put_cloud_build_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles">put_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip">put_zip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions">reset_cloud_build_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles">reset_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetZip">reset_zip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_build_options` <a name="put_cloud_build_options" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions"></a>

```python
def put_cloud_build_options(
  app_yaml_path: str,
  cloud_build_timeout: str = None
) -> None
```

###### `app_yaml_path`<sup>Required</sup> <a name="app_yaml_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.appYamlPath"></a>

- *Type:* str

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#app_yaml_path AppEngineFlexibleAppVersion#app_yaml_path}

---

###### `cloud_build_timeout`<sup>Optional</sup> <a name="cloud_build_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.cloudBuildTimeout"></a>

- *Type:* str

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#cloud_build_timeout AppEngineFlexibleAppVersion#cloud_build_timeout}

---

##### `put_container` <a name="put_container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer"></a>

```python
def put_container(
  image: str
) -> None
```

###### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putContainer.parameter.image"></a>

- *Type:* str

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#image AppEngineFlexibleAppVersion#image}

---

##### `put_files` <a name="put_files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles"></a>

```python
def put_files(
  value: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionDeploymentFiles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]

---

##### `put_zip` <a name="put_zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip"></a>

```python
def put_zip(
  source_url: str,
  files_count: typing.Union[int, float] = None
) -> None
```

###### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.sourceUrl"></a>

- *Type:* str

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#source_url AppEngineFlexibleAppVersion#source_url}

---

###### `files_count`<sup>Optional</sup> <a name="files_count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.filesCount"></a>

- *Type:* typing.Union[int, float]

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#files_count AppEngineFlexibleAppVersion#files_count}

---

##### `reset_cloud_build_options` <a name="reset_cloud_build_options" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions"></a>

```python
def reset_cloud_build_options() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_files` <a name="reset_files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles"></a>

```python
def reset_files() -> None
```

##### `reset_zip` <a name="reset_zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.resetZip"></a>

```python
def reset_zip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions">cloud_build_options</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference">AppEngineFlexibleAppVersionDeploymentContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList">AppEngineFlexibleAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference">AppEngineFlexibleAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput">cloud_build_options_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput">container_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput">files_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput">zip_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_build_options`<sup>Required</sup> <a name="cloud_build_options" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions"></a>

```python
cloud_build_options: AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">AppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.container"></a>

```python
container: AppEngineFlexibleAppVersionDeploymentContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainerOutputReference">AppEngineFlexibleAppVersionDeploymentContainerOutputReference</a>

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.files"></a>

```python
files: AppEngineFlexibleAppVersionDeploymentFilesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFilesList">AppEngineFlexibleAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zip"></a>

```python
zip: AppEngineFlexibleAppVersionDeploymentZipOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference">AppEngineFlexibleAppVersionDeploymentZipOutputReference</a>

---

##### `cloud_build_options_input`<sup>Optional</sup> <a name="cloud_build_options_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput"></a>

```python
cloud_build_options_input: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentCloudBuildOptions">AppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput"></a>

```python
container_input: AppEngineFlexibleAppVersionDeploymentContainer
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentContainer">AppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `files_input`<sup>Optional</sup> <a name="files_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput"></a>

```python
files_input: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionDeploymentFiles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentFiles">AppEngineFlexibleAppVersionDeploymentFiles</a>]]

---

##### `zip_input`<sup>Optional</sup> <a name="zip_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput"></a>

```python
zip_input: AppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionDeployment
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeployment">AppEngineFlexibleAppVersionDeployment</a>

---


### AppEngineFlexibleAppVersionDeploymentZipOutputReference <a name="AppEngineFlexibleAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount">reset_files_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_files_count` <a name="reset_files_count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```python
def reset_files_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput">files_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount">files_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `files_count_input`<sup>Optional</sup> <a name="files_count_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```python
files_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `files_count`<sup>Required</sup> <a name="files_count" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```python
files_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionDeploymentZip
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionDeploymentZip">AppEngineFlexibleAppVersionDeploymentZip</a>

---


### AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference <a name="AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId">reset_config_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling">reset_disable_trace_sampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy">reset_rollout_strategy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_config_id` <a name="reset_config_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId"></a>

```python
def reset_config_id() -> None
```

##### `reset_disable_trace_sampling` <a name="reset_disable_trace_sampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling"></a>

```python
def reset_disable_trace_sampling() -> None
```

##### `reset_rollout_strategy` <a name="reset_rollout_strategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy"></a>

```python
def reset_rollout_strategy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput">config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput">disable_trace_sampling_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput">rollout_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId">config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling">disable_trace_sampling</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy">rollout_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_id_input`<sup>Optional</sup> <a name="config_id_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput"></a>

```python
config_id_input: str
```

- *Type:* str

---

##### `disable_trace_sampling_input`<sup>Optional</sup> <a name="disable_trace_sampling_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput"></a>

```python
disable_trace_sampling_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rollout_strategy_input`<sup>Optional</sup> <a name="rollout_strategy_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput"></a>

```python
rollout_strategy_input: str
```

- *Type:* str

---

##### `config_id`<sup>Required</sup> <a name="config_id" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId"></a>

```python
config_id: str
```

- *Type:* str

---

##### `disable_trace_sampling`<sup>Required</sup> <a name="disable_trace_sampling" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling"></a>

```python
disable_trace_sampling: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rollout_strategy`<sup>Required</sup> <a name="rollout_strategy" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy"></a>

```python
rollout_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionEndpointsApiService
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEndpointsApiService">AppEngineFlexibleAppVersionEndpointsApiService</a>

---


### AppEngineFlexibleAppVersionEntrypointOutputReference <a name="AppEngineFlexibleAppVersionEntrypointOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput">shell_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shell_input`<sup>Optional</sup> <a name="shell_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput"></a>

```python
shell_input: str
```

- *Type:* str

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.shell"></a>

```python
shell: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionEntrypoint
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionEntrypoint">AppEngineFlexibleAppVersionEntrypoint</a>

---


### AppEngineFlexibleAppVersionHandlersList <a name="AppEngineFlexibleAppVersionHandlersList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineFlexibleAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionHandlers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>]]

---


### AppEngineFlexibleAppVersionHandlersOutputReference <a name="AppEngineFlexibleAppVersionHandlersOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript">put_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles">put_static_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction">reset_auth_fail_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetLogin">reset_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">reset_redirect_http_response_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetScript">reset_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel">reset_security_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles">reset_static_files</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex">reset_url_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script` <a name="put_script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript"></a>

```python
def put_script(
  script_path: str
) -> None
```

###### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putScript.parameter.scriptPath"></a>

- *Type:* str

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#script_path AppEngineFlexibleAppVersion#script_path}

---

##### `put_static_files` <a name="put_static_files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles"></a>

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

###### `application_readable`<sup>Optional</sup> <a name="application_readable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.applicationReadable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#application_readable AppEngineFlexibleAppVersion#application_readable}

---

###### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.expiration"></a>

- *Type:* str

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#expiration AppEngineFlexibleAppVersion#expiration}

---

###### `http_headers`<sup>Optional</sup> <a name="http_headers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.httpHeaders"></a>

- *Type:* typing.Mapping[str]

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#http_headers AppEngineFlexibleAppVersion#http_headers}

---

###### `mime_type`<sup>Optional</sup> <a name="mime_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.mimeType"></a>

- *Type:* str

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#mime_type AppEngineFlexibleAppVersion#mime_type}

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.path"></a>

- *Type:* str

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#path AppEngineFlexibleAppVersion#path}

---

###### `require_matching_file`<sup>Optional</sup> <a name="require_matching_file" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.requireMatchingFile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#require_matching_file AppEngineFlexibleAppVersion#require_matching_file}

---

###### `upload_path_regex`<sup>Optional</sup> <a name="upload_path_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.uploadPathRegex"></a>

- *Type:* str

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/app_engine_flexible_app_version#upload_path_regex AppEngineFlexibleAppVersion#upload_path_regex}

---

##### `reset_auth_fail_action` <a name="reset_auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```python
def reset_auth_fail_action() -> None
```

##### `reset_login` <a name="reset_login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetLogin"></a>

```python
def reset_login() -> None
```

##### `reset_redirect_http_response_code` <a name="reset_redirect_http_response_code" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```python
def reset_redirect_http_response_code() -> None
```

##### `reset_script` <a name="reset_script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetScript"></a>

```python
def reset_script() -> None
```

##### `reset_security_level` <a name="reset_security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```python
def reset_security_level() -> None
```

##### `reset_static_files` <a name="reset_static_files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles"></a>

```python
def reset_static_files() -> None
```

##### `reset_url_regex` <a name="reset_url_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex"></a>

```python
def reset_url_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference">AppEngineFlexibleAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles">static_files</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput">auth_fail_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput">login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirect_http_response_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput">script_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput">security_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput">static_files_input</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput">url_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction">auth_fail_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirect_http_response_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel">security_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex">url_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.script"></a>

```python
script: AppEngineFlexibleAppVersionHandlersScriptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference">AppEngineFlexibleAppVersionHandlersScriptOutputReference</a>

---

##### `static_files`<sup>Required</sup> <a name="static_files" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles"></a>

```python
static_files: AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a>

---

##### `auth_fail_action_input`<sup>Optional</sup> <a name="auth_fail_action_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```python
auth_fail_action_input: str
```

- *Type:* str

---

##### `login_input`<sup>Optional</sup> <a name="login_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput"></a>

```python
login_input: str
```

- *Type:* str

---

##### `redirect_http_response_code_input`<sup>Optional</sup> <a name="redirect_http_response_code_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```python
redirect_http_response_code_input: str
```

- *Type:* str

---

##### `script_input`<sup>Optional</sup> <a name="script_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput"></a>

```python
script_input: AppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---

##### `security_level_input`<sup>Optional</sup> <a name="security_level_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```python
security_level_input: str
```

- *Type:* str

---

##### `static_files_input`<sup>Optional</sup> <a name="static_files_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```python
static_files_input: AppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `url_regex_input`<sup>Optional</sup> <a name="url_regex_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```python
url_regex_input: str
```

- *Type:* str

---

##### `auth_fail_action`<sup>Required</sup> <a name="auth_fail_action" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction"></a>

```python
auth_fail_action: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `redirect_http_response_code`<sup>Required</sup> <a name="redirect_http_response_code" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```python
redirect_http_response_code: str
```

- *Type:* str

---

##### `security_level`<sup>Required</sup> <a name="security_level" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel"></a>

```python
security_level: str
```

- *Type:* str

---

##### `url_regex`<sup>Required</sup> <a name="url_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex"></a>

```python
url_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppEngineFlexibleAppVersionHandlers, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlers">AppEngineFlexibleAppVersionHandlers</a>, cdktf.IResolvable]

---


### AppEngineFlexibleAppVersionHandlersScriptOutputReference <a name="AppEngineFlexibleAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput">script_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath">script_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_path_input`<sup>Optional</sup> <a name="script_path_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```python
script_path_input: str
```

- *Type:* str

---

##### `script_path`<sup>Required</sup> <a name="script_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```python
script_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionHandlersScript
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersScript">AppEngineFlexibleAppVersionHandlersScript</a>

---


### AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference <a name="AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">reset_application_readable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">reset_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType">reset_mime_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">reset_require_matching_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">reset_upload_path_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_readable` <a name="reset_application_readable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```python
def reset_application_readable() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_http_headers` <a name="reset_http_headers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```python
def reset_http_headers() -> None
```

##### `reset_mime_type` <a name="reset_mime_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```python
def reset_mime_type() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_require_matching_file` <a name="reset_require_matching_file" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```python
def reset_require_matching_file() -> None
```

##### `reset_upload_path_regex` <a name="reset_upload_path_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```python
def reset_upload_path_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">application_readable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">http_headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mime_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">require_matching_file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">upload_path_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">application_readable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">http_headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType">mime_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">require_matching_file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">upload_path_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_readable_input`<sup>Optional</sup> <a name="application_readable_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```python
application_readable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `http_headers_input`<sup>Optional</sup> <a name="http_headers_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```python
http_headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mime_type_input`<sup>Optional</sup> <a name="mime_type_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```python
mime_type_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `require_matching_file_input`<sup>Optional</sup> <a name="require_matching_file_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```python
require_matching_file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upload_path_regex_input`<sup>Optional</sup> <a name="upload_path_regex_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```python
upload_path_regex_input: str
```

- *Type:* str

---

##### `application_readable`<sup>Required</sup> <a name="application_readable" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```python
application_readable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `http_headers`<sup>Required</sup> <a name="http_headers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```python
http_headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mime_type`<sup>Required</sup> <a name="mime_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```python
mime_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `require_matching_file`<sup>Required</sup> <a name="require_matching_file" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```python
require_matching_file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `upload_path_regex`<sup>Required</sup> <a name="upload_path_regex" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```python
upload_path_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionHandlersStaticFiles
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionHandlersStaticFiles">AppEngineFlexibleAppVersionHandlersStaticFiles</a>

---


### AppEngineFlexibleAppVersionLivenessCheckOutputReference <a name="AppEngineFlexibleAppVersionLivenessCheckOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval">reset_check_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay">reset_initial_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold">reset_success_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_check_interval` <a name="reset_check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval"></a>

```python
def reset_check_interval() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_initial_delay` <a name="reset_initial_delay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay"></a>

```python
def reset_initial_delay() -> None
```

##### `reset_success_threshold` <a name="reset_success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold"></a>

```python
def reset_success_threshold() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput">check_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput">initial_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput">success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval">check_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay">initial_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_interval_input`<sup>Optional</sup> <a name="check_interval_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput"></a>

```python
check_interval_input: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `initial_delay_input`<sup>Optional</sup> <a name="initial_delay_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput"></a>

```python
initial_delay_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `success_threshold_input`<sup>Optional</sup> <a name="success_threshold_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput"></a>

```python
success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `check_interval`<sup>Required</sup> <a name="check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval"></a>

```python
check_interval: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `initial_delay`<sup>Required</sup> <a name="initial_delay" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay"></a>

```python
initial_delay: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionLivenessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionLivenessCheck">AppEngineFlexibleAppVersionLivenessCheck</a>

---


### AppEngineFlexibleAppVersionManualScalingOutputReference <a name="AppEngineFlexibleAppVersionManualScalingOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionManualScaling
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionManualScaling">AppEngineFlexibleAppVersionManualScaling</a>

---


### AppEngineFlexibleAppVersionNetworkOutputReference <a name="AppEngineFlexibleAppVersionNetworkOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts">reset_forwarded_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag">reset_instance_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity">reset_session_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forwarded_ports` <a name="reset_forwarded_ports" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts"></a>

```python
def reset_forwarded_ports() -> None
```

##### `reset_instance_tag` <a name="reset_instance_tag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag"></a>

```python
def reset_instance_tag() -> None
```

##### `reset_session_affinity` <a name="reset_session_affinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity"></a>

```python
def reset_session_affinity() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput">forwarded_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput">instance_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput">session_affinity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts">forwarded_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag">instance_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity">session_affinity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarded_ports_input`<sup>Optional</sup> <a name="forwarded_ports_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput"></a>

```python
forwarded_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_tag_input`<sup>Optional</sup> <a name="instance_tag_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput"></a>

```python
instance_tag_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `session_affinity_input`<sup>Optional</sup> <a name="session_affinity_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput"></a>

```python
session_affinity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `forwarded_ports`<sup>Required</sup> <a name="forwarded_ports" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts"></a>

```python
forwarded_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_tag`<sup>Required</sup> <a name="instance_tag" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag"></a>

```python
instance_tag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `session_affinity`<sup>Required</sup> <a name="session_affinity" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity"></a>

```python
session_affinity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionNetwork
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionNetwork">AppEngineFlexibleAppVersionNetwork</a>

---


### AppEngineFlexibleAppVersionReadinessCheckOutputReference <a name="AppEngineFlexibleAppVersionReadinessCheckOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout">reset_app_start_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval">reset_check_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold">reset_success_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_start_timeout` <a name="reset_app_start_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout"></a>

```python
def reset_app_start_timeout() -> None
```

##### `reset_check_interval` <a name="reset_check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval"></a>

```python
def reset_check_interval() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_success_threshold` <a name="reset_success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold"></a>

```python
def reset_success_threshold() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput">app_start_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput">check_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput">success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout">app_start_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval">check_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_start_timeout_input`<sup>Optional</sup> <a name="app_start_timeout_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput"></a>

```python
app_start_timeout_input: str
```

- *Type:* str

---

##### `check_interval_input`<sup>Optional</sup> <a name="check_interval_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput"></a>

```python
check_interval_input: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `success_threshold_input`<sup>Optional</sup> <a name="success_threshold_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput"></a>

```python
success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `app_start_timeout`<sup>Required</sup> <a name="app_start_timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout"></a>

```python
app_start_timeout: str
```

- *Type:* str

---

##### `check_interval`<sup>Required</sup> <a name="check_interval" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval"></a>

```python
check_interval: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionReadinessCheck
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionReadinessCheck">AppEngineFlexibleAppVersionReadinessCheck</a>

---


### AppEngineFlexibleAppVersionResourcesOutputReference <a name="AppEngineFlexibleAppVersionResourcesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes">put_volumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetCpu">reset_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb">reset_disk_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb">reset_memory_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes">reset_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_volumes` <a name="put_volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes"></a>

```python
def put_volumes(
  value: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionResourcesVolumes]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]

---

##### `reset_cpu` <a name="reset_cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetCpu"></a>

```python
def reset_cpu() -> None
```

##### `reset_disk_gb` <a name="reset_disk_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb"></a>

```python
def reset_disk_gb() -> None
```

##### `reset_memory_gb` <a name="reset_memory_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb"></a>

```python
def reset_memory_gb() -> None
```

##### `reset_volumes` <a name="reset_volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes"></a>

```python
def reset_volumes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList">AppEngineFlexibleAppVersionResourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput">disk_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput">memory_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput">volumes_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb">disk_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb">memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumes"></a>

```python
volumes: AppEngineFlexibleAppVersionResourcesVolumesList
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList">AppEngineFlexibleAppVersionResourcesVolumesList</a>

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_gb_input`<sup>Optional</sup> <a name="disk_gb_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput"></a>

```python
disk_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb_input`<sup>Optional</sup> <a name="memory_gb_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput"></a>

```python
memory_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volumes_input`<sup>Optional</sup> <a name="volumes_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput"></a>

```python
volumes_input: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionResourcesVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_gb`<sup>Required</sup> <a name="disk_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb"></a>

```python
disk_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gb`<sup>Required</sup> <a name="memory_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb"></a>

```python
memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionResources
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResources">AppEngineFlexibleAppVersionResources</a>

---


### AppEngineFlexibleAppVersionResourcesVolumesList <a name="AppEngineFlexibleAppVersionResourcesVolumesList" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppEngineFlexibleAppVersionResourcesVolumes]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>]]

---


### AppEngineFlexibleAppVersionResourcesVolumesOutputReference <a name="AppEngineFlexibleAppVersionResourcesVolumesOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppEngineFlexibleAppVersionResourcesVolumes, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionResourcesVolumes">AppEngineFlexibleAppVersionResourcesVolumes</a>, cdktf.IResolvable]

---


### AppEngineFlexibleAppVersionTimeoutsOutputReference <a name="AppEngineFlexibleAppVersionTimeoutsOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppEngineFlexibleAppVersionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionTimeouts">AppEngineFlexibleAppVersionTimeouts</a>, cdktf.IResolvable]

---


### AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference <a name="AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import app_engine_flexible_app_version

appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```python
internal_value: AppEngineFlexibleAppVersionVpcAccessConnector
```

- *Type:* <a href="#@cdktf/provider-google.appEngineFlexibleAppVersion.AppEngineFlexibleAppVersionVpcAccessConnector">AppEngineFlexibleAppVersionVpcAccessConnector</a>

---



