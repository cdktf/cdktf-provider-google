# `cloudbuildv2ConnectionIamMember` Submodule <a name="`cloudbuildv2ConnectionIamMember` Submodule" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloudbuildv2ConnectionIamMember <a name="Cloudbuildv2ConnectionIamMember" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member google_cloudbuildv2_connection_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember(
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
  condition: Cloudbuildv2ConnectionIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#member Cloudbuildv2ConnectionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#name Cloudbuildv2ConnectionIamMember#name}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#role Cloudbuildv2ConnectionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#id Cloudbuildv2ConnectionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#location Cloudbuildv2ConnectionIamMember#location}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#project Cloudbuildv2ConnectionIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#member Cloudbuildv2ConnectionIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#name Cloudbuildv2ConnectionIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#role Cloudbuildv2ConnectionIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#condition Cloudbuildv2ConnectionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#id Cloudbuildv2ConnectionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#location Cloudbuildv2ConnectionIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#project Cloudbuildv2ConnectionIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#expression Cloudbuildv2ConnectionIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#title Cloudbuildv2ConnectionIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#description Cloudbuildv2ConnectionIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Cloudbuildv2ConnectionIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Cloudbuildv2ConnectionIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Cloudbuildv2ConnectionIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Cloudbuildv2ConnectionIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Cloudbuildv2ConnectionIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference">Cloudbuildv2ConnectionIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.condition"></a>

```python
condition: Cloudbuildv2ConnectionIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference">Cloudbuildv2ConnectionIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.conditionInput"></a>

```python
condition_input: Cloudbuildv2ConnectionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Cloudbuildv2ConnectionIamMemberCondition <a name="Cloudbuildv2ConnectionIamMemberCondition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#expression Cloudbuildv2ConnectionIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#title Cloudbuildv2ConnectionIamMember#title}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#description Cloudbuildv2ConnectionIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#expression Cloudbuildv2ConnectionIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#title Cloudbuildv2ConnectionIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#description Cloudbuildv2ConnectionIamMember#description}.

---

### Cloudbuildv2ConnectionIamMemberConfig <a name="Cloudbuildv2ConnectionIamMemberConfig" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig(
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
  condition: Cloudbuildv2ConnectionIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#member Cloudbuildv2ConnectionIamMember#member}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#name Cloudbuildv2ConnectionIamMember#name}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#role Cloudbuildv2ConnectionIamMember#role}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#id Cloudbuildv2ConnectionIamMember#id}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#location Cloudbuildv2ConnectionIamMember#location}. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#project Cloudbuildv2ConnectionIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#member Cloudbuildv2ConnectionIamMember#member}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#name Cloudbuildv2ConnectionIamMember#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#role Cloudbuildv2ConnectionIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.condition"></a>

```python
condition: Cloudbuildv2ConnectionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#condition Cloudbuildv2ConnectionIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#id Cloudbuildv2ConnectionIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#location Cloudbuildv2ConnectionIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/cloudbuildv2_connection_iam_member#project Cloudbuildv2ConnectionIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloudbuildv2ConnectionIamMemberConditionOutputReference <a name="Cloudbuildv2ConnectionIamMemberConditionOutputReference" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import cloudbuildv2_connection_iam_member

cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: Cloudbuildv2ConnectionIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.cloudbuildv2ConnectionIamMember.Cloudbuildv2ConnectionIamMemberCondition">Cloudbuildv2ConnectionIamMemberCondition</a>

---



