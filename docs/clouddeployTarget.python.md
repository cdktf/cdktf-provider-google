# `google_clouddeploy_target`

Refer to the Terraform Registory for docs: [`google_clouddeploy_target`](https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target).

# `clouddeployTarget` Submodule <a name="`clouddeployTarget` Submodule" id="@cdktf/provider-google.clouddeployTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployTarget <a name="ClouddeployTarget" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target google_clouddeploy_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget(
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
  name: str,
  annotations: typing.Mapping[str] = None,
  anthos_cluster: ClouddeployTargetAnthosCluster = None,
  description: str = None,
  execution_configs: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]] = None,
  gke: ClouddeployTargetGke = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  run: ClouddeployTargetRun = None,
  timeouts: ClouddeployTargetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.anthosCluster">anthos_cluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.executionConfigs">execution_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.name"></a>

- *Type:* str

Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthos_cluster`<sup>Optional</sup> <a name="anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.anthosCluster"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.description"></a>

- *Type:* str

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `execution_configs`<sup>Optional</sup> <a name="execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.executionConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.gke"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.requireApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.run"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster">put_anthos_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs">put_execution_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke">put_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun">put_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster">reset_anthos_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs">reset_execution_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetGke">reset_gke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval">reset_require_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRun">reset_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_anthos_cluster` <a name="put_anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster"></a>

```python
def put_anthos_cluster(
  membership: str = None
) -> None
```

###### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putAnthosCluster.parameter.membership"></a>

- *Type:* str

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

##### `put_execution_configs` <a name="put_execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs"></a>

```python
def put_execution_configs(
  value: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putExecutionConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

---

##### `put_gke` <a name="put_gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke"></a>

```python
def put_gke(
  cluster: str = None,
  internal_ip: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.cluster"></a>

- *Type:* str

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

###### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putGke.parameter.internalIp"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

##### `put_run` <a name="put_run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun"></a>

```python
def put_run(
  location: str
) -> None
```

###### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putRun.parameter.location"></a>

- *Type:* str

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#create ClouddeployTarget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#update ClouddeployTarget#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_anthos_cluster` <a name="reset_anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetAnthosCluster"></a>

```python
def reset_anthos_cluster() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_configs` <a name="reset_execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetExecutionConfigs"></a>

```python
def reset_execution_configs() -> None
```

##### `reset_gke` <a name="reset_gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetGke"></a>

```python
def reset_gke() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_require_approval` <a name="reset_require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRequireApproval"></a>

```python
def reset_require_approval() -> None
```

##### `reset_run` <a name="reset_run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetRun"></a>

```python
def reset_run() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster">anthos_cluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs">execution_configs</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput">anthos_cluster_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput">execution_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput">gke_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput">require_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput">run_input</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `anthos_cluster`<sup>Required</sup> <a name="anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosCluster"></a>

```python
anthos_cluster: ClouddeployTargetAnthosClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference">ClouddeployTargetAnthosClusterOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `execution_configs`<sup>Required</sup> <a name="execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigs"></a>

```python
execution_configs: ClouddeployTargetExecutionConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList">ClouddeployTargetExecutionConfigsList</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gke"></a>

```python
gke: ClouddeployTargetGkeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference">ClouddeployTargetGkeOutputReference</a>

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.run"></a>

```python
run: ClouddeployTargetRunOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference">ClouddeployTargetRunOutputReference</a>

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeouts"></a>

```python
timeouts: ClouddeployTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference">ClouddeployTargetTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `anthos_cluster_input`<sup>Optional</sup> <a name="anthos_cluster_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.anthosClusterInput"></a>

```python
anthos_cluster_input: ClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_configs_input`<sup>Optional</sup> <a name="execution_configs_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.executionConfigsInput"></a>

```python
execution_configs_input: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

---

##### `gke_input`<sup>Optional</sup> <a name="gke_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.gkeInput"></a>

```python
gke_input: ClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `require_approval_input`<sup>Optional</sup> <a name="require_approval_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApprovalInput"></a>

```python
require_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `run_input`<sup>Optional</sup> <a name="run_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.runInput"></a>

```python
run_input: ClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ClouddeployTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `require_approval`<sup>Required</sup> <a name="require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployTargetAnthosCluster <a name="ClouddeployTargetAnthosCluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAnthosCluster(
  membership: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership">membership</a></code> | <code>str</code> | Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`. |

---

##### `membership`<sup>Optional</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster.property.membership"></a>

```python
membership: str
```

- *Type:* str

Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#membership ClouddeployTarget#membership}

---

### ClouddeployTargetConfig <a name="ClouddeployTargetConfig" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  annotations: typing.Mapping[str] = None,
  anthos_cluster: ClouddeployTargetAnthosCluster = None,
  description: str = None,
  execution_configs: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]] = None,
  gke: ClouddeployTargetGke = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  require_approval: typing.Union[bool, IResolvable] = None,
  run: ClouddeployTargetRun = None,
  timeouts: ClouddeployTargetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name">name</a></code> | <code>str</code> | Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster">anthos_cluster</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | anthos_cluster block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description">description</a></code> | <code>str</code> | Optional. Description of the `Target`. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs">execution_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | execution_configs block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#id ClouddeployTarget#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval">require_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. Whether or not the `Target` requires approval. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run">run</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | run block. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#name ClouddeployTarget#name}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#annotations ClouddeployTarget#annotations}

---

##### `anthos_cluster`<sup>Optional</sup> <a name="anthos_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.anthosCluster"></a>

```python
anthos_cluster: ClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

anthos_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#anthos_cluster ClouddeployTarget#anthos_cluster}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. Description of the `Target`. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#description ClouddeployTarget#description}

---

##### `execution_configs`<sup>Optional</sup> <a name="execution_configs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.executionConfigs"></a>

```python
execution_configs: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

execution_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#execution_configs ClouddeployTarget#execution_configs}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.gke"></a>

```python
gke: ClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#gke ClouddeployTarget#gke}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#id ClouddeployTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional.

Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#labels ClouddeployTarget#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#project ClouddeployTarget#project}

---

##### `require_approval`<sup>Optional</sup> <a name="require_approval" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.requireApproval"></a>

```python
require_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional. Whether or not the `Target` requires approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#require_approval ClouddeployTarget#require_approval}

---

##### `run`<sup>Optional</sup> <a name="run" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.run"></a>

```python
run: ClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

run block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#run ClouddeployTarget#run}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetConfig.property.timeouts"></a>

```python
timeouts: ClouddeployTargetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#timeouts ClouddeployTarget#timeouts}

---

### ClouddeployTargetExecutionConfigs <a name="ClouddeployTargetExecutionConfigs" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetExecutionConfigs(
  usages: typing.List[str],
  artifact_storage: str = None,
  execution_timeout: str = None,
  service_account: str = None,
  worker_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages">usages</a></code> | <code>typing.List[str]</code> | Required. Usages when this configuration should be applied. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage">artifact_storage</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount">service_account</a></code> | <code>str</code> | Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool">worker_pool</a></code> | <code>str</code> | Optional. |

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

Required. Usages when this configuration should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#usages ClouddeployTarget#usages}

---

##### `artifact_storage`<sup>Optional</sup> <a name="artifact_storage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.artifactStorage"></a>

```python
artifact_storage: str
```

- *Type:* str

Optional.

Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#artifact_storage ClouddeployTarget#artifact_storage}

---

##### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

Optional.

Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#execution_timeout ClouddeployTarget#execution_timeout}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#service_account ClouddeployTarget#service_account}

---

##### `worker_pool`<sup>Optional</sup> <a name="worker_pool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

Optional.

The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#worker_pool ClouddeployTarget#worker_pool}

---

### ClouddeployTargetGke <a name="ClouddeployTargetGke" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetGke(
  cluster: str = None,
  internal_ip: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster">cluster</a></code> | <code>str</code> | Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp">internal_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#cluster ClouddeployTarget#cluster}

---

##### `internal_ip`<sup>Optional</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke.property.internalIp"></a>

```python
internal_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#internal_ip ClouddeployTarget#internal_ip}

---

### ClouddeployTargetRun <a name="ClouddeployTargetRun" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetRun(
  location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location">location</a></code> | <code>str</code> | Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun.property.location"></a>

```python
location: str
```

- *Type:* str

Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#location ClouddeployTarget#location}

---

### ClouddeployTargetTimeouts <a name="ClouddeployTargetTimeouts" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#create ClouddeployTarget#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#update ClouddeployTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#create ClouddeployTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#delete ClouddeployTarget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/clouddeploy_target#update ClouddeployTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployTargetAnthosClusterOutputReference <a name="ClouddeployTargetAnthosClusterOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership">reset_membership</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_membership` <a name="reset_membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.resetMembership"></a>

```python
def reset_membership() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput">membership_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership">membership</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `membership_input`<sup>Optional</sup> <a name="membership_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membershipInput"></a>

```python
membership_input: str
```

- *Type:* str

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.membership"></a>

```python
membership: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosClusterOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetAnthosCluster
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetAnthosCluster">ClouddeployTargetAnthosCluster</a>

---


### ClouddeployTargetExecutionConfigsList <a name="ClouddeployTargetExecutionConfigsList" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetExecutionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClouddeployTargetExecutionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClouddeployTargetExecutionConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]]

---


### ClouddeployTargetExecutionConfigsOutputReference <a name="ClouddeployTargetExecutionConfigsOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage">reset_artifact_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout">reset_execution_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool">reset_worker_pool</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_artifact_storage` <a name="reset_artifact_storage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetArtifactStorage"></a>

```python
def reset_artifact_storage() -> None
```

##### `reset_execution_timeout` <a name="reset_execution_timeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetExecutionTimeout"></a>

```python
def reset_execution_timeout() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_worker_pool` <a name="reset_worker_pool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.resetWorkerPool"></a>

```python
def reset_worker_pool() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput">artifact_storage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput">execution_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput">usages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput">worker_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage">artifact_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout">execution_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages">usages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool">worker_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `artifact_storage_input`<sup>Optional</sup> <a name="artifact_storage_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorageInput"></a>

```python
artifact_storage_input: str
```

- *Type:* str

---

##### `execution_timeout_input`<sup>Optional</sup> <a name="execution_timeout_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeoutInput"></a>

```python
execution_timeout_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `usages_input`<sup>Optional</sup> <a name="usages_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usagesInput"></a>

```python
usages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `worker_pool_input`<sup>Optional</sup> <a name="worker_pool_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPoolInput"></a>

```python
worker_pool_input: str
```

- *Type:* str

---

##### `artifact_storage`<sup>Required</sup> <a name="artifact_storage" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.artifactStorage"></a>

```python
artifact_storage: str
```

- *Type:* str

---

##### `execution_timeout`<sup>Required</sup> <a name="execution_timeout" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.executionTimeout"></a>

```python
execution_timeout: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `worker_pool`<sup>Required</sup> <a name="worker_pool" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.workerPool"></a>

```python
worker_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetExecutionConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetExecutionConfigs">ClouddeployTargetExecutionConfigs</a>]

---


### ClouddeployTargetGkeOutputReference <a name="ClouddeployTargetGkeOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetGkeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster">reset_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp">reset_internal_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster` <a name="reset_cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetCluster"></a>

```python
def reset_cluster() -> None
```

##### `reset_internal_ip` <a name="reset_internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.resetInternalIp"></a>

```python
def reset_internal_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput">internal_ip_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp">internal_ip</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `internal_ip_input`<sup>Optional</sup> <a name="internal_ip_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIpInput"></a>

```python
internal_ip_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `internal_ip`<sup>Required</sup> <a name="internal_ip" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalIp"></a>

```python
internal_ip: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGkeOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetGke
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetGke">ClouddeployTargetGke</a>

---


### ClouddeployTargetRunOutputReference <a name="ClouddeployTargetRunOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetRunOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRunOutputReference.property.internalValue"></a>

```python
internal_value: ClouddeployTargetRun
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetRun">ClouddeployTargetRun</a>

---


### ClouddeployTargetTimeoutsOutputReference <a name="ClouddeployTargetTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import clouddeploy_target

clouddeployTarget.ClouddeployTargetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClouddeployTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.clouddeployTarget.ClouddeployTargetTimeouts">ClouddeployTargetTimeouts</a>]

---



