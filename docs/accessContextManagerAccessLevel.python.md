# `accessContextManagerAccessLevel` Submodule <a name="`accessContextManagerAccessLevel` Submodule" id="@cdktf/provider-google.accessContextManagerAccessLevel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAccessLevel <a name="AccessContextManagerAccessLevel" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level google_access_context_manager_access_level}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevel(
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
  parent: str,
  title: str,
  basic: AccessContextManagerAccessLevelBasic = None,
  custom: AccessContextManagerAccessLevelCustom = None,
  description: str = None,
  id: str = None,
  timeouts: AccessContextManagerAccessLevelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.name">name</a></code> | <code>str</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.title">title</a></code> | <code>str</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the AccessLevel and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#id AccessContextManagerAccessLevel#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.name"></a>

- *Type:* str

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#name AccessContextManagerAccessLevel#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.parent"></a>

- *Type:* str

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#parent AccessContextManagerAccessLevel#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.title"></a>

- *Type:* str

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#title AccessContextManagerAccessLevel#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.basic"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#basic AccessContextManagerAccessLevel#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.custom"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#custom AccessContextManagerAccessLevel#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.description"></a>

- *Type:* str

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#description AccessContextManagerAccessLevel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#id AccessContextManagerAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#timeouts AccessContextManagerAccessLevel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic">put_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetBasic">reset_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_basic` <a name="put_basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic"></a>

```python
def put_basic(
  conditions: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditions]],
  combining_function: str = None
) -> None
```

###### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic.parameter.conditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#conditions AccessContextManagerAccessLevel#conditions}

---

###### `combining_function`<sup>Optional</sup> <a name="combining_function" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putBasic.parameter.combiningFunction"></a>

- *Type:* str

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#combining_function AccessContextManagerAccessLevel#combining_function}

---

##### `put_custom` <a name="put_custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putCustom"></a>

```python
def put_custom(
  expr: AccessContextManagerAccessLevelCustomExpr
) -> None
```

###### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putCustom.parameter.expr"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#expr AccessContextManagerAccessLevel#expr}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#create AccessContextManagerAccessLevel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#delete AccessContextManagerAccessLevel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#update AccessContextManagerAccessLevel#update}.

---

##### `reset_basic` <a name="reset_basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetBasic"></a>

```python
def reset_basic() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccessContextManagerAccessLevel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccessContextManagerAccessLevel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccessContextManagerAccessLevel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessContextManagerAccessLevel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference">AccessContextManagerAccessLevelBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference">AccessContextManagerAccessLevelCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference">AccessContextManagerAccessLevelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basicInput">basic_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.customInput">custom_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basic"></a>

```python
basic: AccessContextManagerAccessLevelBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference">AccessContextManagerAccessLevelBasicOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.custom"></a>

```python
custom: AccessContextManagerAccessLevelCustomOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference">AccessContextManagerAccessLevelCustomOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeouts"></a>

```python
timeouts: AccessContextManagerAccessLevelTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference">AccessContextManagerAccessLevelTimeoutsOutputReference</a>

---

##### `basic_input`<sup>Optional</sup> <a name="basic_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.basicInput"></a>

```python
basic_input: AccessContextManagerAccessLevelBasic
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.customInput"></a>

```python
custom_input: AccessContextManagerAccessLevelCustom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AccessContextManagerAccessLevelTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>, cdktf.IResolvable]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAccessLevelBasic <a name="AccessContextManagerAccessLevelBasic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic(
  conditions: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditions]],
  combining_function: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.combiningFunction">combining_function</a></code> | <code>str</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#conditions AccessContextManagerAccessLevel#conditions}

---

##### `combining_function`<sup>Optional</sup> <a name="combining_function" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic.property.combiningFunction"></a>

```python
combining_function: str
```

- *Type:* str

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#combining_function AccessContextManagerAccessLevel#combining_function}

---

### AccessContextManagerAccessLevelBasicConditions <a name="AccessContextManagerAccessLevelBasicConditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions(
  device_policy: AccessContextManagerAccessLevelBasicConditionsDevicePolicy = None,
  ip_subnetworks: typing.List[str] = None,
  members: typing.List[str] = None,
  negate: typing.Union[bool, IResolvable] = None,
  regions: typing.List[str] = None,
  required_access_levels: typing.List[str] = None,
  vpc_network_sources: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.members">members</a></code> | <code>typing.List[str]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.regions">regions</a></code> | <code>typing.List[str]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources">vpc_network_sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]</code> | vpc_network_sources block. |

---

##### `device_policy`<sup>Optional</sup> <a name="device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.devicePolicy"></a>

```python
device_policy: AccessContextManagerAccessLevelBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#device_policy AccessContextManagerAccessLevel#device_policy}

---

##### `ip_subnetworks`<sup>Optional</sup> <a name="ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#ip_subnetworks AccessContextManagerAccessLevel#ip_subnetworks}

---

##### `members`<sup>Optional</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#members AccessContextManagerAccessLevel#members}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#negate AccessContextManagerAccessLevel#negate}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#regions AccessContextManagerAccessLevel#regions}

---

##### `required_access_levels`<sup>Optional</sup> <a name="required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#required_access_levels AccessContextManagerAccessLevel#required_access_levels}

---

##### `vpc_network_sources`<sup>Optional</sup> <a name="vpc_network_sources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions.property.vpcNetworkSources"></a>

```python
vpc_network_sources: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#vpc_network_sources AccessContextManagerAccessLevel#vpc_network_sources}

---

### AccessContextManagerAccessLevelBasicConditionsDevicePolicy <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints">os_constraints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#allowed_device_management_levels AccessContextManagerAccessLevel#allowed_device_management_levels}

---

##### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#allowed_encryption_statuses AccessContextManagerAccessLevel#allowed_encryption_statuses}

---

##### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.osConstraints"></a>

```python
os_constraints: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#os_constraints AccessContextManagerAccessLevel#os_constraints}

---

##### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_admin_approval AccessContextManagerAccessLevel#require_admin_approval}

---

##### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_corp_owned AccessContextManagerAccessLevel#require_corp_owned}

---

##### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_screen_lock AccessContextManagerAccessLevel#require_screen_lock}

---

### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints(
  os_type: str,
  minimum_version: str = None,
  require_verified_chrome_os: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType">os_type</a></code> | <code>str</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">minimum_version</a></code> | <code>str</code> | The minimum allowed OS version. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs">require_verified_chrome_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access. |

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```python
os_type: str
```

- *Type:* str

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#os_type AccessContextManagerAccessLevel#os_type}

---

##### `minimum_version`<sup>Optional</sup> <a name="minimum_version" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#minimum_version AccessContextManagerAccessLevel#minimum_version}

---

##### `require_verified_chrome_os`<sup>Optional</sup> <a name="require_verified_chrome_os" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints.property.requireVerifiedChromeOs"></a>

```python
require_verified_chrome_os: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_verified_chrome_os AccessContextManagerAccessLevel#require_verified_chrome_os}

---

### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources(
  vpc_subnetwork: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork">vpc_subnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `vpc_subnetwork`<sup>Optional</sup> <a name="vpc_subnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```python
vpc_subnetwork: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#vpc_subnetwork AccessContextManagerAccessLevel#vpc_subnetwork}

---

### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork(
  network: str,
  vpc_ip_subnetworks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">network</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">vpc_ip_subnetworks</a></code> | <code>typing.List[str]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```python
network: str
```

- *Type:* str

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#network AccessContextManagerAccessLevel#network}

---

##### `vpc_ip_subnetworks`<sup>Optional</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```python
vpc_ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#vpc_ip_subnetworks AccessContextManagerAccessLevel#vpc_ip_subnetworks}

---

### AccessContextManagerAccessLevelConfig <a name="AccessContextManagerAccessLevelConfig" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  title: str,
  basic: AccessContextManagerAccessLevelBasic = None,
  custom: AccessContextManagerAccessLevelCustom = None,
  description: str = None,
  id: str = None,
  timeouts: AccessContextManagerAccessLevelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.name">name</a></code> | <code>str</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.parent">parent</a></code> | <code>str</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.title">title</a></code> | <code>str</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.description">description</a></code> | <code>str</code> | Description of the AccessLevel and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#id AccessContextManagerAccessLevel#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#name AccessContextManagerAccessLevel#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#parent AccessContextManagerAccessLevel#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#title AccessContextManagerAccessLevel#title}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.basic"></a>

```python
basic: AccessContextManagerAccessLevelBasic
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#basic AccessContextManagerAccessLevel#basic}

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.custom"></a>

```python
custom: AccessContextManagerAccessLevelCustom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#custom AccessContextManagerAccessLevel#custom}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#description AccessContextManagerAccessLevel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#id AccessContextManagerAccessLevel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelConfig.property.timeouts"></a>

```python
timeouts: AccessContextManagerAccessLevelTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#timeouts AccessContextManagerAccessLevel#timeouts}

---

### AccessContextManagerAccessLevelCustom <a name="AccessContextManagerAccessLevelCustom" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom(
  expr: AccessContextManagerAccessLevelCustomExpr
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a></code> | expr block. |

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom.property.expr"></a>

```python
expr: AccessContextManagerAccessLevelCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#expr AccessContextManagerAccessLevel#expr}

---

### AccessContextManagerAccessLevelCustomExpr <a name="AccessContextManagerAccessLevelCustomExpr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#expression AccessContextManagerAccessLevel#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#description AccessContextManagerAccessLevel#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#location AccessContextManagerAccessLevel#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#title AccessContextManagerAccessLevel#title}

---

### AccessContextManagerAccessLevelTimeouts <a name="AccessContextManagerAccessLevelTimeouts" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#create AccessContextManagerAccessLevel#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#delete AccessContextManagerAccessLevel#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#update AccessContextManagerAccessLevel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#create AccessContextManagerAccessLevel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#delete AccessContextManagerAccessLevel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#update AccessContextManagerAccessLevel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]

---


### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">reset_minimum_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs">reset_require_verified_chrome_os</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_version` <a name="reset_minimum_version" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```python
def reset_minimum_version() -> None
```

##### `reset_require_verified_chrome_os` <a name="reset_require_verified_chrome_os" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.resetRequireVerifiedChromeOs"></a>

```python
def reset_require_verified_chrome_os() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">minimum_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput">require_verified_chrome_os_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">minimum_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs">require_verified_chrome_os</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_version_input`<sup>Optional</sup> <a name="minimum_version_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```python
minimum_version_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `require_verified_chrome_os_input`<sup>Optional</sup> <a name="require_verified_chrome_os_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOsInput"></a>

```python
require_verified_chrome_os_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `minimum_version`<sup>Required</sup> <a name="minimum_version" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```python
minimum_version: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `require_verified_chrome_os`<sup>Required</sup> <a name="require_verified_chrome_os" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.requireVerifiedChromeOs"></a>

```python
require_verified_chrome_os: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>, cdktf.IResolvable]

---


### AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints">put_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">reset_allowed_device_management_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">reset_allowed_encryption_statuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints">reset_os_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">reset_require_admin_approval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">reset_require_corp_owned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">reset_require_screen_lock</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_os_constraints` <a name="put_os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```python
def put_os_constraints(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]

---

##### `reset_allowed_device_management_levels` <a name="reset_allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```python
def reset_allowed_device_management_levels() -> None
```

##### `reset_allowed_encryption_statuses` <a name="reset_allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```python
def reset_allowed_encryption_statuses() -> None
```

##### `reset_os_constraints` <a name="reset_os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```python
def reset_os_constraints() -> None
```

##### `reset_require_admin_approval` <a name="reset_require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```python
def reset_require_admin_approval() -> None
```

##### `reset_require_corp_owned` <a name="reset_require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```python
def reset_require_corp_owned() -> None
```

##### `reset_require_screen_lock` <a name="reset_require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```python
def reset_require_screen_lock() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints">os_constraints</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">allowed_device_management_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">allowed_encryption_statuses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">os_constraints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">require_admin_approval_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">require_corp_owned_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">require_screen_lock_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">allowed_device_management_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">allowed_encryption_statuses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">require_admin_approval</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">require_corp_owned</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">require_screen_lock</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `os_constraints`<sup>Required</sup> <a name="os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```python
os_constraints: AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `allowed_device_management_levels_input`<sup>Optional</sup> <a name="allowed_device_management_levels_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```python
allowed_device_management_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses_input`<sup>Optional</sup> <a name="allowed_encryption_statuses_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```python
allowed_encryption_statuses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `os_constraints_input`<sup>Optional</sup> <a name="os_constraints_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```python
os_constraints_input: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]

---

##### `require_admin_approval_input`<sup>Optional</sup> <a name="require_admin_approval_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```python
require_admin_approval_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned_input`<sup>Optional</sup> <a name="require_corp_owned_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```python
require_corp_owned_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock_input`<sup>Optional</sup> <a name="require_screen_lock_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```python
require_screen_lock_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_device_management_levels`<sup>Required</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```python
allowed_device_management_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_statuses`<sup>Required</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```python
allowed_encryption_statuses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_admin_approval`<sup>Required</sup> <a name="require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```python
require_admin_approval: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_corp_owned`<sup>Required</sup> <a name="require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```python
require_corp_owned: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_screen_lock`<sup>Required</sup> <a name="require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```python
require_screen_lock: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerAccessLevelBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---


### AccessContextManagerAccessLevelBasicConditionsList <a name="AccessContextManagerAccessLevelBasicConditionsList" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerAccessLevelBasicConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]

---


### AccessContextManagerAccessLevelBasicConditionsOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy">put_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources">put_vpc_network_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy">reset_device_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks">reset_ip_subnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers">reset_members</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels">reset_required_access_levels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources">reset_vpc_network_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_device_policy` <a name="put_device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy"></a>

```python
def put_device_policy(
  allowed_device_management_levels: typing.List[str] = None,
  allowed_encryption_statuses: typing.List[str] = None,
  os_constraints: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints]] = None,
  require_admin_approval: typing.Union[bool, IResolvable] = None,
  require_corp_owned: typing.Union[bool, IResolvable] = None,
  require_screen_lock: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_device_management_levels`<sup>Optional</sup> <a name="allowed_device_management_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.allowedDeviceManagementLevels"></a>

- *Type:* typing.List[str]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#allowed_device_management_levels AccessContextManagerAccessLevel#allowed_device_management_levels}

---

###### `allowed_encryption_statuses`<sup>Optional</sup> <a name="allowed_encryption_statuses" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.allowedEncryptionStatuses"></a>

- *Type:* typing.List[str]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#allowed_encryption_statuses AccessContextManagerAccessLevel#allowed_encryption_statuses}

---

###### `os_constraints`<sup>Optional</sup> <a name="os_constraints" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.osConstraints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints</a>]]

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#os_constraints AccessContextManagerAccessLevel#os_constraints}

---

###### `require_admin_approval`<sup>Optional</sup> <a name="require_admin_approval" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.requireAdminApproval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_admin_approval AccessContextManagerAccessLevel#require_admin_approval}

---

###### `require_corp_owned`<sup>Optional</sup> <a name="require_corp_owned" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.requireCorpOwned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_corp_owned AccessContextManagerAccessLevel#require_corp_owned}

---

###### `require_screen_lock`<sup>Optional</sup> <a name="require_screen_lock" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putDevicePolicy.parameter.requireScreenLock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#require_screen_lock AccessContextManagerAccessLevel#require_screen_lock}

---

##### `put_vpc_network_sources` <a name="put_vpc_network_sources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources"></a>

```python
def put_vpc_network_sources(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]

---

##### `reset_device_policy` <a name="reset_device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetDevicePolicy"></a>

```python
def reset_device_policy() -> None
```

##### `reset_ip_subnetworks` <a name="reset_ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetIpSubnetworks"></a>

```python
def reset_ip_subnetworks() -> None
```

##### `reset_members` <a name="reset_members" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetMembers"></a>

```python
def reset_members() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_required_access_levels` <a name="reset_required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```python
def reset_required_access_levels() -> None
```

##### `reset_vpc_network_sources` <a name="reset_vpc_network_sources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```python
def reset_vpc_network_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy">device_policy</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources">vpc_network_sources</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput">device_policy_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput">ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput">required_access_levels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput">vpc_network_sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks">ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels">required_access_levels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicy"></a>

```python
device_policy: AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference">AccessContextManagerAccessLevelBasicConditionsDevicePolicyOutputReference</a>

---

##### `vpc_network_sources`<sup>Required</sup> <a name="vpc_network_sources" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```python
vpc_network_sources: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList</a>

---

##### `device_policy_input`<sup>Optional</sup> <a name="device_policy_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.devicePolicyInput"></a>

```python
device_policy_input: AccessContextManagerAccessLevelBasicConditionsDevicePolicy
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsDevicePolicy">AccessContextManagerAccessLevelBasicConditionsDevicePolicy</a>

---

##### `ip_subnetworks_input`<sup>Optional</sup> <a name="ip_subnetworks_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```python
ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels_input`<sup>Optional</sup> <a name="required_access_levels_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```python
required_access_levels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_network_sources_input`<sup>Optional</sup> <a name="vpc_network_sources_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```python
vpc_network_sources_input: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]

---

##### `ip_subnetworks`<sup>Required</sup> <a name="ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.ipSubnetworks"></a>

```python
ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `required_access_levels`<sup>Required</sup> <a name="required_access_levels" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```python
required_access_levels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessContextManagerAccessLevelBasicConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]

---


### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]]

---


### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">put_vpc_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">reset_vpc_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_subnetwork` <a name="put_vpc_subnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```python
def put_vpc_subnetwork(
  network: str,
  vpc_ip_subnetworks: typing.List[str] = None
) -> None
```

###### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.network"></a>

- *Type:* str

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#network AccessContextManagerAccessLevel#network}

---

###### `vpc_ip_subnetworks`<sup>Optional</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.vpcIpSubnetworks"></a>

- *Type:* typing.List[str]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#vpc_ip_subnetworks AccessContextManagerAccessLevel#vpc_ip_subnetworks}

---

##### `reset_vpc_subnetwork` <a name="reset_vpc_subnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```python
def reset_vpc_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">vpc_subnetwork</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">vpc_subnetwork_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_subnetwork`<sup>Required</sup> <a name="vpc_subnetwork" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```python
vpc_subnetwork: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `vpc_subnetwork_input`<sup>Optional</sup> <a name="vpc_subnetwork_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```python
vpc_subnetwork_input: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSources</a>]

---


### AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">reset_vpc_ip_subnetworks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_ip_subnetworks` <a name="reset_vpc_ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```python
def reset_vpc_ip_subnetworks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">vpc_ip_subnetworks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">vpc_ip_subnetworks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `vpc_ip_subnetworks_input`<sup>Optional</sup> <a name="vpc_ip_subnetworks_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```python
vpc_ip_subnetworks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `vpc_ip_subnetworks`<sup>Required</sup> <a name="vpc_ip_subnetworks" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```python
vpc_ip_subnetworks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork">AccessContextManagerAccessLevelBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### AccessContextManagerAccessLevelBasicOutputReference <a name="AccessContextManagerAccessLevelBasicOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction">reset_combining_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]

---

##### `reset_combining_function` <a name="reset_combining_function" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.resetCombiningFunction"></a>

```python
def reset_combining_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList">AccessContextManagerAccessLevelBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput">combining_function_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction">combining_function</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditions"></a>

```python
conditions: AccessContextManagerAccessLevelBasicConditionsList
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditionsList">AccessContextManagerAccessLevelBasicConditionsList</a>

---

##### `combining_function_input`<sup>Optional</sup> <a name="combining_function_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunctionInput"></a>

```python
combining_function_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[AccessContextManagerAccessLevelBasicConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicConditions">AccessContextManagerAccessLevelBasicConditions</a>]]

---

##### `combining_function`<sup>Required</sup> <a name="combining_function" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.combiningFunction"></a>

```python
combining_function: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasicOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerAccessLevelBasic
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelBasic">AccessContextManagerAccessLevelBasic</a>

---


### AccessContextManagerAccessLevelCustomExprOutputReference <a name="AccessContextManagerAccessLevelCustomExprOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerAccessLevelCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

---


### AccessContextManagerAccessLevelCustomOutputReference <a name="AccessContextManagerAccessLevelCustomOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr">put_expr</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expr` <a name="put_expr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr"></a>

```python
def put_expr(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#expression AccessContextManagerAccessLevel#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.description"></a>

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#description AccessContextManagerAccessLevel#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#location AccessContextManagerAccessLevel#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.putExpr.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.14.0/docs/resources/access_context_manager_access_level#title AccessContextManagerAccessLevel#title}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.expr">expr</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference">AccessContextManagerAccessLevelCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.exprInput">expr_input</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expr`<sup>Required</sup> <a name="expr" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.expr"></a>

```python
expr: AccessContextManagerAccessLevelCustomExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExprOutputReference">AccessContextManagerAccessLevelCustomExprOutputReference</a>

---

##### `expr_input`<sup>Optional</sup> <a name="expr_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.exprInput"></a>

```python
expr_input: AccessContextManagerAccessLevelCustomExpr
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomExpr">AccessContextManagerAccessLevelCustomExpr</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustomOutputReference.property.internalValue"></a>

```python
internal_value: AccessContextManagerAccessLevelCustom
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelCustom">AccessContextManagerAccessLevelCustom</a>

---


### AccessContextManagerAccessLevelTimeoutsOutputReference <a name="AccessContextManagerAccessLevelTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import access_context_manager_access_level

accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AccessContextManagerAccessLevelTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.accessContextManagerAccessLevel.AccessContextManagerAccessLevelTimeouts">AccessContextManagerAccessLevelTimeouts</a>, cdktf.IResolvable]

---



