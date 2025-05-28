# `parameterManagerRegionalParameterVersion` Submodule <a name="`parameterManagerRegionalParameterVersion` Submodule" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParameterManagerRegionalParameterVersion <a name="ParameterManagerRegionalParameterVersion" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version google_parameter_manager_regional_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parameter: str,
  parameter_data: str,
  parameter_version_id: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: ParameterManagerRegionalParameterVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.parameter">parameter</a></code> | <code>str</code> | Parameter Manager Regional Parameter resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.parameterData">parameter_data</a></code> | <code>str</code> | The Regional Parameter data. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#id ParameterManagerRegionalParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.parameter"></a>

- *Type:* str

Parameter Manager Regional Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#parameter ParameterManagerRegionalParameterVersion#parameter}

---

##### `parameter_data`<sup>Required</sup> <a name="parameter_data" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.parameterData"></a>

- *Type:* str

The Regional Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#parameter_data ParameterManagerRegionalParameterVersion#parameter_data}

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.parameterVersionId"></a>

- *Type:* str

Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#parameter_version_id ParameterManagerRegionalParameterVersion#parameter_version_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#disabled ParameterManagerRegionalParameterVersion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#id ParameterManagerRegionalParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#timeouts ParameterManagerRegionalParameterVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#create ParameterManagerRegionalParameterVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#delete ParameterManagerRegionalParameterVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#update ParameterManagerRegionalParameterVersion#update}.

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ParameterManagerRegionalParameterVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ParameterManagerRegionalParameterVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ParameterManagerRegionalParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ParameterManagerRegionalParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.kmsKeyVersion">kms_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference">ParameterManagerRegionalParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterDataInput">parameter_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterInput">parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionIdInput">parameter_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameter">parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterData">parameter_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `kms_key_version`<sup>Required</sup> <a name="kms_key_version" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.kmsKeyVersion"></a>

```python
kms_key_version: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeouts"></a>

```python
timeouts: ParameterManagerRegionalParameterVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference">ParameterManagerRegionalParameterVersionTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameter_data_input`<sup>Optional</sup> <a name="parameter_data_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterDataInput"></a>

```python
parameter_data_input: str
```

- *Type:* str

---

##### `parameter_input`<sup>Optional</sup> <a name="parameter_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterInput"></a>

```python
parameter_input: str
```

- *Type:* str

---

##### `parameter_version_id_input`<sup>Optional</sup> <a name="parameter_version_id_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionIdInput"></a>

```python
parameter_version_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ParameterManagerRegionalParameterVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

---

##### `parameter_data`<sup>Required</sup> <a name="parameter_data" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterData"></a>

```python
parameter_data: str
```

- *Type:* str

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.parameterVersionId"></a>

```python
parameter_version_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ParameterManagerRegionalParameterVersionConfig <a name="ParameterManagerRegionalParameterVersionConfig" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parameter: str,
  parameter_data: str,
  parameter_version_id: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: ParameterManagerRegionalParameterVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameter">parameter</a></code> | <code>str</code> | Parameter Manager Regional Parameter resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterData">parameter_data</a></code> | <code>str</code> | The Regional Parameter data. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterVersionId">parameter_version_id</a></code> | <code>str</code> | Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#id ParameterManagerRegionalParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameter"></a>

```python
parameter: str
```

- *Type:* str

Parameter Manager Regional Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#parameter ParameterManagerRegionalParameterVersion#parameter}

---

##### `parameter_data`<sup>Required</sup> <a name="parameter_data" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterData"></a>

```python
parameter_data: str
```

- *Type:* str

The Regional Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#parameter_data ParameterManagerRegionalParameterVersion#parameter_data}

---

##### `parameter_version_id`<sup>Required</sup> <a name="parameter_version_id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.parameterVersionId"></a>

```python
parameter_version_id: str
```

- *Type:* str

Version ID of the Regional Parameter Version Resource. This must be unique within the Regional Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#parameter_version_id ParameterManagerRegionalParameterVersion#parameter_version_id}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The current state of Regional Parameter Version. This field is only applicable for updating Regional Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#disabled ParameterManagerRegionalParameterVersion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#id ParameterManagerRegionalParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionConfig.property.timeouts"></a>

```python
timeouts: ParameterManagerRegionalParameterVersionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#timeouts ParameterManagerRegionalParameterVersion#timeouts}

---

### ParameterManagerRegionalParameterVersionTimeouts <a name="ParameterManagerRegionalParameterVersionTimeouts" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#create ParameterManagerRegionalParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#delete ParameterManagerRegionalParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#update ParameterManagerRegionalParameterVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#create ParameterManagerRegionalParameterVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#delete ParameterManagerRegionalParameterVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/parameter_manager_regional_parameter_version#update ParameterManagerRegionalParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParameterManagerRegionalParameterVersionTimeoutsOutputReference <a name="ParameterManagerRegionalParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import parameter_manager_regional_parameter_version

parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ParameterManagerRegionalParameterVersionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.parameterManagerRegionalParameterVersion.ParameterManagerRegionalParameterVersionTimeouts">ParameterManagerRegionalParameterVersionTimeouts</a>]

---



