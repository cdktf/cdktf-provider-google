# `dataprocGdcServiceInstance` Submodule <a name="`dataprocGdcServiceInstance` Submodule" id="@cdktf/provider-google.dataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcServiceInstance <a name="DataprocGdcServiceInstance" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  service_instance_id: str,
  display_name: str = None,
  gdce_cluster: DataprocGdcServiceInstanceGdceCluster = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  spark_service_instance_config: DataprocGdcServiceInstanceSparkServiceInstanceConfig = None,
  timeouts: DataprocGdcServiceInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.gdceCluster">gdce_cluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.sparkServiceInstanceConfig">spark_service_instance_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#location DataprocGdcServiceInstance#location}

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceInstanceId"></a>

- *Type:* str

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#service_instance_id DataprocGdcServiceInstance#service_instance_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.displayName"></a>

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#display_name DataprocGdcServiceInstance#display_name}

---

##### `gdce_cluster`<sup>Optional</sup> <a name="gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.gdceCluster"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#labels DataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}.

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#service_account DataprocGdcServiceInstance#service_account}

---

##### `spark_service_instance_config`<sup>Optional</sup> <a name="spark_service_instance_config" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.sparkServiceInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#spark_service_instance_config DataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#timeouts DataprocGdcServiceInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster">put_gdce_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig">put_spark_service_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetGdceCluster">reset_gdce_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetSparkServiceInstanceConfig">reset_spark_service_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gdce_cluster` <a name="put_gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster"></a>

```python
def put_gdce_cluster(
  gdce_cluster: str
) -> None
```

###### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putGdceCluster.parameter.gdceCluster"></a>

- *Type:* str

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

##### `put_spark_service_instance_config` <a name="put_spark_service_instance_config" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```python
def put_spark_service_instance_config() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gdce_cluster` <a name="reset_gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetGdceCluster"></a>

```python
def reset_gdce_cluster() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_spark_service_instance_config` <a name="reset_spark_service_instance_config" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```python
def reset_spark_service_instance_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataprocGdcServiceInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveServiceAccount">effective_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceCluster">gdce_cluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference">DataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.requestedState">requested_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfig">spark_service_instance_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference">DataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceClusterInput">gdce_cluster_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceIdInput">service_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">spark_service_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_service_account`<sup>Required</sup> <a name="effective_service_account" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```python
effective_service_account: str
```

- *Type:* str

---

##### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceCluster"></a>

```python
gdce_cluster: DataprocGdcServiceInstanceGdceClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference">DataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `requested_state`<sup>Required</sup> <a name="requested_state" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.requestedState"></a>

```python
requested_state: str
```

- *Type:* str

---

##### `spark_service_instance_config`<sup>Required</sup> <a name="spark_service_instance_config" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```python
spark_service_instance_config: DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeouts"></a>

```python
timeouts: DataprocGdcServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference">DataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gdce_cluster_input`<sup>Optional</sup> <a name="gdce_cluster_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.gdceClusterInput"></a>

```python
gdce_cluster_input: DataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_instance_id_input`<sup>Optional</sup> <a name="service_instance_id_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```python
service_instance_id_input: str
```

- *Type:* str

---

##### `spark_service_instance_config_input`<sup>Optional</sup> <a name="spark_service_instance_config_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```python
spark_service_instance_config_input: DataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataprocGdcServiceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcServiceInstanceConfig <a name="DataprocGdcServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  service_instance_id: str,
  display_name: str = None,
  gdce_cluster: DataprocGdcServiceInstanceGdceCluster = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  spark_service_instance_config: DataprocGdcServiceInstanceSparkServiceInstanceConfig = None,
  timeouts: DataprocGdcServiceInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.gdceCluster">gdce_cluster</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">spark_service_instance_config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#location DataprocGdcServiceInstance#location}

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#service_instance_id DataprocGdcServiceInstance#service_instance_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#display_name DataprocGdcServiceInstance#display_name}

---

##### `gdce_cluster`<sup>Optional</sup> <a name="gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```python
gdce_cluster: DataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#id DataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#labels DataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#project DataprocGdcServiceInstance#project}.

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#service_account DataprocGdcServiceInstance#service_account}

---

##### `spark_service_instance_config`<sup>Optional</sup> <a name="spark_service_instance_config" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```python
spark_service_instance_config: DataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#spark_service_instance_config DataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceConfig.property.timeouts"></a>

```python
timeouts: DataprocGdcServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#timeouts DataprocGdcServiceInstance#timeouts}

---

### DataprocGdcServiceInstanceGdceCluster <a name="DataprocGdcServiceInstanceGdceCluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster(
  gdce_cluster: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.property.gdceCluster">gdce_cluster</a></code> | <code>str</code> | Gdce cluster resource id. |

---

##### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```python
gdce_cluster: str
```

- *Type:* str

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#gdce_cluster DataprocGdcServiceInstance#gdce_cluster}

---

### DataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="DataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig()
```


### DataprocGdcServiceInstanceTimeouts <a name="DataprocGdcServiceInstanceTimeouts" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#create DataprocGdcServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#delete DataprocGdcServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/dataproc_gdc_service_instance#update DataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcServiceInstanceGdceClusterOutputReference <a name="DataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">gdce_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">gdce_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gdce_cluster_input`<sup>Optional</sup> <a name="gdce_cluster_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```python
gdce_cluster_input: str
```

- *Type:* str

---

##### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```python
gdce_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceGdceCluster">DataprocGdcServiceInstanceGdceCluster</a>

---


### DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceSparkServiceInstanceConfig">DataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### DataprocGdcServiceInstanceTimeoutsOutputReference <a name="DataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataproc_gdc_service_instance

dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataprocGdcServiceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataprocGdcServiceInstance.DataprocGdcServiceInstanceTimeouts">DataprocGdcServiceInstanceTimeouts</a>]

---



