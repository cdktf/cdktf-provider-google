# `kmsEkmConnectionIamMember` Submodule <a name="`kmsEkmConnectionIamMember` Submodule" id="@cdktf/provider-google.kmsEkmConnectionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsEkmConnectionIamMember <a name="KmsEkmConnectionIamMember" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member google_kms_ekm_connection_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  name: str,
  role: str,
  condition: KmsEkmConnectionIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#member KmsEkmConnectionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#name KmsEkmConnectionIamMember#name}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#role KmsEkmConnectionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#id KmsEkmConnectionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#location KmsEkmConnectionIamMember#location}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#project KmsEkmConnectionIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#member KmsEkmConnectionIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#name KmsEkmConnectionIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#role KmsEkmConnectionIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#condition KmsEkmConnectionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#id KmsEkmConnectionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#location KmsEkmConnectionIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#project KmsEkmConnectionIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#expression KmsEkmConnectionIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#title KmsEkmConnectionIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#description KmsEkmConnectionIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsEkmConnectionIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsEkmConnectionIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsEkmConnectionIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsEkmConnectionIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsEkmConnectionIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference">KmsEkmConnectionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.condition"></a>

```python
condition: KmsEkmConnectionIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference">KmsEkmConnectionIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.conditionInput"></a>

```python
condition_input: KmsEkmConnectionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsEkmConnectionIamMemberCondition <a name="KmsEkmConnectionIamMemberCondition" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#expression KmsEkmConnectionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#title KmsEkmConnectionIamMember#title}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#description KmsEkmConnectionIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#expression KmsEkmConnectionIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#title KmsEkmConnectionIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#description KmsEkmConnectionIamMember#description}.

---

### KmsEkmConnectionIamMemberConfig <a name="KmsEkmConnectionIamMemberConfig" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  member: str,
  name: str,
  role: str,
  condition: KmsEkmConnectionIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#member KmsEkmConnectionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#name KmsEkmConnectionIamMember#name}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#role KmsEkmConnectionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#id KmsEkmConnectionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#location KmsEkmConnectionIamMember#location}. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#project KmsEkmConnectionIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#member KmsEkmConnectionIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#name KmsEkmConnectionIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#role KmsEkmConnectionIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.condition"></a>

```python
condition: KmsEkmConnectionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#condition KmsEkmConnectionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#id KmsEkmConnectionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#location KmsEkmConnectionIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/kms_ekm_connection_iam_member#project KmsEkmConnectionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsEkmConnectionIamMemberConditionOutputReference <a name="KmsEkmConnectionIamMemberConditionOutputReference" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import kms_ekm_connection_iam_member

kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: KmsEkmConnectionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.kmsEkmConnectionIamMember.KmsEkmConnectionIamMemberCondition">KmsEkmConnectionIamMemberCondition</a>

---



