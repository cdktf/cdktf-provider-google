# `dataFusionInstance` Submodule <a name="`dataFusionInstance` Submodule" id="@cdktf/provider-google.dataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFusionInstance <a name="DataFusionInstance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  accelerators: typing.Union[IResolvable, typing.List[DataFusionInstanceAccelerators]] = None,
  crypto_key_config: DataFusionInstanceCryptoKeyConfig = None,
  dataproc_service_account: str = None,
  description: str = None,
  display_name: str = None,
  enable_rbac: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_monitoring: typing.Union[bool, IResolvable] = None,
  event_publish_config: DataFusionInstanceEventPublishConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network_config: DataFusionInstanceNetworkConfig = None,
  options: typing.Mapping[str] = None,
  private_instance: typing.Union[bool, IResolvable] = None,
  project: str = None,
  region: str = None,
  timeouts: DataFusionInstanceTimeouts = None,
  version: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.type">type</a></code> | <code>str</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.accelerators">accelerators</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.cryptoKeyConfig">crypto_key_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.dataprocServiceAccount">dataproc_service_account</a></code> | <code>str</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name for an instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.enableRbac">enable_rbac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.enableStackdriverMonitoring">enable_stackdriver_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.eventPublishConfig">event_publish_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#id DataFusionInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.privateInstance">private_instance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#project DataFusionInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.version">version</a></code> | <code>str</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.name"></a>

- *Type:* str

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#name DataFusionInstance#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.type"></a>

- *Type:* str

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#type DataFusionInstance#type}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.accelerators"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#accelerators DataFusionInstance#accelerators}

---

##### `crypto_key_config`<sup>Optional</sup> <a name="crypto_key_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.cryptoKeyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#crypto_key_config DataFusionInstance#crypto_key_config}

---

##### `dataproc_service_account`<sup>Optional</sup> <a name="dataproc_service_account" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.dataprocServiceAccount"></a>

- *Type:* str

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.description"></a>

- *Type:* str

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#description DataFusionInstance#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.displayName"></a>

- *Type:* str

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#display_name DataFusionInstance#display_name}

---

##### `enable_rbac`<sup>Optional</sup> <a name="enable_rbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.enableRbac"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enable_rbac DataFusionInstance#enable_rbac}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.enableStackdriverLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}

---

##### `enable_stackdriver_monitoring`<sup>Optional</sup> <a name="enable_stackdriver_monitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.enableStackdriverMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}

---

##### `event_publish_config`<sup>Optional</sup> <a name="event_publish_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.eventPublishConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#event_publish_config DataFusionInstance#event_publish_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#id DataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#labels DataFusionInstance#labels}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.networkConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#network_config DataFusionInstance#network_config}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#options DataFusionInstance#options}

---

##### `private_instance`<sup>Optional</sup> <a name="private_instance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.privateInstance"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#private_instance DataFusionInstance#private_instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#project DataFusionInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.region"></a>

- *Type:* str

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#region DataFusionInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#timeouts DataFusionInstance#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.version"></a>

- *Type:* str

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#version DataFusionInstance#version}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.Initializer.parameter.zone"></a>

- *Type:* str

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#zone DataFusionInstance#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators">put_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig">put_crypto_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig">put_event_publish_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig">put_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetAccelerators">reset_accelerators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetCryptoKeyConfig">reset_crypto_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDataprocServiceAccount">reset_dataproc_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableRbac">reset_enable_rbac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverLogging">reset_enable_stackdriver_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverMonitoring">reset_enable_stackdriver_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEventPublishConfig">reset_event_publish_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetNetworkConfig">reset_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOptions">reset_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetPrivateInstance">reset_private_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_accelerators` <a name="put_accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators"></a>

```python
def put_accelerators(
  value: typing.Union[IResolvable, typing.List[DataFusionInstanceAccelerators]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]

---

##### `put_crypto_key_config` <a name="put_crypto_key_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig"></a>

```python
def put_crypto_key_config(
  key_reference: str
) -> None
```

###### `key_reference`<sup>Required</sup> <a name="key_reference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putCryptoKeyConfig.parameter.keyReference"></a>

- *Type:* str

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#key_reference DataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_event_publish_config` <a name="put_event_publish_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig"></a>

```python
def put_event_publish_config(
  enabled: typing.Union[bool, IResolvable],
  topic: str
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enabled DataFusionInstance#enabled}

---

###### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putEventPublishConfig.parameter.topic"></a>

- *Type:* str

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#topic DataFusionInstance#topic}

---

##### `put_network_config` <a name="put_network_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig"></a>

```python
def put_network_config(
  connection_type: str = None,
  ip_allocation: str = None,
  network: str = None,
  private_service_connect_config: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig = None
) -> None
```

###### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig.parameter.connectionType"></a>

- *Type:* str

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#connection_type DataFusionInstance#connection_type}

---

###### `ip_allocation`<sup>Optional</sup> <a name="ip_allocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig.parameter.ipAllocation"></a>

- *Type:* str

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig.parameter.network"></a>

- *Type:* str

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#network DataFusionInstance#network}

---

###### `private_service_connect_config`<sup>Optional</sup> <a name="private_service_connect_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putNetworkConfig.parameter.privateServiceConnectConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#private_service_connect_config DataFusionInstance#private_service_connect_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#create DataFusionInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#update DataFusionInstance#update}.

---

##### `reset_accelerators` <a name="reset_accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetAccelerators"></a>

```python
def reset_accelerators() -> None
```

##### `reset_crypto_key_config` <a name="reset_crypto_key_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetCryptoKeyConfig"></a>

```python
def reset_crypto_key_config() -> None
```

##### `reset_dataproc_service_account` <a name="reset_dataproc_service_account" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDataprocServiceAccount"></a>

```python
def reset_dataproc_service_account() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_rbac` <a name="reset_enable_rbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableRbac"></a>

```python
def reset_enable_rbac() -> None
```

##### `reset_enable_stackdriver_logging` <a name="reset_enable_stackdriver_logging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverLogging"></a>

```python
def reset_enable_stackdriver_logging() -> None
```

##### `reset_enable_stackdriver_monitoring` <a name="reset_enable_stackdriver_monitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEnableStackdriverMonitoring"></a>

```python
def reset_enable_stackdriver_monitoring() -> None
```

##### `reset_event_publish_config` <a name="reset_event_publish_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetEventPublishConfig"></a>

```python
def reset_event_publish_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_network_config` <a name="reset_network_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetNetworkConfig"></a>

```python
def reset_network_config() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetOptions"></a>

```python
def reset_options() -> None
```

##### `reset_private_instance` <a name="reset_private_instance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetPrivateInstance"></a>

```python
def reset_private_instance() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataFusionInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.accelerators">accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList">DataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.apiEndpoint">api_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfig">crypto_key_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference">DataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfig">event_publish_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference">DataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference">DataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.p4ServiceAccount">p4_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tenantProjectId">tenant_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference">DataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.acceleratorsInput">accelerators_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfigInput">crypto_key_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccountInput">dataproc_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbacInput">enable_rbac_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLoggingInput">enable_stackdriver_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoringInput">enable_stackdriver_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfigInput">event_publish_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfigInput">network_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstanceInput">private_instance_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccount">dataproc_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbac">enable_rbac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoring">enable_stackdriver_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstance">private_instance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerators`<sup>Required</sup> <a name="accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.accelerators"></a>

```python
accelerators: DataFusionInstanceAcceleratorsList
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList">DataFusionInstanceAcceleratorsList</a>

---

##### `api_endpoint`<sup>Required</sup> <a name="api_endpoint" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.apiEndpoint"></a>

```python
api_endpoint: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `crypto_key_config`<sup>Required</sup> <a name="crypto_key_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfig"></a>

```python
crypto_key_config: DataFusionInstanceCryptoKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference">DataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `event_publish_config`<sup>Required</sup> <a name="event_publish_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfig"></a>

```python
event_publish_config: DataFusionInstanceEventPublishConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference">DataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

---

##### `network_config`<sup>Required</sup> <a name="network_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfig"></a>

```python
network_config: DataFusionInstanceNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference">DataFusionInstanceNetworkConfigOutputReference</a>

---

##### `p4_service_account`<sup>Required</sup> <a name="p4_service_account" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.p4ServiceAccount"></a>

```python
p4_service_account: str
```

- *Type:* str

---

##### `service_endpoint`<sup>Required</sup> <a name="service_endpoint" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.serviceEndpoint"></a>

```python
service_endpoint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `tenant_project_id`<sup>Required</sup> <a name="tenant_project_id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tenantProjectId"></a>

```python
tenant_project_id: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeouts"></a>

```python
timeouts: DataFusionInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference">DataFusionInstanceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `accelerators_input`<sup>Optional</sup> <a name="accelerators_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.acceleratorsInput"></a>

```python
accelerators_input: typing.Union[IResolvable, typing.List[DataFusionInstanceAccelerators]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]

---

##### `crypto_key_config_input`<sup>Optional</sup> <a name="crypto_key_config_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.cryptoKeyConfigInput"></a>

```python
crypto_key_config_input: DataFusionInstanceCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---

##### `dataproc_service_account_input`<sup>Optional</sup> <a name="dataproc_service_account_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccountInput"></a>

```python
dataproc_service_account_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_rbac_input`<sup>Optional</sup> <a name="enable_rbac_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbacInput"></a>

```python
enable_rbac_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging_input`<sup>Optional</sup> <a name="enable_stackdriver_logging_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLoggingInput"></a>

```python
enable_stackdriver_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_monitoring_input`<sup>Optional</sup> <a name="enable_stackdriver_monitoring_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```python
enable_stackdriver_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_publish_config_input`<sup>Optional</sup> <a name="event_publish_config_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.eventPublishConfigInput"></a>

```python
event_publish_config_input: DataFusionInstanceEventPublishConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_config_input`<sup>Optional</sup> <a name="network_config_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.networkConfigInput"></a>

```python
network_config_input: DataFusionInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `private_instance_input`<sup>Optional</sup> <a name="private_instance_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstanceInput"></a>

```python
private_instance_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataFusionInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `dataproc_service_account`<sup>Required</sup> <a name="dataproc_service_account" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.dataprocServiceAccount"></a>

```python
dataproc_service_account: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_rbac`<sup>Required</sup> <a name="enable_rbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableRbac"></a>

```python
enable_rbac: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_logging`<sup>Required</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_stackdriver_monitoring`<sup>Required</sup> <a name="enable_stackdriver_monitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.enableStackdriverMonitoring"></a>

```python
enable_stackdriver_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `private_instance`<sup>Required</sup> <a name="private_instance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.privateInstance"></a>

```python
private_instance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataFusionInstanceAccelerators <a name="DataFusionInstanceAccelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceAccelerators(
  accelerator_type: str,
  state: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.state">state</a></code> | <code>str</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#accelerator_type DataFusionInstance#accelerator_type}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators.property.state"></a>

```python
state: str
```

- *Type:* str

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#state DataFusionInstance#state}

---

### DataFusionInstanceConfig <a name="DataFusionInstanceConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  accelerators: typing.Union[IResolvable, typing.List[DataFusionInstanceAccelerators]] = None,
  crypto_key_config: DataFusionInstanceCryptoKeyConfig = None,
  dataproc_service_account: str = None,
  description: str = None,
  display_name: str = None,
  enable_rbac: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_logging: typing.Union[bool, IResolvable] = None,
  enable_stackdriver_monitoring: typing.Union[bool, IResolvable] = None,
  event_publish_config: DataFusionInstanceEventPublishConfig = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  network_config: DataFusionInstanceNetworkConfig = None,
  options: typing.Mapping[str] = None,
  private_instance: typing.Union[bool, IResolvable] = None,
  project: str = None,
  region: str = None,
  timeouts: DataFusionInstanceTimeouts = None,
  version: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.name">name</a></code> | <code>str</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.type">type</a></code> | <code>str</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.accelerators">accelerators</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]</code> | accelerators block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.cryptoKeyConfig">crypto_key_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dataprocServiceAccount">dataproc_service_account</a></code> | <code>str</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.description">description</a></code> | <code>str</code> | An optional description of the instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name for an instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableRbac">enable_rbac</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverLogging">enable_stackdriver_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverMonitoring">enable_stackdriver_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.eventPublishConfig">event_publish_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#id DataFusionInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.networkConfig">network_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.privateInstance">private_instance</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#project DataFusionInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.region">region</a></code> | <code>str</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.version">version</a></code> | <code>str</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.zone">zone</a></code> | <code>str</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#name DataFusionInstance#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#type DataFusionInstance#type}

---

##### `accelerators`<sup>Optional</sup> <a name="accelerators" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.accelerators"></a>

```python
accelerators: typing.Union[IResolvable, typing.List[DataFusionInstanceAccelerators]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#accelerators DataFusionInstance#accelerators}

---

##### `crypto_key_config`<sup>Optional</sup> <a name="crypto_key_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```python
crypto_key_config: DataFusionInstanceCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#crypto_key_config DataFusionInstance#crypto_key_config}

---

##### `dataproc_service_account`<sup>Optional</sup> <a name="dataproc_service_account" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```python
dataproc_service_account: str
```

- *Type:* str

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#description DataFusionInstance#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#display_name DataFusionInstance#display_name}

---

##### `enable_rbac`<sup>Optional</sup> <a name="enable_rbac" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableRbac"></a>

```python
enable_rbac: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enable_rbac DataFusionInstance#enable_rbac}

---

##### `enable_stackdriver_logging`<sup>Optional</sup> <a name="enable_stackdriver_logging" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```python
enable_stackdriver_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}

---

##### `enable_stackdriver_monitoring`<sup>Optional</sup> <a name="enable_stackdriver_monitoring" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```python
enable_stackdriver_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}

---

##### `event_publish_config`<sup>Optional</sup> <a name="event_publish_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.eventPublishConfig"></a>

```python
event_publish_config: DataFusionInstanceEventPublishConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#event_publish_config DataFusionInstance#event_publish_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#id DataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#labels DataFusionInstance#labels}

---

##### `network_config`<sup>Optional</sup> <a name="network_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.networkConfig"></a>

```python
network_config: DataFusionInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#network_config DataFusionInstance#network_config}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#options DataFusionInstance#options}

---

##### `private_instance`<sup>Optional</sup> <a name="private_instance" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.privateInstance"></a>

```python
private_instance: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#private_instance DataFusionInstance#private_instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#project DataFusionInstance#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#region DataFusionInstance#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.timeouts"></a>

```python
timeouts: DataFusionInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#timeouts DataFusionInstance#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#version DataFusionInstance#version}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#zone DataFusionInstance#zone}

---

### DataFusionInstanceCryptoKeyConfig <a name="DataFusionInstanceCryptoKeyConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceCryptoKeyConfig(
  key_reference: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.property.keyReference">key_reference</a></code> | <code>str</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `key_reference`<sup>Required</sup> <a name="key_reference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```python
key_reference: str
```

- *Type:* str

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#key_reference DataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataFusionInstanceEventPublishConfig <a name="DataFusionInstanceEventPublishConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceEventPublishConfig(
  enabled: typing.Union[bool, IResolvable],
  topic: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.topic">topic</a></code> | <code>str</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#enabled DataFusionInstance#enabled}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig.property.topic"></a>

```python
topic: str
```

- *Type:* str

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#topic DataFusionInstance#topic}

---

### DataFusionInstanceNetworkConfig <a name="DataFusionInstanceNetworkConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceNetworkConfig(
  connection_type: str = None,
  ip_allocation: str = None,
  network: str = None,
  private_service_connect_config: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.ipAllocation">ip_allocation</a></code> | <code>str</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.network">network</a></code> | <code>str</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#connection_type DataFusionInstance#connection_type}

---

##### `ip_allocation`<sup>Optional</sup> <a name="ip_allocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```python
ip_allocation: str
```

- *Type:* str

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#network DataFusionInstance#network}

---

##### `private_service_connect_config`<sup>Optional</sup> <a name="private_service_connect_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```python
private_service_connect_config: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#private_service_connect_config DataFusionInstance#private_service_connect_config}

---

### DataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="DataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig(
  network_attachment: str = None,
  unreachable_cidr_block: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">network_attachment</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">unreachable_cidr_block</a></code> | <code>str</code> | Optional. |

---

##### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#network_attachment DataFusionInstance#network_attachment}

---

##### `unreachable_cidr_block`<sup>Optional</sup> <a name="unreachable_cidr_block" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```python
unreachable_cidr_block: str
```

- *Type:* str

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#unreachable_cidr_block DataFusionInstance#unreachable_cidr_block}

---

### DataFusionInstanceTimeouts <a name="DataFusionInstanceTimeouts" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#create DataFusionInstance#create}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#update DataFusionInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#create DataFusionInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#update DataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFusionInstanceAcceleratorsList <a name="DataFusionInstanceAcceleratorsList" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataFusionInstanceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataFusionInstanceAccelerators]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]]

---


### DataFusionInstanceAcceleratorsOutputReference <a name="DataFusionInstanceAcceleratorsOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFusionInstanceAccelerators]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceAccelerators">DataFusionInstanceAccelerators</a>]

---


### DataFusionInstanceCryptoKeyConfigOutputReference <a name="DataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">key_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">key_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_reference_input`<sup>Optional</sup> <a name="key_reference_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```python
key_reference_input: str
```

- *Type:* str

---

##### `key_reference`<sup>Required</sup> <a name="key_reference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```python
key_reference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataFusionInstanceCryptoKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceCryptoKeyConfig">DataFusionInstanceCryptoKeyConfig</a>

---


### DataFusionInstanceEventPublishConfigOutputReference <a name="DataFusionInstanceEventPublishConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topicInput">topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topic">topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `topic_input`<sup>Optional</sup> <a name="topic_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```python
topic_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```python
topic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataFusionInstanceEventPublishConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceEventPublishConfig">DataFusionInstanceEventPublishConfig</a>

---


### DataFusionInstanceNetworkConfigOutputReference <a name="DataFusionInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">put_private_service_connect_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">reset_ip_allocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">reset_private_service_connect_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_private_service_connect_config` <a name="put_private_service_connect_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```python
def put_private_service_connect_config(
  network_attachment: str = None,
  unreachable_cidr_block: str = None
) -> None
```

###### `network_attachment`<sup>Optional</sup> <a name="network_attachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.networkAttachment"></a>

- *Type:* str

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#network_attachment DataFusionInstance#network_attachment}

---

###### `unreachable_cidr_block`<sup>Optional</sup> <a name="unreachable_cidr_block" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.unreachableCidrBlock"></a>

- *Type:* str

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/data_fusion_instance#unreachable_cidr_block DataFusionInstance#unreachable_cidr_block}

---

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_ip_allocation` <a name="reset_ip_allocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```python
def reset_ip_allocation() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_private_service_connect_config` <a name="reset_private_service_connect_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```python
def reset_private_service_connect_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">private_service_connect_config</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">ip_allocation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">private_service_connect_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">ip_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_service_connect_config`<sup>Required</sup> <a name="private_service_connect_config" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```python
private_service_connect_config: DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `ip_allocation_input`<sup>Optional</sup> <a name="ip_allocation_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```python
ip_allocation_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `private_service_connect_config_input`<sup>Optional</sup> <a name="private_service_connect_config_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```python
private_service_connect_config_input: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `ip_allocation`<sup>Required</sup> <a name="ip_allocation" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```python
ip_allocation: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataFusionInstanceNetworkConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfig">DataFusionInstanceNetworkConfig</a>

---


### DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">reset_network_attachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">reset_unreachable_cidr_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_network_attachment` <a name="reset_network_attachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```python
def reset_network_attachment() -> None
```

##### `reset_unreachable_cidr_block` <a name="reset_unreachable_cidr_block" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```python
def reset_unreachable_cidr_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">effective_unreachable_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">network_attachment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">unreachable_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">network_attachment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">unreachable_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effective_unreachable_cidr_block`<sup>Required</sup> <a name="effective_unreachable_cidr_block" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```python
effective_unreachable_cidr_block: str
```

- *Type:* str

---

##### `network_attachment_input`<sup>Optional</sup> <a name="network_attachment_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```python
network_attachment_input: str
```

- *Type:* str

---

##### `unreachable_cidr_block_input`<sup>Optional</sup> <a name="unreachable_cidr_block_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```python
unreachable_cidr_block_input: str
```

- *Type:* str

---

##### `network_attachment`<sup>Required</sup> <a name="network_attachment" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```python
network_attachment: str
```

- *Type:* str

---

##### `unreachable_cidr_block`<sup>Required</sup> <a name="unreachable_cidr_block" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```python
unreachable_cidr_block: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceNetworkConfigPrivateServiceConnectConfig">DataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### DataFusionInstanceTimeoutsOutputReference <a name="DataFusionInstanceTimeoutsOutputReference" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_fusion_instance

dataFusionInstance.DataFusionInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataFusionInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataFusionInstance.DataFusionInstanceTimeouts">DataFusionInstanceTimeouts</a>]

---



