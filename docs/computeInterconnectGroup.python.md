# `computeInterconnectGroup` Submodule <a name="`computeInterconnectGroup` Submodule" id="@cdktf/provider-google.computeInterconnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInterconnectGroup <a name="ComputeInterconnectGroup" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group google_compute_interconnect_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  intent: ComputeInterconnectGroupIntent,
  name: str,
  description: str = None,
  id: str = None,
  interconnects: typing.Union[IResolvable, typing.List[ComputeInterconnectGroupInterconnects]] = None,
  project: str = None,
  timeouts: ComputeInterconnectGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.intent">intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#id ComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.interconnects">interconnects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]</code> | interconnects block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#project ComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.intent"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#intent ComputeInterconnectGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#name ComputeInterconnectGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#description ComputeInterconnectGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#id ComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.interconnects"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#interconnects ComputeInterconnectGroup#interconnects}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#project ComputeInterconnectGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#timeouts ComputeInterconnectGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putIntent">put_intent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putInterconnects">put_interconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetInterconnects">reset_interconnects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_intent` <a name="put_intent" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putIntent"></a>

```python
def put_intent(
  topology_capability: str = None
) -> None
```

###### `topology_capability`<sup>Optional</sup> <a name="topology_capability" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putIntent.parameter.topologyCapability"></a>

- *Type:* str

The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs.

Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#topology_capability ComputeInterconnectGroup#topology_capability}

---

##### `put_interconnects` <a name="put_interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putInterconnects"></a>

```python
def put_interconnects(
  value: typing.Union[IResolvable, typing.List[ComputeInterconnectGroupInterconnects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putInterconnects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#create ComputeInterconnectGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#delete ComputeInterconnectGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#update ComputeInterconnectGroup#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interconnects` <a name="reset_interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetInterconnects"></a>

```python
def reset_interconnects() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInterconnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInterconnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInterconnectGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInterconnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInterconnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.configured">configured</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList">ComputeInterconnectGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference">ComputeInterconnectGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.interconnects">interconnects</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList">ComputeInterconnectGroupInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.physicalStructure">physical_structure</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList">ComputeInterconnectGroupPhysicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference">ComputeInterconnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.intentInput">intent_input</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.interconnectsInput">interconnects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.configured"></a>

```python
configured: ComputeInterconnectGroupConfiguredList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList">ComputeInterconnectGroupConfiguredList</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.intent"></a>

```python
intent: ComputeInterconnectGroupIntentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference">ComputeInterconnectGroupIntentOutputReference</a>

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.interconnects"></a>

```python
interconnects: ComputeInterconnectGroupInterconnectsList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList">ComputeInterconnectGroupInterconnectsList</a>

---

##### `physical_structure`<sup>Required</sup> <a name="physical_structure" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.physicalStructure"></a>

```python
physical_structure: ComputeInterconnectGroupPhysicalStructureList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList">ComputeInterconnectGroupPhysicalStructureList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.timeouts"></a>

```python
timeouts: ComputeInterconnectGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference">ComputeInterconnectGroupTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `intent_input`<sup>Optional</sup> <a name="intent_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.intentInput"></a>

```python
intent_input: ComputeInterconnectGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a>

---

##### `interconnects_input`<sup>Optional</sup> <a name="interconnects_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.interconnectsInput"></a>

```python
interconnects_input: typing.Union[IResolvable, typing.List[ComputeInterconnectGroupInterconnects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeInterconnectGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInterconnectGroupConfig <a name="ComputeInterconnectGroupConfig" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  intent: ComputeInterconnectGroupIntent,
  name: str,
  description: str = None,
  id: str = None,
  interconnects: typing.Union[IResolvable, typing.List[ComputeInterconnectGroupInterconnects]] = None,
  project: str = None,
  timeouts: ComputeInterconnectGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.intent">intent</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#id ComputeInterconnectGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.interconnects">interconnects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]</code> | interconnects block. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#project ComputeInterconnectGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.intent"></a>

```python
intent: ComputeInterconnectGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#intent ComputeInterconnectGroup#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#name ComputeInterconnectGroup#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#description ComputeInterconnectGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#id ComputeInterconnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.interconnects"></a>

```python
interconnects: typing.Union[IResolvable, typing.List[ComputeInterconnectGroupInterconnects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#interconnects ComputeInterconnectGroup#interconnects}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#project ComputeInterconnectGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfig.property.timeouts"></a>

```python
timeouts: ComputeInterconnectGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#timeouts ComputeInterconnectGroup#timeouts}

---

### ComputeInterconnectGroupConfigured <a name="ComputeInterconnectGroupConfigured" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfigured.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfigured()
```


### ComputeInterconnectGroupConfiguredTopologyCapability <a name="ComputeInterconnectGroupConfiguredTopologyCapability" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapability.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapability()
```


### ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers <a name="ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers()
```


### ComputeInterconnectGroupIntent <a name="ComputeInterconnectGroupIntent" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupIntent(
  topology_capability: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent.property.topologyCapability">topology_capability</a></code> | <code>str</code> | The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs. |

---

##### `topology_capability`<sup>Optional</sup> <a name="topology_capability" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent.property.topologyCapability"></a>

```python
topology_capability: str
```

- *Type:* str

The reliability the user intends this group to be capable of, in terms of the Interconnect product SLAs.

Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#topology_capability ComputeInterconnectGroup#topology_capability}

---

### ComputeInterconnectGroupInterconnects <a name="ComputeInterconnectGroupInterconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupInterconnects(
  name: str,
  interconnect: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#name ComputeInterconnectGroup#name}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects.property.interconnect">interconnect</a></code> | <code>str</code> | The URL of an Interconnect in this group. All Interconnects in the group are unique. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#name ComputeInterconnectGroup#name}.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

The URL of an Interconnect in this group. All Interconnects in the group are unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#interconnect ComputeInterconnectGroup#interconnect}

---

### ComputeInterconnectGroupPhysicalStructure <a name="ComputeInterconnectGroupPhysicalStructure" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructure.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructure()
```


### ComputeInterconnectGroupPhysicalStructureMetros <a name="ComputeInterconnectGroupPhysicalStructureMetros" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetros"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetros.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetros()
```


### ComputeInterconnectGroupPhysicalStructureMetrosFacilities <a name="ComputeInterconnectGroupPhysicalStructureMetrosFacilities" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilities.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilities()
```


### ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones <a name="ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones()
```


### ComputeInterconnectGroupTimeouts <a name="ComputeInterconnectGroupTimeouts" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#create ComputeInterconnectGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#delete ComputeInterconnectGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#update ComputeInterconnectGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#create ComputeInterconnectGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#delete ComputeInterconnectGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/compute_interconnect_group#update ComputeInterconnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInterconnectGroupConfiguredList <a name="ComputeInterconnectGroupConfiguredList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupConfiguredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupConfiguredOutputReference <a name="ComputeInterconnectGroupConfiguredOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability">topology_capability</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList">ComputeInterconnectGroupConfiguredTopologyCapabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfigured">ComputeInterconnectGroupConfigured</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology_capability`<sup>Required</sup> <a name="topology_capability" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.topologyCapability"></a>

```python
topology_capability: ComputeInterconnectGroupConfiguredTopologyCapabilityList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList">ComputeInterconnectGroupConfiguredTopologyCapabilityList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupConfigured
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfigured">ComputeInterconnectGroupConfigured</a>

---


### ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList <a name="ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference <a name="ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType">blocker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink">documentation_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation">explanation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities">facilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects">interconnects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros">metros</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blocker_type`<sup>Required</sup> <a name="blocker_type" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.blockerType"></a>

```python
blocker_type: str
```

- *Type:* str

---

##### `documentation_link`<sup>Required</sup> <a name="documentation_link" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.documentationLink"></a>

```python
documentation_link: str
```

- *Type:* str

---

##### `explanation`<sup>Required</sup> <a name="explanation" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.explanation"></a>

```python
explanation: str
```

- *Type:* str

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.facilities"></a>

```python
facilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.interconnects"></a>

```python
interconnects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.metros"></a>

```python
metros: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers">ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockers</a>

---


### ComputeInterconnectGroupConfiguredTopologyCapabilityList <a name="ComputeInterconnectGroupConfiguredTopologyCapabilityList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference <a name="ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers">intended_capability_blockers</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla">supported_sla</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapability">ComputeInterconnectGroupConfiguredTopologyCapability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intended_capability_blockers`<sup>Required</sup> <a name="intended_capability_blockers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.intendedCapabilityBlockers"></a>

```python
intended_capability_blockers: ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList">ComputeInterconnectGroupConfiguredTopologyCapabilityIntendedCapabilityBlockersList</a>

---

##### `supported_sla`<sup>Required</sup> <a name="supported_sla" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.supportedSla"></a>

```python
supported_sla: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapabilityOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupConfiguredTopologyCapability
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupConfiguredTopologyCapability">ComputeInterconnectGroupConfiguredTopologyCapability</a>

---


### ComputeInterconnectGroupIntentOutputReference <a name="ComputeInterconnectGroupIntentOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.resetTopologyCapability">reset_topology_capability</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_topology_capability` <a name="reset_topology_capability" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.resetTopologyCapability"></a>

```python
def reset_topology_capability() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput">topology_capability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.topologyCapability">topology_capability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `topology_capability_input`<sup>Optional</sup> <a name="topology_capability_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.topologyCapabilityInput"></a>

```python
topology_capability_input: str
```

- *Type:* str

---

##### `topology_capability`<sup>Required</sup> <a name="topology_capability" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.topologyCapability"></a>

```python
topology_capability: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntentOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupIntent
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupIntent">ComputeInterconnectGroupIntent</a>

---


### ComputeInterconnectGroupInterconnectsList <a name="ComputeInterconnectGroupInterconnectsList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupInterconnectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInterconnectGroupInterconnects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]]

---


### ComputeInterconnectGroupInterconnectsOutputReference <a name="ComputeInterconnectGroupInterconnectsOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect">reset_interconnect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interconnect` <a name="reset_interconnect" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.resetInterconnect"></a>

```python
def reset_interconnect() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput">interconnect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.interconnect">interconnect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interconnect_input`<sup>Optional</sup> <a name="interconnect_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.interconnectInput"></a>

```python
interconnect_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.interconnect"></a>

```python
interconnect: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInterconnectGroupInterconnects]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupInterconnects">ComputeInterconnectGroupInterconnects</a>]

---


### ComputeInterconnectGroupPhysicalStructureList <a name="ComputeInterconnectGroupPhysicalStructureList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupPhysicalStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList <a name="ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference <a name="ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility">facility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones">zones</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilities">ComputeInterconnectGroupPhysicalStructureMetrosFacilities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `facility`<sup>Required</sup> <a name="facility" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.facility"></a>

```python
facility: str
```

- *Type:* str

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.zones"></a>

```python
zones: ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList">ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupPhysicalStructureMetrosFacilities
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilities">ComputeInterconnectGroupPhysicalStructureMetrosFacilities</a>

---


### ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList <a name="ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference <a name="ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects">interconnects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.interconnects"></a>

```python
interconnects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones">ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesZones</a>

---


### ComputeInterconnectGroupPhysicalStructureMetrosList <a name="ComputeInterconnectGroupPhysicalStructureMetrosList" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInterconnectGroupPhysicalStructureMetrosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeInterconnectGroupPhysicalStructureMetrosOutputReference <a name="ComputeInterconnectGroupPhysicalStructureMetrosOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities">facilities</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro">metro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetros">ComputeInterconnectGroupPhysicalStructureMetros</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `facilities`<sup>Required</sup> <a name="facilities" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.facilities"></a>

```python
facilities: ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList">ComputeInterconnectGroupPhysicalStructureMetrosFacilitiesList</a>

---

##### `metro`<sup>Required</sup> <a name="metro" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.metro"></a>

```python
metro: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupPhysicalStructureMetros
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetros">ComputeInterconnectGroupPhysicalStructureMetros</a>

---


### ComputeInterconnectGroupPhysicalStructureOutputReference <a name="ComputeInterconnectGroupPhysicalStructureOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.metros">metros</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList">ComputeInterconnectGroupPhysicalStructureMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructure">ComputeInterconnectGroupPhysicalStructure</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metros`<sup>Required</sup> <a name="metros" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.metros"></a>

```python
metros: ComputeInterconnectGroupPhysicalStructureMetrosList
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureMetrosList">ComputeInterconnectGroupPhysicalStructureMetrosList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructureOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInterconnectGroupPhysicalStructure
```

- *Type:* <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupPhysicalStructure">ComputeInterconnectGroupPhysicalStructure</a>

---


### ComputeInterconnectGroupTimeoutsOutputReference <a name="ComputeInterconnectGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_interconnect_group

computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInterconnectGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeInterconnectGroup.ComputeInterconnectGroupTimeouts">ComputeInterconnectGroupTimeouts</a>]

---



