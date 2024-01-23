# `mlEngineModel` Submodule <a name="`mlEngineModel` Submodule" id="@cdktf/provider-google.mlEngineModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlEngineModel <a name="MlEngineModel" id="@cdktf/provider-google.mlEngineModel.MlEngineModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model google_ml_engine_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModel(
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
  default_version: MlEngineModelDefaultVersion = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  online_prediction_console_logging: typing.Union[bool, IResolvable] = None,
  online_prediction_logging: typing.Union[bool, IResolvable] = None,
  project: str = None,
  regions: typing.List[str] = None,
  timeouts: MlEngineModelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.name">name</a></code> | <code>str</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.defaultVersion">default_version</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.description">description</a></code> | <code>str</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#id MlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.onlinePredictionConsoleLogging">online_prediction_console_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.onlinePredictionLogging">online_prediction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#project MlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.name"></a>

- *Type:* str

The name specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.defaultVersion"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#default_version MlEngineModel#default_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.description"></a>

- *Type:* str

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#description MlEngineModel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#id MlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

One or more labels that you can add, to organize your models.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#labels MlEngineModel#labels}

---

##### `online_prediction_console_logging`<sup>Optional</sup> <a name="online_prediction_console_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.onlinePredictionConsoleLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}

---

##### `online_prediction_logging`<sup>Optional</sup> <a name="online_prediction_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.onlinePredictionLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#online_prediction_logging MlEngineModel#online_prediction_logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#project MlEngineModel#project}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#regions MlEngineModel#regions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#timeouts MlEngineModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion">put_default_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion">reset_default_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging">reset_online_prediction_console_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging">reset_online_prediction_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_version` <a name="put_default_version" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion"></a>

```python
def put_default_version(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putDefaultVersion.parameter.name"></a>

- *Type:* str

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#create MlEngineModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#update MlEngineModel#update}.

---

##### `reset_default_version` <a name="reset_default_version" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDefaultVersion"></a>

```python
def reset_default_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_online_prediction_console_logging` <a name="reset_online_prediction_console_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionConsoleLogging"></a>

```python
def reset_online_prediction_console_logging() -> None
```

##### `reset_online_prediction_logging` <a name="reset_online_prediction_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetOnlinePredictionLogging"></a>

```python
def reset_online_prediction_logging() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MlEngineModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MlEngineModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MlEngineModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MlEngineModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MlEngineModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion">default_version</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput">default_version_input</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput">online_prediction_console_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput">online_prediction_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging">online_prediction_console_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging">online_prediction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersion"></a>

```python
default_version: MlEngineModelDefaultVersionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference">MlEngineModelDefaultVersionOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeouts"></a>

```python
timeouts: MlEngineModelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference">MlEngineModelTimeoutsOutputReference</a>

---

##### `default_version_input`<sup>Optional</sup> <a name="default_version_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.defaultVersionInput"></a>

```python
default_version_input: MlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `online_prediction_console_logging_input`<sup>Optional</sup> <a name="online_prediction_console_logging_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLoggingInput"></a>

```python
online_prediction_console_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `online_prediction_logging_input`<sup>Optional</sup> <a name="online_prediction_logging_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLoggingInput"></a>

```python
online_prediction_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MlEngineModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `online_prediction_console_logging`<sup>Required</sup> <a name="online_prediction_console_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionConsoleLogging"></a>

```python
online_prediction_console_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `online_prediction_logging`<sup>Required</sup> <a name="online_prediction_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.onlinePredictionLogging"></a>

```python
online_prediction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.mlEngineModel.MlEngineModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MlEngineModelConfig <a name="MlEngineModelConfig" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  default_version: MlEngineModelDefaultVersion = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  online_prediction_console_logging: typing.Union[bool, IResolvable] = None,
  online_prediction_logging: typing.Union[bool, IResolvable] = None,
  project: str = None,
  regions: typing.List[str] = None,
  timeouts: MlEngineModelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name">name</a></code> | <code>str</code> | The name specified for the model. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion">default_version</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | default_version block. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description">description</a></code> | <code>str</code> | The description specified for the model when it was created. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#id MlEngineModel#id}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | One or more labels that you can add, to organize your models. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging">online_prediction_console_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging">online_prediction_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, online prediction access logs are sent to StackDriver Logging. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#project MlEngineModel#project}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | The list of regions where the model is going to be deployed. Currently only one region per model is supported. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.defaultVersion"></a>

```python
default_version: MlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

default_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#default_version MlEngineModel#default_version}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description specified for the model when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#description MlEngineModel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#id MlEngineModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

One or more labels that you can add, to organize your models.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#labels MlEngineModel#labels}

---

##### `online_prediction_console_logging`<sup>Optional</sup> <a name="online_prediction_console_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionConsoleLogging"></a>

```python
online_prediction_console_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction nodes send stderr and stdout streams to Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#online_prediction_console_logging MlEngineModel#online_prediction_console_logging}

---

##### `online_prediction_logging`<sup>Optional</sup> <a name="online_prediction_logging" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.onlinePredictionLogging"></a>

```python
online_prediction_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, online prediction access logs are sent to StackDriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#online_prediction_logging MlEngineModel#online_prediction_logging}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#project MlEngineModel#project}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The list of regions where the model is going to be deployed. Currently only one region per model is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#regions MlEngineModel#regions}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelConfig.property.timeouts"></a>

```python
timeouts: MlEngineModelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#timeouts MlEngineModel#timeouts}

---

### MlEngineModelDefaultVersion <a name="MlEngineModelDefaultVersion" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModelDefaultVersion(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name">name</a></code> | <code>str</code> | The name specified for the version when it was created. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion.property.name"></a>

```python
name: str
```

- *Type:* str

The name specified for the version when it was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#name MlEngineModel#name}

---

### MlEngineModelTimeouts <a name="MlEngineModelTimeouts" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#create MlEngineModel#create}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#update MlEngineModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#create MlEngineModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#delete MlEngineModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/ml_engine_model#update MlEngineModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlEngineModelDefaultVersionOutputReference <a name="MlEngineModelDefaultVersionOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModelDefaultVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersionOutputReference.property.internalValue"></a>

```python
internal_value: MlEngineModelDefaultVersion
```

- *Type:* <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelDefaultVersion">MlEngineModelDefaultVersion</a>

---


### MlEngineModelTimeoutsOutputReference <a name="MlEngineModelTimeoutsOutputReference" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import ml_engine_model

mlEngineModel.MlEngineModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.mlEngineModel.MlEngineModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MlEngineModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.mlEngineModel.MlEngineModelTimeouts">MlEngineModelTimeouts</a>]

---



