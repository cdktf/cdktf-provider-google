# `networkSecurityAddressGroupIamBinding` Submodule <a name="`networkSecurityAddressGroupIamBinding` Submodule" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityAddressGroupIamBinding <a name="NetworkSecurityAddressGroupIamBinding" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding google_network_security_address_group_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  name: str,
  role: str,
  condition: NetworkSecurityAddressGroupIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#members NetworkSecurityAddressGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#name NetworkSecurityAddressGroupIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#role NetworkSecurityAddressGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#id NetworkSecurityAddressGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#location NetworkSecurityAddressGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#project NetworkSecurityAddressGroupIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.members"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#members NetworkSecurityAddressGroupIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#name NetworkSecurityAddressGroupIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#role NetworkSecurityAddressGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#condition NetworkSecurityAddressGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#id NetworkSecurityAddressGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#location NetworkSecurityAddressGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#project NetworkSecurityAddressGroupIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#expression NetworkSecurityAddressGroupIamBinding#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#title NetworkSecurityAddressGroupIamBinding#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#description NetworkSecurityAddressGroupIamBinding#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkSecurityAddressGroupIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkSecurityAddressGroupIamBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkSecurityAddressGroupIamBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkSecurityAddressGroupIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityAddressGroupIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference">NetworkSecurityAddressGroupIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.membersInput">members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.members">members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.condition"></a>

```python
condition: NetworkSecurityAddressGroupIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference">NetworkSecurityAddressGroupIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.conditionInput"></a>

```python
condition_input: NetworkSecurityAddressGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `members_input`<sup>Optional</sup> <a name="members_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.membersInput"></a>

```python
members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityAddressGroupIamBindingCondition <a name="NetworkSecurityAddressGroupIamBindingCondition" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#expression NetworkSecurityAddressGroupIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#title NetworkSecurityAddressGroupIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#description NetworkSecurityAddressGroupIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#expression NetworkSecurityAddressGroupIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#title NetworkSecurityAddressGroupIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#description NetworkSecurityAddressGroupIamBinding#description}.

---

### NetworkSecurityAddressGroupIamBindingConfig <a name="NetworkSecurityAddressGroupIamBindingConfig" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  members: typing.List[str],
  name: str,
  role: str,
  condition: NetworkSecurityAddressGroupIamBindingCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.members">members</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#members NetworkSecurityAddressGroupIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#name NetworkSecurityAddressGroupIamBinding#name}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#role NetworkSecurityAddressGroupIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#id NetworkSecurityAddressGroupIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#location NetworkSecurityAddressGroupIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#project NetworkSecurityAddressGroupIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.members"></a>

```python
members: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#members NetworkSecurityAddressGroupIamBinding#members}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#name NetworkSecurityAddressGroupIamBinding#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#role NetworkSecurityAddressGroupIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.condition"></a>

```python
condition: NetworkSecurityAddressGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#condition NetworkSecurityAddressGroupIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#id NetworkSecurityAddressGroupIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#location NetworkSecurityAddressGroupIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_address_group_iam_binding#project NetworkSecurityAddressGroupIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityAddressGroupIamBindingConditionOutputReference <a name="NetworkSecurityAddressGroupIamBindingConditionOutputReference" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_security_address_group_iam_binding

networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkSecurityAddressGroupIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityAddressGroupIamBinding.NetworkSecurityAddressGroupIamBindingCondition">NetworkSecurityAddressGroupIamBindingCondition</a>

---



