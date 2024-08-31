# `computeRegionAutoscaler` Submodule <a name="`computeRegionAutoscaler` Submodule" id="@cdktf/provider-google.computeRegionAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionAutoscaler <a name="ComputeRegionAutoscaler" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler google_compute_region_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscaler(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_policy: ComputeRegionAutoscalerAutoscalingPolicy,
  name: str,
  target: str,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionAutoscalerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.autoscalingPolicy">autoscaling_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.target">target</a></code> | <code>str</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.region">region</a></code> | <code>str</code> | URL of the region where the instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_policy`<sup>Required</sup> <a name="autoscaling_policy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.autoscalingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#autoscaling_policy ComputeRegionAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.target"></a>

- *Type:* str

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.region"></a>

- *Type:* str

URL of the region where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#region ComputeRegionAutoscaler#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#timeouts ComputeRegionAutoscaler#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy">put_autoscaling_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscaling_policy` <a name="put_autoscaling_policy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy"></a>

```python
def put_autoscaling_policy(
  max_replicas: typing.Union[int, float],
  min_replicas: typing.Union[int, float],
  cooldown_period: typing.Union[int, float] = None,
  cpu_utilization: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization = None,
  load_balancing_utilization: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization = None,
  metric: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyMetric]] = None,
  mode: str = None,
  scale_in_control: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl = None,
  scaling_schedules: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]] = None
) -> None
```

###### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.maxReplicas"></a>

- *Type:* typing.Union[int, float]

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#max_replicas ComputeRegionAutoscaler#max_replicas}

---

###### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.minReplicas"></a>

- *Type:* typing.Union[int, float]

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#min_replicas ComputeRegionAutoscaler#min_replicas}

---

###### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.cooldownPeriod"></a>

- *Type:* typing.Union[int, float]

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#cooldown_period ComputeRegionAutoscaler#cooldown_period}

---

###### `cpu_utilization`<sup>Optional</sup> <a name="cpu_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.cpuUtilization"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#cpu_utilization ComputeRegionAutoscaler#cpu_utilization}

---

###### `load_balancing_utilization`<sup>Optional</sup> <a name="load_balancing_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.loadBalancingUtilization"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#load_balancing_utilization ComputeRegionAutoscaler#load_balancing_utilization}

---

###### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.metric"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#metric ComputeRegionAutoscaler#metric}

---

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.mode"></a>

- *Type:* str

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#mode ComputeRegionAutoscaler#mode}

---

###### `scale_in_control`<sup>Optional</sup> <a name="scale_in_control" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.scaleInControl"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#scale_in_control ComputeRegionAutoscaler#scale_in_control}

---

###### `scaling_schedules`<sup>Optional</sup> <a name="scaling_schedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putAutoscalingPolicy.parameter.scalingSchedules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#scaling_schedules ComputeRegionAutoscaler#scaling_schedules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionAutoscaler resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscaler.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscaler.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscaler.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscaler.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionAutoscaler resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionAutoscaler to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionAutoscaler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionAutoscaler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicy">autoscaling_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference">ComputeRegionAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference">ComputeRegionAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicyInput">autoscaling_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.target">target</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_policy`<sup>Required</sup> <a name="autoscaling_policy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicy"></a>

```python
autoscaling_policy: ComputeRegionAutoscalerAutoscalingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference">ComputeRegionAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeouts"></a>

```python
timeouts: ComputeRegionAutoscalerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference">ComputeRegionAutoscalerTimeoutsOutputReference</a>

---

##### `autoscaling_policy_input`<sup>Optional</sup> <a name="autoscaling_policy_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.autoscalingPolicyInput"></a>

```python
autoscaling_policy_input: ComputeRegionAutoscalerAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionAutoscalerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.target"></a>

```python
target: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscaler.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionAutoscalerAutoscalingPolicy <a name="ComputeRegionAutoscalerAutoscalingPolicy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy(
  max_replicas: typing.Union[int, float],
  min_replicas: typing.Union[int, float],
  cooldown_period: typing.Union[int, float] = None,
  cpu_utilization: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization = None,
  load_balancing_utilization: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization = None,
  metric: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyMetric]] = None,
  mode: str = None,
  scale_in_control: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl = None,
  scaling_schedules: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod">cooldown_period</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization">cpu_utilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">load_balancing_utilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.metric">metric</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]</code> | metric block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.mode">mode</a></code> | <code>str</code> | Defines operating mode for this policy. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl">scale_in_control</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules">scaling_schedules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]</code> | scaling_schedules block. |

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#max_replicas ComputeRegionAutoscaler#max_replicas}

---

##### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#min_replicas ComputeRegionAutoscaler#min_replicas}

---

##### `cooldown_period`<sup>Optional</sup> <a name="cooldown_period" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```python
cooldown_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#cooldown_period ComputeRegionAutoscaler#cooldown_period}

---

##### `cpu_utilization`<sup>Optional</sup> <a name="cpu_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```python
cpu_utilization: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#cpu_utilization ComputeRegionAutoscaler#cpu_utilization}

---

##### `load_balancing_utilization`<sup>Optional</sup> <a name="load_balancing_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```python
load_balancing_utilization: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#load_balancing_utilization ComputeRegionAutoscaler#load_balancing_utilization}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.metric"></a>

```python
metric: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#metric ComputeRegionAutoscaler#metric}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

Defines operating mode for this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#mode ComputeRegionAutoscaler#mode}

---

##### `scale_in_control`<sup>Optional</sup> <a name="scale_in_control" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```python
scale_in_control: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#scale_in_control ComputeRegionAutoscaler#scale_in_control}

---

##### `scaling_schedules`<sup>Optional</sup> <a name="scaling_schedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```python
scaling_schedules: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]

scaling_schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#scaling_schedules ComputeRegionAutoscaler#scaling_schedules}

---

### ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization <a name="ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization(
  target: typing.Union[int, float],
  predictive_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target">target</a></code> | <code>typing.Union[int, float]</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">predictive_method</a></code> | <code>str</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `predictive_method`<sup>Optional</sup> <a name="predictive_method" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```python
predictive_method: str
```

- *Type:* str

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#predictive_method ComputeRegionAutoscaler#predictive_method}

---

### ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization(
  target: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">target</a></code> | <code>typing.Union[int, float]</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

### ComputeRegionAutoscalerAutoscalingPolicyMetric <a name="ComputeRegionAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric(
  name: str,
  filter: str = None,
  single_instance_assignment: typing.Union[int, float] = None,
  target: typing.Union[int, float] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.name">name</a></code> | <code>str</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.filter">filter</a></code> | <code>str</code> | A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment">single_instance_assignment</a></code> | <code>typing.Union[int, float]</code> | If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.target">target</a></code> | <code>typing.Union[int, float]</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.type">type</a></code> | <code>str</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.name"></a>

```python
name: str
```

- *Type:* str

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.filter"></a>

```python
filter: str
```

- *Type:* str

A filter string to be used as the filter string for a Stackdriver Monitoring TimeSeries.list API call. This filter is used to select a specific TimeSeries for the purpose of autoscaling and to determine whether the metric is exporting per-instance or per-group data.

You can only use the AND operator for joining selectors.
You can only use direct equality comparison operator (=) without
any functions for each selector.
You can specify the metric in both the filter string and in the
metric field. However, if specified in both places, the metric must
be identical.

The monitored resource type determines what kind of values are
expected for the metric. If it is a gce_instance, the autoscaler
expects the metric to include a separate TimeSeries for each
instance in a group. In such a case, you cannot filter on resource
labels.

If the resource type is any other value, the autoscaler expects
this metric to contain values that apply to the entire autoscaled
instance group and resource label filtering can be performed to
point autoscaler at the correct TimeSeries to scale upon.
This is called a per-group metric for the purpose of autoscaling.

If not specified, the type defaults to gce_instance.

You should provide a filter that is selective enough to pick just
one TimeSeries for the autoscaled group or for each of the instances
(if you are using gce_instance resource type). If multiple
TimeSeries are returned upon the query execution, the autoscaler
will sum their respective values to obtain its scaling value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#filter ComputeRegionAutoscaler#filter}

---

##### `single_instance_assignment`<sup>Optional</sup> <a name="single_instance_assignment" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.singleInstanceAssignment"></a>

```python
single_instance_assignment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If scaling is based on a per-group metric value that represents the total amount of work to be done or resource usage, set this value to an amount assigned for a single instance of the scaled group.

The autoscaler will keep the number of instances proportional to the
value of this metric, the metric itself should not change value due
to group resizing.

For example, a good metric to use with the target is
'pubsub.googleapis.com/subscription/num_undelivered_messages'
or a custom metric exporting the total number of requests coming to
your instances.

A bad example would be a metric exporting an average or median
latency, since this value can't include a chunk assignable to a
single instance, it could be better used with utilization_target
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#single_instance_assignment ComputeRegionAutoscaler#single_instance_assignment}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric.property.type"></a>

```python
type: str
```

- *Type:* str

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#type ComputeRegionAutoscaler#type}

---

### ComputeRegionAutoscalerAutoscalingPolicyScaleInControl <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl(
  max_scaled_in_replicas: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas = None,
  time_window_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">max_scaled_in_replicas</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">time_window_sec</a></code> | <code>typing.Union[int, float]</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `max_scaled_in_replicas`<sup>Optional</sup> <a name="max_scaled_in_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```python
max_scaled_in_replicas: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#max_scaled_in_replicas ComputeRegionAutoscaler#max_scaled_in_replicas}

---

##### `time_window_sec`<sup>Optional</sup> <a name="time_window_sec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```python
time_window_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#time_window_sec ComputeRegionAutoscaler#time_window_sec}

---

### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas(
  fixed: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#fixed ComputeRegionAutoscaler#fixed}

---

##### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#percent ComputeRegionAutoscaler#percent}

---

### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules(
  duration_sec: typing.Union[int, float],
  min_required_replicas: typing.Union[int, float],
  name: str,
  schedule: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">duration_sec</a></code> | <code>typing.Union[int, float]</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">min_required_replicas</a></code> | <code>typing.Union[int, float]</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">schedule</a></code> | <code>str</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description">description</a></code> | <code>str</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone to be used when interpreting the schedule. |

---

##### `duration_sec`<sup>Required</sup> <a name="duration_sec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```python
duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#duration_sec ComputeRegionAutoscaler#duration_sec}

---

##### `min_required_replicas`<sup>Required</sup> <a name="min_required_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```python
min_required_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#min_required_replicas ComputeRegionAutoscaler#min_required_replicas}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#schedule ComputeRegionAutoscaler#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```python
description: str
```

- *Type:* str

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#disabled ComputeRegionAutoscaler#disabled}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#time_zone ComputeRegionAutoscaler#time_zone}

---

### ComputeRegionAutoscalerConfig <a name="ComputeRegionAutoscalerConfig" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autoscaling_policy: ComputeRegionAutoscalerAutoscalingPolicy,
  name: str,
  target: str,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionAutoscalerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.autoscalingPolicy">autoscaling_policy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.target">target</a></code> | <code>str</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.region">region</a></code> | <code>str</code> | URL of the region where the instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaling_policy`<sup>Required</sup> <a name="autoscaling_policy" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.autoscalingPolicy"></a>

```python
autoscaling_policy: ComputeRegionAutoscalerAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#autoscaling_policy ComputeRegionAutoscaler#autoscaling_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#name ComputeRegionAutoscaler#name}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.target"></a>

```python
target: str
```

- *Type:* str

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#description ComputeRegionAutoscaler#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#id ComputeRegionAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#project ComputeRegionAutoscaler#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

URL of the region where the instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#region ComputeRegionAutoscaler#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionAutoscalerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#timeouts ComputeRegionAutoscaler#timeouts}

---

### ComputeRegionAutoscalerTimeouts <a name="ComputeRegionAutoscalerTimeouts" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#create ComputeRegionAutoscaler#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#delete ComputeRegionAutoscaler#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#update ComputeRegionAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">reset_predictive_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_predictive_method` <a name="reset_predictive_method" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```python
def reset_predictive_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">predictive_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">predictive_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predictive_method_input`<sup>Optional</sup> <a name="predictive_method_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```python
predictive_method_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `predictive_method`<sup>Required</sup> <a name="predictive_method" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```python
predictive_method: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyMetricList <a name="ComputeRegionAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]

---


### ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment">reset_single_instance_assignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_single_instance_assignment` <a name="reset_single_instance_assignment" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetSingleInstanceAssignment"></a>

```python
def reset_single_instance_assignment() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput">single_instance_assignment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">target_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment">single_instance_assignment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target">target</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `single_instance_assignment_input`<sup>Optional</sup> <a name="single_instance_assignment_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignmentInput"></a>

```python
single_instance_assignment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```python
target_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `single_instance_assignment`<sup>Required</sup> <a name="single_instance_assignment" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.singleInstanceAssignment"></a>

```python
single_instance_assignment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```python
target: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionAutoscalerAutoscalingPolicyMetric]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]

---


### ComputeRegionAutoscalerAutoscalingPolicyOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">put_cpu_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">put_load_balancing_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">put_scale_in_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">put_scaling_schedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">reset_cooldown_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">reset_cpu_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">reset_load_balancing_utilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric">reset_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">reset_scale_in_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">reset_scaling_schedules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cpu_utilization` <a name="put_cpu_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```python
def put_cpu_utilization(
  target: typing.Union[int, float],
  predictive_method: str = None
) -> None
```

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.target"></a>

- *Type:* typing.Union[int, float]

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

###### `predictive_method`<sup>Optional</sup> <a name="predictive_method" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.predictiveMethod"></a>

- *Type:* str

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#predictive_method ComputeRegionAutoscaler#predictive_method}

---

##### `put_load_balancing_utilization` <a name="put_load_balancing_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```python
def put_load_balancing_utilization(
  target: typing.Union[int, float]
) -> None
```

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.target"></a>

- *Type:* typing.Union[int, float]

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#target ComputeRegionAutoscaler#target}

---

##### `put_metric` <a name="put_metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```python
def put_metric(
  value: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyMetric]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]

---

##### `put_scale_in_control` <a name="put_scale_in_control" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```python
def put_scale_in_control(
  max_scaled_in_replicas: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas = None,
  time_window_sec: typing.Union[int, float] = None
) -> None
```

###### `max_scaled_in_replicas`<sup>Optional</sup> <a name="max_scaled_in_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.maxScaledInReplicas"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#max_scaled_in_replicas ComputeRegionAutoscaler#max_scaled_in_replicas}

---

###### `time_window_sec`<sup>Optional</sup> <a name="time_window_sec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.timeWindowSec"></a>

- *Type:* typing.Union[int, float]

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#time_window_sec ComputeRegionAutoscaler#time_window_sec}

---

##### `put_scaling_schedules` <a name="put_scaling_schedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```python
def put_scaling_schedules(
  value: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]

---

##### `reset_cooldown_period` <a name="reset_cooldown_period" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```python
def reset_cooldown_period() -> None
```

##### `reset_cpu_utilization` <a name="reset_cpu_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```python
def reset_cpu_utilization() -> None
```

##### `reset_load_balancing_utilization` <a name="reset_load_balancing_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```python
def reset_load_balancing_utilization() -> None
```

##### `reset_metric` <a name="reset_metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```python
def reset_metric() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_scale_in_control` <a name="reset_scale_in_control" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```python
def reset_scale_in_control() -> None
```

##### `reset_scaling_schedules` <a name="reset_scaling_schedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```python
def reset_scaling_schedules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">cpu_utilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">load_balancing_utilization</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList">ComputeRegionAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">scale_in_control</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">scaling_schedules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">cooldown_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">cpu_utilization_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">load_balancing_utilization_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">max_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput">metric_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">min_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">scale_in_control_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">scaling_schedules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">cooldown_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_utilization`<sup>Required</sup> <a name="cpu_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```python
cpu_utilization: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `load_balancing_utilization`<sup>Required</sup> <a name="load_balancing_utilization" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```python
load_balancing_utilization: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```python
metric: ComputeRegionAutoscalerAutoscalingPolicyMetricList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetricList">ComputeRegionAutoscalerAutoscalingPolicyMetricList</a>

---

##### `scale_in_control`<sup>Required</sup> <a name="scale_in_control" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```python
scale_in_control: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `scaling_schedules`<sup>Required</sup> <a name="scaling_schedules" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```python
scaling_schedules: ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `cooldown_period_input`<sup>Optional</sup> <a name="cooldown_period_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```python
cooldown_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_utilization_input`<sup>Optional</sup> <a name="cpu_utilization_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```python
cpu_utilization_input: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization">ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `load_balancing_utilization_input`<sup>Optional</sup> <a name="load_balancing_utilization_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```python
load_balancing_utilization_input: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `max_replicas_input`<sup>Optional</sup> <a name="max_replicas_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```python
max_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```python
metric_input: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyMetric]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyMetric">ComputeRegionAutoscalerAutoscalingPolicyMetric</a>]]

---

##### `min_replicas_input`<sup>Optional</sup> <a name="min_replicas_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```python
min_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `scale_in_control_input`<sup>Optional</sup> <a name="scale_in_control_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```python
scale_in_control_input: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `scaling_schedules_input`<sup>Optional</sup> <a name="scaling_schedules_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```python
scaling_schedules_input: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]

---

##### `cooldown_period`<sup>Required</sup> <a name="cooldown_period" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```python
cooldown_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionAutoscalerAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicy">ComputeRegionAutoscalerAutoscalingPolicy</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">reset_fixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">reset_percent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fixed` <a name="reset_fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```python
def reset_fixed() -> None
```

##### `reset_percent` <a name="reset_percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```python
def reset_percent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">fixed_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">fixed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_input`<sup>Optional</sup> <a name="fixed_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```python
fixed_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent_input`<sup>Optional</sup> <a name="percent_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```python
percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```python
fixed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```python
percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">put_max_scaled_in_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">reset_max_scaled_in_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">reset_time_window_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_max_scaled_in_replicas` <a name="put_max_scaled_in_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```python
def put_max_scaled_in_replicas(
  fixed: typing.Union[int, float] = None,
  percent: typing.Union[int, float] = None
) -> None
```

###### `fixed`<sup>Optional</sup> <a name="fixed" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.fixed"></a>

- *Type:* typing.Union[int, float]

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#fixed ComputeRegionAutoscaler#fixed}

---

###### `percent`<sup>Optional</sup> <a name="percent" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.percent"></a>

- *Type:* typing.Union[int, float]

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/compute_region_autoscaler#percent ComputeRegionAutoscaler#percent}

---

##### `reset_max_scaled_in_replicas` <a name="reset_max_scaled_in_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```python
def reset_max_scaled_in_replicas() -> None
```

##### `reset_time_window_sec` <a name="reset_time_window_sec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```python
def reset_time_window_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">max_scaled_in_replicas</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">max_scaled_in_replicas_input</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">time_window_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">time_window_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_scaled_in_replicas`<sup>Required</sup> <a name="max_scaled_in_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```python
max_scaled_in_replicas: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `max_scaled_in_replicas_input`<sup>Optional</sup> <a name="max_scaled_in_replicas_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```python
max_scaled_in_replicas_input: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `time_window_sec_input`<sup>Optional</sup> <a name="time_window_sec_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```python
time_window_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_window_sec`<sup>Required</sup> <a name="time_window_sec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```python
time_window_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```python
internal_value: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScaleInControl">ComputeRegionAutoscalerAutoscalingPolicyScaleInControl</a>

---


### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]]

---


### ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">duration_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">min_required_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">duration_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">min_required_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration_sec_input`<sup>Optional</sup> <a name="duration_sec_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```python
duration_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_required_replicas_input`<sup>Optional</sup> <a name="min_required_replicas_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```python
min_required_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `duration_sec`<sup>Required</sup> <a name="duration_sec" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```python
duration_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_required_replicas`<sup>Required</sup> <a name="min_required_replicas" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```python
min_required_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules">ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules</a>]

---


### ComputeRegionAutoscalerTimeoutsOutputReference <a name="ComputeRegionAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_autoscaler

computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionAutoscalerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionAutoscaler.ComputeRegionAutoscalerTimeouts">ComputeRegionAutoscalerTimeouts</a>]

---



